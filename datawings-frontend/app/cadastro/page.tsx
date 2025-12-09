"use client";

import {
  Container,
  TextField,
  Button,
  IconButton,
  InputAdornment,
  Stepper,
  Step,
  StepLabel,
  Box,
  Typography,
  Paper,
} from "@mui/material";

import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { useSnackbar } from "notistack";
import { cadastrarUsuario } from "@/app/services/usuarioService";

const textFieldStyles = {
  "& .MuiOutlinedInput-root": {
    borderRadius: 2,
    backgroundColor: "#0c1724",
    color: "#fff",
    "& fieldset": { borderColor: "#1f2a38" },
    "&:hover fieldset": { borderColor: "#ff6600" },
    "&.Mui-focused fieldset": { borderColor: "#ff6600" },
  },
  "& .MuiInputLabel-root": { color: "#ccc" },
  "& .MuiOutlinedInput-input": { color: "#fff" },
};

const avaliarForcaSenha = (s: string) => {
  if (!s) return "";
  if (s.length < 6) return "Fraca";

  const temNumero = /\d/.test(s);
  const temEspecial = /[!@#$%^&*(),.?":{}|<>]/.test(s);

  if (temNumero && temEspecial) return "Forte";
  if (temNumero || temEspecial) return "Média";

  return "Fraca";
};

export default function RegisterPage() {
  const { enqueueSnackbar } = useSnackbar();

  const [form, setForm] = useState({
    nome: "",
    email: "",
    codigoEmpresa: "",
    senha: "",
    confirmarSenha: "",
  });

  const [forcaSenha, setForcaSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mostrarConfirmarSenha, setMostrarConfirmarSenha] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const steps = ["Dados Pessoais", "Código da Empresa", "Segurança"];

  const updateField = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const validarStep = () => {
    if (activeStep === 0) {
      if (!form.nome)
        return enqueueSnackbar("O campo Nome é obrigatório", { variant: "warning" });
      if (!form.email.includes("@"))
        return enqueueSnackbar("Digite um email válido", { variant: "warning" });
    }

    if (activeStep === 1) {
      if (!form.codigoEmpresa)
        return enqueueSnackbar("O código da empresa é obrigatório", { variant: "warning" });

      if (form.codigoEmpresa.length < 4)
        return enqueueSnackbar("Código inválido (mínimo 4 caracteres)", { variant: "error" });
    }

    return true;
  };

  const handleNext = () => {
    if (!validarStep()) return;

    if (activeStep < steps.length - 1) return setActiveStep(activeStep + 1);

    handleSubmit();
  };

  const handleBack = () => {
    if (activeStep > 0) setActiveStep(activeStep - 1);
  };

  const handleSubmit = async () => {
    if (!form.senha)
      return enqueueSnackbar("O campo Senha é obrigatório", { variant: "warning" });

    if (form.senha !== form.confirmarSenha)
      return enqueueSnackbar("As senhas não coincidem", { variant: "error" });

    try {
      await cadastrarUsuario(form);
      enqueueSnackbar("Cadastro realizado com sucesso!", { variant: "success" });
    } catch (error: any) {
      enqueueSnackbar(error.message, { variant: "error" });
    }
  };

  return (
    <>
      <Navbar />

      <Box sx={{ backgroundColor: "#ffffff", minHeight: "70vh", py: 6 }}>
        <Container maxWidth="sm">
          <Paper
            elevation={4}
            sx={{
              backgroundColor: "#0c1724",
              color: "#fff",
              p: 4,
              borderRadius: 3,
              border: "1px solid #1f2a38",
            }}
          >
            <Typography
              variant="h4"
              fontWeight={700}
              textAlign="center"
              color="#ff6600"
              mb={3}
            >
              Criar Conta
            </Typography>

            {/* 🟧 STEPPER */}
            <Stepper
              activeStep={activeStep}
              alternativeLabel
              sx={{
                mb: 4,
                "& .MuiStepLabel-label": { color: "#ccc" },
                "& .MuiStepIcon-root": { color: "#ccc" },
                "& .MuiStepIcon-active": { color: "#ff6600" },
                "& .MuiStepIcon-completed": { color: "#ff6600" },
              }}
            >
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>

            {/* FORM */}
            <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {/* STEP 1 */}
              {activeStep === 0 && (
                <>
                  <TextField
                    label="Nome"
                    value={form.nome}
                    onChange={(e) => updateField("nome", e.target.value)}
                    fullWidth
                    sx={textFieldStyles}
                  />

                  <TextField
                    label="Email"
                    type="email"
                    value={form.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    error={!form.email.includes("@") && form.email.length > 0}
                    helperText={
                      !form.email.includes("@") && form.email.length > 0
                        ? "Digite um email válido"
                        : ""
                    }
                    fullWidth
                    sx={textFieldStyles}
                  />
                </>
              )}

              {/* STEP 2 */}
              {activeStep === 1 && (
                <TextField
                  label="Código da Empresa"
                  value={form.codigoEmpresa}
                  onChange={(e) => updateField("codigoEmpresa", e.target.value)}
                  fullWidth
                  sx={textFieldStyles}
                />
              )}

              {/* STEP 3 */}
              {activeStep === 2 && (
                <>
                  <TextField
                    label="Senha"
                    type={mostrarSenha ? "text" : "password"}
                    value={form.senha}
                    onChange={(e) => {
                      updateField("senha", e.target.value);
                      setForcaSenha(avaliarForcaSenha(e.target.value));
                    }}
                    fullWidth
                    sx={textFieldStyles}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={() => setMostrarSenha(!mostrarSenha)} edge="end" sx={{ color: "#ff6600" }}>
                            {mostrarSenha ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />

                  {forcaSenha && (
                    <Typography
                      sx={{
                        color:
                          forcaSenha === "Fraca"
                            ? "red"
                            : forcaSenha === "Média"
                            ? "orange"
                            : "lightgreen",
                        fontSize: "14px",
                      }}
                    >
                      Força da senha: {forcaSenha}
                    </Typography>
                  )}

                  <TextField
                    label="Confirmar Senha"
                    type={mostrarConfirmarSenha ? "text" : "password"}
                    value={form.confirmarSenha}
                    onChange={(e) => updateField("confirmarSenha", e.target.value)}
                    fullWidth
                    sx={textFieldStyles}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setMostrarConfirmarSenha(!mostrarConfirmarSenha)}
                            edge="end"
                            sx={{ color: "#ff6600" }}
                          >
                            {mostrarConfirmarSenha ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </>
              )}

              {/* BOTÕES */}
              <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  variant="outlined"
                  sx={{
                    borderRadius: 3,
                    textTransform: "none",
                    borderColor: "#ff6600",
                    color: "#ff6600",
                    "&:hover": { backgroundColor: "rgba(255,102,0,0.1)" },
                  }}
                >
                  Voltar
                </Button>

                <Button
                  onClick={handleNext}
                  variant="contained"
                  sx={{
                    borderRadius: 3,
                    backgroundColor: "#ff6600",
                    textTransform: "none",
                  }}
                >
                  {activeStep === steps.length - 1 ? "Finalizar" : "Próximo"}
                </Button>
              </Box>
            </form>
          </Paper>
        </Container>
      </Box>

      <Footer />
    </>
  );
}

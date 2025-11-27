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
import Footer from "@/app/components/footer"
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { useSnackbar } from "notistack";

export default function RegisterPage() {
  const { enqueueSnackbar } = useSnackbar();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [forcaSenha, setForcaSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mostrarConfirmarSenha, setMostrarConfirmarSenha] = useState(false);

  const steps = ["Dados Pessoais", "Código de Acesso", "Segurança"];
  const [activeStep, setActiveStep] = useState(0);

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

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prev) => prev + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => setActiveStep((prev) => prev - 1);

  const handleSubmit = () => {
    if (!nome)
      return enqueueSnackbar("O campo Nome é obrigatório", {
        variant: "warning",
      });

    if (!email.includes("@"))
      return enqueueSnackbar("Digite um email válido", { variant: "error" });

    if (!senha)
      return enqueueSnackbar("O campo Senha é obrigatório", {
        variant: "warning",
      });

    if (confirmarSenha !== senha)
      return enqueueSnackbar("As senhas não coincidem", { variant: "error" });

    enqueueSnackbar("Cadastro realizado com sucesso!", {
      variant: "success",
    });
  };

  const avaliarForcaSenha = (senha: string) => {
    if (!senha) return "";
    if (senha.length < 6) return "Fraca";

    const temNumero = /\d/.test(senha);
    const temEspecial = /[!@#$%^&*(),.?":{}|<>]/.test(senha);

    if (temNumero && temEspecial) return "Forte";
    if (temNumero || temEspecial) return "Média";

    return "Fraca";
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

            {/* Stepper */}
            <Stepper
              activeStep={activeStep}
              alternativeLabel
              sx={{
                mb: 4,
                "& .MuiStepLabel-label": { color: "#ccc" },
                "& .MuiStepIcon-root": { color: "#1f2a38" },
                "& .MuiStepIcon-active": { color: "#ff6600"},
                "& .MuiStepIcon-completed": { color: "#ff6600"},
              }}
            >
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>

            <form style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {/* STEP 1 */}
              {activeStep === 0 && (
                <>
                  <TextField
                    label="Nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    fullWidth
                    sx={textFieldStyles}
                  />

                  <TextField
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={!email.includes("@") && email.length > 0}
                    helperText={
                      !email.includes("@") && email.length > 0
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
                  label="Código de Acesso"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
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
                    value={senha}
                    onChange={(e) => {
                      setSenha(e.target.value);
                      setForcaSenha(avaliarForcaSenha(e.target.value));
                    }}
                    fullWidth
                    sx={textFieldStyles}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setMostrarSenha(!mostrarSenha)}
                            edge="end"
                            sx={{ color: "#ff6600" }}
                          >
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
                    value={confirmarSenha}
                    onChange={(e) => setConfirmarSenha(e.target.value)}
                    fullWidth
                    sx={textFieldStyles}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() =>
                              setMostrarConfirmarSenha(!mostrarConfirmarSenha)
                            }
                            edge="end"
                            sx={{ color: "#ff6600" }}
                          >
                            {mostrarConfirmarSenha ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </>
              )}

              {/* Botões */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mt: 2,
                }}
              >
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  variant="outlined"
                  sx={{
                    borderRadius: 3,
                    textTransform: "none",
                    borderColor: "#ff6600",
                    color: "#ff6600",
                    "&:hover": {
                      borderColor: "#ff6600",
                      backgroundColor: "rgba(255,102,0,0.1)",
                    },
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
                    "&:hover": { backgroundColor: "#e45b00" },
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

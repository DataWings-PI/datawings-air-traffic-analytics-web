"use client";

import {
  Container,
  TextField,
  Button,
  IconButton,
  InputAdornment,
  Box,
  Typography,
  Paper,
  Divider,
} from "@mui/material";

import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { useSnackbar } from "notistack";

import { atualizarUsuario, excluirUsuario } from "@/app/services/usuarioService";

interface UsuarioLocalStorage {
  id: number;
  nome: string;
  email: string;
}

export default function PerfilUsuario() {
  const { enqueueSnackbar } = useSnackbar();

  const [idUsuario, setIdUsuario] = useState<number | null>(null);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senhaAtual, setSenhaAtual] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);

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

  useEffect(() => {
    const usuarioStr = localStorage.getItem("usuario");

    if (usuarioStr) {
      const usuario: UsuarioLocalStorage = JSON.parse(usuarioStr);

      setIdUsuario(usuario.id);
      setNome(usuario.nome);
      setEmail(usuario.email);
    }
  }, []);

  async function salvarAlteracoes() {
    if (!idUsuario) {
      return enqueueSnackbar("Usuário não encontrado", { variant: "error" });
    }

    if (!email.includes("@"))
      return enqueueSnackbar("Digite um email válido", { variant: "error" });

    if (senha && senhaAtual.length === 0)
      return enqueueSnackbar("Digite sua senha atual para alterar a senha", {
        variant: "error",
      });

    try {
      await atualizarUsuario({
        id: idUsuario,
        nome,
        email,
        senhaAntiga: senhaAtual,
        senhaNova: senha || senhaAtual,
      });

      enqueueSnackbar("Alterações salvas com sucesso!", {
        variant: "success",
      });

      localStorage.setItem(
        "usuario",
        JSON.stringify({ id: idUsuario, nome, email })
      );

      setSenhaAtual("");
      setSenha("");
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Erro ao atualizar";

      enqueueSnackbar(message, { variant: "error" });
    }
  }

  async function excluirConta() {
    if (!idUsuario)
      return enqueueSnackbar("Usuário não encontrado", { variant: "error" });

    if (!confirm("Tem certeza que deseja excluir sua conta?")) return;

    try {
      await excluirUsuario(idUsuario);

      enqueueSnackbar("Conta excluída com sucesso!", {
        variant: "warning",
      });

      localStorage.removeItem("usuario");
      window.location.href = "/login";
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Erro ao excluir conta";

      enqueueSnackbar(message, { variant: "error" });
    }
  }

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
              Meu Perfil
            </Typography>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                salvarAlteracoes();
              }}
              style={{ display: "flex", flexDirection: "column", gap: 20 }}
            >
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

              <TextField
                label="Senha atual"
                type={mostrarSenha ? "text" : "password"}
                value={senhaAtual}
                onChange={(e) => setSenhaAtual(e.target.value)}
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

              <TextField
                label="Senha (nova)"
                type={mostrarSenha ? "text" : "password"}
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
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

              <Button
                type="submit"
                variant="contained"
                sx={{
                  borderRadius: 3,
                  backgroundColor: "#ff6600",
                  textTransform: "none",
                  "&:hover": { backgroundColor: "#e45b00" },
                }}
              >
                Salvar Alterações
              </Button>

              <Divider sx={{ my: 2, borderColor: "#444" }} />

              <Button
                variant="outlined"
                color="error"
                onClick={excluirConta}
                sx={{
                  borderRadius: 3,
                  textTransform: "none",
                  borderColor: "#ff4444",
                  color: "#ff4444",
                  "&:hover": {
                    backgroundColor: "#331111",
                    borderColor: "#ff0000",
                  },
                }}
              >
                Excluir Conta
              </Button>
            </form>
          </Paper>
        </Container>
      </Box>

      <Footer />
    </>
  );
}

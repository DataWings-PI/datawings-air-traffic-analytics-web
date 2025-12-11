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
} from "@mui/material";

import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { useSnackbar } from "notistack";
import { autenticar } from "@/app/services/usuarioService";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();

  const [email, setEmail] = useState("");
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

  const handleLogin = async () => {
    if (!email.includes("@"))
      return enqueueSnackbar("Digite um email válido", { variant: "error" });

    if (!senha)
      return enqueueSnackbar("O campo Senha é obrigatório", {
        variant: "warning",
      });

    try {
      const usuario = await autenticar(email, senha);

      enqueueSnackbar("Login realizado com sucesso!", { variant: "success" });

      localStorage.setItem("usuario", JSON.stringify(usuario));

      setTimeout(() => {
        router.push("/");
      }, 2000);

    } catch (error) {
      if (error instanceof Error) {
        enqueueSnackbar(error.message, { variant: "error" });
      } else {
        enqueueSnackbar("Ocorreu um erro inesperado", { variant: "error" });
      }
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
              Login
            </Typography>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleLogin();
              }}
              style={{ display: "flex", flexDirection: "column", gap: 20 }}
            >
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
                label="Senha"
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
                Entrar
              </Button>
            </form>
          </Paper>
        </Container>
      </Box>

      <Footer />
    </>
  );
}

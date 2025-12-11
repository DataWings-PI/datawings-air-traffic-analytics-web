"use client";

import {
  AppBar,
  Toolbar,
  Button,
  Container,
  Box,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";

type Usuario = {
  id: number;
  nome: string;
};

export default function Navbar() {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const [usuario, setUsuario] = useState<Usuario | null>(null);

  useEffect(() => {
    const user = localStorage.getItem("usuario");
    if (user) {
      const idUsuario = JSON.parse(user) as Usuario;
      setUsuario(idUsuario);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("usuario");
    setUsuario(null);

    enqueueSnackbar("Você saiu da conta.", { variant: "info" });
    router.push("/login");
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#020b16", boxShadow: "none" }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          
          {/* Logo */}
          <Box
            sx={{ cursor: "pointer", display: "flex", alignItems: "center" }}
            onClick={() => router.push("/")}
          >
            <Image
              src="/Datawings-logo.png"
              width={200}
              height={200}
              alt="Ícone"
            />
          </Box>

          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            
            {/* Quando não está logado */}
            {!usuario && (
              <>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#ff6600",
                    borderRadius: "20px",
                    textTransform: "none",
                    width: "100px",
                    "&:hover": { backgroundColor: "#e25500" },
                  }}
                  onClick={() => router.push("/login")}
                >
                  Entrar
                </Button>

                <Button
                  variant="outlined"
                  sx={{
                    borderColor: "#555",
                    color: "#fff",
                    borderRadius: "20px",
                    px: 4,
                    textTransform: "none",
                    "&:hover": { borderColor: "#888" },
                  }}
                  onClick={() => router.push("/cadastro")}
                >
                  Cadastrar
                </Button>
              </>
            )}

            {/* Quando está logado */}
            {usuario && (
              <>
                <Typography sx={{ color: "#fff", fontWeight: 500 }}>
                  Olá, {usuario.nome}
                </Typography>

                {/* Botão Perfil */}
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#ff6600",
                    borderRadius: "20px",
                    textTransform: "none",
                    "&:hover": { backgroundColor: "#e25500" },
                  }}
                  onClick={() => router.push("/perfil")}
                >
                  Perfil
                </Button>

                {/* Botão Dashboard (ENVIA O ID NA URL) */}
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#ff6600",
                    borderRadius: "20px",
                    textTransform: "none",
                    "&:hover": { backgroundColor: "#e25500" },
                  }}
                  onClick={() =>
                    setTimeout(() => {
                      router.push(
                        `http://localhost:8080/dashboard/?nome=${usuario.nome}`
                      );
                    }, 500)
                  }
                >
                  Dashboard
                </Button>

                {/* Botão Sair */}
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#cc0000",
                    color: "#fff",
                    borderRadius: "20px",
                    textTransform: "none",
                    "&:hover": { backgroundColor: "#b30000" },
                  }}
                  onClick={logout}
                >
                  Sair
                </Button>
              </>
            )}

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

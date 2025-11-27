"use client";

import {
  AppBar,
  Toolbar,
  Button,
  Container,
  Box,
} from "@mui/material";
import Image from "next/image";

export default function Navbar() {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#020b16", boxShadow: "none" }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Logo */}
          <Image src="/Datawings-logo.png" width={200} height={200} alt="Ícone" />

          {/* Botão Entrar */}
          <Box sx={{ display: "flex", gap: 2 }}>
            {/* Botão Entrar */}
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#ff6600",
                borderRadius: "20px",
                textTransform: "none",
                width: "100px",
                "&:hover": { backgroundColor: "#e25500" },
              }}
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
            >
              Cadastrar
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

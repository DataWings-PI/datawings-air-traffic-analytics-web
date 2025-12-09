"use client";

import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#020b16",
        color: "#fff",
        pb: 4,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Container maxWidth="xl">
        {/* Conteúdo principal */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 6,
            mb: 6,
          }}
        >
          {/* LOGO + TEXTO */}
          <Box sx={{ maxWidth: 350, mt: 4 }}>
            <Image
              src="/Datawings-logo.png"
              width={200}
              height={200}
              alt="Ícone"
            />

            <Typography
              sx={{ color: "#ccc", fontSize: "15px", lineHeight: 1.6 }}
            >
              Nosso sistema ETL coleta, trata e organiza informações de atrasos
              e cancelamentos para gerar dashboards completas e apoiar decisões
              estratégicas.
            </Typography>
          </Box>

          {/* Contato */}
          <Box sx={{ maxWidth: 350, mt: 6 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              Contato
            </Typography>

            <Typography sx={{ fontSize: "15px", color: "#ccc", mb: 1 }}>
              <strong>Telefone:</strong> (11) 98756-4321
            </Typography>

            <Typography sx={{ fontSize: "15px", color: "#ccc", mb: 1 }}>
              <strong>Email:</strong> data.wings@gmail.com
            </Typography>

            <Typography sx={{ fontSize: "15px", color: "#ccc" }}>
              <strong>Endereço:</strong> Rua Haddock Lobo, 595 – Cerqueira César
              São Paulo – SP, 01414-001
            </Typography>
          </Box>
        </Box>

        {/* Linha divisória */}
        <Box
          sx={{
            height: "1px",
            width: "100%",
            backgroundColor: "#333",
            mb: 3,
          }}
        />

        {/* Rodapé final */}
        <Typography
          sx={{ textAlign: "center", color: "#888", fontSize: "14px" }}
        >
          © 2025 DataWings — Todos os direitos reservados
        </Typography>
      </Container>
    </Box>
  );
}

"use client";

import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

export default function AboutSection() {
  return (
    <Box sx={{ backgroundColor: "#fff", color: "#000", py: 8, px: 2 }}>
      <Container maxWidth="xl">
        {/* BLOCO 1 — TEXTO 50% / IMAGEM 50% */}
        <Box
          sx={{
            display: "flex",
            flexWrap: { xs: "wrap", md: "nowrap" },
            justifyContent: "space-between",
            alignItems: "center",
            mb: 8,
          }}
        >
          {/* Texto */}
          <Box sx={{ width: { xs: "100%", md: "50%" }, pr: { md: 3 } }}>
            <Typography variant="h4" sx={{ fontWeight: 900, mb: 2 }}>
              Sobre a DataWings
            </Typography>

            <Typography sx={{ color: "#333", mb: 4 }}>
              A DataWings nasceu ao perceber a crescente necessidade das
              empresas em compreender e analisar melhor os seus dados. Nosso
              propósito é transformar informações em insights valiosos, ajudando
              companhias a tomar decisões mais inteligentes e estratégicas.
            </Typography>
          </Box>

          <Image
            src="/analise_dados_dashboard.png"
            width={600}
            height={300}
            alt="Ícone"
            style={{
              borderRadius: "12px",
              objectFit: "cover",
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}

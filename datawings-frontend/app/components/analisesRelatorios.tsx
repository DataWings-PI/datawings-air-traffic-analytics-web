"use client";

import { Box, Container, Typography } from "@mui/material";

export default function AnalisesRelatorios() {
  return (
    <Box sx={{ backgroundColor: "#fff", color: "#000", py: 10, px: 2 }}>
      <Container maxWidth="xl">

        {/* ====== TÍTULO ====== */}
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
          Análises e Relatórios Inteligentes
        </Typography>

        <Typography sx={{ color: "#4A4A4A", maxWidth: "700px", mb: 6 }}>
          Após o processo de ETL, nosso sistema é capaz de gerar dashboards
          e relatórios específicos, com filtros por data e métricas configuráveis.
          Assim, cada empresa visualiza exatamente o que precisa.
        </Typography>

        {/* ====== CARD 1 – APENAS UMA LINHA ====== */}
        <Box
          sx={{
            backgroundColor: "#020b16",
            color: "#fff",
            borderRadius: "16px",
            p: 4,
            mb: 6,
          }}
        >
          <Typography variant="h4" fontWeight="bold" mb={2}>
            Geração de Dashboards
          </Typography>

          <Typography sx={{ color: "#d1d1d1", fontSize: 18, fontWeight: 500 }}>
            Dê vida aos seus dados! visualize dashboards com poucos cliques e acompanhe métricas em tempo real.
          </Typography>
        </Box>

        {/* ====== CARD 2 – APENAS UMA LINHA ====== */}
        <Box
          sx={{
            backgroundColor: "#020b16",
            color: "#fff",
            borderRadius: "16px",
            p: 4,
          }}
        >
          <Typography variant="h4" fontWeight="bold" mb={2}>
            Relatórios que se adaptam a você
          </Typography>

          <Typography sx={{ color: "#d1d1d1", fontSize: 18, fontWeight: 500 }}>
            Crie relatórios personalizados de forma simples e rápida, escolhendo exatamente o que deseja analisar.
          </Typography>
        </Box>

      </Container>
    </Box>
  );
}

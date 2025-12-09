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
          personalizados e relatórios específicos, com filtros por data e
          métricas configuráveis. Assim, cada empresa visualiza exatamente o
          que precisa, no formato e no momento certos.
        </Typography>

        {/* ====== CARD 1 ====== */}
        <Box
          sx={{
            backgroundColor: "#020b16",
            color: "#fff",
            borderRadius: "16px",
            p: 4,
            mb: 6,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
          }}
        >
          {/* TEXTO */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h5" fontWeight="bold" mb={2}>
              Geração de Dashboards Inteligentes
            </Typography>

            <Typography sx={{ color: "#d1d1d1" }}>
              Dê vida aos seus dados! Crie dashboards personalizados com
              poucos cliques e acompanhe métricas em tempo real. Visualize
              tendências, compare períodos e tome decisões com base em
              informações concretas.
            </Typography>
          </Box>

          {/* IMAGEM */}
          <Box
            sx={{
              flex: 1,
              backgroundColor: "#d9d9d9",
              height: "220px",
              borderRadius: "12px",
            }}
          />
        </Box>

        {/* ====== CARD 2 ====== */}
        <Box
          sx={{
            backgroundColor: "#020b16",
            color: "#fff",
            borderRadius: "16px",
            p: 4,
            display: "flex",
            flexDirection: { xs: "column", md: "row-reverse" },
            gap: 4,
          }}
        >
          {/* TEXTO */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h4" fontWeight="bold" mb={2}>
              Relatórios que se adaptam a você
            </Typography>

            <Typography sx={{ color: "#d1d1d1", fontSize: 18, fontWeight: 500 }}>
              Crie relatórios personalizados de forma simples e rápida,
              escolhendo exatamente o que deseja analisar. Nosso sistema permite
              filtrar informações por data, categoria e indicador, além de
              comparar períodos e resultados para identificar padrões e
              oportunidades.
            </Typography>
          </Box>

          {/* IMAGEM */}
          <Box
            sx={{
              flex: 1,
              backgroundColor: "#d9d9d9",
              height: "220px",
              borderRadius: "12px",
            }}
          />
        </Box>

      </Container>
    </Box>
  );
}

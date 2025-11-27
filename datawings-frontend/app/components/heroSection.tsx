"use client";

import { Box, Container, Typography, Stack, Button } from "@mui/material";
import Image from "next/image";

export default function HeroSection() {
  return (
    <Box
      sx={{
        backgroundColor: "#020b16",
        color: "#fff",
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 4,
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: { xs: "wrap", md: "nowrap" },
        }}
      >
        {/* LADO ESQUERDO – IMAGENS */}
        <Image src="/Group 5.png" width={600} height={300} alt="Ícone" />

        {/* TEXTO */}
        <Box
          sx={{
            width: { xs: "100%", md: "45%" },
            mt: { xs: 4, md: 0 },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
            Melhorando a tomada de decisão da sua companhia
          </Typography>

          <Typography sx={{ color: "#ccc", mb: 4 }}>
            Nosso sistema ETL coleta, trata e organiza informações de atrasos e
            cancelamentos para gerar dashboards completos e apoiar decisões
            estratégicas.
          </Typography>

          <Stack
            direction="row"
            spacing={2}
            justifyContent={{ xs: "center", md: "flex-start" }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#ff6600",
                borderRadius: "20px",
                px: 4,
                textTransform: "none",
                "&:hover": { backgroundColor: "#e25500" },
              }}
            >
              Contato
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
              Saiba mais
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

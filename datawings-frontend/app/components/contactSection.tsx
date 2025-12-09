"use client";

import { Box, Container, Typography } from "@mui/material";

export default function ContactSection() {
  return (
    <Box sx={{ backgroundColor: "#fff", color: "#000", py: 10, px: 2 }}>
      <Container maxWidth="xl">

        {/* ===== TÍTULO ===== */}
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
          Entre em Contato Conosco
        </Typography>

        <Typography sx={{ color: "#4A4A4A", maxWidth: "600px", mb: 6 }}>
          Fale com nossa equipe e descubra como podemos impulsionar o futuro
          da análise de dados da sua empresa. Juntos, podemos transformar
          informações em decisões estratégicas e resultados reais.
        </Typography>

        {/* ===== CONTEÚDO ===== */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 6,
          }}
        >
          {/* ==== FORMULÁRIO ==== */}
          <Box
            sx={{
              flex: 1,
              border: "1px solid #e0e0e0",
              borderRadius: "12px",
              p: 3,
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <input
                placeholder="Nome"
                style={{
                  padding: "10px",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                  outline: "none",
                  width: "100%",
                }}
              />

              <input
                placeholder="Email"
                style={{
                  padding: "10px",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                  outline: "none",
                  width: "100%",
                }}
              />

              <textarea
                placeholder="Mensagem"
                style={{
                  padding: "14px",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                  outline: "none",
                  width: "100%",
                  resize: "none",
                }}
              />

              <button
                style={{
                  padding: "14px",
                  borderRadius: "8px",
                  border: "none",
                  backgroundColor: "#1C1C1C",
                  color: "#fff",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                Enviar
              </button>
            </Box>
          </Box>

          {/* ==== INFORMAÇÕES DE CONTATO ==== */}
          <Box sx={{ flex: 1, fontSize: "16px", lineHeight: "1.8" }}>
            <Typography sx={{ mb: 1 }}>
              <strong>Telefone:</strong> (11) 98765-4321
            </Typography>

            <Typography sx={{ mb: 1 }}>
              <strong>Email:</strong> data.wings@gmail.com
            </Typography>

            <Typography sx={{ mb: 3 }}>
              <strong>Endereço:</strong> Rua Haddock Lobo, 595 – Cerqueira César
              São Paulo – SP, 01414-001
            </Typography>

            <button
              style={{
                padding: "12px 28px",
                backgroundColor: "#29CC53",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "600",
                fontSize: "15px",
              }}
            >
              whatsApp
            </button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

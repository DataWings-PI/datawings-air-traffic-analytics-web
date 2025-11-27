"use client";

import { Box, Container, Typography } from "@mui/material";

export default function EtpSection() {
  const etapas = [
    {
      id: 1,
      titulo: "Extração",
      texto:
        "Extraímos os dados diretamente de arquivos CSV, sistemas internos e APIs. Esses dados brutos serão utilizados em todas as etapas seguintes do processo.",
    },
    {
      id: 2,
      titulo: "Transformação",
      texto:
        "Tratamos e padronizamos os dados, removendo inconsistências e aplicando regras de negócio para gerar informações limpas e analisáveis.",
    },
    {
      id: 3,
      titulo: "Carga",
      texto:
        "Carregamos os dados limpos e estruturados em um banco de dados ou data warehouse, onde podem ser consultados e cruzados facilmente.",
    },
    {
      id: 4,
      titulo: "Visualização",
      texto:
        "Transformamos os dados em gráficos, indicadores e dashboards personalizados, facilitando a identificação de padrões e tomadas de decisões estratégicas.",
    },
  ];

  return (
    <Box sx={{ backgroundColor: "#020b16", color: "#fff", py: 4, px: 2 }}>
      <Container maxWidth="xl">
        {/* Título */}
        <Typography
          variant="h4"
          sx={{ fontWeight: 700, mb: 6, textAlign: "left" }}
        >
          Como lidamos com os seus dados 
        </Typography>

        {/* Cards */}
        <Box
          sx={{
            display: "flex",
            flexWrap: { xs: "wrap", md: "nowrap" },
            justifyContent: "space-between",
            gap: 3,
          }}
        >
          {etapas.map((item) => (
            <Box
              key={item.id}
              sx={{
                flex: 1,
                backgroundColor: "#fff",
                color: "#000",
                borderRadius: "16px",
                p: 2,
                minWidth: { xs: "100%", md: "22%" },
                transition: "0.3s",
                transform: "translateY(0px)",
                boxShadow: "0 0 0 rgba(0,0,0,0)",

                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
                },
              }}
            >
              {/* Bolinha laranja */}
              <Box
                sx={{
                  width: 38,
                  height: 38,
                  borderRadius: "50%",
                  backgroundColor: "#ff6a00",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  fontSize: "16px",
                  mb: 2,
                }}
              >
                {item.id}
              </Box>

              <Typography sx={{ fontSize: "20px", fontWeight: 700, mb: 1 }}>
                {item.titulo}
              </Typography>

              <Typography sx={{ color: "#333" }}>{item.texto}</Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

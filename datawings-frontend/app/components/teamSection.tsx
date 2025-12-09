"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function TeamSection() {
  const equipe = [
    {
      nome: "Otavio de Araújo",
      cargo: "Desenvolvedor Back-end",
      foto: "/otavio.jpg",
    },
    { nome: "Thalita Lourenço", cargo: "Scrum Master", foto: "/thalita.jpg" },
    {
      nome: "Vinicius Oliveira",
      cargo: "Desenvolvedor Front-end",
      foto: "/vinicius.jpg",
    },
    { nome: "Gustavo Costa", cargo: "Product Owner", foto: "/gustavo.jpg" },
    {
      nome: "Gabriel Niedo",
      cargo: "Desenvolvedor Back-end",
      foto: "/niedo.jpg",
    },
  ];
  return (
    <Box sx={{ py: 10, px: 2 }}>
      {/* TÍTULO */}
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 4 }}>
        Equipe DataWings
      </Typography>

      {/* CARDS */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 3,
        }}
      >
        {equipe.map((pessoa, index) => (
          <Box
            key={index}
            sx={{
              width: { xs: "100%", sm: "48%", md: "18%" },
              backgroundColor: "#fff",
              borderRadius: "10px",
              padding: 3,
              boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
              textAlign: "center",
            }}
          >
            {/* FOTO CIRCULAR */}
            <Box
              sx={{
                width: 150,
                height: 150,
                borderRadius: "50%",
                overflow: "hidden",
                mx: "auto",
                mb: 2,
                position: "relative",
              }}
            >
              <Image
                src={pessoa.foto}
                alt={pessoa.nome}
                fill
              />
            </Box>

            {/* NOME */}
            <Typography sx={{ fontWeight: 600, fontSize: "16px" }}>
              {pessoa.nome}
            </Typography>

            {/* CARGO */}
            <Typography sx={{ fontSize: "13px", color: "#666", mb: 2 }}>
              {pessoa.cargo}
            </Typography>

            {/* ÍCONES (caso queira colocar depois) */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 3,
              }}
            >
              <Image src="/9.png" width={40} height={40} alt="Ícone" />
              <Image src="/10.png" width={40} height={40} alt="Ícone" />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

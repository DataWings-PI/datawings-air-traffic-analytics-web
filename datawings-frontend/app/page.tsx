"use client";

import { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Stack,
} from "@mui/material";

export default function HomePage() {
  // Evita renderizar no servidor
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <AppBar
        position="static"
        sx={{ backgroundColor: "#020b16", boxShadow: "none" }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            {/* Logo */}
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: "#ff6600",
                textDecoration: "none",
              }}
            >
              DataWings
            </Typography>

            {/* Links */}
            <Stack
              direction="row"
              spacing={4}
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              <Button sx={{ color: "#fff", textTransform: "none" }}>
                Home
              </Button>
              <Button sx={{ color: "#fff", textTransform: "none" }}>
                Sobre nós
              </Button>
              <Button sx={{ color: "#fff", textTransform: "none" }}>
                Serviços
              </Button>
              <Button sx={{ color: "#fff", textTransform: "none" }}>
                Contato
              </Button>
            </Stack>

            {/* Botão Entrar */}
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#ff6600",
                borderRadius: "20px",
                px: 3,
                py: 0.5,
                textTransform: "none",
                "&:hover": { backgroundColor: "#e25500" },
              }}
            >
              Entrar
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
      {/* ===== HERO SECTION ===== */}
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
          {/* Lado Esquerdo */}
          <Box
            sx={{
              display: "flex",
              gap: 2,
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              width: { xs: "100%", md: "50%" },
            }}
          >
            {Array.from({ length: 4 }).map((_, i) => (
              <Box
                key={i}
                sx={{
                  backgroundColor: "#fff",
                  width: { xs: "45%", md: "120px" },
                  height: { xs: "100px", md: "160px" },
                  borderRadius: "8px",
                }}
              />
            ))}
          </Box>

          {/* Texto */}
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
              Nosso sistema ETL coleta, trata e organiza informações de atrasos
              e cancelamentos para gerar dashboards completos e apoiar decisões
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
      {/* ===== SEÇÃO SOBRE A DATAWINGS (50/50) ===== */}
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
                propósito é transformar informações em insights valiosos,
                ajudando companhias a tomar decisões mais inteligentes e
                estratégicas.
              </Typography>
            </Box>

            {/* Imagem */}
            <Box
              sx={{
                width: { xs: "100%", md: "50%" },
                height: 300,
                backgroundColor: "#d6d6d6",
                borderRadius: "10px",
              }}
            />
          </Box>

          {/* BLOCO 2 — IMAGEM 50% / TEXTO 50% */}
          <Box
            sx={{
              display: "flex",
              flexWrap: { xs: "wrap", md: "nowrap" },
              justifyContent: "space-between",
              alignItems: "center",
              mt: 8,
            }}
          >
            {/* Imagem */}
            <Box
              sx={{
                width: { xs: "100%", md: "50%" },
                height: 300,
                backgroundColor: "#d6d6d6",
                borderRadius: "10px",
                mb: { xs: 3, md: 0 },
              }}
            />

            {/* Texto */}
            <Box sx={{ width: { xs: "100%", md: "50%" }, pl: { md: 3 } }}>
              <Typography variant="h4" sx={{ fontWeight: 900, mb: 2 }}>
                Excelência a cada detalhe
              </Typography>

              <Typography sx={{ color: "#333", mb: 4 }}>
                Antes de aplicar o processo ETL, realizamos uma análise completa
                da base de dados do cliente. Detalhamos itens, cruzamos
                informações e garantimos que todo dado esteja limpo, confiável e
                pronto para uso estratégico. Nossa equipe utiliza tecnologias
                avançadas e boas práticas de análise para entregar dashboards
                baseados em informações reais.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
      {/* ===== SEÇÃO PROCESSO ETL ===== */}
      <Box sx={{ backgroundColor: "#020b16", color: "#fff", py: 4, px: 2 }}>
        <Container maxWidth="xl">
          {/* Título */}
          <Typography
            variant="h4"
            sx={{ fontWeight: 700, mb: 6, textAlign: "left" }}
          >
            Como funciona o processo de ETL
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
            {[
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
            ].map((item) => (
              <Box
                key={item.titulo}
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
      {/* ====== SEÇÃO: ANÁLISES E RELATÓRIOS ====== */}
      <Box sx={{ backgroundColor: "#fff", color: "#000", py: 10, px: 2 }}>
        <Container maxWidth="xl">
          {/* Título */}
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
              <Typography
                sx={{ color: "#d1d1d1", fontSize: 18, fontWeight: 500 }}
              >
                Crie relatórios personalizados de forma simples e rápida,
                escolhendo exatamente o que deseja analisar. Nosso sistema
                permite filtrar informações por data, categoria e indicador,
                além de comparar períodos e resultados para identificar padrões
                e oportunidades.
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
      {/* ====== SEÇÃO DE CONTATO ====== */}
      <Box sx={{ backgroundColor: "#fff", color: "#000", py: 10, px: 2 }}>
        <Container maxWidth="xl">
          {/* Título */}
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
            Entre em Contato Conosco
          </Typography>

          <Typography sx={{ color: "#4A4A4A", maxWidth: "600px", mb: 6 }}>
            Fale com nossa equipe e descubra como podemos impulsionar o futuro
            da análise de dados da sua empresa. Juntos, podemos transformar
            informações em decisões estratégicas e resultados reais.
          </Typography>

          {/* Conteúdo */}
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
                  placeholder="Name"
                  style={{
                    padding: "14px",
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                    outline: "none",
                    width: "100%",
                  }}
                />

                <input
                  placeholder="Email"
                  style={{
                    padding: "14px",
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                    outline: "none",
                    width: "100%",
                  }}
                />

                <textarea
                  placeholder="Message"
                  rows="4"
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
                  Submit
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
                <strong>Endereço:</strong> Rua Haddock Lobo, 595 – Cerqueira
                César São Paulo – SP, 01414-001
              </Typography>

              {/* Botão ZAP */}
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
                zap
              </button>
            </Box>
          </Box>
        </Container>
      </Box>
      {/* ===== SEÇÃO EQUIPE ===== */}
      <Box sx={{ py: 10, px: 2 }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 4 }}>
          Equipe DataWings
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 3,
          }}
        >
          {[
            { nome: "Vinicius Oliveira", cargo: "Desenvolvedor Front-end" },
            { nome: "Thalita Lourenço", cargo: "Desenvolvedora Front-end" },
            { nome: "Otavio de Araújo", cargo: "Desenvolvedor Back-end" },
            { nome: "Laura Martins", cargo: "Cientista de Dados" },
            { nome: "Marcos Ferreira", cargo: "DevOps Engineer" },
          ].map((pessoa, index) => (
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
              {/* FOTO CIRCULAR GRANDE (igual à imagem) */}
              <Box
                sx={{
                  width: 110,
                  height: 110,
                  backgroundColor: "#d9d9d9",
                  borderRadius: "50%",
                  mx: "auto",
                  mb: 2,
                }}
              />

              {/* NOME */}
              <Typography sx={{ fontWeight: 600, fontSize: "16px" }}>
                {pessoa.nome}
              </Typography>

              {/* CARGO */}
              <Typography sx={{ fontSize: "13px", color: "#666", mb: 2 }}>
                {pessoa.cargo}
              </Typography>

              {/* ÍCONES IGUAL AOS DA IMAGEM */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 3,
                  mt: 1,
                }}
              >
                {/* <img
                  src="/linkedin.png"
                  width={28}
                  style={{ cursor: "pointer" }}
                />
                <img
                  src="/github.png"
                  width={28}
                  style={{ cursor: "pointer" }}
                /> */}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      <Box
        sx={{ backgroundColor: "#020b16", color: "#fff", pt: 8, pb: 4, mt: 10 }}
      >
        <Container maxWidth="xl">
          {/* Conteúdo principal */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: 6,
              mb: 6,
            }}
          >
            {/* LOGO + TEXTO */}
            <Box sx={{ flex: 1, maxWidth: 350 }}>
              <Typography
                variant="h5"
                sx={{ color: "#ff6600", fontWeight: 700, mb: 2 }}
              >
                DataWings
              </Typography>

              <Typography
                sx={{ color: "#ccc", fontSize: "15px", lineHeight: 1.6 }}
              >
                Nosso sistema ETL coleta, trata e organiza informações de
                atrasos e cancelamentos para gerar dashboards completos e apoiar
                decisões estratégicas.
              </Typography>

              {/* Ícones sociais */}
              <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
                <Box
                  sx={{
                    width: 35,
                    height: 35,
                    backgroundColor: "#ff6600",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                    transition: "0.2s",
                    "&:hover": { backgroundColor: "#ff7f2a" },
                  }}
                >
                </Box>

                <Box
                  sx={{
                    width: 35,
                    height: 35,
                    backgroundColor: "#ff6600",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                    transition: "0.2s",
                    "&:hover": { backgroundColor: "#ff7f2a" },
                  }}
                >
                </Box>
              </Box>
            </Box>

            {/* Navegação */}
            <Box sx={{ flex: 1 }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                Navegação
              </Typography>

              <Stack spacing={1}>
                {["Home", "Sobre nós", "Serviços", "Contato"].map((item) => (
                  <Typography
                    key={item}
                    sx={{
                      fontSize: "15px",
                      color: "#ccc",
                      cursor: "pointer",
                      transition: "0.2s",
                      "&:hover": { color: "#ff6600" },
                    }}
                  >
                    {item}
                  </Typography>
                ))}
              </Stack>
            </Box>

            {/* Contato */}
            <Box sx={{ flex: 1, maxWidth: 350 }}>
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
                <strong>Endereço:</strong> Rua Haddock Lobo, 595 – Cerqueira
                César São Paulo – SP, 01414-001
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
    </>
  );
}

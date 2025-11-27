"use client";

import { useEffect, useState } from "react";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import HeroSection from "@/app/components/heroSection";
import AboutSection from "./components/aboutSection";
import EtlSection from "@/app/components/etlSection";
import AnalisesRelatorios from "./components/analisesRelatorios";
import ContactSection from "./components/contactSection";
import TeamSection from "./components/teamSection";

export default function HomePage() {
  // Evita renderizar no servidor
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <>
      <Navbar />

      <HeroSection />

      <AboutSection />

      <EtlSection />

      <AnalisesRelatorios />

      <ContactSection />
      
      <TeamSection />

      <Footer />
    </>
  );
}

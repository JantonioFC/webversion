import React from 'react';
import { Github, BookOpen, Terminal, Cpu, ArrowRight, Network, Layers, Brain, Database } from "lucide-react";

import IntroAnimation from './components/IntroAnimation';
import { ManualSection } from './components/ManualSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030014] text-slate-200 selection:bg-[#06B6D4] selection:text-[#0F172A] overflow-x-hidden font-sans">
      <IntroAnimation />

      {/* --- FONDO AMBIENTAL --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#A855F7]/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#06B6D4]/10 rounded-full blur-[100px]" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] object-cover opacity-20 mix-blend-lighten blur-3xl pointer-events-none"
          src="/Logo_Animado_No_Textual.mp4"
        />
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative z-10 w-full max-w-7xl mx-auto pt-24 pb-16 px-4">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center text-center lg:text-left">

          {/* LEFT COLUMN: Logo */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#A855F7] to-[#06B6D4] rounded-full opacity-30 group-hover:opacity-50 blur transition duration-500"></div>
              <div className="relative bg-[#030014] rounded-full p-2">
                <img
                  src="/uruia-icon.jpg"
                  alt="URU/IA.LABS Logo"
                  width={160}
                  height={160}
                  className="rounded-full relative z-10 drop-shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* CENTER COLUMN: Title */}
          <div className="flex justify-center">
            <h1 className="text-5xl font-bold tracking-wide font-cinzel">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#A855F7] via-white to-[#06B6D4]">
                URU/IA.LABS
              </span>
            </h1>
          </div>

          {/* RIGHT COLUMN: Description */}
          <div className="flex flex-col items-center lg:items-end lg:text-right space-y-4">
            <p className="text-xl text-slate-400 font-light border-y border-slate-800/50 py-2 backdrop-blur-sm">
              <span className="text-[#A855F7]">Ecosistema 360</span> <span className="mx-2 text-slate-600">|</span> <span className="text-[#06B6D4]">AI Code Mentor</span>
            </p>

            <p className="text-slate-500 text-sm font-mono tracking-widest uppercase opacity-80">
              Simbiosis Crítica Humano-IA para el Dominio del Código
            </p>
          </div>

        </div>
      </section>

      {/* --- SECCIÓN DE DOBLE PILAR (ENLACES A REPOS) --- */}
      <section className="max-w-7xl mx-auto px-4 pb-16 grid lg:grid-cols-2 gap-8 relative z-10">

        {/* --- TARJETA 1: EL ECOSISTEMA (TEORÍA/DOCUMENTACIÓN) --- */}
        <div className="group relative flex flex-col h-full bg-[#0F172A]/40 border border-[#A855F7]/20 rounded-2xl p-8 hover:border-[#A855F7]/60 transition-all duration-500 hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.15)] backdrop-blur-md">
          {/* Icono de fondo decorativo */}
          <div className="absolute top-4 right-4 text-[#A855F7] opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-700">
            <Network size={200} strokeWidth={1} />
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-[#A855F7]/10 rounded-xl text-[#A855F7] border border-[#A855F7]/20 shadow-lg shadow-[#A855F7]/5">
              <BookOpen size={32} />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white tracking-tight">Ecosistema 360</h2>
              <span className="text-xs font-mono text-[#A855F7] uppercase tracking-wider">Documentación Fundacional</span>
            </div>
          </div>

          <div className="flex-grow space-y-6">
            <p className="text-slate-300 leading-relaxed text-lg">
              Una propuesta pedagógica ambiciosa de <strong>24 meses</strong> diseñada para la formación autodidacta de alto rendimiento.
            </p>

            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <Layers size={20} className="text-[#A855F7] mt-1 shrink-0" />
                <p className="text-sm text-slate-400">
                  <strong className="text-slate-200 block mb-1">Metodología de Fases (F0 - F7)</strong>
                  Estructura curricular progresiva desde la "Cimentación del Arquitecto" hasta el despliegue profesional.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[#A855F7]/10">
            <a
              href="https://github.com/JantonioFC/ecosistema-360-documentacion"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full p-4 rounded-xl bg-gradient-to-r from-[#A855F7]/10 to-transparent border border-[#A855F7]/30 hover:bg-[#A855F7]/20 text-white font-medium transition-all group-hover:translate-x-1"
            >
              <div className="flex items-center gap-3">
                <Github size={20} />
                <span>Leer Documentación</span>
              </div>
              <ArrowRight size={20} className="text-[#A855F7] opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </a>
          </div>
        </div>

        {/* --- TARJETA 2: AI CODE MENTOR (PRÁCTICA/CÓDIGO) --- */}
        <div className="group relative flex flex-col h-full bg-[#0F172A]/40 border border-[#06B6D4]/20 rounded-2xl p-8 hover:border-[#06B6D4]/60 transition-all duration-500 hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.15)] backdrop-blur-md">
          {/* Icono de fondo decorativo */}
          <div className="absolute top-4 right-4 text-[#06B6D4] opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-700">
            <Terminal size={200} strokeWidth={1} />
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-[#06B6D4]/10 rounded-xl text-[#06B6D4] border border-[#06B6D4]/20 shadow-lg shadow-[#06B6D4]/5">
              <Cpu size={32} />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white tracking-tight">AI Code Mentor</h2>
              <span className="text-xs font-mono text-[#06B6D4] uppercase tracking-wider">Implementación Técnica</span>
            </div>
          </div>

          <div className="flex-grow space-y-6">
            <p className="text-slate-300 leading-relaxed text-lg">
              La plataforma educativa <strong>Local-First</strong> que materializa el ecosistema. Privacidad total y arquitectura moderna.
            </p>

            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <Terminal size={20} className="text-[#06B6D4] mt-1 shrink-0" />
                <p className="text-sm text-slate-400">
                  <strong className="text-slate-200 block mb-1">Stack Tecnológico Robusto</strong>
                  Construido sobre Next.js 15 Monolítico y SQLite. Sin dependencias externas críticas.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[#06B6D4]/10">
            <a
              href="https://github.com/JantonioFC/Ai-Code-Mentor-Produccion-V1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full p-4 rounded-xl bg-gradient-to-r from-[#06B6D4]/10 to-transparent border border-[#06B6D4]/30 hover:bg-[#06B6D4]/20 text-white font-medium transition-all group-hover:translate-x-1"
            >
              <div className="flex items-center gap-3">
                <Github size={20} />
                <span>Acceso Versión Producción</span>
              </div>
              <ArrowRight size={20} className="text-[#06B6D4] opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </a>
          </div>
        </div>

      </section>

      {/* --- MANUAL VISUAL --- */}
      <ManualSection />

      {/* --- NUEVA SECCIÓN: RESÚMENES TEXTUALES (VISIÓN Y ARQUITECTURA) --- */}
      <section className="max-w-7xl mx-auto px-4 pb-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 border-t border-slate-800/50 pt-16">

          {/* Resumen Metodología */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <Brain size={24} className="text-[#A855F7]" />
              <h3 className="text-xl font-bold text-slate-100">La Filosofía Pedagógica</h3>
            </div>
            <p className="text-slate-400 leading-relaxed text-sm md:text-base text-justify">
              Fundamentado en la <span className="text-[#A855F7] font-medium">Simbiosis Crítica Humano-IA</span>, el Ecosistema 360 no es solo un curso, es un manifiesto pedagógico.
              Estructurado en un currículo de <strong>24 meses</strong> (Fases F0-F7), propone un cambio de paradigma donde la IA evoluciona de ser una simple asistente a convertirse en una <strong>evaluadora rigurosa de código</strong>.
              El programa integra obligatoriamente herramientas de metacognición, como el <em>Diario de Decisiones de Ingeniería (DDE)</em>, para forjar ingenieros capaces de documentar, razonar y defender sus soluciones técnicas, no solo programadores que copian sintaxis.
            </p>
          </div>

          {/* Resumen Mentor de Código */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <Database size={24} className="text-[#06B6D4]" />
              <h3 className="text-xl font-bold text-slate-100">La Arquitectura Local-First</h3>
            </div>
            <p className="text-slate-400 leading-relaxed text-sm md:text-base text-justify">
              AI Code Mentor es la respuesta tecnológica a esta visión. Diseñada bajo una estricta arquitectura <span className="text-[#06B6D4] font-medium">Local-First</span>, la plataforma garantiza que el progreso y los datos del estudiante vivan en su propia máquina mediante <strong>SQLite</strong> y <strong>Next.js Monolith</strong>, eliminando latencias y dependencias de la nube.
              Su núcleo innovador reside en el <strong>Router IA Resiliente</strong> y el sistema <strong>IRP (Revisión por Pares Integrada)</strong>, que proporciona auditoría de código en tiempo real, métricas de calidad y un entorno de <em>sandbox</em> seguro, simulando la exigencia de un equipo de desarrollo profesional senior.
            </p>
          </div>

        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-10 text-center border-t border-slate-900/80 bg-[#02000d]">
        <div className="flex items-center justify-center gap-2 mb-2 opacity-50 hover:opacity-100 transition-opacity">
          <img src="/uruia-icon.jpg" alt="Mini Logo" width={24} height={24} className="grayscale hover:grayscale-0 transition-all rounded-full" />
          <span className="font-bold text-slate-300 tracking-wider">URU/IA.LABS</span>
        </div>
        <p className="text-slate-600 text-sm">
          <span className="block md:inline">Ecosistema 360: <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-400 transition-colors">CC BY-SA 4.0</a></span>
          <span className="hidden md:inline mx-2">•</span>
          <span className="block md:inline">AI Code Mentor: Copyright © 2026 J. FRANCO</span>
        </p>
        <p className="text-slate-700 text-xs mt-2 font-mono">Deploy en Vercel • Next.js • Tailwind</p>
      </footer>
    </main>
  );
}

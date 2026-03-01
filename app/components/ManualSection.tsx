'use client';

import React, { useState } from 'react';
import { Book, ChevronLeft, ChevronRight, Info, Rocket, Brain, Timer, Beaker, FileText, BarChart3 } from 'lucide-react';

const manualSections = [
    {
        id: 'dashboard',
        icon: <Rocket className="text-purple-400" />,
        title: '1. Acceso y Dashboard Principal',
        content: 'El viaje comienza en tu panel central, donde el sistema monitorea tu progreso en tiempo real.',
        images: [
            '/manual-assets/landing_page_full_1772277245961.png',
            '/manual-assets/login_interface_1772277275502.png',
            '/manual-assets/dashboard_full_1772277330754.png'
        ],
        features: [
            'Métricas de Impacto: Horas de vuelo y nivel de Seniority.',
            'Acceso Rápido: Herramientas de IA y seguimiento.',
            'Estado Curricular: Resumen del programa de 24 meses.'
        ]
    },
    {
        id: 'fases',
        icon: <Brain className="text-blue-400" />,
        title: '2. Estructura Curricular de 8 Fases',
        content: 'Nuestra metodología se divide en 8 fases estratégicas para llevarte de cero a profesional senior.',
        images: ['/manual-assets/modulos_long_page_1772279422030.png'],
        features: [
            'Fase 0-1: Cimentación y Programación Profesional.',
            'Fase 2-3: Frontend y Backend Profesional.',
            'Fase 4-5: DevOps, Cloud, Data Science e IA.',
            'Fase 6-7: Integración y Profesionalización Continua.'
        ]
    },
    {
        id: 'pomodoro',
        icon: <Timer className="text-cyan-400" />,
        title: '3. El Método Pomodoro 5x4 (EST)',
        content: 'estudio disciplinado: 5 días a la semana, 4 horas por día con generación inteligente de lecciones.',
        images: [
            '/manual-assets/est_pomodoro_blocks_1772279528286.png',
            '/manual-assets/lesson_loading_state_1772279606321.png',
            '/manual-assets/rendered_lesson_modal_1772279645458.png'
        ],
        features: [
            'Adquisición de Conocimiento (Pomodoros 1-2).',
            'Aplicación y Resolución (Pomodoros 3-4).',
            'Generación por Gemini AI basada en contexto real.'
        ]
    },
    {
        id: 'ia-tools',
        icon: <Beaker className="text-emerald-400" />,
        title: '4. Herramientas de IA y Sandbox',
        content: 'El Revisor de Código con IA y el Sandbox te permiten experimentar y recibir feedback inmediato.',
        images: [
            '/manual-assets/irp_dashboard_full_1772277545660.png',
            '/manual-assets/code_analyzer_full_1772277588825.png'
        ],
        features: [
            'Internal Review Process (IRP) completo.',
            'Detección automática de Deuda Técnica.',
            'Sandbox integrado para experimentación segura.'
        ]
    },
    {
        id: 'templates',
        icon: <FileText className="text-amber-400" />,
        title: '5. El Ecosistema de Plantillas',
        content: 'Instrumentos de metacognición para pensar como un ingeniero profesional.',
        images: ['/manual-assets/templates_management_full_1772277667493.png'],
        features: [
            'DDE: Diario de Decisiones de Ingeniería.',
            'PAS: Plan de Acción Semanal estratégico.',
            'HRC: Hoja de Ruta de Competencias por evidencias.'
        ]
    },
    {
        id: 'analytics',
        icon: <BarChart3 className="text-rose-400" />,
        title: '6. Portafolio y Analíticas',
        content: 'Exporta tus logros y visualiza tu crecimiento profesional a largo plazo.',
        images: [
            '/manual-assets/portfolio_management_full_1772277714901.png',
            '/manual-assets/detailed_analytics_full_1772277801553.png'
        ],
        features: [
            'Gestión de Portafolio automática.',
            'Analíticas detalladas de desempeño.',
            'Evidencias tangibles para empleadores.'
        ]
    }
];

export const ManualSection = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [activeImage, setActiveImage] = useState(0);

    const currentSection = manualSections[activeTab];

    return (
        <section id="manual-visual" className="py-24 relative overflow-hidden bg-[#030014]">
            {/* Decorative background blur */}
            <div className="absolute top-1/4 -left-20 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center mb-16">
                    <div className="flex items-center gap-3 mb-4">
                        <Book size={32} className="text-[#06B6D4]" />
                        <h2 className="text-4xl font-bold font-cinzel tracking-wider text-white">Manual Visual</h2>
                    </div>
                    <p className="text-slate-400 text-center max-w-2xl">
                        Guía completa de funcionamiento de **AI Code Mentor** y el **Ecosistema 360**.
                        Explora las herramientas diseñadas para tu aceleración profesional.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Sidebar Navigation */}
                    <div className="lg:col-span-4 space-y-3">
                        {manualSections.map((section, index) => (
                            <button
                                key={section.id}
                                onClick={() => {
                                    setActiveTab(index);
                                    setActiveImage(0);
                                }}
                                className={`w-full text-left p-4 rounded-xl border transition-all flex items-center gap-4 group ${activeTab === index
                                        ? 'bg-white/10 border-white/20 text-white shadow-[0_0_20px_rgba(168,85,247,0.15)]'
                                        : 'bg-white/5 border-white/5 text-slate-400 hover:bg-white/10 hover:border-white/10'
                                    }`}
                            >
                                <div className={`p-2 rounded-lg transition-colors ${activeTab === index ? 'bg-purple-500/20' : 'bg-slate-800/50 group-hover:bg-slate-700/50'}`}>
                                    {React.cloneElement(section.icon as React.ReactElement, { size: 20 })}
                                </div>
                                <span className="font-medium">{section.title}</span>
                            </button>
                        ))}
                    </div>

                    {/* Content Display */}
                    <div className="lg:col-span-8 bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm min-h-[600px] flex flex-col">
                        <div className="flex items-start justify-between mb-8">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2">{currentSection.title}</h3>
                                <p className="text-slate-300 leading-relaxed italic border-l-2 border-purple-500 pl-4">
                                    "{currentSection.content}"
                                </p>
                            </div>
                            <Info className="text-slate-500 mt-1" size={24} />
                        </div>

                        {/* Image Carousel Mock */}
                        <div className="relative group/image mb-8 flex-1 flex flex-col justify-center">
                            <div className="relative aspect-video rounded-xl overflow-hidden border border-white/20 shadow-2xl bg-black/40 group">
                                <img
                                    src={currentSection.images[activeImage]}
                                    alt={currentSection.title}
                                    className="w-full h-full object-contain"
                                />

                                {/* Carousel Controls */}
                                {currentSection.images.length > 1 && (
                                    <>
                                        <button
                                            onClick={() => setActiveImage((prev) => (prev > 0 ? prev - 1 : currentSection.images.length - 1))}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-md"
                                        >
                                            <ChevronLeft size={24} />
                                        </button>
                                        <button
                                            onClick={() => setActiveImage((prev) => (prev < currentSection.images.length - 1 ? prev + 1 : 0))}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-md"
                                        >
                                            <ChevronRight size={24} />
                                        </button>
                                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                            {currentSection.images.map((_, i) => (
                                                <div
                                                    key={i}
                                                    className={`w-2 h-2 rounded-full transition-all ${i === activeImage ? 'bg-purple-500 w-6' : 'bg-white/40'}`}
                                                ></div>
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>
                            <p className="text-xs text-slate-500 mt-2 text-center">Capture Real de AI Code Mentor V1</p>
                        </div>

                        {/* Features list */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {currentSection.features.map((feature, i) => (
                                <div key={i} className="flex items-center gap-3 text-slate-300 text-sm bg-white/5 p-3 rounded-lg border border-white/5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                                    {feature}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

'use client';

import React, { useState, useEffect } from 'react';

export default function IntroAnimation() {
    const [isVisible, setIsVisible] = useState(true);
    const [shouldRender, setShouldRender] = useState(true);
    const [textOpacity, setTextOpacity] = useState(0);

    const handleFadeOut = () => {
        setIsVisible(false);
        setTimeout(() => setShouldRender(false), 1000);
    };

    useEffect(() => {
        // Simple timing for the animation sequence
        const textTimer = setTimeout(() => setTextOpacity(1), 800);
        const exitTimer = setTimeout(() => handleFadeOut(), 4000);

        return () => {
            clearTimeout(textTimer);
            clearTimeout(exitTimer);
        };
    }, []);

    if (!shouldRender) return null;

    return (
        <div
            className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#030014] transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
        >
            <div className="flex flex-col items-center">
                {/* Logo with pulse and glow */}
                <div className="relative mb-8 group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-[#A855F7] to-[#06B6D4] rounded-full opacity-40 blur-2xl animate-pulse"></div>
                    <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-white/20 shadow-2xl scale-110 animate-in zoom-in duration-1000">
                        <img
                            src="/uruia-icon.jpg"
                            alt="URU/IA.LABS"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Animated Text */}
                <div
                    className="transition-all duration-1000 ease-out transform pointer-events-none"
                    style={{
                        opacity: textOpacity,
                        transform: `translateY(${textOpacity ? '0' : '20px'})`
                    }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold font-cinzel tracking-[0.2em] text-center">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#A855F7] via-white to-[#06B6D4]">
                            URU/IA.LABS
                        </span>
                    </h1>
                    <div className="mt-4 h-0.5 w-0 animate-expand-width bg-gradient-to-r from-transparent via-[#06B6D4] to-transparent mx-auto"></div>
                    <p className="mt-6 text-slate-500 font-mono text-xs tracking-[0.5em] uppercase text-center opacity-60">
                        Simbiosis Crítica Humano-IA
                    </p>
                </div>
            </div>

            {/* Global style for the width expansion animation */}
            <style jsx global>{`
                @keyframes expand-width {
                    from { width: 0; }
                    to { width: 100%; }
                }
                .animate-expand-width {
                    animation: expand-width 1.5s ease-out forwards;
                    animation-delay: 1.2s;
                }
            `}</style>
        </div>
    );
}

'use client';

import React, { useState, useEffect } from 'react';

export default function IntroAnimation() {
    const [isVisible, setIsVisible] = useState(true);
    const [shouldRender, setShouldRender] = useState(true);

    const handleFadeOut = () => {
        setIsVisible(false);
        // Remove from DOM after transition matches CSS duration
        setTimeout(() => setShouldRender(false), 1000);
    };

    useEffect(() => {
        // Fallback: If video takes too long or fails to play automatically,
        // fade out after 8 seconds to ensure user isn't stuck.
        const timer = setTimeout(() => {
            handleFadeOut();
        }, 8000);
        return () => clearTimeout(timer);
    }, []);

    if (!shouldRender) return null;

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
        >
            <video
                autoPlay
                muted
                playsInline
                className="w-full h-full object-cover"
                src="/TITI_LABS_animation_pro.mp4"
                onEnded={handleFadeOut}
                onError={(e) => {
                    console.error("Intro video error:", e);
                    handleFadeOut(); // Hide immediately on error
                }}
                onCanPlay={() => {
                    // Optional: You could rely on this to know video is ready, but autoplay usually handles it.
                }}
            />
        </div>
    );
}

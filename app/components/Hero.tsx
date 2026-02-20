"use client";

import { useEffect, useState } from "react";

const slides = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2700&auto=format&fit=crop",
        category: "Residential Design",
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2700&auto=format&fit=crop",
        category: "Interior Execution",
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=2700&auto=format&fit=crop",
        category: "Landscape Planning",
    },
];

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const loadTimer = setTimeout(() => setLoaded(true), 100);
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => {
            clearTimeout(loadTimer);
            clearInterval(interval);
        };
    }, []);

    return (
        <section className="relative h-screen w-full overflow-hidden bg-black text-white">
            {/* Background Slider - Z-0 */}
            <div className="absolute inset-0 z-0">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        <div
                            className={`w-full h-full bg-cover bg-center transition-transform duration-[10000ms] ease-linear ${index === currentSlide ? "scale-105" : "scale-100"
                                }`}
                            style={{ backgroundImage: `url(${slide.image})` }}
                        />
                        <div className="absolute inset-0 bg-black/20" />
                    </div>
                ))}
            </div>

            {/* Grid Overlay - Z-10 */}
            {/* Container for the grid lines - determines the "Cell" width */}
            <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-center items-center">
                <div className="w-full h-full max-w-[1600px] border-x border-white/5 relative"> {/* Optional outer border */}

                    {/* Top Horizontal Line */}
                    <div className="absolute top-[140px] left-0 w-full h-[1px] bg-white/60" />

                    {/* Bottom Horizontal Line */}
                    <div className="absolute bottom-[100px] left-0 w-full h-[1px] bg-white/60" />

                    {/* 6 Vertical Lines - Uneven Order */}
                    {/* Line 1: Left Edge (0%) */}
                    <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-white/60" />

                    {/* Line 2: Near Left (12%) */}
                    <div className="absolute top-[140px] bottom-[100px] left-[1%] w-[1px] bg-white/60" />

                    {/* Line 3: Inner Left (28%) */}
                    <div className="absolute top-[140px] bottom-[100px] left-[5%] w-[1px] bg-white/60" />

                    {/* Line 3: Inner Left (28%) */}
                    <div className="absolute top-[140px] bottom-[100px] left-[10%] w-[1px] bg-white/60" />

                    {/* Line 3: Inner Right (28%) */}
                    <div className="absolute top-[140px] bottom-[100px] right-[10%] w-[1px] bg-white/60" />

                    {/* Line 4: Inner Right (72%) */}
                    <div className="absolute top-[140px] bottom-[100px] right-[5%] w-[1px] bg-white/60" />

                    {/* Line 5: Near Right (12%) */}
                    <div className="absolute top-[140px] bottom-[100px] right-[1%] w-[1px] bg-white/60" />

                    {/* Line 6: Right Edge (0%) */}
                    <div className="absolute top-0 bottom-0 right-0 w-[1px] bg-white/60" />
                </div>
            </div>

            {/* Content Layer - Z-20 */}
            {/* Must match the grid container width to align UI elements */}
            <div className="absolute inset-0 z-20 flex flex-col items-center">
                <div className="w-full h-full max-w-[1600px] relative px-4 md:px-0">

                    {/* Navbar Area Visualization (Nav is fixed, but this helps spacing) */}
                    <div className="h-[140px] w-full" />

                    {/* Center Content Area */}
                    <div className="absolute top-[30dvh] left-0 right-0 flex flex-col items-center justify-center">
                        <h1 className="text-center font-cormorant-upright text-[clamp(1.5rem,3.5vw,3rem)] leading-[0.9] font-light tracking-wide uppercase max-w-5xl opacity-0 animate-[fadeIn_1s_ease-out_0.5s_forwards] mix-blend-overlay text-white/90">
                            Function Led Designs With <br />
                            <span className="font-normal font-cormorant-upright block mt-4">Cost Effective Execution Plans.</span>
                        </h1>
                        <p className="mt-8 text-xs tracking-[0.3em] text-white/60 uppercase">S+UM Architects</p>
                    </div>

                    {/* Bottom Info Bar */}
                    <div className="absolute bottom-0 left-0 w-full h-[100px] flex justify-between items-center px-6 md:px-[3%]">
                        {/* Text aligns with Line 2 approx if we use padding, or just standard positioning */}
                        <div className="text-md tracking-[0.2em] uppercase font-bold">
                            {slides[currentSlide].category}
                        </div>

                        <div className="text-md tracking-[0.2em] font-bold">
                            {currentSlide + 1} / {slides.length}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

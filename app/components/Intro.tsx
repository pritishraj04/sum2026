"use client";

import { useEffect, useRef, useState } from "react";

export default function Intro() {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={ref} className="py-32 px-6 md:px-10 lg:px-16 2xl:px-24 bg-white flex justify-center">
            <div
                className={`max-w-4xl text-center transition-all duration-1000 ease-out transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
            >
                <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] leading-snug font-light text-neutral-800">
                    A team of passionate architects. <strong className="font-semibold text-black">Focused on research, process & integrity.</strong>
                </h2>
                <p className="mt-6 text-neutral-500 text-sm tracking-wide uppercase">
                    Building what matters the most
                </p>
            </div>
        </section>
    );
}

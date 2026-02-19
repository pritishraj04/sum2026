"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const projects = [
    {
        id: 1,
        title: "Eco-Friendly Villa",
        location: "Oslo, Norway",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200",
    },
    {
        id: 2,
        title: "Urban Complex",
        location: "Berlin, Germany",
        image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1200",
    },
    {
        id: 3,
        title: "Mountain Retreat",
        location: "Aspen, USA",
        image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1200",
    },
];

export default function Works() {
    return (
        <section className="relative py-32 bg-neutral-50 overflow-hidden">
            {/* Background Typography */}
            <div className="absolute top-10 left-1/2 -translate-x-1/2 text-[clamp(5rem,15vw,12rem)] font-bold text-neutral-200/40 select-none pointer-events-none whitespace-nowrap z-0">
                Our Works
            </div>

            <div className="container mx-auto px-6 md:px-10 lg:px-16 2xl:px-24 flex flex-col gap-32 relative z-10">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
}

function ProjectCard({ project }: { project: any }) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 } // Trigger earlier
        );

        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`group w-full max-w-5xl mx-auto transition-all duration-1000 ease-out transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                }`}
        >
            <div className="overflow-hidden rounded-sm shadow-sm relative aspect-[16/9] bg-gray-200">
                {/* Next/Image usage with external domains requires config, using img for portability in this demo context unless user explicitly configured next.config.ts */}
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
            </div>
            <div className="mt-6 flex justify-between items-baseline border-b border-neutral-200 pb-2">
                <h3 className="text-xl md:text-2xl font-light text-neutral-900">{project.title}</h3>
                <span className="text-xs tracking-widest uppercase text-neutral-500">{project.location}</span>
            </div>
        </div>
    )
}

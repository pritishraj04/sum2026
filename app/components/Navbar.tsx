"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out flex justify-center ${scrolled ? "bg-black/60 backdrop-blur-md py-4" : "bg-transparent py-6"
        }`}
    >
      <div className="w-full max-w-[1600px] px-6 md:px-[3%] flex justify-between items-center">
        <div className="relative w-16 h-16">
          <img
            src="/assets/ui/sum-logo.svg"
            alt="S+UM Logo"
            className="w-full h-full object-contain mix-blend-difference"
          />
        </div>

        <div className="hidden md:flex gap-8 text-white text-xs tracking-[0.2em] font-light uppercase">
          {["Home", "Projects", "Studio", "News", "Contact"].map((item) => (
            <Link key={item} href="#" className="relative group">
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Mobile Menu Icon Placeholder */}
        <button className="md:hidden text-white uppercase text-xs tracking-widest">
          Menu
        </button>
      </div>
    </nav>
  );
}

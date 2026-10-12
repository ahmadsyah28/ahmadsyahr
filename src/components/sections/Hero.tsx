"use client";

import { useEffect, useState } from "react";

const heroHeadings = [
  { line1: "I BUILD", line2: "DIGITAL PRODUCTS", svg: "/hero-svg/digital.svg" },
  {
    line1: "I DEVELOP",
    line2: "WEB APPLICATIONS",
    svg: "/hero-svg/website.svg",
  },
  { line1: "I TURN IDEAS", line2: "INTO SYSTEMS", svg: "/hero-svg/search.svg" },
  {
    line1: "I LEAD",
    line2: "PRODUCT DEVELOPMENT",
    svg: "/hero-svg/product.svg",
  },
];

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [headingIndex, setHeadingIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 6,
        y: (e.clientY / window.innerHeight - 0.5) * 6,
      });
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeadingIndex((prev) => (prev + 1) % heroHeadings.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
      style={{
        backgroundColor: "#F8F6EF",
        backgroundImage:
          "linear-gradient(to top, rgba(232, 200, 74, 0.08) 0%, transparent 60%)",
      }}
    >
      {/* Subtle technical grid */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(44,36,22,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(44,36,22,0.05) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          backgroundAttachment: "fixed",
        }}
        aria-hidden="true"
      />

      {/* Top header */}
      <header className="absolute md:fixed top-0 left-0 z-50 px-[clamp(1.25rem,7vw,2rem)] md:px-12 lg:px-20 pt-[clamp(1.5rem,8svh,70px)] md:pt-[70px]">
        <div>
          <p
            className="text-[13px] text-[#2C2416]/60 leading-tight"
            style={{ fontFamily: "var(--font-playwrite)", fontWeight: 300 }}
          >
            Hey, I&rsquo;m
          </p>
          <p className="mt-0.5 text-xl leading-snug">
            <span className="font-bold text-[#2C2416]">Ahmad Syah </span>
            <span className="font-bold text-[#2C2416]/35">Ramadhan</span>
          </p>
          <p className="mt-1 text-[11px] text-[#2C2416]/55 flex items-center gap-2">
            Product x Technology
            <span
              className="inline-block w-1.5 h-1.5 rounded-full bg-[#E8C84A]"
              aria-hidden="true"
            />
          </p>
        </div>
      </header>

      {/* Vertical right navigation */}
      <nav
        className="hidden md:flex fixed right-12 lg:right-20 top-[54px] md:top-[70px] z-50 flex-col items-center gap-6"
        aria-label="Main navigation"
      >
        {[
          { label: "ABOUT", href: "#about" },
          { label: "WORK", href: "#projects" },
          { label: "CONTACT", href: "#contact" },
        ].map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="relative text-sm tracking-[0.22em] text-[#2C2416]/50 hover:text-[#2C2416] transition-colors duration-300 group"
          >
            {label}
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-px w-0 bg-[#E8C84A] transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
      </nav>

      {/* Mobile hamburger (Sticky global navigation) */}
      <button
        className="md:hidden fixed top-[max(1rem,env(safe-area-inset-top))] right-[clamp(1rem,5vw,1.5rem)] z-[100] flex flex-col gap-1.5 p-2.5 bg-white/40 backdrop-blur-md rounded-lg border border-white/20 shadow-sm"
        aria-label="Open navigation menu"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <span className={`block h-[1.5px] bg-[#2C2416] transition-transform duration-300 ${isMobileMenuOpen ? "w-5 rotate-45 translate-y-[3.5px]" : "w-5"}`} />
        <span className={`block h-[1.5px] bg-[#2C2416] transition-all duration-300 ${isMobileMenuOpen ? "w-5 -rotate-45 -translate-y-[4px]" : "w-3.5"}`} />
      </button>

      {/* Mobile Navigation Menu Dropdown */}
      <div 
        className={`md:hidden fixed top-[calc(max(1rem,env(safe-area-inset-top))+3.25rem)] right-[clamp(1rem,5vw,1.5rem)] z-[90] min-w-[100px] bg-white/30 backdrop-blur-xl border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-2xl p-6 transition-all duration-300 origin-top-right ${
          isMobileMenuOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-end gap-5">
          {[
            { label: "ABOUT", href: "#about" },
            { label: "WORK", href: "#projects" },
            { label: "CONTACT", href: "#contact" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-[13px] font-semibold tracking-wider text-[#2C2416] transition-colors hover:text-[#E8C84A]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>

      {/* Hero illustration — switches with heading */}
      <div
        className="absolute top-[max(8svh,7.5rem)] md:top-0 left-0 right-0 mx-auto md:left-auto md:right-[8%] md:mx-0 w-[min(80%,26rem)] sm:w-[60%] lg:w-[52%] h-[clamp(220px,55svh,560px)] md:h-[clamp(320px,68vh,880px)] pointer-events-none z-10"
        style={{
          transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
          transition: "transform 1s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        aria-hidden="true"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={headingIndex}
          src={heroHeadings[headingIndex].svg}
          alt=""
          className="w-full h-full object-contain hero-svg-fade"
        />
      </div>

      {/* Main hero content */}
      <div className="relative z-20 flex flex-col justify-end min-h-[100svh] md:min-h-screen px-[clamp(1rem,5vw,1.5rem)] md:px-12 lg:px-16 pb-[max(5svh,1.25rem)] md:pb-0">
        <h1 className="leading-[0.88] tracking-[-0.04em] mb-6 min-h-[clamp(4.5rem,12vw,14rem)] ml-0 md:ml-42 lg:ml-[var(--hero-offset)]  md:text-left flex flex-col  md:items-start">
          <span
            className="block text-[length:clamp(1.75rem,9vw,3.25rem)] md:text-[length:clamp(2.2rem,6vw,5rem)] font-black text-[#2C2416] hero-fade-up"
            style={{ animationDelay: "0.2s" }}
            key={`line1-${headingIndex}`}
          >
            {heroHeadings[headingIndex].line1}
          </span>
          <span
            className="block text-[length:clamp(1.75rem,9vw,3.25rem)] md:text-[length:clamp(2.2rem,6vw,7rem)] font-black text-[#d6c69cff] hero-fade-up"
            style={{ animationDelay: "0.32s" }}
            key={`line2-${headingIndex}`}
          >
            {heroHeadings[headingIndex].line2}
          </span>
        </h1>
      </div>

      {/* Left side — vertical year label */}
      <div
        className="hidden lg:flex absolute left-5 top-1/2 -translate-y-1/2 flex-col items-center gap-3 z-20"
        aria-hidden="true"
      >
        <span
          className="text-[9px] tracking-[0.28em] text-[#2C2416]/25 select-none"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          2025 - PORTFOLIO
        </span>
        <div
          className="w-px h-10"
          style={{ backgroundColor: "rgba(44,36,22,0.15)" }}
        />
      </div>
    </section>
  );
}

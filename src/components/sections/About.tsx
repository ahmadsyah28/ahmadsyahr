"use client";
import { useState } from "react";

const bio =
  "Good day. I'm a designer & developer who shapes ideas into products — from the first wireframe to the last line of code, with a clear compass for digital craft that delivers.";

// Mobile copy — last phrase rendered as a highlighted "tag"
const mobileGreeting = "Good day.";
const mobileBio =
  "I'm a designer & developer who shapes ideas into products — from the first wireframe to the last line of code, with a clear compass for digital craft that delivers";
const subBio =
  "I bridge the gap between design and engineering: prototyping in Figma, then bringing it to life with React, TypeScript, and Tailwind CSS.";

const tools = [
  { name: "GitHub", src: "/about-svg/github.svg" },
  { name: "VS Code", src: "/about-svg/vscode.svg" },
  { name: "React", src: "/about-svg/react.svg" },
  { name: "TypeScript", src: "/about-svg/Typescript.svg" },
  { name: "Notion", src: "/about-svg/Notion.svg" },
];

// Stagger delay classes matching Tailwind's default delay scale
const delayClasses = [
  "delay-0",
  "delay-75",
  "delay-150",
  "delay-200",
  "delay-300",
];

// Positions to form a circle around the center (radius ~40%)
// Removed static positions – icons are now positioned via CSS transforms to ensure a centered orbit

// Vertical column dividers echoing the reference's editorial grid
const gridLines = ["16%", "50%", "84%"];

export default function About() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      id="about"
      className="-mt-[1px] sticky top-0 z-0 h-[100svh] md:h-screen flex flex-col md:block"
      style={{
        background: "linear-gradient(rgba(232, 200, 74, 0.08), rgba(232, 200, 74, 0.08)), #F8F6EF",
        overflow: "clip",
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

      {/* Giant yellow organic shape — dominates the upper-left, extends off-screen */}
      <div
        className={`hidden md:flex absolute z-40 rounded-[10%] md:rounded-full pointer-events-none flex-col items-center justify-center text-center w-[150vw] h-[100vh] -top-[10%] -left-[25%] md:w-[min(1050px,120vw)] md:h-[min(1050px,120vw)] md:top-auto md:-bottom-[68%] md:-left-[10%] transition-transform duration-500 ease-out ${isHovered ? "md:-translate-x-[100px]" : "translate-x-0"}`}
        style={{
          backgroundColor: "#f2e0b1ff",
        }}
      >
        {/* Bio text lives inside the circle so it moves with it */}
        <div className="flex flex-col px-[20%] md:px-[30%] text-[#2C2416] -mt-[30vh] md:-mt-[35%] text-left pointer-events-auto">
          <p className="text-[clamp(1.2rem,4.5vw,2rem)] font-semibold leading-[1.3] md:leading-[1.2] tracking-[-0.01em] ">
            {bio}
          </p>
          <p className="mt-4 md:mt-6 text-[13px] md:text-[15px] leading-relaxed opacity-80 md:opacity-60">
            {subBio}
          </p>
        </div>
      </div>

      {/* ===== Mobile layout: text top, portrait bottom ===== */}
      <div className="md:hidden relative z-10 flex flex-col h-[100svh] overflow-hidden">
        {/* Yellow circle and text */}
        <div className="relative pt-[max(5svh,1.5rem)] px-[clamp(1.25rem,7vw,2.5rem)] flex-none">
          {/* Perfect yellow circle — sized by width but capped by screen height so it stays round on every phone */}
          <div
            className="absolute -top-[16svh] -left-[10vw] aspect-square w-[min(130vw,75svh)] sm:w-[min(100vw,75svh)] rounded-full pointer-events-none"
            style={{ backgroundColor: "#f2e0b1ff" }}
            aria-hidden="true"
          />

          <div className="relative z-10 text-[#2C2416] max-w-[34rem]">
            <span className="block text-[11px] min-[380px]:text-[12px] font-medium tracking-[0.08em] uppercase opacity-60 mb-[clamp(0.5rem,1.5svh,0.75rem)]">
              About me
            </span>
            <p className="text-[length:clamp(1rem,min(5vw,2.6svh),1.6rem)] font-semibold leading-[1.35] tracking-[-0.01em]">
              {mobileGreeting}
              <br />
              {mobileBio}
            </p>
          </div>
        </div>

        {/* Portrait sticking to bottom */}
        <div className="relative flex-1 min-h-0 w-full flex justify-center items-end mt-[clamp(0.5rem,2svh,1rem)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/profile.png"
            alt="Portrait of Ahmad Syah Ramadhan"
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] h-full object-cover object-bottom"
          />
        </div>
      </div>



      {/* Right — large portrait integrated with the yellow composition */}
      <div
        className="hidden md:block group absolute right-0 bottom-0 z-30 w-[85%] h-[60vh] sm:w-[60%] sm:h-[60vh] md:w-[50%] md:h-[70vh] lg:w-[42%] lg:h-screen"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(!isHovered)} // Toggle on mobile tap
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/profile.png"
          alt="Portrait of Ahmad Syah Ramadhan"
          className={`relative z-0 ml-[-2rem] md:ml-[-6rem] w-full h-full object-cover object-top transition-transform duration-500 ease-out ${isHovered ? "translate-y-4 md:translate-y-20" : "translate-y-0"}`}
        />

        {/* Translucent yellow circle overlapping the lower portrait */}
        <div
          className={`absolute z-10 rounded-full pointer-events-none w-[120vw] pb-[120vw] md:w-[min(700px,100vw)] md:pb-[min(700px,100vw)] -right-[20%] -bottom-[20%] md:-right-[0%] md:-bottom-[50%] transition-transform duration-500 ease-out ${isHovered ? "translate-x-[150px] md:translate-x-[550px] scale-105" : "translate-x-0 scale-100"}`}
          style={{
            backgroundColor: "#c5ac6eff",
            opacity: 0.75,
          }}
          aria-hidden="true"
        />

        {/* Floating tool icons — appear on hover and orbit */}
        <div
          className="absolute w-full h-full -top-4 -left-4 md:-top-8 md:-left-20 z-30 pointer-events-none flex items-center justify-center"
          style={{ animation: isHovered ? "spin 20s linear infinite" : "none" }}
        >
          {tools.map((tool, i) => {
            const angle = (i * 360) / tools.length;
            return (
              <div
                key={tool.name}
                className={`absolute flex items-center justify-center opacity-0 scale-50 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isHovered ? "opacity-100 scale-100" : ""} group-hover:opacity-100 group-hover:scale-100 ${delayClasses[i]}`}
                style={{
                  transform: `rotate(${angle}deg) translateX(clamp(9rem, 25vw, 18rem)) rotate(-${angle}deg)`,
                  willChange: "transform, opacity",
                }}
              >
                {/* Counter-rotation to keep icons upright while orbiting */}
                <div style={{ animation: isHovered ? "spin 20s linear infinite reverse" : "none" }}>
                  <div
                    className="pointer-events-auto flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-[#3B2B25]/20 backdrop-blur-md border border-white/50 cursor-pointer hover:!bg-[#3B2B25]/60 transition-colors duration-300"
                    role="img"
                    aria-label={tool.name}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={tool.src} alt="" className="w-6 h-6 md:w-9 md:h-9 object-contain transition-transform duration-300 hover:scale-125 hover:-rotate-12 drop-shadow-sm" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hidden md:flex absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-30 flex-col items-center gap-2">
        <span className="text-[10px] md:text-[11px] tracking-[0.22em] text-[#2C2416]/40">
          SCROLL DOWN
        </span>
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          className="text-[#2C2416]/40 animate-bounce"
          aria-hidden="true"
        >
          <path
            d="M1 1l5 5 5-5"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}

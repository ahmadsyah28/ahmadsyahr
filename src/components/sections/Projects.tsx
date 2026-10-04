"use client";

import { useState } from "react";

const projects = [
  {
    title: "FLOWIN",
    category: "Mobile App Development",
    description: "Developed the Flowin mobile app, translating service needs into features and integrating backend services.",
  },
  {
    title: "GetSmart",
    category: "Product Management & Strategy",
    description: "Defined product requirements and user flows, coordinating development for students, teachers, and parents.",
  },
  {
    title: "Sigap Stunting",
    category: "Product Management",
    description: "Structured user flows and digital features for monitoring and reporting based on Posyandu cadres' needs.",
  },
  {
    title: "Daur Tani",
    category: "UX Research & Product Strategy",
    description: "Conducted stakeholder interviews and translated findings into product requirements for the development team.",
  },
  {
    title: "CIRVIA",
    category: "Software Engineering & Computer Vision",
    description: "Developed virtual circuit simulation features enabling physical hand interactions via computer vision.",
  },
  {
    title: "Ecoflow",
    category: "IoT & Mobile App Development",
    description: "Built a Flutter app integrated with ESP32-S3 for real-time water quality monitoring and data visualization.",
  },
  {
    title: "GetDIRME",
    category: "Product Management & Leadership",
    description: "Led product development for an LMS, defining interactive features, evaluation tools, and detailed activity tracking.",
  },
];

const logos = [
  "/product/flowin.png",
  "/product/getsmart.png",
  "/product/sigapstunting.png",
  "/product/ecoflow.png",
  "/product/getdirme.png",
  "/product/methalearn.png",
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="relative z-30 -mt-12 lg:-mt-[3.33vw] pt-32 md:pt-40 lg:pt-[11.1vw] pb-24 md:pb-32 min-h-screen">
      {/* Dark background layer (#2C2416) for the intersecting triangle effect */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundColor: "#d6c69cff",
          clipPath: "polygon(0 4vw, 0% 0, 100% 16vw, 100% 100%, 0 100%)"
        }}
      />

      {/* Main light background layer with a clean, single-peak angled top edge */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundColor: "#f8eed0ff",
          clipPath: "polygon(0 14vw, 100% 4vw, 100% 8vw, 100% 100%, 0 100%)"
        }}
      >
        {/* Subtle technical grid */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(44,36,22,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(44,36,22,0.05) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 px-8 md:px-12 lg:pl-[var(--indent)] lg:pr-[var(--gutter-end)] mb-16 md:mb-24">
        <p className="text-[11px] tracking-[0.22em] text-[#2C2416]/50 uppercase mb-8">
          PROJECTS
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#2C2416] leading-[1.2] max-w-4xl tracking-tight">
          Selected works showcasing <br className="hidden md:block" />
          Technical Expertise in <br className="hidden md:block" />
          <span className="bg-[#E5DCC3] px-3 py-1 inline-block mt-2">Design & Engineering</span>
        </h2>
      </div>

      <div className="relative z-10 flex flex-col border-t border-[#2C2416]/10">
        {projects.map((project, index) => {
          const isActive = activeIndex === index;
          return (
            <div
              key={index}
              onClick={() => setActiveIndex(isActive ? null : index)}
              className={`group flex flex-col md:flex-row md:items-center cursor-pointer transition-all duration-700 ease-in-out border-b border-[#2C2416]/10 px-8 md:px-12 lg:pl-[var(--indent)] lg:pr-[var(--gutter-end)] py-10 md:py-16 overflow-hidden ${isActive ? "bg-[#4E443A] text-[#F8F6EF]" : "hover:bg-[#EAE4D9]/70 text-[#2C2416]"
                }`}
            >
              {/* Title & Category/Tech */}
              <div className={`w-full flex flex-col justify-center transition-all duration-700 ease-in-out ${isActive ? "md:w-[45%] lg:w-[50%]" : "md:w-[100%] lg:w-[100%]"}`}>
                <h3 className={`text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 md:mb-3 tracking-tight transition-colors duration-700 ${isActive ? "text-[#F8F6EF]" : "text-[#2C2416]"}`}>
                  {project.title}
                </h3>
                <p className={`text-sm md:text-base transition-colors duration-700 ${isActive ? "text-[#F8F6EF]/70" : "text-[#2C2416]/60"}`}>
                  {project.category}
                </p>
              </div>

              {/* Description */}
              <div
                className={`w-full transition-all duration-700 ease-in-out overflow-hidden flex items-center md:-ml-4 lg:-ml-8 ${isActive ? "max-h-[500px] mt-6 md:mt-0 md:w-[55%] lg:w-[50%]" : "max-h-0 mt-0 md:w-0"
                  }`}
              >
                <div className={`md:pl-10 h-full flex items-center transition-opacity duration-500 ${isActive ? "opacity-100 delay-300" : "opacity-0 delay-0"}`}>
                  <p className="text-sm md:text-sm lg:text-base leading-relaxed opacity-90 border-l-0 md:border-l md:border-white/20 md:pl-6 text-justify">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Logos Marquee */}
      <div className="relative z-10 pt-20 pb-36 md:pt-32 lg:pb-[max(9rem,10vw)] overflow-hidden flex flex-col items-center">
        <div className="w-full relative overflow-hidden flex mask-image-fade">
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              display: flex;
              width: max-content;
              animation: marquee 30s linear infinite;
            }
            .animate-marquee:hover {
              animation-play-state: paused;
            }
            .mask-image-fade {
              -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
              mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
            }
          `}</style>

          <div className="animate-marquee flex items-center gap-12 md:gap-24 px-6 md:px-12">
            {[...logos, ...logos].map((logo, i) => (
              <div key={i} className="flex-shrink-0 flex items-center justify-center transition-all duration-500">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={logo} alt={`Product Logo ${i}`} className="h-16 md:h-24 lg:h-32 object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

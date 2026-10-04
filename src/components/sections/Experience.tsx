"use client";

import { useState } from "react";

const experiences = [
  {
    year: "2026",
    role: "Product Manager",
    company: "Gutech Developer Digital - Banda Aceh",
    description: "Led multiple software projects from planning to deployment. Managed cross-functional teams, improved workflows, and maintained 90%+ milestone success. Acted as primary client liaison for requirements and project updates.",
  },
  {
    year: "2025",
    role: "Machine Learning Engineer Intern",
    company: "PERUMDAM Tirta Daroy - Banda Aceh",
    description: "Developed and optimized machine learning models. Processed datasets of 600,000+ records to drive intelligent decision-making, and collaborated to integrate AI models into production applications.",
  },
  {
    year: "2025",
    role: "Fullstack Developer",
    company: "Physics Department Universitas Syiah Kuala - Banda Aceh",
    description: "Developed 10+ system modules using Laravel and MySQL. Implemented integrated fullstack features that improved administrative efficiency and reduced manual processing time by 40–50%.",
  }
];

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="experience" className="relative z-40 -mt-[27vw] pt-[calc(14vw_+_3.5rem)] md:pt-[28vw] lg:pt-[calc(14vw_+_clamp(4rem,10vw,10rem))] pb-24 md:pb-32 min-h-screen">
      {/* Dark background layer (#2C2416) for the intersecting triangle effect */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundColor: "#d6c69cff",
          clipPath: "polygon(0 4vw, 0% 0, 100% 18vw, 100% 100%, 0 100%)"
        }}
      />

      {/* Main light background layer with a clean, single-peak angled top edge */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundColor: "#ece1be",
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

      <div className="relative z-10 px-[clamp(1.25rem,6vw,2rem)] md:px-12 lg:pl-[var(--indent)] lg:pr-[var(--gutter-end)] mb-10 md:mb-24">
        <p className="text-[11px] tracking-[0.22em] text-[#2C2416]/50 uppercase mb-4 md:mb-8">
          EXPERIENCE
        </p>
        <h2 className="text-[length:clamp(1.5rem,7vw,2.25rem)] md:text-4xl lg:text-5xl font-medium text-[#2C2416] leading-[1.25] md:leading-[1.2] max-w-4xl tracking-tight">
          A track record of multidisciplinary <br className="hidden md:block" />
          Technical Experience in <br className="hidden md:block" />
          <span className="bg-[#E5DCC3] px-2 md:px-3 py-1 inline-block mt-2">Product & Engineering</span>
        </h2>
      </div>

      <div className="relative z-10 flex flex-col border-t border-[#2C2416]/10">
        {experiences.map((exp, index) => {
          const isActive = activeIndex === index;
          return (
            <div
              key={index}
              onClick={() => setActiveIndex(isActive ? null : index)}
              className={`group flex flex-col md:flex-row md:items-center cursor-pointer transition-all duration-700 ease-in-out border-b border-[#2C2416]/10 px-[clamp(1.25rem,6vw,2rem)] md:px-12 lg:pl-[var(--indent)] lg:pr-[var(--gutter-end)] py-7 md:py-16 overflow-hidden ${isActive ? "bg-[#4E443A] text-[#F8F6EF]" : "hover:bg-[#EAE4D9]/70 text-[#2C2416]"
                }`}
            >
              {/* Year */}
              <div className="w-full md:w-[25%] lg:w-[20%] shrink-0 transition-all duration-700 ease-in-out mb-2 md:mb-0">
                <span className={`text-sm md:text-3xl lg:text-4xl font-bold tracking-[0.1em] md:tracking-normal transition-colors duration-700 ${isActive ? "text-[#F8F6EF]" : "text-[#2C2416]/60 md:text-[#2C2416]"}`}>
                  {exp.year}
                </span>
              </div>

              {/* Role & Company */}
              <div className={`w-full flex flex-col justify-center transition-all duration-700 ease-in-out md:-ml-12 lg:-ml-16 ${isActive ? "md:w-[35%] lg:w-[40%]" : "md:w-[75%] lg:w-[80%]"}`}>
                <h3 className={`text-[length:clamp(1.25rem,5.5vw,1.5rem)] md:text-3xl lg:text-4xl font-semibold leading-tight mb-1.5 md:mb-3 tracking-tight transition-colors duration-700 ${isActive ? "text-[#F8F6EF]" : "text-[#2C2416]"}`}>
                  {exp.role}
                </h3>
                <p className={`text-sm md:text-base transition-colors duration-700 ${isActive ? "text-[#F8F6EF]/70" : "text-[#2C2416]/60"}`}>
                  {exp.company}
                </p>
              </div>

              {/* Description */}
              <div
                className={`w-full transition-all duration-700 ease-in-out overflow-hidden flex items-center md:-ml-4 lg:-ml-8 ${isActive ? "max-h-[500px] opacity-100 mt-6 md:mt-0 md:w-[40%]" : "max-h-0 opacity-0 mt-0 md:w-0"
                  }`}
              >
                <div className="md:pl-10 h-full flex items-center">
                  <p className="text-sm md:text-sm lg:text-base leading-relaxed opacity-90 border-l-0 md:border-l md:border-white/20 md:pl-6 text-left md:text-justify">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

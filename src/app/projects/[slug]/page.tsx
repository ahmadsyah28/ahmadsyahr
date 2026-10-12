import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projectsData, getProjectBySlug } from "@/data/projects";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — Ahmad Syah Ramadhan`,
    description: project.overview,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Find next and previous projects for bottom navigation
  const currentIndex = projectsData.findIndex((p) => p.slug === project.slug);
  const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-[#F8F6EF] text-[#2C2416] selection:bg-[#E5DCC3] selection:text-[#2C2416] relative overflow-hidden">
      {/* Background technical grid pattern */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(rgba(44,36,22,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(44,36,22,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      {/* Decorative top polygon banner matching site design */}
      <div
        className="absolute top-0 left-0 right-0 h-48 md:h-64 pointer-events-none z-0"
        style={{
          backgroundColor: "#d6c69c33",
          clipPath: "polygon(0 0, 100% 0, 100% 60%, 0 100%)",
        }}
      />

      {/* Top Navigation Bar */}
      <nav className="relative z-20 border-b border-[#2C2416]/10 bg-[#F8F6EF]/90 backdrop-blur-md sticky top-0">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2.5 text-xs md:text-sm font-medium tracking-wider uppercase text-[#2C2416]/75 hover:text-[#2C2416] transition-all group"
          >
            <span className="w-8 h-8 rounded-full border border-[#2C2416]/20 flex items-center justify-center group-hover:bg-[#2C2416] group-hover:text-[#F8F6EF] transition-all">
              ←
            </span>
            <span>Back to Projects</span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="text-[11px] uppercase tracking-widest px-3 py-1 bg-[#2C2416]/5 border border-[#2C2416]/10 rounded-full font-mono text-[#2C2416]/70">
              {project.year}
            </span>
            {project.status && (
              <span className="text-[11px] uppercase tracking-widest px-3 py-1 bg-[#4E443A] text-[#F8F6EF] rounded-full font-mono hidden sm:inline-block">
                {project.status}
              </span>
            )}
          </div>
        </div>
      </nav>

      {/* Main Container */}
      <main className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 pt-10 md:pt-16 pb-28">
        {/* Header / Hero Section */}
        <header className="mb-14 md:mb-20">
          <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm tracking-wider uppercase text-[#2C2416]/60 mb-5">
            <span className="font-semibold text-[#2C2416]">{project.category}</span>
            <span>•</span>
            <span>{project.type}</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#2C2416] mb-6 leading-[1.08]">
            {project.title}
          </h1>

          <p className="text-xl md:text-2xl text-[#2C2416]/80 font-light max-w-3xl leading-relaxed">
            {project.tagline}
          </p>

          {/* Quick Meta Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 pt-8 border-t border-[#2C2416]/10">
            <div>
              <p className="text-[11px] uppercase tracking-wider text-[#2C2416]/50 mb-1">Role</p>
              <p className="text-sm md:text-base font-medium text-[#2C2416]">{project.role}</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider text-[#2C2416]/50 mb-1">Timeline</p>
              <p className="text-sm md:text-base font-medium text-[#2C2416]">{project.year}</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider text-[#2C2416]/50 mb-1">Project Type</p>
              <p className="text-sm md:text-base font-medium text-[#2C2416]">{project.type}</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider text-[#2C2416]/50 mb-1">Status</p>
              <p className="text-sm md:text-base font-medium text-[#2C2416]">{project.status || "Completed"}</p>
            </div>
          </div>
        </header>

        {/* Project Photos / Gallery Section */}
        <section className="mb-16 md:mb-24">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-[#2C2416]/60 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#2C2416]" />
              Project Visuals & Showcase
            </h2>
            <span className="text-xs text-[#2C2416]/50 font-mono">
              {project.images.length > 0 ? `${project.images.length} Image(s)` : "Preview"}
            </span>
          </div>

          {project.images && project.images.length > 0 ? (
            <div className="space-y-6">
              {/* Primary Visual Showcase Card */}
              <div className="relative rounded-2xl overflow-hidden border border-[#2C2416]/15 bg-[#EAE4D9]/60 shadow-lg p-6 md:p-10 flex items-center justify-center min-h-[300px] md:min-h-[460px]">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.images[0]}
                  alt={`${project.title} Preview`}
                  className="max-h-[320px] md:max-h-[420px] w-auto object-contain drop-shadow-2xl transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>

              {/* Multiple Images Grid (if more images added) */}
              {project.images.length > 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.images.slice(1).map((img, i) => (
                    <div
                      key={i}
                      className="rounded-xl overflow-hidden border border-[#2C2416]/15 bg-[#EAE4D9]/40 p-4 flex items-center justify-center min-h-[200px]"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={img}
                        alt={`${project.title} screenshot ${i + 2}`}
                        className="max-h-[220px] w-auto object-contain"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            /* Clean placeholder informing user where to add screenshots */
            <div className="rounded-2xl border-2 border-dashed border-[#2C2416]/20 bg-[#EAE4D9]/40 p-10 md:p-14 text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#2C2416]/5 border border-[#2C2416]/15 flex items-center justify-center text-2xl">
                📷
              </div>
              <h3 className="text-lg font-semibold text-[#2C2416] mb-2">
                Project Gallery Placeholder
              </h3>
              <p className="text-sm text-[#2C2416]/70 max-w-md mx-auto mb-4">
                Kamu dapat menambahkan foto dokumentasi atau mockup screenshot project ini dengan memasukkan file foto ke folder <code className="bg-[#2C2416]/10 px-1.5 py-0.5 rounded font-mono text-xs text-[#2C2416]">public/images/</code> dan mereferensikannya pada data project.
              </p>
              <div className="inline-block text-xs font-mono px-3 py-1.5 bg-[#2C2416]/10 rounded text-[#2C2416]/80">
                slug: {project.slug}
              </div>
            </div>
          )}
        </section>

        {/* Metrics Banner (if any) */}
        {project.metrics && project.metrics.length > 0 && (
          <section className="mb-16 md:mb-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {project.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="bg-[#2C2416] text-[#F8F6EF] rounded-xl p-5 md:p-6 border border-[#2C2416]"
                >
                  <p className="text-2xl md:text-3xl font-bold tracking-tight text-[#E5DCC3] mb-1 font-mono">
                    {m.value}
                  </p>
                  <p className="text-xs uppercase tracking-wider text-[#F8F6EF]/70 font-medium">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Structured Sections */}
        <div className="space-y-16 md:space-y-24 border-t border-[#2C2416]/10 pt-14">
          {/* 1. OVERVIEW */}
          <section id="overview" className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#2C2416]/50">
                01 — SUMMARY
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#2C2416] mt-2 tracking-tight">
                Overview
              </h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-base md:text-lg text-[#2C2416]/90 leading-relaxed font-light text-justify">
                {project.overview}
              </p>
            </div>
          </section>

          {/* 2. THE CHALLENGE */}
          <section id="challenge" className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#2C2416]/50">
                02 — PROBLEM STATEMENT
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#2C2416] mt-2 tracking-tight">
                The Challenge
              </h2>
            </div>
            <div className="md:col-span-8">
              <div className="bg-[#EAE4D9]/50 border-l-4 border-[#2C2416] p-6 md:p-8 rounded-r-xl">
                <p className="text-base md:text-lg text-[#2C2416]/90 leading-relaxed text-justify">
                  {project.challenge}
                </p>
              </div>
            </div>
          </section>

          {/* 3. THE SOLUTION */}
          <section id="solution" className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#2C2416]/50">
                03 — PRODUCT STRATEGY
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#2C2416] mt-2 tracking-tight">
                The Solution
              </h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-base md:text-lg text-[#2C2416]/90 leading-relaxed text-justify mb-6 font-light">
                {project.solution}
              </p>
              {project.researchAnalysis && (
                <div className="bg-[#F8F6EF] border border-[#2C2416]/15 rounded-xl p-6">
                  <h3 className="text-xs font-mono uppercase tracking-widest text-[#2C2416]/60 mb-2 font-bold">
                    Research & Analysis
                  </h3>
                  <p className="text-sm md:text-base text-[#2C2416]/80 leading-relaxed">
                    {project.researchAnalysis}
                  </p>
                </div>
              )}
            </div>
          </section>

          {/* 4. KEY FEATURES */}
          <section id="features" className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#2C2416]/50">
                04 — CAPABILITIES
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#2C2416] mt-2 tracking-tight">
                Key Features
              </h2>
            </div>
            <div className="md:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.keyFeatures.map((feature, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl border border-[#2C2416]/15 bg-white/60 hover:bg-white hover:border-[#2C2416]/30 transition-all duration-300 flex items-start gap-3.5 shadow-sm"
                  >
                    <span className="w-6 h-6 rounded-full bg-[#2C2416] text-[#F8F6EF] flex-shrink-0 flex items-center justify-center text-xs font-mono font-semibold mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-sm md:text-base font-medium text-[#2C2416] leading-snug">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 5. MY CONTRIBUTION & PROCESS */}
          <section id="contribution" className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#2C2416]/50">
                05 — EXECUTION
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#2C2416] mt-2 tracking-tight">
                My Contribution
              </h2>
            </div>
            <div className="md:col-span-8 space-y-6">
              <div className="p-6 md:p-8 rounded-xl bg-[#4E443A] text-[#F8F6EF] shadow-md">
                <p className="text-base md:text-lg leading-relaxed text-[#F8F6EF]/95 text-justify">
                  {project.contribution}
                </p>
              </div>

              {/* Product Management / Data Workflow Process */}
              {project.process && project.process.length > 0 && (
                <div className="border border-[#2C2416]/15 rounded-xl p-6 bg-white/40">
                  <h3 className="text-xs font-mono uppercase tracking-widest text-[#2C2416]/70 mb-4 font-bold flex items-center gap-2">
                    <span>⚡</span> Methodology & Process Workflow
                  </h3>
                  <div className="flex flex-wrap items-center gap-2">
                    {project.process.map((step, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="text-xs md:text-sm font-medium px-3 py-1.5 rounded-lg bg-[#2C2416]/5 border border-[#2C2416]/10 text-[#2C2416]">
                          {step}
                        </span>
                        {i < project.process!.length - 1 && (
                          <span className="text-[#2C2416]/40 font-mono text-xs">→</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* 6. IMPACT */}
          <section id="impact" className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#2C2416]/50">
                06 — OUTCOMES
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#2C2416] mt-2 tracking-tight">
                Impact & Results
              </h2>
            </div>
            <div className="md:col-span-8">
              <div className="bg-[#E5DCC3]/40 border border-[#2C2416]/15 rounded-xl p-6 md:p-8">
                <p className="text-base md:text-lg text-[#2C2416] leading-relaxed text-justify">
                  {project.impact}
                </p>
              </div>
            </div>
          </section>

          {/* TECH STACK */}
          {project.technologies && project.technologies.length > 0 && (
            <section id="technologies" className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-4">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#2C2416]/50">
                  STACK
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-[#2C2416] mt-2 tracking-tight">
                  Technologies
                </h2>
              </div>
              <div className="md:col-span-8">
                <div className="flex flex-wrap gap-2.5">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-lg bg-[#2C2416] text-[#F8F6EF] text-xs md:text-sm font-medium tracking-wide shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* 7. PUBLICATION / PROJECT LINKS */}
          <section id="publication" className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#2C2416]/50">
                07 — ACCESS
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#2C2416] mt-2 tracking-tight">
                Publication & Links
              </h2>
            </div>
            <div className="md:col-span-8">
              {project.publications && project.publications.length > 0 ? (
                <div className="flex flex-col sm:flex-row flex-wrap gap-3.5">
                  {project.publications.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-between gap-4 px-6 py-4 rounded-xl bg-[#2C2416] text-[#F8F6EF] hover:bg-[#4E443A] transition-all font-medium text-sm md:text-base group shadow-md"
                    >
                      <span>{link.label}</span>
                      <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-xs group-hover:translate-x-1 transition-transform">
                        ↗
                      </span>
                    </a>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-[#2C2416]/60 italic">
                  Link publikasi atau repositori akan segera diperbarui.
                </p>
              )}
            </div>
          </section>
        </div>

        {/* Project Switcher Navigation */}
        <nav className="mt-24 pt-12 border-t border-[#2C2416]/15 flex flex-col sm:flex-row items-center justify-between gap-6">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="flex flex-col items-start group w-full sm:w-auto"
            >
              <span className="text-xs font-mono uppercase tracking-wider text-[#2C2416]/50 group-hover:text-[#2C2416] transition-colors">
                ← Previous Project
              </span>
              <span className="text-lg font-semibold text-[#2C2416] group-hover:underline">
                {prevProject.title}
              </span>
            </Link>
          ) : (
            <div className="hidden sm:block" />
          )}

          <Link
            href="/#projects"
            className="text-xs uppercase tracking-widest font-mono font-medium px-5 py-2.5 rounded-full border border-[#2C2416]/20 hover:bg-[#2C2416] hover:text-[#F8F6EF] transition-all"
          >
            All Projects
          </Link>

          {nextProject ? (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="flex flex-col items-end group w-full sm:w-auto text-right"
            >
              <span className="text-xs font-mono uppercase tracking-wider text-[#2C2416]/50 group-hover:text-[#2C2416] transition-colors">
                Next Project →
              </span>
              <span className="text-lg font-semibold text-[#2C2416] group-hover:underline">
                {nextProject.title}
              </span>
            </Link>
          ) : (
            <div className="hidden sm:block" />
          )}
        </nav>
      </main>
    </div>
  );
}

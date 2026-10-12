"use client";

import { useState } from "react";

export default function Contact() {
  const [showPdf, setShowPdf] = useState(false);

  const openCv = () => {
    const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
    const inlineSupported = navigator.pdfViewerEnabled !== false && !isMobile;
    if (inlineSupported) {
      setShowPdf(true);
    } else {
      window.open("/CV Ahmad Syah Ramadhan.pdf", "_blank", "noopener,noreferrer");
    }
  };
  return (
    <section id="contact" className="relative w-full min-h-screen flex items-center justify-center py-32 overflow-hidden">
      {/* Background with technical grid */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom,#ece1be, #fffae9ff)",
        }}
      >
        <div
          className="absolute inset-0 z-0 opacity-50"
          style={{
            backgroundImage:
              "linear-gradient(rgba(44,36,22,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(44,36,22,0.05) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center">
        
        {/* Dark Box */}
        <div className="bg-[#4E443A] text-[#F8F6EF] p-12 md:p-16 w-full md:w-[450px] shadow-2xl relative z-20 md:translate-x-12">
          <div className="flex flex-col gap-6 md:gap-8 mb-16">
            <a href="https://www.linkedin.com/in/ahmad-syah-ramadhan-0a88b2269" target="_blank" rel="noopener noreferrer" className="text-4xl md:text-5xl font-bold hover:text-white transition-colors duration-300">
              LinkedIN
            </a>
            <a href="https://www.instagram.com/ahmadsyahr_" target="_blank" rel="noopener noreferrer" className="text-4xl md:text-5xl font-bold hover:text-white transition-colors duration-300">
              Instagram
            </a>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider mb-1 opacity-80">Phone</p>
              <a href="tel:087801482963" className="text-sm md:text-base hover:underline opacity-90 transition-all">
                087801482963
              </a>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider mb-1 opacity-80">Email</p>
              <a href="mailto:ahmadsyahrmdn@gmail.com" className="text-sm md:text-base hover:underline opacity-90 transition-all">
                ahmadsyahrmdn@gmail.com
              </a>
            </div>
          </div>

          <div className="mt-16 text-xs opacity-50">
            &copy; {new Date().getFullYear()} Ahmad Syah Ramadhan
          </div>
        </div>

        {/* White Box / Secondary Links */}
        <div className="bg-white p-12 md:p-16 w-full md:w-[450px] min-h-[450px] shadow-xl relative z-10 -mt-12 md:mt-0 md:-translate-x-12 flex flex-col justify-center">
          <div className="flex flex-col gap-6 md:pl-20 text-xs tracking-widest text-[#2C2416]/50 uppercase font-bold">
            <button 
              onClick={(e) => { e.preventDefault(); openCv(); }} 
              className="text-left hover:text-[#2C2416] cursor-pointer transition-colors duration-300"
            >
              Resume / CV
            </button>
            <a href="https://github.com/ahmadsyah28" target="_blank" rel="noopener noreferrer" className="hover:text-[#2C2416] cursor-pointer transition-colors duration-300">
              GitHub Profile
            </a>
            <a href="/CV Ahmad Syah Ramadhan.pdf" download className="hover:text-[#2C2416] cursor-pointer transition-colors duration-300">
              Download CV
            </a>
          </div>
        </div>
        
      </div>
      
      {/* Scroll to top button */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-14 h-14 rounded-full bg-black/5 flex items-center justify-center hover:bg-black/10 transition-colors duration-300"
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6 text-[#2C2416]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>

      {/* PDF Preview Modal */}
      {showPdf && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm p-4 md:p-8 animate-in fade-in duration-300">
          {/* Close Button */}
          <div className="w-full max-w-5xl flex justify-end mb-4">
            <button 
              onClick={() => setShowPdf(false)} 
              className="bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-colors"
              aria-label="Close Preview"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* PDF Container */}
          <div className="w-full max-w-5xl h-[80vh] md:h-[85vh] bg-white rounded-xl overflow-hidden shadow-2xl">
            <iframe 
              src="/CV Ahmad Syah Ramadhan.pdf" 
              className="w-full h-full border-none"
              title="Resume Preview"
            />
          </div>
        </div>
      )}
    </section>
  );
}

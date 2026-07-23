import { Link } from "react-router";
import { ArrowRight, Download, Mail } from "lucide-react";
import { useEffect, useRef } from "react";
import imgCanvas from "@/imports/EditableWebsiteWithChat/f139ec9f2f056dbd5e34e23781c27a8990d970ed.png";

function OscilloscopeDisplay() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let offset = 0;

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.fillStyle = "#111111";
      ctx.fillRect(0, 0, w, h);

      // Grid
      ctx.strokeStyle = "#D4AF37";
      ctx.lineWidth = 0.5;
      ctx.globalAlpha = 0.2;
      for (let x = 0; x < w; x += 40) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke(); }
      for (let y = 0; y < h; y += 40) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke(); }
      ctx.globalAlpha = 1;

      const cy = h / 2;
      const amp = 50;
      const freq = 0.02;

      // Sine wave
      ctx.strokeStyle = "#D4AF37";
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let x = 0; x < w; x++) {
        const y = cy + Math.sin((x + offset) * freq) * amp;
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Square wave
      ctx.strokeStyle = "#8A2E3F";
      ctx.lineWidth = 2;
      ctx.globalAlpha = 0.7;
      ctx.beginPath();
      for (let x = 0; x < w; x++) {
        const y = cy + (Math.sin((x + offset * 0.5) * freq * 2) > 0 ? 1 : -1) * 30;
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.globalAlpha = 1;

      offset += 2;
      animId = requestAnimationFrame(draw);
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * devicePixelRatio;
      canvas.height = rect.height * devicePixelRatio;
      ctx.scale(devicePixelRatio, devicePixelRatio);
    };

    resize();
    window.addEventListener("resize", resize);
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <div className="relative border-4 border-[#4A4A4A] bg-[#2D2D2D] p-4 shadow-2xl">
      {/* Screen Header */}
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#D4AF37]/30">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#D4AF37] animate-pulse opacity-75" />
          <span className="text-[#D4AF37] text-xs font-mono tracking-wider">SIGNAL ACTIVE</span>
        </div>
        <div className="text-[#7C7C7C] text-xs font-mono">CH1: 5.0V</div>
      </div>

      {/* Screen */}
      <div className="relative bg-[#111111] border-2 border-[#4A4A4A] overflow-hidden">
        <canvas ref={canvasRef} className="w-full h-64 md:h-80" style={{ display: "block" }} />
        <div className="absolute top-2 right-2 text-[#D4AF37] text-xs font-mono opacity-70">[V/div: 1.0V]</div>
        <div className="absolute bottom-2 right-2 text-[#8A2E3F] text-xs font-mono opacity-70">[t/div: 10ms]</div>
      </div>

      {/* Knobs */}
      <div className="mt-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          {[30, 60, 90].map((deg, i) => (
            <div key={i} className="w-8 h-8 rounded-full border-2 border-[#4A4A4A] bg-[#111111] flex items-center justify-center">
              <div className="w-1 h-3 bg-[#D4AF37]" style={{ transform: `rotate(${deg}deg)` }} />
            </div>
          ))}
        </div>
        <div className="text-[#7C7C7C] text-xs font-mono">HAZEL_WHITE.SYS</div>
      </div>
    </div>
  );
}

export function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="space-y-8">
            <div className="inline-block border border-[#D4AF37] px-4 py-2">
              <div className="text-[#D4AF37] text-xs font-mono tracking-wider">WELCOME TO MY PORTFOLIO!</div>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-mono text-[#E9D8A6]">Hazel White</h1>
              <div className="space-y-1">
                <div className="text-xl md:text-2xl text-[#D4AF37] font-sans">Computer Engineering Student</div>
                <div className="text-lg text-[#7C7C7C] font-mono">University of Texas at Dallas</div>
              </div>
            </div>

            <p className="text-lg text-[#E9D8A6] leading-relaxed max-w-xl font-mono">
              I enjoy building, repairing, and understanding complex systems—from electronics and
              computer architecture to software and cybersecurity.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/projects">
                <button className="flex items-center gap-2 bg-[#5B1E2D] hover:bg-[#8A2E3F] text-[#E9D8A6] border border-[#D4AF37]/30 px-4 py-2 text-sm font-mono transition-colors">
                  View Projects
                  <ArrowRight size={16} />
                </button>
              </Link>
              <Link to="/resume">
                <button className="flex items-center gap-2 bg-[#111111] hover:bg-[#2D2D2D] text-[#D4AF37] border border-[#D4AF37] px-4 py-2 text-sm font-mono transition-colors">
                  <Download size={16} />
                  Download Resume
                </button>
              </Link>
              <Link to="/contact">
                <button className="flex items-center gap-2 bg-[#111111] hover:bg-[#2D2D2D] text-[#E9D8A6] border border-[#D4AF37]/50 hover:border-[#D4AF37] px-4 py-2 text-sm font-mono transition-colors">
                  <Mail size={16} />
                  Contact Me
                </button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4 pt-8 border-t border-[#D4AF37]/20">
              <div>
                <div className="text-2xl font-mono text-[#D4AF37]">700+</div>
                <div className="text-sm text-[#7C7C7C] font-mono">Users Supported</div>
              </div>
              <div>
                <div className="text-2xl font-mono text-[#D4AF37]">5+</div>
                <div className="text-sm text-[#7C7C7C] font-mono">Projects</div>
              </div>
              <div>
                <div className="text-2xl font-mono text-[#D4AF37]">4</div>
                <div className="text-sm text-[#7C7C7C] font-mono">Internships</div>
              </div>
              <div>
                <div className="text-2xl font-mono text-[#D4AF37]">1</div>
                <div className="text-sm text-[#7C7C7C] font-mono">Part-time</div>
              </div>
            </div>
          </div>

          {/* Right — Oscilloscope */}
          <div className="relative">
            <OscilloscopeDisplay />
            <div className="absolute -top-4 -left-4 w-20 h-20 border border-[#D4AF37] opacity-30 pointer-events-none" />
            <div className="absolute -bottom-4 -right-4 w-16 h-16 border border-[#8A2E3F] opacity-30 pointer-events-none" />
          </div>
        </div>

        {/* Technical Specs Banner */}
        <div className="mt-20 pt-8 border-t border-[#D4AF37]/20">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              { label: "SPECIALIZATION", value: "Computer Engineering" },
              { label: "LOCATION", value: "Plano, Texas" },
              { label: "FOCUS AREAS", value: "Hardware • Software • Security" },
            ].map((item) => (
              <div key={item.label} className="space-y-2">
                <div className="text-[#D4AF37] font-mono text-sm">{item.label}</div>
                <div className="text-[#E9D8A6] text-sm font-mono">{item.value}</div>
              </div>
            ))}
            <div className="space-y-2">
              <div className="text-[#D4AF37] font-mono text-sm">STATUS</div>
              <div className="text-[#D4AF37] text-sm flex items-center justify-center gap-2 font-mono">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
                Available for Opportunities
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

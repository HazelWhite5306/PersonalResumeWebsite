import { useEffect, useRef } from "react";
import { MapPin, Mail, Phone, Linkedin, Info } from "lucide-react";

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
    <div className="relative border border-[#D4AF37]/30 bg-[#2D2D2D] p-4 shadow-2xl">
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

export function Contact() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-10">
          <div className="inline-block border border-[#D4AF37] px-4 py-2 mb-6">
            <div className="text-[#D4AF37] text-xs font-mono tracking-wider">COMMUNICATION INTERFACE</div>
          </div>
          <h1 className="text-4xl md:text-5xl font-mono text-[#E9D8A6] mb-3">Contact</h1>
          <div className="w-24 h-1 bg-[#D4AF37] mb-4" />
          <p className="text-[#7C7C7C] font-mono text-sm max-w-lg">
            Interested in collaboration, internships, or just want to connect? Feel free to reach out through any of the channels below.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Contact Information */}
            <div className="bg-[#2D2D2D] border border-[#D4AF37]/30 p-6">
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-[#D4AF37]/20">
                <div className="w-2 h-2 bg-[#D4AF37]" />
                <h2 className="text-base font-mono text-[#D4AF37]">Contact Information</h2>
              </div>

              <div className="space-y-4">
                {/* HW Badge */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 border-2 border-[#D4AF37] bg-[#5B1E2D] flex items-center justify-center flex-shrink-0">
                    <span className="text-[#D4AF37] font-mono text-sm font-bold">HW</span>
                  </div>
                  <div>
                    <div className="text-[#7C7C7C] font-mono text-xs">NAME</div>
                    <div className="text-[#E9D8A6] font-mono text-sm">Hazel White</div>
                  </div>
                </div>

                {[
                  { icon: MapPin, label: "LOCATION", value: "Plano, Texas", href: null },
                  { icon: Mail, label: "EMAIL", value: "hazel.white5306@gmail.com", href: "mailto:hazel.white5306@gmail.com" },
                  { icon: Phone, label: "PHONE", value: "720-350-0414", href: "tel:7203500414" },
                  { icon: Linkedin, label: "LINKEDIN", value: "LinkedIn Profile", href: "https://www.linkedin.com/in/hazel-white-8b1277253/" },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="w-10 h-10 border border-[#D4AF37]/30 bg-[#111111] flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className="text-[#D4AF37]" />
                    </div>
                    <div>
                      <div className="text-[#7C7C7C] font-mono text-xs">{label}</div>
                      {href ? (
                        <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="text-[#E9D8A6] font-mono text-sm hover:text-[#D4AF37] transition-colors">{value}</a>
                      ) : (
                        <div className="text-[#E9D8A6] font-mono text-sm">{value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Current Status */}
            <div className="bg-[#2D2D2D] border border-[#D4AF37]/30 p-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-[#8A2E3F] animate-pulse" />
                <div className="text-[#7C7C7C] font-mono text-xs tracking-wider">CURRENT STATUS</div>
              </div>
              <div className="text-[#E9D8A6] font-mono text-sm mb-2">Available for Internships</div>
              <p className="text-[#7C7C7C] font-mono text-xs leading-relaxed">
                Actively seeking opportunities in software engineering, cybersecurity, embedded systems, and IT infrastructure roles.
              </p>
            </div>

            {/* Areas of Interest */}
            <div className="bg-[#2D2D2D] border border-[#D4AF37]/30 p-6">
              <div className="text-[#7C7C7C] font-mono text-xs tracking-wider mb-4">AREAS OF INTEREST</div>
              <div className="flex flex-wrap gap-2">
                {["Computer Architecture", "Embedded Systems", "Cybersecurity", "Software Development", "IT Infrastructure", "Hardware Design", "PCB DESIGN"].map((tag) => (
                  <span key={tag} className="border border-[#D4AF37]/30 text-[#E9D8A6] font-mono text-xs px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column — Oscilloscope */}
          <div className="relative">
            <OscilloscopeDisplay />
            <div className="absolute -top-4 -left-4 w-20 h-15 border border-[#D4AF37] opacity-20 pointer-events-none" />
            <div className="absolute -bottom-4 -right-4 w-16 h-16 border border-[#8A2E3F] opacity-20 pointer-events-none" />
          </div>
        </div>

        {/* Response Time */}
        <div className="mt-8 bg-[#2D2D2D] border border-[#D4AF37]/30 p-5">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 border border-[#D4AF37]/40 bg-[#111111] flex items-center justify-center flex-shrink-0">
              <Info size={14} className="text-[#D4AF37]" />
            </div>
            <div>
              <div className="text-[#D4AF37] font-mono text-xs mb-1 tracking-wider">RESPONSE TIME</div>
              <p className="text-[#7C7C7C] font-mono text-xs leading-relaxed">
                I typically respond to messages within 24–48 hours. For urgent matters, please reach out via phone or email directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

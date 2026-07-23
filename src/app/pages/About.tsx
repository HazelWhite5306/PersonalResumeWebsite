import { Cpu, Shield, Wrench, Palette, Mountain, Cat, Code, Search } from "lucide-react";
import imgProfile from "@/imports/EditableWebsiteWithChat-1/3f47708694a75e6644ce18c8ae2eb87d1d26320d.png";
import imgIstanbul from "@/imports/EditableWebsiteWithChat-1/816559cb488c438e6d985e6c4f3173d19b864230.png";
import imgTexas from "@/imports/EditableWebsiteWithChat-1/7b982e536a16c22d9fbcbaf1cab45edd06698951.png";
import imgCat from "@/imports/PHOTO-2025-03-24-21-47-26.jpg";

const interests = [
  { icon: Cpu,     label: "Electronics",                color: "#D4AF37" },
  { icon: Cpu,     label: "Computer Architecture",      color: "#8A2E3F" },
  { icon: Wrench,  label: "PCB Design",                 color: "#D4AF37" },
  { icon: Shield,  label: "Cybersecurity",              color: "#8A2E3F" },
  { icon: Code,    label: "Software & AI",              color: "#D4AF37" },
  { icon: Search,  label: "Cyber Forensics",            color: "#8A2E3F" },
  { icon: Mountain,label: "Hiking",                     color: "#D4AF37" },
  { icon: Palette, label: "Sketching",                  color: "#8A2E3F" },
  { icon: Palette, label: "Graphic Design",             color: "#D4AF37" },
  { icon: Cat,     label: "Cats",                       color: "#8A2E3F" },
  { icon: Wrench,  label: "Restoring Vintage Technology", color: "#D4AF37" },
];

export function About() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-block border border-[#D4AF37] px-4 py-2 mb-6">
            <div className="text-[#D4AF37] text-xs font-mono tracking-wider">PERSONNEL FILE</div>
          </div>
          <h1 className="text-4xl md:text-5xl font-mono text-[#E9D8A6] mb-4">About Hazel</h1>
          <div className="w-24 h-1 bg-[#D4AF37]" />
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Left Column — Profile + Origin Cards */}
          <div className="lg:col-span-1 space-y-4">
            {/* Profile Card */}
            <div className="relative border-4 border-[#4A4A4A] bg-[#2D2D2D] p-4">
              <div className="bg-[#111111] border border-[#D4AF37]/30 overflow-hidden">
                <img
                  src={imgProfile}
                  alt="Hazel White"
                  className="w-full object-cover"
                  style={{ maxHeight: "280px", objectPosition: "top" }}
                />
              </div>
              <div className="mt-3 text-center">
                <div className="text-[#E9D8A6] font-mono text-base">Hazel White</div>
                <div className="text-[#7C7C7C] text-xs font-mono mt-1">UTD EMAIL: HAZEL.WHITE@UTDALLAS.EDU</div>
              </div>
            </div>

            {/* Origin Card */}
            <div className="bg-[#2D2D2D] border border-[#D4AF37]/30 rounded-sm p-4">
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 flex-shrink-0 overflow-hidden rounded">
                  <img src={imgIstanbul} alt="Istanbul" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="text-[#D4AF37] text-xs font-mono mb-1">ORIGIN</div>
                  <div className="text-[#E9D8A6] text-sm font-mono">Istanbul, Turkey</div>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-[#2D2D2D] border border-[#D4AF37]/30 rounded-sm p-4">
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 flex-shrink-0 overflow-hidden rounded">
                  <img src={imgTexas} alt="Texas" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="text-[#D4AF37] text-xs font-mono mb-1">CURRENT LOCATION</div>
                  <div className="text-[#E9D8A6] text-sm font-mono">Plano, Texas</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column — Info Cards */}
          <div className="lg:col-span-2 space-y-6">
            {/* Who I Am */}
            <div className="bg-[#2D2D2D] border border-[#D4AF37]/30 rounded-sm p-6">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[#D4AF37]/20">
                <div className="w-2 h-2 bg-[#D4AF37]" />
                <h2 className="text-lg font-mono text-[#D4AF37]">Who I Am</h2>
              </div>
              <div className="space-y-4 text-[#E9D8A6] font-mono text-sm leading-relaxed">
                <p>I am a Computer Engineering student at the University of Texas at Dallas with interests in:</p>
                <ul className="grid grid-cols-2 gap-2 pl-2">
                  {["Computer Architecture", "Embedded Systems", "Electronics", "Cybersecurity", "Cyber Forensics", "Software Development", "IT Infrastructure"].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p>I enjoy solving technical problems, restoring old technology, hiking, sketching, and learning how complex systems work.</p>
              </div>
            </div>

            {/* Background */}
            <div className="bg-[#2D2D2D] border border-[#D4AF37]/30 rounded-sm p-6">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[#D4AF37]/20">
                <div className="w-2 h-2 bg-[#8A2E3F]" />
                <h2 className="text-lg font-mono text-[#D4AF37]">Background</h2>
              </div>
              <div className="space-y-3 text-[#E9D8A6] font-mono text-sm">
                {[
                  { label: "ORIGIN:", value: "Born in Istanbul, Turkey." },
                  { label: "LOCATION:", value: "Currently based in Plano, Texas." },
                  { label: "EDUCATION:", value: "Associate Degree in Liberal Arts from Austin Community College.\n\nCurrently pursuing a Bachelor of Science in Computer Engineering at the University of Texas at Dallas." },
                ].map(({ label, value }) => (
                  <div key={label} className="flex gap-3">
                    <span className="text-[#D4AF37] whitespace-nowrap">{label}</span>
                    <span className="whitespace-pre-line">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Workshop Companion */}
            <div className="bg-[#2D2D2D] border border-[#D4AF37]/30 rounded-sm p-6">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[#D4AF37]/20">
                <div className="w-2 h-2 bg-[#D4AF37]" />
                <h2 className="text-lg font-mono text-[#D4AF37]">Workshop Companion</h2>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-36 h-36 flex-shrink-0 overflow-hidden rounded-full border-2 border-[#D4AF37]/30">
                  <img src={imgCat} alt="Workshop cat" className="w-full h-full object-cover" style={{ imageRendering: "auto" }} />
                </div>
                <p className="text-[#E9D8A6] font-mono text-sm leading-relaxed italic">
                  "Every good workshop needs a curious supervisor. Mine happens to have four paws and a particular interest in knocking components off the workbench."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Interests & Passions */}
        <div className="mt-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-[#D4AF37]" />
            <h2 className="text-xl font-mono text-[#D4AF37]">Interests & Passions</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="p-4 bg-[#2D2D2D] border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-colors group cursor-default rounded-sm"
              >
                <div className="flex flex-col items-center text-center gap-3">
                  <div
                    className="w-12 h-12 rounded-full border-2 flex items-center justify-center group-hover:scale-110 transition-transform"
                    style={{ borderColor: `${interest.color}60` }}
                  >
                    <interest.icon size={22} style={{ color: interest.color }} />
                  </div>
                  <div className="text-[#E9D8A6] text-xs font-mono leading-tight">{interest.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

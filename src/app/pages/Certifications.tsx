import { Clock, Lock } from "lucide-react";

export function Certifications() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-block border border-[#D4AF37] px-4 py-2 mb-6">
            <div className="text-[#D4AF37] text-xs font-mono tracking-wider">CREDENTIALS &amp; TRAINING</div>
          </div>
          <h1 className="text-4xl md:text-5xl font-mono text-[#E9D8A6] mb-4">Certifications &amp; Training</h1>
          <div className="w-24 h-1 bg-[#D4AF37]" />
        </div>

        {/* In Progress */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Clock size={18} className="text-[#D4AF37]" />
            <h2 className="text-xl font-mono text-[#E9D8A6]">In Progress</h2>
          </div>

          <div className="bg-[#2D2D2D] border border-[#8A2E3F]/50 p-6 max-w-2xl">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 border-2 border-[#8A2E3F]/60 bg-[#111111] flex items-center justify-center">
                  <Lock size={18} className="text-[#8A2E3F]" />
                </div>
                <div>
                  <div className="text-[#E9D8A6] font-mono text-sm">PortSwigger Academy</div>
                  <div className="text-[#7C7C7C] font-mono text-xs mt-0.5">Web Application Security</div>
                </div>
              </div>
              <span className="border border-[#8A2E3F] text-[#8A2E3F] font-mono text-xs px-3 py-1 whitespace-nowrap">In Progress</span>
            </div>

            <div className="text-[#7C7C7C] font-mono text-xs mb-1">
              PortSwigger Ltd. — Expected: 2026
            </div>

            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-[#D4AF37] font-mono text-xs">PROGRESS</span>
                <span className="text-[#7C7C7C] font-mono text-xs">45%</span>
              </div>
              <div className="w-full h-2 bg-[#111111] border border-[#4A4A4A]">
                <div className="h-full bg-[#8A2E3F]" style={{ width: "45%" }} />
              </div>
            </div>

            <div>
              <div className="text-[#D4AF37] font-mono text-xs mb-2">LEARNING OBJECTIVES</div>
              <div className="flex flex-wrap gap-2">
                {["Web Application Security", "OWASP Top 10", "API Testing", "Penetration Testing", "Vulnerability Assessment"].map((s) => (
                  <span key={s} className="border border-[#8A2E3F]/40 text-[#E9D8A6] font-mono text-xs px-2 py-0.5">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Planned Certifications */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Lock size={18} className="text-[#D4AF37]" />
            <h2 className="text-xl font-mono text-[#E9D8A6]">Planned Certifications</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                name: "CompTIA Security+",
                org: "CompTIA",
                areas: ["Network Security", "Compliance", "Threats & Vulnerabilities", "Identity Management"],
              },
              {
                name: "CompTIA Network+",
                org: "CompTIA",
                areas: ["Network Infrastructure", "Network Operations", "Network Security", "Troubleshooting"],
              },
              {
                name: "AWS Cloud Practitioner",
                org: "Amazon Web Services",
                areas: ["Cloud Concepts", "AWS Services", "Security", "Pricing"],
              },
              {
                name: "Microsoft Azure Fundamentals",
                org: "Microsoft",
                areas: ["Cloud Concepts", "Azure Services", "Azure Pricing", "Azure Support"],
              },
              {
                name: "Cisco CCNA",
                org: "Cisco",
                areas: ["Network Fundamentals", "Network Access", "IP Connectivity", "Security Fundamentals"],
              },
              {
                name: "SANS FOR500 / GCFE",
                org: "SANS Institute",
                areas: ["Digital Forensics", "Windows Forensics", "Evidence Acquisition", "Incident Investigation"],
              },
            ].map((cert) => (
              <div key={cert.name} className="bg-[#2D2D2D] border border-[#D4AF37]/20 p-5 hover:border-[#D4AF37]/50 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 border border-[#D4AF37]/30 bg-[#111111] flex items-center justify-center">
                    <Lock size={14} className="text-[#D4AF37]" />
                  </div>
                  <div>
                    <div className="text-[#E9D8A6] font-mono text-sm">{cert.name}</div>
                    <div className="text-[#7C7C7C] font-mono text-xs">{cert.org}</div>
                  </div>
                </div>
                <div className="text-[#D4AF37] font-mono text-xs mb-2">TARGET AREAS</div>
                <ul className="space-y-1">
                  {cert.areas.map((a) => (
                    <li key={a} className="flex items-center gap-2 text-[#7C7C7C] font-mono text-xs">
                      <span className="text-[#D4AF37]">›</span>
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Summary Stats */}
        <div className="bg-[#2D2D2D] border border-[#D4AF37]/20 p-8">
          <div className="text-[#D4AF37] font-mono text-xs mb-2 tracking-wider">PROFESSIONAL DEVELOPMENT ROADMAP</div>
          <div className="grid grid-cols-2 gap-8 mt-4">
            <div className="text-center">
              <div className="text-3xl font-mono text-[#8A2E3F] mb-1">1</div>
              <div className="text-[#7C7C7C] font-mono text-xs">In Progress<br />Active Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-mono text-[#D4AF37] mb-1">6</div>
              <div className="text-[#7C7C7C] font-mono text-xs">Planned<br />Future Certifications</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

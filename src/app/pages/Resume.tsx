import { Download, Printer, MapPin, Phone, Mail, Linkedin } from "lucide-react";

export function Resume() {
  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-block border border-[#D4AF37] px-4 py-2 mb-6">
            <div className="text-[#D4AF37] text-xs font-mono tracking-wider">CURRICULUM VITAE</div>
          </div>
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <h1 className="text-4xl md:text-5xl font-mono text-[#E9D8A6] mb-3">Resume</h1>
              <div className="w-24 h-1 bg-[#D4AF37]" />
            </div>
            <div className="flex gap-3">
              <button onClick={() => window.print()} className="flex items-center gap-2 bg-[#5B1E2D] hover:bg-[#8A2E3F] text-[#E9D8A6] border border-[#D4AF37]/30 px-4 py-2 text-sm font-mono transition-colors">
                <Download size={16} />
                Download PDF
              </button>
              <button onClick={() => window.print()} className="flex items-center gap-2 bg-[#111111] border border-[#D4AF37]/50 hover:border-[#D4AF37] text-[#E9D8A6] px-4 py-2 text-sm font-mono transition-colors">
                <Printer size={16} />
                Print
              </button>
            </div>
          </div>
        </div>

        {/* Resume Document */}
        <div className="bg-[#1A1A1A] border border-[#D4AF37]/20 p-8 md:p-12">
          {/* Name & Title */}
          <div className="text-center mb-6 pb-6 border-b border-[#D4AF37]/20">
            <h2 className="text-3xl md:text-4xl font-mono text-[#E9D8A6] tracking-widest mb-2">HAZEL WHITE</h2>
            <div className="text-[#D4AF37] font-mono text-sm mb-4">Computer Engineering Student</div>
            <div className="flex flex-wrap items-center justify-center gap-4 text-[#7C7C7C] text-xs font-mono">
              <span className="flex items-center gap-1"><MapPin size={12} /> Plano, Texas</span>
              <span className="text-[#D4AF37]">•</span>
              <span className="flex items-center gap-1"><Phone size={12} /> 720-350-0414</span>
              <span className="text-[#D4AF37]">•</span>
              <span className="flex items-center gap-1"><Mail size={12} /> hazel.white5306@gmail.com</span>
              <span className="text-[#D4AF37]">•</span>
              <a href="https://www.linkedin.com/in/hazel-white-8b1277253/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-[#D4AF37] transition-colors"><Linkedin size={12} /> LinkedIn</a>
            </div>
          </div>

          {/* Education */}
          <section className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-[#D4AF37]" />
              <h3 className="text-sm font-mono text-[#D4AF37] tracking-widest">EDUCATION</h3>
            </div>
            <div className="space-y-4 pl-5">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <div className="text-[#E9D8A6] font-mono text-sm">Bachelor of Science in Computer Engineering</div>
                  <div className="text-[#D4AF37] font-mono text-xs mt-1">University of Texas at Dallas</div>
                </div>
                <div className="text-[#7C7C7C] font-mono text-xs whitespace-nowrap">Expected 2027</div>
              </div>
              <div className="flex justify-between items-start gap-4">
                <div>
                  <div className="text-[#E9D8A6] font-mono text-sm">Associate Degree in Liberal Arts</div>
                  <div className="text-[#D4AF37] font-mono text-xs mt-1">Austin Community College</div>
                </div>
                <div className="text-[#7C7C7C] font-mono text-xs whitespace-nowrap">Completed</div>
              </div>
            </div>
          </section>

          <div className="border-t border-[#D4AF37]/10 mb-8" />

          {/* Experience */}
          <section className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-[#D4AF37]" />
              <h3 className="text-sm font-mono text-[#D4AF37] tracking-widest">EXPERIENCE</h3>
            </div>
            <div className="space-y-6 pl-5">
              {[
                {
                  role: "OIT Service Desk Student Worker",
                  company: "University of Texas at Dallas",
                  period: "June 2026 – Present",
                  bullets: [
                    "Provide tier-1 support across Windows and Mac for students, faculty, and staff using MS Entra, SailPoint, and PEARL ticketing",
                    "Administer Duo MFA, manage VPN connectivity, and troubleshoot network drive mapping and MS Teams collaboration issues",
                    "Technologies: Windows, Mac, MS Entra, Duo Admin, SailPoint, PEARL, VPN, MS Teams, Network Drives",
                  ],
                },
                {
                  role: "IT Assistant Intern",
                  company: "Harmony Public Schools",
                  period: "Feb 2025 – Present",
                  bullets: [
                    "Supported 700+ users with Windows systems and Chromebook troubleshooting",
                    "Improved asset efficiency by 40–50% through systematic IT asset management",
                    "Resolved 100+ help desk tickets annually with Azure administration support",
                  ],
                },
                {
                  role: "Neuro & Brain Studies Intern",
                  company: "Center for Brain Health",
                  period: "Summer 2025",
                  bullets: [
                    "Presented research findings to 100+ healthcare professionals",
                    "Collaborated on youth outreach project regarding neuroscience education",
                  ],
                },
                {
                  role: "Product Test Engineer Intern",
                  company: "National Instruments",
                  period: "Summer 2024",
                  bullets: [
                    "Developed benchmarking tests using Python and LabVIEW",
                    "Presented performance analysis to R&D leadership and faculty",
                  ],
                },
                {
                  role: "Failure Analysis Lab Intern",
                  company: "Cirrus Logic",
                  period: "Summer 2023",
                  bullets: [
                    "Developed internal web tools for database search functionality",
                    "Documented root-cause analysis for semiconductor chip designs",
                  ],
                },
              ].map((exp) => (
                <div key={exp.role}>
                  <div className="flex justify-between items-baseline gap-4 mb-1">
                    <span className="text-[#E9D8A6] font-mono text-sm">{exp.role}</span>
                    <span className="text-[#7C7C7C] font-mono text-xs whitespace-nowrap">{exp.period}</span>
                  </div>
                  <div className="text-[#D4AF37] font-mono text-xs mb-2">{exp.company}</div>
                  <ul className="space-y-1">
                    {exp.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-[#7C7C7C] text-xs font-mono">
                        <span className="text-[#D4AF37] mt-0.5">▸</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <div className="border-t border-[#D4AF37]/10 mb-8" />

          {/* Technical Skills */}
          <section className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-[#D4AF37]" />
              <h3 className="text-sm font-mono text-[#D4AF37] tracking-widest">TECHNICAL SKILLS</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6 pl-5">
              {[
                { label: "PROGRAMMING", value: "Python • C++ • Java • JavaScript • SQL • HTML/CSS • LabVIEW • Verilog" },
                { label: "SECURITY TOOLS", value: "Burp Suite • Splunk • XSOAR • Sentinel One • Jira • ServiceNow" },
                { label: "SOFTWARE & CAD", value: "MATLAB • Fusion 360 • Multisim • Arduino IDE • Git • VS Code" },
                { label: "PLATFORMS", value: "Windows • Mac • Unix • Azure Intune • Microsoft Entra • Google Admin • SailPoint • Duo Admin • PEARL" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-[#D4AF37] font-mono text-xs mb-1">{s.label}</div>
                  <p className="text-[#7C7C7C] font-mono text-xs leading-relaxed">{s.value}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="border-t border-[#D4AF37]/10 mb-8" />

          {/* Selected Projects */}
          <section className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-[#D4AF37]" />
              <h3 className="text-sm font-mono text-[#D4AF37] tracking-widest">SELECTED PROJECTS</h3>
            </div>
            <div className="space-y-3 pl-5">
              {[
                { title: "MiniTA – AI Coursework Planner", desc: "Led development of AI-powered platform using React, Node.js, PostgreSQL, and OpenAI API" },
                { title: "Comet Rocketry L1 – Avionics System", desc: "Designed embedded avionics using ESP32 and BMP180 sensors for student rocket" },
                { title: "Business Operations Manager", desc: "Developed C++ application for inventory tracking and sales management" },
              ].map((p) => (
                <div key={p.title}>
                  <div className="text-[#E9D8A6] font-mono text-xs">• {p.title}</div>
                  <div className="text-[#7C7C7C] font-mono text-xs pl-4 mt-0.5">{p.desc}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Document Footer */}
          <div className="border-t border-[#D4AF37]/10 pt-4 text-center">
            <span className="text-[#4A4A4A] font-mono text-xs">
              DOCUMENT REF: HW_RESUME.2026 • REVISION: 2 • GENERATED: 7/22/2026
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Card } from "../components/ui/card";

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      color: "#D4AF37",
      skills: [
        "Python",
        "C++",
        "Java",
        "JavaScript",
        "SQL",
        "MySQL",
        "SQLite",
        "HTML",
        "CSS",
        "LabVIEW",
        "Verilog",
      ],
    },
    {
      title: "Software Tools",
      color: "#8A2E3F",
      skills: [
        "OnShape",
        "MATLAB",
        "TinkerCAD",
        "Fusion 360",
        "Multisim",
        "Arduino IDE",
        "Git",
        "GitHub",
        "Visual Studio Code",
      ],
    },
    {
      title: "Security Tools",
      color: "#D4AF37",
      skills: [
        "Burp Suite",
        "Splunk",
        "Palo Alto XSOAR",
        "SentinelOne",
        "Jira",
        "ServiceNow",
        "Joe Sandbox",
        "Google Threat Intelligence",
        "Any.Run",
        "URLScan",
      ],
    },
    {
      title: "Platforms & Systems",
      color: "#8A2E3F",
      skills: [
        "Windows",
        "Unix",
        "Microsoft Azure Intune",
        "Microsoft Entra",
        "Google Admin",
        "AssetTiger",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-block border border-[#D4AF37] px-4 py-2 mb-6">
            <div className="text-[#D4AF37] text-xs font-mono tracking-wider">
              TECHNICAL SPECIFICATIONS
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-[#E9D8A6] mb-4">
            Skills & Technologies
          </h1>
          <div className="w-24 h-1 bg-[#D4AF37]" />
          <p className="mt-4 text-[#7C7C7C] font-mono max-w-2xl">
            A comprehensive toolkit developed through academic coursework, internships,
            and hands-on projects.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="space-y-12">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex}>
              {/* Category Header */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className="w-3 h-3"
                    style={{ backgroundColor: category.color }}
                  />
                  <h2
                    className="text-2xl font-serif"
                    style={{ color: category.color }}
                  >
                    {category.title}
                  </h2>
                </div>
                <div className="h-px bg-gradient-to-r from-[#D4AF37] to-transparent" />
              </div>

              {/* Skills as IC Chips */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <Card
                    key={skillIndex}
                    className="relative bg-[#2D2D2D] border-2 hover:border-[#D4AF37] transition-all hover:shadow-lg hover:shadow-[#D4AF37]/20 group overflow-hidden"
                    style={{ borderColor: `${category.color}40` }}
                  >
                    {/* IC Chip Design */}
                    <div className="p-4">
                      {/* Top Pins */}
                      <div className="flex justify-around mb-2">
                        {[...Array(Math.min(4, skill.length % 5 + 2))].map((_, i) => (
                          <div
                            key={i}
                            className="w-1 h-2"
                            style={{ backgroundColor: category.color }}
                          />
                        ))}
                      </div>

                      {/* Chip Body */}
                      <div
                        className="relative border-2 px-3 py-4 bg-[#111111] transition-colors group-hover:bg-[#1a1a1a]"
                        style={{ borderColor: category.color }}
                      >
                        {/* Chip Label */}
                        <div className="text-center mb-2">
                          <div
                            className="text-xs font-mono mb-1"
                            style={{ color: category.color }}
                          >
                            {skill}
                          </div>
                        </div>

                        {/* Chip Dot Indicator */}
                        <div className="absolute top-1 left-1">
                          <div
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ backgroundColor: category.color }}
                          />
                        </div>

                        {/* Serial Number */}
                        <div className="text-center text-[0.6rem] font-mono text-[#7C7C7C]">
                          HW-{String(catIndex * 20 + skillIndex).padStart(3, "0")}
                        </div>
                      </div>

                      {/* Bottom Pins */}
                      <div className="flex justify-around mt-2">
                        {[...Array(Math.min(4, skill.length % 5 + 2))].map((_, i) => (
                          <div
                            key={i}
                            className="w-1 h-2"
                            style={{ backgroundColor: category.color }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Circuit Trace Effect */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none"
                      style={{
                        backgroundImage: `radial-gradient(circle at center, ${category.color} 0%, transparent 70%)`,
                      }}
                    />
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Legend */}
        <Card className="mt-12 p-6 bg-[#2D2D2D] border-[#D4AF37]/30">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="text-[#D4AF37] font-mono text-sm mb-4">
                PROFICIENCY LEVELS
              </div>
              <div className="space-y-3 text-sm text-[#E9D8A6]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-2 bg-[#D4AF37]" />
                  <span className="font-mono">Professional Experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-2 bg-[#8A2E3F]" />
                  <span className="font-mono">Academic & Project Work</span>
                </div>
              </div>
            </div>
            <div>
              <div className="text-[#D4AF37] font-mono text-sm mb-4">
                TECHNICAL FOCUS
              </div>
              <div className="text-sm text-[#E9D8A6] space-y-2">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#D4AF37] mt-1.5 flex-shrink-0" />
                  <span>Full-stack development and systems programming</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#D4AF37] mt-1.5 flex-shrink-0" />
                  <span>Cybersecurity operations and threat analysis</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#D4AF37] mt-1.5 flex-shrink-0" />
                  <span>Embedded systems and hardware integration</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Continuous Learning Banner */}
        <Card className="mt-8 p-6 bg-gradient-to-r from-[#5B1E2D] to-[#2D2D2D] border-[#D4AF37]/50">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <div className="text-[#D4AF37] font-serif text-lg mb-1">
                Continuous Learning
              </div>
              <p className="text-[#E9D8A6] text-sm">
                Actively expanding knowledge through coursework, certifications, and hands-on projects.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#D4AF37] animate-pulse" />
              <span className="text-[#D4AF37] font-mono text-sm">
                SYSTEM ACTIVE
              </span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

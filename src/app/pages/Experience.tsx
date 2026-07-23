import { useState } from "react";
import { ArrowLeft, Shield, Code2, Monitor, Palette, Cpu, MoreHorizontal, MapPin, Calendar, ChevronRight } from "lucide-react";
import imgHarmony from "@/imports/images.jpg";
import imgNI from "@/imports/images-1.jpg";
import imgToddPlatt from "@/imports/0.jpg";
import imgChip from "@/imports/cs40l26_30wlcsp_v1_180px-481ef88718.png";
import imgBanners from "@/imports/banners.jpg";

type Industry = "cybersecurity" | "software" | "it-support" | "art" | "embedded" | "misc" | null;

const INDUSTRIES = [
  {
    id: "cybersecurity" as Industry,
    name: "Cybersecurity",
    icon: Shield,
    color: "#D4AF37",
    description: "Security operations, penetration testing, incident response, digital forensics, networking.",
  },
  {
    id: "software" as Industry,
    name: "Software",
    icon: Code2,
    color: "#8A2E3F",
    description: "Programming, web applications, automation, desktop software, APIs, and development.",
  },
  {
    id: "it-support" as Industry,
    name: "IT Support",
    icon: Monitor,
    color: "#D4AF37",
    description: "Technical support, troubleshooting, system administration, hardware, networking, and customer service.",
  },
  {
    id: "art" as Industry,
    name: "Art & Graphic Design",
    icon: Palette,
    color: "#8A2E3F",
    description: "Graphic design, digital art, branding, UI concepts, illustrations, and creative media.",
  },
  {
    id: "embedded" as Industry,
    name: "Embedded Systems",
    icon: Cpu,
    color: "#D4AF37",
    description: "Microcontrollers, Arduino, Raspberry Pi, IoT, robotics, firmware, electronics.",
  },
  {
    id: "misc" as Industry,
    name: "Miscellaneous",
    icon: MoreHorizontal,
    color: "#8A2E3F",
    description: "Leadership, volunteer work, research, certifications, tutoring, and additional experience.",
  },
];

interface ExperienceEntry {
  title: string;
  organization: string;
  dates: string;
  location: string;
  technologies: string[];
  description: string;
  achievements: string[];
  skills: string[];
  responsibilities: string[];
  photo?: string;
}

const EXPERIENCES: Record<string, ExperienceEntry[]> = {
  cybersecurity: [],
  software: [
    {
      title: "Product Test Engineer Intern",
      organization: "National Instruments",
      dates: "Summer 2024",
      location: "Austin, TX",
      technologies: ["Python", "LabVIEW", "Benchmarking", "APIs"],
      description: "Developed benchmarking tests and automation tools to compare performance across software environments.",
      achievements: [
        "Developed two tests in Python and LabVIEW using measurement tools to benchmark the results of both languages",
        "Presented comparison of results and potential use of Python Copilot AI to 50+ faculty, interns, and the Chief of R&D",
      ],
      skills: ["Python", "LabVIEW", "Test Engineering", "Performance Analysis"],
      responsibilities: ["Develop benchmarking tests", "Build automation scripts", "Analyze performance data", "Present to leadership"],
      photo: imgNI,
    },
    {
      title: "Failure Analysis Lab Intern",
      organization: "Cirrus Logic",
      dates: "Summer 2023",
      location: "Austin, TX",
      technologies: ["Web Tools", "Database", "Python", "SQL"],
      description: "Built internal web tools for database search functionality and documented root-cause analysis for chip failures.",
      achievements: [
        "Developed internal database search tool used by engineering teams",
        "Documented root-cause analysis for5+ semiconductors, covering legacy and new chip designs",
      ],
      skills: ["Web Development", "Database Design", "Failure Analysis", "Documentation"],
      responsibilities: ["Develop internal tools", "Database search functionality", "Semiconductor failure analysis", "Technical documentation"],
      photo: imgChip,
    },
  ],
  "it-support": [
    {
      title: "OIT Service Desk Student Worker",
      organization: "University of Texas at Dallas",
      dates: "June 22, 2026 – Present",
      location: "Dallas, TX",
      technologies: ["Windows", "Mac", "MS Entra", "Duo Admin", "SailPoint", "PEARL", "VPN", "MS Teams", "Network Drives"],
      description: "Provided Tier 1 technical support at UTD's Office of Information Technology Service Desk. Resolved hardware and software issues across Windows and macOS, managed user identities through Microsoft Entra and SailPoint, administered Duo MFA, and supported VPN, network drives, and account access for students, faculty, and staff. Managed permissions using PEARL and Microsoft Entra/Azure, while tracking and escalating incidents through the TeamDynamix (TDX) ticketing system.",
      achievements: [
        "Supporting UTD students, faculty, and staff with day-to-day IT needs",
        "Managing user accounts across multiple identity platforms",
        "Ensuring secure access through MFA and VPN administration",
      ],
      skills: ["IT Support", "Identity Management", "MFA Administration", "Ticketing Systems", "Network Support"],
      responsibilities: [
        "Troubleshoot Windows and Mac hardware and software issues",
        "Manage user accounts in Microsoft Entra and SailPoint",
        "Assist management of Duo MFA for university accounts",
        "Support VPN connectivity and network drive mapping",
        "Log and escalate tickets using TDX",
        "Assist with MS Teams and collaboration tool issues",
      ],
      photo: imgBanners,
    },
    {
      title: "IT Assistant Intern",
      organization: "Harmony Public Schools",
      dates: "February 2025 – May 2026",
      location: "Dallas, TX",
      technologies: ["Windows", "Azure Intune", "Microsoft Entra", "Chromebook", "Google Admin"],
      description: "Provide full-spectrum IT support to a charter school (7-12th grade), managing device fleets, device repairs, user accounts, and help desk operations.",
      achievements: [
        "Supported 700+ users (faculty and students) across multiple platforms",
        "Improved IT asset efficiency by 40–55% through systematic asset management",
        "Resolved 100+ help desk tickets annually",
      ],
      skills: ["System Administration", "Hardware Repair", "Azure Administration", "Network Troubleshooting"],
      responsibilities: ["Troubleshoot Windows and Chromebook devices", "Manage Azure Intune device policies", "Monitor network and user accounts", "Provide on-site and remote support"],
      photo: imgHarmony,
    },
  ],
  art: [],
  embedded: [],
  misc: [
    {
      title: "Neuro & Brain Studies Intern",
      organization: "Center for Brain Health",
      dates: "Summer 2025",
      location: "Dallas, TX",
      technologies: ["Research", "Data Analysis", "Presentation"],
      description: "Participated in neuroscience and brain health research study, collaborated and researched on a youth outreach initiative regarding brain health and presented findings to healthcare professionals.",
      achievements: [
        "Presented research to 100+ healthcare professionals",
        "Collaborated on youth outreach project in neuroscience education",
      ],
      skills: ["Research", "Public Speaking", "Data Analysis", "Collaboration"],
      responsibilities: ["Attend neuroscience seminars", "Collaborate on youth outreach", "Analyze research data", "Present findings to professionals"],
      photo: imgToddPlatt,
    },
  ],
};

function IndustryCard({ industry, onClick }: { industry: typeof INDUSTRIES[0]; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left p-6 bg-[#2D2D2D] border border-[#D4AF37]/20 hover:border-[#D4AF37] hover:bg-[#2D2D2D]/80 hover:shadow-lg transition-all group cursor-pointer"
    >
      <div className="flex items-start gap-4 mb-3">
        <div
          className="w-12 h-12 border-2 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
          style={{ borderColor: `${industry.color}60`, backgroundColor: `${industry.color}10` }}
        >
          <industry.icon size={22} style={{ color: industry.color }} />
        </div>
        <div className="flex-1">
          <div className="text-[#E9D8A6] font-mono text-base mb-1 group-hover:text-[#D4AF37] transition-colors">
            {industry.name}
          </div>
          <p className="text-[#7C7C7C] font-mono text-xs leading-relaxed">{industry.description}</p>
        </div>
        <ChevronRight size={16} className="text-[#4A4A4A] group-hover:text-[#D4AF37] transition-colors flex-shrink-0 mt-1" />
      </div>
    </button>
  );
}

function ExperienceCard({ entry }: { entry: ExperienceEntry }) {
  return (
    <div className="bg-[#2D2D2D] border border-[#D4AF37]/20 overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Photo Area */}
        <div className="md:w-[35%] bg-[#1A1A1A] border-b md:border-b-0 md:border-r border-[#D4AF37]/10 flex items-center justify-center min-h-[200px]">
          {entry.photo ? (
            <img
              src={entry.photo}
              alt={entry.organization}
              className="w-full h-full object-cover"
              style={{ minHeight: "200px" }}
            />
          ) : (
            <div className="text-center border-2 border-dashed border-[#4A4A4A] w-full h-full flex flex-col items-center justify-center p-8 min-h-[200px]">
              <div className="text-[#4A4A4A] font-mono text-sm mb-2">Insert Photo Here</div>
              <div className="text-[#3A3A3A] font-mono text-xs">Screenshots / Media</div>
            </div>
          )}
        </div>

        {/* Details */}
        <div className="md:w-[65%] p-6 space-y-4">
          <div className="pb-4 border-b border-[#D4AF37]/10">
            <h3 className="text-[#E9D8A6] font-mono text-lg mb-1">{entry.title}</h3>
            <div className="text-[#D4AF37] font-mono text-sm mb-2">{entry.organization}</div>
            <div className="flex flex-wrap gap-4 text-[#7C7C7C] font-mono text-xs">
              <span className="flex items-center gap-1"><Calendar size={12} /> {entry.dates}</span>
              <span className="flex items-center gap-1"><MapPin size={12} /> {entry.location}</span>
            </div>
          </div>

          <div>
            <div className="text-[#D4AF37] font-mono text-xs mb-1">TECHNOLOGIES</div>
            <div className="flex flex-wrap gap-2">
              {entry.technologies.map((t) => (
                <span key={t} className="border border-[#D4AF37]/30 text-[#E9D8A6] font-mono text-xs px-2 py-0.5">{t}</span>
              ))}
            </div>
          </div>

          <p className="text-[#E9D8A6] font-mono text-sm leading-relaxed">{entry.description}</p>

          <div>
            <div className="text-[#D4AF37] font-mono text-xs mb-2">ACHIEVEMENTS</div>
            <ul className="space-y-1">
              {entry.achievements.map((a) => (
                <li key={a} className="flex items-start gap-2 text-[#E9D8A6] font-mono text-xs">
                  <span className="text-[#D4AF37] mt-0.5">▸</span>
                  {a}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[#D4AF37] font-mono text-xs mb-2">RESPONSIBILITIES</div>
            <ul className="space-y-1">
              {entry.responsibilities.map((r) => (
                <li key={r} className="flex items-start gap-2 text-[#7C7C7C] font-mono text-xs">
                  <span className="text-[#4A4A4A] mt-0.5">›</span>
                  {r}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[#D4AF37] font-mono text-xs mb-2">SKILLS USED</div>
            <div className="flex flex-wrap gap-2">
              {entry.skills.map((s) => (
                <span key={s} className="bg-[#111111] border border-[#D4AF37]/20 text-[#D4AF37] font-mono text-xs px-2 py-0.5">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Experience() {
  const [selected, setSelected] = useState<Industry>(null);

  const industry = selected ? INDUSTRIES.find((i) => i.id === selected) : null;
  const entries = selected ? (EXPERIENCES[selected] ?? []) : [];

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-block border border-[#D4AF37] px-4 py-2 mb-6">
            <div className="text-[#D4AF37] text-xs font-mono tracking-wider">WORK HISTORY LOG</div>
          </div>
          <h1 className="text-4xl md:text-5xl font-mono text-[#E9D8A6] mb-4">Experience</h1>
          <div className="w-24 h-1 bg-[#D4AF37]" />
        </div>

        {!selected ? (
          <>
            <div className="text-center mb-10">
              <h2 className="text-2xl font-mono text-[#E9D8A6] mb-3">Pick an Industry Field</h2>
              <p className="text-[#7C7C7C] font-mono text-sm">
                Select the field you would like to explore. Each category contains relevant work experience, projects, and accomplishments.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {INDUSTRIES.map((ind) => (
                <IndustryCard key={ind.id} industry={ind} onClick={() => setSelected(ind.id)} />
              ))}
            </div>
          </>
        ) : (
          <>
            <button
              onClick={() => setSelected(null)}
              className="flex items-center gap-2 text-[#D4AF37] font-mono text-sm mb-8 hover:text-[#E9D8A6] transition-colors"
            >
              <ArrowLeft size={16} />
              ← Back to Industry Selection
            </button>

            <div className="flex items-center gap-3 mb-8">
              {industry && (
                <>
                  <div className="w-10 h-10 border-2 flex items-center justify-center" style={{ borderColor: `${industry.color}60` }}>
                    <industry.icon size={20} style={{ color: industry.color }} />
                  </div>
                  <h2 className="text-2xl font-mono text-[#E9D8A6]">{industry.name}</h2>
                </>
              )}
            </div>

            {entries.length > 0 ? (
              <div className="space-y-8">
                {entries.map((entry, i) => (
                  <ExperienceCard key={i} entry={entry} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 border border-[#D4AF37]/20 bg-[#2D2D2D]">
                <div className="text-[#4A4A4A] font-mono text-sm mb-2">No entries yet</div>
                <div className="text-[#3A3A3A] font-mono text-xs">Experience in this category coming soon</div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

import { Github, ExternalLink, Calendar } from "lucide-react";
import imgRocket from "@/imports/0-2.jpg";
import imgMiniTA from "@/imports/2.JPG";
import imgPortSwigger from "@/imports/image-5.png";
import imgSOC from "@/imports/image-3.png";
import imgBizOps from "@/imports/image-4.png";

const PROJECTS = [
  {
    title: "MiniTA",
    subtitle: "AI-Based Coursework Planner",
    period: "January 2026 – May 2026",
    status: "Completed",
    accentColor: "#1B3A5C",
    borderColor: "#2A5080",
    description:
      "AI-powered coursework management platform designed for a simulated Canvas LMS client. Led a team of five through the full software development lifecycle from requirements analysis to testing and deployment.",
    features: ["AI-powered task scheduling", "Canvas LMS integration", "Team collaboration tools", "PostgreSQL data persistence", "OAuth authentication", "AWS cloud deployment"],
    technologies: ["React", "Node.js", "PostgreSQL", "OpenAI API", "AWS", "OAuth"],
    skills: ["Full-stack development", "Team leadership", "System architecture", "API design"],
    links: { github: "https://github.com/Chocolatechikin1/Group14_Github_Assignment-4-Spring2026.git", demo: "#" },
    photo: imgMiniTA,
  },
  {
    title: "PortSwigger Academy",
    subtitle: "Web Security Training Platform",
    period: "January 2026 – Present",
    status: "In Progress",
    accentColor: "#1A2F1A",
    borderColor: "#2A4A2A",
    description:
      "Hands-on cybersecurity training focused on OWASP Top 10 vulnerabilities. Working through labs covering SQL injection, XSS, authentication bypass, and advanced exploitation techniques using Burp Suite.",
    features: ["OWASP Top 10 labs", "Burp Suite proficiency", "SQL injection testing", "XSS detection & exploitation", "Authentication bypass", "API security testing"],
    technologies: ["Burp Suite", "Python", "Web Proxies", "OWASP", "HTTP/S"],
    skills: ["Penetration testing", "Vulnerability assessment", "Web security", "Report writing"],
    links: { github: "#", demo: "#" },
    photo: imgPortSwigger,
  },
  {
    title: "Cybersecurity Ticket Training",
    subtitle: "SOC Operations & Incident Response",
    period: "January 2024 – December 2025",
    status: "Completed",
    accentColor: "#2A1F0A",
    borderColor: "#4A3510",
    description:
      "Year-long weekly mentorship program focused on SOC analyst workflows, incident response playbooks, and SOAR automation. Analyzed real-world security tickets and threat intelligence.",
    features: ["Weekly SOC mentorship sessions", "SOAR automation workflows", "Threat intelligence integration", "Incident triage practice", "SIEM query writing", "Security reporting"],
    technologies: ["Splunk", "XSOAR", "Sentinel One", "Jira", "ServiceNow"],
    skills: ["SOC operations", "Incident response", "Threat analysis", "Security tooling"],
    links: { github: "#", demo: "#" },
    photo: imgSOC,
  },
  {
    title: "Business Operations Manager",
    subtitle: "Inventory & Sales Management System",
    period: "February 2025",
    status: "Completed",
    accentColor: "#1A1A2E",
    borderColor: "#2A2A4A",
    description:
      "C++ application for inventory tracking and sales management with file I/O persistence. Implements object-oriented design principles with a clean terminal-based user interface.",
    features: ["Inventory CRUD operations", "Sales tracking & reporting", "File I/O persistence", "OOP architecture", "Terminal UI", "Data export"],
    technologies: ["C++", "File I/O", "OOP", "STL"],
    skills: ["C++ programming", "OOP design", "Data structures", "File systems"],
    links: { github: "#", demo: "#" },
    photo: imgBizOps,
  },
  {
    title: "Comet Rocketry L1",
    subtitle: "Avionics System Design",
    period: "August 2024 – December 2024",
    status: "Completed",
    accentColor: "#1A2A1A",
    borderColor: "#2E4A2E",
    description:
      "Designed and built the avionics system for a student rocket capable of L1 certification. Integrated ESP32 microcontroller with BMP180 barometric pressure sensor for real-time altitude tracking.",
    features: ["ESP32 flight computer", "Real-time altitude tracking", "Barometric pressure sensing", "Data logging to SD card", "Recovery system trigger", "Ground station telemetry"],
    technologies: ["ESP32", "BMP180", "Arduino IDE", "C++", "I2C", "SD Card"],
    skills: ["Embedded systems", "Sensor integration", "PCB design", "Firmware development"],
    links: { github: "#", demo: "#" },
    photo: imgRocket,
  },
];

const STATUS_COLORS: Record<string, string> = {
  Active: "#D4AF37",
  "In Progress": "#8A2E3F",
  Completed: "#4A4A4A",
};

export function Projects() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-block border border-[#D4AF37] px-4 py-2 mb-6">
            <div className="text-[#D4AF37] text-xs font-mono tracking-wider">PROJECT BLUEPRINTS</div>
          </div>
          <h1 className="text-4xl md:text-5xl font-mono text-[#E9D8A6] mb-4">Projects</h1>
          <div className="w-24 h-1 bg-[#D4AF37] mb-4" />
          <p className="text-[#7C7C7C] font-mono text-sm">
            A collection of technical projects spanning software development, cybersecurity, and embedded systems.
          </p>
        </div>

        {/* Project Cards — Horizontal, Full Width */}
        <div className="space-y-8">
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className="border transition-all hover:shadow-xl group overflow-hidden"
              style={{
                backgroundColor: project.accentColor,
                borderColor: project.borderColor,
              }}
            >
              <div className="flex flex-col md:flex-row">
                {/* Photo Area — 35% */}
                <div
                  className="md:w-[35%] border-b md:border-b-0 md:border-r flex flex-col items-center justify-center min-h-[220px] overflow-hidden"
                  style={{ borderColor: project.borderColor, backgroundColor: `${project.accentColor}cc` }}
                >
                  {(project as any).photo ? (
                    <img
                      src={(project as any).photo}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      style={{ minHeight: "220px" }}
                    />
                  ) : (
                  <div
                    className="w-full h-full flex flex-col items-center justify-center border-2 border-dashed min-h-[180px] p-6 m-6"
                    style={{ borderColor: `${project.borderColor}80` }}
                  >
                    <div className="text-[#4A4A4A] font-mono text-sm mb-1">Insert Photo Here</div>
                    <div className="text-[#3A3A3A] font-mono text-xs text-center">
                      Screenshots • GIFs • Diagrams
                    </div>
                  </div>
                  )}
                </div>

                {/* Info — 65% */}
                <div className="md:w-[65%] p-6 space-y-4 bg-[#2D2D2D]">
                  {/* Title Row */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-[#E9D8A6] font-mono text-xl mb-1">{project.title}</h3>
                      <div className="text-[#D4AF37] font-mono text-sm">{project.subtitle}</div>
                    </div>
                    <div className="flex flex-col items-end gap-2 flex-shrink-0">
                      <span
                        className="border font-mono text-xs px-3 py-1 whitespace-nowrap"
                        style={{ borderColor: STATUS_COLORS[project.status], color: STATUS_COLORS[project.status] }}
                      >
                        {project.status}
                      </span>
                      <span className="flex items-center gap-1 text-[#7C7C7C] font-mono text-xs">
                        <Calendar size={12} />
                        {project.period}
                      </span>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <div className="text-[#D4AF37] font-mono text-xs mb-2">TECH STACK</div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="border bg-[#111111] font-mono text-xs px-2 py-0.5"
                          style={{ borderColor: `${project.borderColor}80`, color: "#D4AF37" }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-[#E9D8A6] font-mono text-sm leading-relaxed">{project.description}</p>

                  {/* Features */}
                  <div>
                    <div className="text-[#D4AF37] font-mono text-xs mb-2">FEATURES</div>
                    <div className="grid grid-cols-2 gap-1">
                      {project.features.map((f) => (
                        <div key={f} className="flex items-start gap-2 text-[#7C7C7C] font-mono text-xs">
                          <span className="text-[#D4AF37] mt-0.5 flex-shrink-0">▸</span>
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skills */}
                  <div>
                    <div className="text-[#D4AF37] font-mono text-xs mb-2">SKILLS LEARNED</div>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((s) => (
                        <span key={s} className="bg-[#111111] border border-[#D4AF37]/20 text-[#D4AF37] font-mono text-xs px-2 py-0.5">{s}</span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 pt-2 border-t border-[#D4AF37]/10">
                    {project.links.github !== "#" && (
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-[#D4AF37]/40 hover:border-[#D4AF37] text-[#D4AF37] font-mono text-xs px-4 py-2 transition-colors">
                        <Github size={14} />
                        GitHub
                      </a>
                    )}
                    {project.links.demo !== "#" && (
                      <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 text-[#E9D8A6] font-mono text-xs px-4 py-2 transition-colors">
                        <ExternalLink size={14} />
                        Demo
                      </a>
                    )}
                    <div className="ml-auto text-[#4A4A4A] font-mono text-xs">
                      PROJECT_{String(index + 1).padStart(3, "0")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

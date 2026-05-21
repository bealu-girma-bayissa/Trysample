import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDown,
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Download,
  ExternalLink,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import "./styles.css";

const profile = {
  name: "Bealu Girma Bayissa",
  initials: "BGB",
  role: "Full-Stack Software Developer",
  location: "Your City, Country",
  email: "bealu-girma-bayissa@example.com",
  availability: "Available for selected freelance and full-time opportunities",
  headline: "I build fast, reliable web apps with clean interfaces and practical backends.",
  summary:
    "I help teams turn product ideas into production-ready web experiences. My work focuses on React frontends, API design, data workflows, and thoughtful user experience.",
  links: {
    github: "https://github.com/bealu-girma-bayissa/Trysample.git",
    linkedin: "https://linkedin.com/in/bealu-girma-bayissa",
    cv: "/Bealu-Girma-Bayissa-CV.pdf",
  },
};

const projects = [
  {
    title: "Operations Analytics Dashboard",
    type: "Full-stack",
    summary:
      "A real-time dashboard for tracking product, revenue, and support metrics with role-based views and exportable reports.",
    impact: "Reduced weekly reporting time from hours to minutes.",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    demo: "https://example.com/demo",
    code: "https://github.com/bealu-girma-bayissa/Trysample.git",
  },
  {
    title: "Commerce Checkout Flow",
    type: "Frontend",
    summary:
      "A mobile-first checkout experience with address validation, payment states, cart recovery, and accessible form handling.",
    impact: "Improved completion rate by simplifying the critical path.",
    stack: ["Next.js", "Stripe", "Tailwind CSS"],
    demo: "https://example.com/demo",
    code: "https://github.com/bealu-girma-bayissa/Trysample.git",
  },
  {
    title: "Team Workflow API",
    type: "Backend",
    summary:
      "A secure API for task assignment, notifications, file attachments, audit logs, and team-level permissions.",
    impact: "Designed for predictable scaling and clear integration contracts.",
    stack: ["Node.js", "Express", "Redis", "JWT"],
    demo: "",
    code: "https://github.com/bealu-girma-bayissa/Trysample.git",
  },
];

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "REST APIs",
  "Authentication",
  "Testing",
  "Performance",
  "Responsive UI",
  "Git",
  "Deployment",
];

const experience = [
  {
    role: "Full-Stack Developer",
    company: "Recent Project / Client",
    period: "2024 - Present",
    bullets: [
      "Built and shipped production web features across frontend, API, and database layers.",
      "Translated unclear product requirements into small, testable implementation plans.",
      "Improved reliability by tightening validation, loading states, and error handling.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Selected Freelance Work",
    period: "2022 - 2024",
    bullets: [
      "Created responsive interfaces for dashboards, landing pages, and internal tools.",
      "Worked closely with founders and operators to improve usability before launch.",
      "Delivered maintainable components with accessible forms and clear navigation.",
    ],
  },
];

function App() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Home">
          <span className="brand-mark">{profile.initials}</span>
          <span>{profile.name}</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href="#contact">
          <Mail size={16} />
          Contact
        </a>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">
              <CheckCircle2 size={16} />
              {profile.availability}
            </p>
            <h1>{profile.name}</h1>
            <h2>{profile.role}</h2>
            <p className="lead">{profile.headline}</p>
            <p className="summary">{profile.summary}</p>
            <div className="actions">
              <a className="button primary" href="#projects">
                View Work
                <ArrowRight size={18} />
              </a>
              <a className="button secondary" href={profile.links.cv}>
                <Download size={18} />
                Download CV
              </a>
            </div>
            <div className="socials" aria-label="Social links">
              <a href={profile.links.github} aria-label="GitHub">
                <Code2 size={20} />
              </a>
              <a href={profile.links.linkedin} aria-label="LinkedIn">
                <BriefcaseBusiness size={20} />
              </a>
              <a href={`mailto:${profile.email}`} aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
          <aside className="hero-panel" aria-label="Portfolio summary">
            <div>
              <span className="metric">3</span>
              <span>selected case studies</span>
            </div>
            <div>
              <span className="metric">12</span>
              <span>core technologies</span>
            </div>
            <div>
              <span className="metric">100%</span>
              <span>focused on real, verifiable work</span>
            </div>
          </aside>
          <a className="scroll-link" href="#projects" aria-label="Scroll to projects">
            <ArrowDown size={22} />
          </a>
        </section>

        <section id="projects" className="section">
          <div className="section-heading">
            <p className="eyebrow">Selected Work</p>
            <h2>Projects With Proof</h2>
            <p>Replace these examples with your real deployed projects, code repositories, and outcomes.</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-top">
                  <span>{project.type}</span>
                  <Code2 size={20} />
                </div>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <p className="impact">{project.impact}</p>
                <div className="tags">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.demo && (
                    <a href={project.demo}>
                      Live Demo
                      <ExternalLink size={16} />
                    </a>
                  )}
                  <a href={project.code}>
                    Code
                    <Code2 size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section split">
          <div className="section-heading compact">
            <p className="eyebrow">Technical Strengths</p>
            <h2>Built Around Product Delivery</h2>
            <p>
              This section avoids fake percentage scores and shows a practical stack recruiters and clients can verify.
            </p>
          </div>
          <div className="skill-cloud">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-heading">
            <p className="eyebrow">Experience</p>
            <h2>Recent Work</h2>
            <p>Use concrete company names, dates, and outcomes when you are ready to publish.</p>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={`${item.role}-${item.period}`}>
                <div className="timeline-icon">
                  <BriefcaseBusiness size={20} />
                </div>
                <div>
                  <p className="period">{item.period}</p>
                  <h3>{item.role}</h3>
                  <p className="company">{item.company}</p>
                  <ul>
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Let’s Build Something Useful</h2>
            <p>
              Update the email and social links, then connect the form to your preferred form service before publishing.
            </p>
            <div className="contact-list">
              <a href={`mailto:${profile.email}`}>
                <Mail size={18} />
                {profile.email}
              </a>
              <span>
                <MapPin size={18} />
                {profile.location}
              </span>
              <a href={profile.links.linkedin}>
                <BriefcaseBusiness size={18} />
                LinkedIn profile
              </a>
            </div>
          </div>
          <form action={`mailto:${profile.email}`} method="post" encType="text/plain">
            <label>
              Name
              <input name="name" required placeholder="Your name" />
            </label>
            <label>
              Email
              <input name="email" type="email" required placeholder="you@example.com" />
            </label>
            <label>
              Message
              <textarea name="message" required rows="5" placeholder="Tell me about your project..." />
            </label>
            <button type="submit">
              <Send size={18} />
              Send Message
            </button>
          </form>
        </section>
      </main>

      <footer>
        <span>{profile.name}</span>
        <span>Built with React.</span>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);

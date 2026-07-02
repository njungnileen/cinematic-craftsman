import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Download,
  Play,
  Mail,
  Camera,
  Film,
  Sparkles,
  Wand2,
  Palette,
  Cpu,
  ArrowUp,
} from "lucide-react";

// Brand icons (this lucide version doesn't include them, so inline).
function Github(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16} {...props}>
      <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 007.86 10.93c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 015.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.8 1.19 1.82 1.19 3.08 0 4.43-2.69 5.4-5.26 5.69.41.35.78 1.05.78 2.12v3.15c0 .31.21.67.8.55A11.5 11.5 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" />
    </svg>
  );
}
function Linkedin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16} {...props}>
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8h4.51V23H.24V8zm7.5 0h4.33v2.05h.06c.6-1.13 2.07-2.32 4.26-2.32 4.56 0 5.4 3 5.4 6.9V23h-4.5v-6.68c0-1.59-.03-3.63-2.22-3.63-2.22 0-2.56 1.73-2.56 3.52V23h-4.5V8z" />
    </svg>
  );
}
function Instagram(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={16} height={16} {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
import { useState } from "react";

import { Nav } from "./Nav";
import { GrainBackground } from "./GrainBackground";

import portrait from "@/assets/hero-portrait.jpg";
import w1 from "@/assets/work-1.jpg";
import w2 from "@/assets/work-2.jpg";
import w3 from "@/assets/work-3.jpg";
import w4 from "@/assets/work-4.jpg";
import w5 from "@/assets/work-5.jpg";
import w6 from "@/assets/work-6.jpg";

// ---------- shared motion ----------
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-6 text-xs uppercase tracking-[0.2em] text-white/50">
      <span className="h-px w-8 bg-gold/60" />
      {children}
    </div>
  );
}

// ---------- Hero ----------
function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center pt-28 pb-16 md:pt-32"
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div>
          <motion.p
            {...fadeUp}
            className="text-gold text-sm tracking-[0.25em] uppercase mb-6"
          >
            Hello.
          </motion.p>
          <motion.h1
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.05 }}
            className="font-display font-bold leading-[0.95] tracking-tight text-white text-[44px] sm:text-[56px] md:text-[72px]"
          >
            I'm Alex Rivera.
            <span className="block text-white/40 mt-3">
              AI Engineer.
            </span>
            <span className="block text-white/40">Filmmaker.</span>
            <span className="block text-white/40">Motion Designer.</span>
          </motion.h1>
          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.15 }}
            className="mt-8 max-w-md text-lg text-white/60 leading-relaxed"
          >
            I build intelligent products and cinematic visual experiences.
          </motion.p>
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.25 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-gold text-black px-6 py-3 text-sm font-medium hover:brightness-110 transition"
            >
              View Work
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-hairline bg-white/5 px-6 py-3 text-sm text-white hover:bg-white/10 transition"
            >
              <Download size={16} />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.4 }}
            className="mt-16 flex items-center gap-8 text-xs uppercase tracking-[0.2em] text-white/40"
          >
            <span>Based in Lisbon</span>
            <span className="h-px w-6 bg-white/20" />
            <span>Available Q2 · 2026</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[4/5] w-full max-w-[520px] justify-self-center md:justify-self-end"
        >
          <div
            aria-hidden
            className="absolute -inset-8 rounded-[32px] bg-gold/20 blur-3xl opacity-60"
          />
          <div className="relative h-full w-full overflow-hidden rounded-[24px] border border-hairline">
            <img
              src={portrait}
              alt="Portrait of Alex Rivera"
              width={1024}
              height={1280}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-xs text-white/70">
              <span className="uppercase tracking-[0.2em]">Portrait · 2026</span>
              <span className="text-gold">◆</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ---------- About ----------
const timeline = [
  { year: "2026", label: "Independent studio · Lisbon" },
  { year: "2024", label: "Lead AI Engineer, Northline Labs" },
  { year: "2022", label: "Cinematographer, Fieldnote Films" },
  { year: "2020", label: "First short film · Cannes shortlist" },
  { year: "2018", label: "CS + Film, University of Amsterdam" },
];

function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <SectionLabel>About</SectionLabel>
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <motion.div {...fadeUp} className="md:col-span-7">
            <h2 className="text-3xl md:text-[42px] font-semibold leading-[1.1] tracking-tight max-w-2xl">
              I work at the intersection of{" "}
              <span className="text-gold">engineering</span> and{" "}
              <span className="text-gold">cinema</span> — building tools that
              think, and images that feel.
            </h2>
            <div className="mt-8 space-y-5 text-white/70 text-[17px] leading-relaxed max-w-xl">
              <p>
                For the last six years I've split my time between shipping AI
                products and directing short-form films. The two disciplines
                keep sharpening each other.
              </p>
              <p>
                My work spans automation, applied ML, visual storytelling,
                photography, and motion design — always in service of a single
                idea rendered with care.
              </p>
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="md:col-span-5">
            <div className="rounded-2xl border border-hairline bg-elevated/60 backdrop-blur p-8">
              <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-6">
                Timeline
              </p>
              <ul className="space-y-5">
                {timeline.map((t) => (
                  <li key={t.year} className="flex gap-6">
                    <span className="text-gold w-14 shrink-0 text-sm font-medium tabular-nums">
                      {t.year}
                    </span>
                    <span className="text-white/80 text-[15px]">{t.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ---------- Work ----------
type Project = {
  title: string;
  category: "AI" | "Video" | "Photography" | "Motion" | "Branding";
  year: string;
  image: string;
  span?: "wide" | "tall";
};

const projects: Project[] = [
  { title: "Nightline", category: "Video", year: "2026", image: w1, span: "wide" },
  { title: "Signal Weaver", category: "AI", year: "2025", image: w2 },
  { title: "Antter Titles", category: "Motion", year: "2025", image: w3 },
  { title: "Neon Diaries", category: "Photography", year: "2025", image: w4 },
  { title: "Maison Noir", category: "Branding", year: "2024", image: w5 },
  { title: "Above the Fog", category: "Video", year: "2024", image: w6, span: "wide" },
];

const filters = ["All", "AI", "Video", "Photography", "Motion", "Branding"] as const;

function Work() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const shown = projects.filter((p) => active === "All" || p.category === active);

  return (
    <section id="work" className="relative py-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <div>
            <SectionLabel>Selected Work</SectionLabel>
            <h2 className="text-3xl md:text-[42px] font-semibold tracking-tight max-w-xl">
              A few things I've been proud to ship.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`rounded-full px-4 py-2 text-sm border transition-all ${
                  active === f
                    ? "bg-white text-black border-white"
                    : "border-hairline text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-5">
          {shown.map((p, i) => (
            <motion.a
              key={p.title}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden rounded-2xl border border-hairline bg-elevated ${
                p.span === "wide" ? "md:col-span-4" : "md:col-span-2"
              }`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-90" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-7">
                <div className="flex items-center justify-between text-xs text-white/60 uppercase tracking-[0.18em] mb-2">
                  <span>
                    {p.category} · {p.year}
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-gold translate-x-2 -translate-y-2 opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500"
                  />
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
                  {p.title}
                </h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Showreel ----------
function Showreel() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <motion.div
          {...fadeUp}
          className="relative overflow-hidden rounded-3xl border border-hairline aspect-[16/8]"
        >
          <img
            src={w6}
            alt="Showreel preview"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">
              Showreel · 2026
            </p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl">
              Two minutes of the last two years.
            </h2>
            <button
              aria-label="Play showreel"
              className="group mt-10 inline-flex items-center gap-4 rounded-full border border-white/20 bg-white/5 backdrop-blur px-6 py-3 hover:bg-white/10 transition"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gold text-black">
                <Play size={16} className="translate-x-0.5" fill="currentColor" />
              </span>
              <span className="text-sm text-white">Watch reel</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ---------- Services ----------
const services = [
  { icon: Cpu, title: "AI Development", body: "Applied ML, agents, and internal tools." },
  { icon: Wand2, title: "Automation", body: "Pipelines that quietly do the boring parts." },
  { icon: Film, title: "Video Editing", body: "Narrative structure and color-graded finish." },
  { icon: Sparkles, title: "Motion Graphics", body: "Type in motion, brand systems, titles." },
  { icon: Camera, title: "Photography", body: "Portrait, editorial, product." },
  { icon: Palette, title: "Creative Direction", body: "Concept, art direction, execution." },
];

function Services() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <SectionLabel>What I do</SectionLabel>
        <h2 className="text-3xl md:text-[42px] font-semibold tracking-tight max-w-2xl mb-14">
          Six disciplines, one point of view.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="group rounded-2xl border border-hairline bg-elevated/60 p-8 hover:bg-elevated hover:border-white/15 transition-all hover:-translate-y-1"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-hairline bg-white/5 text-gold mb-6">
                  <Icon size={20} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-white/60 text-[15px] leading-relaxed">{s.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ---------- Skills ----------
const skillGroups = [
  {
    group: "Programming",
    items: ["Python", "TypeScript", "React", "Next.js", "Node", "FastAPI", "OpenAI API", "LangChain", "Docker", "Git"],
  },
  {
    group: "Creative",
    items: ["Premiere Pro", "After Effects", "Photoshop", "Lightroom", "DaVinci Resolve", "Cinema 4D", "Blender", "Figma"],
  },
];

function Skills() {
  return (
    <section id="skills" className="relative py-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <SectionLabel>Skills</SectionLabel>
        <h2 className="text-3xl md:text-[42px] font-semibold tracking-tight max-w-2xl mb-14">
          The tools I reach for.
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skillGroups.map((g) => (
            <motion.div
              {...fadeUp}
              key={g.group}
              className="rounded-2xl border border-hairline bg-elevated/40 p-8"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-gold mb-6">{g.group}</p>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-hairline bg-white/5 px-4 py-2 text-sm text-white/85 hover:bg-white/10 hover:border-white/20 transition"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Experience ----------
const experience = [
  {
    company: "Northline Labs",
    role: "Lead AI Engineer",
    years: "2024 — Present",
    bullets: [
      "Shipped an agent framework used by 40+ internal teams.",
      "Cut manual ops cost 62% through automation pipelines.",
    ],
  },
  {
    company: "Fieldnote Films",
    role: "Director of Photography",
    years: "2022 — 2024",
    bullets: [
      "Shot 14 documentary shorts across 6 countries.",
      "Two Vimeo Staff Picks; one Cannes shortlist.",
    ],
  },
  {
    company: "Freelance",
    role: "Motion & Brand",
    years: "2020 — 2022",
    bullets: [
      "Title design for indie films and product launches.",
      "Brand systems for 20+ early-stage studios.",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="relative py-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <SectionLabel>Experience</SectionLabel>
        <h2 className="text-3xl md:text-[42px] font-semibold tracking-tight max-w-2xl mb-14">
          A short career, taken seriously.
        </h2>
        <ol className="relative border-l border-hairline space-y-12 pl-8">
          {experience.map((e, i) => (
            <motion.li
              key={e.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="relative"
            >
              <span className="absolute -left-[37px] top-1.5 inline-flex h-3 w-3 rounded-full bg-gold ring-4 ring-background" />
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-3">
                <h3 className="text-xl font-semibold">{e.company}</h3>
                <span className="text-white/60">{e.role}</span>
                <span className="ml-auto text-sm text-white/40 tabular-nums">
                  {e.years}
                </span>
              </div>
              <ul className="space-y-1.5 text-white/65 text-[15px] leading-relaxed">
                {e.bullets.map((b) => (
                  <li key={b}>— {b}</li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

// ---------- Testimonials ----------
const quotes = [
  {
    q: "Rare combination of engineering rigor and cinematographer's eye. Ships fast, and it always looks right.",
    name: "Maya Okafor",
    role: "Head of Product, Northline",
  },
  {
    q: "The kind of collaborator you build the next thing around. Calm, precise, and completely trustworthy.",
    name: "Julian Reyes",
    role: "Founder, Fieldnote Films",
  },
  {
    q: "Delivered a brand system and launch film in three weeks. It still holds up two years later.",
    name: "Sara Lind",
    role: "CMO, Halcyon Studio",
  },
];

function Testimonials() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <SectionLabel>Kind words</SectionLabel>
        <div className="grid md:grid-cols-3 gap-5">
          {quotes.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="rounded-2xl border border-hairline bg-elevated/50 p-8 flex flex-col"
            >
              <span className="text-gold text-3xl leading-none mb-4">"</span>
              <blockquote className="text-white/85 text-[16px] leading-relaxed flex-1">
                {t.q}
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-hairline">
                <div className="text-sm font-medium text-white">{t.name}</div>
                <div className="text-xs text-white/50 mt-0.5">{t.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Contact ----------
function Contact() {
  return (
    <section id="contact" className="relative py-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-12">
          <motion.div {...fadeUp} className="md:col-span-6">
            <SectionLabel>Contact</SectionLabel>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              Let's build something{" "}
              <span className="text-gold italic font-light">great.</span>
            </h2>
            <p className="mt-6 text-white/60 max-w-md text-[17px] leading-relaxed">
              Available for select projects and full-time roles from Q2 2026.
              The best way to reach me is a short email.
            </p>
            <div className="mt-10 space-y-3">
              {[
                { icon: Mail, label: "hello@alexrivera.studio", href: "mailto:hello@alexrivera.studio" },
                { icon: Linkedin, label: "linkedin.com/in/alexrivera", href: "#" },
                { icon: Github, label: "github.com/alexrivera", href: "#" },
                { icon: Instagram, label: "@alex.rivera", href: "#" },
              ].map((l) => {
                const Icon = l.icon;
                return (
                  <a
                    key={l.label}
                    href={l.href}
                    className="group flex items-center gap-4 text-white/80 hover:text-white transition"
                  >
                    <Icon size={16} className="text-gold" />
                    <span className="text-[15px]">{l.label}</span>
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition"
                    />
                  </a>
                );
              })}
            </div>
          </motion.div>

          <motion.form
            {...fadeUp}
            className="md:col-span-6 rounded-3xl border border-hairline bg-elevated/60 backdrop-blur p-8 md:p-10 space-y-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label htmlFor="c-name" className="text-xs uppercase tracking-[0.18em] text-white/50">
                Name
              </label>
              <input
                id="c-name"
                required
                className="mt-2 w-full bg-transparent border-b border-hairline focus:border-gold outline-none py-3 text-white placeholder:text-white/30"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="c-email" className="text-xs uppercase tracking-[0.18em] text-white/50">
                Email
              </label>
              <input
                id="c-email"
                type="email"
                required
                className="mt-2 w-full bg-transparent border-b border-hairline focus:border-gold outline-none py-3 text-white placeholder:text-white/30"
                placeholder="you@studio.com"
              />
            </div>
            <div>
              <label htmlFor="c-msg" className="text-xs uppercase tracking-[0.18em] text-white/50">
                Message
              </label>
              <textarea
                id="c-msg"
                rows={4}
                className="mt-2 w-full bg-transparent border-b border-hairline focus:border-gold outline-none py-3 text-white placeholder:text-white/30 resize-none"
                placeholder="Tell me about the project…"
              />
            </div>
            <button
              type="submit"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-gold text-black px-6 py-3 text-sm font-medium hover:brightness-110 transition"
            >
              Send message
              <ArrowUpRight size={16} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

// ---------- Footer ----------
function Footer() {
  return (
    <footer className="relative border-t border-hairline mt-16">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-sm text-white/60">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-hairline text-gold font-bold text-xs">
            AR
          </span>
          <span>© {new Date().getFullYear()} Alex Rivera. All rights reserved.</span>
        </div>
        <div className="flex items-center gap-4 text-white/50">
          <a href="#" aria-label="Instagram" className="hover:text-white transition">
            <Instagram size={16} />
          </a>
          <a href="#" aria-label="GitHub" className="hover:text-white transition">
            <Github size={16} />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-white transition">
            <Linkedin size={16} />
          </a>
          <a
            href="#home"
            className="ml-4 inline-flex items-center gap-2 rounded-full border border-hairline px-3 py-1.5 text-xs text-white/70 hover:text-white hover:bg-white/5 transition"
          >
            <ArrowUp size={12} /> Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}

// ---------- Root ----------
export default function Portfolio() {
  return (
    <div className="relative min-h-screen grain-bg text-white overflow-x-clip">
      <GrainBackground />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <div className="hairline mx-auto max-w-[1280px]" />
        <Work />
        <Showreel />
        <About />
        <Services />
        <Skills />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
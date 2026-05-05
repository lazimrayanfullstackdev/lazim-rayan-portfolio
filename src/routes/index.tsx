import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import portrait from "@/assets/lazim.png";
import {
  Mail, Phone, MapPin, Linkedin, Facebook, Download, ArrowUpRight,
  Target, Megaphone, Linkedin as LinkedinIcon, Cpu, Sparkles, Search, MonitorSmartphone, BarChart3, Handshake, Users,
  ClipboardCheck, Rocket, LifeBuoy, FileSearch, Palette, Code2, SearchCheck, Eye,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lazim Rayan — Associate Manager, Media" },
      { name: "description", content: "Results-driven digital marketer with 6+ years running campaigns on Meta, DV360, LinkedIn, Display, Programmatic & Rich Media." },
      { property: "og:title", content: "Lazim Rayan — Associate Manager, Media" },
      { property: "og:description", content: "Digital marketing & SEO specialist based in Dhaka." },
    ],
  }),
  component: Index,
});

const experience = [
  { role: "Associate Manager", org: "Top of Mind", period: "2025 — Present", note: "Marketing & analytics for DBBL, Abul Khair Group, EBL, Emami, Butterfly, Haier, Kollol and more." },
  { role: "Sr. Executive, Digital Marketing", org: "CLAN Ltd.", period: "2021 — 2025", note: "Managed media buying for 30+ clients across MNCs, NGOs and financial service providers." },
  { role: "Digital Marketing & SEO Expert", org: "STM Corporation", period: "2020 — 2021", note: "Led media buying and SEO for a custom apparel exporter serving the US & UK markets." },
  { role: "Digital Marketing Executive", org: "CareerPaths", period: "2019 — 2020", note: "Lifted leads by 80% and pushed the site to position #2 on SERP." },
];

const skills: { name: string; level: number; icon: React.ComponentType<{ className?: string }> }[] = [
  { name: "Meta Ads", level: 95, icon: Target },
  { name: "DV360", level: 88, icon: Megaphone },
  { name: "LinkedIn Ads", level: 85, icon: LinkedinIcon },
  { name: "Programmatic", level: 82, icon: Cpu },
  { name: "Rich Media", level: 78, icon: Sparkles },
  { name: "SEO", level: 90, icon: Search },
  { name: "Display", level: 80, icon: MonitorSmartphone },
  { name: "Analytics", level: 88, icon: BarChart3 },
  { name: "Negotiation", level: 84, icon: Handshake },
  { name: "Team Management", level: 86, icon: Users },
];

const channelMix: { label: string; value: number }[] = [
  { label: "Meta", value: 32 },
  { label: "DV360", value: 22 },
  { label: "LinkedIn", value: 14 },
  { label: "Programmatic", value: 18 },
  { label: "SEO", value: 10 },
  { label: "Other", value: 4 },
];

const collaborations: { name: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { name: "Social Media Audit", icon: ClipboardCheck },
  { name: "Digital Promotion Plan", icon: Rocket },
  { name: "Digital Promotion Support", icon: LifeBuoy },
  { name: "Website Audit", icon: FileSearch },
  { name: "Website Design", icon: Palette },
  { name: "Website Development", icon: Code2 },
  { name: "Search Engine Optimization (AEO)", icon: SearchCheck },
  { name: "Digital Marketing Supervision", icon: Eye },
];

function Index() {
  return (
    <div className="min-h-screen text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-30 backdrop-blur-md bg-background/60 border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#top" className="font-display text-lg font-semibold tracking-tight">Lazim Rayan<span className="text-primary">.</span></a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition">About</a>
            <a href="#work" className="hover:text-foreground transition">Experience</a>
            <a href="#skills" className="hover:text-foreground transition">Skills</a>
            <a href="#collab" className="hover:text-foreground transition">Collaborate</a>
            <a href="#contact" className="hover:text-foreground transition">Contact</a>
          </nav>
          <a
            href="/Lazim_Rayan_CV.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:opacity-90 transition"
          >
            <Download className="h-4 w-4" /> CV
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="max-w-6xl mx-auto px-6 pt-20 pb-28">
        <div className="grid md:grid-cols-[1.3fr_1fr] gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1 text-xs text-muted-foreground mb-8">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Available for collaboration
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-semibold leading-[0.95]">
              Lazim<br />
              <span className="text-primary italic">Rayan.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Associate Manager, Media — building data-driven campaigns across
              Meta, DV360, LinkedIn and programmatic for 6+ years.
            </p>
            <div className="mt-8 font-display text-2xl md:text-4xl font-bold leading-snug">
              <span className="text-foreground">Let's connect for </span>
              <Typewriter
                words={[
                  "Digital Promotion",
                  "Digital Planning",
                  "Website Design",
                  "Website Development",
                  "Tracking Setup",
                  "SEO",
                  "Website Audit",
                  "Digital Presence Audit",
                ]}
              />
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-medium hover:opacity-90 transition">
                Get in touch <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href="#work" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium hover:bg-card transition">
                See experience
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-[70%]">
            <div className="absolute -inset-6 rounded-3xl bg-primary/20 blur-3xl" aria-hidden />
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-card">
              <img src={portrait} alt="Portrait of Lazim Rayan" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-2xl border border-border bg-card/90 backdrop-blur px-4 py-3 text-sm shadow-xl">
              <div className="font-display text-2xl text-primary leading-none">6+</div>
              <div className="text-muted-foreground text-xs mt-1">years in digital</div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-20 border-t border-border">
        <div className="grid md:grid-cols-3 gap-10">
          <h2 className="font-display text-3xl md:text-4xl">About</h2>
          <div className="md:col-span-2 space-y-5 text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm a results-driven digital marketer with over six years of experience
              in digital marketing and SEO — proficient in running campaigns on Meta,
              DV360, LinkedIn, Display, Programmatic and Rich Media.
            </p>
            <p className="text-foreground">
              BSc in Computer Science from East West University. IELTS 7.0.
              Currently based in Dhaka, Bangladesh.
            </p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="work" className="max-w-6xl mx-auto px-6 py-20 border-t border-border">
        <div className="flex items-end justify-between mb-12">
          <h2 className="font-display text-3xl md:text-4xl">Experience</h2>
          <span className="text-sm text-muted-foreground">2019 — Present</span>
        </div>
        <ol className="space-y-px">
          {experience.map((e) => (
            <li key={e.role} className="group grid md:grid-cols-[160px_1fr_auto] gap-4 md:gap-8 py-8 border-t border-border hover:bg-card/30 transition px-2 -mx-2 rounded-lg">
              <div className="text-sm text-muted-foreground font-mono">{e.period}</div>
              <div>
                <h3 className="font-display text-2xl">{e.role}</h3>
                <div className="text-primary text-sm mt-1">{e.org}</div>
                <p className="text-muted-foreground mt-3 max-w-2xl">{e.note}</p>
              </div>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition hidden md:block" />
            </li>
          ))}
        </ol>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-20 border-t border-border">
        <div className="flex items-end justify-between mb-12">
          <h2 className="font-display text-3xl md:text-4xl">Capabilities</h2>
          <span className="text-sm text-muted-foreground">Proficiency snapshot</span>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Skill bars */}
          <ul className="space-y-5">
            {skills.map((s) => {
              const Icon = s.icon;
              return (
                <li key={s.name}>
                  <div className="flex items-center justify-between mb-2 text-sm">
                    <span className="inline-flex items-center gap-2 text-foreground">
                      <Icon className="h-4 w-4 text-primary" />
                      {s.name}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">{s.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-card/60 overflow-hidden border border-border">
                    <div
                      className="h-full bg-primary rounded-full transition-all"
                      style={{ width: `${s.level}%` }}
                    />
                  </div>
                </li>
              );
            })}
          </ul>

          {/* Channel mix chart */}
          <ChannelMix data={channelMix} />
        </div>
      </section>

      {/* Collaboration Opportunities */}
      <section id="collab" className="max-w-6xl mx-auto px-6 py-20 border-t border-border">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h2 className="font-display text-3xl md:text-4xl">Collaboration<br />Opportunities</h2>
            <p className="text-muted-foreground mt-4 text-sm max-w-xs">Services I take on for partners and clients.</p>
          </div>
          <ul className="md:col-span-2 grid sm:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden border border-border">
            {collaborations.map((c) => {
              const Icon = c.icon;
              return (
                <li key={c.name} className="group flex items-center gap-4 bg-background p-5 hover:bg-card/40 transition">
                  <Icon className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-foreground">{c.name}</span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground ml-auto group-hover:text-primary transition" />
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-24 border-t border-border">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="font-display text-4xl md:text-6xl leading-tight">
              Let's build<br />something <span className="text-primary italic">measurable.</span>
            </h2>
            <p className="text-muted-foreground mt-6 text-lg max-w-md">
              Open to media, performance and growth opportunities.
            </p>
          </div>
          <div className="space-y-1">
            <ContactRow icon={<Mail className="h-4 w-4" />} label="Email" value="lazimrayan@gmail.com" href="mailto:lazimrayan@gmail.com" />
            <ContactRow icon={<Phone className="h-4 w-4" />} label="Phone" value="+880 1855 567530" href="tel:+8801855567530" />
            <ContactRow icon={<Linkedin className="h-4 w-4" />} label="LinkedIn" value="lazim-rayan" href="https://www.linkedin.com/in/lazim-rayan/" />
            <ContactRow icon={<Facebook className="h-4 w-4" />} label="Facebook" value="LazimRayanRefat" href="https://www.facebook.com/LazimRayanRefat" />
            <ContactRow icon={<MapPin className="h-4 w-4" />} label="Location" value="Middle Badda, Dhaka 1212" />
          </div>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-wrap justify-between gap-4 text-sm text-muted-foreground">
          <span>© {new Date().getFullYear()} Lazim Rayan</span>
          <span className="font-display italic">Passionate for Innovation</span>
        </div>
      </footer>
    </div>
  );
}

function Typewriter({ words, typeSpeed = 80, deleteSpeed = 40, pause = 1400 }: { words: string[]; typeSpeed?: number; deleteSpeed?: number; pause?: number }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }
    const t = setTimeout(() => {
      setText((prev) =>
        deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
      );
    }, deleting ? deleteSpeed : typeSpeed);
    return () => clearTimeout(t);
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause]);

  return (
    <span className="text-primary italic">
      {text}
      <span className="inline-block w-[2px] h-[1em] align-[-0.15em] ml-1 bg-primary animate-caret" />
    </span>
  );
}

function ChannelMix({ data }: { data: { label: string; value: number }[] }) {
  const total = data.reduce((s, d) => s + d.value, 0);
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  let offset = 0;
  const palette = [
    "oklch(0.78 0.17 60)",
    "oklch(0.68 0.16 40)",
    "oklch(0.6 0.14 80)",
    "oklch(0.55 0.12 30)",
    "oklch(0.7 0.1 100)",
    "oklch(0.45 0.06 60)",
  ];

  return (
    <div className="rounded-2xl border border-border bg-card/40 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-display text-xl">Channel mix</h3>
        <span className="text-xs text-muted-foreground font-mono">last 12 months</span>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-6">
        <svg viewBox="-100 -100 200 200" className="w-44 h-44 -rotate-90">
          <circle r={radius} fill="none" stroke="var(--border)" strokeWidth="22" />
          {data.map((d, i) => {
            const length = (d.value / total) * circumference;
            const dasharray = `${length} ${circumference - length}`;
            const seg = (
              <circle
                key={d.label}
                r={radius}
                fill="none"
                stroke={palette[i % palette.length]}
                strokeWidth="22"
                strokeDasharray={dasharray}
                strokeDashoffset={-offset}
              />
            );
            offset += length;
            return seg;
          })}
        </svg>

        <ul className="flex-1 space-y-2 w-full">
          {data.map((d, i) => (
            <li key={d.label} className="flex items-center gap-3 text-sm">
              <span
                className="h-2.5 w-2.5 rounded-full shrink-0"
                style={{ background: palette[i % palette.length] }}
              />
              <span className="text-foreground">{d.label}</span>
              <span className="ml-auto font-mono text-xs text-muted-foreground">{d.value}%</span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}

function ContactRow({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const content = (
    <div className="group flex items-center justify-between gap-4 border-t border-border py-5 last:border-b">
      <div className="flex items-center gap-3">
        <span className="text-primary">{icon}</span>
        <span className="text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
      </div>
      <span className="text-foreground group-hover:text-primary transition text-right">{value}</span>
    </div>
  );
  return href ? <a href={href} target="_blank" rel="noreferrer">{content}</a> : content;
}

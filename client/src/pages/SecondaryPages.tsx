import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "wouter";

type PageKind = "work" | "services" | "studio" | "why";

type PageConfig = {
  eyebrow: string;
  title: ReactNode;
  intro: string;
};

const pageConfig: Record<PageKind, PageConfig> = {
  work: {
    eyebrow: "Selected work",
    title: <>Work that earns<br /><span>attention.</span></>,
    intro: "A selection of digital experiences designed to make businesses clearer, more credible, and easier to choose.",
  },
  services: {
    eyebrow: "How I work",
    title: <>One clear process.<br /><span>Better outcomes.</span></>,
    intro: "Strategy, interface design, and full-stack development brought together as one focused engagement.",
  },
  studio: {
    eyebrow: "The studio",
    title: <>A connected system<br /><span>behind the screen.</span></>,
    intro: "Good digital work sits between a sharp point of view, thoughtful design, and dependable engineering.",
  },
  why: {
    eyebrow: "The owned advantage",
    title: <>Why build a<br /><span>professional website?</span></>,
    intro: "Social platforms help you reach people. A website gives that attention a place to become trust, enquiries, and growth.",
  },
};

const projects = [
  { title: "SwapToys India", keyword: "Toys", category: "Marketplace", description: "A clear, friendly experience for discovering and exchanging toys.", url: "https://swaptoys-india-a794.arcada.app" },
  { title: "CalcCheck — Clear, Verified Math", keyword: "Calc", category: "Education", description: "A focused learning tool that makes arithmetic verification simple and understandable.", url: "https://calc-check-dq24.arcada.app" },
  { title: "Web Scraper Agent — AI-Powered URL Summarizer", keyword: "Webscraper", category: "AI / SaaS", description: "A fast AI utility with freemium access, usage limits, and scrape history.", url: "https://webscrapingbygroq.netlify.app" },
  { title: "Aakar Hardware Store", keyword: "Hardware", category: "Local business", description: "A warm catalogue experience with maps and direct contact paths.", url: "https://aakarhardware.vercel.app" },
  { title: "IronPulse Athletics — Engineered for Strength", keyword: "Strength", category: "Fitness", description: "A high-energy digital home for a performance-led brand.", url: "https://uw1nxp-ogfn2vr55-arcadawebapps9.vercel.app" },
  { title: "VOID ARCHIVE — Drop 004", keyword: "Streetwear", category: "Fashion", description: "A cyberpunk streetwear drop experience built around scarcity and attitude.", url: "https://mluxml-5obafhse5-arcadawebapps2.vercel.app" },
  { title: "Aura Occasions — Bespoke Weddings & Corporate Events Atelier", keyword: "Occasions", category: "Events", description: "A premium presence for extraordinary celebrations and gatherings.", url: "https://rgnfxg-dfkth3zrn-arcedawebapps1.vercel.app" },
  { title: "The Rustic Table — Farm-to-Table Bistro & Coffee House", keyword: "Bistro", category: "Hospitality", description: "A sensory hospitality site that brings the warmth of a neighborhood table online.", url: "https://sni4kc-okafs4gqv-arcadawebapps8.vercel.app" },
  { title: "Meridian Realty Partners — Architectural Real Estate", keyword: "Realty", category: "Real estate", description: "An architectural property experience with a considered point of view.", url: "https://3dsigx-2swjga82a-arcadawebapps5.vercel.app" },
  { title: "Nordic Living — Timeless Woodcraft for Modern Living", keyword: "Woodcraft", category: "Furniture", description: "A quiet commerce experience rooted in craft, material quality, and restraint.", url: "https://7zwq5e-5180u70u0-arcadawebapps2.vercel.app" },
  { title: "Frame & Shutter — Visual Storyteller & Commercial Cinematographer", keyword: "Frames", category: "Photography", description: "A cinematic portfolio that gives every frame room to make an impression.", url: "https://a4lcka-9xpfs2pgi-arcadawebapps9.vercel.app" },
  { title: "ExcelPoint Academic Academy & Private Tutoring", keyword: "Tutoring", category: "Education", description: "A clear, credible learning platform for ambitious students and families.", url: "https://2knzzc-iyv41yh76-arcadawebapps9.vercel.app" },
];

const services = [
  ["01", "Strategy & direction", "Clarify the story, audience, and opportunity before a single screen is designed."],
  ["02", "Interface design", "Build a distinctive visual system that makes the right impression at every touchpoint."],
  ["03", "Full-stack development", "Turn the design into a fast, responsive, and dependable digital product."],
];

function PageHeader() {
  return (
    <header className="inner-page-header">
      <Link className="brand" href="/" aria-label="Reyansh Nanwani home"><span className="brand-mark">RN</span><span><b>Reyansh Nanwani</b><small>Web Designer & Developer</small></span></Link>
      <nav className="inner-page-nav" aria-label="Page navigation">
        <Link href="/work">Work</Link><Link href="/services">Services</Link><Link href="/studio">Studio</Link><Link href="/why-build-a-website">Why build a website?</Link>
      </nav>
      <a className="nav-cta" href="mailto:reyanshnanwani1@gmail.com">Start a project <ArrowUpRight size={14} /></a>
    </header>
  );
}

function PageFooter() {
  return <footer className="inner-page-footer"><Link href="/">Back to home <ArrowUpRight size={14} /></Link><span>© 2026 Reyansh Nanwani</span></footer>;
}

function PageIntro({ config }: { config: PageConfig }) {
  return <div className="inner-page-intro"><span className="eyebrow">{config.eyebrow}</span><h1>{config.title}</h1><p>{config.intro}</p></div>;
}

export function WorkPage() {
  return <PageLayout kind="work"><div className="page-project-grid">{projects.map((project, index) => <article className="page-project-card" key={project.title}><div className={`page-project-art page-project-art-${index % 3}`}><span>{String(index + 1).padStart(2, "0")}</span><a className="page-project-keyword" href={project.url} target="_blank" rel="noreferrer">{project.keyword} <ArrowUpRight size={12} /></a></div><small>{project.category}</small><h2>{project.title}</h2><p>{project.description}</p><a href="mailto:reyanshnanwani1@gmail.com">Discuss a similar project <ArrowUpRight size={14} /></a></article>)}</div></PageLayout>;
}

export function ServicesPage() {
  return <PageLayout kind="services"><div className="page-service-list">{services.map(([number, title, description]) => <article key={number}><span>{number}</span><h2>{title}</h2><p>{description}</p><ArrowUpRight size={22} /></article>)}</div><div className="page-callout"><span className="eyebrow">A practical partnership</span><h2>Clear thinking in.<br /><span>Good work out.</span></h2><a className="button-dark" href="mailto:reyanshnanwani1@gmail.com">Start a conversation <ArrowUpRight size={16} /></a></div></PageLayout>;
}

export function StudioPage() {
  return <PageLayout kind="studio"><div className="studio-grid"><div><span className="eyebrow">The approach</span><h2>Small, focused,<br /><span>and intentional.</span></h2></div><div className="studio-copy"><p>I work with businesses that care about how they show up online and want a digital presence that feels as considered as the work behind it.</p><p>Every project brings strategy, design, and development into the same conversation. That means fewer handoffs, clearer decisions, and a result that holds together from the first impression to the final interaction.</p></div></div><div className="studio-principles"><article><strong>01</strong><h3>Clarity before decoration</h3><p>Find the message first. Then make it impossible to miss.</p></article><article><strong>02</strong><h3>Design with a job to do</h3><p>Every visual decision should help the right person take the next step.</p></article><article><strong>03</strong><h3>Built to keep working</h3><p>Beautiful on launch, dependable as your business grows.</p></article></div></PageLayout>;
}

export function WhyWebsitePage() {
  return <PageLayout kind="why"><div className="why-grid"><article><strong>01</strong><h2>Be found beyond the feed.</h2><p>Your website can appear when people search for your services on Google, even when your latest social post has disappeared from the timeline.</p></article><article><strong>02</strong><h2>Build trust in one place.</h2><p>Show your services, work, reviews, location, contact details, and WhatsApp link together in a space you control.</p></article><article><strong>03</strong><h2>Turn attention into action.</h2><p>A focused page gives visitors a clear path to enquire, book, call, or buy instead of asking them to search through posts.</p></article><article><strong>04</strong><h2>Own your foundation.</h2><p>Algorithms change. Accounts get restricted. Your website remains your always-on home base for the business you are building.</p></article></div><div className="page-callout why-callout"><span className="eyebrow">Ready when you are</span><h2>Use social media to attract.<br /><span>Use your website to grow.</span></h2><a className="button-dark" href="mailto:reyanshnanwani1@gmail.com">Build your website <ArrowUpRight size={16} /></a></div></PageLayout>;
}

function PageLayout({ kind, children }: { kind: PageKind; children: ReactNode }) {
  const config = pageConfig[kind];
  return <div className="site-shell inner-page"><PageHeader /><main><section className="inner-page-hero"><PageIntro config={config} /></section><section className="inner-page-content">{children}</section></main><PageFooter /></div>;
}

export default function SecondaryPages() {
  return <WorkPage />;
}

import Link from "next/link";
import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";

export default function Home() {
 const featured = ["pokhara-international-stadium","maghi-gumba","thanimai-park","chinnamasta-hospital"].map(s=>projects.find(p=>p.slug===s)!).filter(Boolean);
 return <div>
  <section className="container-wide pb-16 pt-20 md:pb-24 md:pt-32">
   <p className="eyebrow text-neutral-500">Architect · Architecture / Design / Planning</p>
   <div className="mt-8 grid gap-10 md:grid-cols-[1.5fr_.7fr] md:items-end">
    <h1 className="display-title max-w-5xl text-[clamp(3.6rem,9vw,9rem)] font-medium">Designing spaces.<br/>Creating experiences.</h1>
    <div className="max-w-sm pb-2 md:justify-self-end"><p className="text-lg leading-8 text-neutral-600">An architectural portfolio by Somat Adhikari, exploring the relationship between people, spaces and the built environment.</p><Link href="/about" className="mt-7 inline-flex border-b border-black pb-2 text-sm">Discover the approach ↗</Link></div>
   </div>
  </section>
  <section className="container-wide">
   <div className="relative overflow-hidden bg-[#e8e6e0]"><img src="/images/portfolio-pages/portfolio-page-21.jpg" alt="Architectural project visual from Somat Adhikari's portfolio" className="aspect-[16/8] w-full object-cover object-center"/><div className="absolute bottom-5 left-5 bg-white/90 px-4 py-3 backdrop-blur md:bottom-8 md:left-8"><p className="eyebrow text-neutral-500">Selected work</p><p className="mt-1 text-sm font-medium">Architecture across scales and contexts</p></div></div>
  </section>
  <section className="container-wide py-20 md:py-32">
   <div className="mb-10 flex items-end justify-between"><div><p className="eyebrow text-neutral-500">A selection</p><h2 className="mt-3 text-4xl font-medium tracking-[-.06em] md:text-6xl">Selected works</h2></div><Link href="/projects" className="hidden border-b border-black pb-2 text-sm sm:block">View all projects ↗</Link></div>
   <div className="grid gap-x-7 gap-y-14 md:grid-cols-2">{featured.map(p=><ProjectCard key={p.slug} project={p} featured/>)}</div>
   <Link href="/projects" className="mt-12 inline-flex border-b border-black pb-2 text-sm sm:hidden">View all projects ↗</Link>
  </section>
  <section className="bg-[#eeede8] py-20 md:py-28"><div className="container-wide grid gap-8 md:grid-cols-2 md:items-end"><p className="eyebrow text-neutral-500">Design perspective</p><div><h2 className="text-4xl font-medium leading-[1.05] tracking-[-.06em] md:text-6xl">Architecture shapes how people experience the world around them.</h2><p className="mt-6 max-w-xl leading-7 text-neutral-600">A thoughtful approach to design begins with listening, understanding context and creating spaces that respond to people's needs.</p><Link href="/about" className="mt-7 inline-flex border-b border-black pb-2 text-sm">More about Somat ↗</Link></div></div></section>
 </div>;
}
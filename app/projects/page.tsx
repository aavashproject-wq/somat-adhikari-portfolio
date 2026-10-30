"use client";
import { useMemo, useState } from "react";
import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";
export default function ProjectsPage() {
 const categories = ["All projects",...Array.from(new Set(projects.map(p=>p.category)))];
 const [active,setActive] = useState("All projects");
 const filtered = useMemo(()=>active==="All projects"?projects:projects.filter(p=>p.category===active),[active]);
 return <div className="container-wide py-16 md:py-24">
  <p className="eyebrow text-neutral-500">Portfolio / Selected and supporting work</p><h1 className="display-title mt-6 text-6xl font-medium md:text-8xl">Projects<span className="text-neutral-400">.</span></h1>
  <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-600">A collection of architectural, planning, landscape and interior projects across different contexts in Nepal.</p>
  <div className="my-12 flex flex-wrap gap-2">{categories.map(c=><button key={c} onClick={()=>setActive(c)} className={`rounded-full border px-4 py-2 text-xs transition ${active===c?"border-black bg-black text-white":"border-black/15 hover:border-black"}`}>{c}</button>)}</div>
  <p className="mb-6 text-xs text-neutral-500">{filtered.length} projects</p><div className="grid gap-x-7 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">{filtered.map(p=><ProjectCard key={p.slug} project={p}/>)}</div>
 </div>;
}
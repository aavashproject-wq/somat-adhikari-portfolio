import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/lib/projects";
import type { Metadata } from "next";
export function generateStaticParams(){ return projects.map(p=>({slug:p.slug})); }
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata> { const {slug}=await params; const p=projects.find(x=>x.slug===slug); return {title:p?.title ?? "Project", description:p?.summary}; }
export default async function ProjectDetail({params}:{params:Promise<{slug:string}>}) {
 const {slug}=await params; const p=projects.find(x=>x.slug===slug); if(!p) notFound();
 const image=`/images/portfolio-pages/portfolio-page-${String(p.page).padStart(2,"0")}.jpg`;
 return <article className="container-wide py-12 md:py-20">
  <Link href="/projects" className="eyebrow text-neutral-500">← All projects</Link>
  <div className="mt-12 grid gap-10 md:grid-cols-[1.4fr_.6fr] md:items-end"><div><p className="eyebrow text-neutral-500">{p.category}</p><h1 className="display-title mt-5 text-5xl font-medium md:text-8xl">{p.title}</h1></div><p className="max-w-sm pb-2 text-lg leading-8 text-neutral-600">{p.summary}</p></div>
  <div className="mt-12 overflow-hidden bg-[#e8e6e0]"><img src={image} alt={`${p.title} source portfolio page`} className="max-h-[850px] w-full object-contain"/></div>
  <div className="grid gap-12 py-14 md:grid-cols-[.65fr_1.35fr] md:py-20"><div className="grid grid-cols-2 gap-7 content-start">{[["Location",p.location],["Year",p.year||"Not specified"],["Category",p.category],["Source","Original portfolio"]].map(([k,v])=><div key={k}><p className="eyebrow text-neutral-500">{k}</p><p className="mt-2 text-sm">{v}</p></div>)}</div><div><h2 className="text-3xl font-medium tracking-[-.05em]">Project notes</h2><ul className="mt-6 space-y-4">{p.details.map((d,i)=><li key={i} className="border-t border-black/10 pt-4 text-base leading-7 text-neutral-600">{d}</li>)}</ul><p className="mt-8 text-xs leading-6 text-neutral-500">Project information is transcribed from the supplied portfolio. Some detailed drawings, original image assets, dates and role information may need confirmation before publication.</p></div></div>
 </article>;
}
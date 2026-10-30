import Link from "next/link";
import type { Project } from "@/lib/projects";
export function ProjectCard({project,featured=false}:{project:Project;featured?:boolean}) {
  const image = `/images/portfolio-pages/portfolio-page-${String(project.page).padStart(2,"0")}.jpg`;
  return <Link href={`/projects/${project.slug}`} className="project-card group block">
    <div className="overflow-hidden bg-[#e8e6e0]"><img src={image} alt={`${project.title} portfolio page`} className="project-image aspect-[4/3] w-full object-cover object-top" loading="lazy"/></div>
    <div className="mt-4 flex items-start justify-between gap-4"><div><p className="eyebrow text-neutral-500">{project.category}</p><h3 className="mt-2 text-xl font-medium tracking-[-.04em] md:text-2xl">{project.title}</h3><p className="mt-1 text-sm text-neutral-500">{project.location}{project.year ? ` · ${project.year}` : ""}</p></div><span className="pt-1 text-lg transition-transform group-hover:translate-x-1">↗</span></div>
    {featured && <p className="mt-3 max-w-lg text-sm leading-6 text-neutral-600">{project.summary}</p>}
  </Link>;
}
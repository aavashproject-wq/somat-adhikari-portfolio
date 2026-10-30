"use client";
import Link from "next/link";
import { useState } from "react";
const links = [{href:"/projects",label:"Projects"},{href:"/about",label:"About"},{href:"/expertise",label:"Expertise"},{href:"/contact",label:"Contact"}];
export function SiteHeader() {
  const [open,setOpen] = useState(false);
  return <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f8f8f6]/90 backdrop-blur-xl">
    <div className="container-wide flex h-[76px] items-center justify-between">
      <Link href="/" className="text-xl font-semibold tracking-[-.08em]">SA<span className="text-stone-400">.</span></Link>
      <nav className="hidden items-center gap-9 md:flex">{links.map(x=><Link key={x.href} className="eyebrow text-neutral-600 transition hover:text-black" href={x.href}>{x.label}</Link>)}</nav>
      <button aria-label="Toggle navigation" onClick={()=>setOpen(!open)} className="eyebrow md:hidden">{open?"CLOSE":"MENU"}</button>
    </div>
    {open && <nav className="container-wide flex flex-col gap-5 pb-7 md:hidden">{links.map(x=><Link onClick={()=>setOpen(false)} key={x.href} className="text-2xl tracking-tight" href={x.href}>{x.label}</Link>)}</nav>}
  </header>;
}
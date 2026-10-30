import Link from "next/link";
export function SiteFooter() { return <footer className="bg-[#171717] text-white">
  <div className="container-wide grid gap-12 py-16 md:grid-cols-2 md:py-24">
    <div><p className="eyebrow text-white/50">Have a project in mind?</p><h2 className="mt-5 max-w-xl text-5xl font-medium tracking-[-.07em] md:text-7xl">Let's make space for something meaningful.</h2><Link href="/contact" className="mt-8 inline-flex border-b border-white/60 pb-2 text-sm">Start a conversation ↗</Link></div>
    <div className="flex flex-col justify-between gap-10 md:items-end"><p className="max-w-xs text-sm leading-7 text-white/60 md:text-right">An architectural portfolio documenting projects, ideas and explorations by Somat Adhikari.</p><div className="flex gap-6 text-xs text-white/60"><Link href="/projects">Projects</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link></div></div>
  </div>
  <div className="container-wide flex flex-col justify-between gap-2 border-t border-white/15 py-5 text-[10px] uppercase tracking-[.16em] text-white/40 sm:flex-row"><span>© {new Date().getFullYear()} Somat Adhikari</span><span>Architecture · Design · Planning</span></div>
</footer>; }
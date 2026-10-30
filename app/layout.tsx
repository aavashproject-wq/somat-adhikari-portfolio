import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: { default: "Somat Adhikari | Architect", template: "%s | Somat Adhikari" },
  description: "Architectural portfolio of Somat Adhikari, featuring residential, commercial, institutional, landscape and cultural projects.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className="font-sans antialiased"><SiteHeader /><main>{children}</main><SiteFooter /></body></html>;
}
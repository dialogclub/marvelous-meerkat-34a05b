import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const h = await headers();
  const host = h.get("x-forwarded-host") || h.get("host") || "cinema.vision";
  const protocol = h.get("x-forwarded-proto") || "https";
  const origin = `${protocol}://${host}`;
  return {
    metadataBase: new URL(origin),
    title: "cinema.vision — кіно як простір спільного мислення",
    description: "Синемалогія, філософія кіно, семіотика та психологія смислів.",
    icons: { icon: "/favicon.svg" },
    openGraph: { title: "Синемалогія: «Револьвер»", description: "Найсильніший суперник — той, кого ти щоранку приймаєш за себе.", type: "website", url: origin },
    twitter: { card: "summary_large_image" },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="uk"><body>{children}</body></html>; }

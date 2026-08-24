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
    openGraph: { title: "Синемалогія: «Одіссея»", description: "Повернутися додому — означає зустріти того, ким ти став у дорозі.", type: "website", url: origin, images: [{ url: `${origin}/og-odyssey.png`, width: 1664, height: 928, alt: "Синемалогія: Одіссея — cinema.vision" }] },
    twitter: { card: "summary_large_image", images: [`${origin}/og-odyssey.png`] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="uk"><body>{children}</body></html>; }

import type { Metadata } from "next";
import CinemaVision from "../CinemaVision";

export const metadata: Metadata = {
  title: "Синемалогия: «Револьвер» — cinema.vision",
  description: "Диалог-клуб о враге внутри, правилах игры, цене гордости и нашей собственной партии против самих себя.",
};

export default function RussianHome() { return <CinemaVision initialLang="ru" />; }

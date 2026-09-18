import type { Metadata } from "next";
import CinemaVision from "./CinemaVision";

export const metadata: Metadata = {
  title: "Синемалогія: «Револьвер» — cinema.vision",
  description: "Діалог-клуб про ворога всередині, правила гри, ціну гордості та нашу власну партію проти самих себе.",
};

export default function Home() { return <CinemaVision initialLang="uk" />; }

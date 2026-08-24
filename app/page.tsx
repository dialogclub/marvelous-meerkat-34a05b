import type { Metadata } from "next";
import CinemaVision from "./CinemaVision";

export const metadata: Metadata = {
  title: "Синемалогія: «Одіссея» — cinema.vision",
  description: "Діалог-клуб про міф, повернення додому, візуальну мову Нолана та наші власні одіссеї.",
};

export default function Home() { return <CinemaVision initialLang="uk" />; }

import type { Metadata } from "next";
import CinemaVision from "../CinemaVision";

export const metadata: Metadata = {
  title: "Синемалогия: «Одиссея» — cinema.vision",
  description: "Диалог-клуб о мифе, возвращении домой, визуальном языке Нолана и наших собственных одиссеях.",
};

export default function RussianHome() { return <CinemaVision initialLang="ru" />; }

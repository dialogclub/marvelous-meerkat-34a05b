import type { Metadata } from "next";
import CinemaVision from "../CinemaVision";

export const metadata: Metadata = {
  title: "Cinemalogy: Revolver — cinema.vision",
  description: "A dialogue club about the enemy within, the rules of the game, the price of pride, and our own game against ourselves.",
};

export default function EnglishHome() { return <CinemaVision initialLang="en" />; }

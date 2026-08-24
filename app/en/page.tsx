import type { Metadata } from "next";
import CinemaVision from "../CinemaVision";

export const metadata: Metadata = {
  title: "Cinemalogy: The Odyssey — cinema.vision",
  description: "A dialogue club about myth, homecoming, Nolan’s visual language and our own odysseys.",
};

export default function EnglishHome() { return <CinemaVision initialLang="en" />; }

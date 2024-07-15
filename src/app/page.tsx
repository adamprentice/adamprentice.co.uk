import Image from "next/image";
import Link from "next/link";
import "./page.scss";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Mentoring from "@/components/Mentoring";
import Resume from "@/components/Resume";
import Services from "@/components/Services";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="items-center justify-center">
      <Navbar />
      <Hero />
      <Intro />
      <Services />
      <Resume />
      <Mentoring />
      <Contact />
    </main>
  );
}

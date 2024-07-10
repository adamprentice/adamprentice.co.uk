import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Adam Prentice</h1>
      <h2>Intro</h2>
      <h2>What can I help you with?</h2>
      <h2>
        <Link href="/resume">Resume</Link>
      </h2>
      <h2>
        <Link href="/mentoring">Mentoring</Link>
      </h2>
    </main>
  );
}

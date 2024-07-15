import Link from "next/link";
import React from "react";

const Resume = () => {
  return (
    <section id="resume" className="py-20 px-4 bg-white text-center">
      <h2 className="text-4xl font-bold mb-4">Resume</h2>
      <p className="text-lg">
        Details about your resume or professional experience.
      </p>
      <Link href="/resume">Resume</Link>
    </section>
  );
};

export default Resume;

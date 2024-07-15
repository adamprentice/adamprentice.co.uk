"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

  const handleScroll = () => {
    const sections = [
      "hero",
      "intro",
      "services",
      "resume",
      "mentoring",
      "contact",
    ];
    const scrollY = window.pageYOffset;

    const currentSection = sections.find((section) => {
      const element = document.getElementById(section);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        return (
          scrollY >= offsetTop - 50 && scrollY < offsetTop + offsetHeight - 50
        );
      }
      return false;
    });

    setActiveSection(currentSection || "");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed w-full bg-white shadow-md">
      <ul className="flex justify-center space-x-4 py-4">
        {["hero", "intro", "services", "resume", "mentoring", "contact"].map(
          (section) => (
            <li key={section}>
              <Link
                href={`#${section}`}
                className={`px-4 py-2 ${
                  activeSection === section ? "text-blue-500" : "text-gray-700"
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          )
        )}
      </ul>
    </nav>
  );
};

export default Navbar;

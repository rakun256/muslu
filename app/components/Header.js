"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/muslu-icon.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-transparent" : "bg-transparent"
      }`}
    >
      <div className="mx-auto px-6 sm:px-32 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image
            src={logo}
            alt="Mustafa Uslu M harfi logo"
            width={32}
            height={32}
            draggable={false}
          />
          <span className="text-white font-semibold tracking-wide text-xl">
            MUSTAFA USLU
          </span>
        </div>

        <nav className="hidden md:flex gap-8 text-white text-lg">
          <button
            onClick={() => scrollToSection("hero")}
            className="hover:text-[var(--color-accent)] transition-colors duration-200 cursor-pointer"
          >
            Anasayfa
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="hover:text-[var(--color-accent)] transition-colors duration-200 cursor-pointer"
          >
            Hakkımızda
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="hover:text-[var(--color-accent)] transition-colors duration-200 cursor-pointer"
          >
            Hizmetlerimiz
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="hover:text-[var(--color-accent)] transition-colors duration-200 cursor-pointer"
          >
            İletişim
          </button>
        </nav>

        <button
          className="md:hidden text-white text-2xl z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        <div
          className={`fixed top-0 right-0 w-64 h-screen overflow-y-auto bg-[rgba(15,24,48,0.8)] backdrop-blur-md shadow-lg transition-transform duration-300 transform ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden z-40`}
        >
          <div className="flex flex-col items-end p-12 gap-6 text-white hover:text-gray-300 mt-8">
            <button onClick={() => scrollToSection("hero")}>Anasayfa</button>
            <button onClick={() => scrollToSection("about")}>Hakkımızda</button>
            <button onClick={() => scrollToSection("services")}>Hizmetlerimiz</button>
            <button onClick={() => scrollToSection("contact")}>İletişim</button>
          </div>
        </div>
      </div>
    </header>
  );
}

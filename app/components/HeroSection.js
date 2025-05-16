"use client";
import heroImg from "../assets/hero-bg.png";
import {
  FiPhone,
  FiFile,
  FiBarChart,
  FiUmbrella,
  FiUserCheck,
} from "react-icons/fi";

export default function HeroSection() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100vh] w-full text-white px-6 sm:px-10 lg:px-32 sm:py-16 py-32 flex items-center"
      style={{
        backgroundImage: `url(${heroImg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[rgba(28,43,89,0.5)] backdrop-blur-sm z-0" />

      {/* İçerik */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Yazı ve CTA */}
        <div>
          <h1 className="text-3xl sm:text-6xl font-extrabold mb-3 leading-tight">
            MUSTAFA USLU
          </h1>
          <h2 className="text-lg sm:text-2xl font-medium mb-6">
            SERBEST MUHASEBECİ MALİ MÜŞAVİR
          </h2>
          <p className="text-sm sm:text-lg text-[var(--color-background)] max-w-xl mb-8">
            Mali müşavirin güvenilir ve şeffaf hizmet anlayışıyla işletmenizin geleceğini güvence altına alın.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-[rgba(192,110,63,0.2)] text-white px-6 py-3 rounded-md font-medium hover:bg-[rgba(192,110,63,1)] transition cursor-pointer flex items-center gap-2 backdrop-blur-md"
            >
              <FiPhone />
              İletişime Geç
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="bg-[rgba(255,255,255,0.2)] text-white hover:text-[var(--color-primary)] px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition cursor-pointer flex items-center gap-2 backdrop-blur-md"
            >
              <FiFile />
              Hizmetlerimiz
            </button>
          </div>
        </div>

        {/* Stat Kartları */}
        <div className="flex flex-col sm:flex-row lg:flex-col gap-6 items-start lg:items-end">
          {[
            {
              icon: <FiUserCheck className="text-5xl sm:text-6xl" />,
              value: "120+",
              label: "Aktif Mükellef",
            },
            {
              icon: <FiUmbrella className="text-5xl sm:text-6xl" />,
              value: "15+",
              label: "Yıllık Tecrübe",
            },
            {
              icon: <FiBarChart className="text-5xl sm:text-6xl" />,
              value: "30+",
              label: "Sektörde Hizmet",
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="w-full sm:w-72 lg:w-80 h-44 bg-[rgba(255,255,255,0.2)] text-white px-6 py-4 rounded-md font-medium transition cursor-pointer flex items-center gap-4 backdrop-blur-md"
            >
              {card.icon}
              <div className="flex flex-col justify-between py-1">
                <p className="text-2xl font-bold">{card.value}</p>
                <p className="text-lg">{card.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

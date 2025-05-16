"use client";

import Image from "next/image";
import companyIcon from "../assets/company-icon.png";
import taxIcon from "../assets/tax-icon.png";
import consultingIcon from "../assets/consulting-icon.png";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-[var(--color-background)] text-[var(--color-text)] py-20 px-6 sm:px-32"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <p className="text-xs uppercase tracking-widest text-[var(--color-primary)] font-semibold">
            HAKKIMIZDA
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Hizmet Alanlarımız
          </h2>
          <p className="text-base text-gray-700 max-w-3xl mx-auto">
            Bireyselliği önemseyen, şeffaf çözümler üreten ve uzmanlık temelli hizmetler sunuyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center gap-6 hover:shadow-lg transition-all duration-300">
            <Image
              src={companyIcon}
              alt="Şirket Kurulumu"
              width={80}
              height={80}
              className="w-20 h-20 object-contain"
            />
            <h4 className="text-xl font-semibold text-[var(--color-primary)]">
              Şirket Kurulumu
            </h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              Girişimcilere vergi, tescil ve kuruluş süreçlerinde danışmanlık ve operasyonel destek sağlıyoruz.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center gap-6 hover:shadow-lg transition-all duration-300">
            <Image
              src={taxIcon}
              alt="Beyanname Hizmetleri"
              width={80}
              height={80}
              className="w-20 h-20 object-contain"
            />
            <h4 className="text-xl font-semibold text-[var(--color-primary)]">
              Beyanname Hizmetleri
            </h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              Tüm vergi türlerinde beyanname hazırlığı, kontrolü ve zamanında bildirim garantisi.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center gap-6 hover:shadow-lg transition-all duration-300">
            <Image
              src={consultingIcon}
              alt="Mali Danışmanlık"
              width={80}
              height={80}
              className="w-20 h-20 object-contain"
            />
            <h4 className="text-xl font-semibold text-[var(--color-primary)]">
              Mali Danışmanlık
            </h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              Finansal analiz, mevzuat takibi, raporlama ve stratejik planlama desteği sunuyoruz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "Mustafa Uslu | Serbest Muhasebeci Mali Müşavir",
  description:
    "Pendik’te hizmet veren Serbest Muhasebeci Mali Müşavir Mustafa Uslu’nun resmi tanıtım sitesi.",
  keywords: [
    "Mustafa Uslu",
    "Mali Müşavir Pendik",
    "SMMM",
    "Muhasebe",
    "Beyanname",
    "Şirket Danışmanlığı",
  ],
  creator: "Mustafa Uslu",
  metadataBase: new URL("https://mustafauslu.vercel.app"),
  openGraph: {
    title: "Mustafa Uslu | Mali Müşavir",
    description:
      "Resmi tanıtım sitesi. Pendik’te birey ve kurumlara muhasebe hizmeti verir.",
    url: "https://mustafauslu.vercel.app",
    siteName: "Mustafa Uslu",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Mustafa Uslu Logo",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={inter.variable}>
      <body className="antialiased bg-[var(--color-background)] text-[var(--color-text)] font-sans">
        {children}
      </body>
    </html>
  );
}

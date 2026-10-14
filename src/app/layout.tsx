import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://github.com/escrivetogbe"),
  title: "Elie Mahutin TOGBE — Développeur Web Full-Stack",
  description:
    "Portfolio de Elie Mahutin TOGBE, Développeur Web Full-Stack (Next.js, TypeScript, Vue.js, PHP, PostgreSQL). En recherche active d'une alternance Master à l'INSTA Paris (rythme 3 sem. entreprise / 1 sem. école).",
  keywords: [
    "Elie TOGBE",
    "Développeur Full-Stack",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "React",
    "Vue.js",
    "PHP",
    "Laravel",
    "PostgreSQL",
    "Alternance",
    "INSTA Paris",
  ],
  authors: [{ name: "Elie Mahutin TOGBE" }],
  openGraph: {
    title: "Elie Mahutin TOGBE — Développeur Web Full-Stack",
    description:
      "Développeur Web Full-Stack (Next.js, TypeScript, Vue.js, PHP, PostgreSQL). En recherche d'une alternance Master (3 sem. entreprise / 1 sem. école).",
    url: "https://github.com/escrivetogbe",
    siteName: "Portfolio Elie Mahutin TOGBE",
    images: [
      {
        url: "/assets/elie-togbe.jpg",
        width: 800,
        height: 800,
        alt: "Elie Mahutin TOGBE",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const saved = localStorage.getItem('theme');
                if (saved === 'light') {
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased min-h-screen selection:bg-indigo-500 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}

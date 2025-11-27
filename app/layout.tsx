import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Hasan Emir Çağlar | Frontend Developer",
  description: "Frontend Developer olarak modern web uygulamaları ve kurumsal web siteleri geliştiriyorum. React.js, Next.js, TypeScript ve Tailwind CSS konularında uzmanım.",
  keywords: ["Frontend Developer", "React", "Next.js", "TypeScript", "Web Developer", "Türkiye"],
  authors: [{ name: "Hasan Emir Çağlar" }],
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Hasan Emir Çağlar | Frontend Developer",
    description: "Frontend Developer olarak modern web uygulamaları geliştiriyorum.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="dark scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

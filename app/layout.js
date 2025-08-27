import "./globals.css";
import { Jura } from "next/font/google";
import { ThemeProvider } from "./components/ThemeProvider";


const jura = Jura({
  subsets: ["latin"],
  variable: "--font-jura",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Naiara Costa - Full Stack Dev Portfolio",
    template: "%'s | Naiara Costa"
  },
  description: "Full stack developer with expertise in front-end. Explore my projects and get in touch for collaboration opportunities.",
  keywords: [
    "full stack developer",
    "portfolio",
    "Naiara Costa",
    "Calgary",
    "React", "Next.js", "JavaScript", "TypeScript", "Node.js",
  ],
  authors: [{ name: 'Naiara Costa' }],
  creator: "Naiara Costa",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://naiaracosta.com",
    title: "Naiara Costa - Full Stack Developer Portfolio",
    description: "[YOUR BRIEF BIO] - Full stack developer with expertise in front-end. Explore my projects and get in touch.",
    siteName: "Naiara Costa Portfolio",
    images: [
      {
        url: "./og-portfolio.jpg",
        width: 1200,
        height: 630,
        alt: "Naiara Costa - Full Stack Developer Portfolio",
        type: "image/jpeg",
      },
    ],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};



export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jura.variable}>
      <body className="antialiased font-sans">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

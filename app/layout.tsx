import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";

const fredoka = Fredoka({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sarthak Rakholiya | Creative Developer",
  description: "Portfolio of Sarthak Rakholiya, a Senior Software Development Engineer specializing in React, Next.js, and modern web technologies.",
  keywords: ["Sarthak Rakholiya", "Software Engineer", "Web Developer", "React Developer", "Next.js", "Portfolio", "Frontend Developer", "Creative Developer"],
  authors: [{ name: "Sarthak Rakholiya" }],
  creator: "Sarthak Rakholiya",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sarthak-portfolio.com", // Replace with actual URL if known, or keep generic/placeholder
    title: "Sarthak Rakholiya | Creative Developer",
    description: "Building playful & robust web experiences with React & Next.js.",
    siteName: "Sarthak Rakholiya Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarthak Rakholiya | Creative Developer",
    description: "Building playful & robust web experiences with React & Next.js.",
    creator: "@sarthak_rakholiya", // Replace with actual handle if known
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={cn(fredoka.className, "antialiased bg-background text-foreground")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

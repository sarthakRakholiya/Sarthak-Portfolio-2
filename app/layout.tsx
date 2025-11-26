import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";

const fredoka = Fredoka({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sarthak Rakholiya | Creative Developer",
  description: "Portfolio of Sarthak Rakholiya, a Senior Software Development Engineer.",
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

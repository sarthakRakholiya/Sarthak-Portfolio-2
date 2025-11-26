"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="fixed top-4 right-4 z-50 p-3 rounded-full bg-white border-4 border-black shadow-cartoon hover:shadow-cartoon-hover hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            aria-label="Toggle theme"
        >
            <Sun className="h-[1.5rem] w-[1.5rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-black" />
            <Moon className="absolute top-3 left-3 h-[1.5rem] w-[1.5rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-black" />
        </button>
    );
}

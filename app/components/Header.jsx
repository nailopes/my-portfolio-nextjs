'use client';
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                open &&
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target)
            ) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [open]);

    return (
        <header className="flex justify-between items-center p-6 bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 relative">
            <div className="text-xl font-bold">&lt;devnai&gt;</div>
            <button
                ref={buttonRef}
                className="md:hidden"
                onClick={() => setOpen((o) => !o)}
                aria-label="Toggle navigation menu"
            >
                {open ? <X /> : <Menu />}
            </button>
            <nav
                ref={menuRef}
                className={`text-sm ${open ? "block" : "hidden"} md:flex md:space-x-6 absolute md:static top-full left-0 right-0 bg-white dark:bg-gray-900 md:bg-transparent md:dark:bg-transparent shadow-md md:shadow-none`}
            >
                <Link href="#about" className="block px-6 py-2 md:p-0">About Me</Link>
                <Link href="#projects" className="block px-6 py-2 md:p-0">Projects</Link>
                <Link href="#journey" className="block px-6 py-2 md:p-0">My Journey</Link>
                <Link href="#contact" className="block px-6 py-2 md:p-0">Contact</Link>
                <div className="block px-6 py-2 md:p-0"><ThemeToggle /></div>
            </nav>
        </header>
    );
}

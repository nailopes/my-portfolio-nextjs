'use client';
import Link from "next/link";

export default function Header() {
    return (
        <header className="flex justify-between items-center p-6 bg-white shadow-md sticky top-0 z-50">
            <div className="text-xl font-bold">&lt;devnai&gt;</div>
            <nav className="space-x-6 text-sm">
                <Link href="#about">About Me</Link>
                <Link href="#projects">Projects</Link>
                <Link href="#journey">My Journey</Link>
                <Link href="#contact">Contact</Link>
            </nav>
        </header>
    );
}

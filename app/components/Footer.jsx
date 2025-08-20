'use client';

import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Footer() {
    const [showScrollTop, setShowScrollTop] = useState(false);

    // Show/hide scroll to top button
    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            name: 'LinkedIn',
            icon: Linkedin,
            url: 'https://linkedin.com/in/costanaiara',
            color: 'hover:text-blue-600'
        },
        {
            name: 'GitHub',
            icon: Github,
            url: 'https://github.com/nailopes',
            color: 'hover:text-gray-800'
        },
        {
            name: 'Email',
            icon: Mail,
            url: 'mailto:naiaramirandacosta@gmail.com',
            color: 'hover:text-teal-600'
        }
    ];

    return (
        <footer className="bg-gray-900 text-white relative">
            {/* Scroll to top button */}
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 bg-teal-500 hover:bg-teal-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl z-50"
                    aria-label="Scroll to top"
                >
                    <ArrowUp className="w-5 h-5" />
                </button>
            )}

            <div className="max-w-6xl mx-auto px-6 py-12">
                {/* Main footer content */}
                <div className="flex flex-col items-center justify-center text-center space-y-8">
                    {/* Connect section */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-teal-400">Let's Connect</h4>
                        <p className="text-gray-300 text-sm mb-4">
                            I'm always open to discussing new opportunities and interesting projects.
                        </p>
                        <div className="flex justify-center space-x-4">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target={social.name !== 'Email' ? '_blank' : undefined}
                                        rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
                                        className={`p-2 bg-gray-800 rounded-lg transition-all duration-200 hover:bg-gray-700 ${social.color} hover:scale-110`}
                                        aria-label={social.name}
                                    >
                                        <Icon className="w-5 h-5" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Bottom section */}
                <div className="border-t border-gray-700 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-center items-center">
                        <div className="flex items-center space-x-1 text-sm text-gray-400 mb-4 md:mb-0">
                            <span>&copy; {currentYear}Crafted by Naiara Costa. Made with</span>
                            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                            <span>using Next.js & Tailwind CSS</span>
                        </div>


                        <div className="flex items-center space-x-6 text-sm text-gray-400 md:ml-6">
                            <a
                                href="/privacy-policy"
                                target='_blank'
                                rel='noopener noreferrer'
                                className="hover:text-teal-400 transition-colors duration-200"
                            >
                                Privacy Policy
                            </a>
                            <div >
                                <p>|</p>
                            </div>
                            <a
                                href="/terms-of-use"
                                target='_blank'
                                rel='noopener noreferrer '
                                className="hover:text-teal-400 transition-colors duration-200"
                            >
                                Terms of Use
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-500 to-transparent opacity-30"></div>
        </footer>
    );
}
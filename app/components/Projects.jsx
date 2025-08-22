'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

export default function Projects() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);
    const [slidesToShow, setSlidesToShow] = useState(1);

    const projects = [
        {
            title: "Linktree-style Page",
            image: "/linktree.png",
            alt: "Linktree-style web page interface showing several rounded buttons with social media icons and links, set against a clean white background. The layout is simple and inviting.",
            link: "https://nailopes.github.io/linktree-example/",
            description: "A clean, modern link aggregation page with social media integration and responsive design."
        },
        {
            title: "My first Portfolio Website",
            image: "/portfolio.png",
            alt: "Personal portfolio homepage featuring a centered profile photo, bold heading with the name Nai Lopes, and navigation links for About, Projects, and Contact. The design is modern and welcoming.",
            link: "https://nailopes.github.io/my-portfolio/",
            description: "My first portfolio website showcasing my skills and projects, built with pure HTML and CSS to demonstrate my foundational web development skills."
        },
        {
            title: "E-commerce Platform",
            image: "/choripan.png",
            alt: "E-commerce website interface with product grid, shopping cart functionality, and clean checkout process.",
            link: "https://choripan.ca",
            description: "Full-stack e-commerce solution with contact integration and product features, built with Next.js and Tailwind CSS."
        },
        {
            title: "Task Management App",
            image: "/portfolio.png",
            alt: "Task management application with drag-and-drop functionality, project boards, and team collaboration features.",
            link: "#",
            description: "Collaborative task management with real-time updates and team productivity features."
        }
    ];

    const totalSlides = projects.length;
    const maxIndex = Math.max(0, totalSlides - slidesToShow);

    // Handle responsive behavior
    useEffect(() => {
        const handleResize = () => {
            if (typeof window !== 'undefined') {
                const newSlidesToShow = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
                setSlidesToShow(newSlidesToShow);
                // Reset current index if it exceeds new max
                const newMaxIndex = Math.max(0, totalSlides - newSlidesToShow);
                if (currentIndex > newMaxIndex) {
                    setCurrentIndex(newMaxIndex);
                }
            }
        };

        // Set initial value
        handleResize();

        // Add resize listener
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [currentIndex, totalSlides]);

    const nextSlide = () => {
        const currentMaxIndex = Math.max(0, totalSlides - slidesToShow);
        setCurrentIndex((prev) => (prev >= currentMaxIndex ? 0 : prev + 1));
    };

    const prevSlide = () => {
        const currentMaxIndex = Math.max(0, totalSlides - slidesToShow);
        setCurrentIndex((prev) => (prev <= 0 ? currentMaxIndex : prev - 1));
    };

    const goToSlide = (index) => {
        const currentMaxIndex = Math.max(0, totalSlides - slidesToShow);
        setCurrentIndex(Math.min(index, currentMaxIndex));
    };

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlay) return;

        const interval = setInterval(nextSlide, 4000);
        return () => clearInterval(interval);
    }, [isAutoPlay, currentIndex, slidesToShow]);

    // Handle mouse enter/leave for auto-play
    const handleMouseEnter = () => setIsAutoPlay(false);
    const handleMouseLeave = () => setIsAutoPlay(true);

    return (
        <section id="projects" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        A showcase of my recent work in web development, featuring modern designs and innovative solutions.
                    </p>
                </div>

                <div
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {/* Carousel Container */}
                    <div className="overflow-hidden rounded-2xl">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{
                                transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
                            }}
                        >
                            {projects.map((project, index) => (
                                <div
                                    key={index}
                                    className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
                                >
                                    <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden h-full">
                                        {/* Image Container */}
                                        <div className="relative overflow-hidden">
                                            <img
                                                src={project.image}
                                                alt={project.alt}
                                                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                            {/* Overlay Link */}
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <a
                                                    href={project.link}
                                                    target={project.link.startsWith('http') ? '_blank' : '_self'}
                                                    rel={project.link.startsWith('http') ? 'noopener noreferrer' : ''}
                                                    className="bg-white/90 backdrop-blur-sm text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-white transition-colors duration-200 flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0"
                                                >
                                                    <ExternalLink size={18} />
                                                    View Project
                                                </a>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors duration-200">
                                                {project.title}
                                            </h3>
                                            <p className="text-gray-600 mb-4 line-clamp-3">
                                                {project.description}
                                            </p>
                                            {/* <a
                                                href={project.link}
                                                target={project.link.startsWith('http') ? '_blank' : '_self'}
                                                rel={project.link.startsWith('http') ? 'noopener noreferrer' : ''}
                                                className="inline-flex items-center text-teal-600 hover:text-teal-700 font-semibold transition-colors duration-200"
                                            >
                                                Learn More
                                                <ExternalLink size={16} className="ml-1" />
                                            </a> */}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 z-10 group"
                        aria-label="Previous project"
                    >
                        <ChevronLeft size={24} className="group-hover:scale-110 transition-transform duration-200" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 z-10 group"
                        aria-label="Next project"
                    >
                        <ChevronRight size={24} className="group-hover:scale-110 transition-transform duration-200" />
                    </button>

                    {/* Dots Indicator */}
                    <div className="flex justify-center space-x-3 mt-8">
                        {Array.from({ length: Math.max(0, totalSlides - slidesToShow) + 1 }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index
                                    ? 'bg-teal-600 scale-125'
                                    : 'bg-gray-300 hover:bg-gray-400'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-1 mt-6">
                        <div
                            className="bg-gradient-to-r from-teal-500 to-teal-600 h-1 rounded-full transition-all duration-300"
                            style={{
                                width: `${((currentIndex + 1) / (Math.max(0, totalSlides - slidesToShow) + 1)) * 100}%`
                            }}
                        />
                    </div>
                </div>

                {/* Auto-play indicator */}
                <div className="text-center mt-6">
                    <button
                        onClick={() => setIsAutoPlay(!isAutoPlay)}
                        className="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200"
                    >
                        {isAutoPlay ? '⏸️ Pause Auto-play' : '▶️ Resume Auto-play'}
                    </button>
                </div>
            </div>
        </section>
    );
}
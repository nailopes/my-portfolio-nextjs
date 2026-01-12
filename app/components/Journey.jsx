'use client';

import Link from "next/link";
import { useState } from 'react';
import { Calendar, MapPin, Award, Code, GraduationCap, Briefcase, Globe, Lightbulb, Trophy } from 'lucide-react';

export default function Journey() {
    const [activeItem, setActiveItem] = useState(0);

    const journeyData = [

        {
            id: 1,
            title: "Junior Technical Solutuions Analyst",
            company: "Windmill Microlending",
            role: "Data & DevOps Intern",
            period: "2026",
            location: "Calgary, AB",
            type: "WORK",
            icon: Briefcase,
            description: "A hybrid role combining data analysis and DevOps tasks to support Windmill's mission of providing microloans to entrepreneurs in developing countries. Responsibilities include managing databases, automating workflows, and ensuring data integrity while collaborating with cross-functional teams to enhance operational efficiency.",
            skills: [
                "API Integration",
                "SQL & NoSQL Databases",
                "Data Visualization",
                "Agile Practices",
                "Cloud Services",
                "Preset build and update dashboards"
            ],
            color: "rose",
        },
        {
            id: 2,
            title: "Personal & Side Projects",
            company: "Independent",
            role: "Full Stack Developer",
            period: "2025",
            location: "Calgary, AB",
            type: "achievement",
            icon: Code,
            description:
                "Developed and shipped multiple independent projects, including my personal portfolio and side apps such as Choripan. These projects allowed me to apply modern web technologies, explore new tools, and stay active while continuously learning and delivering value.",
            skills: [
                "Next.js/React",
                "Tailwind CSS",
                "Node.js",
                "Agile Practices",
                "Accessibility",
                "Performance Optimization"
            ],
            color: "pink",
        },

        {
            id: 3,
            title: "Capstone Project – Full Stack App",
            company: "InceptionU",
            role: "Full Stack Developer",
            period: "2025",
            location: "Calgary, AB",
            type: "achievement",
            icon: Trophy,
            description:
                "End-to-end product delivered in a cross-functional team: scoped requirements, designed UX, built API & UI, wrote docs, and presented a live demo.",
            skills: ["Requirements", "UI/UX", "React", "Node.js", "REST APIs", "Teamwork"],
            color: "fuchsia",
        },

        {
            id: 4,
            title: "InceptionU – Full Stack Developer Program",
            company: "InceptionU",
            role: "Full Stack Developer (Student)",
            period: "2024–2025",
            location: "Calgary, AB",
            type: "education",
            icon: GraduationCap,
            description:
                "Intensive, project-based program focused on modern web development and team delivery. Built real-world apps emphasizing collaboration, problem-solving, and user-centric design.",
            skills: [
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Node.js",
                "Express",
                "MongoDB",
                "Git/GitHub",
                "Agile"
            ],
            color: "purple",
        },

        {
            id: 5,
            title: "ComIT – Web Development Foundations",
            company: "ComIT",
            role: "Web Development Trainee",
            period: "2020",
            location: "Calgary, AB (hybrid)",
            type: "education",
            icon: GraduationCap,
            description:
                "Learned core front-end skills and foundations of app development. Practice-based learning with small projects and code reviews.",
            skills: ["HTML", "CSS", "JavaScript", "React", "Responsive Design", "Git"],
            color: "violet",
        },

        {
            id: 6,
            title: "Career Transition to IT",
            company: "Self-initiated",
            role: "Learner & Explorer",
            period: "2019",
            location: "Calgary, AB",
            type: "achievement",
            icon: Lightbulb,
            description:
                "After moving to Calgary, I decided to pursue a career in IT. Inspired by my problem-solving background in engineering and project management, and motivated by Calgary’s growing tech ecosystem, I began exploring programming and enrolled in training programs to build a solid foundation in software development.",
            skills: ["Problem Solving", "Adaptability", "Continuous Learning"],
            color: "indigo",
        },

        {
            id: 7,
            title: "Transition to Canada",
            company: "Various Roles",
            role: "Sales Associate & Cashier",
            period: "2016–2019",
            location: "Winnipeg, MB",
            type: "work",
            icon: Globe,
            description:
                "Moved to Canada and immersed myself in a new culture while studying English. Worked in customer-facing roles as a Sales Associate and Cashier, gaining Canadian work experience and improving communication skills in a professional environment.",
            skills: ["Customer Service", "Communication", "Adaptability", "Teamwork", "English Language Proficiency"],
            color: "blue",
        },

        {
            id: 8,
            title: "B.Sc. in Civil Engineering",
            company: "Universidade FUMEC",
            role: "Civil Engineering Graduate",
            period: "2011–2016",
            location: "Belo Horizonte, Brazil",
            type: "education",
            icon: GraduationCap,
            description:
                "Engineering background and project management fundamentals: planning, delivery, stakeholder communication, and structured problem-solving—skills now applied to software.",
            skills: ["Project Management", "Planning & Scheduling", "Stakeholder Communication"],
            color: "sky",
        },


    ];

    const getColorClasses = (color) => {
        const colors = {
            pink: {
                bg: "bg-pink-400",
                text: "text-pink-500",
                border: "border-pink-200",
                hover: "hover:bg-pink-00 hover:text-white"
            },
            fuchsia: {
                bg: "bg-fuchsia-400",
                text: "text-fuchsia-500",
                border: "border-fuchsia-200",
                hover: "hover:bg-fuchsia-00 hover:text-white"
            },
            purple: {
                bg: "bg-purple-400",
                text: "text-purple-500",
                border: "border-purple-200",
                hover: "hover:bg-purple-00 hover:text-white"
            },
            violet: {
                bg: "bg-violet-400",
                text: "text-violet-500",
                border: "border-violet-200",
                hover: "hover:bg-violet-00 hover:text-white"
            },
            indigo: {
                bg: "bg-indigo-400",
                text: "text-indigo-500",
                border: "border-indigo-200",
                hover: "hover:bg-indigo-00 hover:text-white"
            },
            blue: {
                bg: "bg-blue-400",
                text: "text-blue-500",
                border: "border-blue-200",
                hover: "hover:bg-blue-00 hover:text-white"
            },
            sky: {
                bg: "bg-sky-400",
                text: "text-sky-500",
                border: "border-sky-200",
                hover: "hover:bg-sky-00 hover:text-white"
            },
            emerald: {
                bg: "bg-emerald-400",
                text: "text-emerald-500",
                border: "border-emerald-200",
                hover: "hover:bg-emerald-00 hover:text-white"
            },
            teal: {
                bg: "bg-teal-400",
                text: "text-teal-500",
                border: "border-teal-200",
                hover: "hover:bg-teal-00 hover:text-white"
            }
        };
        return colors[color] || colors.teal;
    };

    return (
        <section id="journey" className="py-20 px-6 section-secondary">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-heading mb-4">My Journey</h2>
                    <p className="text-content text-lg">Tracing the path of growth and learning</p>
                </div>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-300 via-gray-400 to-gray-300"></div>

                    {journeyData.map((item, index) => {
                        const colors = getColorClasses(item.color);
                        const Icon = item.icon;
                        const isEven = index % 2 === 0;

                        return (
                            <div key={item.id} className="relative mb-12 last:mb-0">
                                {/* Timeline dot */}
                                <div className={`absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 ${colors.bg} rounded-full border-4 border-white shadow-lg z-10`}></div>

                                {/* Content card */}
                                <div className={`ml-16 md:ml-0 md:w-6/12 ${!isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                                    <div
                                        className={`section-primary rounded-xl shadow-lg border ${colors.border} p-6 transform transition-all duration-300 cursor-pointer ${activeItem === index ? 'scale-105 shadow-xl' : colors.hover
                                            }`}
                                        onClick={() => setActiveItem(activeItem === index ? -1 : index)}
                                    >
                                        {/* Card header */}
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex items-center space-x-3">
                                                <div className={`p-2 ${colors.bg} rounded-lg`}>
                                                    <Icon className="w-5 h-5 text-content" />
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-heading">{item.title}</h3>
                                                    <p className={`${colors.text} font-semibold`}>{item.role}</p>
                                                </div>
                                            </div>
                                            <span className={`text-sm ${colors.text} bg-gray-50 px-3 py-1 rounded-full font-medium`}>
                                                {item.period}
                                            </span>
                                        </div>

                                        {/* Company and location */}
                                        <div className="flex items-center space-x-4 mb-4 text-content">
                                            <div className="flex items-center space-x-1">
                                                <Briefcase className="w-4 h-4" />
                                                <span className="text-sm">{item.company}</span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <MapPin className="w-4 h-4" />
                                                <span className="text-sm">{item.location}</span>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className={`text-content leading-relaxed transition-all duration-300 ${activeItem === index ? 'mb-4' : 'mb-0'
                                            }`}>
                                            {item.description}
                                        </p>

                                        {/* Skills - shown when active */}
                                        <div className={`transition-all duration-300 overflow-hidden ${activeItem === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                                            }`}>
                                            <div className="pt-4 border-t border-gray-100">
                                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-2">Technologies & Skills:</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {item.skills.map((skill, skillIndex) => (
                                                        <span
                                                            key={skillIndex}
                                                            className={`px-3 py-1 ${colors.text} bg-gray-50 rounded-full text-sm font-medium border ${colors.border}`}
                                                        >
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Click indicator */}
                                        <div className="flex justify-center mt-4">
                                            <div className={`w-6 h-1 ${colors.bg} rounded-full transition-all duration-300 ${activeItem === index ? 'opacity-100' : 'opacity-30'
                                                }`}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Call to action */}
                <div className="text-center mt-16">
                    <div className="section-primary rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
                        <h3 className="text-2xl font-bold text-heading mb-4">Ready for the Next Chapter</h3>
                        <p className="text-content mb-6">
                            I'm excited to bring my skills and passion to new challenges and opportunities.
                        </p>
                        {/* <a
                            href="mailto:naiaramirandacosta@gmail.com?subject=Let's Connect - Portfolio Inquiry&body=Hi! I found your portfolio and would love to connect with you."
                            className="inline-block bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
                        >
                            Let's Connect
                        </a> */}
                    </div>
                </div>
            </div>
        </section>
    );
}
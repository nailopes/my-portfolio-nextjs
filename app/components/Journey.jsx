'use client';

import Link from "next/link";
import { useState } from 'react';
import { Calendar, MapPin, Award, Code, GraduationCap, Briefcase } from 'lucide-react';

export default function Journey() {
    const [activeItem, setActiveItem] = useState(0);

    const journeyData = [
        {
            id: 1,
            title: "InceptionU - Full Stack Developer Program",
            company: "InceptionU",
            role: "Full Stack Developer Student",
            period: "2024",
            location: "Calgary, AB",
            type: "education",
            icon: GraduationCap,
            description: "I gained hands-on experience with key web development technologies like HTML, CSS, JavaScript, React, Node.js, MongoDB, and JSON. Throughout the course, I worked on real projects that challenged me to apply these skills in practical scenarios.",
            skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB", "JSON"],
            color: "teal"
        },
        {
            id: 2,
            title: "Previous Experience",
            company: "Your Company",
            role: "Your Previous Role",
            period: "2023",
            location: "Your Location",
            type: "work",
            icon: Briefcase,
            description: "Add your previous work experience here. Describe your responsibilities, achievements, and the skills you developed.",
            skills: ["Skill 1", "Skill 2", "Skill 3"],
            color: "blue"
        },
        {
            id: 3,
            title: "Another Milestone",
            company: "Another Company/Institution",
            role: "Your Role",
            period: "2022",
            location: "Location",
            type: "achievement",
            icon: Award,
            description: "Add another significant milestone in your journey. This could be a certification, project, or career achievement.",
            skills: ["Skill A", "Skill B", "Skill C"],
            color: "purple"
        }
    ];

    const getColorClasses = (color) => {
        const colors = {
            teal: {
                bg: "bg-teal-500",
                text: "text-teal-600",
                border: "border-teal-200",
                hover: "hover:bg-teal-50"
            },
            blue: {
                bg: "bg-blue-500",
                text: "text-blue-600",
                border: "border-blue-200",
                hover: "hover:bg-blue-50"
            },
            purple: {
                bg: "bg-purple-500",
                text: "text-purple-600",
                border: "border-purple-200",
                hover: "hover:bg-purple-50"
            }
        };
        return colors[color] || colors.teal;
    };

    return (
        <section id="journey" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">My Journey</h2>
                    <p className="text-gray-600 text-lg">Tracing the path of growth and learning</p>
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
                                        className={`bg-white rounded-xl shadow-lg border ${colors.border} p-6 transform transition-all duration-300 cursor-pointer ${activeItem === index ? 'scale-105 shadow-xl' : colors.hover
                                            }`}
                                        onClick={() => setActiveItem(activeItem === index ? -1 : index)}
                                    >
                                        {/* Card header */}
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex items-center space-x-3">
                                                <div className={`p-2 ${colors.bg} rounded-lg`}>
                                                    <Icon className="w-5 h-5 text-white" />
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                                                    <p className={`${colors.text} font-semibold`}>{item.role}</p>
                                                </div>
                                            </div>
                                            <span className={`text-sm ${colors.text} bg-gray-50 px-3 py-1 rounded-full font-medium`}>
                                                {item.period}
                                            </span>
                                        </div>

                                        {/* Company and location */}
                                        <div className="flex items-center space-x-4 mb-4 text-gray-600">
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
                                        <p className={`text-gray-600 leading-relaxed transition-all duration-300 ${activeItem === index ? 'mb-4' : 'mb-0'
                                            }`}>
                                            {item.description}
                                        </p>

                                        {/* Skills - shown when active */}
                                        <div className={`transition-all duration-300 overflow-hidden ${activeItem === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                                            }`}>
                                            <div className="pt-4 border-t border-gray-100">
                                                <h4 className="text-sm font-semibold text-gray-700 mb-2">Technologies & Skills:</h4>
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
                    <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready for the Next Chapter</h3>
                        <p className="text-gray-600 mb-6">
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
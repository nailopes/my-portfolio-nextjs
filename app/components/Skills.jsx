'use client';

import { useState } from "react";
import { Wrench, Heart, Code, Server, Database, GitBranch, Users, Target, Lightbulb, Clock, MessageCircle, TrendingUp, Globe } from "lucide-react";

const Skills = () => {
    const [activeTab, setActiveTab] = useState("hard");

    const hardSkills = [
        {
            category: "Core Front-End",
            icon: <Code className="w-5 h-5" />,
            skills: [
                "HTML5",
                "CSS3",
                "JavaScript (ES6+)",
                "Responsive Web Design",
                "Accessibility Best Practices",
            ],
            color: "from-rose-500 to-pink-500",
        },
        {
            category: "Frameworks & UI",
            icon: <Heart className="w-5 h-5" />,
            skills: ["React", "Next.js", "Figma", "Canva"],
            color: "from-pink-500 to-fuchsia-500",
        },
        {
            category: "Back-End Development",
            icon: <Server className="w-5 h-5" />,
            skills: ["Node.js", "Express.js"],
            color: "from-fuchsia-500 to-purple-500"
        },

        {
            category: "Data & APIs",
            icon: <Database className="w-5 h-5" />,
            skills: ["MongoDB", "Firebase", "RESTful APIs", "Third-Party API Integration"],
            color: "from-purple-500 to-violet-500",
        },
        {
            category: "Version Control & Tools",
            icon: <GitBranch className="w-5 h-5" />,
            skills: ["Git", "GitHub"],
            color: "from-violet-600 to-indigo-800",
        },
        {
            category: "Agile Methodologies",
            icon: <Target className="w-5 h-5" />,
            skills: ["Scrum", "Kanban"],
            color: "from-indigo-500 to-blue-500",
        },
    ];

    const softSkills = [
        {
            category: "Problem-Solving & Analysis",
            icon: <Lightbulb className="w-5 h-5" />,
            skills: ["Problem-Solving", "Critical Thinking", "UX/User-Centric Mindset"],
            color: "from-rose-500 to-pink-500"
        },
        {
            category: "Communication & Collaboration",
            icon: <MessageCircle className="w-5 h-5" />,
            skills: ["Collaboration", "Communication", "Customer Service", "Teamwork"],
            color: "from-pink-500 to-fuchsia-500"
        },
        {
            category: "Leadership & Management",
            icon: <Users className="w-5 h-5" />,
            skills: ["Leadership", "Strategic Planning", "Project Management (civil & software)"],
            color: "from-fuchsia-500 to-purple-500"
        },
        {
            category: "Personal Development",
            icon: <TrendingUp className="w-5 h-5" />,
            skills: ["Adaptability", "Continuous Learning", "Resilience", "Initiative"],
            color: "from-purple-500 to-violet-500"
        },
        {
            category: "Organization & Efficiency",
            icon: <Clock className="w-5 h-5" />,
            skills: ["Time Management", "Organization"],
            color: "from-violet-500 to-indigo-500"
        },
        {
            category: "Cross-Cultural Competency",
            icon: <Globe className="w-5 h-5" />,
            skills: ["Cross-Cultural Communication", "Cultural Adaptability", "Multicultural Team Collaboration"],
            color: "from-indigo-600 to-blue-600"
        }
    ];

    const SkillCard = ({ category, icon, skills, color }) => (
        <div className="group relative bg-white dark:bg-black rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
            {/* Gradient background overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>

            {/* Header */}
            <div className="flex items-center space-x-3 mb-4">
                <div className={`p-2 rounded-lg bg-gradient-to-r ${color} text-white`}>
                    {icon}
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-white text-lg">{category}</h3>
            </div>

            {/* Skills */}
            <div className="space-y-2">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="flex items-center space-x-2 py-2 px-3 rounded-lg bg-gray-50 dark:bg-black hover:bg-gray-100 dark:hover:bg-black transition-colors duration-200"
                    >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${color}`}></div>
                        <span className="text-gray-700 dark:text-white text-sm font-medium">{skill}</span>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <section className="min-h-screen bg-white dark:bg-black from-slate-50 via-blue-50 to-indigo-50 dark:from-black dark:via-black dark:to-black py-16 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
                        Skills & Expertise
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-white max-w-2xl mx-auto">
                        A comprehensive overview of my technical abilities and professional competencies
                    </p>
                </div>

                {/* Tab Navigation */}
                <div className="flex justify-center mb-12">
                    <div className="bg-white dark:bg-black rounded-2xl p-2 shadow-lg border border-gray-200 dark:border-gray-700">
                        <button
                            onClick={() => setActiveTab("hard")}
                            className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${activeTab === "hard"
                                ? "bg-gradient-to-r bg-teal-500 text-white shadow-lg"
                                : "text-gray-600 hover:text-gray-800 dark:text-white dark:hover:text-white"
                                }`}
                        >
                            <Wrench className="w-5 h-5" />
                            <span>Hard Skills</span>
                        </button>
                        <button
                            onClick={() => setActiveTab("soft")}
                            className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${activeTab === "soft"
                                ? "bg-gradient-to-r bg-pink-500 text-white shadow-lg"
                                : "text-gray-600 hover:text-gray-800 dark:text-white dark:hover:text-white"
                                }`}
                        >
                            <Heart className="w-5 h-5" />
                            <span>Soft Skills</span>
                        </button>
                    </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {activeTab === "hard"
                        ? hardSkills.map((skillGroup, index) => (
                            <SkillCard key={index} {...skillGroup} />
                        ))
                        : softSkills.map((skillGroup, index) => (
                            <SkillCard key={index} {...skillGroup} />
                        ))}
                </div>

                {/* Stats Footer */}
                <div className="mt-16 bg-white dark:bg-black rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-3xl font-bold text-blue-600 mb-2">{hardSkills.reduce((acc, group) => acc + group.skills.length, 0)}</div>
                            <div className="text-gray-600 dark:text-white font-medium">Technical Skills</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-pink-600 mb-2">{softSkills.reduce((acc, group) => acc + group.skills.length, 0)}</div>
                            <div className="text-gray-600 dark:text-white font-medium">Soft Skills</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-green-600 mb-2">{hardSkills.length}</div>
                            <div className="text-gray-600 dark:text-white font-medium">Tech Categories</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-purple-600 mb-2">{softSkills.length}</div>
                            <div className="text-gray-600 dark:text-white font-medium">Professional Areas</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
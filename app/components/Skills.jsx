export default function Skills() {
    return (
        <section>
            <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                {["JavaScript", "React", "Node.js", "Python", "Git", "Tailwind CSS"].map((skill) => (
                    <li key={skill} className="bg-gray-800 py-3 rounded-lg">
                        {skill}
                    </li>
                ))}
            </ul>
        </section>
    );
}

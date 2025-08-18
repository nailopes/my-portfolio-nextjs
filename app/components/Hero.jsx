export default function Hero() {
    return (
        <section className="text-center py-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Naiara Costa</h1>
            <div className="mx-auto max-w-7xl justify-center items-center text-lg md:text-xl text-gray-700 mb-8">
                <p className="mb-8 mx-4">
                    Civil Engineer turned Developer. I build useful things with code and caffeine.
                </p>
                <p className="mb-8 mx-4">
                    My background in engineering and project management taught me how to plan, deliver, and collaborate effectively, skills I now bring into software development.
                </p>
                <p className="mb-8 mx-4">
                    I started my technical journey at ComIT, learning the fundamentals of web development (HTML, CSS, JavaScript, React), and I continue to grow as a Full Stack Developer at InceptionU, working on projects that emphasize teamwork, problem-solving, and building user-centric solutions.
                </p>
                <p className="mb-8 mx-4">
                    I’m actively studying new technologies and building projects that challenge me to improve daily. I believe great products come from combining strong technical skills with empathy, communication, and continuous learning.
                </p>
                <p className="mb-8 mx-4">
                    Outside of code, you’ll usually find me outdoors hiking, exploring nature, or finding fresh inspiration for my next project.
                </p>

            </div>

            <a
                href="#projects"
                className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-lg text-lg"
            >
                View My Work
            </a>
        </section>
    );
}

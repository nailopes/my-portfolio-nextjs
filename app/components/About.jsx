export default function About() {
    return (
        <section id="about" className="flex flex-col md:flex-row items-center justify-center gap-12 px-6 py-20 bg-gray-50">
            <img
                src="/your-photo.png"
                alt="Naiara Lopes"
                className="w-72 rounded-full shadow-lg"
            />
            <div className="max-w-md text-center md:text-left">
                <h2 className="text-3xl font-bold mb-4">ABOUT ME</h2>
                <p className="mb-2">Hi! I'm Naiara Lopes,</p>
                <p className="text-teal-500 font-semibold mb-2">Full Stack Developer</p>
                <p>Civil Engineer</p>
                <p className="mb-4">Project Manager</p>
                <a
                    href="/resume.pdf"
                    download
                    className="bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600 transition"
                >
                    Download My Resume
                </a>
            </div>
        </section>
    );
}

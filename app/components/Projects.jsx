export default function Projects() {
    return (
        <section id="projects" className="py-20 px-6 bg-white text-center">
            <h2 className="text-3xl font-bold mb-12">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <div className="p-6 shadow-lg rounded bg-gray-100">
                    <h3 className="text-xl font-semibold mb-2">Linktree-style Page</h3>
                    <img src="/linktree.png" alt="Linktree Project" className="rounded mb-4" />
                    <a href="#" className="text-teal-500 underline">View Live</a>
                </div>
                <div className="p-6 shadow-lg rounded bg-gray-100">
                    <h3 className="text-xl font-semibold mb-2">This Portfolio</h3>
                    <img src="/portfolio.png" alt="Portfolio Project" className="rounded mb-4" />
                    <a href="#" className="text-teal-500 underline">View Live</a>
                </div>
            </div>
        </section>
    );
}

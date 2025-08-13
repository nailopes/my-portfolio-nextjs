export default function Projects() {
    return (
        <section id="projects" className="py-20 px-6 bg-white text-center">
            <h2 className="text-3xl font-bold mb-12">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <div className="p-6 shadow-lg rounded bg-gray-100">
                    <h3 className="text-xl font-semibold mb-2">Linktree-style Page</h3>
                    <img
                        src="/linktree.png"
                        alt="Linktree-style webpage interface displaying multiple profile links in a clean and organized layout. The environment is minimal and modern, evoking a professional and inviting tone. Visible text includes profile names and link labels."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded mb-4"
                    />
                    <a href="#" className="text-teal-500 underline">View Live</a>
                </div>
                <div className="p-6 shadow-lg rounded bg-gray-100">
                    <h3 className="text-xl font-semibold mb-2">This Portfolio</h3>
                    <img
                        src="/portfolio.png"
                        alt="Portfolio website homepage featuring a navigation bar and project showcase cards. The layout is clean and visually balanced, with a calm and confident atmosphere. Text on the page includes navigation links and project titles."
                        className="rounded mb-4"
                    />
                    <a href="https://nailopes.github.io/my-portfolio/" target="_blank" rel="noopener noreferrer" className="text-teal-500 underline">View Live</a>
                </div>
                <div className="p-6 shadow-lg rounded bg-gray-100">
                    <h3 className="text-xl font-semibold mb-2">This Portfolio</h3>
                    <img
                        src="/portfolio.png"
                        alt="Portfolio website homepage featuring a navigation bar and project showcase cards. The layout is clean and visually balanced, with a calm and confident atmosphere. Text on the page includes navigation links and project titles."
                        className="rounded mb-4"
                    />
                    <a href="#" className="text-teal-500 underline">View Live</a>
                </div>
                <div className="p-6 shadow-lg rounded bg-gray-100">
                    <h3 className="text-xl font-semibold mb-2">This Portfolio</h3>
                    <img
                        src="/portfolio.png"
                        alt="Portfolio website homepage featuring a navigation bar and project showcase cards. The layout is clean and visually balanced, with a calm and confident atmosphere. Text on the page includes navigation links and project titles."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded mb-4"
                    />
                    <a href="#" className="text-teal-500 underline">View Live</a>
                </div>
            </div>
        </section>
    );
}

export default function Projects() {
    return (
        <section id="projects" className="py-20 px-6 bg-white text-center">
            <h2 className="text-3xl font-bold mb-12">Projects</h2>
            <div className="flex overflow-x-auto gap-8 max-w-5xl mx-auto snap-x snap-mandatory">
                <div className="flex-none w-64 p-6 shadow-lg rounded bg-gray-100 snap-center">
                    <h3 className="text-xl font-semibold mb-2">Linktree-style Page</h3>
                    <img
                        src="/linktree.png"
                        alt="Linktree-style web page interface showing several rounded buttons with social media icons and links, set against a clean white background. The layout is simple and inviting."
                        className="h-64 rounded mb-4"
                    />
                    <a href="#" className="text-teal-500 underline">View Live</a>
                </div>
                <div className="flex-none w-64 p-6 shadow-lg rounded bg-gray-100 snap-center">
                    <h3 className="text-xl font-semibold mb-2">This Portfolio</h3>
                    <img
                        src="/portfolio.png"
                        alt="Personal portfolio homepage featuring a centered profile photo, bold heading with the name Nai Lopes, and navigation links for About, Projects, and Contact. The design is modern and welcoming."
                        className="h-64 rounded mb-4"
                    />
                    <a href="https://nailopes.github.io/my-portfolio/" target="_blank" rel="noopener noreferrer" className="text-teal-500 underline">View Live</a>
                </div>
                <div className="flex-none w-64 p-6 shadow-lg rounded bg-gray-100 snap-center">
                    <h3 className="text-xl font-semibold mb-2">This Portfolio</h3>
                    <img
                        src="/portfolio.png"
                        alt="Personal portfolio homepage featuring a centered profile photo, bold heading with the name Nai Lopes, and navigation links for About, Projects, and Contact. The design is modern and welcoming."
                        className="h-64 rounded mb-4"
                    />
                    <a href="#" className="text-teal-500 underline">View Live</a>
                </div>
                <div className="flex-none w-64 p-6 shadow-lg rounded bg-gray-100 snap-center">
                    <h3 className="text-xl font-semibold mb-2">This Portfolio</h3>
                    <img
                        src="/portfolio.png"
                        alt="Personal portfolio homepage featuring a centered profile photo, bold heading with the name Nai Lopes, and navigation links for About, Projects, and Contact. The design is modern and welcoming."
                        className="h-64 rounded mb-4"
                    />
                    <a href="#" className="text-teal-500 underline">View Live</a>
                </div>
            </div>
        </section>
    );
}

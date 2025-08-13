export default function Projects() {
    return (
        <section id="projects" className="py-20 px-6 bg-white text-center">
            <h2 className="text-3xl font-bold mb-12">Projects</h2>
            <div className="flex overflow-x-auto gap-8 max-w-5xl mx-auto snap-x snap-mandatory">
                <div className="flex-none w-64 p-6 shadow-lg rounded bg-gray-100 snap-center">
                    <h3 className="text-xl font-semibold mb-2">Linktree-style Page</h3>
                    <div className="w-48 h-48 mx-auto mb-4">
                        <img src="/linktree.png" alt="Linktree Project" className="w-full h-full object-cover rounded" />
                    </div>
                    <a href="#" className="text-teal-500 underline" target="_blank" rel="noopener noreferrer">View Live</a>
                </div>
                <div className="flex-none w-64 p-6 shadow-lg rounded bg-gray-100 snap-center">
                    <h3 className="text-xl font-semibold mb-2">This Portfolio</h3>
                    <div className="w-48 h-48 mx-auto mb-4">
                        <img src="/portfolio.png" alt="Portfolio Project" className="w-full h-full object-cover rounded" />
                    </div>
                    <a href="https://nailopes.github.io/my-portfolio/" target="_blank" rel="noopener noreferrer" className="text-teal-500 underline">View Live</a>
                </div>
                <div className="flex-none w-64 p-6 shadow-lg rounded bg-gray-100 snap-center">
                    <h3 className="text-xl font-semibold mb-2">This Portfolio</h3>
                    <div className="w-48 h-48 mx-auto mb-4">
                        <img src="/portfolio.png" alt="Portfolio Project" className="w-full h-full object-cover rounded" />
                    </div>
                    <a href="#" className="text-teal-500 underline" target="_blank" rel="noopener noreferrer">View Live</a>
                </div>
                <div className="flex-none w-64 p-6 shadow-lg rounded bg-gray-100 snap-center">
                    <h3 className="text-xl font-semibold mb-2">This Portfolio</h3>
                    <div className="w-48 h-48 mx-auto mb-4">
                        <img src="/portfolio.png" alt="Portfolio Project" className="w-full h-full object-cover rounded" />
                    </div>
                    <a href="#" className="text-teal-500 underline" target="_blank" rel="noopener noreferrer">View Live</a>
                </div>
            </div>
        </section>
    );
}

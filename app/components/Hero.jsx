export default function Hero() {
    return (
        <section className="section-primary text-center py-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-heading">Hi, I'm Naiara Costa</h1>
            <div className="mx-auto max-w-7xl justify-center items-center text-lg md:text-xl text-content mb-8">
                <p className="mb-8 mx-4">
                    I'm a technical analyst with a background in full stack development and civil engineering.
                </p>
                <p className="mb-8 mx-4">
                    I work across systems, tools, and teams to solve problems with SQL, dashboards, and automation, always aiming to make tech more approachable and actually useful.
                </p>
                <p className="mb-8 mx-4">
                    When I’m not deep in data, I’m probably trying new recipes, obsessing over my pets, or spending time with friends and family (preferably somewhere with snacks).
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

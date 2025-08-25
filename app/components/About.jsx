export default function About() {
    return (
        <section
            id="about"
            style={{ backgroundImage: "url('/background.jpeg')" }}
            className="flex flex-col md:flex-row items-center justify-center gap-12 py-20 
             bg-gray-50 dark:bg-black 
             bg-[url('/background.jpeg')] dark:bg-[url('/background-dark.jpeg')]"
        >
            <img
                src="/nai-photo.png"
                alt="Naiara Costa"
                className="w-96 lg:w-[28rem] xl:w-[32rem] rounded-full shadow-lg mb-6 md:mb-0"
            />
            <div className="max-w-md lg:max-w-lg xl:max-w-xl text-center md:text-left">
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 text-gray-900 dark:text-white">ABOUT ME</h2>
                <p className="mb-2 text-lg lg:text-xl text-gray-700 dark:text-white">Building software with structure and vision</p>
                <p className="text-teal-500 font-semibold mb-2 text-lg lg:text-xl hover:text-teal-600 hover:shadow-lg hover:rounded-lg">Full Stack Developer</p>
                <p className="text-lg lg:text-xl text-gray-700 dark:text-white">Civil Engineer</p>
                <p className="mb-4 text-lg lg:text-xl text-gray-700 dark:text-white">Project Manager</p>
                {/* <a
                    href="/resume.pdf"
                    download
                    className="bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600 transition"
                >
                    Download My Resume
                </a> */}
            </div>
        </section>
    );
}

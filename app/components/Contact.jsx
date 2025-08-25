export default function Contact() {
    return (
        <section id="contact" className="py-20 px-6 bg-white dark:bg-black text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Contact</h2>
            <p className="text-gray-700 dark:text-white">Let's build something together.</p>
            <a
                href="mailto:naiara@example.com"
                className="mt-4 inline-block bg-teal-500 text-white py-2 px-6 rounded hover:bg-teal-600 transition"
            >
                Email Me
            </a>
        </section>
    );
}

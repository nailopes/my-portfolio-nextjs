import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="font-sans">
      <Header />
      <About />
      <Hero />
      <Projects />
      <Journey />
      <Footer />
    </main>
  );
}

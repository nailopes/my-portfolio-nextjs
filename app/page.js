import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main className="font-sans">
      <Header />
      <About />
      <Projects />
      <Journey />
      <Contact />
    </main>
  );
}

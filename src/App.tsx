import Header from "./components/Header";
import Hero from "./components/Hero";
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 font-sans selection:bg-blue-500 selection:text-white">
      <Header />
      <main className="pt-20">
        <Hero />
        <About />
        <TechStack />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

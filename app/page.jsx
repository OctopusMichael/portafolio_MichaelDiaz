import About from "./components/About";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Tecnologias from "./components/Tecnologias";

export default function Home() {
  return (
    <>
      <main className="overflow-hidden">
        <About />
        <Tecnologias />
        <Projects />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}

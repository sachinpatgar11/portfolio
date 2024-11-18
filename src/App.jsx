import "./App.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

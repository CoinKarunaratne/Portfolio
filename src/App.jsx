import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Newsletter from "./components/newsletter";

import "./App.css";

function App() {
  return (
    <div className="bg-[#1A232E] overflow-hidden">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;

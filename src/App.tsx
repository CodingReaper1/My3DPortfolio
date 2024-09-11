import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Tech from "./features/tech/Tech";
import Projects from "./features/projects/Projects";
import Hero from "./features/hero/Hero";
import About from "./features/about/About";
import Contact from "./features/contact/Contact";
import StarsCanvas from "./features/contact/StarsCanvas";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
          <Navbar />
          <Hero />
        </div>
        <About />
        {/* <Experience /> */}
        <Tech />
        <Projects />
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

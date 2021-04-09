import { useEffect } from "react";

// aos for scroll effect
import Aos from "aos";
import "aos/dist/aos.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
// blop
import Bubble from "./components/Bubble";

// import of sections
import Home from "./sections/HomePage/Home";
import AboutMe from "./sections/HomePage/AboutMe";
import Portfolio from "./sections/HomePage/Portfolio";
import Contact from "./sections/HomePage/Contact";

function App() {
  useEffect(() => {
    document.title = "Thiéfaine - Portfolio";
  }, []);

  // load aos for scroll effect
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <AboutMe />
        <Portfolio />
        <Contact />
      </main>

      <Footer />
      <Bubble />
    </>
  );
}

export default App;

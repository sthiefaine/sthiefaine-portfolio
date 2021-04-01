import { useEffect } from "react";
import "./App.css";

import Aos from "aos";
import "aos/dist/aos.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Bubble from "./components/Bubble";
import Home from "./sections/HomePage/Home";
import AboutMe from "./sections/HomePage/AboutMe";
import Portfolio from "./sections/HomePage/Portfolio";
import Contact from "./sections/HomePage/Contact";

function App() {
  useEffect(() => {
    document.title = "Thiéfaine - Portfolio";
  }, []);

  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  return (
    <>
      <Header />

      <main className="main" tabIndex="-1">
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

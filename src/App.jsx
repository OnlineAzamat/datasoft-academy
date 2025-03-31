import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./sections/About";
import { Courses } from "./sections/Courses";
import { GetStarted } from "./sections/GetStarted";
import { OurTeam } from "./sections/OurTeam";
import { Partners } from "./sections/Partners";
import { Feedback } from "./sections/Feedback";
import Footer from "./components/Footer";

import "./styles/globals.css";

import "./lang/i18n";

function App() {
  return (
    <div className="bg-[#934895] overflow-hidden text-white">
      <Navbar />
      <Hero />
      <div className="relative">
        <About />
        <div className="gradient-03 z-0" />
        <Courses />
      </div>
      <div className="relative">
        <GetStarted />
        <div className="gradient-04 z-0" />
        <OurTeam />
      </div>
      <div className="relative">
        <Partners />
        <div className="gradient-04 z-0" />
        <Feedback />
      </div>
      <Footer />
    </div>
  )
}

export default App

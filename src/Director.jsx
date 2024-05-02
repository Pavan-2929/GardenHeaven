import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallary from "./pages/Gallary";
import About1 from "./components/About1";
import Services from "./pages/Services";
import FAQ from "./pages/FAQ";
import ShortCodes from "./pages/ShortCodes";
import Demo from "./pages/Demo";
import Contact from "./pages/Contact";
import People from "./pages/People";
import Details from "./pages/Details";
import Footer from "./components/Footer";

const Director = () => {
  return (
    <div>
      <Home />
      <About />
      <About1 />
      <Gallary />
      <Services />
      <FAQ />
      <ShortCodes />
      <Demo />
      <Contact />
      <People />
      <Details />
      <Footer />
    </div>
  );
};

export default Director;

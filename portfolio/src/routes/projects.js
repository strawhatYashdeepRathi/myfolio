import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import Card from "../components/card";
import HeroImage2 from "../components/HeroImage2";

const Projects = ()=>{
  return (
    <div>
      <Navbar />
      <HeroImage2 heading="PROJECTS." text="Some of my most recent works" />
      <Card />
      <Footer />
    </div>
  )
}

export default Projects;
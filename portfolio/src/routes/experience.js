import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import HeroImage2 from "../components/HeroImage2";
import Details from "../components/details";

const Experience = ()=>{
  return (
    <div>
      <Navbar />
      <HeroImage2 heading="WORK EXPERIENCE & EDUCATION." text="Summary of my professional journey"/>
      <Details />
      <Footer />
    </div>
  )
}

export default Experience;
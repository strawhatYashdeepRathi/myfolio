import React from "react";
import Navbar from "../components/navbar";
import HeroImg from "../components/HeroImg";
import Footer from "../components/Footer";
import About from "../components/about";

const Home = ()=>{
  return (
    <>
      <Navbar />
      <HeroImg />
      <About />
      <Footer />
    </>
  )
}

export default Home;
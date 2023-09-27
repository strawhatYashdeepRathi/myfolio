import React from "react";
import Navbar from "../components/navbar";
import HeroImg from "../components/HeroImg";
import Footer from "../components/Footer";
import HeroImage2 from "../components/HeroImage2";
import ContactsForm from "../components/contactsCard";

const Contact = ()=>{
  return (
    <div>
      <Navbar />
      <HeroImage2 heading="Contact." text="Lets Connect !"/>
      <ContactsForm />
      <Footer />
    </div>
  )
}

export default Contact;
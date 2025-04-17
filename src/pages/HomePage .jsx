import React from "react";
import NavBar from "../Components/NavBar/NavBar";
import Hero from "../Components/Hero/Hero";
import ResonsToChooseCards from "../Components/ResonsToChooseCards/ResonsToChooseCards";
import SectionTitle from "../Components/SectionTitle/SectionTitle";
import OurServicesTitle from "../Components/OurServicesTitle/OurServicesTitle";
import OurServices from "../Components/OurServices/OurServices";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <SectionTitle />
      <ResonsToChooseCards />
      <OurServicesTitle />
      <OurServices />
    </div>
  );
};

export default HomePage;

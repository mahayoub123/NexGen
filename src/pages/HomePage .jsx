import React from "react";
import NavBar from "../Components/NavBar/NavBar";
import Hero from "../Components/Hero/Hero";
import ResonsToChooseCards from "../Components/ResonsToChooseCards/ResonsToChooseCards";
import OurServices from "../Components/OurServices/OurServices";
import Title from "../Components/Title/Title";
import Work from "../Components/Work/Work";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Title />
      <ResonsToChooseCards />
      <OurServices />
      <Work />
    </div>
  );
};

export default HomePage;

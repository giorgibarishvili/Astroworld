import React from "react";
import AboutUsHeroSection from "../../AboutUsHeroSection";
import { homeObjOne, homeObjTwo } from "./Data";
import AbUsHeroSection from "../../AbUsHeroSection";

function AboutUs() {
  return (
    <>
      <AboutUsHeroSection {...homeObjOne} />
      <AbUsHeroSection {...homeObjTwo} />
    </>
  );
}

export default AboutUs;

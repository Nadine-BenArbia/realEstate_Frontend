import React from "react";
import "../style/LandingPage.css";
import HeroSection from "./HeroSection";
import AboutUs from "./AboutUs";
const LandingPage = () => {
  return (
    <div className="landing-page">
      <HeroSection />
      <AboutUs/>
      <footer>
        &copy; {new Date().getFullYear()} Noblesse Company. All rights
        reserved.
      </footer>
    </div>
  );
};

export default LandingPage;

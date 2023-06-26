import React from "react";
import "../style/LandingPage.css";
import HeroSection from "./HeroSection";
const LandingPage = () => {
  return (
    <div className="landing-page">
      <HeroSection />
      
      <footer>
        &copy; {new Date().getFullYear()} Noblesse Company. All rights
        reserved.
      </footer>
    </div>
  );
};

export default LandingPage;

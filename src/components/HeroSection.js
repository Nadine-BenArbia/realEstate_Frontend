import React from "react";
import "../style/LandingPage.css";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <div className="HeroContainer">
      <div>
        <p>Find your dream home with us!</p>
        <Link to="/posts">
          <button>Discover More</button>
        </Link>
      </div>
      <div>
        <img
          id="heroImg"
          src="https://manipaldigital.info/wp-content/uploads/2021/05/cgi-and-how-its-revolutionizing-real-estate-marketing-banner.jpg"
          alt="img"
        />
      </div>
    </div>
  );
};

export default HeroSection;

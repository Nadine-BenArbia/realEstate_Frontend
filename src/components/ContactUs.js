import React from "react";
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai';
import { FaMapMarkerAlt } from 'react-icons/fa';

import "../style/ContactUs.css";

const ContactUs = () => {
  return (
   <div>
    
    <h1 id="contact-us-title">Contact Us</h1>
    <p id='subtitle'>have a question ? we would like to hear from you </p>
    
    <div className="contact-us-wrap">
      <div className="contact-us-container">
        <FaMapMarkerAlt/>
        <span>ADDRESS</span>
        <span>27 13 Lowe Haven</span>
      </div>
      <div className="contact-us-container">
        <AiFillPhone/>
        <span>PHONE</span>
        <span>111 343 43 43</span>
      </div>
      <div className="contact-us-container">
        <AiOutlineMail/>
        <span>EMAIL</span>
        <span>noblesse@info.com</span>
      </div>


    </div>
   </div>
  );
};

export default ContactUs;

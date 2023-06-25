import React from "react";
import "../style/ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <p>
        We value your interest in our real estate services and are here to
        assist you. Whether you have questions, need more information, or want
        to discuss a specific property, our dedicated team is ready to help.
        Feel free to reach out to us using any of the following methods:
      </p>
      <div className="contact-options">
        <div className="contact-option">
          <h3>Phone</h3>
           <span >+216 34765987</span>.
           
        </div>
        <div className="contact-option">
          <h3>Email</h3>
          
            
            <span >Send us an email: noblesseAgency@gmail.com</span>.
        </div>
      
        <div className="contact-option">
          <h3>Visit Our Office</h3>
          <p>
            If you prefer a face-to-face interaction, we welcome you to visit
            our office at <span >Tunis city center</span>.
           
          </p>
        </div>
    
      </div>
      <p>
        No matter how you choose to get in touch, we assure you that your
        inquiries will receive our utmost attention and care. Our goal is to
        ensure your real estate experience is exceptional, and we look forward
        to serving you soon.
      </p>
   
    </div>
  );
};

export default ContactUs;

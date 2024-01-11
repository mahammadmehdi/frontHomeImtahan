import React from "react";
import "./index.scss"

function Footer() {
  return (
    <div className="footer">
      <div className="foot">
        <div className="left">
          <img className="img" src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/signature.png" alt="" />
          <div className="input">
           
            <input type="text" /> 
            <button className="btn">Send</button>
          </div>
        </div>
        <div className="about">
          <h4>About</h4>
          <ul className="pages">
            <li>About Us</li>
            <li>Our Partners</li>
            <li>Our Services</li>
          </ul>
        </div>
        <div className="contact">
          <h4>Contact</h4>
          <ul className="pages">
            <li>Contact Us</li>
            <li>FAQ Page</li>
            <li>About Me</li>
          </ul>
        </div>
        <div className="follow">
          <h3>Follow Us</h3>
        </div>
      </div>
    </div>
  );
}

export default Footer;

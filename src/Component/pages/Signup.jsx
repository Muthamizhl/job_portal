import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Magic Bus Foundation</h2>
      <p>We’re here to support you. Feel free to reach out for job assistance, placement support, or general queries.</p>

      <div className="contact-info">
        <div className="info-box">
          <h4>Email</h4>
          <p>support@magicbus.org</p>
        </div>
        <div className="info-box">
          <h4>Phone</h4>
          <p>+91 98765 43210</p>
        </div>
        <div className="info-box">
          <h4>Address</h4>
          <p>Magic Bus Foundation, 2nd Floor, NGO Towers, Anna Salai, Chennai - 600002</p>
        </div>
      </div>

      <div className="contact-form">
        <h3>Send us a message</h3>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

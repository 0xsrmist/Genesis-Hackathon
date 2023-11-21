// src/components/ContactUs.js
import React from 'react';

const ContactUs = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>
        If you have any questions or need assistance, please feel free to reach out to us!
      </p>
      <form>
        <label htmlFor="name">Your Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Your Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Your Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
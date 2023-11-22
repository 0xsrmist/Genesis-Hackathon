// Sponsor.js
import React from 'react';

const Sponsor = ({ name, logo, description }) => {
  // Render a div with a class name 'sponsor'
  return (
    <div className="sponsor">
      {/* Render an image with the source set to the logo prop */}
      <img src={logo} alt={`${name} logo`} />
      
      {/* Render an h3 element with the name prop */}
      <h3>{name}</h3>
      
      {/* Render a paragraph with the description prop */}
      <p>{description}</p>
    </div>
  );
};

// Export the Sponsor component to make it available for import in other files
export default Sponsor;

// Sponsor.js
import React from 'react';

const Sponsor = ({ name, logo, description }) => (
  <div className="sponsor">
    <img src={logo} alt={`${name} logo`} />
    <h3>{name}</h3>
    <p>{description}</p>
  </div>
);

export default Sponsor;

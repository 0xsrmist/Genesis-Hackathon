// SponsorPage.jsx
import React from 'react';


const sponsorsData = {
  platinum: [
    'platinum1.jpg',
    'platinum2.jpg',
    'platinum3.jpg',
    'platinum4.jpg',
  ],
  gold: [
    'gold1.jpg',
    'gold2.jpg',
    'gold3.jpg',
    'gold4.jpg',
  ],
  silver: [
    'silver1.jpg',
    'silver2.jpg',
    'silver3.jpg',
    'silver4.jpg',
  ],
};

const SponsorPage = () => (
  <div className="sponsor-page">
    <div className="sponsor-section platinum">
      <h2>Platinum Sponsors</h2>
      <div className="sponsor-container">
        {sponsorsData.platinum.map((sponsor, index) => (
          <div key={index} className="sponsor-box">
            <img src={sponsor} alt={`Platinum Sponsor ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>

    <div className="sponsor-section gold">
      <h2>Gold Sponsors</h2>
      <div className="sponsor-container">
        {sponsorsData.gold.map((sponsor, index) => (
          <div key={index} className="sponsor-box">
            <img src={sponsor} alt={`Gold Sponsor ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>

    <div className="sponsor-section silver">
      <h2>Silver Sponsors</h2>
      <div className="sponsor-container">
        {sponsorsData.silver.map((sponsor, index) => (
          <div key={index} className="sponsor-box">
            <img src={sponsor} alt={`Silver Sponsor ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default SponsorPage;

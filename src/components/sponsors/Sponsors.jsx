import React from 'react';

const EventSponsorship = () => {
  return (
    <div className="flex flex-col justify-center items-center p-8">
      {/* PLATINUM Section */}
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold mb-4 font-poppins text-white">PLATINUM</h2>
        <div className="flex space-x-4">
          {renderSponsorBoxes(4)}
        </div>
      </div>

      {/* GOLD Section */}
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold mb-4 font-poppins text-white">GOLD</h2>
        <div className="flex space-x-4">
          {renderSponsorBoxes(4)}
        </div>
      </div>

      {/* SILVER Section */}
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4 font-poppins text-white">SILVER</h2>
        <div className="flex space-x-4">
          {renderSponsorBoxes(4)}
        </div>
      </div>
    </div>
  );
};

// Helper function to render sponsor boxes
const renderSponsorBoxes = (count) => {
  const sponsorImages = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
  ];

  return Array.from({ length: count }, (_, index) => (
    <div
      key={index}
      className="bg-gray-300 rounded-lg overflow-hidden"
      style={{
        width: '100px',
        height: '100px',
        border: '1px solid rgb(44%,10%,100%)', 
        borderImageSource: 'linear-gradient(#00008B)',
      }}
    >
      <img src={sponsorImages[index]} alt={`Sponsor ${index + 1}`} className="w-full h-full object-cover" />
    </div>
  ));
};

export default EventSponsorship;

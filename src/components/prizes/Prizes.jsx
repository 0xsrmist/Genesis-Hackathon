import React from 'react';

const BoxComponent = () => {
  const boxStyle = {
    width: '259px',
    height: '267px',
    flexShrink: '0',
    borderRadius: '32px',
    border: '1px solid #D801DC',
    background: '#07071C',
    boxShadow: '4px 4px 10px 0px rgba(0, 0, 0, 0.50)',
    backdropFilter: 'blur(35px)',
    padding: '10px', // Adjust padding as needed
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const imageContainerStyle = {
    width: '65.01px',
    height: '76.266px',
    marginBottom: '20px', // Spacing between image and text box
  };

  const textContainerStyle = {
    width: '258.508px',
    height: '65.153px',
    flexShrink: '0',
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: '23px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '30.715px', /* 133.544% */
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  };

  const imageUrl = 'https://www.figma.com/file/8nqrNVGSM4FeDTE3S4evwg/Hackathon?type=design&node-id=134-178&mode=dev'; // Replace 'YOUR_IMAGE_URL' with the image URL

  return (
    <div style={boxStyle}>
      <div style={imageContainerStyle}>
        <img src={imageUrl} alt="Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div style={textContainerStyle}>
        <span>Top 5</span>
        <span>Technical Mock</span>
      </div>
    </div>
  );
};

const CustomBox = () => {
  const boxStyle = {
    width: '259px',
    height: '267px',
    flexShrink: 0,
    borderRadius: '32px',
    border: '1px solid #D801DC',
    background: 'linear-gradient(135deg, rgba(58, 129, 191, 0.08) 0%, rgba(65, 48, 90, 0.03) 100%)',
    boxShadow: '4px 4px 10px 0px rgba(0, 0, 0, 0.50)',
    backdropFilter: 'blur(35px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const imageUrl = 'https://www.figma.com/file/8nqrNVGSM4FeDTE3S4evwg/Hackathon?type=design&node-id=134-189&mode=dev'; // Replace 'YOUR_IMAGE_URL' with the image URL

  return (
    <div style={boxStyle}>
      <div style={imageContainerStyle}>
        <img src={imageUrl} alt="Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div style={textContainerStyle}>
        <span>Top 2</span>
        <span>Design Mock</span>
      </div>
    </div>
  );
};

const StyledBox1 = () => {
  const boxStyle = {
    width: '259px',
    height: '267px',
    flexShrink: 0,
    borderRadius: '32px',
    border: '1px solid #D801DC',
    background: 'linear-gradient(135deg, rgba(58, 129, 191, 0.08) 0%, rgba(65, 48, 90, 0.03) 100%)',
    boxShadow: '4px 4px 10px 0px rgba(0, 0, 0, 0.50)',
    backdropFilter: 'blur(35px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const imageUrl = 'https://www.figma.com/file/8nqrNVGSM4FeDTE3S4evwg/Hackathon?type=design&node-id=134-211&mode=dev'; // Replace 'YOUR_IMAGE_URL' with the image URL

  return (
    <div style={boxStyle}>
      <div style={imageContainerStyle}>
        <img src={imageUrl} alt="Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div style={textContainerStyle}>
        <span>Top 3</span>
        <span>CC Round</span>
      </div>
    </div>
  );
};

const StyledBox2 = () => {
  const boxStyle = {
    width: '259px',
    height: '267px',
    flexShrink: 0,
    borderRadius: '32px',
    border: '1px solid #D801DC',
    background: 'linear-gradient(135deg, rgba(58, 129, 191, 0.08) 0%, rgba(65, 48, 90, 0.03) 100%)',
    boxShadow: '4px 4px 10px 0px rgba(0, 0, 0, 0.50)',
    backdropFilter: 'blur(35px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const imageUrl = 'https://www.figma.com/file/8nqrNVGSM4FeDTE3S4evwg/Hackathon?type=design&node-id=134-200&mode=dev'; // Replace 'YOUR_IMAGE_URL' with the image URL

  return (
    <div style={boxStyle}>
      <div style={imageContainerStyle}>
        <img src={imageUrl} alt="Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div style={textContainerStyle}>
        <span>Best Fresher</span>
      </div>
    </div>
  );
};

export { BoxComponent, CustomBox, StyledBox1, StyledBox2 };
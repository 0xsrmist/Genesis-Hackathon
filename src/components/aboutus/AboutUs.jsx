import React from 'react';

const GreyBox = () => {
  const boxStyle = {
    backgroundColor: '#D9D9D9',
    width: '469px',
    height: '182px',
    position: 'absolute',
    top: '1196px',
    left: '947px',
    right: '96px',
    // Add other styles (padding, margin, etc.) as necessary
  };

  const secondBoxStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#07071C', // Updated color for the second box
    width: '641px',
    height: '115px',
    position: 'absolute',
    left: '121px', // Adjust the left position
    top: '1209px', // Adjust the top position
    color: '#FFF', // Text color
    fontFamily: 'Poppins', // Font family
    fontSize: '20px', // Font size
    fontStyle: 'normal', // Font style
    fontWeight: '600', // Font weight
    lineHeight: 'normal', // Line height
    // Add other styles (padding, margin, etc.) as necessary
  };

  return (
    <div>
      <div style={boxStyle}>
        {/* Content inside the grey box */}
      </div>
      <div style={secondBoxStyle}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula tristique velit, ut fringilla orci tempor vel.
        </p>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <GreyBox />
    </div>
  );
};

export default App;

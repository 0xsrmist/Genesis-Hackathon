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
  };

  const secondBoxStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#07071C', 
    width: '641px',
    height: '115px',
    position: 'absolute',
    left: '121px', 
    top: '1209px', 
    color: '#FFF', 
    fontFamily: 'Poppins', 
    fontSize: '20px',
    fontStyle: 'normal', 
    fontWeight: '600', 
    lineHeight: 'normal', 
    
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

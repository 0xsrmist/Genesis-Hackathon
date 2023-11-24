import React from 'react';
import StyledBox from './StyledBox';
import Conference from './components/conference/Conference.jsx';

const App = () => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: '100vh' }}>
        <StyledBox />
      </div>
      <div>
        <h1>Test</h1>
        <Conference />
      </div>
    </div>
  );
};

export default App;
import React from 'react';
import Walkthrough from './Walkthrough';
import D3Graph from './D3Graph';

const styles = {
  root: {
    display: 'flex',
    height: '95vh',
    margin: '0',
  },
  column1: {
    flex: '45%',
    padding: '10px',
    borderRight: '1px solid black',
  },
  column2: {
    flex: '55%',
    padding: '10px',
  },
};

const App = () => {
  return (
    <div style={styles.root}>
      <div style={styles.column1}>
        <Walkthrough />
      </div>
      <div style={styles.column2}>
        <D3Graph />
      </div>
    </div>
  );
};

export default App;

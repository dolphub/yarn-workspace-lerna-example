import React from 'react';
import './App.css';

import { exampleService } from '@dolphub/common';

const App: React.FC = () => {
  const data = exampleService(['hello', 'world']);
  return (
    <div className="App">
      <header className="App-header">
        <strong>Data: {1234}</strong>
      </header>
    </div>
  );
};

export default App;

import React from 'react';
import './styles/app.css';
import './styles/global.css';
import History from './Components/History';
import DashBoard from './Components/DashBoard';

function App() {
  return (
    <div className="App">
      <History />
      <DashBoard />
    </div>
  );
}

export default App;

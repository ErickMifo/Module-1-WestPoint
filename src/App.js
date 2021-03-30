import React from 'react';
import './styles/app.css';
import './styles/global.css';
import History from './Components/History';
import DashBoard from './Components/DashBoard';
import TransitionProvider from './context/transitionContext';

function App() {
  return (
    <TransitionProvider>
      <div className="App">
        <History />
        <DashBoard />
      </div>
    </TransitionProvider>
  );
}

export default App;

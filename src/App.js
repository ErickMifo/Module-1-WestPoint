import React from 'react';
import './styles/app.css';
import './styles/global.css';
import History from './Components/History';
import DashBoard from './Components/DashBoard';
import TransactionProvider from './context/transactionContext';

function App() {
  return (
    <TransactionProvider>
      <div className="App">
        <History />
        <DashBoard />
      </div>
    </TransactionProvider>
  );
}

export default App;

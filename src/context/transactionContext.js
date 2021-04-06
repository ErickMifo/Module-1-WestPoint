import React, { createContext, useState, useContext } from 'react';

export const TransactionContext = createContext();

// eslint-disable-next-line react/prop-types
export default function Provider({ children }) {
  const [history, setHistory] = useState([]);
  const [dbHistory, setDbHistory] = useState([]);
  const [walletGBP, setWalletGBP] = useState();
  const [walletUSD, setWalletUSD] = useState();

  return (
    <TransactionContext.Provider value={{
      history,
      setHistory,
      dbHistory,
      setDbHistory,
      walletGBP,
      setWalletGBP,
      walletUSD,
      setWalletUSD,
    }}
    >
      {children}
    </TransactionContext.Provider>

  );
}

export function useTransaction() {
  const context = useContext(TransactionContext);
  const {
    history,
    setHistory,
    dbHistory,
    setDbHistory,
    walletGBP,
    setWalletGBP,
    walletUSD,
    setWalletUSD,
  } = context;
  return {
    history,
    setHistory,
    dbHistory,
    setDbHistory,
    walletGBP,
    setWalletGBP,
    walletUSD,
    setWalletUSD,
  };
}

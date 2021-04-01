import React, { createContext, useState, useContext } from 'react';

export const TransitionContext = createContext();

// eslint-disable-next-line react/prop-types
export default function TransitionProvider({ children }) {
  const [history, setHistory] = useState([]);
  const [dbHistory, setDbHistory] = useState([]);
  return (
    <TransitionContext.Provider value={{
      history, setHistory, dbHistory, setDbHistory,
    }}
    >
      {children}
    </TransitionContext.Provider>

  );
}

export function useTransition() {
  const context = useContext(TransitionContext);
  const {
    history, setHistory, dbHistory, setDbHistory,
  } = context;
  return {
    history, setHistory, dbHistory, setDbHistory,
  };
}

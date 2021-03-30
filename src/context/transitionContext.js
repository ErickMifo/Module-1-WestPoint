import React, { createContext, useState, useContext } from 'react';

export const TransitionContext = createContext();

// eslint-disable-next-line react/prop-types
export default function TransitionProvider({ children }) {
  const [history, setHistory] = useState([]);
  return (
    <TransitionContext.Provider value={{ history, setHistory }}>
      {children}
    </TransitionContext.Provider>

  );
}

export function useTransition() {
  const context = useContext(TransitionContext);
  const { history, setHistory } = context;
  return { history, setHistory };
}

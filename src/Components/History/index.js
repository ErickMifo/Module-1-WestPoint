import React from 'react';
import HistoryContainer from './styles';
import { useTransition } from '../../context/transitionContext';

function History() {
  const { history } = useTransition();

  return (
    <HistoryContainer>
      <div>
        {history.map((item) => <p>{item}</p>)}
      </div>
    </HistoryContainer>
  );
}

export default History;

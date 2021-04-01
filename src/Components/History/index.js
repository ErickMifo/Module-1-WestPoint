/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import HistoryContainer from './styles';
import { useTransition } from '../../context/transitionContext';
import instanceHistory from '../../axios/axios';

function History() {
  const { history, dbHistory, setDbHistory } = useTransition();

  useEffect(() => {
    async function getHistoryData() {
      const requestHistory = await instanceHistory.get('history');
      setDbHistory(requestHistory.data);
    }

    getHistoryData();
  }, []);

  return (
    <HistoryContainer>
      <div>
        <h2>Past trades </h2>
        {dbHistory.map((item, i) => <p key={i}>{item.history}</p>)}
        {history.map((item, i) => <p key={i}>{item}</p>)}
      </div>
    </HistoryContainer>
  );
}

export default History;

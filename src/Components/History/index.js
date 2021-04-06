/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import HistoryContainer from './styles';
import { useTransaction } from '../../context/transactionContext';
import { instance } from '../../axios/axios';

function History() {
  const { history, dbHistory, setDbHistory } = useTransaction();

  useEffect(() => {
    async function getHistoryData() {
      const requestHistory = await instance.get('history');
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

import React, { useState, useEffect } from 'react';
import instance from '../../axios/axios';
import Button from '../Button';
import {
  ButtonContainer,
  DashBoardContainer, PriceContainer, SellBuyCotainer,
} from './styles';
import { useTransition } from '../../context/transitionContext';

function DashBoard() {
  const { history, setHistory } = useTransition();

  const [USD, setUSD] = useState('');
  const [GBP, setGBP] = useState('');

  useEffect(() => {
    async function getData() {
      const requestGBP = await instance.get('latest?base=GBP');
      setUSD(requestGBP.data.rates.USD);

      const requestUSD = await instance.get('latest?base=USD');
      setGBP(requestUSD.data.rates.GBP);
    }

    getData();
  }, []);

  return (
    <DashBoardContainer>

      <PriceContainer>
        <h2>Trade British Pound / US Dollar</h2>
        <ButtonContainer>

          <Button
            onClick={() => {
              setHistory([...history, `buy for ${USD}`]);
            }}
            bgColor="var(--blue)"
          >
            Buy
            <p>
              {USD}
            </p>
          </Button>

          <Button
            onClick={() => {
              setHistory([...history, `sell for ${GBP}`]);
            }}
            bgColor="var(--red)"
          >
            Sell
            <p>
              {GBP}
            </p>
          </Button>

        </ButtonContainer>
      </PriceContainer>

      <SellBuyCotainer>
        <div />
      </SellBuyCotainer>

    </DashBoardContainer>
  );
}

export default DashBoard;

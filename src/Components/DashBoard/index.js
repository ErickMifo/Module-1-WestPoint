import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import instanceHistory from '../../axios/axios';
import Button from '../Button';
import {
  DashBoardContainer, PriceContainer, SellBuyCotainer,
} from './styles';
import { useTransition } from '../../context/transitionContext';
import Input from '../Input';

let socket;

function DashBoard() {
  const { history, setHistory } = useTransition();

  const [inputValue2, setInputValue2] = useState();
  const [inputValue1, setInputValue1] = useState();
  const [USD, setUSD] = useState('1.38334');
  const [GBP, setGBP] = useState('1.38433');

  const ENDPOINT = 'http://localhost:3001/';

  useEffect(() => {
    socket = io(ENDPOINT);
    console.log(socket);
    socket.on('test', (arg) => {
      setUSD(arg.GBP_USD);
      setGBP(1 / arg.GBP_USD);
    });
  }, [ENDPOINT]);

  const roundGBP = Math.round(GBP * 1000) / 1000;
  const roundUSD = Math.round(USD * 1000) / 1000;

  const handleChange2 = (e) => { setInputValue2(e.target.value); };
  const handleChange1 = (e) => { setInputValue1(e.target.value); };

  return (
    <DashBoardContainer>

      <PriceContainer>

        <h2>Container 1</h2>

      </PriceContainer>

      <SellBuyCotainer>
        <div>
          GBP to USD
          <Input type="number" value={inputValue1} onChange={handleChange1} />
          <Button
            onClick={() => {
              setHistory([...history, `Buy ${inputValue1} USD for ${roundUSD * inputValue1} GBP`]);
              instanceHistory.post('history', {
                history: `Buy ${inputValue1} USD for ${roundUSD * inputValue1} GBP`,
              });
            }}
            bgColor="var(--blue)"
          >
            Buy
            <p>
              {inputValue1 == null || inputValue1 <= 0 ? roundUSD : roundUSD * inputValue1}
            </p>
          </Button>

          <Button
            onClick={() => {
              setHistory([...history, `Sell ${inputValue1} USD for ${roundGBP * inputValue1} GBP`]);
              instanceHistory.post('history', {
                history: `Sell ${inputValue1} USD for ${roundGBP * inputValue1} GBP`,
              });
            }}
            bgColor="var(--red)"
          >
            Sell
            <p>
              {inputValue1 == null || inputValue1 <= 0 ? roundGBP : roundGBP * inputValue1}
            </p>
          </Button>

        </div>

        <div>
          USD to GBP
          <Input type="number" value={inputValue2} onChange={handleChange2} />
          <Button
            onClick={() => {
              setHistory([...history, `Buy ${inputValue2} GBP for ${roundGBP * inputValue2} USD`]);
              instanceHistory.post('history', {
                history: `Buy ${inputValue2} GBP for ${roundGBP * inputValue2} USD`,
              });
            }}
            bgColor="var(--blue)"
          >
            Buy
            <p>
              {inputValue2 == null || inputValue2 <= 0 ? roundGBP : roundGBP * inputValue2}
            </p>
          </Button>

          <Button
            onClick={() => {
              setHistory([...history, `Sell ${inputValue2} GBP for ${roundUSD * inputValue2} USD`]);
              instanceHistory.post('history', {
                history: `Sell ${inputValue2} for ${roundUSD * inputValue2} USD`,
              });
            }}
            bgColor="var(--red)"
          >
            Sell
            <p>
              {inputValue2 == null || inputValue2 <= 0 ? roundUSD : roundUSD * inputValue2}
            </p>
          </Button>

        </div>
      </SellBuyCotainer>

    </DashBoardContainer>
  );
}

export default DashBoard;

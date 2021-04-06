import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { instance } from '../../axios/axios';
import {
  DashBoardContainer, GraphContainer, SellBuyCotainer,
} from './styles';
import { useTransaction } from '../../context/transactionContext';
import Input from '../Input';
import Graph from '../Graph';
import SellBuyButton from '../Button/sellBuyButton';
import WalltetButton from '../Button/walletButton';
import Wallet from '../Wallet/wallet';

let socket;

function DashBoard() {
  const {
    history,
    setHistory,
    walletGBP,
    walletUSD,
    setWalletGBP,
    setWalletUSD,
  } = useTransaction();

  const [isWalletOpen, setIsWalletOpen] = useState(false);

  const onOpen = () => {
    setIsWalletOpen(true);
  };

  const onClose = () => {
    setIsWalletOpen(false);
  };

  const [USD, setUSD] = useState('');
  const [GBP, setGBP] = useState('');

  const [inputValue2, setInputValue2] = useState();
  const [inputValue1, setInputValue1] = useState();

  useEffect(() => {
    instance.put('wallet/1', { USD: walletUSD });
    instance.put('wallet/2', { GBP: walletGBP });
  }, [walletUSD, walletGBP]);

  useEffect(() => {
    async function getData() {
      const request = await instance.get('currency');
      setUSD(request.data[0].USD);
      setGBP(request.data[1].GBP);
      const walletRequest = await instance.get('wallet');
      setWalletUSD(walletRequest.data[0].USD);
      setWalletGBP(walletRequest.data[1].GBP);
    }

    getData();
  }, []);

  const roundUSD = Math.round(USD * 1000) / 1000;
  const roundGBP = Math.round(GBP * 1000) / 1000;

  const ENDPOINT = 'http://localhost:3001/';
  socket = io(ENDPOINT);
  socket.on('GBPUSD', (arg) => {
    setUSD(arg.GBP_USD);
    setGBP(1 / arg.GBP_USD);
  });

  if (USD || GBP !== '' || NaN) {
    instance.put('currency/1', { USD: roundUSD });
    instance.put('currency/2', { GBP: roundGBP });
  }

  const handleChange2 = (e) => { setInputValue2(e.target.value); };
  const handleChange1 = (e) => { setInputValue1(e.target.value); };

  return (
    <DashBoardContainer>

      <GraphContainer>

        <WalltetButton onClick={onOpen} />
        <h3> Base EUR </h3>
        {isWalletOpen ? <Wallet onClick={onClose} /> : null}

        <Graph />

      </GraphContainer>

      <SellBuyCotainer>
        <div>

          GBP to USD

          <Input type="number" value={inputValue1} onChange={handleChange1} />

          <SellBuyButton
            disabled={!!(inputValue1 === undefined || inputValue1 <= 0)}
            onClick={() => {
              setWalletGBP(walletGBP - inputValue1);
              setWalletUSD(Math.round(roundUSD * inputValue1 * 1000) / 1000 + walletUSD);
              setHistory([...history, `Buy ${inputValue1} USD for ${Math.round(roundUSD * inputValue1 * 1000) / 1000} GBP`]);
              instance.post('history', {
                history: `Buy ${inputValue1} USD for ${Math.round(roundUSD * inputValue1 * 1000) / 1000} GBP`,
              });
            }}
            bgColor="var(--blue)"
          >

            Buy

            <p>
              {inputValue1 === undefined || inputValue1 <= 0
                ? roundUSD
                : Math.round(roundUSD * inputValue1 * 1000) / 1000}
            </p>

          </SellBuyButton>

          <SellBuyButton
            disabled={!!(inputValue1 === undefined || inputValue1 <= 0)}
            onClick={() => {
              setWalletGBP(walletGBP + inputValue1);
              setWalletUSD(walletUSD - Math.round(roundUSD * inputValue1 * 1000) / 1000);
              setHistory([...history, `Sell ${inputValue1} USD for ${Math.round(roundGBP * inputValue1 * 1000) / 1000} GBP`]);
              instance.post('history', {
                history: `Sell ${inputValue1} USD for ${Math.round(roundGBP * inputValue1 * 1000) / 1000} GBP`,
              });
            }}
            bgColor="var(--red)"
          >

            Sell

            <p>
              {inputValue1 === undefined || inputValue1 <= 0
                ? roundGBP
                : Math.round(roundGBP * inputValue1 * 1000) / 1000}
            </p>

          </SellBuyButton>

        </div>

        <div>

          USD to GBP

          <Input type="number" value={inputValue2} onChange={handleChange2} />

          <SellBuyButton
            disabled={!!(inputValue2 === undefined || inputValue2 <= 0)}
            onClick={() => {
              setWalletUSD(walletUSD - inputValue2);
              setWalletGBP(Math.round(roundGBP * inputValue2 * 1000) / 1000 + walletGBP);
              setHistory([...history, `Buy ${inputValue2} GBP for ${Math.round(roundGBP * inputValue2 * 1000) / 1000} USD`]);
              instance.post('history', {
                history: `Buy ${inputValue2} GBP for ${Math.round(roundGBP * inputValue2 * 1000) / 1000} USD`,
              });
            }}
            bgColor="var(--blue)"
          >

            Buy

            <p>
              {inputValue2 === undefined || inputValue2 <= 0
                ? roundGBP
                : Math.round(roundGBP * inputValue2 * 1000) / 1000}
            </p>

          </SellBuyButton>

          <SellBuyButton
            disabled={!!(inputValue2 === undefined || inputValue2 <= 0)}
            onClick={() => {
              setWalletUSD(walletUSD + inputValue2);
              setWalletGBP(walletGBP - Math.round(roundGBP * inputValue2 * 1000) / 1000);
              setHistory([...history, `Sell ${inputValue2} GBP for ${Math.round(roundUSD * inputValue2 * 1000) / 1000} USD`]);
              instance.post('history', {
                history: `Sell ${inputValue2} for ${Math.round(roundUSD * inputValue2 * 1000) / 1000} USD`,
              });
            }}
            bgColor="var(--red)"
          >

            Sell

            <p>
              {inputValue2 === undefined || inputValue2 <= 0
                ? roundUSD
                : Math.round(roundUSD * inputValue2 * 1000) / 1000}
            </p>

          </SellBuyButton>

        </div>
      </SellBuyCotainer>

    </DashBoardContainer>
  );
}

export default DashBoard;

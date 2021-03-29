import React, { useState, useEffect } from 'react';
import instance from '../../axios/axios';
import Button from '../Button';
import {
  DashBoardContainer, PriceContainer, SellBuyCotainer,
} from './styles';

function DashBoard() {
  const [USD, setUSD] = useState('');
  const [GBP, setGBP] = useState('');

  useEffect(() => {
    async function getData() {
      const requestCurrency = await instance.get('');
      setGBP(requestCurrency.data.rates.GBP);
      setUSD(requestCurrency.data.rates.USD);
    }

    getData();
  }, []);

  return (
    <DashBoardContainer>

      <PriceContainer>

        <p>
          Price base on Euro
        </p>

        <p>
          USD Price:
          {' '}
          {USD}
        </p>

        <p>
          GBP Price:
          {' '}
          {GBP}
        </p>
      </PriceContainer>

      <SellBuyCotainer>

        <div>
          <Button>
            Buy
          </Button>
        </div>

        <div>
          <Button>
            Sell
          </Button>
        </div>

      </SellBuyCotainer>

    </DashBoardContainer>
  );
}

export default DashBoard;

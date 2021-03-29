import React from 'react';
import Button from '../Button';
import {
  DashBoardContainer, PriceContainer, SellBuyCotainer,
} from './styles';

function DashBoard() {
  return (
    <DashBoardContainer>

      <PriceContainer>
        Price
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

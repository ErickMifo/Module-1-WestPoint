import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useTransaction } from '../../context/transactionContext';

const walletAnimation = keyframes`
  from {
    width: 0vw;
    height: 0vh;
  }

  to {
    width: 60vw;
    height: 70vh;
  }
`;

const walletAnimationDiv = keyframes`
  from {
    width: 0vw;
    height: 0vh;
  }

  to {
    width: 55vw;
    height: 60vh;
  }
`;

const StyledWalletComponent = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 60vw;
    height: 70vh;
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    z-index: 1;
    animation: ${walletAnimation} 0.125s linear;

    div:first-child {
    position: fixed;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 55vw;
    height: 60vh;
    background-color: var(--blue-dark);
    color: var(--text);
    font-size: 1.25rem;
    animation: ${walletAnimationDiv} 0.25s linear;
    };
    h3 {
        margin-top: 1rem;
    }
    div:nth-child(3){
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 2rem;

        p {
            margin-top: 3rem;
        }
    }

    button {
        position: absolute;
        background-color: var(--dark-blue);
        color: var(--background);
        top: 0.25rem;
        right: 1rem;
        font-size: 1.5rem;
    }
`;

/* eslint-disable react/prop-types */
function Wallet({ onClick }) {
  const {
    walletGBP,
    walletUSD,
  } = useTransaction();

  return (
    <StyledWalletComponent>
      <div>
        <button type="button" onClick={onClick}>x</button>
        <h3> My Wallet </h3>
        <div>
          <p>
            {' '}
            GBP :
            {' '}
            {walletGBP}
          </p>
          <p>
            {' '}
            USD :
            {' '}
            {walletUSD}
          </p>
        </div>
      </div>
    </StyledWalletComponent>
  );
}

export default Wallet;

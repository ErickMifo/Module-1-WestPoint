import React from 'react';
import styled from 'styled-components';

const StyledWalletButton = styled.button`
        background-color: var(--blue-dark);
        color: var(--text);
        border-radius: 10px;
        padding: 0.5rem 1.5rem;
`;

// eslint-disable-next-line react/prop-types
function WalltetButton({ onClick }) {
  return (
    <StyledWalletButton
      onClick={onClick}
    >
      My Wallet
    </StyledWalletButton>
  );
}

export default WalltetButton;

import React from 'react';
import styled from 'styled-components';

const StyledSellBuyButton = styled.button`
    color: var(--text);
    border-radius: 10px;
    font-size: 1.25rem;
    padding: 0.5rem 1.5rem;
    width: 50%;
    align-self: center;
    transition-duration: 0.4s;
    margin-top: 1rem;

    &:hover {
      color: var(--blue-dark)
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

function SellBuyButton({
  // eslint-disable-next-line react/prop-types
  children, bgColor, onClick, disabled,
}) {
  return (
    <StyledSellBuyButton
      disabled={disabled}
      onClick={onClick}
      style={{ backgroundColor: bgColor }}
    >

      {children}

    </StyledSellBuyButton>
  );
}

export default SellBuyButton;

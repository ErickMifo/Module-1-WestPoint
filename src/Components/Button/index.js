import React from 'react';
import styled from 'styled-components';

const SellBuyButton = styled.button`
    background-color: var(--green-dark);
    color: var(--text);
    border: 2px solid var(--green-dark);
    border-radius: 10px;
    font-size: 1.25rem;
    padding: 4px 12px;
    width: 50%;
    align-self: center;
    transition-duration: 0.4s;
    margin-top: 1rem;

    &:hover {
      color: var(--blue-dark)
  }
`;

// eslint-disable-next-line react/prop-types
function Button({ children }) {
  return (
    <SellBuyButton>
      {children}
    </SellBuyButton>
  );
}

export default Button;

import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    color: var(--blue-dark);
    border: none;
    border:1px solid var(--blue);
    outline:none;
    align-self: center;

    &:hover{
    border-color: #a0a0a0 #b9b9b9 #b9b9b9 #b9b9b9;
}

    &:focus{
    border-color:#4d90fe;
}
`;

// eslint-disable-next-line react/prop-types
function Input({ onChange, value }) {
  return (
    <StyledInput placeholder="Amout to buy/sell" type="number" value={value} onChange={onChange} />
  );
}

export default Input;

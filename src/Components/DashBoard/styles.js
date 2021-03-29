import styled from 'styled-components';

export const DashBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  border-radius: 5px;
  background-color: var(--blue-dark);
  padding: 3vh;
  margin-top: 2rem;
  color: var(--blue-dark);
`;

export const PriceContainer = styled.div`
  text-align: center;
  width: 100%;
  background-color: white;
  padding: 20vh 3rem;
  margin-bottom: 1rem;
  background-color: var(--background);
`;

export const SellBuyCotainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  height: 30vh;

  div {
  display: flex;
  flex-direction: column;
  background-color: var(--background);
  background-color: white;
  width: 40%;
  height: 100%;
  }
`;

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

export const GraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  padding: 0.5rem 3rem;
  margin-bottom: 1rem;
  background-color: var(--background);
  border-radius: 5px;

  h3 {
    padding-top: 1rem;
  }
`;

export const SellBuyCotainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  height: 35vh;

  div {
  display: flex;
  flex-direction: column;
  background-color: var(--background);
  background-color: white;
  width: 45%;
  height: 100%;
  border-radius: 5px;
  }

  p {
    margin-top: 0.5rem;
  }
`;

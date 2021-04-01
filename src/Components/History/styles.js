import styled from 'styled-components';

const HistoryContainer = styled.div`
  width: 25%;
  margin: 2rem 3rem 0rem 2rem;
  border-radius: 5px;
  padding: 2rem 1.5rem;

  background-color: var(--blue-dark);
  color: var(--blue-dark);

  h2 {
    text-align: center;
  }

  div {
    background-color: var(--background);
    max-height: 80vh;
    width: 100%;
    height: 80vh;
    border-radius: 5px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
  }

  p {
    margin: 0.75rem 2rem;
  }
`;

export default HistoryContainer;

import styled from 'styled-components';

export default styled.li`
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  text-align: center;

  img {
    width: 53px;
    height: 45px;
  }

  h3,
  p {
    margin: 0 auto;
  }

  h3 {
    font-size: 1.325rem;
    font-weight: 600;
    padding: 0.875rem 0;
  }

  p {
    font-size: 1rem;
    padding: 0;
    max-width: 240px;
  }
`;

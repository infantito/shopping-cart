import styled from 'styled-components';

export default styled.div`
  background-color: #fff;
  padding: 0.75rem 1rem;
  width: 100%;

  .text {
    color: ${props => props.theme.text};
    font-size: 1rem;
    margin: 0;
  }

  .shipping {
    background-color: ${props => props.theme.highlight};
  }

  .detail-row,
  .total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 0;
  }

  .total {
    .text {
      font-weight: 600;

      &:last-child {
        color: ${props => props.theme.danger};
      }
    }
  }
`;

import styled from 'styled-components';

export default styled.div`
  padding: calc(1rem + ${props => props.theme.input}) 0 0;

  .shopping {
    &-box {
      &:first-of-type {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      &:last-of-type {
        padding: 1rem 0 0;
      }
    }
  }

  .delivery {
    margin: 0;
    padding: 0 0.75rem;
  }
`;

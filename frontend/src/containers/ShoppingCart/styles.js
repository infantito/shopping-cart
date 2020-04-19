import styled from 'styled-components';

export default styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 360px;
  height: 100%;

  .shopping-box {
    width: 100%;

    & > * {
      background-color: #fff;
    }

    &:last-of-type {
      padding: 1.5rem 0 0;
      height: calc((100% - ${props => props.theme.input}) - 10rem);
    }

    &-content {
      border-radius: 4px;
      height: 100%;
    }
  }
`;

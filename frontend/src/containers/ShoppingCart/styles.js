import styled from 'styled-components';

export default styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow: hidden;

  .shopping-box {
    width: 100%;
    overflow: hidden;

    &:last-of-type {
      padding: 1rem 0 0;
      height: calc(100% - ${props => props.theme.input});
    }

    & > * {
      background-color: #fff;
    }

    &-content {
      border-radius: 4px;
      height: 100%;
      overflow-y: auto;
      overflow-x: auto;
    }
  }
`;

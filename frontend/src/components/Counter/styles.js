import styled from 'styled-components';

export const Handler = styled.div`
  height: auto;
  position: absolute;
  right: 1rem;
  top: calc(
    (${props => props.theme.product} / 2) - (${props => props.theme.input}) / 2
  );

  .handler {
    &-content {
      background-color: ${props => props.theme.counter};
      border-radius: 4px;
      color: #fff;
      overflow: hidden;
      padding: 0 0.25rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 180px;
    }
  }

  button {
    appearance: none;
    border: 0;
    background-color: transparent;
    cursor: pointer;
    outline: none;
    width: 25%;

    &:active {
      transform: scale(0.9);
    }
  }

  svg {
    height: 20px;
    width: 20px;
  }

  input {
    appearance: none;
    background-color: ${props => props.theme.counter};
    border: 0;
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    height: ${props => props.theme.input};
    text-align: center;
    outline: none;
    width: 50%;

    &::-webkit-input-placeholder,
    &::placeholder {
      color: #fff;
      opacity: 0.5;
    }

    &:-ms-input-placeholder {
      color: #fff;
    }

    &::-moz-placeholder {
      color: #fff;
      opacity: 0.5;
    }
  }
`;

export default styled.div`
  margin: 0 0 0 auto;

  button {
    &:first-of-type {
      appearance: none;
      background-color: ${props => props.theme.counter};
      border-radius: 50%;
      border: 0;
      color: #fff;
      cursor: pointer;
      font-size: 1rem;
      font-weight: bold;
      width: ${props => props.theme.input};
      height: ${props => props.theme.input};
      transform: rotate(45deg);

      &:hover {
        opacity: 0.9;
      }

      &:active {
        transform: scale(0.9) rotate(45deg);
      }
    }

    &:last-of-type {
      background-color: transparent;
      border: 0;
      color: ${props => props.theme.text};
      cursor: pointer;
      margin: 0.25rem auto 0;
      display: block;
      font-size: 0.75rem;
      text-align: center;

      &:hover {
        color: ${props => props.theme.link};
      }

      &:active {
        transform: scale(0.9);
      }
    }
  }
`;

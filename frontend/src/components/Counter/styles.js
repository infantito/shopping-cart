import styled from 'styled-components';

export default styled.button`
  background-color: ${props => props.theme.counter};
  border-radius: 50%;
  border: 0;
  color: #fff;
  cursor: pointer;
  font-size: 2rem;
  font-weight: bold;
  width: 48px;
  height: 48px;
  transform: rotate(45deg);

  &:hover {
    opacity: 0.9;
  }

  &:active {
    transform: scale(0.9) rotate(45deg);
  }

  & + button {
    background-color: transparent;
    border: 0;
    cursor: pointer;
    margin: 0.5rem auto 0;
    display: block;
    font-size: 1.25rem;
    text-align: center;

    &:hover {
      color: ${props => props.theme.link};
    }

    &:active {
      transform: scale(0.9);
    }
  }
`;

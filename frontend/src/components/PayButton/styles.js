import styled from 'styled-components';

export default styled.button`
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  padding: 1rem;
  margin: 0.875rem auto 0;
  width: 100%;

  &:not(:disabled) {
    border-color: ${props => props.theme.counter};
    background-color: ${props => props.theme.counter};
    cursor: pointer;
  }

  &:disabled {
    background-color: transparent;
    border-color: ${props => props.theme.disabled};
    color: ${props => props.theme.disabled};
    cursor: not-allowed;
  }

  &:hover {
    opacity: 0.9;
  }

  &:active {
    transform: scale(0.95);
  }
`;

import styled from 'styled-components';

export default styled.input`
  appearance: none;
  border: 1px solid ${props => props.theme.border};
  box-sizing: border-box;
  border-radius: 4px;
  color: ${props => props.theme.text};
  font-size: 1rem;
  height: 48px;
  outline: none;
  padding: 0.5rem 1rem;
  width: 100%;
`;

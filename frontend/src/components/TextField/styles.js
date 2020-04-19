import styled from 'styled-components';

export default styled.input`
  appearance: none;
  border: 1px solid ${props => props.theme.border};
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 1.6rem;
  height: 48px;
  outline: none;
  padding: 1rem;
  width: 100%;
`;

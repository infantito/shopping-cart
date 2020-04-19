import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

const theme = {
  background: '#E5E5E5',
  border: '#DDDDDD',
  highlight: '#FFE200',
  text: '#333333',
  disabled: '#C1C1C1',
  danger: '#FF2D55 ',
  counter: '#FF8000 ',
  link: '#0500FF',
  input: '48px',
};

const GlobalStyles = createGlobalStyle`
  html {
    background-color: ${theme.background};
    box-sizing: border-box;
  }

	html,
	body,
	main {
		height: 100%;
	}

	*, *:before, *:after {
    box-sizing: inherit;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    padding: 0;
    margin: 0;
    font-size: initial;
    line-height: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
    color: ${theme.link};
  }

	h3,
	h4,
	label,
	p,
	span {
		color: ${theme.text};
		line-height: normal;
	}

	ul {
		list-style: none;
		margin: 0 auto;
		padding: 0;
	}

	button {
		outline: none;
		appearance: none;
	}

	main {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		max-width: ${props => props.theme.maxWidth};
		margin: 0 auto;
		padding: 1rem;
	}

	::selection {
		background-color: ${theme.highlight};
		color: ${theme.text};
		text-shadow: none;
	}

  ::-webkit-scrollbar {
    background-color: ${theme.border};
    border-left: 1px solid ${theme.submit};
    width: 12.5px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${theme.submit};
    outline: 10px solid transparent;
  }
`;

const Template = props => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {props.children}
    </ThemeProvider>
  );
};

export default Template;

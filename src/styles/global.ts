import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
}

body {
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.baseText};

  line-height: ${(props) => props.theme.text.lineHeight};
  font-size: ${(props) => props.theme.text.M};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

:focus {
  outline: 0;
}

/* Custom scroll bar*/
::-webkit-scrollbar-track
{
  opacity: 0;
}

::-webkit-scrollbar
{
	width: 10px;
}

::-webkit-scrollbar-thumb
{
	border-radius: 10px;

  background: ${(props) => props.theme.yellowDark}2F;
}


/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
`

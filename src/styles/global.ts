import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  line-height: 1.3;
  font-family: Roboto, sans-serif;
}

body {
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.baseText};
}

:focus {
  outline: 0;
}
`

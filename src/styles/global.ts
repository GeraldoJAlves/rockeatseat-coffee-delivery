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
  background: #333;
  color: #FFF;
}

:focus {
  outline: 0;
}
`

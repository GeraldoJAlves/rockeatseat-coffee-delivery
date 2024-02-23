import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

export default function App() {
  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <h1>Coffee Delivery</h1>
        <GlobalStyle />
      </ThemeProvider>
    </div>
  )
}

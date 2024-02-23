import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'

export default function App() {
  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <h1>Coffee Delivery</h1>
      </ThemeProvider>
    </div>
  )
}

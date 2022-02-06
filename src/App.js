import { ThemeProvider } from 'styled-components'
import Header from './components/Header'
import Footer from './components/Footer'
import Card from './components/Card'
import GlobalStyles from './components/styles/Global'
import { Container } from './components/styles/Container.styled'
import content from './content'

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },
  mobileMd: '720px',
  mobileSm: '520px',
}

function App() {
  return (
    <ThemeProvider theme={ theme }>
      <GlobalStyles />
      <Header />
      <Container>
        {content.map((item) => (
          <Card key={ item.id } item={ item } />
        ))}
      </Container>
      <Footer />
    </ThemeProvider>
  )
}

export default App
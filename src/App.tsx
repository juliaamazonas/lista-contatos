import BotaoAdd from './containers/BotaoAdd'
import Header from './containers/Header'
import ListaDeContatos from './containers/ListaDeContatos'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Header />
        <ListaDeContatos />
        <BotaoAdd />
      </Container>
    </>
  )
}

export default App

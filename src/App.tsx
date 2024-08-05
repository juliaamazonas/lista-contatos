import { Provider } from 'react-redux'
import BotaoAdd from './containers/BotaoAdd'
import Header from './containers/Header'
import ListaDeContatos from './containers/ListaDeContatos'
import EstiloGlobal, { Container } from './styles'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <Header />
        <ListaDeContatos />
        <BotaoAdd />
      </Container>
    </Provider>
  )
}

export default App

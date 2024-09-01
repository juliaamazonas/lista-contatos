import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Header, Titulo } from '../../styles'
import { Container, Form, Input, BotaoSalvar, Botao } from './styles'
import Contato from '../../models/Contato'
import { adicionar } from '../../store/reducers/contatos'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [numero, setNumero] = useState('')
  const [email, setEmail] = useState('')

  const adicionarContato = (evento: FormEvent) => {
    evento.preventDefault()
    const contatoParaAdicionar = new Contato(nome, numero, email, 9)

    dispatch(adicionar(contatoParaAdicionar))
    navigate('/')
  }

  return (
    <>
      <Header>
        <Titulo>Adicionar Contato</Titulo>
      </Header>
      <Container>
        <Form onSubmit={adicionarContato}>
          <Input
            value={nome}
            onChange={(evento) => setNome(evento.target.value)}
            type="text"
            placeholder="Nome"
          />
          <Input
            value={numero}
            onChange={(evento) => setNumero(evento.target.value)}
            type="text"
            placeholder="Número"
          />
          <Input
            value={email}
            onChange={(evento) => setEmail(evento.target.value)}
            type="text"
            placeholder="E-mail"
          />
          <BotaoSalvar type="submit">Adicionar</BotaoSalvar>
          <Botao type="submit">Voltar</Botao>
        </Form>
      </Container>
    </>
  )
}

export default Formulario

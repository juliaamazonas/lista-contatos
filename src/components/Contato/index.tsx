import { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'
import { atualizar, remover } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'

type Props = ContatoClass

const Contato = ({ nome, numero, email, id }: Props) => {
  const dispatch = useDispatch()
  const [editandoContato, setEditandoContato] = useState(false)

  const [nomeOriginal, setNomeOriginal] = useState(nome)
  const [numeroOriginal, setNumeroOriginal] = useState(numero)
  const [emailOriginal, setEmailOriginal] = useState(email)

  const [nomeInput, setNome] = useState(nome)
  const [numeroInput, setNumero] = useState(numero)
  const [emailInput, setEmail] = useState(email)

  const handleEdit = () => {
    setEditandoContato(true)

    setNome(nomeOriginal)
    setNumero(numeroOriginal)
    setEmail(emailOriginal)
  }

  const handleCancel = () => {
    setEditandoContato(false)

    setNome(nomeOriginal)
    setNumero(numeroOriginal)
    setEmail(emailOriginal)
  }

  const handleSave = () => {
    setEditandoContato(false)

    setNomeOriginal(nomeInput)
    setNumeroOriginal(numeroInput)
    setEmailOriginal(emailInput)

    dispatch(
      atualizar({ id, nome: nomeInput, numero: numeroInput, email: emailInput })
    )
  }

  return (
    <S.Card>
      {editandoContato ? (
        <>
          <S.NomeInput
            value={nomeInput}
            onChange={(evento) => setNome(evento.target.value)}
          />
          <S.NumeroInput
            value={numeroInput}
            onChange={(evento) => setNumero(evento.target.value)}
          />
          <S.EmailInput
            value={emailInput}
            onChange={(evento) => setEmail(evento.target.value)}
          />
        </>
      ) : (
        <>
          <S.Nome>{nomeInput}</S.Nome>
          <S.DadosContato>{numeroInput}</S.DadosContato>
          <S.DadosContato>{emailInput}</S.DadosContato>
        </>
      )}

      <S.BarraAcoes>
        {editandoContato ? (
          <>
            <S.BotaoSalvar onClick={handleSave}>Salvar</S.BotaoSalvar>
            <S.BotaoCancelar onClick={handleCancel}>Cancelar</S.BotaoCancelar>
          </>
        ) : (
          <>
            <S.Botao onClick={handleEdit}>Editar</S.Botao>
            <S.BotaoCancelar onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelar>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato

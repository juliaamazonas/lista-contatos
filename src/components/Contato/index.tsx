import { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'
import { remover } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'

type Props = ContatoClass

const Contato = ({ nome, numero, email, id }: Props) => {
  const dispatch = useDispatch()
  const [editandoContato, setEditandoContato] = useState(false)

  return (
    <S.Card>
      <S.Nome>{nome}</S.Nome>
      <S.DadosContato>{numero}</S.DadosContato>
      <S.DadosContato>{email}</S.DadosContato>
      <S.BarraAcoes>
        {editandoContato ? (
          <>
            <S.BotaoSalvar>Salvar</S.BotaoSalvar>
            <S.BotaoCancelar onClick={() => setEditandoContato(false)}>
              Cancelar
            </S.BotaoCancelar>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEditandoContato(true)}>Editar</S.Botao>
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

import * as S from './styles'

const Contato = () => (
  <S.Card>
    <S.Nome>Nome do Contato</S.Nome>
    <S.DadosContato>1122325456</S.DadosContato>
    <S.DadosContato>email@email.com</S.DadosContato>
    <S.BarraAcoes>
      <S.Botao>Editar</S.Botao>
      <S.Botao>Remover</S.Botao>
    </S.BarraAcoes>
  </S.Card>
)

export default Contato

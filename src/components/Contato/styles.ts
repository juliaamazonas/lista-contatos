import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Card = styled.div`
  background-color: ${variaveis.azul};
  width: 400px;
  padding: 20px;
  border-radius: 16px;
  margin: 10px auto;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const Nome = styled.h3`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`

export const NomeInput = styled.input`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  background-color: ${variaveis.azul};
  border: none;
  padding: 4px;
`

export const DadosContato = styled.p`
  color: #fff;
  font-size: 14px;
  line-height: 24px;
`
export const NumeroInput = styled.input`
  color: #fff;
  font-size: 14px;
  background-color: ${variaveis.azul};
  border: none;
  margin: 8px 0;
  padding: 4px;
`
export const EmailInput = styled.input`
  color: #fff;
  font-size: 14px;
  background-color: ${variaveis.azul};
  border: none;
  padding: 4px;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const Botao = styled.button`
  font-weight: 300;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.cinza};
  border-radius: 8px;
  margin-right: 8px;
`
export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.amarelo};
`
export const BotaoCancelar = styled(Botao)`
  background-color: ${variaveis.vermelho};
`

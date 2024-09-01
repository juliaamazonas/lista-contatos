import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 40px;
  border-radius: 10px;
  width: 500px;
`

export const Input = styled.input`
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid ${variaveis.cinza};
  border-radius: 5px;
`
export const Botao = styled.button`
  font-weight: 300;
  font-size: 16px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.cinza};
  border-radius: 8px;
  margin-right: 8px;
  margin-top: 8px;
`
export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.amarelo};
`

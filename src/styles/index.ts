import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    overflow-y: hidden;
  }
`

export const Container = styled.div`
  display: block;
`

export const MainContainer = styled.main`
  height: 80vh;
  overflow-y: scroll;
`
export const Header = styled.header`
  background-color: #fff;
  text-align: center;
  border-radius: 20px;
  margin-bottom: 30px;
`

export const Titulo = styled.h1`
  font-weight: 300;
  color: ${variaveis.azul};
  padding: 16px;
`

export default EstiloGlobal

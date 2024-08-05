import styled, { createGlobalStyle } from 'styled-components'

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

export default EstiloGlobal

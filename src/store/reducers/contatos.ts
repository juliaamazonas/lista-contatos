import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

const contatosSlice = createSlice({
  name: 'contatos',
  initialState: {
    itens: [
      new Contato('Joao da Silva', 11912345678, 'joaodasilva@email.com', 1),
      new Contato('Maria Souza', 21910203040, 'mariasouza@email.com', 2),
      new Contato('Jose Santos', 31990001100, 'josesantos@email.com', 3),
      new Contato('Ana Rodrigues', 71950005699, 'anarodrigues@email.com', 4),
      new Contato(
        'Aparecida da Cunha',
        81998765432,
        'aparecidacunha@email.com',
        5
      )
    ]
  },
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    }
  }
})

export const { remover } = contatosSlice.actions
export default contatosSlice.reducer

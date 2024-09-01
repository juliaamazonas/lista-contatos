import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

const contatosSlice = createSlice({
  name: 'contatos',
  initialState: {
    itens: [
      new Contato('Joao da Silva', '11912345678', 'joaodasilva@email.com', 1),
      new Contato('Maria Souza', '21910203040', 'mariasouza@email.com', 2),
      new Contato('Jose Santos', '31990001100', 'josesantos@email.com', 3),
      new Contato('Ana Rodrigues', '71950005699', 'anarodrigues@email.com', 4),
      new Contato(
        'Aparecida da Cunha',
        '81998765432',
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
    },
    atualizar: (
      state,
      action: PayloadAction<{
        id: number
        nome: string
        numero: string
        email: string
      }>
    ) => {
      const contatoIndex = state.itens.findIndex(
        (contato) => contato.id === action.payload.id
      )
      if (contatoIndex !== -1) {
        state.itens[contatoIndex] = {
          ...state.itens[contatoIndex],
          nome: action.payload.nome,
          numero: action.payload.numero,
          email: action.payload.email
        }
      }
    },
    adicionar: (state, action: PayloadAction<Contato>) => {
      const contatoJaExiste = state.itens.find(
        (contato: { nome: string }) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )

      if (contatoJaExiste) {
        alert('Já existe um contato com esse nome.')
      } else {
        state.itens.push(action.payload)
      }
    }
  }
})

export const { remover, atualizar, adicionar } = contatosSlice.actions
export default contatosSlice.reducer

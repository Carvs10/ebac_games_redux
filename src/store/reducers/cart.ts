import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Game } from '../../App'

type CartState = {
  items: Game[]
}

const initialState: CartState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Game>) => {
      const game = action.payload
      if (state.items.find((gameToAdd) => gameToAdd.id === game.id)) {
        alert('Item já adicionado')
      } else {
        state.items.push(game)
      }
    }
  }
})

export const { add } = cartSlice.actions
export default cartSlice.reducer

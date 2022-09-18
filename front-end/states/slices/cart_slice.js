import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    initilizeCart: (state, { payload }) => {
      state.value = payload
    },
    incrementQuantity: (state, { payload }) => {
      const index = state.value.findIndex(product => product.code_product === payload)
      console.log(index)
      if (index !== -1) {
        const product = state.value[index]
        product.quantity += 1
        state.value[index] = product
      }
    },
    decrementQuantity: (state, { payload }) => {
      const index = state.value.findIndex(product => product.code_product === payload)
      if (index !== -1) {
        const product = state.value[index]
        product.quantity > 1 ? product.quantity -= 1 : null
        state.value[index] = product
      }
    },
    addToCart: (state, { payload }) => {
      state.value.push(payload)
    },
    removeFromCart: (state, { payload }) => {
      state.value = state.value.filter(product => product.code_product !== payload)
    }
  },
})

export const { initilizeCart, addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions

export default cartSlice.reducer
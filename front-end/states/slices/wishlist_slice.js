import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: []
}

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    initilizeWishlist : (state, { payload }) => {
      state.value = payload
    },
    addToWishlist: (state, { payload }) => {
      state.value.push(payload)
    },
    removeFromWishlist: (state, { payload }) => {
      state.value = state.value.filter(product => product.code_product !== payload)
    }
  },
})

export const { initilizeWishlist, addToWishlist, removeFromWishlist } = wishlistSlice.actions

export default wishlistSlice.reducer
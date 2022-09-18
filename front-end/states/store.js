import { configureStore } from '@reduxjs/toolkit'
import modalSlice from './slices/modal_slice'
import wishlistSlice from './slices/wishlist_slice'
import cartSlice from './slices/cart_slice'

export const store = configureStore({
  reducer: {
    wishlist: wishlistSlice,
    cart: cartSlice,
    modal : modalSlice
  },
})
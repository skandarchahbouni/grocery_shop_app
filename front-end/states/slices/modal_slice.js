import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    show: false,
    card : ''
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        open : (state, { payload }) => {
            state.card = payload
            state.show = true
        },
        close: (state) => {
            state.show = false
            state.component = ''
        },
    },
})

export const { open, close } = modalSlice.actions

export default modalSlice.reducer
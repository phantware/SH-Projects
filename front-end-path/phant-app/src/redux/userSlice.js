import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',

  initialState: {
    name: 'Tunde',
    email: 'ismail.jamiu19@gmail.com',
  },

  reducers: {
    update: (state, action) => {
      state.name = action.payload.name
      state.email = action.payload.email
    },
    remove: (state) => (state = {}),
  },
})

export const { update, remove } = userSlice.actions

export default userSlice.reducer

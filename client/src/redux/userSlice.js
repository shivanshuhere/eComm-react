import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    firstname: '',
    lastname: '',
    email: '',
    refreshToken: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUserData: (state, action)=>{
      state.firstname= action.payload.firstname,
      state.lastname= action.payload.lastname,
      state.email= action.payload.email,
      state.refreshToken= action.payload
    },
    logout: (state)=>{
      state.firstname= '',
      state.lastname= '',
      state.email= '',
      state.refreshToken= ''
    },
  },
})


// Action creators are generated for each case reducer function
export const { addUserData, addRefToken, logout } = userSlice.actions
export default userSlice.reducer
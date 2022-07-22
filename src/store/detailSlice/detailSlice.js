import {createSlice} from '@reduxjs/toolkit'

export const detailSlice = createSlice({
  name: 'details',
  initialState: {
    id: 0,
    details: []
  },
  reducers: {
    setId: (state, action) =>{
      state.id = action.payload
    },
    setDetails: (state, action) =>{
      state.details = action.payload
    }
  }
})

export const {setId, setDetails} = detailSlice.actions
export default detailSlice.reducer

import {createSlice} from '@reduxjs/toolkit'

export const friendSlice = createSlice({
  name: 'friend',
  initialState: {
    list: []
  },
  reducers: {
    setFriendList: (state, action) =>{
      state.list = action.payload
    }
  }
})

export const {setFriendList} = friendSlice.actions
export default friendSlice.reducer

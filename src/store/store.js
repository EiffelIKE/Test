import {configureStore} from '@reduxjs/toolkit'
import friend from './friendSlice/friendSlice'
import details from './detailSlice/detailSlice'

export default configureStore({
  reducer: {
    friend,
    details
  }
})

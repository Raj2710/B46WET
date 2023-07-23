import { configureStore } from '@reduxjs/toolkit'
import BlogReducer from './blogSlice'
export default configureStore({
  reducer: {
    globalState:BlogReducer
  },
})
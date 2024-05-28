import { configureStore } from '@reduxjs/toolkit'
import infoNasa from './slices/infoNasa/infoNasa'

export const store = configureStore({
  reducer: {
    informacion: infoNasa,
  },
})
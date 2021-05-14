
import { configureStore } from '@reduxjs/toolkit'

import countReducer from './countReducer';

const store = configureStore({
  reducer: countReducer
}
)

export default store;

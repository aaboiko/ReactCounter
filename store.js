// import { configureStore } from '@reduxjs/toolkit';

// export const count = { value: 0 };
//const store = configureStore({ reducer: countReducer });

// export function countReducer(state = count, action) {
//     if (action.type === 'increment') {
//         return { value: state.value + 1 };
//     }
//     if (action.type === 'decrement') {
//         return { value: state.value - 1 };
//     }
//     return count;
// }


////
import { configureStore } from '@reduxjs/toolkit'

import countReducer from './countReducer';

const store = configureStore({
  reducer: countReducer
  }
)

export default store;

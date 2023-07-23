import { createSlice } from '@reduxjs/toolkit';

interface CartState {
  [key: string]: number;
}

const initialState: CartState = {};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment: (state, { payload }) => {
      state[payload] = state[payload] ? state[payload] + 1 : 1;
    },
    decrement: (state, { payload }) => {
      state[payload] = state[payload] ? state[payload] - 1 : 0;
    },
  },
});
// import { createSlice } from '@reduxjs/toolkit';

// interface CartState {
//   [key: string]: number;
// }

// const initialState: CartState = {};

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     increment: (state, { payload }) => {
//       const count = state[payload] || 0;
//       state[payload] = count + 1;
//     },
//     decrement: (state, { payload }) => {
//       const count = state[payload];

//       if (!count) {
//         return;
//       }

//       if (count === 1) {
//         delete state[payload];
//         return;
//       }

//       state[payload] = count - 1;
//     },
//     reset: (state, { payload }) => {
//       delete state[payload];
//     },
//   },
// });

// export const cartReducer = cartSlice.reducer;
// export const cartActions = cartSlice.actions;

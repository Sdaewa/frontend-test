// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// export const initialState = {
//   slots: [],
//   status: null,
// };

// export const getCalData = createAsyncThunk('chocolates', async () => {
//   const response = await axios.get('http://localhost:5001/chocolates');
//   const slotData = await response.json();
//   return { slotData };
// });

// const slice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     reset: () => initialState,
//     open: (state) => {
//       state.isOpen = true;
//     },
//     thereIsChoc: (state) => {
//       state.thereIsChoc = false;
//     },
//     isReserved: (state) => {
//       state.isReserved = true;
//     },
//   },
//   extraReducers: {
//     [getCalData.pending]: (state) => {
//       state.status = 'loading';
//     },
//     [getCalData.fulfilled]: (state, action) => {
//       state.status = 'success';
//       state.slots = action.payload;
//     },
//     [getCalData.rejected]: (state) => {
//       state.status = 'error';
//     },
//   },
// });

// const selectors = {};
// const actions = { ...slice.actions };

// export { actions, selectors };
// export default slice;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getSlots = createAsyncThunk('chocolates/getSlots', async () => {
  const response = await axios.get('http://localhost:5001/chocolates').then((res) => res.data);
  return response;
});

const initialState = {
  slots: [],
};

const slotsSlice = createSlice({
  name: 'slots',
  initialState,
  reducers: {
    reset: () => initialState,
    // open: (state) => {
    //   state.isOpen = true;
    // },
    // thereIsChoc: (state) => {
    //   state.thereIsChoc = false;
    // },
    // isReserved: (state) => {
    //   state.isReserved = true;
    // },
  },
  extraReducers: {
    [getSlots.pending]: (state) => {
      state.status = 'loading';
    },
    [getSlots.fulfilled]: (state, action) => {
      state.status = 'success';
      state.slots = action.payload;
    },
    [getSlots.rejected]: (state) => {
      state.status = 'error';
    },
  },
});

const selectors = {};
const actions = { ...slotsSlice.actions };

export { actions, selectors };
export default slotsSlice.reducer;

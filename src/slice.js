import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

export const getSlots = createAsyncThunk('chocolates/getSlots', async () => {
  const response = await axios.get('http://localhost:5001/chocolates').then((res) => res.data);
  return response;
});

export const openSlot = createAsyncThunk('/open/chocolate/open/slot', async (payload) => {
  const response = await axios
    .post('http://localhost:5001/open/chocolate', payload)
    .then((res) => res.data);
  return response;
});

export const eatChoc = createAsyncThunk('/eat/chocolate/eatChoc', async (payload) => {
  const response = await axios
    .post('http://localhost:5001/eat/chocolate', payload)
    .then((res) => res.data);
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
    [openSlot.pending]: (state) => {
      state.status = 'loading';
    },
    [openSlot.fulfilled]: (state) => {
      state.status = 'success';
      // state.slots = action.payload;
    },
    [openSlot.rejected]: (state) => {
      state.status = 'error';
    },
    [eatChoc.pending]: (state) => {
      state.status = 'loading';
    },
    [eatChoc.fulfilled]: (state) => {
      state.status = 'success';
      // state.slots = action.payload;
    },
    [eatChoc.rejected]: (state) => {
      state.status = 'error';
    },
  },
});

const selectors = {};
const actions = { ...slotsSlice.actions };

export { actions, selectors };
export default slotsSlice.reducer;

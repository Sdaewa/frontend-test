import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const initialState = {
  day: 0,
  thereIsChoc: false,
  isOpen: false,
  isReserved: false,
  isValid: false,
  status: false,
};

export const getCalData = createAsyncThunk('chocolates/getCalData', async () => {
  await axios.get('http://localhost:5001/chocolates').then((res) => res.json());
});

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: () => initialState,
    open: (state) => {
      state.isOpen = true;
    },
    thereIsChoc: (state) => {
      state.thereIsChoc = false;
    },
    isReserved: (state) => {
      state.isReserved = true;
    },
  },
  extraReducers: {
    [getCalData.pending]: (state, action) => {
      state.status = 'loading';
    },
    [getCalData.fulfilled]: (state, action) => {
      state.status = 'success';
      state.day = action.payload;
    },
    [getCalData.rejected]: (state, action) => {
      state.status = 'error';
    },
  },
});

const selectors = {};
const actions = { ...slice.actions };

export { actions, selectors };
export default slice;

// import { configureStore } from '@reduxjs/toolkit';
// import slice from './slice';

// export default configureStore({
//   reducer: {
//     slice: slice.reducer,
//   },
// });
import { configureStore } from '@reduxjs/toolkit';
import slotsReducer from './slice';

const store = configureStore({
  reducer: {
    slots: slotsReducer,
  },
});

export default store;

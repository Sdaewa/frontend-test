import { configureStore } from '@reduxjs/toolkit';
import slotsReducer from './slice';

const store = configureStore({
  reducer: {
    slots: slotsReducer,
  },
});

export default store;

// [
//   {
//       "day": 1,
//       "date": "01/12/2021",
//       "status": "closed"
//   },
//   {
//       "day": 2,
//       "date": "02/12/2021",
//       "status": "closed"
//   },
//   {
//       "day": 3,
//       "date": "03/12/2021",
//       "status": "closed"
//   },
//   {
//       "day": 4,
//       "date": "04/12/2021",
//       "status": "closed"
//   },
//   {
//       "day": 5,
//       "date": "05/12/2021",
//       "status": "closed"
//   },
//   {
//       "day": 6,
//       "date": "06/12/2021",
//       "status": "closed"
//   },
//   {
//       "day": 7,
//       "date": "07/12/2021",
//       "status": "closed"
//   },
//   {
//       "day": 8,
//       "date": "08/12/2021",
//       "status": "closed"
//   },
//   {
//       "day": 9,
//       "date": "09/12/2021",
//       "status": "closed"
//   },
//   {
//       "day": 10,
//       "date": "10/12/2021",
//       "status": "closed"
//   },
//   {
//       "day": 11,
//       "date": "11/12/2021",
//       "status": "closed"
//   },
//   {
//       "day": 12,
//       "date": "12/12/2021",
//       "status": "closed"
//   },
//   {
//       "day": 13,
//       "date": "13/12/2021",
//       "status": "closed"
//   },
//   {
//       "day": 14,
//       "date": "14/12/2021",
//       "status": "closed"
//   },
//   {
//       "day": 15,
//       "date": "15/12/2021",
//       "status": "closed"
//   },
//   {
//       "day": 16,
//       "date": "16/12/2021",
//       "status": "closed"
//   },
//   {
//       "day": 17,
//       "date": "17/12/2021",
//       "status": "closed"
//   },
//   {
//       "day": 18,
//       "date": "18/12/2021",
//       "status": "closed"
//   },
//   {
//       "day": 19,
//       "date": "19/12/2021",
//       "status": "closed"
//   },
//   {
//       "day": 20,
//       "date": "20/12/2021",
//       "status": "closed"
//   },
//   {
//       "day": 21,
//       "date": "21/12/2021",
//       "status": "closed"
//   },
//   {
//       "day": 22,
//       "date": "22/12/2021",
//       "status": "closed"
//   },
//   {
//       "day": 23,
//       "date": "23/12/2021",
//       "status": "closed"
//   },
//   {
//       "day": 24,
//       "date": "24/12/2021",
//       "status": "closed"
//   },
//   {
//       "day": 25,
//       "date": "25/12/2021",
//       "status": "closed"
//   },
//   {
//       "day": 26,
//       "date": "26/12/2021",
//       "status": "closed"
//   },
//   {
//       "day": 27,
//       "date": "27/12/2021",
//       "status": "closed"
//   },
//   {
//       "day": 28,
//       "date": "28/12/2021",
//       "status": "closed"
//   },
//   {
//       "day": 29,
//       "date": "29/12/2021",
//       "status": "closed"
//   },
//   {
//       "day": 30,
//       "date": "30/12/2021",
//       "status": "closed"
//   },
//   {
//       "day": 31,
//       "date": "31/12/2021",
//       "status": "closed"
//   }
// ]

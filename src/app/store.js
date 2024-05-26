import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import lecturerReducer from '../Department/LecturerInfo/lecturerSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    lecturer: lecturerReducer,
  },
});

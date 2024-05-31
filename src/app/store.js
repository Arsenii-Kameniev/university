import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import lecturerReducer from '../Department/LecturerInfo/lecturerSlice';
import planningReducer from '../Department/Planning/plannigSlice';
import connectWithAdminReducer from '../Department/ConnectWithAdmin/connectWithAdminSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    lecturer: lecturerReducer,
    planning: planningReducer,
    connect: connectWithAdminReducer
  },
});

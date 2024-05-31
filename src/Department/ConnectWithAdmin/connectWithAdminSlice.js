import { createAsyncThunk, createSlice, isAction } from '@reduxjs/toolkit';
import ConnectWithAdmin from './ConnectWithAdmin';


const initialState = {
    ConnectWithAdmin: [{Name: "Name1", Email: "????@gmail.com", Number: "+?????"}, {Name: "Name2", Email: "????@gmail.com", Number: "+?????"}, {Name: "Name3", Email: "????@gmail.com", Number: "+?????"}, {Name: "Name4", Email: "????@gmail.com", Number: "+?????"}],
};

export const connectWithAdminSlice = createSlice({
    name: 'connect',
    initialState,
    reducers: {
        setConnectWithAdmin: (state, action) => {
            state.ConnectWithAdmin = action.payload;
        }
    },
    extraReducers: (builder) => {
    }
});

export const {setConnectWithAdmin} = connectWithAdminSlice.actions;
export const selectConnectWithAdmin = (state) => state.connect.ConnectWithAdmin;
export default connectWithAdminSlice.reducer;
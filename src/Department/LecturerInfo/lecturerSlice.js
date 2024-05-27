import { createAsyncThunk, createSlice, isAction } from '@reduxjs/toolkit';
import LecturerList from './LecturerList';

const initialState = {
    LecturerList: [{Name: "Lecturer1", Syllabus: "Math"}, {Name: "Lecturer2", Syllabus: "Math"}, {Name: "Lecturer3", Syllabus: "Math"}, {Name: "Lecturer4", Syllabus: "Math"}],
};

// export const logIn = createAsyncThunk(
//     'logIn',
//     async (state) => {
//         // console.log("FirstDate:");
//         // console.log(new Date().toLocaleString());
//         // console.log("SecondDate:");
//         // console.log(state.DateOfBirth.toLocaleString());
//         const response = await axios.post('http://localhost:8080/User/logIn', {
//             name: state.Name,
//             password: state.PassWord,
//             mail: state.Mail,
//             status: "new value"
//         });
//         return response.data;
//     }
// );

export const lecturerSlice = createSlice({
    name: 'lecturer',
    initialState,
    reducers: {
        setLecturerList: (state, action) => {
            state.LecturerList= action.payload;
        }
    },
    extraReducers: (builder) => {
    }
});
export const {setLecturerList} = lecturerSlice.actions;
export const selectLecturerList = (state) => state.lecturer.LecturerList;
export default lecturerSlice.reducer;
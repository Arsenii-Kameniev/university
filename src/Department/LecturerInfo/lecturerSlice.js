import { createAsyncThunk, createSlice, isAction } from '@reduxjs/toolkit';
import LecturerList from './LecturerList';
import axios from 'axios';

const initialState = {
    User: {},
    Traineeships: [],
    ScientificAndPedagogicalActivities: [],
    LecturerList: [],
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

export const getLecturerList = createAsyncThunk(
    'getLecturerList',
    async () => {
        // console.log("GET");
        const response = await axios.get(`http://localhost:5008/api/Users`);
        return response.data;
    }
);
export const getUser = createAsyncThunk(
    'getUser',
    async (state) => {
        // console.log("GET");
        // console.log(state.id);
        const response = await axios.get(`http://localhost:5008/api/Users/${state.id}`, {
            id: state.id
        });
        return response.data;
    }
);
export const getScientificAndPedagogicalActivities = createAsyncThunk(
    'getScientificAndPedagogicalActivities',
    async (state) => {
        // console.log("GET");
        // console.log(state.id);
        const response = await axios.get(`http://localhost:5008/api/ScientificAndPedagogicalActivities/GetByUserId/${state.id}`, {
            id: state.id
        });
        return response.data;
    }
);
export const getTraineeships = createAsyncThunk(
    'getTraineeships',
    async (state) => {
        // console.log("GET");
        // console.log(state.id);
        const response = await axios.get(`http://localhost:5008/api/Traineeships/GetByUserId/${state.id}`, {
            id: state.id
        });
        return response.data;
    }
);
export const lecturerSlice = createSlice({
    name: 'lecturer',
    initialState,
    reducers: {
        setLecturerList: (state, action) => {
            state.LecturerList= action.payload.items;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getLecturerList.pending, (state) => {
            console.log("loading");
        })
        .addCase(getLecturerList.fulfilled, (state, action) => {
            console.log("done");
            state.LecturerList=action.payload.items;
        })
        .addCase(getLecturerList.rejected, (state) => {
            console.log("rejected");
        })
        .addCase(getUser.pending, (state) => {
            console.log("loading");
        })
        .addCase(getUser.fulfilled, (state, action) => {
            console.log("done");
            state.User=action.payload.item;
        })
        .addCase(getUser.rejected, (state) => {
            console.log("rejected");
        })
        .addCase(getScientificAndPedagogicalActivities.pending, (state) => {
            console.log("loading");
        })
        .addCase(getScientificAndPedagogicalActivities.fulfilled, (state, action) => {
            console.log("done");
            state.ScientificAndPedagogicalActivities=action.payload.items;
        })
        .addCase(getScientificAndPedagogicalActivities.rejected, (state) => {
            console.log("rejected");
        })
        .addCase(getTraineeships.pending, (state) => {
            console.log("loading");
        })
        .addCase(getTraineeships.fulfilled, (state, action) => {
            console.log("done");
            state.Traineeships=action.payload.items;
        })
        .addCase(getTraineeships.rejected, (state) => {
            console.log("rejected");
        })
    }
});
export const {setLecturerList} = lecturerSlice.actions;
export const selectLecturerList = (state) => state.lecturer.LecturerList;
export const selectUser = (state) => state.lecturer.User;
export const selectScientificAndPedagogicalActivities = (state) => state.lecturer.ScientificAndPedagogicalActivities;
export const selectTraineeships = (state) => state.lecturer.Traineeships;
export default lecturerSlice.reducer;
import { createAsyncThunk, createSlice, isAction } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    User: {id: "4d905ba7-d939-4d3f-95f7-1a58c3f411bf"},
    PlanList: {items:[]}
}

export const getPlanList = createAsyncThunk(
    'getPlanList',
    async (state) => {
        //console.log("GET");
        const response = await axios.get(`http://localhost:5008/api/IndividualPlans/GetByUserId/${state.id}`, {
            id: state.id,
        });
        return response.data;
    }
);
export const addPlan = createAsyncThunk(
    'addPlan',
    async (state) => {
        console.log("Post");
        console.log(state.file);
        const response = await axios.post(`http://localhost:5008/api/IndividualPlans?TeacherId=${state.id}&Name=${state.name}`, state.file);
        console.log("DATA");
        console.log(response.data);
        return response.data;
    }
);
export const deletePlan = createAsyncThunk(
    'deletePlan',
    async (state) => {
        // console.log("DELETE");
        // console.log(state);
        const response = await axios.delete(`http://localhost:5008/api/IndividualPlans/${state}`, {
            id: state
        });
        return response.data;
    }
);
export const putPlan = createAsyncThunk(
    'putPlan',
    async (state) => {
        // console.log("PUT");
        // console.log(state);
        // {id}?TeacherId=4d905ba7-d939-4d3f-95f7-1a58c3f411bf&Name=123ABC
        const response = await axios.put(`http://localhost:5008/api/IndividualPlans/${state.id}?TeacherId=${state.teacherId}&Name=${state.name}`, state.file);
        return response.data;
    }
);

export const planningSlice = createSlice({
    name: 'planning',
    initialState,
    reducers: {
        setPlanList: (state, action) => {
            state.PlanList = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getPlanList.pending, (state) => {
                console.log("loading");
            })
            .addCase(getPlanList.fulfilled, (state, action) => {
                console.log("done");
                state.PlanList=action.payload;
            })
            .addCase(getPlanList.rejected, (state) => {
                console.log("rejected");
            })
            .addCase(addPlan.pending, (state) => {
                console.log("loading");
            })
            .addCase(addPlan.fulfilled, (state, action) => {
                console.log("done");
            })
            .addCase(addPlan.rejected, (state) => {
                console.log("rejected");
            })
            .addCase(deletePlan.pending, (state) => {
                console.log("loading");
            })
            .addCase(deletePlan.fulfilled, (state, action) => {
                console.log("done");
            })
            .addCase(deletePlan.rejected, (state) => {
                console.log("rejected");
            })
            .addCase(putPlan.pending, (state) => {
                console.log("loading");
            })
            .addCase(putPlan.fulfilled, (state, action) => {
                console.log("done");
            })
            .addCase(putPlan.rejected, (state) => {
                console.log("rejected");
            })
    }
});
export const { setPlanList } = planningSlice.actions;
export const selectPlanList = (state) => state.planning.PlanList;
export const selectUser = (state) => state.planning.User;
export default planningSlice.reducer;
import {createSlice} from '@reduxjs/toolkit';

const initialState: any = [];

const dashboardSlice = createSlice({
  name: 'dashbaord',
  initialState,
  reducers: {
    setDashboardHabits: (_state, action) => {
      return action.payload;
    },
  },
});

export const {setDashboardHabits} = dashboardSlice.actions;

export const dashboardHabitsReducer = dashboardSlice.reducer;

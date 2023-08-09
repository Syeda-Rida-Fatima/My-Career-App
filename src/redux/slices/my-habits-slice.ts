import {createSlice} from '@reduxjs/toolkit';

const initialState: any = [];

const myHabitsSlice = createSlice({
  name: 'myHabits',
  initialState,
  reducers: {
    setMyHabits: (_state, action) => {
      return action.payload;
    },
  },
});

export const {setMyHabits} = myHabitsSlice.actions;

export const myHabitsReducer = myHabitsSlice.reducer;

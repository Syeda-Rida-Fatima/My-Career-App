import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';

const initialState = {};

const habitTypesSlice = createSlice({
  name: 'habitType',
  initialState,
  reducers: {
    setHabitTypes: (_state, action) => {
      return action.payload;
    },
  },
});

export const {setHabitTypes} = habitTypesSlice.actions;

export const habitTypesReducer = habitTypesSlice.reducer;

export const selectHabitTypes = (state: RootState) => state.habitTypes;

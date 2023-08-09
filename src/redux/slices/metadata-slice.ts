import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

const initialState: any = {
  labels: {
    quantitative: [],
    proportional: [],
  },
};

const metadataSlice = createSlice({
  name: 'metadata',
  initialState,
  reducers: {
    setLabels(state, action: PayloadAction<any>) {
      state.labels[action.payload.type] = action.payload.data;
    },
  },
});

export const {setLabels} = metadataSlice.actions;

export const metadataReducer = metadataSlice.reducer;

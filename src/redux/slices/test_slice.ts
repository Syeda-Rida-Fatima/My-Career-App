import {createSlice} from '@reduxjs/toolkit';
import {IEntry} from 'src/defs';
import {getEntries} from '../actions/test_actions';

export type IData = {
  count: number;
  entries: IEntry[];
};

export interface TestState {
  data: IData;
  isLoading: boolean;
  isSuccess: boolean;
  errorMessage: string;
}

const initialState: TestState = {
  data: {
    count: 0,
    entries: [],
  },
  isLoading: false,
  isSuccess: false,
  errorMessage: '',
};

export const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getEntries.pending, (state, _action) => {
        state.isLoading = true;
      })
      .addCase(getEntries.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data = action.payload;
      })
      .addCase(getEntries.rejected, state => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = 'failed';
      });
  },
});

export default testSlice.reducer;

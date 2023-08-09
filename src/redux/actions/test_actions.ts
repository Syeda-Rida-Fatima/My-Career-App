// import {createAsyncThunk} from '@reduxjs/toolkit';
// import axios from 'axios';

// export const getEntries = createAsyncThunk(
//   '/getEntries',
//   async (_, {rejectWithValue}) => {
//     try {
//       const {data} = await axios.get(`https://api.publicapis.org/entries`);
//       return data;
//     } catch (error: any) {
//       return rejectWithValue(error.message);
//     }
//   },
// );

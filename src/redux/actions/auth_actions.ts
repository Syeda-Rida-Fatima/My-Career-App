import {createAsyncThunk} from '@reduxjs/toolkit';

import {AUTH} from '../../constants/endpoint/index';
import {RestClient} from '../../network/restclient';
import {ISignInPayload, ISignUpPayload} from '../../defs';

export const signInUserAction = createAsyncThunk<any, ISignInPayload>(
  'login',
  async (payload, {rejectWithValue}) => {
    try {
      const response = await RestClient.post(AUTH.SIGNIN, payload);
      const data = response.data;
      // setup token
      return data;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue(error.message);
    }
  },
);

export const signUpUserAction = createAsyncThunk<any, ISignUpPayload>(
  'register',
  async (payload, {rejectWithValue}) => {
    try {
      const response = await RestClient.post(AUTH.REGISTER, payload);
      const data = response.data;
      return data;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue(error.message);
    }
  },
);

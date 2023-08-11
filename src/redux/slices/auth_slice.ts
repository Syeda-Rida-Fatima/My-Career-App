import {createAction, createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

type User = {
  username: string;
  country?: string;
  city?: string;
  email?: string;
  password?: string;
};

type AuthState = {
  user: User;
  token: string | null;
};

const initialState: AuthState = {
  user: {
    username: '',
  },
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<any>) {
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload.user,
        },
        token: action.payload.token || state.token,
      };
    },
  },
});

export const {setUser} = authSlice.actions;

export const authReducer = authSlice.reducer;

export const signOut = createAction('signOut');

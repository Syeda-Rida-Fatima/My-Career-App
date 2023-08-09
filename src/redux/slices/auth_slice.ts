import {createAction, createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

type username = {
  username: string;
};

type AuthState = {
  username: username;
  token: string | null;
};

const initialState: AuthState = {
  username: {
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
          ...state.username,
          ...action.payload.username,
        },
        token: action.payload.token || state.token,
      };
    },
  },
});

export const {setUser} = authSlice.actions;

export const authReducer = authSlice.reducer;

export const signOut = createAction('signOut');

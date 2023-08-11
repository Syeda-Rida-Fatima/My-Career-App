import {apiSlice} from './base-api';
import {BASE_URL} from '../../constants';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    signIn: builder.mutation<any, any>({
      query: ({username, password}) => ({
        url: `/login/`,
        method: 'POST',
        body: {username, password},
      }),
    }),
    signUp: builder.mutation<any, any>({
      query: ({username, country, city, email, password}) => ({
        url: `/register/`,
        method: 'POST',
        body: {username, country, city, email, password},
      }),
    }),
  }),
});

export const {useSignInMutation, useSignUpMutation} = authApiSlice;

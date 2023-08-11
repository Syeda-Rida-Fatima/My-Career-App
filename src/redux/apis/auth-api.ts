import {ISignInPayload, ISignUpPayload} from '../../defs';
import {apiSlice} from './base-api';
import {BASE_URL} from '../../constants';
export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    signIn: builder.mutation<any, ISignInPayload>({
      query: ({username, password}) => ({
        url: `${BASE_URL}/login`,
        method: 'POST',
        body: {username, password},
      }),
    }),
    signUp: builder.mutation<any, ISignUpPayload>({
      query: ({username, country, city, email, password}) => ({
        url: `${BASE_URL}/register`,
        method: 'POST',
        body: {username, country, city, email, password},
      }),
    }),
  }),
});

export const {useSignInMutation, useSignUpMutation} = authApiSlice;

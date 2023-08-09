import {ISignInPayload, ISignUpPayload} from '../../defs';
import {apiSlice} from './base-api';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    signIn: builder.mutation<any, ISignInPayload>({
      query: ({username, password}) => ({
        url: '/login',
        method: 'POST',
        body: {provider: 'username', username, password},
      }),
    }),
    signUp: builder.mutation<any, ISignUpPayload>({
      query: ({username, password, country, city, email}) => ({
        url: '/register',
        method: 'POST',
        body: {username, password, country, city, email},
      }),
    }),
  }),
});

export const {useSignInMutation, useSignUpMutation} = authApiSlice;

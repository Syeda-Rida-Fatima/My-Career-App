import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {BASE_URL} from '../../constants';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
    prepareHeaders: (headers, {getState}: any) => {
      const token: string | null = getState().auth.token;
      if (token) {
        headers.set('Authorization', `token  ${token}`);
      }
      return headers;
    },
  }),

  endpoints: () => ({}),
});

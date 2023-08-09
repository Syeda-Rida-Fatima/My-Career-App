import {apiSlice} from './base-api';

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    updateUser: builder.mutation<any, any>({
      query: ({uuid, userData}) => {
        return {
          url: `/user?uuid=${uuid}`,
          method: 'PUT',
          body: userData,
        };
      },
    }),
    deleteUser: builder.mutation<any, any>({
      query: ({uuid, userData}) => ({
        url: `/user?uuid=${uuid}`,
        method: 'DELETE',
        body: userData,
      }),
    }),
  }),
});

export const {useUpdateUserMutation, useDeleteUserMutation} = userApiSlice;

import {apiSlice} from './base-api';

export const habitApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getLabels: builder.query<any, any>({
      query: type => ({
        url: `/metas?type=${type}`,
        method: 'GET',
      }),
      providesTags: ['Metadata'],
    }),
    createLabel: builder.mutation<any, any>({
      query: payload => ({
        url: `/meta`,
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['Metadata'],
    }),
  }),
});

export const {useGetLabelsQuery, useCreateLabelMutation} = habitApiSlice;

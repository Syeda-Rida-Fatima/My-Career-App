import {apiSlice} from './base-api';

export const habitApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getHabitsTypes: builder.query<any, void>({
      query: () => ({
        url: '/catalog',
        method: 'GET',
      }),
    }),
    getHabits: builder.query<any, any>({
      query: (date: any) => ({
        url: date ? `/dashboard?date=${date}` : '/dashboard',
        method: 'GET',
      }),
      providesTags: ['Habits'],
      transformResponse: (response: any) => {
        const transformedResponse = response?.list
          ? {
              ...response,
              list: [...response?.list.reverse()],
            }
          : {list: [], progress: 0};

        return transformedResponse;
      },
    }),

    createHabit: builder.mutation<any, any>({
      query: habit => ({
        url: '/habit',
        method: 'POST',
        body: habit,
      }),
      invalidatesTags: ['Habits'],
    }),

    updateHabit: builder.mutation<any, any>({
      query: payload => ({
        url: '/habit/update',
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['Habits'],
    }),
    trackHabits: builder.mutation({
      query: () => ({
        url: '/track',
        method: 'POST',
      }),
      invalidatesTags: ['Habits'],
    }),
    recordHabit: builder.mutation<any, any>({
      query: payload => ({
        url: `/track?uuid=${payload.id}`,
        method: 'PUT',
        body: payload.data,
      }),
      invalidatesTags: ['Habits'],
    }),
    getMyHabits: builder.query<any, void>({
      query: () => ({
        url: '/habits',
        method: 'GET',
      }),
      providesTags: ['MyHabits'],
    }),
    getMyHabit: builder.query<any, any>({
      query: uuid => ({
        url: `/habit?uuid=${uuid}`,
        method: 'GET',
      }),
    }),
    updateMyHabit: builder.mutation<any, any>({
      query: payload => {
        console.log({payload});
        return {
          url: `/habit?uuid=${payload.uuid}`,
          method: 'PUT',
          body: payload.data,
        };
      },
    }),
    deleteMyHabit: builder.mutation<any, any>({
      query: uuid => ({
        url: `/habit?uuid=${uuid}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['MyHabits'],
    }),
  }),
});

export const {
  useGetHabitsQuery,
  useGetMyHabitsQuery,
  useGetHabitsTypesQuery,
  useCreateHabitMutation,
  useUpdateHabitMutation,
  useTrackHabitsMutation,
  useRecordHabitMutation,
  useDeleteMyHabitMutation,
  useUpdateMyHabitMutation,
  useGetMyHabitQuery,
} = habitApiSlice;

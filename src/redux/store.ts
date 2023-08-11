import {configureStore} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import {AnyAction, combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {apiSlice} from './apis/base-api';

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
};

const reducers = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const rootReducer: any = (state: RootState, action: AnyAction) => {
  if (action.type === 'signOut') {
    AsyncStorage.removeItem('persist:root');
    state = {} as RootState;
  }
  return persistedReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(apiSlice.middleware),
  devTools: true,
});
export const persistor = persistStore(store);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

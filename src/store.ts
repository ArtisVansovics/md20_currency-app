import { configureStore } from '@reduxjs/toolkit';
import currencyApi from './store/api/currencyApi';

const store = configureStore({
  middleware: ((getDefaultMiddleware) => (
    getDefaultMiddleware().concat(currencyApi.middleware))),
  reducer: {
    [currencyApi.reducerPath]: currencyApi.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;

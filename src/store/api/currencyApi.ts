import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const currencyApi = createApi({
  reducerPath: 'currencyApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/' }),
  endpoints: (builder) => ({
    getAllCurrencies: builder.query<any, void>({
      query: () => 'currencies.json',
    }),
  }),
});

export const {
  useGetAllCurrenciesQuery,
} = currencyApi;

export default currencyApi;
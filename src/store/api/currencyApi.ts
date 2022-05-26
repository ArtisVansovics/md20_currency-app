import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const currencyApi = createApi({
  reducerPath: 'currencyApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/' }),
  endpoints: (builder) => ({
    getAllCurrencies: builder.query<any, void>({
      query: () => 'currencies.json',
    }),
    getCurrencyByCode: builder.query<any, string>({
      query: (code) => `currencies/${code}.json`,
    }),
    getExchangeRate: builder.query<any, string[]>({
      query: (arr) => `currencies/${arr[0]}/${arr[1]}.json`,
    }),
  }),
});

export const {
  useGetAllCurrenciesQuery, useGetCurrencyByCodeQuery, useGetExchangeRateQuery,
} = currencyApi;

export default currencyApi;

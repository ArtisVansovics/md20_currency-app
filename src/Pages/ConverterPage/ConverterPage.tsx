import React from 'react';
import { useGetAllCurrenciesQuery } from '../../store/api/currencyApi';
import Converter from '../../components/Converter/Converter';
import Loader from '../../components/Loader/Loader';

const ConverterPage = () => {
  const { data, isLoading } = useGetAllCurrenciesQuery();

  return (
    <div className="page">
      <div className="container width-max">
        <div className="row center-xs">
          <div className="col-xs-12 col-sm-10 col-md-8">
            <div className="box">
              <h1 className="page__title">Currency Converter</h1>
              {isLoading && <Loader />}
              <Converter codes={data && Object.entries(data).map((code) => code[0].toUpperCase())} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConverterPage;

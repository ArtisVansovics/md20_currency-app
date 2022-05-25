import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import { useGetAllCurrenciesQuery } from '../../store/api/currencyApi';
import Loader from '../../components/Loader/Loader';
import CurrencyCard from '../../components/CurrencyCard/CurrencyCard';

const HomePage = () => {
  const { data, isLoading } = useGetAllCurrenciesQuery();
  const navigate = useNavigate();

  return (
    <div className="page">
      <div className="container width-max">
        <div className="row">
          <div className="col-xs-12">
            <div className="box">
              <h1 className="page__title">
                All Available Currencies
              </h1>
              {isLoading && <Loader />}
              <div className="grid-auto">
                {data && Object.entries(data).map((currency) => (
                  <CurrencyCard
                    code={currency[0]}
                    name={String(currency[1])}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetCurrencyByCodeQuery } from '../../store/api/currencyApi';
import Loader from '../../components/Loader/Loader';
import CurrencyBox from '../../components/CurrencyBox/CurrencyBox';

const CurrencyPage = () => {
  const { code } = useParams();
  const { data, isLoading } = useGetCurrencyByCodeQuery(String(code));

  return (
    <div className="page">
      <div className="container width-max">
        <div className="row">
          <div className="col-xs-12">
            <div className="box">
              <h1 className="page__title">{code && code.toUpperCase()}</h1>
              {isLoading && <Loader />}
              <div className="grid-auto grid-auto--narrow">
                {data && Object.entries(data[String(code)]).map((currency) => (
                  <CurrencyBox
                    key={currency[0]}
                    code={currency[0]}
                    value={Number(currency[1])}
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

export default CurrencyPage;

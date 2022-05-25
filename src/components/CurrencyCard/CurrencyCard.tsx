import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CurrencyCard.module.scss';
import Button from '../Button/Button';

type CurrencyCardProps = {
  code: string;
  name: string;
}

const CurrencyCard = ({ code, name }: CurrencyCardProps) => {
  const navigate = useNavigate();

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>
        {name}
      </h2>
      <h3 className={styles.code}>
        {`Code: ${code.toUpperCase()}`}
      </h3>
      <Button
        title="See Rates"
        onClick={() => navigate(`/currencies/${code}`)}
      />
    </div>
  );
};
export default CurrencyCard;

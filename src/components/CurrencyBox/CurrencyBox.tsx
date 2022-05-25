import React from 'react';
import styles from './CurrencyBox.module.scss';

type CurrencyBoxProps = {
  code: string;
  value: number;
}

const CurrencyBox = ({ code, value }: CurrencyBoxProps) => (
  <div className={styles.box}>
    <div className={`${styles.cell} ${styles.left}`}>
      {code.toUpperCase()}
    </div>
    <div className={styles.cell}>
      {value.toFixed(4)}
    </div>
  </div>
);

export default CurrencyBox;

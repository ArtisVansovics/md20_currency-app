import React, { useState } from 'react';
import styles from './Converter.module.scss';
import { useGetExchangeRateQuery } from '../../store/api/currencyApi';

type ConverterProps = {
  codes: string[];
}

const Converter = ({ codes }: ConverterProps) => {
  const [codeOne, setCodeOne] = useState('');
  const [codeTwo, setCodeTwo] = useState('');
  const [inputValue, setInputValue] = useState(1);
  const codeArr = [codeOne, codeTwo];
  const { data } = useGetExchangeRateQuery(codeArr);

  return (
    <div className={styles.box}>
      <label htmlFor="oneId" className={styles.label}>
        From:
        <select
          className={styles.select}
          id="oneId"
          value={codeOne}
          onChange={(e) => (
            setCodeOne(e.target.value))}
        >
          <option
            disabled
            label="Select currency"
          />
          {codes && codes.map((code) => (
            <option
              key={code}
              value={code}
            >
              {code.toUpperCase()}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="twoId" className={styles.label}>
        To:
        <select
          className={styles.select}
          id="twoId"
          value={codeTwo}
          onChange={(e) => (
            setCodeTwo(e.target.value))}
        >
          <option
            disabled
            label="Select currency"
          />
          {codes && codes.map((code) => (
            <option
              key={code}
              value={code}
            >
              {code.toUpperCase()}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="inputId" className={styles.label}>
        Amount:
        <input
          className={styles.input}
          type="number"
          id="inputId"
          min="0"
          value={inputValue}
          onChange={(e) => setInputValue(Number(e.target.value))}
        />
      </label>
      <p>
        {`Result: ${data
          ? (Number(data[codeTwo]) * inputValue).toFixed(2)
          : 'Please select the currencies'}`}
      </p>
    </div>
  );
};

export default Converter;

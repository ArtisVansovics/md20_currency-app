import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

const getActiveClassName = (isActive: boolean) => (
  isActive ? `${styles.nav__link} ${styles['nav__link--active']}` : `${styles.nav__link}`
);

const Header = () => (
  <header className={styles.header}>
    <nav className={styles.nav}>
      <NavLink
        className={({ isActive }) => getActiveClassName(isActive)}
        to="/"
      >
        All currencies
      </NavLink>
      <NavLink
        className={({ isActive }) => getActiveClassName(isActive)}
        to="/currencies/converter"
      >
        Currency Converter
      </NavLink>
    </nav>
  </header>
);

export default Header;

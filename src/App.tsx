import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router, Route, Routes, Navigate,
} from 'react-router-dom';
import Header from './components/Header/Header';
import Page404 from './Pages/404/Page404';
import HomePage from './Pages/Home/HomePage';
import CurrencyPage from './Pages/CurrencyPage/CurrencyPage';
import ConverterPage from './Pages/ConverterPage/ConverterPage';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route
        path="/"
        element={<HomePage />}
      />
      <Route
        path="/home"
        element={<HomePage />}
      />
      <Route
        path="/currencies"
        element={<HomePage />}
      />
      <Route
        path="/currencies/:code"
        element={<CurrencyPage />}
      />
      <Route
        path="/currencies/converter"
        element={<ConverterPage />}
      />
      <Route
        path="404"
        element={<Page404 />}
      />
      <Route
        path="*"
        element={<Navigate to="/404" />}
      />
    </Routes>
  </Router>
);

export default App;

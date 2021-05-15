import React from 'react';
import ReactDOM from 'react-dom';
import { Reset } from 'styled-reset';
import App from './App';
import HomePage from './components/HomePage/HomePage';
import { MainWrapper } from './components/MainWrapper/MainWrapper';

ReactDOM.render(
  <>
    <Reset />
    <MainWrapper />
  </>,
  document.getElementById('root')
);

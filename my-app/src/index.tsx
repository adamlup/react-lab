import React from 'react';
import ReactDOM from 'react-dom';
import { Reset } from 'styled-reset';

import HomePage from './components/HomePage/HomePage';

ReactDOM.render(
  <>
    <Reset />
    <HomePage />
  </>,
  document.getElementById('root')
);

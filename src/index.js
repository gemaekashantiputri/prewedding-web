import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from "axios";
import '../src/styles/main.css';
import '../src/styles/sign.css';
import '../src/styles/font-awesome.min.css';
import '../src/styles/bootstrap.min.css';
import '../src/styles/bootstrap-theme.css';
import '../src/styles/card.css';
axios.defaults.withCredentials = true;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


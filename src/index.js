import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
  <React.Fragment>
    <App className="App"/>
  </React.Fragment>
  </BrowserRouter>,
  document.getElementById('root')
);
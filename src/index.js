/**
 * @description: 
 * @author: ycz
 * @Date: 2020-06-10 20:14:03
 * @LastEditTime: 2020-07-15 11:01:39
 * @LastEditors: ycz
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './routers';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';

// import Home from './pages/Home' import News from './pages/News' import Course
// from './pages/Course' import JoinUs from './pages/JoinUs' 绑定根组件
// 引入了App文件给根组件使用
ReactDOM.render( < App / > , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls. Learn
// more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
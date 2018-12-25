/*eslint-disable*/
function test() {
    return true
};

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

// eslint-disable-next-line
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';


import Home from './pages/Home/Home';
import News from './pages/News/News'; 
import Course from './pages/Course/Course'; 
import JoinUs from './pages/JoinUs/JoinUs';
import Login from './pages/Login/Login';

const App = () => (
    <Router>
        <div>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/login" component={Login}/>
              <Route path="/news" component={News}/>
              <Route path="/news/:id" component={NewsDetail}/>
              <Route path="/course" component={Course}/>
              <Route path="/joinUs" render={(props) => <JoinUs {...props}/>}/>
              <Route path="/error" render={(props) => <div><h1>404 Not Found!</h1></div>}/>
              <Route path="*" render={(props) => <Redirect to='/error'/>}/>
            </Switch>
        </div>
    </Router>
)

// 绑定根组件
// 引入了App文件给根组件使用
ReactDOM.render( <App/> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls. Learn
// more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
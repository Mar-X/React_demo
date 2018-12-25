import React, { Component } from 'react';
import {
	Route,
	NavLink
} from 'react-router-dom';
import './Course.css';

class Course extends Component {
    render() {
        let { match } = this.props;
        return(
            <div className="list">
                <Header />
                <NavLink to={`${match.url}/front-end`}>前端技术</NavLink>
                <NavLink to={`${match.url}/big-data`}>大数据</NavLink>
                <NavLink to={`${match.url}/algorithm`}>算法</NavLink>

                <Route path={`${match.path}/:name`} render={(props) => <div>{props.match.params.name}</div>}/>
            </div>  
        ) 
    }
}

export default course;

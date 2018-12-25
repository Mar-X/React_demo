import React, { Component } from 'react'
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from 'react-router-dom'

import './Home.css';

import Header from '../../components/Header/Header'

const home = (props) => {
	return (
		<div className="home">
			<Header />	
			<div> 首页 </div>
			<p className="bgclass" onClick={props.myHomeType}>
				我的名字叫 {props.name}, 年纪有 {props.num}岁
			</p>
			{/*children展示父组件给子组件传递的标签内值*/}
			<span>{props.children} </span>
		</div>
	);
};

export default home;

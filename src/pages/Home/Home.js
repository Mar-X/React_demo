import React from 'react';
import './Home.css';

const home = (props) => {
	return (
		<div>
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

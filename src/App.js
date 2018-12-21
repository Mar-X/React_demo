import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

// 每次引入要加./在src当前文件下开始查找
import Home from './pages/Home/Home';

// 创建App继承Component中的属性
//注意：1、jsx语法中，有且只有一个容器
//2、jsx语法的注释为 {/*注释*/}
class App extends Component {
	// state使用管理状态，但只能在继承了Component的下面使用
	state = {
		Homes: [
			{ id: 1, name: '大王', num: '52' },
			{ id: 2, name: '小王', num: '48' },
			{ id: 3, name: '大鬼', num: '886' },
			{ id: 4, name: '小鬼', num: '666' }
		],
		addHomes: { id: '', name: '', num: '' },
		otherState: '双王争霸',
		showHome: false
	};

	// 传递事件
	stateType = (name) => {
		//ES6中this指向就近的函数，而ES5中的this指向window
		this.setState({
			Homes: [ { name: name, num: '66' }, { name: '狮子', num: '88' } ],
			otherState: '动物争霸'
		});
	};

	// 显示隐藏功能
	showHomeType = () => {
		let type = this.state.showHome;
		console.log(type);
		this.setState({
			showHome: !type
		});
	};

	// 删除功能
	HomesDel = (i) => {
		// let Homes =this.state.Homes
		let Homes = [ ...this.state.Homes ];
		Homes.splice(i, 1);
		this.setState({
			Homes: Homes
		});
	};

	// 添加数组
	addHomeValue = (val, leng) => {
		var add = this.state.addHomes;
		//  {id:1,name:'大王',num:'52'},
		if (leng === 1) add.id = val.target.value;
		if (leng === 2) add.name = val.target.value;
		if (leng === 3) add.num = val.target.value;
	};
	// 判断对象中是否值为空
	removeProperty = (object) => {
		let flag = true;
		for (var key in object) {
			// console.log(object[key])
			if (object[key] !== '0' && !object[key]) {
				return false;
			}
		}
		return flag;
	};
	addHomeList = (val) => {
		let type = this.removeProperty(this.state.addHomes);
		// console.log(this.state.addHomes,type)
		if (type) {
			this.state.Homes.push(this.state.addHomes);
			this.setState({
				Homes: this.state.Homes
			});
		}
	};

	// 修改功能
	HomeChenge = (event, id) => {
		// 找到当前需要修改的索引
		const HomeIndex = this.state.Homes.findIndex((val) => {
			return val.id === id;
		});

		// 找到当前修改的对象
		const thisHome = {
			...this.state.Homes[HomeIndex]
		};

		// 给当前需要修改的对象属性赋值
		// event.target.value为input取到的值
		thisHome.name = event.target.value;

		// 找到原型数组
		const Homes = [ ...this.state.Homes ];

		console.log(Homes);
		// 给原型数组添加修改的对象
		Homes[HomeIndex] = thisHome;

		// 将修改好的数组从新更改给state
		this.setState({
			Homes: Homes
		});
	};

	render() {
		const style = {
			border: '1px solid #000'
		};

		let textColor;
		if (this.state.showHome) {
			// textColor.push('color_red')
			textColor = 'color_red';
		} else {
			// textColor.push('color_blue')
			textColor = 'color_blue';
		}

		console.log(textColor);

		const classs = [];
		if (this.state.Homes.length <= 2) {
			classs.push('color_blue');
		}

		if (this.state.Homes.length <= 3) {
			classs.push('color_red');
		}

		console.log(classs);

		let DomShow = null;
		if (this.state.showHome) {
			DomShow = (
				<div className="boxBottom" style={style}>
					<Home name={this.state.Homes[0].name} num={this.state.Homes[0].num} />
					<Home
						myHomeType={this.stateType.bind(this, 'miss')}
						name={this.state.Homes[1].name}
						num={this.state.Homes[1].num}
					>
						{this.state.otherState}
					</Home>
				</div>
			);
		}

		return (
			<div className="App">
				<h1 className={classs.join(' ')}>我是动态样式</h1>
				<button onClick={this.stateType.bind(this, '啦啦')}>变身1</button>
				<button onClick={() => this.stateType('哈哈')}>变身2</button>
				<button className={textColor} onClick={() => this.showHomeType()}>
					切换状态
				</button>
				<div>
					<input type="text" onChange={(event) => this.addHomeValue(event, 1)} />
					<input type="text" onChange={(event) => this.addHomeValue(event, 2)} />
					<input type="text" onChange={(event) => this.addHomeValue(event, 3)} />
					<button onClick={() => this.addHomeList()}>添加</button>
				</div>
				{DomShow}

				{this.state.Homes.map((val, index) => {
					return (
						<div key={val.id}>
							<p>这是一个循环里面的值：{val.name}</p>
							修改<input type="text" onChange={(event) => this.HomeChenge(event, val.id)} />
							删除<i onClick={() => this.HomesDel(index)}>【X】</i>
							<br />
							<span>===============================</span>
						</div>
					);
				})}

				{/*{
           this.state.showHome ?
           <div className="boxBottom" style={style}>
            <Home 
                name={this.state.Homes[0].name} 
                num={this.state.Homes[0].num}
                />   		
            <Home
                myHomeType={this.stateType.bind(this,'miss')} 
                name={this.state.Homes[1].name} 
                num={this.state.Homes[1].num}
                >{this.state.otherState}</Home>	
            </div>
            : null
         }*/}
			</div>
		);
	}
}

// 导出APP
export default App;

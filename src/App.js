import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

// 每次引入要加./在src当前文件下开始查找
import Home from './Home/Home'


// 创建App继承Component中的属性
 //注意：1、jsx语法中，有且只有一个容器
	    //2、jsx语法的注释为 {/*注释*/}
class App extends Component {

  // state使用管理状态，但只能在继承了Component的下面使用
  state = {
      Homes:[
        {name:'大王',num:'52'},
        {name:'小王',num:'48'},
      ],
      otherState:'双王争霸'
  }

  stateType= (name) =>{
      //ES6中this指向就近的函数，而ES5中的this指向window
      this.setState({
         Homes:[
          {name:name,num:'66'},
          {name:'狮子',num:'88'},
        ],
        otherState:'动物争霸'
      })
  }

  render() {
    return (
      <div className="App">

         <button onClick={this.stateType.bind(this,'啦啦')}>变身1</button>
         <button onClick={()=>this.stateType('哈哈')}>变身2</button>

           {/*给组件中加入属性或者标签内加入值给组件传递数据*/}
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
    );
  }
}

// 导出APP
export default App;

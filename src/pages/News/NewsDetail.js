import React, { Component } from 'react'
import Header from '../../components/Header/Header'

class NewsDetail extends Component {
    constructor(props) {
        super(props)
        this.data = props.location.state.data; //获取父组件传递过来的数据
    }

    render() {
        return(
            <div className="news">
                <Header />
                <h1>{this.data.title}</h1>
                <p>{this.data.content}</p>
            </div>  
        ) 
    }
}

export default NewsDetail

import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Card, Button } from 'antd';
export default class Thanks extends Component{
    handler(){
        window.location.href='/#/Cart';
    }
    render(){
        return(
            <div>
                <div className="Cards-head">
        <p className="parse">Do you want to continue?</p></div>
        <Button type="primary" onClick={this.handler.bind(this)}>返回购物车</Button>
        </div>
        )
    }
}
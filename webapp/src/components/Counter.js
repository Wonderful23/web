import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Card, Button, Avatar, Alert } from 'antd';
import Item from 'antd/lib/list/Item';
const onClose = (e) => {
  console.log(e, 'I was closed.');
};
function Add() {
    var temp = ++this.state.counter;
    console.log(temp);
    this.setState({count:temp});
}
function Sub() {
    var temp = --this.state.counter;
    if(temp<0){
        temp = 0;
        this.setState({counter:temp});
        alert("The number is negative");
    }
    else{
        this.setState({counter:temp});
    }
}
export default class Counter extends Component{
    constructor(props){
        super(props);
        this.state={
            counter:1
        }
    }
    render(){
        return(
            <div>
                <Button type="primary"onClick={()=>{Add.call(this)}}>+</Button>
                &nbsp;&nbsp;&nbsp;{this.state.counter}&nbsp;&nbsp;&nbsp;
                <Button type="primary" onClick={()=>{Sub.call(this)}}>-</Button>
            </div>
        );
    }
} 

import { Table, Button,Layout, Menu, Icon,Carousel, Drawer,  Radio } from 'antd';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Counter from'./Counter'
import {Link,HashRouter} from'react-router-dom'
import Item from 'antd/lib/list/Item';
import {Router,Route} from'react-router';
import DrawerDetail from'./drawer';
import axios from 'axios';
axios.defaults.withCredentials = true;
const { Header, Sider, Content,Footer } = Layout;
function onChange(a, b, c) {
  console.log(a, b, c);
}
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

export default class Detail extends Component{
    constructor(props){
        super(props);
        this.state={
            bookdetail:this.props.detail,
            counter:1
        }  
    }
    handler(){
        console.log(this.state.bookdetail.key);
		axios.get("http://localhost:8080/inputcart",{params:{k:this.state.bookdetail.key,c:this.state.counter}}).then((response)=>{
             console.log(response.data);
             if(response.data == 2){
                console.log("Ok input cart success!");
                alert("Input Cart Success!");
            }
            
             if(response.data == 1){
                 alert("Your number is above the stock number!");
             }
             if(response.data == 100){
                alert("Pleas login firstly!");
                return;
            }
            
      }).catch(function(error){
        console.log(error);
      })
	}
    render(){
        console.log(this.props.detail)
        return(
            <div>
            <div>
            <Layout style={{marginTop:"5%",marginLeft:"10%",marginRight:"10%"}}>
                <Sider style={{backgroundColor:"#f0f2f5"}}><img height="150" width="100"src={this.props.detail.src}/></Sider>
                <Layout>
                    <Header style={{backgroundColor:"#f0f2f5"}}><p>The title of book: <b>{this.props.detail.Name}</b></p></Header>
                    <Content><p>Author: <b>{this.props.detail.Author}</b></p></Content>
                    <Content><p>Price: <b>{this.props.detail.price} $</b></p></Content>
                    <Content><p>Stock Number: <b>{this.props.detail.number} </b></p></Content>
                    <Footer>
                        <div className="footer">
                            <div className="left">
                            <div>
                                <Button type="primary"onClick={()=>{Add.call(this)}}>+</Button>
                                    &nbsp;&nbsp;&nbsp;{this.state.counter}&nbsp;&nbsp;&nbsp;
                                <Button type="primary" onClick={()=>{Sub.call(this)}}>-</Button>
                            </div>
                            </div>
                            <div className="right">
                            <Button onClick={this.handler.bind(this)} type="primary">加入购物车</Button>
                            </div>
                        </div>
                    </Footer>
                </Layout>
            </Layout>
            </div>
            <div style={{marginTop:"5%",marginLeft:"10%",marginRight:"10%"}}>
            <DrawerDetail/>
            </div>
            </div>
        );
    }
}
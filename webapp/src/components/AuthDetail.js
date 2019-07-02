import { Table, Button,Layout, Input } from 'antd';
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

export default class AuthDetail extends Component{
    constructor(props){
        super(props);
        this.state={
            bookdetail:this.props.detail,
            counter:1
        }  
    }
    handler(){
        var isbn = document.getElementsByName("isbn")["0"].value;
        var src = document.getElementsByName("src")["0"].value;
        var bookname = document.getElementsByName("bookname")["0"].value;
        var author = document.getElementsByName("author")["0"].value;
        var price = document.getElementsByName("price")["0"].value;
        var number = document.getElementsByName("number")["0"].value;
        var k = this.props.detail.key;
        console.log(k);
        console.log(isbn);
        console.log(src);
        console.log(bookname);
        console.log(author);
        console.log(price);
        console.log(number);
		axios.get("http://localhost:8080/change",{params:{k:k,isbn:isbn,src:src,bookname:bookname,author:author,price:price,number:number}}).then((response)=>{
             console.log(response.data);
             if(response.data == 1){
                 alert("Success!");
                window.location.href='/#/Userlist';
             }
             else{
                 alert("Error!");
                 window.location.href='/#/Userlist'

             }
            
      }).catch(function(error){
        console.log(error);
      })
    }
    handler1(){
        var k = this.props.detail.key;
		axios.get("http://localhost:8080/deleteDetails",{params:{k:k}}).then((response)=>{
             console.log(response.data);
             if(response.data == 1){
                 alert("Success!");
                window.location.href='/#/Userlist';
             }
             else{
                 alert("Error!");
                 window.location.href='/#/Userlist'

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
                <Sider style={{backgroundColor:"#f0f2f5"}}><img height="300" width="200"src={this.props.detail.src}/></Sider>
                <Layout>
                    <Header style={{backgroundColor:"#f0f2f5"}}><p>The title of book: <b>{this.props.detail.Name}</b></p></Header>
                    <Content><p>Author: <b>{this.props.detail.Author}</b></p></Content>
                    <Content><p>ISBN: <b>{this.props.detail.isbn} </b></p></Content>
                    <Content><p>Price: <b>{this.props.detail.price} $</b></p></Content>
                    <Content><p>Stock Number: <b>{this.props.detail.number} </b></p></Content>
                    <Footer>
                    </Footer>
                </Layout>
            </Layout>
            </div>
            <div style={{marginTop:"5%",marginLeft:"10%",marginRight:"10%"}}>
            ISBN:<Input name="isbn"placeholder="Basic usage" />
            Picture:<Input name="src"placeholder="Basic usage" />
            BookName:<Input name="bookname"placeholder="Basic usage" />
            Author:<Input name="author"placeholder="Basic usage" />
            Price:<Input name="price"placeholder="Basic usage" />
            StockNumber:<Input name="number"placeholder="Basic usage" />
            <div className="cards-header">
            <Button type="primary" onClick={this.handler.bind(this)}>修改</Button>
            <Button type="primary" onClick={this.handler1.bind(this)}>删除</Button>
            </div>
            </div>
            </div>
        );
    }
}
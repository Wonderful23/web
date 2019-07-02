import { Table, Button,Layout, Input } from 'antd';
import React,{Component} from 'react';
import axios from 'axios';
axios.defaults.withCredentials = true;
const { Header, Sider, Content,Footer } = Layout;
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
        console.log(isbn);
        console.log(src);
        console.log(bookname);
        console.log(author);
        console.log(price);
        console.log(number);
		axios.get("http://localhost:8080/addDetails",{params:{isbn:isbn,src:src,bookname:bookname,author:author,price:price,number:number}}).then((response)=>{
             console.log(response.data);
             if(response.data == 1){
                 alert("Success!");
                window.location.href='/#/Userlist';
             }
             else{
                 alert("Error!");
                 window.location.href='/#/Userlist';

             }
            
      }).catch(function(error){
        console.log(error);
      })
    }
    render(){
        console.log(this.props.detail)
        return(
            <div>
            <div style={{marginTop:"5%",marginLeft:"10%",marginRight:"10%"}}>
            ISBN:<Input name="isbn"placeholder="Basic usage" />
            Picture:<Input name="src"placeholder="Basic usage" />
            BookName:<Input name="bookname"placeholder="Basic usage" />
            Author:<Input name="author"placeholder="Basic usage" />
            Price:<Input name="price"placeholder="Basic usage" />
            StockNumber:<Input name="number"placeholder="Basic usage" />
            <Button type="primary" onClick={this.handler.bind(this)}>添加</Button>
            </div>
            </div>
        );
    }
}
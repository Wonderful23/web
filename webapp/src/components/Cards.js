import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Card, Button, Avatar,Input } from 'antd';
import Book from'./Book';
import axios from 'axios';
import Item from 'antd/lib/list/Item';
var Data = [];
const { Meta } = Card;
const Search = Input.Search;
const gridStyle = {
  width: '25%',
  textAlign: 'center',
};
export default class Cards extends Component{
    constructor(props) {
        super(props);
        this.state={
          data:Data,
          title:"sort",
          value:""
        }  
    }
    componentWillMount(){
      axios.get("http://localhost:8080/allBooks").then((response)=>{
        this.setState({data:response.data});
        Data = response.data;
      }).catch(function(error){
        console.log(error);
      })
    }
    inc() {
      var temp = this.state.data.slice();
     // console.log(temp);
      temp.sort(function(a, b) {
        return (a.price<b.price ? -1 : 1);
      });
      //console.log(temp);
      this.setState(() => {
        return { data: temp,
                 title:"递增" }
      })
      console.log(this.state.data);
    }
    dec() {
      var temp = this.state.data.slice();
     // console.log(temp);
      temp.sort(function(a, b) {
        return (a.price<b.price ? 1 : -1);
      });
      //console.log(temp);
      this.setState(() => {
        return { data: temp,
                 title:"递减" }
      })
    }
    handleClick=(value)=>{
      var needle = value.toLowerCase();
      if(value){
      var searchdata = this.state.data.filter((item)=> {
        return item.Name.toString().toLowerCase().indexOf(needle) > -1;
      });
      this.setState({
        data:searchdata,
        value:value})
      }
    }
    First(){
      this.setState({data:Data})
    }
    render(){
      return(
        <div className="Cards-head">
        <p className="parse">Welcome to E-Book</p>
        <div className="cards-header">
        <Button className="cards-header-left" onClick={this.First.bind(this)} >首页</Button>
        <Button className="cards-header-left" onClick={this.inc.bind(this)} >递增</Button>
        <Button className="cards-header-left" onClick={this.dec.bind(this)} >递减</Button>
        </div>
        <Search className="cards-header-search"
      placeholder="书名"
      enterButton="Search"
      size="large"
      onSearch={(value)=>this.handleClick(value)}
    />
        <Card 
        title={<div><p className="inner"><span>书籍列表</span></p></div>}>
            {this.state.data.map((item,key)=>{
              return<Book key={key} detail={item}/>})}
        </Card>
        </div>
      );
    }
}
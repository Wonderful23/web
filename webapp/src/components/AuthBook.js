import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Card, Button, Avatar } from 'antd';
import {Router,Route} from'react-router'
import {Link,HashRouter} from'react-router-dom'
import Item from 'antd/lib/list/Item';
import axios from 'axios';
axios.defaults.withCredentials = true;
var Data = [{Name:"The Lord of the Rings",Author:"J. R. R. Tolkien",price:"43 $",src:"https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"}];
const { Meta } = Card;
const gridStyle = {
  width: '25%',
  textAlign: 'center',
};
export default class AuthBook extends Component{
  constructor(props) {
      super(props);
      this.state={
          detail:this.props.detail
      }  
  }
  handler(){
    var api="localhost:8080/details";
    axios.get(api).then((response)=>{
      console.log(response.data);
    }).catch(function(error){
      console.log(error);
    })
  }
  render(){
    console.log(this.props.detail);
    return(
      <Card.Grid style={gridStyle}>
      <Card
          hoverable={true}
          style={{ width: 300 }}
          cover={<img alt="example"height="150" width="100" src={this.props.detail.src} />}
          actions={[<Button type="submit" shape="round" size={'large'}name="key" value={this.props.detail.key}><Link to={{pathname:"/AuthDetail",state:{detail:this.props.detail}}}>书籍详细信息</Link></Button>]}
      >
      <Meta
          title={this.props.detail.Name}
          description={<div><p><b>Author: {this.props.detail.Author}</b></p>
          <p><b>ISBN: {this.props.detail.isbn}</b></p>
                <p><b>Price: {this.props.detail.price}$</b></p>
                <p><b>Stock Number: {this.props.detail.number}</b></p></div>}
      />
      </Card>
     </Card.Grid>
    );
  }
}

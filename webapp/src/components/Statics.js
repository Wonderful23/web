import { Table, Button,DatePicker,Input } from 'antd';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Counter from'./Counter'
import Item from 'antd/lib/list/Item';
import axios from 'axios';
var tempDataSource = [];
var tempDataSource1 = [];
var DataSource=[];
var DataSource1=[];
var start;
var end;
var start1;
var end1;
const Search = Input.Search;
const { RangePicker } = DatePicker;
function onOk(value) {
    start = value[0].format("YYYY-MM-DD");
    end = value[1].format("YYYY-MM-DD");
    console.log(start);
    console.log(end);
}
function onOk1(value) {
    start1 = value[0].format("YYYY-MM-DD");
    end1 = value[1].format("YYYY-MM-DD");
    console.log(start1);
    console.log(end1);
}
const columns = [{
    title: 'username',
    dataIndex: 'username',
    key: 'username',
  }, 
  {
    title: 'total $',
    dataIndex: 'consumer',
    key: 'consumer',
  }];
  const columns1 = [{
    title: 'bookname',
    dataIndex: 'bookname',
    key: 'bookname',
  }, 
  {
    title: 'number ',
    dataIndex: 'consumer',
    key: 'consumer',
  }];    
export default class Statics extends React.Component{
    constructor(props){
        super(props);
        this.state={
            columns:columns,
            columns1:columns1,
            dataSource:DataSource,
            start:"",
            end:"",
            value:"",
            dataSource1:DataSource1
        }  
    }
    refresh(){
        axios.get("http://localhost:8080/statisticsmoney",{params:{startTime:"2010-01-01",endTime:"2020-02-02"}}).then((response)=>{
          tempDataSource = response.data;
          DataSource = response.data;
          this.setState({dataSource:response.data});
          console.log(response);
        }).catch(function(error){
          console.log(error);
        })
    }
    refresh1(){
        axios.get("http://localhost:8080/statisticsnumber",{params:{startTime:"2010-01-01",endTime:"2020-02-02"}}).then((response)=>{
          tempDataSource1 = response.data;
          DataSource1 = response.data;
          this.setState({dataSource1:response.data});
          console.log(response);
        }).catch(function(error){
          console.log(error);
        })
    }
    handler(){
        axios.get("http://localhost:8080/statisticsmoney",{params:{startTime:start,endTime:end}}).then((response)=>{
            tempDataSource = response.data;
            DataSource = response.data;
            this.setState({dataSource:response.data});
            console.log(response);
          }).catch(function(error){
            console.log(error);
          }) 
	
    }
    handler1(){
        axios.get("http://localhost:8080/statisticsnumber",{params:{startTime:start1,endTime:end1}}).then((response)=>{
          tempDataSource1 = response.data;
          DataSource1 = response.data;
          this.setState({dataSource1:response.data});
          console.log(response);
        }).catch(function(error){
          console.log(error);
        })
	}
    componentWillMount(){
        axios.get("http://localhost:8080/statisticsmoney",{params:{startTime:"2010-01-01",endTime:"2020-02-02"}}).then((response)=>{
          tempDataSource = response.data;
          DataSource = response.data;
          this.setState({dataSource:response.data});
          console.log(response);
        }).catch(function(error){
          console.log(error);
        })
        axios.get("http://localhost:8080/statisticsnumber",{params:{startTime:"2010-01-01",endTime:"2020-02-02"}}).then((response)=>{
          tempDataSource1 = response.data;
          DataSource1 = response.data;
          this.setState({dataSource1:response.data});
          console.log(response);
        }).catch(function(error){
          console.log(error);
        })
      }
    render(){
        return(
            <div>
                <div>
            <RangePicker showTime={{ format: 'HH:mm' }} format="YYYY-MM-DD"placeholder={['Start Time', 'End Time']}onOk={onOk}/>
            <Button type="primary" onClick={this.handler.bind(this)}>ok</Button><Button onClick={this.refresh.bind(this)} >刷新</Button>
                </div>
            <Table dataSource={this.state.dataSource} columns={this.state.columns} />
            <div>
            <RangePicker showTime={{ format: 'HH:mm' }} format="YYYY-MM-DD"placeholder={['Start Time', 'End Time']}onOk={onOk1}/>
            <Button type="primary" onClick={this.handler1.bind(this)}>ok</Button><Button onClick={this.refresh1.bind(this)} >刷新</Button></div>
            <Table dataSource={this.state.dataSource1} columns={this.state.columns1} />
            </div>
            
        )
    }
  
}
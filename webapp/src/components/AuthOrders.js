import { Table, Button,DatePicker,Input } from 'antd';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Counter from'./Counter'
import Item from 'antd/lib/list/Item';
import axios from 'axios';
var tempDataSource = [];
var DataSource=[];
var start;
var end;
const Search = Input.Search;
const { RangePicker } = DatePicker;
function onOk(value) {
    start = value[0].format("YYYY-MM-DD");
    end = value[1].format("YYYY-MM-DD");
    console.log(start);
    console.log(end);
}
const columns = [{
    title: 'username',
    dataIndex: 'username',
    key: 'username',
  }, {
    title: 'ordid',
    dataIndex: 'ordid',
    key: 'ordid',
  }, {
    title: 'ord_time',
    dataIndex: 'ord_time',
    key: 'ord_time',
  },
  {
    title: 'total $',
    dataIndex: 'total',
    key: 'total',
  }];  
export default class AuthOrders extends React.Component{
    constructor(props){
        super(props);
        this.state={
            columns:columns,
            dataSource:DataSource,
            start:"",
            end:"",
            value:""
        }  
    }
    refresh(){
        this.setState({dataSource:tempDataSource});
    }
    handler(){
        var startyear = parseInt(start.slice(0,4));
        var startmonth = parseInt(start.slice(5,7));
        var startday  = parseInt(start.slice(8,10));
        var endyear = parseInt(end.slice(0,4));
        var endmonth = parseInt(end.slice(5,7));
        var endday  = parseInt(end.slice(8,10));
        var tempdata=[];
        console.log(DataSource);
        for(var i=0;i<DataSource.length;i++){
            var temptime = DataSource[i].ord_time;
            var tempyear = parseInt(temptime.slice(0,4));
            var tempmonth = parseInt(temptime.slice(5,7));
            var tempday  = parseInt(temptime.slice(8,10));
            if(tempyear>startyear && tempyear<endyear){
                tempdata.push(DataSource[i]);
                continue;
            }
            else if(tempyear == startyear && tempyear == endyear){
                if(tempmonth>startmonth&&tempmonth<endmonth){
                    tempdata.push(DataSource[i]);
                    continue;
                }
                else if(tempmonth==startmonth && tempmonth==endmonth){
                    if(tempday>startday&& tempday<endday){
                        tempdata.push(DataSource[i]);
                        continue;
                    }
                    else if(tempday == startday && tempday == endday){
                        tempdata.push(DataSource[i]);
                        continue;
                    }
                }
                else if(tempmonth == startmonth && tempmonth< endmonth){
                    if(tempday>=startday){
                        tempdata.push(DataSource[i]);
                        continue;
                    }
                }
                else if(tempmonth == endmonth && tempmonth> startmonth){
                    if(tempday<=endday){
                        tempdata.push(DataSource[i]);
                        continue;
                    }
                }
            }
            else if(tempyear == startyear && tempyear < endyear){
                if(tempmonth>startmonth){
                    tempdata.push(DataSource[i]);
                    continue;
                }
                else if(tempmonth == startmonth){
                    if(tempday>=startday){
                        tempdata.push(DataSource[i]);
                        continue;
                    }
                }
            }
            else if(tempyear == endyear && tempyear> startyear){
                if(tempmonth< endmonth){
                    tempdata.push(DataSource[i]);
                    continue;
                }
                else if(tempmonth ==  endmonth){
                    if(tempday<=endday){
                        tempdata.push(DataSource[i]);
                        continue;
                    }
                }
            }
        }
        this.setState({
            dataSource:tempdata,
            start:start,
            end:end
        })
	
	}
    componentWillMount(){
        axios.get("http://localhost:8080/authOrders").then((response)=>{
          tempDataSource = response.data;
          DataSource = response.data;
          this.setState({dataSource:response.data});
          console.log(response);
        }).catch(function(error){
          console.log(error);
        })
      }
      handleClick=(value)=>{
          console.log(value);
        var needle = value.toLowerCase();
        if(value){
        var searchdata = this.state.dataSource.filter((item)=> {
          return item.username.toString().toLowerCase().indexOf(needle) > -1;
        });
        this.setState({
          dataSource:searchdata,
          value:value})
        }
      }
      handleClick1=(value)=>{
      var needle = value.toLowerCase();
      if(value){
      var searchdata = this.state.dataSource.filter((item)=> {
        return item.ord_time.toString().toLowerCase().indexOf(needle) > -1;
      });
      this.setState({
        dataSource:searchdata,
        value:value})
      }
    }
    render(){
        return(
            <div>
                <div>
            <RangePicker showTime={{ format: 'HH:mm' }} format="YYYY-MM-DD"placeholder={['Start Time', 'End Time']}onOk={onOk}/>
            <Button type="primary" onClick={this.handler.bind(this)}>ok</Button><Button onClick={this.refresh.bind(this)} >刷新</Button></div>
        <Search className="cards-header-search"
      placeholder="username"
      enterButton="Search"
      size="primary"
      onSearch={(value)=>this.handleClick(value)}
    /><Search className="cards-header-search"
    placeholder="time"
    enterButton="Search"
    size="primary"
    onSearch={(value)=>this.handleClick1(value)}
  />
            <Table dataSource={this.state.dataSource} columns={this.state.columns} /></div>
        )
    }
  
}
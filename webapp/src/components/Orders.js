import { Table, Button,DatePicker } from 'antd';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Counter from'./Counter'
import Item from 'antd/lib/list/Item';
import axios from 'axios';
var DataSource = [];
var tempMoney;
var start;
var end;
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
export default class Orders extends React.Component{
    constructor(props){
        super(props);
        this.state={
            columns:columns,
            totalnumber:0,
            dataSource:DataSource,
            start:"",
            end:"",
            selectedRowKeys: []
        }  
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
        var tempmoney = 0;
        for(var i=0;i<tempdata.length;i++){
            tempmoney+=tempdata[i].total;
        }
        this.setState({
            dataSource:tempdata,
            start:start,
            end:end,
            totalnumber:tempmoney
        })
	
	}
    componentWillMount(){
        axios.get("http://localhost:8080/allOrders").then((response)=>{
          DataSource = response.data;
          
          tempMoney = 0;
          for(var i=0;i<DataSource.length;i++){
            tempMoney+=DataSource[i].total;
          }
          this.setState({dataSource:response.data,totalnumber:tempMoney});
          console.log(response);
        }).catch(function(error){
          console.log(error);
        })
      }
    selectRow = (record) => {
        const selectedRowKeys = [...this.state.selectedRowKeys];
        if (selectedRowKeys.indexOf(record.key) >= 0) {
          selectedRowKeys.splice(selectedRowKeys.indexOf(record.key), 1);
        } else {
            selectedRowKeys.push(record.key);
      }
        this.setState({ selectedRowKeys });
    }
    onSelectedRowKeysChange = (selectedRowKeys) => {
        this.setState({ selectedRowKeys });
    }
    find(){
        var temparray = this.state.selectedRowKeys;
        console.log(temparray);
        console.log(this.state.selectedRowKeys);
        if(temparray.length != 1){
            alert("Please select an order!");
            return;
        }
        var tempkey = temparray[0];
        var username = this.state.dataSource[tempkey].username;
        var ordid = this.state.dataSource[tempkey].ordid;
        console.log(tempkey);
        console.log(username);
        axios.get("http://localhost:8080/orderItems",{params:{username:username,ordid:ordid}}).then((response)=>{
			 var data = response.data;
             console.log(data);
             if(data.length == 0){
                 alert("No find the result!");
                 return;
             }
             var result = "username        "+"ordid   "+"bookname      "+"unit_price($)     "+"num     \n";
             for(var i = 0;i<data.length;i++){
                 result+=(data[i].username+"         "+data[i].ordid+"     "+data[i].bookname+"    "+data[i].unit_price+"   "+data[i].num+"\n");
             }
             alert(result);
      }).catch(function(error){
        console.log(error);
      })

    }
    refresh(){
        this.setState({
            dataSource:DataSource,
            totalnumber:tempMoney
        })
    }
    render() {
        const { selectedRowKeys } = this.state;
        const rowSelection = {
        selectedRowKeys,
        onChange: this.onSelectedRowKeysChange,
        };
        return (
          <div>
          <div>
            <RangePicker showTime={{ format: 'HH:mm' }} format="YYYY-MM-DD"placeholder={['Start Time', 'End Time']}onOk={onOk}/>
            <Button type="primary" onClick={this.handler.bind(this)}>ok</Button></div>
        <div>
        <Table
        rowSelection={rowSelection}
          rowSelection={rowSelection}
          columns={columns}
            dataSource={this.state.dataSource}  />
        </div>
        <p><b>共消费</b> &nbsp;&nbsp;&nbsp;&nbsp;{this.state.totalnumber}$</p>
        <Button type="primary" onClick={this.find.bind(this)}>查询</Button>
        <Button type="primary" onClick={this.refresh.bind(this)}>刷新</Button>
        </div>
          );
        }
      }
import { Table, Button } from 'antd';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Counter from'./Counter'
import Item from 'antd/lib/list/Item';
import axios from 'axios';
import qs from 'qs';
const columns = [{
  title: 'Order_id',
  dataIndex: 'order_id',
},{
  title: 'Picture',
  dataIndex: 'src',
}, {
  title: 'Name',
  dataIndex: 'name',
}, {
  title: 'Unit-price($)',
  dataIndex: 'unit_price',
},{
  title:'Number',
  dataIndex:'num',
}];

var data=[];
export default class Cart extends React.Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
    loading: false,
    data:[],
    total:0
  };
  delete(){
    var temparray = this.state.selectedRowKeys;
    if(temparray.length == 0){
      alert("Please select the item!");
      return;
    }
    var selectedorder = [];
    var selected = [];
    for(var i=0;i<temparray.length;i++){
      var temppkey = temparray[i];
      var key = this.state.data[temppkey].k;
      var temporder = this.state.data[temppkey].order_id;
      console.log(temporder);
      selected.push(key);
      selectedorder.push(temporder);
    }
    console.log("selected:"+selected);
    console.log("ordid:"+selectedorder);
		axios.get("http://localhost:8080/deleteCartItem",{
      params:{ord_ids:selectedorder,selected:selected},
      paramsSerializer:params=>{
        return qs.stringify(params,{indices:false})
      }}).then((response)=>{
        if(response.data == 1){
          window.location.href='/#/Thanks';
				 alert("delete the item of cart success!");
        }
        if(response.data==100){
          alert("Pleas login firstly!");
          return;
        }
			 console.log(response.data);
      }).catch(function(error){
        console.log(error);
      })
	}
  handler(){
    var total= 0;
    var temparray = this.state.selectedRowKeys;
    if(temparray.length == 0){
      alert("Please select the item!");
      return;
    }
    var tempkey = temparray[0];
    var tempid = this.state.data[tempkey].order_id;
    console.log("id:"+tempid);
    for(var i=0;i<temparray.length;i++){
      var temppkey = temparray[i];
      console.log("id:"+tempid);
      if(tempid!=this.state.data[temppkey].order_id){
        alert("Please select the same order_id!");
        this.setState({
          selectedRowKeys:[],
          total:0
        })
        return;
      }
    }
    for(var i=0;i<temparray.length;i++){
      var key =temparray[i];
      total +=this.state.data[key].unit_price*this.state.data[key].num;
    }
    temparray = this.state.selectedRowKeys;
    if(temparray == null){
      alert("Please select item !");
      return;
    }
    var tempkey = temparray[0];
    var order_id = this.state.data[tempkey].order_id;
    var selected = [];
    for(var i=0;i<temparray.length;i++){
      var temppkey = temparray[i];
      var key = this.state.data[temppkey].k;
      selected.push(key);
    }
    console.log("selected:"+selected);
		axios.get("http://localhost:8080/submitOrder",{
      params:{total:total,ord_id:order_id,selected:selected},
      paramsSerializer:params=>{
        return qs.stringify(params,{indices:false})
      }}).then((response)=>{
        if(response.data == 1){
          window.location.href='/#/Orders';
				 alert("Submit order success and the total price is "+total+" $");
        }
        if(response.data==100){
          alert("Pleas login firstly!");
          return;
        }
			 console.log(response.data);
      }).catch(function(error){
        console.log(error);
      })
	}
  total(){
    var total= 0;
    var temparray = this.state.selectedRowKeys;
    if(temparray.length == 0){
      alert("Please select the item!");
      return;
    }
    var tempkey = temparray[0];
    var tempid = this.state.data[tempkey].order_id;
    console.log("id:"+tempid);
    for(var i=0;i<temparray.length;i++){
      var temppkey = temparray[i];
      console.log("id:"+tempid);
      if(tempid!=this.state.data[temppkey].order_id){
        alert("Please select the same order_id!");
        this.setState({
          selectedRowKeys:[],
          total:0
        })
        return;
      }
    }
    for(var i=0;i<temparray.length;i++){
      var key =temparray[i];
      total +=this.state.data[key].unit_price*this.state.data[key].num;
    }
    this.setState({total:total})
  }
  start = () => {
    this.setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  }

  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  }
  componentWillMount(){
    axios.get("http://localhost:8080/total").then((response)=>{
      console.log(response);
      data = [];
      if(response.data==1){
        alert("Please login firstly!");
        return;
      }
      for(var i=0;i<response.data.length;i++){
        var src = response.data[i].src;
        var name = response.data[i].book;
        var id = response.data[i].ordid;
        var num = response.data[i].num;
        var price = response.data[i].unit_price;
        var key = response.data[i].k;
        var tempdata ={
          "src":<img height="150" width="100"src={src}/>,
          "name":name,
          "order_id":id,
          "num":num,
          "unit_price":price,
          "k":key
        }
        console.log(tempdata);
        data.push(tempdata);
      }
      this.setState({data:data})
    }).catch(function(error){
      console.log(error);
    })
  }
  render() {
    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
      <div>  
      <div className="cart">
        <div style={{ marginBottom: 16 }}>
          <div className="bbtn">
          <Button
            type="primary"
            onClick={this.start}
            disabled={!hasSelected}
            loading={loading}
          >
            Reload
          </Button>
          </div>
          <span style={{ marginLeft: 8 }}>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
          </span>
        </div>
        
        <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.data} />
        <div className="total">
        <Button type="primary" onClick={this.delete.bind(this)}>
              delete
          </Button>
        <Button type="primary" onClick={this.total.bind(this)}>
              totoal 
          </Button>
          <b>Total:   {this.state.total}$</b>&nbsp;&nbsp;&nbsp;
          <Button type="primary" onClick={this.handler.bind(this)}>
              Submit order
          </Button>
      </div>
      </div>
      
      </div>
    );
  }
}

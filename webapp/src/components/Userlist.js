import { Table, Button,Input } from 'antd';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Counter from'./Counter'
import Item from 'antd/lib/list/Item';
import axios from 'axios';
import qs from 'qs';
const columns = [{
  title: 'username',
  dataIndex: 'username',
},{
  title: 'password',
  dataIndex: 'p',
}, {
  title: 'isUse',
  dataIndex: 'chmod',
}, {
  title: 'email',
  dataIndex: 'email',
}];

var data=[];
export default class Userlist extends React.Component {
  state = {
    data:[]
  };
  componentWillMount(){
    axios.get("http://localhost:8080/userslist").then((response)=>{
      console.log(response);
      data = [];
      if(response.data==100){
        alert("Please login firstly!");
        return;
      }
      for(var i=0;i<response.data.length;i++){
        var username = response.data[i].username;
        var p = response.data[i].p;
        var chmod = response.data[i].chmod;
        var email = response.data[i].email;
        var tempdata ={
          "username": username,
          "p":p,
          "email":email,
          "chmod":chmod,
        }
        console.log(tempdata);
        data.push(tempdata);
      }
      this.setState({data:data})
    }).catch(function(error){
      console.log(error);
    })
  }
  use(){
    var tempusernamelist=document.getElementsByName("usernamelist")[0].value;
    axios.get("http://localhost:8080/use",{params:{userlist:tempusernamelist}}).then((response)=>{
       var data = response.data;
       console.log(data);
       console.log(this.state.data);
      var tempdata = this.state.data;
       var templist=tempusernamelist.split(",");
       for(var i=0;i<templist.length;i++){
         var tempname=templist[i];
         for(var j=0;j<tempdata.length;j++){
           var temp = tempdata[j];
           if(data.username==temp.username)continue;
           if(temp.username==tempname) tempdata[j].chmod=1;
         }
       }
       this.setState({data:tempdata});
       alert(data.result);
      }).catch(function(error){
        console.log(error);
      })
  }
  refresh(){
    axios.get("http://localhost:8080/userslist").then((response)=>{
      console.log(response);
      data = [];
      if(response.data==100){
        alert("Please login firstly!");
        return;
      }
      for(var i=0;i<response.data.length;i++){
        var username = response.data[i].username;
        var p = response.data[i].p;
        var chmod = response.data[i].chmod;
        var email = response.data[i].email;
        var tempdata ={
          "username": username,
          "p":p,
          "email":email,
          "chmod":chmod,
        }
        console.log(tempdata);
        data.push(tempdata);
      }
      this.setState({data:data})
    }).catch(function(error){
      console.log(error);
    })
  }
  unuse(){
    var tempusernamelist=document.getElementsByName("usernamelist")[0].value;
    axios.get("http://localhost:8080/unuse",{params:{userlist:tempusernamelist}}).then((response)=>{
       var data = response.data;
       console.log(data);
      var tempdata = this.state.data;
       var templist=tempusernamelist.split(",");
       for(var i=0;i<templist.length;i++){
         var tempname=templist[i];
         for(var j=0;j<tempdata.length;j++){
           var temp = tempdata[j];
           if(temp.username==data.username) continue;
           if(temp.username==tempname) tempdata[j].chmod=0;
         }
       }
       this.setState({data:tempdata});
       alert(data.result);
      }).catch(function(error){
        console.log(error);
      })
  }
  render() {
    return (
      <div>          
        <Table  columns={columns} dataSource={this.state.data} />
        <div className="user-list">
							<Input name="usernamelist"placeholder="username list"/>
        <Button type="primary" onClick={this.use.bind(this)}>
          启用           
        </Button>
        <Button type="primary" onClick={this.unuse.bind(this)}>
            禁用
        </Button>
        </div></div>
      
    );
  }
}

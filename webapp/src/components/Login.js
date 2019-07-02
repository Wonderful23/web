import React, { Component } from 'react';
import {ReactDOM} from 'react-dom';
import img from './logo.png';
import {Link,HashRouter} from'react-router-dom';
import axios from 'axios';
axios.defaults.withCredentials = true;
export default class Login extends Component{
    constructor(props){
        super(props);
	}
	handler(){
		var username = document.getElementsByName("username")["0"].value;
		var password = document.getElementsByName("password")["0"].value;
		axios.get("http://localhost:8080/login",{params:{username:username,p:password}}).then((response)=>{
			 var data = response.data;
			 console.log(data);
			 if(data==1) alert("Your username and password is not matched!");
			 if(data ==2) 
			 {
				window.location.href='/#/Cards';
				 alert("Login success!");
			 }
			 if(data ==200) 
			 {
				window.location.href='/#/Userlist';
				 alert("Authority Login success!");
			 }
			 if(data == 3) {
				 alert("Please register this username first!");}
				 if(data == 4){
					 alert("Your account has been disabled!");
				 }
      }).catch(function(error){
        console.log(error);
      })
	}
    render(){
        return(
    <div className="Body">
	<div className="lowin lowin-blue">
		<div className="lowin-brand">
			<img src={img} alt="logo"/>
		</div>
		<div className="lowin-wrapper">
			<div className="lowin-box lowin-register">
				<div className="lowin-box-inner">
						<p>Hello,Welcome to e-Book</p>
						<div className="lowin-group">
							<label>Users</label>
							<input type="Users" id="username" autoComplete="Users" name="username" className="lowin-input"/>
						</div>
						<div className="lowin-group">
							<label>Password</label>
							<input type="password" name="password" autoComplete="current-password" id="password" className="lowin-input"/>
						</div>
						<button onClick={this.handler.bind(this)}className="lowin-btn">
							Sign In
						</button>
						<div className="text-foot">
							Not register? <a className="login-link" href="/#/Registry">register</a>
						</div>
				</div>
			</div>
		</div>
	</div>
    </div>);
    }
}
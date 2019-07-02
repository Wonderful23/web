import React, { Component } from 'react';
import {ReactDOM} from 'react-dom';
import img from './logo.png';
import {Router,Route} from'react-router'
import {Link,HashRouter} from'react-router-dom';
import axios from 'axios';
export default class Registry extends Component{
    constructor(props){
        super(props);
	}
	handler(){
		var username = document.getElementsByName("username")["0"].value;
		var password = document.getElementsByName("password")["0"].value;
		var email = document.getElementsByName("email")["0"].value;
		if(email!=null){
			var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
			var isok=reg.test(email);
			if (!isok) {
				alert("The format of email is false！");
				return;
			}
		}
		else{
			alert("Pleas input your email!");
			return;
		}
		var confirmpassword = document.getElementsByName("confirmpassword")["0"].value;
		if(confirmpassword != password){
			alert("password and confirm-password isn't matched!");
			return;
		}
		axios.get("http://localhost:8080/register",{params:{username:username,p:password,email:email}}).then((response)=>{
			 var data = response.data;
			 console.log(data);
			 if(data == 1){
				 alert("Please input the valid username!");
			 }
			 if(data == 3){
				 alert("The name is already registered!");
			 }
			 if(data == 2){
				window.location.href='/#/Login';
				alert("Register success!");
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
							<label>Email</label>
							<input type="email" autocomplete="email" name="email" className="lowin-input"/>
						</div>
						<div className="lowin-group">
							<label>User</label>
							<input type="username" autocomplete="username" name="username" className="lowin-input"/>
						</div>
						<div className="lowin-group">
							<label>Password</label>
							<input type="password" name="password" autocomplete="current-password" className="lowin-input"/>
						</div>
						<div className="lowin-group">
							<label>Ensure password</label>
							<input type="password" autocomplete="current-password" name="confirmpassword" className="lowin-input"/>
						</div>
						<button onClick={this.handler.bind(this)} className="lowin-btn">
							Register
						</button>
				</div>
			</div>
		</div>
	</div>
    </div>);
    }
}
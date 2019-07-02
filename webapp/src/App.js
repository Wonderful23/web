import React, { Component } from 'react';
import Login from './components/Login';
import Registry from'./components/Registry';
import Cards from'./components/Cards';
import Cart from'./components/Cart';
import Counter from'./components/Counter';
import Detail from'./components/Detail';
import './App.css';
import ReactDOM from'react-dom'
import {Router,Route} from'react-router'
import {Link,HashRouter} from'react-router-dom'
import{Menu,Icon,Switch}from 'antd';
import Orders from './components/Orders';
import Userlist from './components/Userlist';
import AuthOrders from './components/AuthOrders';
import Authlist from './components/Authlist';
import Thanks from './components/Thanks';
import Statics from './components/Statics';
import AuthDetail from './components/AuthDetail';
import AddDetail from './components/AddDetail';
const SubMenu =Menu.SubMenu
const ACTIVE={color:'red'}
class Slider1 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            current:'',
            username:''
        }
    }
    handleClick=(e)=>{
        this.setState({
            current:e.key
        })
    }
    componentDidMount(){
        this.getUser()
    }
    getUser=()=>{
        this.setState({
            username:'用户1'
        })
    }
    render(){
        return(
            <div>
            <div id='right-box'>
                    <Login /></div>
              <div id='leftMenu'>
              <h2 id='Tt'>E-Book</h2>
                  <Menu theme="dark" onClick={this.handleClick} style={{width:185}}
                  defaultOpenKeys={['sub1','sub2']}
                  defaultSelectedKeys={[this.state.current]}
                  mode='inline'>
                  <SubMenu key='sub1' title={<span><Icon type='mail'/><span> 导航一</span></span>}>
                    <Menu.Item key='1'> <Link to='/Login'>Login</Link></Menu.Item>
                    <Menu.Item key='2'> <Link to='/Registry'>Registry</Link></Menu.Item>
                    </SubMenu>
                    </Menu>
                    </div>
                    
            </div>
        )
    }
}

class Slider2 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            current:'',
            username:''
        }
    }
    handleClick=(e)=>{
        this.setState({
            current:e.key
        })
    }
    componentDidMount(){
        this.getUser()
    }
    getUser=()=>{
        this.setState({
            username:'用户1'
        })
    }
    render(){
        return(
            <div>
            <div id='right-box'>
                    <Registry /></div>
              <div id='leftMenu'>
              <h2 id='Tt'>E-Book</h2>
                  <Menu theme="dark" onClick={this.handleClick} style={{width:185}}
                  defaultOpenKeys={['sub1','sub2']}
                  defaultSelectedKeys={[this.state.current]}
                  mode='inline'>
                  <SubMenu key='sub1' title={<span><Icon type='mail'/><span> 导航一</span></span>}>
                    <Menu.Item key='1'> <Link to='/Login'>Login</Link></Menu.Item>
                    <Menu.Item key='2'> <Link to='/Registry'>Registry</Link></Menu.Item>
                    </SubMenu>
                    </Menu>
                    </div>
                    
            </div>
        )
    }
}

class Slider3 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            current:'',
            username:''
        }
    }
    handleClick=(e)=>{
        this.setState({
            current:e.key
        })
    }
    componentDidMount(){
        this.getUser()
    }
    getUser=()=>{
        this.setState({
            username:'用户1'
        })
    }
    render(){
        return(
            <div>
            <div id='right-box'>
                    <Cards /></div>
              <div id='leftMenu'>
              <h2 id='Tt'>E-Book</h2>
                  <Menu theme="dark" onClick={this.handleClick} style={{width:185}}
                  defaultOpenKeys={['sub1']}
                  defaultSelectedKeys={[this.state.current]}
                  mode='inline'>
                    <SubMenu key='sub1' title={<span><Icon type='appstore'/><span> 导航一</span></span>}>
                    <Menu.Item key='1'> <Link to='/Cards'>List</Link></Menu.Item>
                    <Menu.Item key='2'> <Link to='/Cart'>Cart</Link></Menu.Item>
                    <Menu.Item key='3'> <Link to='/Logout'>Logout</Link></Menu.Item>
                    <Menu.Item key='4'> <Link to='/Orders'>Orders</Link></Menu.Item>
                    </SubMenu>
                    </Menu>
                    </div>
                    
            </div>
        )
    }
}
class Slider extends React.Component{
  constructor(props){
      super(props)
      this.state={
          current:'',
          username:''
      }
  }
  handleClick=(e)=>{
      this.setState({
          current:e.key
      })
  }
  componentDidMount(){
      this.getUser()
  }
  getUser=()=>{
      this.setState({
          username:'用户1'
      })
  }
  render(){
      return(
          <div>
          <div id='right-box'></div>
            <div id='leftMenu'>
            <h2 id='Tt'>E-Book</h2>
                <Menu theme="dark" onClick={this.handleClick} style={{width:185}}
                defaultOpenKeys={['sub1','sub2']}
                defaultSelectedKeys={[this.state.current]}
                mode='inline'>
                <SubMenu key='sub1' title={<span><Icon type='mail'/><span> 导航一</span></span>}>
                  <Menu.Item key='1'> <Link to='/Login'>Login</Link></Menu.Item>
                  <Menu.Item key='2'> <Link to='/Registry'>Registry</Link></Menu.Item>
                  </SubMenu>
                  <SubMenu key='sub2' title={<span><Icon type='appstore'/><span> 导航二</span></span>}>
                  <Menu.Item key='3'> <Link to='/Cards'>List</Link></Menu.Item>
                  <Menu.Item key='4'> <Link to='/Cart'>Cart</Link></Menu.Item>
                  <Menu.Item key='5'> <Link to='/Logout'>Logout</Link></Menu.Item>
                  <Menu.Item key='4'> <Link to='/Orders'>Orders</Link></Menu.Item>
                  </SubMenu>
                  </Menu>
                  </div>
                 
          </div>
      )
  }
}
class Slider4 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            current:'',
            username:''
        }
    }
    handleClick=(e)=>{
        this.setState({
            current:e.key
        })
    }
    componentDidMount(){
        this.getUser()
    }
    getUser=()=>{
        this.setState({
            username:'用户1'
        })
    }
    render(){
        console.log(this.props.location.state.detail)
        return(
            <div>
            <div id='right-box'>
            <Detail detail={this.props.location.state.detail}/></div>
              <div id='leftMenu'>
              <h2 id='Tt'>E-Book</h2>
                  <Menu theme="dark" onClick={this.handleClick} style={{width:185}}
                  defaultOpenKeys={['sub1','sub2']}
                  defaultSelectedKeys={[this.state.current]}
                  mode='inline'>
                    <SubMenu key='sub1' title={<span><Icon type='appstore'/><span> 导航一</span></span>}>
                    <Menu.Item key='1'> <Link to='/Cards'>List</Link></Menu.Item>
                    <Menu.Item key='2'> <Link to='/Cart'>Cart</Link></Menu.Item>
                    <Menu.Item key='3'> <Link to='/Logout'>Logout</Link></Menu.Item>
                    <Menu.Item key='4'> <Link to='/Orders'>Orders</Link></Menu.Item>
                    </SubMenu>
                    </Menu>
                    </div>
                   
            </div>
        )
    }
}

class Slider5 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            current:'',
            username:''
        }
    }
    handleClick=(e)=>{
        this.setState({
            current:e.key
        })
    }
    componentDidMount(){
        this.getUser()
    }
    getUser=()=>{
        this.setState({
            username:'用户1'
        })
    }
    render(){
        return(
            <div>
            <div id='right-box'>
            <Cart /></div>
              <div id='leftMenu'>
              <h2 id='Tt'>E-Book</h2>
                  <Menu theme="dark" onClick={this.handleClick} style={{width:185}}
                  defaultOpenKeys={['sub1','sub2']}
                  defaultSelectedKeys={[this.state.current]}
                  mode='inline'>
                    <SubMenu key='sub1' title={<span><Icon type='appstore'/><span> 导航一</span></span>}>
                    <Menu.Item key='1'> <Link to='/Cards'>List</Link></Menu.Item>
                    <Menu.Item key='2'> <Link to='/Cart'>Cart</Link></Menu.Item>
                    <Menu.Item key='3'> <Link to='/Logout'>Logout</Link></Menu.Item>
                    <Menu.Item key='4'> <Link to='/Orders'>Orders</Link></Menu.Item>
                    </SubMenu>
                    </Menu>
                    </div>
                   
            </div>
        )
    }
}
class Slider6 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            current:'',
            username:''
        }
    }
    handleClick=(e)=>{
        this.setState({
            current:e.key
        })
    }
    componentDidMount(){
        this.getUser()
    }
    getUser=()=>{
        this.setState({
            username:'用户1'
        })
    }
    render(){
        return(
            <div>
            <div id='right-box'>
            <Orders /></div>
              <div id='leftMenu'>
              <h2 id='Tt'>E-Book</h2>
                  <Menu theme="dark" onClick={this.handleClick} style={{width:185}}
                  defaultOpenKeys={['sub1','sub2']}
                  defaultSelectedKeys={[this.state.current]}
                  mode='inline'>
                    <SubMenu key='sub1' title={<span><Icon type='appstore'/><span> 导航一</span></span>}>
                    <Menu.Item key='1'> <Link to='/Cards'>List</Link></Menu.Item>
                    <Menu.Item key='2'> <Link to='/Cart'>Cart</Link></Menu.Item>
                    <Menu.Item key='3'> <Link to='/Logout'>Logout</Link></Menu.Item>
                    <Menu.Item key='4'> <Link to='/Orders'>Orders</Link></Menu.Item>
                    </SubMenu>
                    </Menu>
                    </div>
                   
            </div>
        )
    }
}
class Slider7 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            current:'',
            username:''
        }
    }
    handleClick=(e)=>{
        this.setState({
            current:e.key
        })
    }
    componentDidMount(){
        this.getUser()
    }
    getUser=()=>{
        this.setState({
            username:'用户1'
        })
    }
    render(){
        return(
            <div>
            <div id='right-box'>
            <Userlist /></div>
              <div id='leftMenu'>
              <h2 id='Tt'>E-Book</h2>
                  <Menu theme="dark" onClick={this.handleClick} style={{width:185}}
                  defaultOpenKeys={['sub1','sub2']}
                  defaultSelectedKeys={[this.state.current]}
                  mode='inline'>
                    <SubMenu key='sub1' title={<span><Icon type='appstore'/><span> 导航一</span></span>}>
                    <Menu.Item key='1'> <Link to='/Authlist'>AuthList</Link></Menu.Item>
                    <Menu.Item key='2'> <Link to='/Userlist'>Userlist</Link></Menu.Item>
                    <Menu.Item key='3'> <Link to='/Logout'>Logout</Link></Menu.Item>
                    <Menu.Item key='4'> <Link to='/AuthOrder'>Orders</Link></Menu.Item>
                    <Menu.Item key='5'> <Link to='/Statics'>Statics</Link></Menu.Item>
                    </SubMenu>
                    </Menu>
                    </div>
                   
            </div>
        )
    }
}
class Slider9 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            current:'',
            username:''
        }
    }
    handleClick=(e)=>{
        this.setState({
            current:e.key
        })
    }
    componentDidMount(){
        this.getUser()
    }
    getUser=()=>{
        this.setState({
            username:'用户1'
        })
    }
    render(){
        return(
            <div>
            <div id='right-box'>
            <Authlist /></div>
              <div id='leftMenu'>
              <h2 id='Tt'>E-Book</h2>
                  <Menu theme="dark" onClick={this.handleClick} style={{width:185}}
                  defaultOpenKeys={['sub1','sub2']}
                  defaultSelectedKeys={[this.state.current]}
                  mode='inline'>
                    <SubMenu key='sub1' title={<span><Icon type='appstore'/><span> 导航一</span></span>}>
                    <Menu.Item key='1'> <Link to='/Authlist'>AuthList</Link></Menu.Item>
                    <Menu.Item key='2'> <Link to='/Userlist'>Userlist</Link></Menu.Item>
                    <Menu.Item key='3'> <Link to='/Logout'>Logout</Link></Menu.Item>
                    <Menu.Item key='4'> <Link to='/AuthOrder'>Orders</Link></Menu.Item>
                    <Menu.Item key='5'> <Link to='/Statics'>Statics</Link></Menu.Item>
                    </SubMenu>
                    </Menu>
                    </div>
                   
            </div>
        )
    }
}
class Slider8 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            current:'',
            username:''
        }
    }
    handleClick=(e)=>{
        this.setState({
            current:e.key
        })
    }
    componentDidMount(){
        this.getUser()
    }
    getUser=()=>{
        this.setState({
            username:'用户1'
        })
    }
    render(){
        return(
            <div>
            <div id='right-box'>
            <AuthOrders /></div>
              <div id='leftMenu'>
              <h2 id='Tt'>E-Book</h2>
                  <Menu theme="dark" onClick={this.handleClick} style={{width:185}}
                  defaultOpenKeys={['sub1','sub2']}
                  defaultSelectedKeys={[this.state.current]}
                  mode='inline'>
                    <SubMenu key='sub1' title={<span><Icon type='appstore'/><span> 导航一</span></span>}>
                    <Menu.Item key='1'> <Link to='/Authlist'>AuthList</Link></Menu.Item>
                    <Menu.Item key='2'> <Link to='/Userlist'>Userlist</Link></Menu.Item>
                    <Menu.Item key='3'> <Link to='/Logout'>Logout</Link></Menu.Item>
                    <Menu.Item key='4'> <Link to='/AuthOrder'>Orders</Link></Menu.Item>
                    <Menu.Item key='5'> <Link to='/Statics'>Statics</Link></Menu.Item>
                    </SubMenu>
                    </Menu>
                    </div>
                   
            </div>
        )
    }
}
class Slider10 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            current:'',
            username:''
        }
    }
    handleClick=(e)=>{
        this.setState({
            current:e.key
        })
    }
    componentDidMount(){
        this.getUser()
    }
    getUser=()=>{
        this.setState({
            username:'用户1'
        })
    }
    render(){
        return(
            <div>
            <div id='right-box'>
            <Thanks /></div>
              <div id='leftMenu'>
              <h2 id='Tt'>E-Book</h2>
                  <Menu theme="dark" onClick={this.handleClick} style={{width:185}}
                  defaultOpenKeys={['sub1','sub2']}
                  defaultSelectedKeys={[this.state.current]}
                  mode='inline'>
                    <SubMenu key='sub1' title={<span><Icon type='appstore'/><span> 导航一</span></span>}>
                    <Menu.Item key='1'> <Link to='/Authlist'>AuthList</Link></Menu.Item>
                    <Menu.Item key='2'> <Link to='/Userlist'>Userlist</Link></Menu.Item>
                    <Menu.Item key='3'> <Link to='/Logout'>Logout</Link></Menu.Item>
                    <Menu.Item key='4'> <Link to='/AuthOrder'>Orders</Link></Menu.Item>
                    <Menu.Item key='5'> <Link to='/Statics'>Statics</Link></Menu.Item>
                    </SubMenu>
                    </Menu>
                    </div>
                   
            </div>
        )
    }
}
class Slider11 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            current:'',
            username:''
        }
    }
    handleClick=(e)=>{
        this.setState({
            current:e.key
        })
    }
    componentDidMount(){
        this.getUser()
    }
    getUser=()=>{
        this.setState({
            username:'用户1'
        })
    }
    render(){
        return(
            <div>
            <div id='right-box'>
            <Statics /></div>
              <div id='leftMenu'>
              <h2 id='Tt'>E-Book</h2>
                  <Menu theme="dark" onClick={this.handleClick} style={{width:185}}
                  defaultOpenKeys={['sub1','sub2']}
                  defaultSelectedKeys={[this.state.current]}
                  mode='inline'>
                    <SubMenu key='sub1' title={<span><Icon type='appstore'/><span> 导航一</span></span>}>
                    <Menu.Item key='1'> <Link to='/Authlist'>AuthList</Link></Menu.Item>
                    <Menu.Item key='2'> <Link to='/Userlist'>Userlist</Link></Menu.Item>
                    <Menu.Item key='3'> <Link to='/Logout'>Logout</Link></Menu.Item>
                    <Menu.Item key='4'> <Link to='/AuthOrder'>Orders</Link></Menu.Item>
                    <Menu.Item key='5'> <Link to='/Statics'>Statics</Link></Menu.Item>
                    </SubMenu>
                    </Menu>
                    </div>
                   
            </div>
        )
    }
}
class Slider12 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            current:'',
            username:''
        }
    }
    handleClick=(e)=>{
        this.setState({
            current:e.key
        })
    }
    componentDidMount(){
        this.getUser()
    }
    getUser=()=>{
        this.setState({
            username:'用户1'
        })
    }
    render(){
        return(
            <div>
            <div id='right-box'>
            <AuthDetail detail={this.props.location.state.detail}/></div>
              <div id='leftMenu'>
              <h2 id='Tt'>E-Book</h2>
                  <Menu theme="dark" onClick={this.handleClick} style={{width:185}}
                  defaultOpenKeys={['sub1','sub2']}
                  defaultSelectedKeys={[this.state.current]}
                  mode='inline'>
                    <SubMenu key='sub1' title={<span><Icon type='appstore'/><span> 导航一</span></span>}>
                    <Menu.Item key='1'> <Link to='/Authlist'>AuthList</Link></Menu.Item>
                    <Menu.Item key='2'> <Link to='/Userlist'>Userlist</Link></Menu.Item>
                    <Menu.Item key='3'> <Link to='/Logout'>Logout</Link></Menu.Item>
                    <Menu.Item key='4'> <Link to='/AuthOrder'>Orders</Link></Menu.Item>
                    <Menu.Item key='5'> <Link to='/Statics'>Statics</Link></Menu.Item>
                    </SubMenu>
                    </Menu>
                    </div>
                   
            </div>
        )
    }
}
class Slider13 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            current:'',
            username:''
        }
    }
    handleClick=(e)=>{
        this.setState({
            current:e.key
        })
    }
    componentDidMount(){
        this.getUser()
    }
    getUser=()=>{
        this.setState({
            username:'用户1'
        })
    }
    render(){
        return(
            <div>
            <div id='right-box'>
            <AddDetail /></div>
              <div id='leftMenu'>
              <h2 id='Tt'>E-Book</h2>
                  <Menu theme="dark" onClick={this.handleClick} style={{width:185}}
                  defaultOpenKeys={['sub1','sub2']}
                  defaultSelectedKeys={[this.state.current]}
                  mode='inline'>
                    <SubMenu key='sub1' title={<span><Icon type='appstore'/><span> 导航一</span></span>}>
                    <Menu.Item key='1'> <Link to='/Authlist'>AuthList</Link></Menu.Item>
                    <Menu.Item key='2'> <Link to='/Userlist'>Userlist</Link></Menu.Item>
                    <Menu.Item key='3'> <Link to='/Logout'>Logout</Link></Menu.Item>
                    <Menu.Item key='4'> <Link to='/AuthOrder'>Orders</Link></Menu.Item>
                    <Menu.Item key='5'> <Link to='/Statics'>Statics</Link></Menu.Item>
                    </SubMenu>
                    </Menu>
                    </div>
                   
            </div>
        )
    }
}
export default class App  extends Component{
    render(){
        return(
          <HashRouter>
    <div>
        <Route path="/" component={Slider}/>
            <Route path="/Login" component={Slider1} />
            <Route path="/Registry" component={Slider2} />
            <Route path="/Cards" component={Slider3} />
            <Route path="/Detail" component={Slider4} />
            <Route path="/Cart" component={Slider5} />
            <Route path="/Logout" component={Slider1} />
            <Route path="/Orders" component={Slider6} />
            <Route path="/Userlist" component={Slider7} />
            <Route path="/AuthOrder" component={Slider8} />
            <Route path="/Authlist" component={Slider9} />
            <Route path="/Thanks" component={Slider10} />
            <Route path="/Statics" component={Slider11}/>
            <Route path="/AuthDetail" component={Slider12} />
            <Route path="/AddDetail" component={Slider13} />
        </div>
    </HashRouter>
    );
  }
}

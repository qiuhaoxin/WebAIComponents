import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import SlideNav from '../../src/components/SlideNav';
import {SlideNav} from '../../dist/main.min.js';
import CommonSer from '../images/commonSer.png';
class App extends Component {
  constructor(props){
  	super(props);
  	this.data=[
        {id:0,name:'机器人管理',img:require('../images/commonSer.png')},
        {id:1,name:'技能管理',img:require('../images/createtime.png')},
        {id:2,name:'意图管理',img:require('../images/creator.png')},
        {id:3,name:'用户管理',img:require('../images/train_intention.png')},
  	]
  }
  render() {
    return (
      <div className="App">
         <div>test</div>
         <SlideNav data={this.data}/>
         <img src={CommonSer}/>
      </div>
    );
  }
}
export default App;

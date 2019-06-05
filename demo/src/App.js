import React, { Component } from 'react';
import './App.css';
// import SlideNav from '../../src/components/SlideNav';
import {SlideNav,Toolbar} from '../../dist/main.min.js';
import CommonSer from '../images/commonSer.png';
import {Button} from "antd";
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
         {/*<div>test</div>*/}
         {/*<SlideNav data={this.data}/>*/}
         {/*<img src={CommonSer}/>*/}
          <Toolbar
              className={`${["test"]}`}
              style={{margin:40}}
              extra={
                  <div>
                      <Button className={"btn-down"}>新增</Button>
                      <Button className={"btn-down"}>导入</Button>
                      <Button className={"btn-down"}>导出</Button>
                  </div>
              }
          />
      </div>
    );
  }
}
export default App;

import React, { Component } from 'react';
import './App.css';
// import SlideNav from '../../src/components/SlideNav';

import {SlideNav,TabBar,Tab,Icon} from '../../dist/main.min.js';
import CommonSer from '../images/commonSer.png';
import {Button} from "antd";
class App extends Component {
  constructor(props){
  	super(props);
  	this.data=[
        {
        	id:0,
        	name:'机器人管理',
        	img:require('../images/commonSer.png'),
        	children:[
               {id:0,name:'机器人列表'},
               {id:1,name:'机器人详情'}
        	]
        },
        {
        	id:1,
        	name:'技能管理',
        	img:require('../images/createtime.png'),
            children:[
               {id:0,name:'技能列表'},
               {id:1,name:'技能详情'}
            ]
        },
        {
        	id:2,
        	name:'意图管理',
        	img:require('../images/creator.png'),
            children:[
               {id:0,name:'意图列表'},
            ]
        },
        {
        	id:3,
        	name:'用户管理',
        	img:require('../images/train_intention.png'),
            children:[
               {id:0,name:'用户列表',},
            ]
        },
  	]
  	this.tabBarData=[
       {id:0,name:'出差申请单'},
       {id:1,name:'借款申请单'},
       {id:2,name:'差旅报销单'},
       {id:3,name:'销售订单'},
       {id:4,name:'销售出库单'},
       {id:5,name:'采购订单'},
       {id:6,name:'出差申请单1'},
       {id:7,name:'借款申请单1'},
       {id:8,name:'差旅报销单1'},
       {id:9,name:'销售订单1'},
       {id:10,name:'销售出库单1'},
       {id:11,name:'采购订单1'},
  	]
  }
  state={
  	tabBarData:null,
  }
  handleAddBtns=()=>{
  	  const id=Math.floor(Math.random() * 11);
  	  let tabBarData=this.tabBarData.filter(item=>item.id===id);
      tabBarData=tabBarData[0];
  	  this.setState({
  	  	tabBarData,
  	  })
  }
  render() {
  	const {tabBarData}=this.state;
    return (
      <div className="App">

         <div className={'slideNav'}>
            <SlideNav data={this.data}/>
         </div>
         <div className={'content'}>
            <TabBar data={tabBarData} />
            <div onClick={this.handleAddBtns}>
               添加按钮
            </div>
         </div>
         <div>
         </div>

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

import React, { Component } from 'react';
import './App.css';
// import SlideNav from '../../src/components/SlideNav';

import {SlideNav,MenuBar,Tab,Icon,Tip} from '../../dist/main.min.js';
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
               {id:0,name:'机器人列表',showNav:true,},
               {id:1,name:'机器人详情',showNav:true,}
        	]
        },
        {
        	id:1,
        	name:'技能管理',
        	img:require('../images/createtime.png'),
          children:[
               {id:0,name:'技能列表',showNav:true,},
               {id:1,name:'技能详情',showNav:false,}
          ]
        },
        {
        	id:2,
        	name:'意图管理',
        	img:require('../images/creator.png'),
            children:[
               {id:0,name:'意图列表',showNav:true,},
            ]
        },
        {
        	id:3,
        	name:'用户管理',
        	img:require('../images/train_intention.png'),
            children:[
               {id:0,name:'用户列表',showNav:true,},
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
    showTip:false,
  }
  handleAddBtns=()=>{
  	  const id=Math.floor(Math.random() * 11);
  	  let tabBarData=this.tabBarData.filter(item=>item.id===id);
      tabBarData=tabBarData[0];
  	  this.setState({
  	  	tabBarData,
        showTip:true,
  	  })
  }
  handleMenuTabClick=(curTabId)=>{
      console.log('you click tab id is ',curTabId);
  }
  handleMenuDelClick=(curTabId,delTabId)=>{
      console.log('you del tab id is ',delTabId);
      console.log('current tab id is ',curTabId);
  }
  render() {
  	const {tabBarData,showTip}=this.state;
    return (
      <div className="App">

         <div className={'slideNav'}>
            <SlideNav data={this.data}/>
         </div>
         <div className={'content'}>

            <MenuBar data={tabBarData} onMenuTabClick={this.handleMenuTabClick} onMenuDelClick={this.handleMenuDelClick}/>
            <div style={{position:'relative'}}>
                <Tip tipContent={'测试'} status={'wranning'} visible={showTip} duration={4000} autoClose={true}/>
            </div>
            <div onClick={this.handleAddBtns}>
               添加按钮
            </div>

            <div>
              
            </div>
         </div>
         <div>

         </div>

      </div>
    );
  }
}
export default App;

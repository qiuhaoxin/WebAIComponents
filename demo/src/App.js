import React, { Component } from 'react';
import './App.css';
// import SlideNav from '../../src/components/SlideNav';

import { SlideNav, MenuBar, Tab, Tip, message, Header, ContentCard, Loading, Content } from '@haoxin_qiu/webaicomponents';
import CommonSer from '../images/commonSer.png';
import { Button } from "antd";
class App extends Component {
  constructor(props) {
    super(props);
    this.data = [
      {
        id: 0,
        name: '机器人管理',
        img: require('../images/commonSer.png'),
        children: [
          { id: 0, name: '机器人列表', showNav: true, },
          { id: 1, name: '机器人详情', showNav: true, }
        ]
      },
      {
        id: 1,
        name: '技能管理',
        img: require('../images/createtime.png'),
        children: [
          { id: 0, name: '技能列表', showNav: true, },
          { id: 1, name: '技能详情', showNav: false, }
        ]
      },
      {
        id: 2,
        name: '意图管理',
        img: require('../images/creator.png'),
        children: [
          { id: 0, name: '意图列表', showNav: true, },
        ]
      },
      {
        id: 3,
        name: '用户管理',
        img: require('../images/train_intention.png'),
        children: [
          { id: 0, name: '用户列表', showNav: true, },
        ]
      },
    ]
    this.tabBarData = [
      { id: 0, name: '出差申请单' },
      { id: 1, name: '借款申请单' },
      { id: 2, name: '差旅报销单' },
      { id: 3, name: '销售订单' },
      { id: 4, name: '销售出库单' },
      { id: 5, name: '采购订单' },
    ]
  }
  state = {
    tabBarData: null,
    tip: null,
    test: -1,
    showLoading: false,
  }
  handleAddBtns = () => {
    const id = Math.floor(Math.random() * 5);
    let tabBarData = this.tabBarData.filter(item => item.id === id);
    tabBarData = tabBarData[0];
    let tip = {
      visible: true,
      tipContent: '测试',
      status: 'success',
    }
    this.setState({
      tabBarData,
      tip,
      //showLoading: true,
    })
  }
  handleMenuTabClick = (curTabId) => {
    console.log('you click tab id is ', curTabId);
  }
  handleMenuDelClick = (curTabId, delTabId) => {
    console.log('you del tab id is ', delTabId);
    console.log('current tab id is ', curTabId);
  }
  handleClose = () => {

  }
  handleLogout = () => {
    console.log('you logout!');
  }
  handleTipClose = () => {
    let tip = {
      visible: false,
    }
    this.setState({
      tip,
    })
  }
  render() {
    const { tabBarData, tip, showLoading } = this.state;

    return (
      <div className="App">
        <Header className='header' userInfo={{ userName: '邱浩新' }} onLogout={this.handleLogout} />
        <div className='second'>
          <div className={'slideNav'}>
            <SlideNav data={this.data} />
          </div>
          <div className={'content'}>

            <MenuBar data={tabBarData} onMenuTabClick={this.handleMenuTabClick} onMenuDelClick={this.handleMenuDelClick} />
            <Content tip={tip} onTipClose={this.handleTipClose} showLoading={showLoading}>
              <ContentCard>
                <div onClick={this.handleAddBtns}>
                  添加按钮
                </div>
                <div style={{ height: 900 }}>
                  test
                </div>
              </ContentCard>
            </Content>

          </div>
        </div>

      </div >
    );
  }
}
export default App;

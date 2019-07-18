import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
// import SlideNav from '../../src/components/SlideNav';

import {
  SlideNav, MenuBar, Tab, Tip, message, Header, ContentCard, Loading, Content, BtnBar, SampleNav,
  NLPFrame, NLPWordslot
} from '@haoxin_qiu/webaicomponents';
import CommonSer from '../images/commonSer.png';
const intentionList = [
  { id: 99, name: '全部样本', extra: 1000 },
  { id: 1, name: '出差申请出差申请出差申请', extra: 40 },
  { id: 2, name: '预订机票', extra: 490 },
  { id: 3, name: '其他意图', extra: 400 },
  { id: 4, name: '出差申请1', extra: 40 },
  { id: 5, name: '预订机票1', extra: 490 },
  { id: 7, name: '其他意图1', extra: 400 },
  { id: 8, name: '出差申请', extra: 40 },
  { id: 9, name: '预订机票', extra: 490 },
  { id: 10, name: '其他意图', extra: 400 },
  { id: 11, name: '出差申请出差申请出差申请', extra: 40 },
  { id: 12, name: '预订机票', extra: 490 },
  { id: 13, name: '其他意图', extra: 400 },
  { id: 14, name: '出差申请1', extra: 40 },
  { id: 15, name: '预订机票1', extra: 490 },
  { id: 17, name: '其他意图1', extra: 400 },
  { id: 18, name: '出差申请', extra: 40 },
  { id: 19, name: '预订机票', extra: 490 },
  { id: 20, name: '其他意图', extra: 400 },
]
const wordslotList = [
  { id: 1, name: '出发时间' },
  { id: 2, name: '返回时间' },
  { id: 3, name: '目的地' },
  { id: 4, name: '出发地' },
  { id: 5, name: '事由' },
]
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
    showFrame: false,
  }
  componentDidMount() {
    message.config({ getContainer: this.getContainer })
  }
  handleAddBtns = () => {
    // const id = Math.floor(Math.random() * 5);
    // let tabBarData = this.tabBarData.filter(item => item.id === id);
    // tabBarData = tabBarData[0];
    // let tip = {
    //   visible: true,
    //   tipContent: '测试',
    //   status: 'success',
    // }
    // this.setState({
    //   tabBarData,
    //   tip,
    //   showFrame: true,
    //   //showLoading: true,
    // })
    message.error('出错啦!')
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
  getContainer = () => {
    if (this.wrapper) {
      return ReactDOM.findDOMNode(this.wrapper);
      //return document.getElementById('contentCard');
    }
  }
  handleSaveClick = () => {

    message.success('成功!');
  }
  handleExitClick = () => {
    console.log('exit');
    message.warning('警告！');

  }
  handleItemClick = (item) => {
    console.log(`item is `, JSON.stringify(item));
  }
  handleTagClick = (item) => {
    // console.log('item is ', JSON.stringify(item));
  }
  handleWordslotSelect = (item) => {
    console.log('you select wordslot is ', JSON.stringify(item));
  }
  handleFrameSave = () => {
    this.setState({
      showFrame: false,
    })
  }
  render() {
    const { tabBarData, tip, showLoading, showFrame } = this.state;
    const btnArr = [
      { id: 1, name: '保存', onClick: this.handleSaveClick },
      { id: 2, name: '退出', onClick: this.handleExitClick },
    ]
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
              <div className={'btnbar'}>
                <BtnBar btnArr={btnArr} />
              </div>
              <ContentCard ref={el => this.wrapper = el}>
                <div onClick={this.handleAddBtns}>
                  添加按钮
                </div>
                <div style={{ height: 40, marginTop: 20 }}>

                </div>

                <SampleNav onItemClick={this.handleItemClick}
                  keyStr={'name'} selected={99}
                  style={{ width: 200, height: 300 }}
                  intentionList={intentionList}
                  onScroll={() => console.log('hei ')}
                ></SampleNav>
              </ContentCard>
            </Content>

          </div>
        </div>

      </div >
    );
  }
}
export default App;


/**
 *
 *                <NLPFrame wordslotList={wordslotList} onChooseWordSlot={this.handleWordslotSelect} onSave={this.handleFrameSave} visible={true} />
 *
 *
 */

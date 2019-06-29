/**
 * 菜单管理条
 */
import React from 'react';
import './index.less';
import PropTypes from 'prop-types';
import cloneDeep from 'lodash/cloneDeep';
import Tab from '../Tab';
import ClassNames from 'class-names';
import HomeImg from '../../images/home.png';
import Arrow_right from '../../images/arrow_right.png';
import Arrow_left from '../../images/arrow.png';
import FullScreen from '../FullScreen';
const prefixCls = 'kd-tabBar';
class TabBar extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    menuData: [],//维护菜单数据
    curSelected: -1,//当前选中菜单栏
    isFullScreen: false,//全屏状态 true:打开全屏  false :退出全屏
    showArrow: false,
  }
  componentWillReceiveProps(nextProps) {
    const { data } = nextProps;
    const menuDatas = cloneDeep(this.state.menuData);
    const _this = this;
    if (menuDatas.length == 0 || data.id !== this.props.data.id) {
      const existData = menuDatas.filter(item => {
        return item.id === data.id;
      });
      if (existData.length > 0) {
        //不用把菜单数据加进来，只要设置选中项
        this.setState({
          curSelected: data.id,
        })
      } else {
        let menuDataNew = cloneDeep(this.state.menuData);
        menuDataNew.push(data);
        this.setState({
          menuData: menuDataNew,
          curSelected: data.id,
        }, () => {
          _this.getMenuElWidth();
        })
      }
    }
  }
  removeMenuItem = (id, callback) => {
    const menuData = this.state.menuData.slice();
    let idx = -1;
    menuData.forEach((item, index) => {
      if (item.id === id) {
        idx = index;
      }
    })
    menuData.splice(idx, 1);
    let lastItem = null;
    if (menuData.length > 0) {
      lastItem = menuData[menuData.length - 1];
    }

    this.setState({
      menuData,
      curSelected: lastItem ? lastItem.id : 99,
    }, () => {
      callback && callback(lastItem);
    })
  }
  getMenuElWidth = () => {
    let menuElWidth = 0;
    let menuListWidth = 0;
    if (this.menuEl) {
      menuElWidth = this.menuEl.clientWidth;
    }
    if (this.menuList) {
      menuListWidth = this.menuList.clientWidth;
    }
    if (this.menuList > this.menuElWidth) {

    }
  }
  handleTabClick = (item) => {
    const { onMenuTabClick } = this.props;
    this.setState({
      curSelected: item.id,
    }, () => {
      //执行点击路由跳转逻辑
      onMenuTabClick && onMenuTabClick(item.id);
    })
  }
  handleDelClick = (item) => {
    const { onMenuDelClick } = this.props;
    let menuData = this.state.menuData.slice();
    let idx = -1;
    let curSelected = -1;
    menuData.filter((itemData, index) => {
      if (item.id === itemData.id) {
        idx = index;
      }
      return item.id === itemData.id;
    })
    menuData.splice(idx, 1);

    if (menuData.length > 0) {
      curSelected = menuData[menuData.length - 1].id;
    } else {
      curSelected = 99;
    }
    this.setState({
      menuData,
      curSelected,
    }, () => {
      //执行相应的路由跳转
      onMenuDelClick && onMenuDelClick(curSelected, item.id);
    })
  }
  renderTabs = () => {
    const { menuData, curSelected } = this.state;
    const str = menuData.map(item => <Tab onClick={this.handleTabClick} onDelClick={this.handleDelClick}
      key={item.id} style={{ marginRight: 30 }}
      data={item} isSelected={curSelected === item.id ? true : false} />)
    return <div className={`${prefixCls}-list`} ref={el => this.menuList = el}>

      {str}
    </div>
  }
  handleFullScreen = () => {
    this.setState({
      isFullScreen: !isFullScreen,
    })
  }
  render() {
    const { className, style } = this.props;
    const { isFullScreen, showArrow } = this.state;
    const classNames = ClassNames({
      [className]: !!className,
    }, `${prefixCls}-wrapper`);
    return <div className={classNames}>
      <div className={`${prefixCls}-arrow  ${prefixCls}-left-arrow`} style={{ display: showArrow ? 'block' : 'none' }}>
        <img src={Arrow_left} />
      </div>
      <div className={`${prefixCls}-menu`} ref={el => this.menuEl = el}>
        <div className={'home'}>
          <img src={HomeImg} />
        </div>
        {this.renderTabs()}
      </div>
      <div className={`${prefixCls}-arrow  ${prefixCls}-right-arrow`} style={{ display: showArrow ? 'block' : 'none' }}>
        <img src={Arrow_right} />
      </div>
      <div className={`${prefixCls}-fullScreen`}>
        <FullScreen />
      </div>
    </div>
  }
}

TabBar.defaultProps = {

}
TabBar.propTypes = {

}
export default TabBar;

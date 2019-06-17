/**
 * header 主要AI平台单独使用
 */

import React from 'react';
import './index.less';
import ClassNames from 'class-names';
import {Menu,Avatar,Dropdown,Icon} from 'antd';
const prefixCls='kd-header';
import avatar from '../../images/xiaok.png';
class Header extends React.PureComponent{
	constructor(props){
		super(props);

	}
	handleLogout=()=>{
		const {onLogout}=this.props;
        onLogout && onLogout();
	}
	renderRightWrapper=()=>{
	      const {userInfo}=this.props;
	      const menu=(
	         <Menu selectedKeys={[]}>
	            <Menu.Item key="logout" onClick={this.handleLogout}><Icon type="logout" />退出登录</Menu.Item>
	         </Menu>
	      )
	      return (   
	          <div className={`${prefixCls}-rightWrapper`}>
	              <Dropdown overlay={menu}>
	                   <div className={`${prefixCls}-userInfo`}>
	                      <div className={`${prefixCls}-user`}>
	                         <div>
	                             您好，欢迎
	                         </div>
	                         <div>
	                             {userInfo.userName}
	                         </div>
	                      </div>
	                      <Avatar size="small" src={avatar}/>
	                   </div>
	              </Dropdown>

	          </div>
	      )
    }
	render(){
		const {className,style}=this.props;
	    const classNames=ClassNames({
	        [className]:!!className,

	    },`${prefixCls}-wrapper`)
		return <div className={classNames} style={style}>
	         <div className={`${prefixCls}-leftWrapper`}>
	          
	         </div>
	         <div className={`${prefixCls}-content`}>
                 
	         </div>
	         <div className={`${prefixCls}-rightWrapper`}>
	              {this.renderRightWrapper()}
	         </div>
		</div>
	}
}

export default Header;
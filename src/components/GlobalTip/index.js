/**
 * 全局message提示
 */

import React from 'react';
import './index.less';
import ClassNames from 'class-names';
import PropTypes from 'prop-types';

const prefixCls='kd-globalTip';
class GlobalTip extends React.Component{
	constructor(props){
		super(props);
	}
	state={
		showVisible:false,
		content:'',
		status:'',
	}
    success=(content)=>{
       this.setState({
       	   showVisible:true,
       	   content,
       	   status:'success',
       })
	}
	error=(content)=>{
       this.setState({
       	   showVisible:true,
       	   content,
       	   status:'error',
       })
	}
	wranning=(content)=>{
       this.setState({
       	   showVisible:true,
       	   content,
       	   status:'error',
       })
	}
	render(){
		const {showVisible,content,status}=this.state;
		const classNames=ClassNames({
            [`${prefixCls}-${status}`]:!!status,
            [`${prefixCls}-show`]:!!showVisible,
		},`${prefixCls}-wrapper`);
		return <div className={classNames}>
             {content}
		</div>
	}
}

GlobalTip.defaultProps={

}
GlobalTip.propTypes={

}
const message=new GlobalTip();
export default  message;
/*
 * 公共组件 
 *
 * 提示框
 */

import React from 'react';
import './index.less';
import ClassNames from 'class-names';
import PropTypes from 'prop-types';
const prefixCls='kd-tip';
import {Icon} from 'antd';

class Tip extends React.Component{
	constructor(props){
    	super(props);
  }
  state={
    showVisible:false,
  }
  componentWillUpdate(nextProps,nextState){
      
  }
  componentWillReceiveProps(nextProps){
    const {visible,autoClose,duration}=nextProps;
    if(visible){
      this.setState({
          showVisible:visible,
      },()=>{
         if(visible && autoClose && duration){
            this.startTimeout(duration);
         }
      })
    }
  }
  
  startTimeout=(duration)=>{
     const _this=this;
     const {onClose}=this.props;
     if(this.timeoutId!=-1)this.timeoutId=-1;
     this.timeoutId=setTimeout(function(){
        _this.setState({
          showVisible:false,
        },()=>{
          onClose && onClose();
        })
     },duration);
  }
  handleClose=()=>{
      const {onClose}=this.props;
      this.setState({
        showVisible:false,
      },()=>{
        onClose && onClose();
      })
  }
	render(){
		const {className,style,duration,status,overall,tipContent,autoClose}=this.props;
    const {showVisible}=this.state;
		const classNames=ClassNames({
           [`${prefixCls}-success`]:status && status==='success',
           [`${prefixCls}-error`]:status && status==='error',
           [`${prefixCls}-wranning`]:status && status==='wranning',
           [`${prefixCls}-overall`]:overall,
           [`${prefixCls}-partial`]:!overall,
           [`${prefixCls}-show`]:!!showVisible,
		},`${prefixCls}-wrapper`);
		let iconType=status==='success' ? 'check-circle' : 'exclamation-circle';
		let iconColor=status==='success' ? '#51D590' : (status==='error' ? '#FF7876' : '#ECC777');
    if(status==''){
      iconColor='';
      iconType='';
    }
		return <div className={classNames} style={style}>
    		     <div className={`${prefixCls}-icon`}>
                {
                  status ? <Icon type={iconType} theme={'filled'} style={{color:iconColor,fontSize:20}}/> : null
                }
                    
    		     </div>
             <div className={`${prefixCls}-content`}>
	             {
	             	 tipContent
	             }
             </div>
             <div className={`${prefixCls}-del`}>
                  {
                    autoClose && autoClose===false ? <Icon type='close' onClick={this.handleClose} style={{color:'#868686'}}/> : null
                  }
             </div>
		</div>
	}
}
Tip.defaultProps={
   duration:1000,
   tipContent:'',
   status:'',
   overall:true,
   visible:false,
   autoClose:true,
}
Tip.propTypes={
   duration:PropTypes.number, //收起间隔
   tipContent:PropTypes.string.isRequired,//提示语
   style:PropTypes.object,//样式
   overall:PropTypes.bool,//是否全局
   visible:PropTypes.bool,//是否可见
   status:PropTypes.string,//状态 ：success 、 error 、warnning
   autoClose:PropTypes.bool,//是否自动收起
}

export default Tip;
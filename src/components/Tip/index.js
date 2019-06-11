/*
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
	render(){
		const {className,style,duration,status,overall,visible,tipContent}=this.props;
		const classNames=ClassNames({
           [`${prefixCls}-success`]:status && status==='success',
           [`${prefixCls}-error`]:status && status==='error',
           [`${prefixCls}-wranning`]:status && status==='wranning',
           [`${prefixCls}-overall`]:overall,
           [`${prefixCls}-partial`]:!overall,
           [`${prefixCls}-show`]:!!visible,
		},`${prefixCls}-wrapper`);
		const iconType=status==='success' ? 'check-circle' : 'exclamation-circle';
		const iconColor=status==='success' ? '#51D590' : (status==='error' ? '#FF7876' : '#ECC777');
		return <div className={classNames} style={style}>
		     <div className={`${prefixCls}-icon`}>
                <Icon type={iconType} theme={'filled' } style={{color:iconColor,fontSize:20}}/>
		     </div>
             <div className={`${prefixCls}-content`}>
	             {
	             	tipContent
	             }
             </div>
		</div>
	}
}
Tip.defaultProps={
   duration:1000,
   tipContent:'',
   status:'success',
   overall:true,
   visible:false,
}
Tip.propTypes={
   duration:PropTypes.number,
   tipContent:PropTypes.string.isRequired,
   style:PropTypes.object,
   overall:PropTypes.bool,
   visible:PropTypes.bool,
   status:PropTypes.string,
}

export default Tip;
/**
 * 页签
 */

import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'class-names';
import './index.less';
const prefixCls='kd-tab';
class Tab extends React.Component{
	constructor(props){
		super(props);
	}
	state={
        showDecoration:false,
	}
	handleClick=(data)=>{
		const {onClick}=this.props;
		onClick && onClick(data);
		// this.setState({
		// 	showDecoration:true,
		// })
	}
	renderDecoration=()=>{
		//const {showDecoration}=this.state;
		const {isSelected}=this.props;
        return <div className={`${prefixCls}-decoration ${isSelected ? 'show' : ''}`} style={{width:isSelected ? '100%' : 0}}>
                
	    </div>
	}
	render(){
	   const {className,style,data,isSelected}=this.props;
	   const classNames=ClassNames({
	       [className]:!!className,
	   },`${prefixCls}-wrapper`);
	   const {showDecoration}=this.state;
       return <div className={classNames} style={style} onClick={()=>this.handleClick(data)}>
             <div className={`${prefixCls}-content`}>
	             <span className={`${prefixCls}-text`} style={{color:isSelected ? '#5582F3' : '#5F7196'}}>
	                {data.name}
	             </span>
	             <span className={`${prefixCls}-del`}>
	                
	             </span>
	         </div>
	         {this.renderDecoration()}
       </div>
	}
}

Tab.defaultProps={
   
}
Tab.propTypes={

}
export default Tab;

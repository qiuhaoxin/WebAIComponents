/**
 * 展示正文内容
 * 
 */

import React from 'react';
import './index.less';
import ClassNames from 'class-names';
import PropTypes from 'prop-types';

const prefixCls='kd-contentcard';

class ContentCard extends React.PureComponent{
	constructor(props){
		super(props);
	}
	render(){
		const {className,style,border}=this.props;
		const classNames=ClassNames({
           [`${prefixCls}-border`]:!!border,

		},`${prefixCls}-wrapper`);
		return <div className={classNames} style={style}>
           {this.props.children}
		</div>
	}
}

ContentCard.defaultProps={
   border:true,
}
ContentCard.propTypes={
   border:PropTypes.bool,
}
export default ContentCard;
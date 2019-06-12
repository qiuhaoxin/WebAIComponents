/**
 * 展示正文内容
 * 
 */

import React from 'react';
import './index.less';
import ClassNames from 'class-names';
import PropTypes form 'prop-types';

const prefixCls='kd-contentcard';
class ContentCard extends React.PureComponent{
	constructor(props){
		super(props);
	}
	render(){
		const {className,style}=this.props;
		const classNames=ClassNames({

		},`${prefixCls}-wrapper`);
		return <div className={classNames} style={style}>
           {this.props.children}
		</div>
	}
}


ContentCard.defaultProps={

}
ContentCard.propTypes={

}
export default ContentCard;
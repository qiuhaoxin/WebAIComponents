/**
 * 图标
 */

import React from 'react';
import './index.less';
import ClassNames from 'class-names';

class Icon extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		const {type}=this.props;
        const classNames=ClassNames({
           kdIcon:true,	
           [type]:!!type,
        },'icon');
        console.log('className is ',classNames);
		return <span className={classNames}></span>
	}
}

export default Icon;
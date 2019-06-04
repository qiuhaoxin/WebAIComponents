/**
 * 侧边功能导航栏
 * data:2019/06/03
 * author:haoxin_qiu
 */

import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'class-names';
import './index.less';

const prefixCls='kd-sn';
class SlideNav extends React.Component{
    constructor(props){
    	super(props);
    	this.data=[
            {id:0,name:'qiuhaoxin'},
            {id:1,name:'qiuqiuling'},
            {id:2,name:'qiuhaorong'},
    	]
    }
    renderNav=()=>{
    	const {data}=this.props;
        const str=data.map(item=><li key={item.id}><img src={item.img}/><span>{item.name}</span></li>)
    	return <ul>
            {str}
    	</ul>
    }
    render(){
    	const {className,style}=this.props;
    	const classNames=ClassNames({
           [className]:!!className,
    	},`${prefixCls}-wrapper`);
    	return <div className={classNames} style={style}>
             {this.renderNav()}
    	</div>
    }
}

SlideNav.defaultProps={

}
SlideNav.propTypes={

}
export default SlideNav;
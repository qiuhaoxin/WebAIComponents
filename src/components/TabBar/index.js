/**
 * 菜单管理条
 */
import React from 'react';
import './index.less';
import PropTypes from 'prop-types';
import Tab from '../Tab';
import ClassNames from 'class-names';

const prefixCls='kd-tabBar';
class TabBar extends React.Component{
    constructor(props){
    	super(props);
    }
    state={
    	menuData:[],
    	curSelected:-1,
    }
    componentWillReceiveProps(nextProps){
    	const {data}=nextProps;
    	const {menuData}=this.state;
    	if(menuData.length==0 || data.id!=this.props.data.id){
            const existData=menuData.filter(item=>item.id==data.id);
            if(existData.length > 0){
            	//不用把菜单数据加进来，只要设置选中项
            	this.setState({
                    curSelected:data.id,
            	})
            }else{
            	let menuDataNew=this.state.menuData.slice();
            	menuDataNew.push(data);
            	this.setState({
            		menuData:menuDataNew,
            		curSelected:data.id,
            	})
            }
    	}
    }
    handleTabClick=(item)=>{
       this.setState({
       	  curSelected:item.id,
       })
    }
    renderTabs=()=>{
    	const {menuData,curSelected}=this.state;
        const str=menuData.map(item=><Tab onClick={this.handleTabClick} key={item.id} style={{marginRight:30}} 
        	data={item} isSelected={curSelected===item.id ? true : false} />)
    	return <div className={`${prefixCls}-list`}>
            {str}
    	</div>
    }
    render(){
    	const {className,style}=this.props;
    	const classNames=ClassNames({
           [className]:!!className,
    	},`${prefixCls}-wrapper`);
    	return <div className={classNames}>
           {this.renderTabs()}
    	</div>
    }
}

TabBar.defaultProps={

}
TabBar.propTypes={

}
export default TabBar;

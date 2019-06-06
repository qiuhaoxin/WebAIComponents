/**
 * 全屏
 */
import React from 'react';
import './index.less';
import ClassNames from 'class-names';
import ScaleUp from '../../images/scale-up.png';
import ScaleDown from '../../images/scale-down.png';
import PropTypes from 'prop-types';

const prefixCls='kd-fullScreen';
class FullScreen extends React.PureComponent{
	constructor(props){
		super(props);
	}
	state={
		isFullScreen:false,
	}
	fullScreen=()=>{
        const el=document.documentElement;
        const rfs=el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullScreen;
        if(typeof rfs!='undefined' && rfs){
           rfs.call(el);
        }
        return;
	}
	exitFullScreen=()=>{
		if (document.exitFullscreen) {  
            document.exitFullscreen();  
        }  
        else if (document.mozCancelFullScreen) {  
            document.mozCancelFullScreen();  
        }  
        else if (document.webkitCancelFullScreen) {  
            document.webkitCancelFullScreen();  
        }  
        else if (document.msExitFullscreen) {  
            document.msExitFullscreen();  
        } 
        if(typeof cfs != "undefined" && cfs) {
            cfs.call(el);
        }
	}
	handleClick=()=>{
        const {isFullScreen}=this.state;
        const _this=this;
         if(!isFullScreen){
         	this.setState({
         		isFullScreen:true,
         	},()=>{
         		_this.fullScreen()
         	})
         }else{
         	this.setState({
         		isFullScreen:false,
         	},()=>{
         		_this.exitFullScreen();
         	})
         }
        
	}
	render(){
		const {className,style}=this.props;
		const {isFullScreen}=this.state;
		const classNames=ClassNames({
           [className]:!!className,
		},`${prefixCls}-wrapper`);
		return <div className={classNames} style={style} onClick={this.handleClick}>
           {
           	  isFullScreen ? <img src={ScaleDown}/> : <img src={ScaleUp}/>
           }
		</div>
	}
}

FullScreen.defaultProps={
    isFullScreen:false
}
FullScreen.propTypes={
    isFullScreen:PropTypes.bool,
}
export default FullScreen;
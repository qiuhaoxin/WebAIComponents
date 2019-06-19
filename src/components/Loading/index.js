/*
*  haoxin_qiu
*  加载效果
*/
import React, { Component } from 'react';
import './index.less';
import PropTypes from 'prop-types';
const prefixCls = 'ai-loading';
class Loading extends Component {
    componentDidMount() {
    }
    stopPreventDefault = (e) => {
        e.preventDefault();
    }
    handleClick = () => {

    }
    render() {
        const { londingStr, visible, style } = this.props;
        const visibleCls = visible ? `${prefixCls}-show` : `${prefixCls}-hide`;
        return (
            <div className={`${prefixCls}-wrapper ${visibleCls}`}>
                <div className={`${prefixCls}-inner`} style={style}>
                    <div className={`${prefixCls}-content`}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <div className={`${prefixCls}-tips`}>
                        {londingStr}
                    </div>
                </div>
            </div>
        )
    }
}
Loading.defaultProps = {
    loadingStr: '正在跳转',
    visible: false,
}
Loading.propTypes = {
    loadingStr: PropTypes.string.isRequired,
    visible: PropTypes.bool,
}
export default Loading;
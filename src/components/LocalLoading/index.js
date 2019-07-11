/*
*  haoxin_qiu
*  加载效果
*/
import React, {Component} from 'react';
import './index.less';
import PropTypes from 'prop-types';

const prefixCls = 'ai-partial-loading';

class PartialLoading extends Component {

    handleWrapperClick = (e) => {
        e.stopPropagation()
    }

    render() {
        const {loadingStr: loadingStr, visible, style} = this.props;
        const visibleCls = visible ? `${prefixCls}-show` : `${prefixCls}-hide`;
        return (
            <div onClick={this.handleWrapperClick} className={`${prefixCls}-wrapper ${visibleCls}`}>
                <div className={`${prefixCls}-inner`} style={style}>
                    <div className={`${prefixCls}-content`}>
                        <span/> <span/> <span/> <span/>
                    </div>

                    <div className={`${prefixCls}-tips`}>
                        {loadingStr}
                    </div>
                </div>
            </div>
        )
    }
}

PartialLoading.defaultProps = {
    loadingStr: '正在跳转',
    visible: false,
}
PartialLoading.propTypes = {
    loadingStr: PropTypes.string.isRequired,
    visible: PropTypes.bool,
}
export default PartialLoading;
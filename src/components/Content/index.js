/**
 * 正文容器
 * 
 */

import React from 'react';
import './index.less';
import PropTypes from 'prop-types';
import ClassNames from 'class-names';
import Tip from '../Tip';
import Loading from '../Loading';

const prefixCls = 'web-content';
class Content extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const { tip, onTipClose, showLoading } = this.props;
        const classNames = ClassNames({

        }, `${prefixCls}-wrapper`);
        return <div className={classNames}>
            <Tip {...tip} onClose={onTipClose} />
            <Loading visible={showLoading} />
            {
                this.props.children
            }
        </div>
    }
}

export default Content;
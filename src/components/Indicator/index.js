/**
 * 递增、递减指示器
 */

import React from 'react';
import { Icon } from 'antd';
import './index.less';

class Indicator extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        const { initialValue, maxVal, minVal, labelText } = this.props;
        return <div>
            <label>{labelText}</label>
            <div>
                <Icon type="minus-square" />
                <span>{initialValue}</span>
                <Icon type="plus-square" />
            </div>
        </div>
    }
}

export default Indicator;


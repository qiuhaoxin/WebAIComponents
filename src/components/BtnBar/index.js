/**
 * 按钮条
 */

import React from 'react';
import './index.less';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import ClassNames from 'class-names';

const prefixCls = 'web-btnbar';
class BtnBar extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        const { btnArr, style, className } = this.props;
        const classNames = ClassNames({
            [className]: !!className,
        }, `${prefixCls}-wrapper`);
        return <div className={classNames} style={style}>
            {
                btnArr.map(item => <Button type='primary'
                    key={item.id}
                    style={{ backgroundColor: '#5582F3', borderRadius: 2, marginRight: 10, fontSize: 12, height: 28 }}
                    onClick={item.onClick}>{item.name}</Button>)
            }
        </div>
    }
}
BtnBar.defaultProps = {

}
BtnBar.propTypes = {
    btnArr: PropTypes.array.isRequired,
}
export default BtnBar;
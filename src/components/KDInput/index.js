import React from 'react'
import './index.css'
import {Icon, Input} from "antd";
import PropTypes from "prop-types";

const prefix = 'kd-input-';

class KDInput extends React.Component {
    render() {
        if (this.props.prefix) {
            return <span className={'kd-input-wrapper'} >
                {this.props.prefix}
                <input {...this.props} className={'kd-input  input-with-prefix'}/>
            </span>
        }else {
            return <input {...this.props} className={'kd-input'}/>
        }
    }
}

KDInput.propTypes = {
    prefix: PropTypes.any //暂时写死的,只能传单个antd的Icon

};

KDInput.defaultProps = {
};

export default KDInput;

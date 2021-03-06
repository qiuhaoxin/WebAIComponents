import React from 'react'
import './index.css'
import {Icon} from "antd";
import PropTypes from "prop-types";
import ClassNames from "classnames";

const prefix = "kd-card";
export default class Card extends React.Component {

    hideContent = () => {
        this.setState({
            showContent: !this.state.showContent
        })
    };

    state = {
        showContent: true
    };

    componentDidMount() {
        this.setState({})
    }

    render() {
        const {style, className} = this.props;
        const classNames = ClassNames({[`${className}`]: className,}, `${prefix}-card-wrapper`);

        let {title, extra, children} = this.props;

        const angle = this.state.showContent ? '0deg' : '-90deg'

        const iconStyle = {
            transform: `rotate(${angle})`,
            transition: 'transform 0.3s linear'
        }

        return (
            <div className={classNames} style={style}>
                <div className={`${prefix}-head`}>
                    <div className={`${prefix}-title`} onClick={this.hideContent}>
                        <span className={`${prefix}-hide`}><Icon style={iconStyle} type="caret-down"/></span>
                        {title}
                    </div>
                    <div className={`${prefix}-extra`}>
                        {extra}
                    </div>
                </div>

                <div
                    style={{display: this.state.showContent ? "block" : 'none'}}
                    className={`${prefix}-content`}
                >
                    {children}
                </div>
            </div>
        )
    }
}


Card.propTypes = {};
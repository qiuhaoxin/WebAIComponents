import React from 'react'
import './index.css'
import {Icon} from "antd";
import PropTypes from "prop-types";

const prefix = "kd-card";
export default class Card extends React.Component {

    hideContent = () => {

        this.setState({
            // contentHeight: this.state.contentHeight === '0' ? this.children.scrollHeight : '0'
            contentHeight: this.state.contentHeight === '0' ? 'auto' : '0'
        })
    };

    state = {
        contentHeight: 'auto'
    };

    componentDidMount() {
        this.setState({
            // contentHeight:this.children.scrollHeight
            // contentHeight:this.children.scrollHeight
        })
    }

    render() {
        let {title, extra, children} = this.props;
        return (
            <div className={`${prefix}-card-wrapper`}>
                <div className={`${prefix}-head`} >
                    <div className={`${prefix}-title`} onClick={this.hideContent} >
                        <span className={`${prefix}-hide`}><Icon type="down"/></span>
                        {title}
                    </div>
                    <div className={`${prefix}-extra`}>
                        {extra}
                    </div>
                </div>
                <div ref={(e) => this.children = e}
                     style={{height: this.state.contentHeight}}
                     className={`${prefix}-content`}
                >
                    {children}
                </div>
            </div>
        )
    }
}


Card.propTypes = {

};
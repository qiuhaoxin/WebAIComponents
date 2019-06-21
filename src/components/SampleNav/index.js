/*
* 样本训练：侧边导航条
*/
import React, { Component } from 'react';
import './index.less';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import { message } from 'antd';

const prefixCls = "web-samplenav";

class SampleNav extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        selected: -1,
    }
    componentDidMount() {
        const { selected } = this.props;
        this.setState({
            selected,
        })
    }
    componentWillReceiveProps(nextProps) {
        const { selected } = nextProps;
        console.log('willReveiveProps selecteds is ', selected);
        if (selected && this.state.selected === -1) {//只在初始化的时候设置
            this.setState({
                selected,
            })
        }
    }
    componentWillUpdate(nextProps, nextState) {
        return nextProps.selected != this.props.selected || nextState.selected != this.state.selected;
    }
    handleItemClick = (item) => {
        const { onItemClick } = this.props;
        this.setState({
            selected: item.id,
        }, () => {
            onItemClick && onItemClick(item);
        })

    }
    renderList = () => {
        const { selected } = this.state;
        const { intentionList } = this.props;
        const listStr = intentionList.map(item => <li
            key={item.id}
            onClick={() => this.handleItemClick(item)}
            className={`${selected == item.id ? 'selected' : ''}`}
        >
            {`${item.name}(${item.sampleCount})`}
        </li>);
        return (
            <ul>
                {listStr}
            </ul>
        )
    }
    render() {
        const { style, className } = this.props;
        const classNames = ClassNames({
            [className]: !!className,
        }, `${prefixCls}-wrapper`);
        return (
            <div className={classNames} style={style}>
                <div className={`${prefixCls}-innerWrapper`}>
                    {this.renderList()}
                </div>
            </div>
        )
    }
}

export default SampleNav;
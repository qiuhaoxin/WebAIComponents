/*
* 样本训练：侧边导航条
*/
import React, { Component } from 'react';
import './index.less';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import { message } from 'antd';
import debounce from 'lodash/debounce';

const prefixCls = "web-samplenav";

class SampleNav extends Component {
    constructor(props) {
        super(props);
        this.wrapperClientHeight = 0;
    }
    state = {
        selected: -1,
    }
    componentDidMount() {
        const _this = this;
        const { selected, extraHeight } = this.props;
        this.wrapperClientHeight = this.wrapperEl ? this.wrapperEl.clientHeight : 0;
        if (extraHeight && typeof extraHeight == 'number') {
            this.wrapperClientHeight += extraHeight;
        }
        console.log('this.wrapperClient is ', this.wrapperClientHeight);

        this.setState({
            selected,
        }, () => {
            _this.bindEvent();
        })
    }
    bindEvent = () => {
        if (this.wrapperEl) {
            this.scrollMethod = debounce(this.handleScroll, 300);
            this.wrapperEl.addEventListener('scroll', this.scrollMethod, false)
        }
    }
    handleScroll = (e) => {
        const { onScroll } = this.props;
        let scrollTop = 0,
            scrollHeight = 0;
        if (this.wrapperEl) {
            scrollTop = this.wrapperEl.scrollTop;
            scrollHeight = this.wrapperEl.scrollHeight;
            if (scrollHeight - 50 < scrollTop + this.wrapperClientHeight) {
                console.log('执行加载指令！');
                onScroll && onScroll();
            }
        }

        console.log('scrollTop is ' + scrollTop + " and scrollHeight is " + scrollHeight);

    }
    componentWillUnmount() {
        if (this.wrapperEl) {
            this.wrapperEl.removeEventListener('scroll', this.scrollMethod, false);
        }
    }
    componentWillReceiveProps(nextProps) {
        const { selected } = nextProps;
        if (selected != this.props.selected) {
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
        const { intentionList, keyStr, extra } = this.props;
        const listStr = intentionList.map(item => <li
            key={item.id}
            onClick={() => this.handleItemClick(item)}
            className={`${selected == item.id ? 'selected' : ''}`}
        >

            <div className={'mainInfo'}>
                {item[keyStr]}
            </div>
            {
                extra ? extra(item) : null
            }
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
            <div className={classNames} style={style} ref={el => this.wrapperEl = el}>
                <div className={`${prefixCls}-innerWrapper`}>
                    {this.renderList()}
                </div>
            </div>
        )
    }
}

export default SampleNav;
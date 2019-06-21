/**
 * 词槽面板
 */

import React from 'react';
import './index.less';
import ClassNames from 'class-names';
import { Button } from 'antd';
import { findDOMNode } from 'react-dom';

const prefixCls = 'web-nlpframe';
class NLPFrame extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        selectedWs: -1,
    }
    componentDidMount() {

    }
    componentWillReceiveProps(nextProps) {
        const { visible } = nextProps;
        if (visible) {
            document.addEventListener('click', this.handleDocClick, false);
        }
    }
    componentWillUnmount() {
        document.removeEventListener('click', this.handleDocClick, false);
    }
    isChildOf = (child, parent) => {
        let parentNode = null;
        if (child && parent) {
            parentNode = child.parentNode;
            while (parentNode) {
                if (parent == parentNode) {
                    return true;
                }
                parentNode = parentNode.parentNode;
            }
            return false;
        }
    }
    handleDocClick = (e) => {
        const target = e.target;
        let result = true;
        if (target.nodeName != 'LI') {//Select Option
            result = this.isChildOf(target, this.wrapper);
        }
        const { onSave } = this.props;
        if (result) {

        } else {
            document.removeEventListener('click', this.handleDocClick, false);
            onSave && onSave();
        }
    }
    handleCheckboxClick = (e, item) => {
        const { onChooseWordSlot } = this.props;
        onChooseWordSlot && onChooseWordSlot(item);
    }
    renderWordslotList = () => {
        const { wordslotList, selectedWs } = this.props;
        const str = wordslotList.map(item => {
            const cls = item.id === selectedWs ? 'checked' : '';
            return <li key={item.id} className={cls} onClick={(e) => this.handleCheckboxClick(e, item)}>
                <span className={'checkbox'}></span><span style={{ marginLeft: 8 }}>{item.name}</span>
            </li>
        })
        return <ul className={`${prefixCls}-wsList`}>
            {str}
        </ul>
    }
    handleClose = () => {
        const { onFrameClose } = this.props;
        document.removeEventListener('click', this.handleDocClick, false);
        onFrameClose && onFrameClose();
    }
    handleAction = (e) => {
        const target = e.target;
        const { data, onAction } = this.props;
        const text = target && target.innerText;
        onAction && onAction(text, data);
    }
    render() {
        const { className, style, selectedWs, visible } = this.props;
        const classNames = ClassNames({
            [className]: !!className,
            [`${prefixCls}-show`]: !!visible,
            [`${prefixCls}-hide`]: !visible,
        }, `${prefixCls}-wrapper`);
        return <div className={classNames} style={style} ref={el => this.wrapper = el}>
            <div className={`${prefixCls}-innerWrapper`}>
                <div className={`${prefixCls}-header`}>
                    <span className={'select'}>选择词槽</span>
                    <span className={'action'} onClick={this.handleAction}>{selectedWs ? '移除' : '切词'}</span>
                </div>
                {
                    this.renderWordslotList()
                }
                <div className={`${prefixCls}-footer`}>
                    <Button onClick={this.handleClose}>关闭</Button>
                </div>
            </div>
        </div>
    }
}

export default NLPFrame;
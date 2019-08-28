
import React from 'react';
import ReactDOM from 'react-dom';
import { Icon } from 'antd';
import './index.less';
import classNames from 'classnames';
let newInstance = null;
let duration = 0;
let getContainer = null;
const prefixCls = 'ai-message';
class Notification extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        visible: false,
        content: '',
        status: '',
    }
    show = (content, status, duration = 1500) => {
        let _this = this;
        this.setState({
            visible: true,
            content,
            status,
        }, () => {
            _this.timeId = setTimeout(function () {
                _this.setState({
                    visible: false,
                })
            }, duration)
        })
    }
    hide = () => {
        this.setState({
            visible: false,
        })
    }
    handleClose = () => {
        const { onClose } = this.props;
        this.setState({
            visible: false,
        }, () => {
            onClose && onClose();
        })
    }
    render() {
        const { visible, content, status } = this.state;
        let iconType = status === 'success' ? 'check-circle' : 'exclamation-circle';
        let iconColor = status === 'success' ? '#51D590' : (status === 'error' ? '#FF7876' : '#ECC777');
        const clsName = classNames({
            [`${prefixCls}-${status}`]: !!status,
            [`${prefixCls}-show`]: !!visible,
            [`${prefixCls}-hide`]: !visible,
        }, `${prefixCls}-wrapper`)
        return <div className={clsName}>
            <div className={`${prefixCls}-icon`}>
                {
                    status ? <Icon type={iconType} theme={'filled'} style={{ color: iconColor, fontSize: 20 }} /> : null
                }

            </div>
            <div className={`${prefixCls}-content`}>
                {
                    content
                }
            </div>
            <div className={`${prefixCls}-del`}>
                <Icon type='close' onClick={this.handleClose} style={{ color: '#868686' }} />
            </div>
        </div>
    }
}
Notification.newInstance = function (options, callback) {
    const { getContainer, ...props } = options || {};
    const div = document.createElement('div');
    div.style.cssText = ";position:absolute;left:0;width:100%;top:0;";
    let root = null;
    if (getContainer) {
        if (typeof getContainer === 'function') {
            root = getContainer();
        }else if(getContainer instanceof HTMLElement){
            root = getContainer
        }
        root.appendChild(div)
    } else {
        document.body.appendChild(div);
    }
    let called = false;
    function ref(notification) {
        if (called) return;
        called = true;
        callback({
            component: notification,
            destroy: function () {
                ReactDOM.unmountComponentAtNode(div);
                div.parentNode.removeChild(div);
            },
            show: function (content, duration, status, onClose) {
                console.group("message")
                console.log(`getContainer is : `, getContainer)
                console.log('notification call is ', notification)
                console.groupEnd()
                notification.show(content, status, duration, onClose);
            },
            hide: function () {

            }
        })
    }
    ReactDOM.render(<Notification ref={ref} {...props}></Notification>, div)
}
function notice(content, duration, status, onClose) {
    if (newInstance == null) {
        Notification.newInstance({ getContainer, content, duration, status, onClose }, function (notification) {
            newInstance = notification;
            newInstance.show(content, duration, status, onClose);
        })

    } else
        newInstance.show(content, duration, status, onClose);

}

export default {
    success(content, duration, onClose) {
        return notice(content, duration, 'success', onClose);
    },
    warning(content, duration, onClose) {
        return notice(content, duration, 'warning', onClose);
    },
    error(content, duration, onClose) {
        return notice(content, duration, 'error', onClose);
    },
    config(options) {
        if (options.hasOwnProperty('duration')) {
            duration = options.duration;
        }
        if (options.hasOwnProperty('getContainer')) {
            getContainer = options.getContainer;
        }
    },
    destroy() {
        if (newInstance != null) {
            newInstance.destroy();
            newInstance = null;
        }
    }
}
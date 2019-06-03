import React from 'react'

import Styles from './index.module.css'

export default class Card extends React.Component {


    hideContent = () => {
        this.setState({
            contentHeight: this.state.contentHeight === '0' ? '100px' : '0'
        })
    }

    state = {
        contentHeight: '100px'
    }

    render() {
        let {title, extra, children} = this.props
        return (
            <div className={`${Styles["card-wrapper"]}`}>
                <div className={`${Styles["head"]}`}>
                    <div className={`${Styles["title"]}`}>
                        <span className={`${Styles["hide"]}`} onClick={this.hideContent}>∨</span>
                        {title}
                    </div>
                    <div className={`${Styles["extra"]}`}>
                        {extra}
                    </div>
                </div>
                <div style={{height: this.state.contentHeight}} className={`${Styles["content"]}`}>
                    {children}
                </div>
            </div>
        )
    }
}


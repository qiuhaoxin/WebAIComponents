import React from 'react'
import ListFilter from '../ListFilter'
import ClassNames from 'classnames'
import './index.css'


const prefix = 'kd-tb'
export default class Toolbar extends React.Component {

    state = {
        filter: {
            name: ''
        }
    }

    render() {
        const {style, className} = this.props
        const classNames = ClassNames({[`${className}`]: className,}, `kd-tb-wrapper`)
         return (
            <div className={classNames} style={style}>
                <div className={`${"kd-tb-up-wrapper"}`}>
                    <div className={`${"lkd-tb-eft-wrapper"}`}>
                        机器人列表
                    </div>
                    <ListFilter/>
                </div>
                <div className={`${"kd-tb-down-wrapper"}`}>
                    {this.props.extra}
                </div>
            </div>
        )
    }
}

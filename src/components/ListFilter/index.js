import React from 'react'
import {Icon} from "antd";
import ClassNames from "classnames";
import './index.css'

const prefix = 'kd-lf-'

export default class ListFilter extends React.Component {

    state = {
        filter: {
            name: '正在开发',
            innerName: ''
        }
    }

    handleFilterInput = (e) => {
        this.setState({
            filter: {
                ...this.state.filter,
                innerName: e.target.value
            }
        })
    }

    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.setState({
                filter: {
                    name: this.state.filter.innerName,
                    innerName: ''
                }
            })
        }
    }

    deleteItem = () => {
        this.setState({
            filter: {
                name: '',
                innerName: ''
            }
        })
    }

    render() {
        let filterItemDom = this.state.filter.name === '' ? null : <FilterItem content={this.state.filter.name} deleteItem={this.deleteItem}/>
        const {style, className} = this.props
        const classNames = ClassNames({[`${className}`]: className,}, `kd-lf-right-wrapper`)
        return <div className={classNames} style={style}>
            <div className={`${["kd-lf-condition"]}`}>
                已选条件：{filterItemDom}
            </div>
            <div className={`${["kd-lf-filter"]}`}>
                <input value={this.state.filter.innerName} onKeyDown={this.handleKeyDown} onChange={this.handleFilterInput} placeholder={"搜索技能名称"}/>
                <span><Icon type="filter" />展开过滤</span>

            </div>
        </div>
    }
}

class FilterItem extends React.Component {

    render() {

        return (
            <span className={`${["kd-lf-filter-item"]}`}>
                {this.props.content}
                <Icon className={`${["kd-lf-delete-icon"]}`} onClick={this.props.deleteItem} type="close"/>
            </span>
        )
    }
}

import React from 'react'
import {Icon} from "antd";
import ClassNames from "classnames";
import './index.css'
import withErrorHandler from "../Error/withErrorHandle";
import PropTypes from 'prop-types'
import KDInput from "../KDInput";

const prefix = 'kd-lf-';

class ListFilter extends React.Component {

    constructor(props) {
        super(props);

        let filter = {}
        if (this.props.initValue) {
            filter = this.props.initValue
        } else {
            let conditions = {};
            props.filters.forEach(item => {
                    conditions[item.columnName] = []
                }
            );
            filter = {
                name: '',
                conditions
            }
        }

        this.state = {
            showFilterConditions: false,
            innerName: '',
            filter
        };
    }

    handleConditionClick = (key, value) => {
        let conditions = Object.assign([], this.state.filter.conditions);
        Object.keys(conditions).forEach(item => {
            if (item === key) {
                // 当前key中被选中的部分,暂时只做单选,所以直接替换掉这个值
                conditions[item] = [value]
            }
        });
        this.setState({
            filter: {
                ...this.state.filter,
                conditions: conditions
            }
        }, this.props.onChange && this.props.onChange(this.state.filter))
    };

    handleFilterInput = (e) => {
        this.setState({
            ...this.state,
            filter: {
                ...this.state.filter,
            },
            innerName: e.target.value
        })
    };

    handleKeyDown = (e) => {
        if (e.key === 'Enter') {

            // todo test
            if (this.state.innerName === '12345') {
                throw new Error("just test")
            }

            this.setState({
                ...this.state,
                filter: {
                    ...this.state.filter,
                    name: this.state.innerName,
                },
                innerName: ''
            }, () => {
                this.props.onChange && this.props.onChange(this.state.filter)
            })
        }
    };

    deleteInputItem = () => {
        this.setState({
            filter: {
                ...this.state.filter,
                name: '',
            },
            innerName: ''
        })
    };

    deleteOptionItem = (e) => {
        let conditions = Object.assign([], this.state.filter.conditions);
        Object.keys(conditions).forEach(key => {
            if (key === e.columnItem.columnName) {
                conditions[key] = []
            }
        });
        this.setState({
            filter: {
                ...this.state.filter,
                conditions: conditions
            }
        })
    };

    getShowStr = (columnName, seletedOptions) => {
        const filters = this.props.filters;
        let columnItem = filters.filter(item => item.columnName === columnName)[0];
        let targetOption = columnItem.options.filter(item => {
            return seletedOptions.some(seleteOption => seleteOption === item.value)
        });

        return {
            columnItem: columnItem,
            targetOption: targetOption
        }
    };

    handleShowConditions = () => {
        this.setState({showFilterConditions: !this.state.showFilterConditions})
    };

    renderConditions = () => {
        let doms = this.props.filters.map((item, index) =>
            <Condition
                key={index}
                data={item}
                conditions={this.state.filter.conditions}
                click={this.handleConditionClick}
            />);
        return <div className={'kd-lf-common-conditions'}>
            {doms}
        </div>
    };

    render() {
        const {style, className} = this.props;
        const classNames = ClassNames({[`${className}`]: className,}, `kd-lf-wrapper`);

        let domList = [];
        let filterName = this.state.filter.name &&
            <FilterInputItem key={-1} content={this.state.filter.name} deleteItem={this.deleteInputItem}/>;

        let conditions = this.state.filter.conditions;
        let ary = Object.keys(conditions).map((columnName, index) => {
            let seletedOptions = conditions[columnName];
            let content = this.getShowStr(columnName, seletedOptions);
            return <FilterSelectItem key={index} content={content} deleteItem={this.deleteOptionItem}/>
        });
        domList.push(filterName);
        domList.push(...ary);

        return <div className={classNames} style={style}>
            <div className={'kd-lf-right-wrapper'}>
                <div className={`${["kd-lf-title"]}`}>
                    <div className={`${"kd-lf-left-wrapper"}`}>
                        {this.props.title}
                    </div>
                    已选条件：{domList}
                </div>
                <div className={`${["kd-lf-filter"]}`}>
                    <KDInput
                        prefix={<Icon type="search"/>}
                        value={this.state.innerName}
                        onKeyDown={this.handleKeyDown}
                        onChange={this.handleFilterInput}
                        placeholder={this.props.placeholder || "搜索名称"}/>
                    <span style={{cursor: "pointer"}} onClick={this.handleShowConditions}><Icon
                        type="filter"/>展开过滤</span>
                </div>
            </div>
            {this.state.showFilterConditions && this.renderConditions()}
        </div>
    }
}

class Condition extends React.Component {
    render() {
        const data = this.props.data;
        const key = Object.keys(this.props.conditions).filter(item => item === data.columnName);
        const seleted = this.props.conditions[key];
        const doms = data.options.map((item, index) => {
            return (
                <span
                    key={index}
                    className={`kd-lf-condition-option ${seleted.some(selItem => selItem === item.value) ? 'kd-lf-condition-option-seleted' : ''}`}
                    onClick={() => this.props.click(key[0], item.value)}
                >
                    {item.key}
                </span>
            )
        });
        return <div className={'kd-lf-condition'}>
            <span className={'kd-lf-condition-title'}>{data.title}:</span>
            {doms}
        </div>
    }
}

class FilterSelectItem extends React.Component {
    render() {
        const {targetOption, columnItem} = this.props.content;
        let title = columnItem.title;
        let status = targetOption.map(item => item.key);

        return targetOption.length > 0 && (
            <span className={`${["kd-lf-filter-item"]}`}>
                {`${title}:  ${status}`}
                <Icon className={`${["kd-lf-delete-icon"]}`} onClick={() => this.props.deleteItem(this.props.content)}
                      type="close"/>
            </span>
        )
    }
}

class FilterInputItem extends React.Component {
    render() {
        return (
            <span className={`${["kd-lf-filter-item"]}`}>
                {this.props.content}
                <Icon className={`${["kd-lf-delete-icon"]}`} onClick={this.props.deleteItem} type="close"/>
            </span>
        )
    }
}

ListFilter.propTypes = {
    filters: PropTypes.array,
    onChange: PropTypes.func,
    title: PropTypes.string,
};

ListFilter.defaultProps = {
    filters: [],
    onChange: (e) => {
        console.log(`filter onChange:`, e)
    },
    title: '默认标题'
};


export default withErrorHandler(ListFilter)

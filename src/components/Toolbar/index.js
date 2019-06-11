import React from 'react'
import ListFilter from '../ListFilter'
import ClassNames from 'classnames'
import './index.css'
import withErrorHandler from "../Error/withErrorHandle";
import PropTypes from "prop-types";


const prefix = 'kd-tb';

class Toolbar extends React.Component {

    render() {

        const {style, className} = this.props;
        const classNames = ClassNames({[`${className}`]: className,}, `kd-tb-wrapper`);
        return (
            <div className={classNames} style={style}>
                <div className={`${"kd-tb-up-wrapper"}`}>
                    <ListFilter
                        initValue={this.props.initFilterValue}
                        placeholder={this.props.placeholder}
                        filters={this.props.filters}
                        onChange={this.props.onChange}
                        title={this.props.title}
                    />
                </div>
                <div className={`${"kd-tb-down-wrapper"}`}>
                    {this.props.extra}
                </div>
            </div>
        )
    }
}

Toolbar.propTypes = {
    filters: PropTypes.array, // 过滤条件
    onChange: PropTypes.func,   //
    title: PropTypes.string,
    initFilterValue: PropTypes.any, //过滤器的初始值,可选,如果给了就要保证绝对符合格式!
    placeholder: PropTypes.string,
};

export default withErrorHandler(Toolbar)
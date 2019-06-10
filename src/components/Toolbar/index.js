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
    filters: PropTypes.array,
    onChange: PropTypes.func,
    title: PropTypes.string,
};

export default withErrorHandler(Toolbar)
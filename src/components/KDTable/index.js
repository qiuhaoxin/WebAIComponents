import React from 'react'
import ClassNames from 'classnames'
import './index.css'
import {Table} from "antd";


const prefix = 'kd-table-';
export default class KDTable extends React.Component {

    state = {
        selectedRowKeys: [],
    };

    selectRow = (record) => {
        const selectedRowKeys = [...this.state.selectedRowKeys];
        if (selectedRowKeys.indexOf(record.key) >= 0) {
            selectedRowKeys.splice(selectedRowKeys.indexOf(record.key), 1);
        } else {
            selectedRowKeys.push(record.key);
        }
        this.onSelectedRowKeysChange(selectedRowKeys)
    };

    onSelectedRowKeysChange = (selectedRowKeys) => {
        this.setState({selectedRowKeys}, () => {
            this.props.onSelectedRowKeysChange && this.props.onSelectedRowKeysChange(this.state.selectedRowKeys)
        });
    };

    onShowSizeChange = (current, pageSize) => {
        console.log(current, pageSize);
    };

    handleTableChange = (e) => {
        this.props.onChange && this.props.onChange(e)
    };

    render() {
        const {style, className} = this.props;
        const classNames = ClassNames({[`${className}`]: className,}, `kd-table-wrapper`);
        const {selectedRowKeys} = this.state;

        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectedRowKeysChange,
        };

        const pagination = {
            ...this.props.pagination,
            position: 'top',
            showSizeChanger: true,
            // onShowSizeChange: this.onShowSizeChange,
            // total: 500,
            showTotal: (total, range) => {
                return `${range[0]}-${range[1]} of ${total} items`
            }
        };

        const columns = [
            {
                title: '',
                render: (text, record, index) => {
                    return `${index + 1}`
                }
            },
            ...this.props.columns
        ];

        return (
            <div className={classNames} style={style}>
                <Table
                    {...this.props}
                    rowKey={'fid'||'fID'||'FID'}
                    dataSource={this.props.dataSource}
                    columns={columns}
                    rowSelection={rowSelection}
                    size="small"
                    pagination={pagination}
                    onRow={(record) => ({
                        onClick: () => {
                            this.selectRow(record);
                        },
                    })}
                    onChange={this.handleTableChange}
                />
            </div>
        )
    }
}

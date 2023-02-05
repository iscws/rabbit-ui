/**
 * title: 分隔符
 * description: 相邻组件分隔符。
 */

import React from 'react';
import Space from '..';

import '../style';

const Split = () => (<span> | </span>)

export default () => {
    return (
        <Space split={<Split />}>
            Space
            <button>Button</button>
            <input type="text" />
            SpaceItem
        </Space>)
};
/**
 * title: 分隔符
 * description: 相邻组件分隔符。
 */

import React from 'react';
import { Space, Button } from 'rabbit-ui-antd';


const Split = () => (<span> | </span>)

export default () => {
    return (
        <Space split={<Split />}>
            Space
            <Button>Button</Button>
            <input type="text" />
            SpaceItem
        </Space>)
};
/**
 * title: 基本用法
 * description: 相邻组件水平间距。
 */

import React from 'react';
import { Space, Button } from 'rabbit-ui-antd';


export default () => {
    return (
        <Space>
            Space
            <Button>Button</Button>
            <input type="text" />
            SpaceItem
        </Space>)
};
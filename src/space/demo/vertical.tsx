/**
 * title: 垂直间距
 * description: 相邻组件垂直间距。
 */

import React from 'react';
import { Space, Button } from 'rabbit-ui-antd';


export default () => {
    return (
        <Space direction='vertical'>
            <Button>Button</Button>
            <Button>Button</Button>
            <Button>Button</Button>
            <Button>Button</Button>
            <Button>Button</Button>
            <Button>Button</Button>
        </Space>)
};
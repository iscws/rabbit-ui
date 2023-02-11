/**
 * title: 垂直间距
 * description: 相邻组件垂直间距。
 */

import React from 'react';
import { Space } from 'rabbit-ui-antd';


export default () => {
    return (
        <Space direction='vertical'>
            <button>Button</button>
            <button>Button</button>
            <button>Button</button>
            <button>Button</button>
            <button>Button</button>
        </Space>)
};
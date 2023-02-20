/**
 * title: Button 紧凑布局
 * description: Button 组件紧凑排列的示例。
 */

import React from 'react';
import { Space,Button } from 'rabbit-ui-antd';

export default () => {
    return (
        <Space.Compact>
            <Button>Button 1</Button>
            <Button>Button 2</Button>
            <Button>Button 3</Button>
            <Button>Button 4</Button>
            <Button>Button 5</Button>
            <Button>Button 6</Button>
        </Space.Compact>)
};
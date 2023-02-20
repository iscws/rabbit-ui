/**
 * title: 垂直方向紧凑布局
 * description: 垂直方向紧凑布局。
 */

import React from 'react';
import { Space, Button } from 'rabbit-ui-antd';

export default () => {
    return (
        <Space>
            <Space.Compact direction='vertical'>
                <Button size={'small'}>Button 1</Button>
                <Button size={'small'}>Button 2</Button>
                <Button size={'small'}>Button 3</Button>
                <Button size={'small'}>Button 4</Button>
            </Space.Compact>
            <Space.Compact direction='vertical'>
                <Button>Button 1</Button>
                <Button>Button 2</Button>
                <Button>Button 3</Button>
                <Button>Button 4</Button>
            </Space.Compact>
            <Space.Compact direction='vertical'>
                <Button size={'large'}>Button 1</Button>
                <Button size={'large'}>Button 2</Button>
                <Button size={'large'}>Button 3</Button>
                <Button size={'large'}>Button 4</Button>
            </Space.Compact>
        </Space>
    )
};
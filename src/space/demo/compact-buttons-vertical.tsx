/**
 * title: 垂直方向紧凑布局
 * description: 垂直方向紧凑布局。
 */

import React from 'react';
import { Space } from 'rabbit-ui';

export default () => {
    return (
        <Space.Compact direction='vertical'>
            <button className='demo-btn'>Button 1</button>
            <button className='demo-btn'>Button 2</button>
            <button className='demo-btn'>Button 3</button>
            <button className='demo-btn'>Button 4</button>
            <button className='demo-btn'>Button 5</button>
        </Space.Compact>)
};

/*
.demo-btn {
    border: 1px solid;
    border-radius: 8px;
    height: 32px;
    width: 80px;
    box-shadow: 0 2px 0 rgb(0 0 0 / 2%);
    &:hover {
        cursor: pointer;
        z-index: 1;
        color: #4096ff;
        border-color: #4096ff;
        background-color: azure;
    }
    &:active {
        color: skyblue;
        border-color: skyblue;
        background-color: #fff;
    }
}
*/
/**
 * title: 对齐
 * description: 设置对齐模式。
 */

import React from 'react';
import { Space, Button } from 'rabbit-ui-antd';


export default () => {
    return (
        <div className='space-align-container'>
            <div className='space-align-block'>
                <Space align='center'>
                    center
                    <Button>Button</Button>
                    <span className='mock-block'>Block</span>
                </Space>
            </div>
            <div className='space-align-block'>
                <Space align='start'>
                    start
                    <Button>Button</Button>
                    <span className='mock-block'> Block </span>
                </Space>
            </div>
            <div className='space-align-block'>
                <Space align='end'>
                    end
                    <Button>Button</Button>
                    <span className='mock-block'>Block</span>
                </Space>
            </div>
            <div className='space-align-block'>
                <Space align='baseline'>
                    baseline
                    <Button>Button</Button>
                    <span className='mock-block'>Block</span>
                </Space>
            </div>
        </div>
    )
};

/*
.space-align-container {
    display: flex;
    flex-wrap: wrap;

    .space-align-block{
        border: 1px dotted skyblue;
        padding: 8px;
        margin: 4px;
        
        .mock-block {
            display: inline-block;
            padding: 30px 8px 16px;
            background: rgba(150, 150, 150, 0.2);
        }
    }
}
*/
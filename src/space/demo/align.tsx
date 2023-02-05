/**
 * title: 对齐
 * description: 设置对齐模式。
 */

import React from 'react';
import Space from '..';

import '../style';

export default () => {
    return (
        <div
            style={{ display: 'flex', flexWrap: 'wrap', }}>
            <div
                style={{
                    border: '1px dotted #000',
                    padding: 8,
                    margin: 4,
                }}>
                <Space align='center'>
                    center
                    <button>Button</button>
                    <span
                        style={{
                            display: 'inline-block',
                            padding: '30px 8px 16px',
                            background: 'rgba(150, 150, 150, 0.2)'
                        }}
                    >Block</span>
                </Space>
            </div>
            <div
                style={{
                    border: '1px dotted #000',
                    padding: 8,
                    margin: 4,
                }}>
                <Space align='start'>
                    start
                    <button>Button</button>
                    <span
                        style={{
                            display: 'inline-block',
                            padding: '30px 8px 16px',
                            background: 'rgba(150, 150, 150, 0.2)'
                        }}
                    > Block </span>
                </Space>
            </div>
            <div
                style={{
                    border: '1px dotted #000',
                    padding: 8,
                    margin: 4,
                }}>
                <Space align='end'>
                    end
                    <button>Button</button>
                    <span
                        style={{
                            display: 'inline-block',
                            padding: '30px 8px 16px',
                            background: 'rgba(150, 150, 150, 0.2)'
                        }}
                    >Block</span>
                </Space>
            </div>
            <div
                style={{
                    border: '1px dotted #000',
                    padding: 8,
                    margin: 4,
                }}>
                <Space align='baseline'>
                    baseline
                    <button>Button</button>
                    <span
                        style={{
                            display: 'inline-block',
                            padding: '30px 8px 16px',
                            background: 'rgba(150, 150, 150, 0.2)'
                        }}
                    >Block</span>
                </Space>
            </div>
        </div>
    )
};
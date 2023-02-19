/**
 * title: 右键菜单
 * description: 可以点击鼠标右键触发菜单
 */

import React from 'react';
import { DropDown } from 'rabbit-ui-antd';

const menu = [
    {
        content: "1st menu item",
        className: "menu-item"
    },
    {
        content: "2nd menu item",
        className: "menu-item"
    },
    {
        content: "3rd menu item",
        className: "menu-item"
    }
]

export default () =>
    <DropDown items={menu} trigger="contextMenu" popupPlacement="bottomLeft">
        <div
            style={{
                color: '#9d9d9d',
                background: '#f5f5f5',
                height: 200,
                textAlign: 'center',
                lineHeight: '200px',
            }}
        >
            Right Click on here
</div>
    </DropDown>;
/**
 * title: 触发方式
 * description: 默认是鼠标移入触发，可以选择点击触发
 */

import React from 'react';
import { DropDown, Button } from 'rabbit-ui-antd';

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

export default () => <DropDown items={menu} trigger="click" popupPlacement="bottomLeft"><Button>click it</Button></DropDown>;
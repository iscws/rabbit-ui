/**
 * title: 其他用法
 * description: 下拉菜单的可选项与禁选项
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
        className: "menu-item-forbidden"
    }
]

export default () => <DropDown items={menu} trigger="hover" popupPlacement="bottomLeft"><Button>hover it</Button></DropDown>;
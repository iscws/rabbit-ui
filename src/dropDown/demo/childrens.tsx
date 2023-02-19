/**
 * title: 多级菜单
 * description: 传入的菜单有多个层级
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
        content: "sub menu",
        className: "menu-item",
        childrens: [
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
            },
        ]
    }
]

export default () => <DropDown items={menu} trigger="click" popupPlacement="bottomLeft"><Button>多级菜单</Button></DropDown>;
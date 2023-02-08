/**
 * title: 基本用法
 * description: 鼠标悬浮按钮触发下拉菜单
 */

import React from 'react';
import { DropDown } from 'rabbit-ui';

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

export default () => <DropDown items={menu} trigger="hover" popupPlacement="bottom">hover it</DropDown>;
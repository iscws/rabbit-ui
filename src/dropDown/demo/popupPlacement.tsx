/**
 * title: 弹出位置
 * description: 支持四个弹出位置
 */

import React from 'react';
import  DropDown  from '../index';

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

const prefixCls = 'rabbit-dropdown-box';

export default () => <div className={prefixCls}>
    <DropDown items={menu} trigger="hover" popupPlacement="bottom">bottom</DropDown>
    <DropDown items={menu} trigger="hover" popupPlacement="left">left</DropDown>
    <DropDown items={menu} trigger="hover" popupPlacement="top">top</DropDown>
    <DropDown items={menu} trigger="hover" popupPlacement="right">right</DropDown>
</div>;
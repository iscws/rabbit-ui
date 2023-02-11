/**
 * title: 弹出位置
 * description: 支持四个弹出位置
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

const prefixCls = 'rabbit-dropdown-box';

export default () => <div className={prefixCls}>
    <DropDown items={menu} trigger="hover" popupPlacement="bottom"><button style={{ padding: "8px" }}>bottom</button></DropDown>
    <DropDown items={menu} trigger="hover" popupPlacement="left"><button style={{ padding: "8px" }}>left</button></DropDown>
    <DropDown items={menu} trigger="hover" popupPlacement="top"><button style={{ padding: "8px" }}>top</button></DropDown>
    <DropDown items={menu} trigger="hover" popupPlacement="right"><button style={{ padding: "8px" }}>right</button></DropDown>
</div>;
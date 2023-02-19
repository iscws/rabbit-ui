/**
 * title: 弹出位置
 * description: 支持四个弹出位置
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

const prefixCls = 'rabbit-dropdown-box';

export default () => <div className={prefixCls}>
    <DropDown items={menu} trigger="hover" popupPlacement="bottom"><Button>bottom</Button></DropDown>
    <DropDown items={menu} trigger="hover" popupPlacement="left"><Button>left</Button></DropDown>
    <DropDown items={menu} trigger="hover" popupPlacement="top"><Button>top</Button></DropDown>
    <DropDown items={menu} trigger="hover" popupPlacement="right"><Button>right</Button></DropDown>
    <DropDown items={menu} trigger="hover" popupPlacement="bottomRight"><Button>bottomRight</Button></DropDown>
    <DropDown items={menu} trigger="hover" popupPlacement="topRight"><Button>topRight</Button></DropDown>
    <DropDown items={menu} trigger="hover" popupPlacement="bottomLeft"><Button>bottomLeft</Button></DropDown>
    <DropDown items={menu} trigger="hover" popupPlacement="topLeft"><Button>topLeft</Button></DropDown>
</div>;
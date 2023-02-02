import React from 'react';
import DropDown from '../../dropDown';
import '../style';

const menu = [
    {
        content: "123",
        className: "menu-item"
    },
    {
        content: "111",
        className: "menu-item"
    },
    {
        content: "222",
        className: "menu-item-forbidden"
    }
]

export default () => <DropDown items={menu} trigger="hover" popupPlacement="bottom">测试</DropDown>;
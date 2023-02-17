import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DropDown from '../index';

describe('<DropDown />', () => {

    //测试下拉菜单hover功能
    test('should touch menu', () => {
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
        const { container } = render(
            <DropDown
                items={menu}
            >
                <p>测试</p>
            </DropDown>
        );
    })

    //测试下拉菜单click功能
})


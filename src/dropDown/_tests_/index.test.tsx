import React from 'react';
import { screen, render } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import DropDown from '../index';
import Enzyme from '../../_utils/setup';

const { mount } = Enzyme;

describe('<DropDown />', () => {
    const onChange = jest.fn();
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

    function dropdown() {
        return render(
            <DropDown
                items={menu}
                onChange={onChange}
            >
                <button data-testid="btn">测试</button>
            </DropDown>
        );
    }

    //测试下拉菜单lick功能
    test('should touch menu', async () => {
        expect(screen.queryByTestId('trigger-element')).toBeInTheDocument;
    })
})


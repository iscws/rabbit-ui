import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '../index';

describe('<Button />', () => {

    //测试输入的按钮文本是否正确
    test('should render button', () => {
        const { container } = render(
            <Button size='small'>按钮一</Button>
        );
        expect(container).toMatchSnapshot();
    });

    //测试点击后的回调函数是否执行
    test('should touch callback', async () => {
        const callback = jest.fn();
        const { getByText } = render(
            <Button
                size='small'
                onClick={callback}
            >
                按钮二
            </Button>
        )
        await userEvent.click(getByText('按钮二'));
        expect(callback).toHaveBeenCalledTimes(1);
    })

    //测试按钮的禁选模块
    test('should be disabled', () => {
        const { container } = render(
            <Button
                size='small'
                disabled={true}
            >
                按钮
            </Button>
        )
        expect(container).toBeDisabled;
    })

    //测试type为link时的情况
    test('should be link', () => {
        const href = "www.baidu.com"
        render(<Button type='link' href={href}>百度</Button>);
        screen.getByText('百度');
    })
})
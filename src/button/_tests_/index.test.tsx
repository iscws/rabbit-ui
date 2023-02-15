import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Button from '../index';

describe('<Button />', () => {

    //测试输入的按钮文本是否正确
    test('should render button', () => {
        const { container } = render(
            <Button size='small' defaultProp={{}}>按钮一</Button>
        );
        expect(container).toMatchSnapshot();
    });

    //测试点击后的回调函数是否执行
    test('should touch callback', () => {
        const callback = jest.fn();
        const { getByText } = render(
            <Button
                size='small'
                defaultProp={{}}
                handleClick={callback}
            >
                按钮二
            </Button>
        )
        userEvent.click(getByText('按钮二'));
        expect(callback).toHaveBeenCalledTimes(0);
    })

    //测试按钮的禁选模块
    test('should be disabled', () => {
        const { container } = render(
            <Button
                size='small'
                defaultProp={{}}
                disabled={true}
            >
                按钮
            </Button>
        )
        expect(container).toBeDisabled;
    })
})
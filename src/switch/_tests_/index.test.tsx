import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Switch from '../index';

describe('<Switch />', () => {

    //状态切换onChange监听测试
    test('should touch onChange', async () => {
        const onChange = jest.fn();
        render(<Switch onChange={onChange} />);
        await userEvent.click(screen.getByRole('switch'));
        expect(onChange).toHaveBeenCalledTimes(1);
    })

    //禁选开关测试
    test('should disable switch', () => {
        const { container } = render(<Switch disabled={true} />);
        expect(container).toBeDisabled;
    })

    //onInternalKeyDown函数测试
    test('should touch triggerChange', async () => {
        //当第一次点击开关时测试能否通过回车键切换开关状态
        const onInternalKeyDown = jest.fn();
        render(<Switch onKeyDown={onInternalKeyDown} />);
        await userEvent.click(screen.getByRole('switch'));
        await userEvent.keyboard('{Enter}');
        expect(onInternalKeyDown).toHaveBeenCalledTimes(1);
    })
})
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Tag from '../index';

describe('<Tag />', () => {
    test('should close tag', async () => {
        //测试tag的关闭
        const handleClick = jest.fn();
        render(
            <Tag onClose={handleClick} text="tag1" closable={true} />
        );
        //测试关闭图标的出现
        await userEvent.click(screen.getByRole('img'));
        //测试回调函数是否触发
        expect(handleClick).toHaveBeenCalledTimes(1);
    })
})
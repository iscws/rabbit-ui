import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Tag from '../index';

describe('<Tag />', () => {
    //测试tag的关闭
    const handleClick = jest.fn();
    const { container } = render(
        <Tag onClose={handleClick} text="tage1" closable={true} />
    );
    //测试关闭图标的出现
    userEvent.click(screen.getByTitle('svg'));
    //测试回调函数是否触发
    expect(handleClick).toHaveBeenCalled();
})
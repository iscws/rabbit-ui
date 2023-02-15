import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Tag from '../index';

describe('<Tag />', () => {
    //测试tag关闭回调函数的触发
    const handleClick = jest.fn();
    const { container } = render(
        <Tag onClose={handleClick} text="tage1" closable={true} />
    );
    userEvent.click(screen.getByTitle('svg'));
    expect(handleClick).toHaveBeenCalled();
})
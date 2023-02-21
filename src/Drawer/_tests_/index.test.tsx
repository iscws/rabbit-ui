import React from 'react';
import { render, screen } from '@testing-library/react';
import Enzyme from '../../_utils/setup';
import Drawer from '../index';
import userEvent from '@testing-library/user-event';
const { shallow } = Enzyme;


describe('<Drawer />', () => {
    //测试drawer能否正常显示
    test('should display drawer', () => {
        let state: boolean = true;
        const { getByTestId } = render(<Drawer open={state} onClose={jest.fn()}></Drawer>);
        expect(getByTestId('drawer-element'));
    })

    //测试遮罩能否正常隐藏
    test('should hidden mask', () => {
        const { queryByTestId } = render(<Drawer open={false} onClose={jest.fn()}></Drawer>);
        //当open为false时mask隐藏 查询结果为null
        expect(queryByTestId('mask-element') === null);
    });

    //组件内部onHide函数测试
    test('should touch onHide', () => {
        const onClose = jest.fn();
        render(<Drawer open={true} onClose={onClose} maskClosable={true}></Drawer>);
        userEvent.click(screen.getByTestId('mask-element'));
        setTimeout(() => {
            expect(onClose).toHaveBeenCalledTimes(1);
        }, 1000);
    })

    //针对placement的情况测试
    // test('should show different placement', () => {
    //     const onClose = jest.fn();
    //     const { getByTestId } = render(
    //         <Drawer onClose={onClose} open={true} placement="right">
    //         </Drawer>
    //     );
    //     expect(getByTestId('drawer-element'));
    // })

})

/**
 * 测试行记录：
 * 120-121：setMasked(false) √
 * 145-152：onHide函数
 * 157-158：!animaShow为true时的switch情况
 * 160-161：
 * 163-164：
 * 175-176：placement === 'right' || placement === 'left'为false的情况
 */

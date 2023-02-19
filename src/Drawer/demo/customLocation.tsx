/**
 * title: 自定义位置
 * description: 自定义位置，点击触发按钮抽屉从相应的位置滑出，点击遮罩区关闭。
 */

import React, { useState } from 'react';
import { Drawer, Button } from "rabbit-ui-antd";
import type { DrawerProps } from '../index'
import '../style/index.less';

const App: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState<DrawerProps['placement']>('left');

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const onChange = (e: React.ChangeEvent<HTMLElement>) => {

        setPlacement(e.target._wrapperState.initialValue);
    };

    return (
        <>

            {/* <Radio.Group value={placement} onChange={onChange}>
                    <Radio value="top">top</Radio>
                    <Radio value="right">right</Radio>
                    <Radio value="bottom">bottom</Radio>
                    <Radio value="left">left</Radio>
                </Radio.Group> */}
            <input type="radio" name="choosePlacement" value="top" checked={placement === 'top'} onChange={onChange} /> top
            <input type="radio" name="choosePlacement" value="right" checked={placement === 'right'} onChange={onChange} /> right
            <input type="radio" name="choosePlacement" value="bottom" checked={placement === 'bottom'} onChange={onChange} /> bottom
            <input type="radio" name="choosePlacement" value="left" checked={placement === 'left'} onChange={onChange} /> left
            <Button onClick={showDrawer}>
                Open
            </Button>
            <Drawer
                title="Basic Drawer"
                placement={placement}
                closable={false}
                onClose={onClose}
                open={open}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </>
    );
};

export default App;


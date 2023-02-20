/**
 * title: 预设宽度
 * description: 抽屉的默认宽度为 378px，另外还提供一个大号抽屉 736px，可以用 size 属性来设置。
 */

import React, { useState } from 'react';
import { Drawer, Button } from "rabbit-ui-antd";
import type { DrawerProps } from '../index';
import '../style/index.less'

const App: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [size, setSize] = useState<DrawerProps['size']>();

    const showDefaultDrawer = () => {
        setSize('default');
        setOpen(true);
    };

    const showLargeDrawer = () => {
        setSize('large');
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button onClick={showDefaultDrawer}>
                Open Default Size (378px)
            </Button>
            <Button onClick={showLargeDrawer}>
                Open Large Size (736px)
            </Button>
            <Drawer
                title={`${size} Drawer`}
                placement="right"
                size={size}
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
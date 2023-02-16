/**
 * title: 渲染在当前 DOM
 * description: 渲染在当前 dom 里。
 */

import React, { useState } from 'react';
import { Drawer } from 'rabbit-ui-antd';
import '../style/index.less'

const App: React.FC = () => {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const containerStyle: React.CSSProperties = {
        position: 'relative',
        height: 200,
        padding: 48,
        overflow: 'hidden',
        textAlign: 'center',
        backgroundColor: 'gray',
        border: `1px solid black`,
    };

    return (
        <div style={containerStyle}>
            Render in this
            <div style={{ marginTop: 16 }}>
                <button onClick={showDrawer}>
                    Open
                </button>
            </div>
            <Drawer
                title="Basic Drawer"
                placement="right"
                closable={false}
                onClose={onClose}
                open={open}
                inline={true}
            >
                <p>Some contents...</p>
            </Drawer>
        </div>
    );
};

export default App;
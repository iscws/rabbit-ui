/**
 * title: useModal
 * description: 简化modal的启动，但是在关闭之后就会销毁整个modal对话框
 */
import { Modal } from 'rabbit-ui-antd';
import React from 'react';

export default () => {
    const [open, modal] = Modal.useModal({
        title: '一次性的modal',
        content: "你好你好"
    });


    return (
        <div>
            {/* <button onClick={forRender}>打开打开</button> */}
            <button onClick={open}>简洁版的</button>
        </div>
    );
};

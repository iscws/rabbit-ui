/**
 * title: useModal
 * description: 简化modal的启动，但是在关闭之后就会销毁整个modal对话框
 */
import { Modal } from 'rabbit-ui-antd';
import React from 'react';

export default () => {
    const [open] = Modal.useModal({ title: '一次性的modal', content: "销毁销毁" });


    return (
        <div>
            <button onClick={open}>useModal</button>
        </div>
    );
};

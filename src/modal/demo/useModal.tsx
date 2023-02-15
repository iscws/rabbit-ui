/**
 * title: 一次性的对话框
 * description: 简化`modal`的启动，但是在关闭之后就会销毁整个`modal`对话框，且不会监听内容的变化
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
            <button onClick={open}>简洁版的useModal</button>
        </div>
    );
};

/**
 * title: 手动更新和移除
 * description: 通过返回的 instance 手动更新和关闭对话框
 */
import { Modal, Button } from 'rabbit-ui-antd';
import React from 'react';

export default () => {
    const modal = Modal.useModal();

    const countDown = () => {
        let secondsToGo = 5;
        const instance = modal.init({
            title: '这是一个对话框',
            content: `这个对话框会在 ${secondsToGo} 秒后关闭.`,
        });

        const timer = setInterval(() => {
            secondsToGo -= 1;
            instance.update({
                content: `这个对话框会在 ${secondsToGo} 秒后关闭.`,
            });
        }, 1000);

        setTimeout(() => {
            clearInterval(timer);
            instance.destroy();
        }, secondsToGo * 1000);

    }

    return (
        <div>
            <Button onClick={countDown} style={{ marginRight: "10px" }}>5秒后关闭对话框</Button>
        </div>
    );
};

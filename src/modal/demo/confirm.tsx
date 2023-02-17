/**
 * title: 一次性的modal
 * description: 关闭后就销毁,不会监听`content`的变化
 */
import { Modal, Button } from 'rabbit-ui-antd';
import React from 'react';

export default () => {
    const open = Modal.confirm({
        title: '一次性的confrim',
        content: '点击即可销毁',
        type: 'simple',
    });


    return (
        <div>
            <Button onClick={open} >confirm</Button>
        </div>
    );
};

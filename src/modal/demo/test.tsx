/**
 * title: 测试context
 * description: 测试context内容
 */
import { Modal } from 'rabbit-ui';
import React from 'react';

export default () => {
    const [modal, instance] = Modal.useModal();
    return (
        <div>
            <button>测试useModal</button>
            {instance}
        </div>
    );
};

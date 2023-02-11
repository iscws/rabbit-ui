/**
 * title: 自定义页脚内容
 * description: 不需要默认确定取消按钮时，你可以把 `footer` 设为`null`。
 */
import React, { useState } from 'react';
import { Modal } from 'rabbit-ui-antd';


export default () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <button onClick={showModal} style={{ marginRight: "10px" }}>自定义页脚</button>
            <Modal
                title="modal组件标题"
                destroyOnClose={true}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[<button>你好你好</button>, <button onClick={handleCancel}>走吧走吧</button>]}
            >
                这是一条提示
            </Modal>

        </div>
    );
};

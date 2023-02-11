/**
 * title: 自定义位置
 * description: 使用`center`或`style.top`设置位置
 */
import { Modal } from 'rabbit-ui-antd';
import React, { useState } from 'react';
export default () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpen2, setIsModalOpen2] = useState(false);

    return (
        <div>
            <button
                onClick={(e) => {
                    setIsModalOpen(true);
                }}
                style={{ marginRight: '15px' }}
            >
                居中展示
            </button>
            <Modal
                title="对话框居中展示"
                destroyOnClose={true}
                open={isModalOpen}
                onOk={() => setIsModalOpen(false)}
                onCancel={() => setIsModalOpen(false)}
                center={true}
            >
                这是一个对话框
            </Modal>

            <button
                onClick={(e) => {
                    setIsModalOpen2(true);
                }}
            >
                距离顶部20px
            </button>
            <Modal
                title="距离顶部20px"
                style={{ top: 20 }}
                destroyOnClose={true}
                open={isModalOpen2}
                onOk={() => setIsModalOpen2(false)}
                onCancel={() => setIsModalOpen2(false)}
            >
                这是一个对话框
            </Modal>
        </div >
    );
};

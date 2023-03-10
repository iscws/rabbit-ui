/**
 * title: 自定义扩展对话框长度
 * description: 使用`width`来设置宽度
 */
import { Modal, Button } from 'rabbit-ui-antd';
import React, { useState } from 'react';

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
      <Button onClick={showModal}>宽度扩展为1000px</Button>
      <Modal
        title="modal组件标题"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1000}
      >
        扩展对话框长度.
      </Modal>
    </div>
  );
};

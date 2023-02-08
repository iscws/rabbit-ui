/**
 * title: 基本用法
 * description: 点击按钮弹出对话框
 */
import Modal from '..';
import '../style';
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
      <button onClick={showModal}>启动modal</button>
      <Modal title="modal组件标题" destroyOnClose={true} open={isModalOpen} toOk={handleOk} toCancel={handleCancel}>
        这是一条警告提示
      </Modal>
    </div>
  );
};

/**
 * title: 销毁子组件
 * description: 在关闭时可以销毁弹窗内的子元素，使得每次打开弹窗显示组件的初始状态
 */
import React, { useState } from 'react';
import { Modal, Button } from 'rabbit-ui-antd';


const Destroy = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>计数器：{count}</p>
      <p>初始值为0</p>
      <Button onClick={(e) => setCount(count + 1)}>数字＋1</Button>
    </div>
  );
};

const NoDestroy = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>计数器：{count}</p>
      <p>初始值为0</p>
      <Button onClick={(e) => setCount(count + 1)}>数字＋1</Button>
    </div>
  );
};

export default () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);

  const showModal = (type: boolean = true) => {
    type ? setIsModalOpen(true) : setIsModalOpen2(true);
  };

  const handleOk = (type: boolean = true) => {
    type ? setIsModalOpen(false) : setIsModalOpen2(false);
  };

  const handleCancel = (type: boolean = true) => {
    type ? setIsModalOpen(false) : setIsModalOpen2(false);
  };

  return (
    <div>
      <Button onClick={(e) => showModal()} style={{ marginRight: '15px' }}>
        关闭时不销毁子元素
      </Button>
      <Modal
        title="不销毁子元素"
        open={isModalOpen}
        onOk={(e) => handleOk()}
        onCancel={handleCancel}
      >
        <div>
          <NoDestroy />
        </div>
      </Modal>

      <Button onClick={(e) => showModal(false)}>关闭时销毁子元素</Button>
      <Modal
        title="销毁子元素"
        destroyOnClose={true}
        open={isModalOpen2}
        onOk={(e) => handleOk(false)}
        onCancel={(e) => handleCancel(false)}
      >
        <div>
          <Destroy />
        </div>
      </Modal>
    </div>
  );
};

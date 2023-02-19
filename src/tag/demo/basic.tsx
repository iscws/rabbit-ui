/**
 * title: closable
 * description: 设置可关闭选项
 */
import { Tag } from 'rabbit-ui-antd';
import React from 'react';

export default () => {
  const handleClick = () => {
    console.log('close');
  };

  return (
    <div>
      <Tag text="Tag1" closable onClose={handleClick} />
      <Tag text="Tag2" closable={false} />
    </div>
  );
};

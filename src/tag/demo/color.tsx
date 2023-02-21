/**
 * title: color
 * description: 设置颜色
 */
import { Tag } from 'rabbit-ui-antd';
import React from 'react';

export default () => {
  const handleClick = () => {
    console.log('close');
  };

  return (
    <div>
      <Tag text="Tag0" color="primary" />
      <Tag text="Tag1" color="success" />
      <Tag text="Tag2" color="warning" />
      <Tag text="Tag3" color="danger" />
    </div>
  );
};

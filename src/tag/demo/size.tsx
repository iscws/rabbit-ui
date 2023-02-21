/**
 * title: Tsize
 * description: 设置大小
 */
import { Tag } from 'rabbit-ui-antd';
import React from 'react';

export default () => {
  const handleClick = () => {
    console.log('close');
  };

  return (
    <div>
      <Tag text="Tag1" size="small" />
      <Tag text="Tag2" />
      <Tag text="Tag3" size="large" />
    </div>
  );
};

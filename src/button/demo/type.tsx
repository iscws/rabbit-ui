/**
 * title: type
 * description: 设置按钮类型
 */
import { Button } from 'rabbit-ui-antd';
import React from 'react';

export default () => {
  return (
    <div>
      <Button type="primary">primary</Button>
      <Button type="success">success</Button>
      <Button type="warning">warning</Button>
      <Button type="danger">danger</Button>
      <Button type="link" href="https://baidu.com">
        百度
      </Button>
      <Button type="submit">submit</Button>
      <Button type="reset">reset</Button>
      <Button type="menu">menu</Button>
    </div>
  );
};

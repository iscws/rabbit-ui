// import Button from '../../button';
// import '../style/index.less';
import { Button } from 'rabbit-ui-antd';
import React from 'react';
export default () => {
  const clickHandler = () => {
    console.log('事件被触发了');
  };
  return (
    <div>
      <Button size={'small'} onClick={clickHandler}>
        button
      </Button>
      <Button onClick={clickHandler}>button</Button>
      <Button size={'large'} onClick={clickHandler}>
        button
      </Button>
    </div>
  );
};

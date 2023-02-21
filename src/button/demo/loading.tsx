/**
 * title: loading
 * description: 点击按钮进入loading状态
 */

import { Button } from 'rabbit-ui-antd';
import React, { useState } from 'react';
export default () => {
  const [Isloading, setIsloading] = useState(false);
  const clickHandler = () => {
    setIsloading(!Isloading);
    setTimeout(() => {
      setIsloading(Isloading);
      console.log(Isloading);
    }, 5000);
  };

  return (
    <div>
      <Button onClick={clickHandler} loading={Isloading} >
        clickme
      </Button>
    </div>
  );
};

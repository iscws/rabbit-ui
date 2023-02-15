// import Button from '../../button';
// import '../style/index.less';
import { Button } from 'rabbit-ui-antd';
import React, { useState } from 'react';
export default () => {
  const [Isloading, setIsloading] = useState(false);
  const clickHandler = () => {
    setIsloading(!Isloading);
  };

  return (
    <div>
      <Button onClick={clickHandler} loading={Isloading} disabled={Isloading}>
        clickme
      </Button>
    </div>
  );
};

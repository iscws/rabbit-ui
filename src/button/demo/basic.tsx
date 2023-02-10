// import Button from '../../button';
// import '../style/index.less';
import React from 'react';
import { Button } from 'rabbit-ui-antd';
export default () => {
  return (
    <div>
      <Button size={'small'} circle>
        small
      </Button>
      <Button size={'small'}>small</Button>
      <Button>normal</Button>
      <Button circle>x</Button>
      <Button size={'large'} circle>
        large
      </Button>
      <Button size={'large'}>large</Button>
      <Button
        className="btn"
        handleClick={() => {
          console.log('click');
        }}
      >
        clickme
      </Button>
      <Button disabled>disabled</Button>
      <Button size={'small'} loading>
        loading
      </Button>
    </div>
  );
};

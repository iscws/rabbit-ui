// import Button from '../../button';
// import '../style/index.less';
import { Button } from 'rabbit-ui';
export default () => {
  return (
    <div>
      <Button size={'small'}>small</Button>
      <Button>normal</Button>
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
    </div>
  );
  let className = document.querySelector('.btn');
  console.log(className.className);
};

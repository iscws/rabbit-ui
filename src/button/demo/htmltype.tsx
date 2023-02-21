/**
 * title: htmltype
 * description: 设置按钮htmltype
 */
import { Button } from 'rabbit-ui-antd';
export default () => {
  return (
    <div>
      <form>
        <Button type="success" htmltype="submit">
          submit
        </Button>
        <Button type="danger" htmltype="reset">
          reset
        </Button>
        <Button htmltype="menu">menu</Button>
      </form>
      <br />
    </div>
  );
};

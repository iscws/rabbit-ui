---
title: Button组件
nav:
  title: 按钮组件
  order: 1
---

# 按钮组件

## 基本用法

按钮组件有三种大小、五种类型、三种模式：基本、圆形、加载中；按需选择对应的属性加入类名即可使用

## 代码示例

### size

```tsx
import { Button } from 'rabbit-ui-antd';
export default () => {
  return (
    <div>
      <Button size={'small'}>small</Button>
      <Button>normal</Button>
      <Button size={'large'}>large</Button>
    </div>
  );
};
```

### type

```tsx
import { Button } from 'rabbit-ui-antd';
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
```

实际上 type 的值也可以是 htmltype，因为原生 btn 的 type 属性就是用来设置 htmltype 的，但是本组件库使用 type 来设置 htmltype 的颜色是不能改变的，而使用 htmltype 则可以再次使用 type 来设置颜色

### htmltype

```tsx
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
```

### circle

```tsx
import { Button } from 'rabbit-ui-antd';
export default () => {
  return (
    <div>
      <Button circle>circle</Button>
    </div>
  );
};
```

### loading

<code src="./demo/basic.tsx"></code>

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| size | 按钮大小 | 'small'、'large'、'default' | default |
| handleClick | 点击事件回调函数 | (e: React.SyntheticEvent) => void | () => {return null;} |
| disabled | 禁用 | boolean | false |
| circle | 圆形按钮 | boolean | false |
| loading | 加载按钮 | boolean | false |
| type | 按钮类型 | 'primary' 'success' 'warning' 'danger''link' | primary |
| herf | 要跳转的链接 | herf |  |
| htmltype | 设置 button 原生的 type 值 | string | button |

支持原生 button 的其他所有属性。

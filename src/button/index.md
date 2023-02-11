---
title: Button组件
nav:
  title: 按钮组件
  order: 1
---

# 按钮组件

按钮组件有三种大小、四种颜色、三种模式：基本、圆形、加载中；按需选择对应的属性加入类名即可使用

## 基本用法

<code src="./demo/basic.tsx"></code>

## 代码示例

```tsx
import { Button } from 'rabbit-ui';
export default () => {
  return (
    <div>
      <h3>尺寸</h3>
      <Button size={'small'}>small</Button>
      <Button>normal</Button>
      <Button size={'large'}>large</Button>
      <br />
      <h3>颜色</h3>
      <Button color="primary">primary</Button>
      <Button color="success">success</Button>
      <Button color="warning">warning</Button>
      <Button color="danger">danger</Button>
      <br />
      <h3>圆形</h3>
      <Button circle>circle</Button>
      <br />
      <h3>加载中</h3>
      <Button loading>loading</Button>
    </div>
  );
};
```

## API

| 属性        | 说明             | 类型                                   | 默认值               |
| ----------- | ---------------- | -------------------------------------- | -------------------- |
| size        | 按钮大小         | 'small'、'large'、'default'            | default              |
| handleClick | 点击事件回调函数 | (e: React.SyntheticEvent) => void      | () => {return null;} |
| disabled    | 禁用             | boolean                                | false                |
| circle      | 圆形按钮         | boolean                                | false                |
| loading     | 加载按钮         | boolean                                | false                |
| color       | 按钮颜色         | 'primary' 'success' 'warning' 'danger' | primary              |

支持原生 button 的其他所有属性。

---
title: Alert警告提示
nav:
  title: 组件
  order: 1
---

# Alert 组件

警告提示，展现需要关注的信息。分为四种样式分别是'info' | 'positive' | 'negative' | 'warning';

```tsx
import { Alert } from 'rabbit-ui-antd';
export default () => {
  return (
    <div>
      <Alert kind="warning">warning</Alert>
      <Alert kind="info">info</Alert>
      <Alert kind="positive">positive</Alert>
      <Alert kind="negative">negative</Alert>
    </div>
  );
};
```

### 基本用法

<code src="./demo/basic.tsx"></code>

## API

| 属性 | 说明           | 类型                                   | 默认值 |
| ---- | -------------- | -------------------------------------- | ------ |
| kind | 警告提示的样式 | 'info' 'positive' 'negative' 'warning' | info   |

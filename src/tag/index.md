---
title: Tag组件
nav:
  title: Tag组件
  order: 1
---

# 组件示例

<code src="./demo/basic.tsx"></code>

## 基本用法

```tsx
import { Tag } from 'rabbit-ui';
export default () => {
  const handleClick = () => {
    console.log('close');
  };
  return (
    <div>
      <h2>Closable</h2>
      <Tag text="Tag1" closable onClose={handleClick} />
      <Tag text="Tag2" closable={false} />
      <h2>Color</h2>
      <Tag text="Tag0" color="primary" />
      <Tag text="Tag1" color="success" />
      <Tag text="Tag2" color="warning" />
      <Tag text="Tag3" color="danger" />
      <h2>Size</h2>
      <Tag text="Tag1" size="small" />
      <Tag text="Tag2" />
      <Tag text="Tag3" size="large" />
    </div>
  );
};
```

## API

| 属性     | 说明       | 类型                                   | 默认值  |
| -------- | ---------- | -------------------------------------- | ------- |
| color    | 颜色       | 'primary' 'success' 'warning' 'danger' | primary |
| size     | 大小       | 'samll' 'large' 'default'              | default |
| text     | Tag 的文本 | string                                 | ""      |
| closable | 关闭标签   | boolean                                | false   |

<!-- <code src="./demo/basic.tsx"></code> -->

---
title: Button组件
nav:
  title: 按钮组件
  order: 1
---

# 组件示例

警告提示，展现需要关注的信息。

## 基本用法

<code src="./demo/basic.tsx"></code>

## 代码演示

```tsx|pure
 <div>
      <Button size={'small'}>small</Button>
      <Button>normal</Button>
      <Button size={'large'}>large</Button>
      <Button
        className="btn"
        handleClick={() => {
          console.log('click');
        }}
      >clickme</Button>
      <Button disabled >disabled</Button>
 </div>
```

## API

| 属性        | 说明             | 类型                              | 默认值               |
| ----------- | ---------------- | --------------------------------- | -------------------- |
| size        | 按钮大小         | 'small'、'large'、'default'       | default              |
| handleClick | 点击事件回调函数 | (e: React.SyntheticEvent) => void | () => {return null;} |
| disabled    | 禁用             | true、false                       | false                |

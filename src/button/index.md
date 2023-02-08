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

## API

| 属性        | 说明             | 类型                              | 默认值               |
| ----------- | ---------------- | --------------------------------- | -------------------- |
| size        | 按钮大小         | 'small'、'large'、'default'       | default              |
| handleClick | 点击事件回调函数 | (e: React.SyntheticEvent) => void | () => {return null;} |
| disabled    | 禁用             | boolean                           | false                |
| circle      | 圆形按钮         | boolean                           | false                |
| loading     | 加载按钮         | boolean                           | false                |

---
title: Space 间距
nav:
  title: 组件
  order: 1
group:
  title: 布局
  order: 1
---

# Space 间距

设置组件之间的间距。

## 何时使用

避免组件紧贴在一起，拉开统一的空间。

* 适合行内元素的水平间距。
* 可以设置各种水平对齐方式。

## 代码演示

<code src="./demo/basic.tsx"></code>

<code src="./demo/vertical.tsx"></code>

<code src="./demo/align.tsx"></code>

<code src="./demo/split.tsx"></code>

<code src="./demo/wrap.tsx"></code>

## API

| 属性        | 说明             | 类型                               | 默认值                |
| :------- | :------------| :---------------------------   | :---------------- |
| align       | 对齐方式         | `'start'` \| `'end'` \| `'center'` \| `'baseline'` | `'start'`               |
| direction   | 间距方向         | `'vertical'` \| `'horizontal'`         | `'horizontal'`         |
| size        | 间距大小         | `number` \| `number[]`                 | 8                    |
| split       | 分隔符           | `ReactNode`                          | -                    |
| wrap        | 是否自动换行      | `boolean   `                         | false                |
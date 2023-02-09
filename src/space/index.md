---
title: Space 间距
nav:
  title: 组件
  order: 1
---

# Space 间距

设置组件之间的间距。

## 何时使用

避免组件紧贴在一起，拉开统一的空间。

* 适合行内元素的水平间距。
* 可以设置各种水平对齐方式。

## 代码演示

<code src="./demo/basic.tsx">基本用法</code>

<code src="./demo/vertical.tsx">垂直间距</code>

<code src="./demo/align.tsx">对齐</code>

<code src="./demo/split.tsx">分隔符</code>

<code src="./demo/wrap.tsx">自动换行</code>

<code src="./demo/compact-buttons.tsx">Button 紧凑布局</code>

<code src="./demo/compact-buttons-vertical.tsx">垂直方向紧凑布局</code>

## API

### Space

| 属性        | 说明             | 类型                               | 默认值                |
| :------- | :------------| :---------------------------   | :---------------- |
| align       | 对齐方式         | `'start'` \| `'end'` \| `'center'` \| `'baseline'` | `'start'`               |
| direction   | 间距方向         | `'vertical'` \| `'horizontal'`         | `'horizontal'`         |
| size        | 间距大小         | `number` \| `number[]`                 | 8                    |
| split       | 分隔符           | `ReactNode`                          | -                    |
| wrap        | 是否自动换行      | `boolean   `                         | false                |

### Space.Compact

| 属性        | 说明             | 类型                               | 默认值                |
| :------- | :------------| :---------------------------   | :---------------- |
| block       |将宽度调整为父元素宽度的选项| `boolean`       |  false                    |
| direction   | 间距方向                 | `'vertical'` \| `'horizontal'`         | `'horizontal'`         |
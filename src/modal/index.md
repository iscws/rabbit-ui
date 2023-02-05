---
title: Modal 对话框
nav:
  title: 组件
  order: 1
---

# Modal 对话框

弹出一个对话框展示对应内容

## 代码演示

<code src="./demo/basic.tsx"></code>

<code src="./demo/width.tsx"></code>

<code src="./demo/destroyOnClose.tsx"></code>

## API

| 参数           | 说明                                 | 类型        | 默认值 |
| -------------- | ------------------------------------ | ----------- | ------ |
| onCancel       | 点击遮罩层或右上角叉或取消按钮的回调 | `function`  |        |
| onOk           | 点击确定回调                         | `function`  |        |
| title          | 标题                                 | `ReactNode` |        |
| width          | 对话框长度                           | `Number`    | 520    |
| mask           | 是否展示遮罩层                       | `boolean`   | true   |
| destroyOnClose | 关闭后是否销毁子元素                 | `boolean`   | false  |
| keyboard       | 是否支持键盘 esc 关闭                | `boolean`   | false  |

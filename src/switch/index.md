---
title: Switch 开关
nav:
  title: 组件
  order: 1
group:
  title: 数据录入
  order: 4
---

# Switch 开关

开关选择器

## 何时使用

* 需要表示开关状态/两种状态之间的切换时；
* 切换 switch 会直接触发状态改变。

## 代码演示

<code src="./demo/index.tsx"></code>

## API

| 属性      | 说明             | 类型                    | 默认值 |
| :-------- | :--------------- | :---------------------- | :----- |
| checked   | 指定当前是否选中 | `boolean`                 | false  |
| className | Switch器类名     | stri`ng                  | -      |
| onClick   | 点击时的回调函数 | `function(checked,event)` | -      |
| disabled  | 是否禁用         | `boolean`                 | false  |
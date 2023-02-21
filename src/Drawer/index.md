---
title: Drawer 抽屉
nav:
  title: 组件
  order: 1
group:
  title: 反馈
  order: 6
---

# Drawer 抽屉

屏幕边缘滑出的浮层面板。

## 代码演示


<code src='./demo/basic.tsx'></code>

<code src='./demo/customLocation.tsx'></code>

<code src='./demo/currentDom.tsx'></code>

<code src='./demo/presetWidth.tsx'></code>

## API
| 参数           | 说明             | 类型                                     | 默认值     |
| :------------ | :--------------- | :--------------------------------------- | :-------- |
| open           | Drawer 是否可见  | `boolean`                              | --         |
| onClose | 点击遮罩层或左上角叉或取消按钮的回调     | `function(e)` | -- |
| inline          | 是否放置在当前dom       | `boolean`                                  | `false`        |
| rootClassname       | 抽屉根节点的类名         | `String`                                 | `''`        |
| rootStyle       | 抽屉根节点的样式         | `CSSProperties`                                 | `{}`        |
| zIndex       | 设置 Drawer 的 `z-index`         | `Number`                                 | `1000`        |
| mask       | 是否展示遮罩         | `boolean`                                 | `true`        |
| maskClosable       | 点击蒙层是否允许关闭         | `boolean`                                 | `true`        |
| maskClassname       | 遮罩层的类名         | `String`                                 | `''`        |
| maskStyle       | 遮罩层的类名         | `CSSProperties`                                 | `{}`        |
| placement       | 抽屉的方向         | `'bottom'`\|`'left'`\|`'top'`\|`'right'`                                 | `right`        |
| size       | 预设抽屉宽度（或高度），default `378px` 和 large `736px`         | `'default' \| ''large'`                                 | `default'`        |
| width       | 宽度         | `string \| number`                                 | `378`        |
| height       | 高度, 在 `placement` 为 `top` 或 `bottom` 时使用         | `string \| number`                                 | `378`        |
| contentClassname       | 抽屉主体的类名         | `String`                                 | `''`        |
| contentStyle       | 抽屉主体的样式         | `CSSProperties`                                 | `{}`        |
| headerClassname       | 抽屉头部区域的类名         | `String`                                 | `''`        |
| headerStyle       | 抽屉头部区域的样式         | `CSSProperties`                                 | `{}`        |
| closable       | 是否显示左上角的关闭按钮         | `boolean`                                 | `true`        |
| closeBtnClassname       | 关闭按钮的类名         | `String`                                 | `''`        |
| closeBtnStyle       | 关闭按钮的样式        | `CSSProperties`                                 | `{}`        |
| title       | 抽屉标题         | `String`                                 | --       |
| titleClassname       | 标题的类名         | `String`                                 | `''`        |
| titleStyle       | 标题的样式         | `CSSProperties`                                 | `{}`        |
| bodyClassname       | 主体内容的类名         | `String`                                 | `''`        |
| children       | 抽屉内容区域的内容         | `ReactNode`                                 | --        |
| bodyStyle       | 主体内容的样式         | `CSSProperties`                                 | `{}`        |
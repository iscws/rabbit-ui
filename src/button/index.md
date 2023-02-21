---
title: Button 按钮
nav:
  title: 组件
  order: 1
group: 
  title: 通用
  order: 1
---

# Button 按钮

按钮组件有三种大小、八种类型、三种模式：基本、圆形、加载中；按需选择对应的属性加入类名即可使用

## 代码演示
gi
<code src="./demo/size.tsx"></code>

<code src="./demo/type.tsx"></code>

<code src="./demo/htmltype.tsx"></code>

<code src="./demo/circle.tsx"></code>

<code src="./demo/loading.tsx"></code>

## API

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| size | 按钮大小 | `small`\|`large`\|`default` | `default` |
| handleClick | 点击事件回调函数 | `(e: React.SyntheticEvent) => void` | `() => {return null;}` |
| disabled | 禁用 | `boolean` | `false` |
| circle | 圆形按钮 | `boolean` | `false` |
| loading | 加载按钮 | `boolean` | `false` |
| type | 按钮类型 | `primary`\|`success`\|`warning`\|`danger`\|`link` | `primary` |
| herf | 要跳转的链接 | `string` | -  |
| htmltype | 设置 button 原生的 type 值 | `string` | `'button'` |

支持原生 button 的其他所有属性。

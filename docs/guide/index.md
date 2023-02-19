---
title: '关于 Rabbit UI'
nav:
  title: 开发指南
---

# Rabbit UI

`Rabbit-UI`，是一款基于 `Dumi`，由 `React` + `TypeScript` 开发的组件库 。UI 设计方面大量参考 [Ant Design](https://ant.design/index-cn)

## 快速上手

使用`create-react-App`创建一个`react`项目，并引入 `rabbit-ui-antd`

### 安装和初始化

```powershell
 npm install "rabbit-ui-antd"
```

### 使用组件

以使用`Switch`为例

```javascript
import React from 'react';
import { Switch } from 'rabbit-ui-antd';
//引入样式
import 'rabbit-ui-antd/lib/switch/style/css';

const App = () => (
  <>
    <Switch />
  </>
);

export default App;
```

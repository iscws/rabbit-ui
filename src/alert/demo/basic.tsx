/**
 * title: 基本使用
 * description: 可选择多种警告提示
 */
import { Alert } from 'rabbit-ui-antd';
import React from 'react';

export default () => (
    <>
        <Alert kind="warning">warning</Alert>
        <Alert kind="info">info</Alert>
        <Alert kind="positive">positive</Alert>
        <Alert kind="negative">negative</Alert>
    </>
);

import React, { useState } from 'react';
import { Switch } from 'rabbit-ui-antd';

export default () => {
    const [disabled, setDisabled] = useState(false);

    const toggle = () => {
        setDisabled((prev) => !prev);
    }

    return (
        <div style={{ margin: 20 }}>
            <Switch
                disabled={disabled}
                checkedChildren="开"
                unCheckedChildren="关"
            />
            <div style={{ marginTop: 20 }}>
                <button type="button" onClick={toggle}>
                    禁用
                </button>
            </div>
        </div>
    )
}
/**
 * title: 基础抽屉
 * description: 基础抽屉，点击触发按钮抽屉从右滑出，点击遮罩区或X图标关闭。
 */

import React, { useState } from "react";
import { Drawer, Button } from "rabbit-ui-antd";
import '../style/index.less';


export default () => {
  const [open, setOpen] = useState(false);


  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={showDrawer}>open</Button>
      <Drawer title="Basic Drawer" onClose={onClose} open={open}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  )

}


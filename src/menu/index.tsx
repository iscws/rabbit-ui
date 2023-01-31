import React from 'react';

export interface MenuProps {
  /**
   * @description       Menu 的类型
   * @default           'info'
   */
  children: any;
}
const prefixCls = 'rabbit-menu';
const Menu: React.FC<MenuProps> = ({ children, ...rest }) => (
  <div className={prefixCls} {...rest}>
    {children}
  </div>
);

export default Menu;

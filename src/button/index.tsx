import React from 'react';
import t from 'prop-types';

import { ButtonWrapper } from './style'

export interface ButtonProps {
  /**
   * @description       button 的类型
   * @default           'info'
   */
  kind?: 'primary' | 'white';
  children: any
}

export type KindMap = Record<Required<ButtonProps>['kind'], string>;

const prefixCls = 'button-box';

const kinds: KindMap = {
  primary: '#5352ED',
  white: '#ffffff'
};

const Alert: React.FC<ButtonProps> = ({ children, kind = 'info', ...rest }) => (
  <ButtonWrapper>
    <button
      className={prefixCls}
      style={{
        background: kinds[kind],
      }}
      {...rest}
    >
      {children}
    </button>
  </ButtonWrapper>
);

Alert.propTypes = {
  kind: t.oneOf(['primary', 'white']),
};

export default Alert;
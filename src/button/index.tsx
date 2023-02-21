import classnames from 'classnames';
import React, { FC, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { IconLoading } from '../icons';
import './style/index.less';
// export type ColorProps = 'primary' | 'success' | 'warning' | 'danger';
export type ButtonHTMLTypes = 'submit' | 'button' | 'reset';
export type ButtonType = 'link' | 'primary' | 'success' | 'warning' | 'danger';

type BaseButtonProps = {
  type?: ButtonType;
  href?: string;
  className?: string;
  children?: React.ReactNode;
  size?: 'small' | 'large' | 'default';
  // handleClick?: (e: React.SyntheticEvent) => void;
  disabled?: boolean;
  circle?: boolean;
  loading?: boolean;
  // color?: ColorProps;
};
type NativeButtonProps = {
  htmltype?: ButtonHTMLTypes;
  target?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps &
  Omit<React.ButtonHTMLAttributes<HTMLElement>, 'type'>;

type AnchorButtonProps = {
  href?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps &
  Omit<React.AnchorHTMLAttributes<HTMLElement>, 'type'>;

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

const loadingSize = {
  'large': '24',
  'default': '14',
  'small': '10',
}

const Button: FC<ButtonProps> = (ButtonProps) => {
  const { children, type, href, size = 'default', disabled, className, circle, loading, ...restProps } =
    ButtonProps;
  // }, [loading])



  const classNames = classnames('rabbit-btn', className, {
    //根据父组件传进来的 size 来判断使用什么类名
    // btn: true,
    'btn-small': size === 'small',
    'btn-large': size === 'large',
    circle: circle,
    loading: loading,
    // [`rabbit-btn-${type}`]: type,
    [`rabbit-components-${type}`]: type,
  });
  if (type === 'link' && href) {
    return (
      <a className={classNames} href={href} {...restProps}>
        {children}
      </a>
    );
  }

  return (
    <button
      className={classNames} //动态修改类名
      // onClick={handleClick} //点击按钮执行的回调函数
      disabled={disabled} //禁用按钮
      {...restProps}
    >
      <CSSTransition
        in={loading}
        classNames="loading"
        timeout={500}
      >
        <div className='rabbit-btn-loading-icon'>
          {loading && (
            <i>
              <IconLoading size={loadingSize[size]} />
            </i>
          )}
        </div>
      </CSSTransition>
      {/* {loading ? <div className="loading" /> : null} */}
      {children}
    </button>
  );
};
Button.defaultProps = {
  type: 'primary',
  children: 'Button',
  className: '',
  size: 'default',
  // handleClick: () => {
  //   return null;
  // },
  disabled: false,
  circle: false,
  loading: false,
  htmltype: 'button' as ButtonProps['htmltype'],
};

export default Button;

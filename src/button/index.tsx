import classnames from 'classnames';
import type { FC } from 'react';
import React from 'react';
import './style/index.less';
// export type ColorProps = 'primary' | 'success' | 'warning' | 'danger';
export type ButtonHTMLTypes = 'submit' | 'button' | 'reset';
export type ButtonType = 'link' | 'primary' | 'success' | 'warning' | 'danger';

type BaseButtonProps = {
  type?: ButtonType;
  href?: string;
  className?: string;
  children?: React.ReactNode;
  size?: 'small' | 'large';
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

const Button: FC<ButtonProps> = (ButtonProps) => {
  const { children, type, href, size, disabled, className, circle, loading, ...restProps } =
    ButtonProps;

  const classNames = classnames('rabbit-btn', className, {
    //根据父组件传进来的 size 来判断使用什么类名
    btn: true,
    'btn-small': size === 'small',
    'btn-large': size === 'large',
    circle: circle,
    loading: loading,
    // [`rabbit-btn-${type}`]: type,
    [`${type}`]: type,
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
      {loading ? <div className="loading" /> : null}
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

import classnames from 'classnames';
import { Component } from 'react';
import './style/index.less';
type Props = {
  children?: React.ReactNode;
  size?: 'small' | 'large';
  handleClick?: (e: React.SyntheticEvent) => void;
  disabled?: boolean;
};

class Button extends Component<Props> {
  render() {
    const { children, size, handleClick, disabled } = this.props;
    const className = classnames({
      //根据父组件传进来的 size 来判断使用什么类名
      btn: true,
      'btn-small': size === 'small',
      'btn-large': size === 'large',
    });

    return (
      <button
        className={className} //动态修改类名
        onClick={handleClick} //点击按钮执行的回调函数
        disabled={disabled} //禁用按钮
      >
        {children}
      </button>
    );
  }
}
Button.defaultProps = {
  children: 'Button',
  className: '',
  size: 'default',
  handleClick: () => {
    return null;
  },
  disabled: false,
};

export default Button;

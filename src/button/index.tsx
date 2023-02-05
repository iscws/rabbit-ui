import classnames from 'classnames';
import { Component } from 'react';
import './style/index.less';
type Props = {
  children?: React.ReactNode;
  size?: 'small' | 'large';
  handleClick?: (e: React.SyntheticEvent) => void;
  disabled?: boolean;
  circle?: boolean;
  loading?: boolean;
};

class Button extends Component<Props> {
  render() {
    const { children, size, handleClick, disabled, circle, loading } = this.props;
    const className = classnames({
      //根据父组件传进来的 size 来判断使用什么类名
      btn: true,
      'btn-small': size === 'small',
      'btn-large': size === 'large',
      circle: circle,
      loading: loading,
    });

    return (
      <div>
        <button
          className={className} //动态修改类名
          onClick={handleClick} //点击按钮执行的回调函数
          disabled={disabled} //禁用按钮
        >
          {loading ? <div className="loading"></div> : null}
          {children}
        </button>
      </div>
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
  circle: false,
  loading: false,
};

export default Button;

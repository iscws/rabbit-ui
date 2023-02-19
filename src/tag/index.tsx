import { IconClose } from '../icons';
import classNames from 'classnames';
import React, { FC, useState } from 'react';
import Transition from '../transition';
import './style/index.less';
export type ColorProps = 'primary' | 'success' | 'warning' | 'danger';
export interface TagProps {
  /** 自定义类名 */
  className?: string;
  /** Tag的主题色 */
  color?: ColorProps;
  /** Tag的尺寸 */
  size?: 'large' | 'small';
  /** Tag的文本 */
  text: string;
  /** 关闭Tag */
  onClose?: () => void;
  /** 是否显示关闭图标 */
  closable?: boolean;
}
const Tag: FC<TagProps> = (props) => {
  const [hide, setHide] = useState<boolean>(false);
  const { className, color, size, text, onClose, closable, ...restProps } = props;
  const classes = classNames('rabbit-tag', className, {
    [`rabbit-tag-${color}`]: color,
    [`rabbit-tag-${size}`]: size,
  });

  const handleClose = (e: React.MouseEvent) => {
    if (onClose) {
      onClose();
    }
    setHide(true);
  };
  return (
    <Transition in={!hide} timeout={300} animation="zoom-in-left">
      <div className={classes} {...restProps}>
        <span className="rabbit-tag-text">{text}</span>
        {closable && <i className="rabbit-tag-close-icon" onClick={handleClose}><IconClose color='#1890ff' /></i>}
      </div>
    </Transition>
  );
};
Tag.defaultProps = {
  color: 'primary',
  closable: false,
};

export default Tag;

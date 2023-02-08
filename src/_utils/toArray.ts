import React, { ReactElement, ReactNode } from 'react';
import { isFragment } from 'react-is';

// 将节点对象转化成数组
export interface Option {
  keepEmpty?: boolean;
}

export default function toArray(
  children: ReactNode,
  option: Option = {},
): ReactElement[] {
  let ret: ReactElement[] = [];

  React.Children.forEach(children, (child: any | any[]) => {
    if ((child === undefined || child === null) && !option.keepEmpty) {
      return;
    }

    if (Array.isArray(child)) {
      ret = ret.concat(toArray(child));
    } else if (isFragment(child) && child.props) {
      ret = ret.concat(toArray(child.props.children, option));
    } else {
      ret.push(child);
    }
  });

  return ret;
}
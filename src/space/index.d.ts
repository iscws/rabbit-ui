import { CSSProperties, FC, ReactNode } from 'react';
type Size = 'small' | 'middle' | 'large' | number;
export interface SpaceProps {
    /**
   * @description       对齐方式
   * @default           ''
   */
    align?: 'start' | 'end' | 'center' | 'baseline';
    /**
    * @description      间距方向
    * @default          'horizontal'
    */
    direction?: 'vertical' | 'horizontal';
    className?: string;
    style?: CSSProperties;
    size?: Size | Size[];
    split?: ReactNode;
    wrap?: boolean;
    children?: ReactNode | ReactNode[];
}
declare const Space: FC<SpaceProps>;
export default Space;

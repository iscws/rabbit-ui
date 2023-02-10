import React, { useState } from 'react';
// import PropTypes, { func } from 'prop-types';
import t from 'prop-types';
import Trigger from 'rc-trigger';
import 'rc-trigger/assets/index.css';
import './style/index.less'


export interface DropDownProps {
    /**
     * @description       触发方式
     * @default            hower
     */
    trigger?: 'click' | 'hover';
    /**
     * @description       下拉菜单位置
     * @default            bottom
     */
    popupPlacement?: 'bottom' | 'left' | 'right' | 'top';
    /**
     * @description       下拉菜单承载的内容元素
     * @default            []
     */
    items: any
    /**
     * @description       下拉菜单触发元素
     * @default            <Button>按钮<Button/>
     */
    children: any
}

export interface MenuProps {
    /**
         * @description       列表数组
         * @default            []
         */
    items?: {
        content: string,
        className: 'menu-item' | 'menu-item-forbidden'
    }[];
}

const builtinPlacements = {
    left: {
        points: ['cr', 'cl'],
    },
    right: {
        points: ['cl', 'cr'],
    },
    top: {
        points: ['bc', 'tc'],
    },
    bottom: {
        points: ['tc', 'bc'],
    },
    topLeft: {
        points: ['bl', 'tl'],
    },
    topRight: {
        points: ['br', 'tr'],
    },
    bottomRight: {
        points: ['tr', 'br'],
    },
    bottomLeft: {
        points: ['tl', 'bl'],
    },
};


export type KindMap = Record<Required<DropDownProps>['trigger'], string>;

const prefixCls = 'rabbit-dropdown';

//下拉菜单承载内容
const Menu: React.FC<MenuProps> = ({ items }) => {

    const [selected, setselected] = useState<number>(-1);

    //高亮先前选择的元素
    function lightSelected(index: any, className: any) {
        if (className != 'menu-item-forbidden') setselected(index);
    }

    return (
        <div className={prefixCls}>
            <div className='menu'>
                {
                    items && items.map((item, index) => {
                        return <div
                            key={index}
                            className={item.className == 'menu-item-forbidden' ? item.className : index == selected ? "menu-item-focus" : "menu-item"}
                            onClick={() => lightSelected(index, item.className)}
                        >{item.content}</div>
                    })
                }
            </div>
        </div>
    )
}

//下拉菜单
const DropDown: React.FC<DropDownProps> = (
    {
        items = [],
        trigger = 'hover',
        popupPlacement = 'bottom',
        children }
) => {

    return (
        <>
            <Trigger
                popupPlacement={popupPlacement}
                action={[trigger]}
                builtinPlacements={builtinPlacements}
                popup={<Menu items={items}></Menu>}
            >
                <button style={{ padding: "8px" }}>{children}</button>
            </Trigger>
        </>
    )
};

DropDown.propTypes = {
    trigger: t.oneOf(['click', 'hover']),
};


export default DropDown;
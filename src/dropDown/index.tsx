import React, { useState } from 'react';
import PropTypes from 'prop-types';
import t from 'prop-types';
import Trigger from 'rc-trigger';
import 'rc-trigger/assets/index.css';


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
    items?: any;
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

const popupBorderStyle = {
    border: '1px solid red',
    padding: "10px",
};

export type KindMap = Record<Required<DropDownProps>['trigger'], string>;

const prefixCls = 'rabbit-dropdown';

//下拉菜单承载的内容
const Menu: React.FC<MenuProps> = ({ items }) => {
    return (
        <div className="menu">
            {
                items.map(item => {
                    return <div style={popupBorderStyle} key={item} className="menu-item">{item}</div>
                })
            }

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
        <div>
            <Trigger
                popupPlacement={popupPlacement}
                action={[trigger]}
                builtinPlacements={builtinPlacements}
                popup={<Menu items={items}></Menu>}
            >
                <button style={{ margin: 20 }}>{children}</button>
            </Trigger>
        </div>
    )
};

DropDown.propTypes = {
    trigger: t.oneOf(['click', 'hover']),
};


export default DropDown;
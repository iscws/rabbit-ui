import React, {  FC } from "react";
export interface ButtonProps {
    /**
     * @description       Alert 的类型
     * @default           'info'
     */
    kind?: 'info' | 'positive' | 'negative' | 'warning';
    children: any
  }

const Button:React.FC<ButtonProps>=({children})=>{
    return (<button>
        {
            children
        }
    </button>)
}

export default Button
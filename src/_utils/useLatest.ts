import { useRef } from 'react';

//确保随时获取的值为最新值，同时也可解决闭包问题
const useLatest = <T>(value: T) => {
    const ref = useRef(value)
    ref.current = value

    return ref
};

export default useLatest;
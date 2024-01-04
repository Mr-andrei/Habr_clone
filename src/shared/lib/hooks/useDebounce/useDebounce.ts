import { useCallback, useRef } from 'react';

export function useDebounce(callback: (...args: any[])=> void, delay: number) {
    const time = useRef<ReturnType<typeof setTimeout> | null>(null);

    return useCallback((...args: any[]) => {
        if (time.current) {
            clearTimeout(time.current);
        }
        time.current = setTimeout(() => {
            callback(...args);
        }, delay);
    }, [callback, delay]);
}

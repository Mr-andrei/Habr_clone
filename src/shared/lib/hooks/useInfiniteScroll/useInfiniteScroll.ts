import { MutableRefObject, useEffect } from 'react';

interface UseInfiniteScrollOptions {
    callback?: () => void;
    triggerRef: MutableRefObject<HTMLElement>;
    wrapperRef: MutableRefObject<HTMLElement>;
}

export const useInfiniteScroll = ({ callback, wrapperRef, triggerRef }: UseInfiniteScrollOptions) => {
    useEffect(() => {
        let observer: IntersectionObserver | null = null;
        const wrapperObserve = wrapperRef.current;
        const triggerObserve = triggerRef.current;
        if (callback) {
            const options = {
                root: wrapperObserve,
                rootMargin: '0px',
                threshold: 1.0,
            };

            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback?.();
                }
            }, options);

            observer.observe(triggerObserve);
        }
        return () => {
            if (observer && triggerObserve) {
                observer.unobserve(triggerObserve);
            }
        };
    }, [callback, triggerRef, wrapperRef]);
};

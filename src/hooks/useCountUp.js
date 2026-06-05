import { useEffect, useState } from 'react';
import { useScrollReveal } from './useScrollReveal';

export function useCountUp(target, duration = 2000) {
    const [ref, isVisible] = useScrollReveal(0.3);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isVisible) return;

        const start = performance.now();
        function update(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(update);
        }
        requestAnimationFrame(update);
    }, [isVisible, target, duration]);

    return [ref, count];
}

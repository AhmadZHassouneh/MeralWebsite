import { useEffect, useRef, useState } from 'react';

export function useScrollReveal(threshold = 0.1) {
    const ref = useRef(null);
    const [isRevealed, setIsRevealed] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsRevealed(true);
                    observer.unobserve(el);
                }
            },
            { threshold, rootMargin: '0px 0px -50px 0px' }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold]);

    return [ref, isRevealed];
}

export function RevealWrapper({ children, direction = 'up', delay = 0, className = '' }) {
    const [ref, isRevealed] = useScrollReveal();

    const baseStyle = {
        opacity: isRevealed ? 1 : 0,
        transform: isRevealed
            ? 'translate(0, 0)'
            : direction === 'left'
                ? 'translateX(-60px)'
                : 'translateY(40px)',
        transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
    };

    return (
        <div ref={ref} style={baseStyle} className={className}>
            {children}
        </div>
    );
}

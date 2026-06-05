import { useEffect, useRef } from 'react';
import './CustomCursor.css';

export default function CustomCursor() {
    const dotRef = useRef(null);
    const outlineRef = useRef(null);

    useEffect(() => {
        if (!window.matchMedia('(hover: hover)').matches) return;

        let cursorX = 0, cursorY = 0;
        let outlineX = 0, outlineY = 0;
        let rafId;

        function onMouseMove(e) {
            cursorX = e.clientX;
            cursorY = e.clientY;
            if (dotRef.current) {
                dotRef.current.style.transform = `translate(${cursorX - 4}px, ${cursorY - 4}px)`;
            }
        }

        function animate() {
            outlineX += (cursorX - outlineX) * 0.15;
            outlineY += (cursorY - outlineY) * 0.15;
            if (outlineRef.current) {
                outlineRef.current.style.transform = `translate(${outlineX - 20}px, ${outlineY - 20}px)`;
            }
            rafId = requestAnimationFrame(animate);
        }

        document.addEventListener('mousemove', onMouseMove);
        rafId = requestAnimationFrame(animate);

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            cancelAnimationFrame(rafId);
        };
    }, []);

    if (typeof window !== 'undefined' && !window.matchMedia('(hover: hover)').matches) {
        return null;
    }

    return (
        <>
            <div className="cursor-dot" ref={dotRef} />
            <div className="cursor-outline" ref={outlineRef} />
        </>
    );
}

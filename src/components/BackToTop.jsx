import { useState, useEffect } from 'react';
import './BackToTop.css';

export default function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        function handleScroll() {
            setVisible(window.scrollY > 500);
        }
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <button
            className={`back-to-top ${visible ? 'visible' : ''}`}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
        >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 15l-6-6-6 6"/>
            </svg>
        </button>
    );
}

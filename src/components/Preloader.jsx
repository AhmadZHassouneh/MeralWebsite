import { useState, useEffect } from 'react';
import './Preloader.css';

export default function Preloader() {
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setHidden(true), 1200);
        return () => clearTimeout(timer);
    }, []);

    if (hidden) return null;

    return (
        <div className={`preloader ${hidden ? 'hidden' : ''}`}>
            <div className="loader">
                <div className="loader-ring" />
                <span className="loader-text">MERAL</span>
            </div>
        </div>
    );
}

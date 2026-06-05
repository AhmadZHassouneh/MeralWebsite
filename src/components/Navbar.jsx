import { useState, useEffect } from 'react';
import { useLang } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import './Navbar.css';

export default function Navbar() {
    const { lang, t, toggleLang } = useLang();
    const { theme, toggleTheme } = useTheme();
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [mobileOpen, setMobileOpen] = useState(false);

    const NAV_LINKS = [
        { href: '#home', label: t.nav.home },
        { href: '#about', label: t.nav.about },
        { href: '#services', label: t.nav.services },
        { href: '#partners', label: t.nav.partners },
        { href: '#contact', label: t.nav.contact },
    ];

    const logoSrc = lang === 'ar' ? `${import.meta.env.BASE_URL}images/logo-ar.png` : `${import.meta.env.BASE_URL}images/logo-en.png`;

    useEffect(() => {
        function handleScroll() {
            setScrolled(window.scrollY > 50);

            const sections = document.querySelectorAll('section[id]');
            const scrollPos = window.scrollY + 200;
            sections.forEach(section => {
                const top = section.offsetTop;
                const height = section.offsetHeight;
                if (scrollPos >= top && scrollPos < top + height) {
                    setActiveSection(section.id);
                }
            });
        }

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    function handleNavClick(e, href) {
        e.preventDefault();
        setMobileOpen(false);
        document.body.style.overflow = '';
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    }

    function toggleMobile() {
        const next = !mobileOpen;
        setMobileOpen(next);
        document.body.style.overflow = next ? 'hidden' : '';
    }

    return (
        <>
            <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <div className="nav-container">
                    <a href="#home" className="nav-logo" onClick={e => handleNavClick(e, '#home')}>
                        <img src={logoSrc} alt="Meral Electronics" className="logo-img" />
                    </a>
                    <nav className="nav-menu">
                        {NAV_LINKS.map(link => (
                            <a
                                key={link.href}
                                href={link.href}
                                className={`nav-link ${activeSection === link.href.slice(1) ? 'active' : ''}`}
                                onClick={e => handleNavClick(e, link.href)}
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>
                    <div className="nav-actions">
                        <button className="nav-icon-btn" onClick={toggleTheme} aria-label="Toggle theme">
                            {theme === 'dark' ? (
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                                </svg>
                            ) : (
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                                </svg>
                            )}
                        </button>
                        <button className="nav-icon-btn lang-btn" onClick={toggleLang} aria-label="Toggle language">
                            {lang === 'en' ? 'AR' : 'EN'}
                        </button>
                        <a href="#contact" className="nav-cta" onClick={e => handleNavClick(e, '#contact')}>{t.nav.getQuote}</a>
                        <button className={`nav-toggle ${mobileOpen ? 'active' : ''}`} onClick={toggleMobile} aria-label="Toggle menu">
                            <span /><span /><span />
                        </button>
                    </div>
                </div>
            </header>

            <div className={`mobile-menu ${mobileOpen ? 'active' : ''}`}>
                <nav className="mobile-nav">
                    {NAV_LINKS.map(link => (
                        <a key={link.href} href={link.href} className="mobile-link" onClick={e => handleNavClick(e, link.href)}>
                            {link.label}
                        </a>
                    ))}
                    <div className="mobile-controls">
                        <button className="nav-icon-btn" onClick={toggleTheme} aria-label="Toggle theme">
                            {theme === 'dark' ? (
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                                </svg>
                            ) : (
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                                </svg>
                            )}
                        </button>
                        <button className="nav-icon-btn lang-btn" onClick={toggleLang} aria-label="Toggle language">
                            {lang === 'en' ? 'AR' : 'EN'}
                        </button>
                    </div>
                    <a href="#contact" className="mobile-cta" onClick={e => handleNavClick(e, '#contact')}>{t.nav.getQuote}</a>
                </nav>
            </div>
        </>
    );
}

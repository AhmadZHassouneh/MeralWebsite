import { useEffect, useRef } from 'react';
import { RevealWrapper } from '../hooks/useScrollReveal';
import { useCountUp } from '../hooks/useCountUp';
import { useLang } from '../contexts/LanguageContext';
import './Hero.css';

function StatItem({ target, label }) {
    const [ref, count] = useCountUp(target);
    return (
        <div className="hero-stat" ref={ref}>
            <span className="hero-stat-number">{count}</span>
            <span className="hero-stat-plus">+</span>
            <span className="hero-stat-label">{label}</span>
        </div>
    );
}

export default function Hero() {
    const { t } = useLang();
    const particlesRef = useRef(null);

    useEffect(() => {
        const container = particlesRef.current;
        if (!container) return;
        for (let i = 0; i < 30; i++) {
            const p = document.createElement('div');
            p.className = 'hero-particle';
            p.style.left = Math.random() * 100 + '%';
            p.style.top = Math.random() * 100 + '%';
            p.style.animationDelay = Math.random() * 6 + 's';
            p.style.animationDuration = (4 + Math.random() * 4) + 's';
            const size = (1 + Math.random() * 2) + 'px';
            p.style.width = size;
            p.style.height = size;
            container.appendChild(p);
        }
    }, []);

    function scrollTo(e, selector) {
        e.preventDefault();
        document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <section id="home" className="hero">
            <div className="hero-bg">
                <div className="hero-grid" />
                <div className="hero-particles" ref={particlesRef} />
                <div className="hero-gradient" />
            </div>
            <div className="hero-content">
                <RevealWrapper>
                    <div className="hero-badge">
                        <span className="badge-dot" />
                        {t.hero.badge}
                    </div>
                </RevealWrapper>
                <h1 className="hero-title">
                    <RevealWrapper delay={0.1}><span>{t.hero.title1}</span></RevealWrapper>
                    <RevealWrapper delay={0.2}><span>{t.hero.title2}</span></RevealWrapper>
                    <RevealWrapper delay={0.3}><span className="hero-accent">{t.hero.title3}</span></RevealWrapper>
                </h1>
                <RevealWrapper delay={0.4}>
                    <p className="hero-desc">{t.hero.desc}</p>
                </RevealWrapper>
                <RevealWrapper delay={0.5}>
                    <div className="hero-buttons">
                        <a href="#services" className="btn btn-primary" onClick={e => scrollTo(e, '#services')}>
                            {t.hero.exploreServices}
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                        </a>
                        <a href="#about" className="btn btn-outline" onClick={e => scrollTo(e, '#about')}>
                            {t.hero.learnMore}
                        </a>
                    </div>
                </RevealWrapper>
                <RevealWrapper delay={0.6}>
                    <div className="hero-stats">
                        <StatItem target={20} label={t.hero.yearsExperience} />
                        <div className="hero-stat-divider" />
                        <StatItem target={250} label={t.hero.satisfiedClients} />
                        <div className="hero-stat-divider" />
                        <StatItem target={500} label={t.hero.projectsCompleted} />
                    </div>
                </RevealWrapper>
            </div>
            <div className="hero-scroll">
                <a href="#about" className="scroll-indicator" onClick={e => scrollTo(e, '#about')}>
                    <span>{t.hero.scroll}</span>
                    <div className="scroll-line" />
                </a>
            </div>
        </section>
    );
}

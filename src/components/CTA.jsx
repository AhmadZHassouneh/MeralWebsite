import { RevealWrapper } from '../hooks/useScrollReveal';
import { useLang } from '../contexts/LanguageContext';
import './CTA.css';

export default function CTA() {
    const { t } = useLang();

    function scrollTo(e, selector) {
        e.preventDefault();
        document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <section className="section cta-section">
            <div className="cta-bg">
                <div className="cta-glow" />
            </div>
            <div className="container">
                <div className="cta-content">
                    <RevealWrapper>
                        <h2 className="cta-title">{t.cta.title}<br/><span className="text-accent">{t.cta.titleAccent}</span></h2>
                    </RevealWrapper>
                    <RevealWrapper delay={0.1}>
                        <p className="cta-desc">{t.cta.desc}</p>
                    </RevealWrapper>
                    <RevealWrapper delay={0.2}>
                        <div className="cta-buttons">
                            <a href="#contact" className="btn btn-primary btn-lg" onClick={e => scrollTo(e, '#contact')}>
                                {t.cta.requestQuote}
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7"/>
                                </svg>
                            </a>
                            <a href="tel:009627762282222" className="btn btn-outline btn-lg">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                                </svg>
                                {t.cta.callUs}
                            </a>
                        </div>
                    </RevealWrapper>
                </div>
            </div>
        </section>
    );
}

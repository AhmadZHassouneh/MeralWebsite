import { RevealWrapper } from '../hooks/useScrollReveal';
import { useLang } from '../contexts/LanguageContext';
import './About.css';

const featureIcons = [
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>,
    <><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></>,
    <><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></>,
];

export default function About() {
    const { t } = useLang();

    return (
        <section id="about" className="section about">
            <div className="container">
                <div className="about-grid">
                    <div className="about-visual">
                        <RevealWrapper direction="left">
                            <div className="about-image-wrapper">
                                <div className="about-image">
                                    <img src="/images/weighbridge.jpg" alt="Meral Weighbridge" />
                                </div>
                                <div className="about-experience">
                                    <span className="exp-number">{t.about.expYears}</span>
                                    <span className="exp-text">{t.about.expText.split('\n').map((line, i) => (
                                        <span key={i}>{line}{i === 0 && <br/>}</span>
                                    ))}</span>
                                </div>
                            </div>
                        </RevealWrapper>
                    </div>
                    <div className="about-content">
                        <RevealWrapper><div className="section-label">{t.about.label}</div></RevealWrapper>
                        <RevealWrapper delay={0.1}>
                            <h2 className="section-title">{t.about.title}<br/><span className="text-accent">{t.about.titleAccent}</span></h2>
                        </RevealWrapper>
                        <RevealWrapper delay={0.2}>
                            <p className="about-text">{t.about.text1}</p>
                        </RevealWrapper>
                        <RevealWrapper delay={0.25}>
                            <p className="about-text">{t.about.text2}</p>
                        </RevealWrapper>
                        <RevealWrapper delay={0.3}>
                            <div className="about-features">
                                {t.about.features.map((f, i) => (
                                    <div className="about-feature" key={i}>
                                        <div className="feature-icon">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                {featureIcons[i]}
                                            </svg>
                                        </div>
                                        <div>
                                            <h4>{f.title}</h4>
                                            <p>{f.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </RevealWrapper>
                    </div>
                </div>
            </div>
        </section>
    );
}

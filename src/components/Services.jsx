import { RevealWrapper } from '../hooks/useScrollReveal';
import { useLang } from '../contexts/LanguageContext';
import './Services.css';

const serviceIcons = [
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="32" width="40" height="8" rx="2"/><rect x="8" y="26" width="32" height="6" rx="1"/>
        <path d="M12 26V18h24v8"/><path d="M2 40h44"/>
    </svg>,
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="30" width="40" height="6" rx="1"/><rect x="2" y="36" width="44" height="4" rx="1"/>
        <path d="M8 30V20"/><path d="M16 30V20"/><path d="M24 30V20"/><path d="M32 30V20"/><path d="M40 30V20"/>
        <rect x="6" y="16" width="36" height="4" rx="1"/><path d="M2 40h44"/>
    </svg>,
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="6" y="8" width="36" height="24" rx="2"/><path d="M14 36h20"/><path d="M24 32v4"/>
        <circle cx="24" cy="20" r="6"/><path d="M24 14v2"/><path d="M24 24v2"/><path d="M18 20h2"/><path d="M28 20h2"/>
    </svg>,
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="24" width="40" height="6" rx="1"/><path d="M8 24V12h32v12"/>
        <path d="M4 30v8"/><path d="M44 30v8"/><path d="M2 38h8"/><path d="M38 38h8"/>
    </svg>,
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 36V12l12-6 12 6v24"/><path d="M4 36h40"/><path d="M20 36V24h8v12"/>
        <rect x="16" y="16" width="5" height="5" rx="1"/><rect x="27" y="16" width="5" height="5" rx="1"/>
    </svg>,
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14.7 6.3a1 1 0 0 0-1.4 0l-2.6 2.6a1 1 0 0 0 0 1.4l8 8"/>
        <path d="M28.3 20.7l8 8a1 1 0 0 1 0 1.4l-2.6 2.6a1 1 0 0 1-1.4 0l-8-8"/>
        <circle cx="24" cy="24" r="4"/><path d="M4 40l8-8"/><path d="M36 8l8-4"/>
    </svg>,
];

const numbers = ['01', '02', '03', '04', '05', '06'];
const featuredIndex = 1;

export default function Services() {
    const { t } = useLang();

    return (
        <section id="services" className="section services">
            <div className="container">
                <div className="section-header">
                    <RevealWrapper><div className="section-label">{t.services.label}</div></RevealWrapper>
                    <RevealWrapper delay={0.1}>
                        <h2 className="section-title">{t.services.title}<br/><span className="text-accent">{t.services.titleAccent}</span></h2>
                    </RevealWrapper>
                    <RevealWrapper delay={0.2}>
                        <p className="section-desc">{t.services.desc}</p>
                    </RevealWrapper>
                </div>
                <div className="services-grid">
                    {t.services.items.map((s, i) => (
                        <RevealWrapper key={i} delay={0.1 * (i + 1)}>
                            <div className={`service-card ${i === featuredIndex ? 'featured' : ''}`}>
                                {i === featuredIndex && <div className="service-badge">{t.services.mostPopular}</div>}
                                <div className="service-number">{numbers[i]}</div>
                                <div className="service-icon">{serviceIcons[i]}</div>
                                <h3 className="service-title">{s.title}</h3>
                                <p className="service-desc">{s.desc}</p>
                                <ul className="service-features">
                                    {s.features.map((f, j) => <li key={j}>{f}</li>)}
                                </ul>
                            </div>
                        </RevealWrapper>
                    ))}
                </div>
            </div>
        </section>
    );
}

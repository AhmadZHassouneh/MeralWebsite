import { RevealWrapper } from '../hooks/useScrollReveal';
import { useLang } from '../contexts/LanguageContext';
import './Partners.css';

const partners = [
    { name: 'SENSOCAR', country: 'Spain', logo: '/images/sensocar.png' },
    { name: 'FLINTEC', country: 'Sweden', logo: '/images/flintec.png' },
    { name: 'METTLER TOLEDO', country: 'Switzerland', logo: '/images/mettler-toledo.jpg' },
    { name: 'PRECIA MOLEN', country: 'France', logo: '/images/precia-molen.jpg' },
];

export default function Partners() {
    const { t } = useLang();

    return (
        <section id="partners" className="section partners">
            <div className="container">
                <div className="section-header">
                    <RevealWrapper><div className="section-label">{t.partners.label}</div></RevealWrapper>
                    <RevealWrapper delay={0.1}>
                        <h2 className="section-title">{t.partners.title}<br/><span className="text-accent">{t.partners.titleAccent}</span></h2>
                    </RevealWrapper>
                    <RevealWrapper delay={0.2}>
                        <p className="section-desc">{t.partners.desc}</p>
                    </RevealWrapper>
                </div>
                <RevealWrapper delay={0.3}>
                    <div className="partners-grid">
                        {partners.map((p, i) => (
                            <div className="partner-card" key={i}>
                                <div className="partner-logo">
                                    <img src={p.logo} alt={p.name} />
                                </div>
                            </div>
                        ))}
                    </div>
                </RevealWrapper>
            </div>
        </section>
    );
}

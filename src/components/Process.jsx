import { RevealWrapper } from '../hooks/useScrollReveal';
import { useLang } from '../contexts/LanguageContext';
import './Process.css';

export default function Process() {
    const { t } = useLang();

    return (
        <section className="section process">
            <div className="container">
                <div className="section-header">
                    <RevealWrapper><div className="section-label">{t.process.label}</div></RevealWrapper>
                    <RevealWrapper delay={0.1}>
                        <h2 className="section-title">{t.process.title}<br/><span className="text-accent">{t.process.titleAccent}</span></h2>
                    </RevealWrapper>
                </div>
                <div className="process-timeline">
                    <div className="process-line" />
                    {t.process.steps.map((step, i) => (
                        <RevealWrapper key={i} delay={0.1 * (i + 1)}>
                            <div className="process-step">
                                <div className="process-dot">{i + 1}</div>
                                <h3>{step.title}</h3>
                                <p>{step.desc}</p>
                            </div>
                        </RevealWrapper>
                    ))}
                </div>
            </div>
        </section>
    );
}

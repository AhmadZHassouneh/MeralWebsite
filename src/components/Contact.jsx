import { useState } from 'react';
import { RevealWrapper } from '../hooks/useScrollReveal';
import { useLang } from '../contexts/LanguageContext';
import './Contact.css';

const contactIcons = [
    <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></>,
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>,
    <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></>,
    <><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></>,
];

export default function Contact() {
    const { t } = useLang();
    const [status, setStatus] = useState('idle');

    const contactItems = [
        { icon: contactIcons[0], title: t.contact.visitUs, lines: t.contact.address },
        { icon: contactIcons[1], title: t.contact.callUs, lines: ['+962 776 228 2222'] },
        { icon: contactIcons[2], title: t.contact.emailUs, lines: ['info@meraljo.com'] },
        { icon: contactIcons[3], title: t.contact.workingHours, lines: t.contact.workingDays },
    ];

    function handleSubmit(e) {
        e.preventDefault();
        setStatus('sending');
        setTimeout(() => {
            setStatus('sent');
            setTimeout(() => {
                setStatus('idle');
                e.target.reset();
            }, 2500);
        }, 1500);
    }

    return (
        <section id="contact" className="section contact">
            <div className="container">
                <div className="contact-grid">
                    <div className="contact-info">
                        <RevealWrapper><div className="section-label">{t.contact.label}</div></RevealWrapper>
                        <RevealWrapper delay={0.1}>
                            <h2 className="section-title">{t.contact.title}<br/><span className="text-accent">{t.contact.titleAccent}</span></h2>
                        </RevealWrapper>
                        <RevealWrapper delay={0.15}>
                            <p className="contact-desc">{t.contact.desc}</p>
                        </RevealWrapper>
                        <div className="contact-details">
                            {contactItems.map((item, i) => (
                                <RevealWrapper key={i} delay={0.2 + i * 0.05}>
                                    <div className="contact-item">
                                        <div className="contact-icon">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                {item.icon}
                                            </svg>
                                        </div>
                                        <div>
                                            <h4>{item.title}</h4>
                                            <p>{item.lines.map((line, j) => (
                                                <span key={j}>{line}{j < item.lines.length - 1 && <br/>}</span>
                                            ))}</p>
                                        </div>
                                    </div>
                                </RevealWrapper>
                            ))}
                        </div>
                    </div>
                    <RevealWrapper delay={0.2}>
                        <div className="contact-form-wrapper">
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <h3 className="form-title">{t.contact.formTitle}</h3>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="firstName">{t.contact.firstName}</label>
                                        <input type="text" id="firstName" name="firstName" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="lastName">{t.contact.lastName}</label>
                                        <input type="text" id="lastName" name="lastName" required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">{t.contact.email}</label>
                                    <input type="email" id="email" name="email" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">{t.contact.phone}</label>
                                    <input type="tel" id="phone" name="phone" placeholder="+962 7XX XXX XXXX" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="service">{t.contact.service}</label>
                                    <select id="service" name="service">
                                        <option value="">{t.contact.selectService}</option>
                                        {Object.entries(t.contact.serviceOptions).map(([val, label]) => (
                                            <option key={val} value={val}>{label}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">{t.contact.message}</label>
                                    <textarea id="message" name="message" rows="4" required placeholder={t.contact.messagePlaceholder} />
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-full"
                                    disabled={status !== 'idle'}
                                    style={status === 'sent' ? { background: '#22c55e' } : {}}
                                >
                                    {status === 'sending' && t.contact.sending}
                                    {status === 'sent' && t.contact.sent}
                                    {status === 'idle' && (
                                        <>
                                            {t.contact.send}
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <line x1="22" y1="2" x2="11" y2="13"/>
                                                <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                                            </svg>
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </RevealWrapper>
                </div>
            </div>
        </section>
    );
}

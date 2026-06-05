import { useLang } from '../contexts/LanguageContext';
import './Footer.css';

export default function Footer() {
    const { lang, t } = useLang();
    const logoSrc = lang === 'ar' ? '/images/logo-ar.png' : '/images/logo-en.png';

    function scrollTo(e, selector) {
        e.preventDefault();
        document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <a href="#home" className="nav-logo footer-logo" onClick={e => scrollTo(e, '#home')}>
                            <img src={logoSrc} alt="Meral Electronics" className="logo-img" />
                        </a>
                        <p className="footer-desc">{t.footer.desc}</p>
                    </div>
                    <div className="footer-links">
                        <h4>{t.footer.quickLinks}</h4>
                        <a href="#home" onClick={e => scrollTo(e, '#home')}>{t.footer.home}</a>
                        <a href="#about" onClick={e => scrollTo(e, '#about')}>{t.footer.aboutUs}</a>
                        <a href="#services" onClick={e => scrollTo(e, '#services')}>{t.footer.services}</a>
                        <a href="#partners" onClick={e => scrollTo(e, '#partners')}>{t.footer.partners}</a>
                        <a href="#contact" onClick={e => scrollTo(e, '#contact')}>{t.footer.contact}</a>
                    </div>
                    <div className="footer-links">
                        <h4>{t.footer.servicesTitle}</h4>
                        <a href="#services" onClick={e => scrollTo(e, '#services')}>{t.footer.steelWeighbridges}</a>
                        <a href="#services" onClick={e => scrollTo(e, '#services')}>{t.footer.concreteWeighbridges}</a>
                        <a href="#services" onClick={e => scrollTo(e, '#services')}>{t.footer.weighingIndicators}</a>
                        <a href="#services" onClick={e => scrollTo(e, '#services')}>{t.footer.maintenance}</a>
                    </div>
                    <div className="footer-contact">
                        <h4>{t.footer.contactInfo}</h4>
                        <p>{t.contact.address[0]}<br/>{t.contact.address[1]}</p>
                        <p>+962 776 228 2222</p>
                        <p>info@meraljo.com</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>{t.footer.copyright}</p>
                    <p className="footer-arabic">{t.footer.arabic}</p>
                </div>
            </div>
        </footer>
    );
}

import { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../i18n/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'en');

    useEffect(() => {
        localStorage.setItem('lang', lang);
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    }, [lang]);

    const t = translations[lang];
    const isRTL = lang === 'ar';
    const toggleLang = () => setLang(prev => prev === 'en' ? 'ar' : 'en');

    return (
        <LanguageContext.Provider value={{ lang, t, isRTL, toggleLang }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLang() {
    return useContext(LanguageContext);
}


import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import fi from '@/locales/fi';
import en from '@/locales/en';

type Locale = 'fi' | 'en';
type Translations = typeof fi;

interface LocalizationContextType {
  locale: Locale;
  t: (key: keyof Translations, params?: Record<string, string | number>) => string;
  changeLocale: (locale: Locale) => void;
  availableLocales: Locale[];
}

const translations: Record<Locale, Translations> = {
  fi,
  en
};

const LocalizationContext = createContext<LocalizationContextType | undefined>(undefined);

export const LocalizationProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Locale>('fi');

  // Load saved locale from localStorage if available
  useEffect(() => {
    const savedLocale = localStorage.getItem('locale') as Locale;
    if (savedLocale && translations[savedLocale]) {
      setLocale(savedLocale);
    }
  }, []);

  const changeLocale = (newLocale: Locale) => {
    if (translations[newLocale]) {
      setLocale(newLocale);
      localStorage.setItem('locale', newLocale);
    }
  };

  // Translation function that supports variable substitution
  const t = (key: keyof Translations, params?: Record<string, string | number>): string => {
    let text = translations[locale][key] || key;
    
    if (params) {
      Object.entries(params).forEach(([param, value]) => {
        text = text.replace(`{${param}}`, String(value));
      });
    }
    
    return text;
  };

  const value = {
    locale,
    t,
    changeLocale,
    availableLocales: Object.keys(translations) as Locale[]
  };

  return (
    <LocalizationContext.Provider value={value}>
      {children}
    </LocalizationContext.Provider>
  );
};

export const useLocalization = () => {
  const context = useContext(LocalizationContext);
  if (context === undefined) {
    throw new Error('useLocalization must be used within a LocalizationProvider');
  }
  return context;
};

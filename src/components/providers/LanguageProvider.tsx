'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Language = 'en' | 'es' | 'ko';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation keys and values
const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.accommodations': 'Accommodations',
    'nav.activities': 'Activities',
    'nav.gallery': 'Gallery',
    'nav.directions': 'Directions',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Paradise Found at Playa Saldamando',
    'hero.subtitle': 'Experience the ultimate beachfront getaway on the stunning Pacific coast of Baja California',
    'hero.cta.book': 'Book Your Stay',
    'hero.cta.explore': 'Explore More',
    
    // About Section
    'about.title': 'Your Beachfront Paradise Awaits',
    'about.description': 'For over 30 years, Playa Saldamando has been providing unforgettable coastal experiences. Located at Kilometer 94 on the scenic Tijuana-Ensenada toll road, our private beachfront property offers over a mile of pristine Pacific coastline.',
    
    // Common
    'common.loading': 'Loading...',
    'common.error': 'Something went wrong',
    'common.retry': 'Try Again',
    'common.close': 'Close',
    'common.save': 'Save',
    'common.cancel': 'Cancel',
    'common.submit': 'Submit',
    'common.next': 'Next',
    'common.previous': 'Previous',
    
    // Contact
    'contact.title': 'Get in Touch',
    'contact.phone.us': 'US Phone',
    'contact.phone.mx': 'Mexico Mobile',
    'contact.email': 'Email',
    'contact.address': 'Address',
    
    // Weather
    'weather.title': 'Current Weather',
    'weather.temperature': 'Temperature',
    'weather.humidity': 'Humidity',
    'weather.wind': 'Wind Speed',
    
    // Trip Planner
    'trip.title': 'Plan Your Trip',
    'trip.guests': 'Number of Guests',
    'trip.nights': 'Number of Nights',
    'trip.accommodation': 'Accommodation Type',
    'trip.calculate': 'Calculate Cost',
    'trip.total': 'Total Cost',
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.about': 'Acerca de',
    'nav.accommodations': 'Alojamiento',
    'nav.activities': 'Actividades',
    'nav.gallery': 'Galería',
    'nav.directions': 'Direcciones',
    'nav.contact': 'Contacto',
    
    // Hero Section
    'hero.title': 'Paraíso Encontrado en Playa Saldamando',
    'hero.subtitle': 'Experimenta la escapada costera definitiva en la impresionante costa del Pacífico de Baja California',
    'hero.cta.book': 'Reserva tu Estadía',
    'hero.cta.explore': 'Explorar Más',
    
    // About Section
    'about.title': 'Tu Paraíso Costero te Espera',
    'about.description': 'Por más de 30 años, Playa Saldamando ha brindado experiencias costeras inolvidables. Ubicado en el Kilómetro 94 de la pintoresca carretera de cuota Tijuana-Ensenada, nuestra propiedad privada frente al mar ofrece más de una milla de costa prístina del Pacífico.',
    
    // Common
    'common.loading': 'Cargando...',
    'common.error': 'Algo salió mal',
    'common.retry': 'Intentar de Nuevo',
    'common.close': 'Cerrar',
    'common.save': 'Guardar',
    'common.cancel': 'Cancelar',
    'common.submit': 'Enviar',
    'common.next': 'Siguiente',
    'common.previous': 'Anterior',
    
    // Contact
    'contact.title': 'Ponte en Contacto',
    'contact.phone.us': 'Teléfono EE.UU.',
    'contact.phone.mx': 'Móvil México',
    'contact.email': 'Correo Electrónico',
    'contact.address': 'Dirección',
    
    // Weather
    'weather.title': 'Clima Actual',
    'weather.temperature': 'Temperatura',
    'weather.humidity': 'Humedad',
    'weather.wind': 'Velocidad del Viento',
    
    // Trip Planner
    'trip.title': 'Planifica tu Viaje',
    'trip.guests': 'Número de Huéspedes',
    'trip.nights': 'Número de Noches',
    'trip.accommodation': 'Tipo de Alojamiento',
    'trip.calculate': 'Calcular Costo',
    'trip.total': 'Costo Total',
  },
  ko: {
    // Navigation
    'nav.home': '홈',
    'nav.about': '소개',
    'nav.accommodations': '숙박',
    'nav.activities': '활동',
    'nav.gallery': '갤러리',
    'nav.directions': '길찾기',
    'nav.contact': '연락처',
    
    // Hero Section
    'hero.title': '플라야 살다만도에서 발견한 천국',
    'hero.subtitle': '바하 칼리포르니아의 아름다운 태평양 연안에서 최고의 해변 휴가를 경험하세요',
    'hero.cta.book': '예약하기',
    'hero.cta.explore': '더 알아보기',
    
    // About Section
    'about.title': '당신의 해변 천국이 기다립니다',
    'about.description': '30년 이상 플라야 살다만도는 잊을 수 없는 해안 경험을 제공해왔습니다. 경치 좋은 티후아나-엔세나다 유료도로 94킬로미터 지점에 위치한 저희 전용 해변 부지는 1마일 이상의 깨끗한 태평양 해안선을 제공합니다.',
    
    // Common
    'common.loading': '로딩 중...',
    'common.error': '문제가 발생했습니다',
    'common.retry': '다시 시도',
    'common.close': '닫기',
    'common.save': '저장',
    'common.cancel': '취소',
    'common.submit': '제출',
    'common.next': '다음',
    'common.previous': '이전',
    
    // Contact
    'contact.title': '연락하기',
    'contact.phone.us': '미국 전화',
    'contact.phone.mx': '멕시코 휴대폰',
    'contact.email': '이메일',
    'contact.address': '주소',
    
    // Weather
    'weather.title': '현재 날씨',
    'weather.temperature': '온도',
    'weather.humidity': '습도',
    'weather.wind': '풍속',
    
    // Trip Planner
    'trip.title': '여행 계획',
    'trip.guests': '게스트 수',
    'trip.nights': '숙박 일수',
    'trip.accommodation': '숙박 유형',
    'trip.calculate': '비용 계산',
    'trip.total': '총 비용',
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && ['en', 'es', 'ko'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    } else {
      // Detect browser language
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith('es')) {
        setLanguage('es');
      } else if (browserLang.startsWith('ko')) {
        setLanguage('ko');
      } else {
        setLanguage('en');
      }
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('language', language);
      document.documentElement.lang = language;
    }
  }, [language, mounted]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

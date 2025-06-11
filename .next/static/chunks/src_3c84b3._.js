(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_3c84b3._.js", {

"[project]/src/components/providers/ThemeProvider.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "ThemeContext": ()=>ThemeContext,
    "ThemeProvider": ()=>ThemeProvider,
    "useTheme": ()=>useTheme
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature(), _s1 = __turbopack_refresh__.signature();
'use client';
;
const ThemeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function ThemeProvider({ children }) {
    _s();
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('system');
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!mounted) return;
        const root = window.document.documentElement;
        root.classList.remove('light', 'dark');
        if (theme === 'system') {
            const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            root.classList.add(systemTheme);
        } else {
            root.classList.add(theme);
        }
        localStorage.setItem('theme', theme);
    }, [
        theme,
        mounted
    ]);
    const toggleTheme = ()=>{
        setTheme((current)=>current === 'light' ? 'dark' : 'light');
    };
    if (!mounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: children
        }, void 0, false);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeContext.Provider, {
        value: {
            theme,
            setTheme,
            toggleTheme
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/providers/ThemeProvider.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
_s(ThemeProvider, "7JIj/YhwVjIINO6QRI2j90TPIFs=");
_c = ThemeProvider;
function useTheme() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}
_s1(useTheme, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_refresh__.register(_c, "ThemeProvider");

})()),
"[project]/src/components/providers/LanguageProvider.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "LanguageContext": ()=>LanguageContext,
    "LanguageProvider": ()=>LanguageProvider,
    "useLanguage": ()=>useLanguage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature(), _s1 = __turbopack_refresh__.signature();
'use client';
;
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
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
        'trip.total': 'Total Cost'
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
        'trip.total': 'Costo Total'
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
        'trip.total': '총 비용'
    }
};
function LanguageProvider({ children }) {
    _s();
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('en');
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage && [
            'en',
            'es',
            'ko'
        ].includes(savedLanguage)) {
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (mounted) {
            localStorage.setItem('language', language);
            document.documentElement.lang = language;
        }
    }, [
        language,
        mounted
    ]);
    const t = (key)=>{
        return translations[language][key] || key;
    };
    if (!mounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: children
        }, void 0, false);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: {
            language,
            setLanguage,
            t
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/providers/LanguageProvider.tsx",
        lineNumber: 213,
        columnNumber: 5
    }, this);
}
_s(LanguageProvider, "gT/yCmRg4polcKdoZlcGYMkuUYA=");
_c = LanguageProvider;
function useLanguage() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
_s1(useLanguage, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_refresh__.register(_c, "LanguageProvider");

})()),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {


})()),
}]);

//# sourceMappingURL=src_3c84b3._.js.map
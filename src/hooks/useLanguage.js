import { useCallback, useEffect, useState } from 'react';
import translations from '../data/translations';

export function useLanguage() {
    const [ lang, setLang ] = useState( 'en' );

    useEffect( () => {
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = lang;
    }, [ lang ] );

    const toggleLanguage = useCallback( () => {
        setLang( ( current ) => ( current === 'en' ? 'ar' : 'en' ) );
    }, [] );

    return { lang, text: translations[ lang ], toggleLanguage };
}

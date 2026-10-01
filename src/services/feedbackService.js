export function savePendingFeedback( item ) {
    try {
        const saved = JSON.parse( localStorage.getItem( 'portfolio-feedbacks' ) || '[]' );
        const otherFeedbacks = saved.filter( ( savedItem ) => savedItem.email !== item.email );
        localStorage.setItem( 'portfolio-feedbacks', JSON.stringify( [ item, ...otherFeedbacks ].slice( 0, 20 ) ) );
    } catch ( error ) {
        console.error( 'Unable to save feedback locally:', error );
    }
}

export function createFeedbackMailto( { item, lang } ) {
    const subject = encodeURIComponent(
        `${lang === 'en' ? 'New portfolio feedback for review' : 'ملاحظة جديدة للمراجعة'} — ${item.email}`,
    );
    const body = encodeURIComponent( [
        `${lang === 'en' ? 'Name' : 'الاسم'}: ${item.name}`,
        `${lang === 'en' ? 'Email' : 'البريد الإلكتروني'}: ${item.email}`,
        `${lang === 'en' ? 'Status' : 'الحالة'}: pending / بانتظار الموافقة`,
        '',
        `${lang === 'en' ? 'Message' : 'الرسالة'}:`,
        item.message,
    ].join( '\n' ) );

    return `mailto:hamadea524@gmail.com?subject=${subject}&body=${body}`;
}

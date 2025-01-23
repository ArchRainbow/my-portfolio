import messages_en from './en.json'
import messages_es from './es.json'

export const LOCALES = {
    ENGLISH: 'en',
    SPANISH: 'es',
}

export const messages = {
    [LOCALES.ENGLISH]: messages_en,
    [LOCALES.SPANISH]: messages_es,
}

export const defaultLocale = 'es'
import { languages } from "@/i18n"
import { defaultLocale } from "@/i18n"

const messages = Object.assign(languages)
export default defineI18nConfig(() => ({
    legacy: false,
    locale: defaultLocale,
    fallbackLocale: 'en',
    messages: messages
}))
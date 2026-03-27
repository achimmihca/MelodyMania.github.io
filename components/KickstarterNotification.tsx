import Image from "next/legacy/image"
import { useTranslationUnescaped } from '../lib/utils'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const KickstarterNotification = () => {
    const { t } = useTranslationUnescaped("common")
    const [isVisible, setIsVisible] = useState(false)
    const [isDismissed, setIsDismissed] = useState(false)
    const router = useRouter()

    useEffect(() => {
        // Trigger animation after initial render
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, [])

    if (isDismissed) {
        return null;
    }

    const getNotificationText = () => {
        const translationKey = "kickstarter_notification_text"
        const translatedText = t(translationKey)

        // If translation is missing (returns the key itself), use hard-coded fallbacks
        if (translatedText === translationKey) {
            const isGerman = router.asPath.startsWith('/de/') || router.query.locale === 'de'
            return isGerman 
                ? "🚀 Jetzt auf Kickstarter! Hilf uns, das ultimative Karaoke-Erlebnis zum Leben zu erwecken!" 
                : "🚀 Now on Kickstarter! Back us to bring the ultimate karaoke experience to life!"
        }
        return translatedText
    }

    return (
        <div className={`kickstarter-notification-container position-relative ${isVisible ? 'visible' : ''}`}>
            <a 
                href="https://www.kickstarter.com/projects/anst/melody-mania" 
                target="_blank" 
                rel="noopener noreferrer"
                className="kickstarter-notification-link"
            >
                <div className="container d-flex align-items-center justify-content-center py-4 position-relative">
                    <div className="kickstarter-logo-wrapper me-3">
                        <Image 
                            src="/img/kickstarter/202004-kickstarter-logo-green.svg" 
                            alt="Kickstarter" 
                            width={120} 
                            height={24}
                            layout="fixed"
                        />
                    </div>
                    <span className="kickstarter-text fw-bold">
                        {getNotificationText()}
                    </span>
                    <i className="bi-arrow-right ms-2"></i>
                </div>
            </a>
            <button 
                className="btn-close btn-close-white position-absolute top-50 end-0 translate-middle-y me-3" 
                aria-label="Close"
                onClick={() => setIsDismissed(true)}
                style={{ zIndex: 1021 }}
            ></button>
        </div>
    )
}

export default KickstarterNotification;

import { NextPage } from "next"
import BackToHomeNavigationSection from "../components/BackToHomeNavigationSection";
import { useTranslationUnescaped } from "../lib/utils";
import { useEffect, useState } from "react";
import Bowser from "bowser";

const Help: NextPage = () =>
{
    const { t } = useTranslationUnescaped()
    const [isFirefoxMobile, setIsFirefoxMobile] = useState(false);

    useEffect(() => {
        console.log(navigator);
        console.log(Bowser.getParser(window.navigator.userAgent).getBrowserName());
        if (typeof navigator !== "undefined") {
            const browser = Bowser.getParser(window.navigator.userAgent);
            const isFirefox = browser.getBrowserName() === "Firefox";
            const isMobile = browser.getPlatformType(true) === "mobile";
            setIsFirefoxMobile(isFirefox && !isMobile);
        }
    }, []);

    return (
        <>
            <BackToHomeNavigationSection title={`Melody Mania - Help`} />

            {/* The AI Chat does not work on Firefox because of security issues in the iframe. */}
            {isFirefoxMobile && (
                <div style={{display: "flex", position: "absolute", justifyContent: "center", alignItems: "center", height: "100%", width: "100%"}}>
                    <div style={{ color: "red", fontWeight: "bold", fontSize: "1.2rem", textAlign: "center" }}>
                        The AI chat is currently not supported in Firefox. Please use Chrome or Edge instead.
                    </div>
                </div>
            )}

            <iframe
                src="https://app.thinkstack.ai/bot/index.html?chatbot_id=693307a354cc835c79daae79&type=inline"
                style={{ paddingTop: '55px', border: 'none', height: 'calc(100vh - 20px)', width: '100%', minHeight: '500px' }}>
            </iframe>
        </>
    )
}

export default Help;
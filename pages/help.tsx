import { NextPage } from "next"
import BackToHomeNavigationSection from "../components/BackToHomeNavigationSection";
import { useTranslationUnescaped } from "../lib/utils";

const Help: NextPage = () =>
{
    const { t } = useTranslationUnescaped()

    return (
        <>
            <BackToHomeNavigationSection title={`Melody Mania - Help`} />

            <iframe
                src="https://app.thinkstack.ai/bot/index.html?chatbot_id=693307a354cc835c79daae79&type=inline"
                style={{ paddingTop: '55px', border: 'none', height: 'calc(100vh - 20px)', width: '100%', minHeight: '500px' }}>
            </iframe>
        </>
    )
}

export default Help;
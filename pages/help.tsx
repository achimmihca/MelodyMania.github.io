import { NextPage } from "next"
import BackToHomeNavigationSection from "../components/BackToHomeNavigationSection";
import { useTranslationUnescaped } from "../lib/utils";

const Help: NextPage = () =>
{
    const { t } = useTranslationUnescaped()

    return (
        <>
            <BackToHomeNavigationSection title={`Melody Mania - Help`} />

            {/* The AI Chat is included on every page, so also on this page */}

        </>
    )
}

export default Help;
import type { NextPage } from 'next'
import NavigationSection from '../../components/NavigationSection'
import IntroSection from '../../components/IntroSection'
import CommunityCreatedSongsSection from '../../components/CommunityCreatedSongsSection'
import FeatureOverviewSection from '../../components/FeatureOverviewSection'
import SongEditorSection from '../../components/SongEditorSection'
import PlannedFeaturesSection from '../../components/PlannedFeaturesSection'
import DownloadCallToActionSection from '../../components/DownloadCallToActionSection'
import EasyToUseSection from '../../components/EasyToUseSection'
import FooterSection from '../../components/FooterSection'
import CrossPlatformSection from '../../components/CrossPlatformSection'
import OpenSourceSection from '../../components/OpenSourceSection'
import NewsletterSection from '../../components/NewsletterSection'
import CookieBanner from '../../components/CookieBanner'

// Load translations (see https://github.com/i18next/next-language-detector/tree/main/examples/basic)
import { makeStaticProps } from '../../lib/getStatic'
import { getStaticPaths } from '../../lib/getStatic'
import Image from "next/legacy/image"
import ComingSoonSection from '../../components/ComingSoonSection'
import FeatureCardsSection from '../../components/FeatureCardsSection'
import CompanionAppSection from '../../components/CompanionAppSection'
const getStaticProps = makeStaticProps(['common'])
export { getStaticPaths, getStaticProps }

// Main page
const Home: NextPage = () =>
{
    return (

        <>
            <NavigationSection />
            <IntroSection />
            <FeatureOverviewSection />
            <CompanionAppSection />
            <FeatureCardsSection />
            <CommunityCreatedSongsSection />
            <EasyToUseSection />
            <SongEditorSection />
            {/* <CrossPlatformSection /> */}
            <OpenSourceSection />
            {/* <PlannedFeaturesSection /> */}
            <NewsletterSection />
            {/* <DownloadCallToActionSection /> */}
            <FooterSection />
            <CookieBanner />
        </>

    )
}

export default Home
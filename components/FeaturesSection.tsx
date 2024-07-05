import { useTranslationUnescaped } from "../lib/utils"
import { T } from "./T"
import Video from "./Video"
import WaveBackground from "./WaveBackground"
import YouTubeVideo from "./YouTubeVideo"

const FeatureItem = (props: {icon: string, title: string, children?: React.ReactNode}) => (
    <div className="col-md-6 col-lg-4">
        <div className="text-center mb-3">
            <i className={`${props.icon} icon-feature text-gradient d-block`}></i>
            <h3 className="font-alt">{props.title}</h3>
            <p className="text-muted mb-0">{props.children}</p>
        </div>
    </div>
)

const featureList = [
    "featuresSection_featureList_pitchDetection",
    "featuresSection_featureList_customSongs",
    "featuresSection_featureList_embeddedBrowser",
    "featuresSection_featureList_companionApp",
    "featuresSection_featureList_scoreMode",
    // "featuresSection_featureList_duetSongs",

    "featuresSection_featureList_teamAndTournament",
    "featuresSection_featureList_songQueueAndMedleys",
    "featuresSection_featureList_playlists",
    "featuresSection_featureList_vocalsSeparation",
    "featuresSection_featureList_deviceSupport",
]

const featureCards = [
    // Game features
    { icon: "bi-people", title: "featuresSection_featureCard_solosDuetsGroups" },
    { icon: "bi-person-hearts", title: "featuresSection_featureCard_audience" },
    { icon: "bi-link-45deg", title: "featuresSection_featureCard_scoreMode" },
    { icon: "bi-trophy", title: "featuresSection_featureCard_teamAndTournament" },
    { icon: "bi-fire", title: "featuresSection_featureCard_gameModifiers" },
    { icon: "bi-stack", title: "featuresSection_featureCard_songQueueAndMedleys" },
    { icon: "bi-cloud-check", title: "featuresSection_featureCard_onlineMultiplayer" },

    // Technical features
    { icon: "bi-youtube", title: "featuresSection_featureCard_embeddedBrowser" },
    { icon: "bi-phone", title: "featuresSection_featureCard_companionApp" },
    { icon: "bi-mic", title: "featuresSection_featureCard_mics" },
    { icon: "bi-volume-up", title: "featuresSection_featureCard_micPlayback" },
    { icon: "bi-collection-play", title: "featuresSection_featureCard_openSongFormat" },
    { icon: "bi-code-slash", title: "featuresSection_featureCard_modding" },
    { icon: "bi-camera", title: "featuresSection_featureCard_webcam" },
    { icon: "bi-circle-square", title: "featuresSection_featureCard_vocalsSeparation" },
    { icon: "bi-music-note-list", title: "featuresSection_featureCard_playlistsAndFavorites" },
    { icon: "bi-file-earmark-person", title: "featuresSection_featureCard_playerAndMicProfiles" },
    { icon: "bi-search", title: "featuresSection_featureCard_searchAndFind" },
    { icon: "bi-tools", title: "featuresSection_featureCard_songEditor" },
    { icon: "bi-chat-dots", title: "featuresSection_featureCard_speechRecognition" },
    { icon: "bi-brush", title: "featuresSection_featureCard_themes" },
    { icon: "bi-controller", title: "featuresSection_featureCard_controllerSupport" },
];

const FeaturesSection = () =>
{
    const { t } = useTranslationUnescaped()

    return <>
    <section id="features" className="stage-and-audience-background text-white pt-5">
        <div className="container">
            <div className="row">
                {/* Feature overview */}
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <h1 className="display-5 font-alt"><T i18nKey="featuresSection_featureList_title"/></h1>
                    </div>
                </div>
                <div className="row md-justify-content-center lead">
                    <div className="col-auto">
                        <ul className="item-symbol-mic">
                            {
                                featureList.slice(0, featureList.length / 2).map(feature =>
                                    <li><T i18nKey={ feature } /></li>
                                )
                            }
                        </ul>
                    </div>
                    <div className="col-auto">
                        <ul className="item-symbol-mic">
                        {
                            featureList.slice(featureList.length / 2, featureList.length).map(feature =>
                                <li><T i18nKey={ feature } /></li>
                            )
                        }
                        </ul>
                    </div>
                </div>
    
                {/* Game trailer  */}
                <div className="row my-5 justify-content-center">
                    <div className="col-md-6">
                        <Video src="/videos/trailer.webm" />
                    </div>
                </div>
    
                {/* Imagine fun time */}
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <h1 className="display-5 font-alt"><T i18nKey="featuresSection_imagineList_title" /></h1>
                    </div>
                </div>
                <div className="row justify-content-center lead">
                    <div className="col-auto">
                        <ul className="item-symbol-mic">
                            <li><T i18nKey="featuresSection_imagineList_1" /></li>
                            <li><T i18nKey="featuresSection_imagineList_2" /></li>
                            <li><T i18nKey="featuresSection_imagineList_3" /></li>
                            <li><T i18nKey="featuresSection_imagineList_4" /></li>
                            <li><T i18nKey="featuresSection_imagineList_5" /></li>
                            <li><T i18nKey="featuresSection_imagineList_embeddedBrowser" /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <WaveBackground flipX={false} flipY={true} colorFrom="#151515" colorTo="#151515" />
    
    <section>
        <div className="container">
            <div className="row align-items-center">
                <div className="container-fluid">
                    <div className="row">
                        {
                            featureCards.map(featureCard => 
                                <FeatureItem icon={featureCard.icon} title={ t(featureCard.title) }>
                                    <T i18nKey={ `${featureCard.title}_detail` } />
                                </FeatureItem>) 
                        }
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    </>
}

export default FeaturesSection
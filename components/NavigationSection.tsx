import LanguageSwitcher from './LanguageSwitcher';
import RedirectLink from './RedirectLink'
import { T } from './T';

const NavigationSection = () =>
{
    return <>
    <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm" id="mainNav">
        <div className="container px-5">
            <a id="navbar-title" className="navbar-brand fw-bold" href="#page-top">Melody&nbsp;Mania</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i className="bi-list"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ms-auto me-4 my-3 my-lg-0">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle cursor-pointer" data-bs-toggle="dropdown"><T i18nKey="navigationSection_features" /></a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#overview"><T i18nKey="navigationSection_features_overview" /></a></li>
                            <li><a className="dropdown-item" href="#companion-app"><T i18nKey="navigationSection_features_companionApp" /></a></li>
                            <li><a className="dropdown-item" href="#community-created-songs"><T i18nKey="navigationSection_features_community" /></a></li>
                            <li><a className="dropdown-item" href="#features"><T i18nKey="navigationSection_features_featureList" /></a></li>
                            <li><a className="dropdown-item" href="#song-editor"><T i18nKey="navigationSection_features_songEditor" /></a></li>
                            {/* <li><a className="dropdown-item" href="#cross-platform"><T i18nKey="navigationSection_features_crossPlatform" /></a></li> */}
                            <li><a className="dropdown-item" href="#open-source"><T i18nKey="navigationSection_features_openSource" /></a></li>
                            {/* <li><a className="dropdown-item" href="#planned-features"><T i18nKey="navigationSection_features_plannedFeatures" /></a></li> */}
                            <li><a className="dropdown-item" href="#testimonial"><T i18nKey="navigationSection_testimonial" /></a></li>
                            {/* <li><a className="dropdown-item" href="#newsletter"><T i18nKey="navigationSection_newsletter" /></a></li> */}
                        </ul>
                    </li>
                    {/* <li className="nav-item"><a className="nav-link" href="#download"><T i18nKey="navigationSection_download" /></a></li> */}
                    {/* <li className="nav-item"><a className="nav-link" href="https://github.com/UltraStar-Deluxe/Play/wiki/Frequently-Asked-Questions-(FAQ)"><T i18nKey="navigationSection_faq" /></a></li> */}
                    <li className="nav-item dropdown"><LanguageSwitcher /></li>
                    <li className="nav-item"><RedirectLink className="nav-link me-lg-3" href="https://drive.google.com/drive/folders/10bb9wX0Zx3kQ1hE11dwn61l0yOc4z-gm"><T i18nKey="navigationSection_pressKit" /></RedirectLink></li>
                </ul>
            </div>
        </div>
    </nav>
</>

}

export default NavigationSection;

////////////////////////////////////////////////////
// Open sub menu on hover
const unfoldNavItemOnHover = (element: Element) => 
{
    const doHide = (elementLink: Element | null) =>
    {
        if (!elementLink)
        {
            return;
        }

        let nextElement = elementLink.nextElementSibling;
        elementLink.classList.remove('show');
        if (nextElement)
        {
            nextElement.classList.remove('show');
        }
    }

    const doShow = (elementLink: Element | null) =>
    {
        if (!elementLink)
        {
            return;
        }

        let nextElement = elementLink.nextElementSibling;
        elementLink.classList.add('show');
        if (nextElement)
        {
            nextElement.classList.add('show');
        }
    }

    element.addEventListener('mouseover', function (this: Element, e)
    {
        let elementLink = this.querySelector('a[data-bs-toggle]');
        doShow(elementLink);
    });

    element.addEventListener('mouseleave', function (this: Element, e: Event)
    {
        let elementLink = this.querySelector('a[data-bs-toggle]');
        doHide(elementLink);
    })

    element.addEventListener('click', function (this: Element, e)
    {
        let elementLink = this.querySelector('a[data-bs-toggle]');
        doHide(elementLink);
    });
}

if (typeof document !== "undefined" && document)
{
    document.addEventListener("DOMContentLoaded", () =>
    {
        if (window.innerWidth <= 992)
        {
            return;
        }

        document.querySelectorAll('.navbar .nav-item')
            .forEach((element) => unfoldNavItemOnHover(element));
    })
}

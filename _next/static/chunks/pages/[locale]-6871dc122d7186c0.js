(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[513],{3124:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[locale]",function(){return t(9680)}])},7324:function(e,s,t){"use strict";var i=t(5893),n=t(1188),a=t(8716),l=t(1744);s.Z=()=>(0,i.jsx)("footer",{className:"bg-black text-center py-4",children:(0,i.jsxs)("div",{className:"row mx-5 fw-bold text-muted fs-4",children:[(0,i.jsx)("div",{className:"col font-alt",children:(0,i.jsx)(n.Z,{className:"mx-3",href:"/",children:"Melody\xa0Mania"})}),(0,i.jsx)("div",{className:"col",children:(0,i.jsx)(n.Z,{className:"mx-3",href:"/PrivacyPolicy",children:(0,i.jsx)(l.T,{i18nKey:"page_privacyPolicy"})})}),(0,i.jsx)("div",{className:"col",children:(0,i.jsx)(n.Z,{className:"mx-3",href:"/LegalNotice",children:(0,i.jsx)(l.T,{i18nKey:"page_legalNotice"})})}),(0,i.jsx)("div",{className:"col",children:(0,i.jsx)(a.Z,{})})]})})},1188:function(e,s,t){"use strict";var i=t(5893);t(7294);var n=t(1664),a=t.n(n),l=t(1163);s.Z=e=>{let{children:s,skipLocaleHandling:t,...n}=e,c=(0,l.useRouter)(),r=n.locale||c.query.locale||"",o=n.href||c.asPath;return 0===o.indexOf("http")&&(t=!0),r&&!t&&(o=o?"/".concat(r).concat(o):c.pathname.replace("[locale]",r)),(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(a(),{...n,href:o,children:s})})}},8716:function(e,s,t){"use strict";var i=t(5893);s.Z=()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("a",{href:"https://discord.gg/PAUJFKCGbb",className:"mx-2",children:(0,i.jsx)("i",{className:"bi bi-discord","aria-hidden":"true"})}),(0,i.jsx)("a",{href:"https://www.youtube.com/@melodymaniaofficial",className:"mx-2",children:(0,i.jsx)("i",{className:"bi bi-youtube","aria-hidden":"true"})})]})},1744:function(e,s,t){"use strict";t.d(s,{T:function(){return a}});var i=t(5893),n=t(5055);let a=e=>(0,i.jsx)(n.cC,{i18nKey:e.i18nKey,components:{gradient:(0,i.jsx)("span",{className:"text-gradient bold"}),emphasize:(0,i.jsx)("span",{className:"emphasize"}),a:(0,i.jsx)("a",{})},transKeepBasicHtmlNodesFor:["i","b","u","del","br","p"],shouldUnescape:!0,values:e.values})},946:function(e,s,t){"use strict";var i=t(1255),n=t(3120),a=t.n(n);s.Z=(0,i.Z)({supportedLngs:a().i18n.locales,fallbackLng:a().i18n.defaultLocale})},4492:function(e,s,t){"use strict";t.d(s,{is:function(){return l},rE:function(){return a}});var i=t(5055);let n=(e,s)=>{if("undefined"!=typeof document&&document){let t=document.getElementById(e);t?s(t):console.error("doWithElement: No element found with id "+e)}},a=(e,s)=>{n(e,e=>e.innerHTML=s)},l=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"common",{t:s}=(0,i.$G)(e);return{t:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.escapeValue=!1,s(e,t).replaceAll("<gradient>",'<span class="text-gradient bold" />').replaceAll("</gradient>","</span>").replaceAll("<emphasize>",'<span class="emphasize" />').replaceAll("</emphasize>","</span>").replaceAll("&nbsp;"," ").replaceAll("&amp;","&").replaceAll("&lt;","<").replaceAll("&gt;",">").replaceAll("&quot;",'"').replaceAll("&apos;","'")}}}},3120:function(e){"use strict";e.exports={debug:!0,i18n:{defaultLocale:"en",locales:["en","de","es","fr","it","ja","ko","pl","pt","ru","zh"],localeExtension:"yml"},reloadOnPrerender:!0,react:{useSuspense:!1}}},9680:function(e,s,t){"use strict";t.r(s),t.d(s,{__N_SSG:function(){return en},default:function(){return ea}});var i=t(5893),n=t(1163),a=t(3120),l=t.n(a),c=t(946),r=t(1664),o=t.n(r),d=e=>{let{locale:s,...t}=e,a=(0,n.useRouter)(),l=s;if(Intl&&Intl.DisplayNames){let e=new Intl.DisplayNames(["en"],{type:"language"}),t=new Intl.DisplayNames(["en"],{type:"region"}),i=s.split("-")[0],n=s.split("-")[1];l=e.of(i),n&&(l+=" (".concat(t.of(i),")"))}let r=t.href||a.asPath,d=a.pathname;return Object.keys(a.query).forEach(e=>{if("locale"===e){d=d.replace("[".concat(e,"]"),s);return}d=d.replace("[".concat(e,"]"),a.query[e])}),s&&(r=t.href?"/".concat(s).concat(t.href):d),(0,i.jsx)("li",{children:(0,i.jsx)(o(),{className:"dropdown-item",href:r,children:(0,i.jsx)("button",{className:"btn",onClick:()=>c.Z.cache(s),children:l})})})},m=()=>{let e=(0,n.useRouter)().query.locale||l().i18n.defaultLocale;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"nav-link dropdown-toggle cursor-pointer","data-bs-toggle":"dropdown",children:(0,i.jsx)("span",{className:"bi bi-translate",children:"\xa0Language"})}),(0,i.jsx)("ul",{className:"dropdown-menu",children:l().i18n.locales.map(s=>s===e?null:(0,i.jsx)(d,{locale:s},s))})]})},x=t(1188),h=t(1744),p=()=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light fixed-top shadow-sm",id:"mainNav",children:(0,i.jsxs)("div",{className:"container px-5",children:[(0,i.jsx)("a",{id:"navbar-title",className:"navbar-brand fw-bold",href:"#page-top",children:"Melody\xa0Mania"}),(0,i.jsxs)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation",children:["Menu",(0,i.jsx)("i",{className:"bi-list"})]}),(0,i.jsx)("div",{className:"collapse navbar-collapse",id:"navbarResponsive",children:(0,i.jsxs)("ul",{className:"navbar-nav ms-auto me-4 my-3 my-lg-0",children:[(0,i.jsxs)("li",{className:"nav-item dropdown",children:[(0,i.jsx)("a",{className:"nav-link dropdown-toggle cursor-pointer","data-bs-toggle":"dropdown",children:(0,i.jsx)(h.T,{i18nKey:"navigationSection_features"})}),(0,i.jsxs)("ul",{className:"dropdown-menu",children:[(0,i.jsx)("li",{children:(0,i.jsx)("a",{className:"dropdown-item",href:"#overview",children:(0,i.jsx)(h.T,{i18nKey:"navigationSection_features_overview"})})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{className:"dropdown-item",href:"#companion-app",children:(0,i.jsx)(h.T,{i18nKey:"navigationSection_features_companionApp"})})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{className:"dropdown-item",href:"#community-created-songs",children:(0,i.jsx)(h.T,{i18nKey:"navigationSection_features_community"})})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{className:"dropdown-item",href:"#features",children:(0,i.jsx)(h.T,{i18nKey:"navigationSection_features_featureList"})})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{className:"dropdown-item",href:"#song-editor",children:(0,i.jsx)(h.T,{i18nKey:"navigationSection_features_songEditor"})})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{className:"dropdown-item",href:"#open-source",children:(0,i.jsx)(h.T,{i18nKey:"navigationSection_features_openSource"})})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{className:"dropdown-item",href:"#testimonial",children:(0,i.jsx)(h.T,{i18nKey:"navigationSection_testimonial"})})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{className:"dropdown-item",href:"#newsletter",children:(0,i.jsx)(h.T,{i18nKey:"navigationSection_newsletter"})})})]})]}),(0,i.jsx)("li",{className:"nav-item dropdown",children:(0,i.jsx)(m,{})}),(0,i.jsx)("li",{className:"nav-item",children:(0,i.jsx)(x.Z,{className:"nav-link me-lg-3",href:"https://drive.google.com/drive/folders/16iC2IsYZ-qgkYDddIVZWPsuU_dz6skMp",children:(0,i.jsx)(h.T,{i18nKey:"navigationSection_pressKit"})})})]})})]})})});let u=e=>{let s=e=>{if(!e)return;let s=e.nextElementSibling;e.classList.remove("show"),s&&s.classList.remove("show")},t=e=>{if(!e)return;let s=e.nextElementSibling;e.classList.add("show"),s&&s.classList.add("show")};e.addEventListener("mouseover",function(e){t(this.querySelector("a[data-bs-toggle]"))}),e.addEventListener("mouseleave",function(e){s(this.querySelector("a[data-bs-toggle]"))}),e.addEventListener("click",function(e){s(this.querySelector("a[data-bs-toggle]"))})};"undefined"!=typeof document&&document&&document.addEventListener("DOMContentLoaded",()=>{window.innerWidth<=992||document.querySelectorAll(".navbar .nav-item").forEach(e=>u(e))});var j=t(9755),g=t.n(j);let f=[{path:"/img/carousel/MelodyMania-MainCapsule-NoNotes.jpg",priority:!0},{path:"/img/carousel/SonicRainboom-TwoPlayers-StaticNotes-SameLyrics.jpg"},{path:"/img/carousel/OnTheRun-TwoTeams-PassTheMic-StreamingNotes.jpg"},{path:"/img/carousel/TeamResults-FinalRound.jpg"},{path:"/img/carousel/smartphone-2354577-capp-recording.png"},{path:"/img/carousel/smartphone-2354577-capp-controls.png"},{path:"/img/carousel/SongEditor.jpg"}],y=e=>(0,i.jsx)("button",{className:0===e.index?"active":"",type:"button","data-bs-target":"#image-carousel","data-bs-slide-to":e.index}),v=e=>(0,i.jsx)("div",{className:"carousel-item ".concat(0===e.index?"active":""),style:{textAlign:"center"},children:(0,i.jsx)("div",{className:"image-container",children:(0,i.jsx)(g(),{src:e.path,alt:"",layout:"fill",objectFit:"contain",priority:e.priority})})});var N=()=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"col-lg-6",children:(0,i.jsxs)("div",{id:"image-carousel",className:"carousel carousel-dark slide","data-bs-ride":"carousel",children:[(0,i.jsx)("div",{className:"carousel-inner",children:f.map(e=>(0,i.jsx)(v,{index:f.indexOf(e),path:e.path,priority:!!e.priority},f.indexOf(e)))}),(0,i.jsx)("div",{className:"carousel-indicators",children:f.map(e=>(0,i.jsx)(y,{index:f.indexOf(e)},f.indexOf(e)))}),(0,i.jsxs)("button",{className:"carousel-control-prev",type:"button","data-bs-target":"#image-carousel","data-bs-slide":"prev",children:[(0,i.jsx)("span",{className:"carousel-control-prev-icon"}),(0,i.jsx)("span",{className:"visually-hidden",children:"Previous"})]}),(0,i.jsxs)("button",{className:"carousel-control-next",type:"button","data-bs-target":"#image-carousel","data-bs-slide":"next",children:[(0,i.jsx)("span",{className:"carousel-control-next-icon"}),(0,i.jsx)("span",{className:"visually-hidden",children:"Next"})]})]})})}),b=t(5459),_=t.n(b),w=t(8716),S=t(7294),T=t(4492),k=t(5675),K=t.n(k),C=()=>{let{t:e}=(0,T.is)("common"),s=[e("introSection_typewriterText_1"),e("introSection_typewriterText_2"),e("introSection_typewriterText_3")];e("introSection_wikiName");let t=e("introSection_discordName");return e("introSection_faqName"),(0,S.useEffect)(()=>{(0,T.rE)("introSection_documentationAndHelpLinks",e("introSection_documentationAndHelpLinks",{discordLink:"<a href='https://discord.gg/PAUJFKCGbb'>".concat(t,"</a>")}))}),(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("section",{className:"",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:"row align-items-center",children:[(0,i.jsx)("div",{className:"col-lg-6",children:(0,i.jsxs)("div",{className:"mb-5 mb-lg-0 text-center text-lg-start",children:[(0,i.jsx)("h1",{className:"lh-1 my-3 font-alt",children:(0,i.jsx)(h.T,{i18nKey:"introSection_title"})}),(0,i.jsxs)("div",{className:"lead text-muted",style:{marginBottom:"1rem"},children:[(0,i.jsx)(h.T,{i18nKey:"introSection_typewriterText_prefix"}),"\xa0",(0,i.jsx)("span",{className:"emphasize",children:(0,i.jsx)(_(),{options:{autoStart:!0,loop:!0,strings:s,delay:50}})})]}),(0,i.jsx)("p",{className:"lead text-muted",children:(0,i.jsx)(h.T,{i18nKey:"introSection_p_1"})}),(0,i.jsx)("p",{className:"lead text-muted",children:(0,i.jsx)(h.T,{i18nKey:"introSection_p_2"})}),(0,i.jsx)("p",{id:"introSection_documentationAndHelpLinks",className:"lead text-muted"}),(0,i.jsxs)("div",{className:"lead text-muted mb-5",children:[(0,i.jsx)(h.T,{i18nKey:"introSection_follow_prefix"}),(0,i.jsx)(w.Z,{})]}),(0,i.jsx)("div",{className:"d-flex flex-column flex-lg-row align-items-center justify-content-center",children:(0,i.jsx)("a",{className:"btn btn-lg mb-2",href:"https://store.steampowered.com/app/2394070/Melody_Mania/",rel:"noreferrer",style:{position:"relative",width:"300px",height:"80px",marginLeft:"5px",marginRight:"5px"},children:(0,i.jsx)(K(),{src:"img/buttons/Steam-DownloadButton.svg",layout:"fill",objectFit:"contain",alt:"Melody Mania on Steam button"})})}),(0,i.jsxs)("div",{className:"d-flex flex-column flex-lg-row align-items-center",children:[(0,i.jsx)("a",{className:"btn btn-lg mb-2",href:"https://play.google.com/store/apps/details?id=com.melodymania.MelodyManiaCompanion",target:"_blank",rel:"noreferrer",style:{position:"relative",width:"300px",height:"80px",marginLeft:"5px",marginRight:"5px"},children:(0,i.jsx)(K(),{src:"img/buttons/Google_Play_Store_badge_companion_app.svg",layout:"fill",objectFit:"contain",alt:"Companion App on Google Play button"})}),(0,i.jsx)("a",{className:"btn btn-lg mb-2",href:"https://apps.apple.com/us/app/melody-mania-companion/id6476068878",target:"_blank",rel:"noreferrer",style:{position:"relative",width:"300px",height:"80px",marginLeft:"5px",marginRight:"5px"},children:(0,i.jsx)(K(),{src:"img/buttons/AppleAppStore_CompanionAppBadge.svg",layout:"fill",objectFit:"contain",alt:"Companion App on App Store button"})})]})]})}),(0,i.jsx)(N,{})]})})})})},L=e=>{let s="waveBackground_gradient_".concat((0,S.useId)());return(0,i.jsx)("div",{style:{width:"100%",height:"60px",bottom:"0",transform:"rotateX(".concat(e.flipY?180:0,"deg) rotateY(").concat(e.flipX?180:0,"deg)")},children:(0,i.jsxs)("svg",{width:"100%",height:"100%",id:"svg",viewBox:"0 0 1440 281",xmlns:"http://www.w3.org/2000/svg",className:"transition duration-300 ease-in-out delay-150",preserveAspectRatio:"none",children:[(0,i.jsx)("defs",{children:(0,i.jsxs)("linearGradient",{id:s,x1:"0%",y1:"50%",x2:"100%",y2:"50%",children:[(0,i.jsx)("stop",{offset:"5%",stopColor:e.colorFrom}),(0,i.jsx)("stop",{offset:"95%",stopColor:e.colorTo})]})}),(0,i.jsx)("path",{d:"m 0,281.38666 c 0,0 0,-249.999998 0,-249.999998 C 160.26667,11.119992 320.53333,-9.1466679 489,4.3866621 657.46667,17.919992 834.13333,65.253332 994,75.386662 c 159.8667,10.13333 302.9333,-16.93333 446,-44 0,0 0,249.999998 0,249.999998 z",stroke:"none",strokeWidth:"0",fill:"url(#".concat(s,")"),className:"transition-all duration-300 ease-in-out delay-150 path-0",id:"path9"})]})})};let A=e=>(0,i.jsxs)("div",{className:"col col-md-4 d-flex flex-column justify-content-between align-items-center pb-5",children:[(0,i.jsx)("div",{className:"fs-3 text-white font-alt",children:e.title}),(0,i.jsx)("div",{className:"image-container circle-image-cropped",style:{position:"relative"},children:(0,i.jsx)(g(),{src:e.image,alt:"",layout:"fill"})})]});var F=()=>{let{t:e}=(0,T.is)("common");return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{id:"community-created-songs"}),(0,i.jsx)(L,{colorFrom:"#0f0163",colorTo:"#0f0163"}),(0,i.jsxs)("section",{className:"text-center py-0",style:{background:"linear-gradient(0deg, #380a74, #0f0163)"},children:[(0,i.jsx)("div",{className:"container px-md-5",children:(0,i.jsx)("div",{className:"row justify-content-center",children:(0,i.jsxs)("div",{className:"col-xl-8",children:[(0,i.jsx)("h1",{className:"display-3 text-white font-alt",children:(0,i.jsx)(h.T,{i18nKey:"communityCreatedSongs_title"})}),(0,i.jsx)("h3",{className:"text-white font-alt",children:(0,i.jsx)(h.T,{i18nKey:"communityCreatedSongs_subtitle"})})]})})}),(0,i.jsxs)("div",{className:"container px-md-5",children:[(0,i.jsx)("hr",{className:"bg-light"}),(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)(A,{title:e("communityCreatedSongs_currentTopHits"),image:"/img/vinyl-2202325.png"}),(0,i.jsx)(A,{title:e("communityCreatedSongs_filmAndTV"),image:"/img/animals-44569.svg"}),(0,i.jsx)(A,{title:e("communityCreatedSongs_games"),image:"/img/controller-1784573.svg"}),(0,i.jsx)(A,{title:e("communityCreatedSongs_vocaloid"),image:"/img/sing-570519.png"}),(0,i.jsx)(A,{title:e("communityCreatedSongs_event"),image:"/img/halloween-6784081.jpg"}),(0,i.jsx)(A,{title:e("communityCreatedSongs_regional"),image:"/img/singer-250933_1920-cut.jpg"})]}),(0,i.jsx)("hr",{className:"bg-light"})]}),(0,i.jsx)("div",{className:"container px-md-5",children:(0,i.jsx)("div",{className:"row justify-content-center",children:(0,i.jsx)("div",{className:"col-xl-8",children:(0,i.jsx)("div",{className:"fs-3 text-white font-alt",children:(0,i.jsx)(h.T,{i18nKey:"communityCreatedSongs_footer"})})})})})]}),(0,i.jsx)(L,{flipY:!0,colorFrom:"#380a74",colorTo:"#380a74"})]})},E=e=>(0,i.jsxs)("video",{controls:!0,children:[(0,i.jsx)("source",{src:e.src,type:"video/webm"}),"Your browser does not support the video tag."]});let M=["featuresSection_featureList_pitchDetection","featuresSection_featureList_customSongs","featuresSection_featureList_embeddedBrowser","featuresSection_featureList_companionApp","featuresSection_featureList_scoreMode","featuresSection_featureList_teamAndTournament","featuresSection_featureList_songQueueAndMedleys","featuresSection_featureList_playlists","featuresSection_featureList_vocalsSeparation","featuresSection_featureList_deviceSupport"];var P=()=>{let{t:e}=(0,T.is)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("section",{id:"overview",className:"stage-and-audience-background text-white pt-5",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"row justify-content-center",children:(0,i.jsx)("div",{className:"col-auto",children:(0,i.jsx)("h1",{className:"display-5 font-alt",children:(0,i.jsx)(h.T,{i18nKey:"featuresSection_featureList_title"})})})}),(0,i.jsxs)("div",{className:"row md-justify-content-center lead",children:[(0,i.jsx)("div",{className:"col-auto",children:(0,i.jsx)("ul",{className:"item-symbol-mic",children:M.slice(0,M.length/2).map(e=>(0,i.jsx)("li",{children:(0,i.jsx)(h.T,{i18nKey:e})}))})}),(0,i.jsx)("div",{className:"col-auto",children:(0,i.jsx)("ul",{className:"item-symbol-mic",children:M.slice(M.length/2,M.length).map(e=>(0,i.jsx)("li",{children:(0,i.jsx)(h.T,{i18nKey:e})}))})})]}),(0,i.jsx)("div",{className:"row my-5 justify-content-center",children:(0,i.jsx)("div",{className:"col-md-6",children:(0,i.jsx)(E,{src:"/videos/trailer-720p.mp4"})})}),(0,i.jsx)("div",{className:"row justify-content-center",children:(0,i.jsx)("div",{className:"col-auto",children:(0,i.jsx)("h1",{className:"display-5 font-alt",children:(0,i.jsx)(h.T,{i18nKey:"featuresSection_imagineList_title"})})})}),(0,i.jsx)("div",{className:"row justify-content-center lead",children:(0,i.jsx)("div",{className:"col-auto",children:(0,i.jsxs)("ul",{className:"item-symbol-mic",children:[(0,i.jsx)("li",{children:(0,i.jsx)(h.T,{i18nKey:"featuresSection_imagineList_1"})}),(0,i.jsx)("li",{children:(0,i.jsx)(h.T,{i18nKey:"featuresSection_imagineList_2"})}),(0,i.jsx)("li",{children:(0,i.jsx)(h.T,{i18nKey:"featuresSection_imagineList_3"})}),(0,i.jsx)("li",{children:(0,i.jsx)(h.T,{i18nKey:"featuresSection_imagineList_4"})}),(0,i.jsx)("li",{children:(0,i.jsx)(h.T,{i18nKey:"featuresSection_imagineList_5"})}),(0,i.jsx)("li",{children:(0,i.jsx)(h.T,{i18nKey:"featuresSection_imagineList_embeddedBrowser"})})]})})})]})})}),(0,i.jsx)(L,{flipX:!1,flipY:!0,colorFrom:"#151515",colorTo:"#151515"})]})},B=()=>{let{t:e}=(0,T.is)("common"),s=e("songEditorSection_furtherDocumentation_video"),t=e("songEditorSection_furtherDocumentation_documentation");return(0,S.useEffect)(()=>{(0,T.rE)("songEditorSection_furtherDocumentation",e("songEditorSection_furtherDocumentation",{videoLink:"<a href='/learn/song-editor'>".concat(s,"</a>"),documentationLink:"<a href='/learn/song-editor'>".concat(t,"</a>")}))}),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(L,{colorFrom:"#f6f7f8",colorTo:"#f6f7f8"}),(0,i.jsx)("section",{id:"song-editor",className:"bg-light",children:(0,i.jsxs)("div",{className:"container px-5",style:{marginTop:"-80px"},children:[(0,i.jsxs)("div",{className:"row align-items-center justify-content-center justify-content-lg-between",children:[(0,i.jsx)("div",{className:"col-0 col-lg-1"}),(0,i.jsx)("div",{className:"col-12 col-md-3 align-self-stretch",children:(0,i.jsx)("div",{className:"image-container",style:{width:"100%",height:"100%",borderRadius:"200px",overflow:"hidden"},children:(0,i.jsx)(g(),{src:"/img/musician-664432.jpg",alt:"musician",layout:"fill",objectFit:"cover"})})}),(0,i.jsx)("div",{className:"col col-lg-8",children:(0,i.jsx)("div",{className:"display-3 font-alt",children:(0,i.jsx)(h.T,{i18nKey:"songEditorSection_title"})})})]}),(0,i.jsxs)("div",{className:"row align-items-center justify-content-center justify-content-lg-between",children:[(0,i.jsxs)("div",{className:"col-12 col-lg-8",children:[(0,i.jsx)("h2",{className:"display-4 mb-4 font-alt",children:(0,i.jsx)(h.T,{i18nKey:"songEditorSection_subtitle"})}),(0,i.jsx)("p",{children:(0,i.jsx)(h.T,{i18nKey:"songEditorSection_p_1"})}),(0,i.jsx)("p",{children:(0,i.jsx)(h.T,{i18nKey:"songEditorSection_p_2"})}),(0,i.jsx)("div",{className:"row",children:(0,i.jsxs)("div",{className:"col-auto",children:[(0,i.jsx)("p",{children:(0,i.jsx)(h.T,{i18nKey:"songEditorSection_afterFeatureList"})}),(0,i.jsx)("p",{id:"songEditorSection_furtherDocumentation"})]})})]}),(0,i.jsx)("div",{className:"col-0 col-lg-4 align-self-stretch",children:(0,i.jsx)("div",{className:"image-container",style:{width:"100%",height:"100%",borderRadius:"200px",overflow:"hidden"},children:(0,i.jsx)(g(),{src:"img/female-1299085.svg",alt:"woman singing",layout:"fill"})})})]})]})})]})},R=()=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("section",{className:"pt-3",children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)("div",{className:"row justify-content-center",children:(0,i.jsx)("div",{className:"col-auto",children:(0,i.jsx)("h1",{children:(0,i.jsx)(h.T,{i18nKey:"easyToUseSection_title"})})})}),(0,i.jsx)("div",{className:"row justify-content-center lead text-muted",children:(0,i.jsxs)("div",{className:"col-12 col-md-8",children:[(0,i.jsx)("p",{children:(0,i.jsx)(h.T,{i18nKey:"easyToUseSection_p_beforeList"})}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)(h.T,{i18nKey:"easyToUseSection_list_1"})}),(0,i.jsx)("li",{children:(0,i.jsx)(h.T,{i18nKey:"easyToUseSection_list_2"})}),(0,i.jsx)("li",{children:(0,i.jsx)(h.T,{i18nKey:"easyToUseSection_list_3"})})]}),(0,i.jsx)("p",{children:(0,i.jsx)(h.T,{i18nKey:"easyToUseSection_p_afterList"})})]})})]})})}),D=t(7324),O=()=>{let{t:e}=(0,T.is)();return(0,S.useEffect)(()=>{(0,T.rE)("openSourceSection_p_getInvolved",e("openSourceSection_p_getInvolved",{githubLink:'<a href="https://github.com/UltraStar-Deluxe/Play#how-to-contribute">GitHub</a>'}))}),(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("section",{id:"open-source",children:(0,i.jsxs)("div",{className:"container px-md-5",children:[(0,i.jsx)("div",{className:"row justify-content-center",children:(0,i.jsx)("div",{className:"col-xl-8 text-center",children:(0,i.jsxs)("h1",{className:"font-alt",children:[(0,i.jsx)("span",{className:"bi bi-gear-fill"}),"\xa0",(0,i.jsx)(h.T,{i18nKey:"openSourceSection_title"}),"\xa0",(0,i.jsx)("span",{className:"bi bi-suit-heart-fill"})]})})}),(0,i.jsx)("div",{className:"row justify-content-center",children:(0,i.jsxs)("div",{className:"col-12 col-md-8",children:[(0,i.jsx)("hr",{className:"bg-light"}),(0,i.jsx)("p",{id:"openSourceSection_p_getInvolved"}),(0,i.jsx)("h2",{className:"font-alt text-center",children:(0,i.jsx)(h.T,{i18nKey:"openSourceSection_whyOpenSource_title"})}),(0,i.jsx)("p",{children:(0,i.jsx)(h.T,{i18nKey:"openSourceSection_whyOpenSource_p_1"})}),(0,i.jsx)("p",{children:(0,i.jsx)(h.T,{i18nKey:"openSourceSection_whyOpenSource_p_2"})}),(0,i.jsx)("h2",{className:"font-alt text-center",children:(0,i.jsx)(h.T,{i18nKey:"openSourceSection_beyondThisGame_title"})}),(0,i.jsx)("p",{children:(0,i.jsx)(h.T,{i18nKey:"openSourceSection_beyondThisGame_p_1"})})]})})]})})})},I=()=>{let{t:e}=(0,T.is)();return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("section",{id:"newsletter",className:"py-5 bg-light -stage-and-audience-background",style:{backgroundPosition:"bottom"},children:(0,i.jsxs)("div",{className:"row mx-5 justify-content-center",children:[(0,i.jsxs)("div",{className:"col-12 col-lg-5",children:[(0,i.jsx)("h1",{className:"bold font-alt align-self-center",children:(0,i.jsx)(h.T,{i18nKey:"newsletterSection_title"})}),(0,i.jsx)("h2",{className:"align-self-center mb-3",children:(0,i.jsx)(h.T,{i18nKey:"newsletterSection_subtitle"})})]}),(0,i.jsx)("div",{className:"col-12 col-lg-5",children:(0,i.jsxs)("form",{id:"newsletterForm",action:"https://app.getresponse.com/add_subscriber.html",acceptCharset:"utf-8",method:"post",target:"_blank",children:[(0,i.jsx)("input",{className:"mb-3",type:"text",name:"email",placeholder:e("newsletterSection_email_hint"),style:{width:"100%"}}),(0,i.jsx)("br",{}),(0,i.jsx)("input",{className:"btn btn-primary bg-gradient mb-2",type:"submit",value:e("newsletterSection_submit")}),(0,i.jsx)("input",{type:"hidden",name:"campaign_token",value:"PZBDs"}),(0,i.jsx)("input",{type:"hidden",name:"start_day",value:"0"})]})}),(0,i.jsxs)("div",{className:"col-12 col-lg-5 mt-5",children:[(0,i.jsx)("div",{className:"d-flex flex-column flex-lg-row align-items-center justify-content-center",children:(0,i.jsx)("a",{className:"btn btn-lg mb-2",href:"https://store.steampowered.com/app/2394070/Melody_Mania/",rel:"noreferrer",style:{position:"relative",width:"300px",height:"80px",marginLeft:"5px",marginRight:"5px"},children:(0,i.jsx)(K(),{src:"img/buttons/Steam-DownloadButton.svg",layout:"fill",objectFit:"contain",alt:"Melody Mania on Steam button"})})}),(0,i.jsxs)("div",{className:"d-flex flex-column flex-lg-row align-items-center",children:[(0,i.jsx)("a",{className:"btn btn-lg mb-2",href:"https://play.google.com/store/apps/details?id=com.melodymania.MelodyManiaCompanion",target:"_blank",rel:"noreferrer",style:{position:"relative",width:"300px",height:"80px",marginLeft:"5px",marginRight:"5px"},children:(0,i.jsx)(K(),{src:"img/buttons/Google_Play_Store_badge_companion_app.svg",layout:"fill",objectFit:"contain",alt:"Companion App on Google Play button"})}),(0,i.jsx)("a",{className:"btn btn-lg mb-2",href:"https://apps.apple.com/us/app/melody-mania-companion/id6476068878",target:"_blank",rel:"noreferrer",style:{position:"relative",width:"300px",height:"80px",marginLeft:"5px",marginRight:"5px"},children:(0,i.jsx)(K(),{src:"img/buttons/AppleAppStore_CompanionAppBadge.svg",layout:"fill",objectFit:"contain",alt:"Companion App on App Store button"})})]})]})]})})})};function Z(e,s,t){if("undefined"==typeof document||!document)return null;let i=new Date;i.setTime(i.getTime()+864e5*t);let n="expires="+i.toUTCString();document.cookie=e+"="+s+";"+n+";path=/"}function G(e){if("undefined"==typeof document||!document)return null;let s=e+"=",t=decodeURIComponent(document.cookie).split(";");for(let e=0;e<t.length;e++){let i=t[e];for(;" "==i.charAt(0);)i=i.substring(1);if(0==i.indexOf(s))return i.substring(s.length,i.length)}return""}let q="cookie-notice",U="cookieBannerAccepted",z="cookieBannerDeclineNotNeeded",Y=()=>{let e=document.getElementById(q);e&&(e.style.display="")},H=()=>{let e=document.getElementById(q);e&&(e.style.display="none")},X=()=>{Z(z,"",-365),Z(U,JSON.stringify(new Date),365),H(),location.reload()},W=()=>{Z(U,"",-365),Z(z,JSON.stringify(new Date),365),H()};var J=()=>((0,S.useEffect)(()=>{H();let e=G(U),s=G(z);e||s||Y()}),(0,i.jsx)("div",{id:q,style:{display:"none"},className:"cookie-notice-container text-muted",children:(0,i.jsx)("div",{className:"row justify-content-center shadow-lg rounded bg-light pt-2 pb-2 m-3",children:(0,i.jsxs)("div",{className:"col col-auto",children:[(0,i.jsx)("div",{className:"mx-1 fs-5 mb-1",children:(0,i.jsx)(h.T,{i18nKey:"cookieBanner_title"})}),(0,i.jsx)("div",{className:"mx-1 fs-6 lh-sm mb-3",children:(0,i.jsx)(h.T,{i18nKey:"cookieBanner_description"})}),(0,i.jsx)("div",{onClick:X,className:"btn btn-primary bg-gradient mx-1 my-1",children:(0,i.jsx)(h.T,{i18nKey:"button_acceptAllCookies"})}),(0,i.jsx)("div",{onClick:W,className:"btn btn-primary bg-gradient mx-1 my-1",children:(0,i.jsx)(h.T,{i18nKey:"button_declineNotNeededCookies"})}),(0,i.jsx)(x.Z,{href:"/PrivacyPolicy",target:"_blank",className:"btn btn-primary mx-1 my-1",children:(0,i.jsx)(h.T,{i18nKey:"page_privacyPolicy"})})]})})}));let Q=[{icon:"bi-people",title:"featuresSection_featureCard_solosDuetsGroups"},{icon:"bi-person-hearts",title:"featuresSection_featureCard_audience"},{icon:"bi-link-45deg",title:"featuresSection_featureCard_scoreMode"},{icon:"bi-trophy",title:"featuresSection_featureCard_teamAndTournament"},{icon:"bi-fire",title:"featuresSection_featureCard_gameModifiers"},{icon:"bi-stack",title:"featuresSection_featureCard_songQueueAndMedleys"},{icon:"bi-cloud-check",title:"featuresSection_featureCard_onlineMultiplayer"},{icon:"bi-youtube",title:"featuresSection_featureCard_embeddedBrowser"},{icon:"bi-phone",title:"featuresSection_featureCard_companionApp"},{icon:"bi-mic",title:"featuresSection_featureCard_mics"},{icon:"bi-volume-up",title:"featuresSection_featureCard_micPlayback"},{icon:"bi-collection-play",title:"featuresSection_featureCard_openSongFormat"},{icon:"bi-code-slash",title:"featuresSection_featureCard_modding"},{icon:"bi-camera",title:"featuresSection_featureCard_webcam"},{icon:"bi-circle-square",title:"featuresSection_featureCard_vocalsSeparation"},{icon:"bi-music-note-list",title:"featuresSection_featureCard_playlistsAndFavorites"},{icon:"bi-file-earmark-person",title:"featuresSection_featureCard_playerAndMicProfiles"},{icon:"bi-search",title:"featuresSection_featureCard_searchAndFind"},{icon:"bi-tools",title:"featuresSection_featureCard_songEditor"},{icon:"bi-chat-dots",title:"featuresSection_featureCard_speechRecognition"},{icon:"bi-brush",title:"featuresSection_featureCard_themes"},{icon:"bi-controller",title:"featuresSection_featureCard_controllerSupport"}],V=e=>(0,i.jsx)("div",{className:"col-md-6 col-lg-4",children:(0,i.jsxs)("div",{className:"text-center mb-3",children:[(0,i.jsx)("i",{className:"".concat(e.icon," icon-feature text-gradient d-block")}),(0,i.jsx)("h3",{className:"font-alt",children:e.title}),(0,i.jsx)("p",{className:"text-muted mb-0",children:e.children})]})});var $=()=>{let{t:e}=(0,T.is)();return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("section",{id:"features",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("div",{className:"row align-items-center",children:(0,i.jsx)("div",{className:"container-fluid",children:(0,i.jsx)("div",{className:"row",children:Q.map(s=>(0,i.jsx)(V,{icon:s.icon,title:e(s.title),children:(0,i.jsx)(h.T,{i18nKey:"".concat(s.title,"_detail")})}))})})})})})})},ee=()=>{let{t:e}=(0,T.is)();return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("section",{id:"companion-app",className:"masthead",style:{backgroundColor:"#ffffff"},children:(0,i.jsx)("div",{className:"container px-5",children:(0,i.jsxs)("div",{className:"row gx-5 align-items-center",children:[(0,i.jsx)("div",{className:"col-lg-6",children:(0,i.jsxs)("div",{className:"mb-5 mb-lg-0 text-center text-lg-start",children:[(0,i.jsx)("h1",{className:"display-3 lh-1 mb-3",children:(0,i.jsx)(h.T,{i18nKey:"companionAppSection_title"})}),(0,i.jsxs)("div",{className:"text-muted",children:[(0,i.jsx)("p",{className:"lead fw-normal text-muted mb-5",children:(0,i.jsx)(h.T,{i18nKey:"companionAppSection_p"})}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)(h.T,{i18nKey:"companionAppSection_feature_microphone"})}),(0,i.jsx)("li",{children:(0,i.jsx)(h.T,{i18nKey:"companionAppSection_feature_sonqQueue"})}),(0,i.jsx)("li",{children:(0,i.jsx)(h.T,{i18nKey:"companionAppSection_feature_remoteControl"})}),(0,i.jsx)("li",{children:(0,i.jsx)(h.T,{i18nKey:"companionAppSection_feature_easySetup"})})]})]})]})}),(0,i.jsx)("div",{className:"col-lg-6",children:(0,i.jsxs)("div",{className:"masthead-device-mockup",children:[(0,i.jsxs)("svg",{className:"circle",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",transform:"scale(0.8)",children:[(0,i.jsx)("defs",{children:(0,i.jsxs)("linearGradient",{id:"circleGradient",gradientTransform:"rotate(45)",children:[(0,i.jsx)("stop",{className:"gradient-start-color",offset:"0%"}),(0,i.jsx)("stop",{className:"gradient-end-color",offset:"100%"})]})}),(0,i.jsx)("circle",{cx:"50",cy:"50",r:"50"})]}),(0,i.jsxs)("svg",{className:"shape-1 d-none d-sm-block",viewBox:"0 0 240.83 240.83",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsx)("rect",{x:"-32.54",y:"78.39",width:"305.92",height:"84.05",rx:"42.03",transform:"translate(120.42 -49.88) rotate(45)"}),(0,i.jsx)("rect",{x:"-32.54",y:"78.39",width:"305.92",height:"84.05",rx:"42.03",transform:"translate(-49.88 120.42) rotate(-45)"})]}),(0,i.jsx)("svg",{className:"shape-2 d-none d-sm-block",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("circle",{cx:"50",cy:"50",r:"50"})}),(0,i.jsx)("div",{className:"device-wrapper",style:{maxWidth:"200px"},children:(0,i.jsx)("div",{className:"device","data-device":"iPhoneX","data-orientation":"portrait","data-color":"black",children:(0,i.jsx)(g(),{src:"img/companion-app-mic.png",alt:"Companion App microphone",layout:"fill",objectFit:"contain"})})})]})})]})})})})},es=()=>{let{t:e}=(0,T.is)();return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("section",{id:"testimonial",className:"people section-padding pt-0",children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsxs)("header",{className:"text-center mb-1",children:[(0,i.jsx)("span",{className:"bi bi-chat-quote display-3"}),(0,i.jsx)("h1",{className:"mt-4 font-weight-bold",children:(0,i.jsx)(h.T,{i18nKey:"testimonialSection_title"})})]}),(0,i.jsxs)("div",{className:"row justify-content-md-center",children:[(0,i.jsx)("div",{className:"col-md-5 col-lg-4 p-0 pt-3 px-2",children:(0,i.jsxs)("div",{className:"card",children:[(0,i.jsx)("div",{className:"card-body px-5 pt-5",children:(0,i.jsx)("p",{children:"Awesome kaoroke game, ultrastar tracks work here flawlessly the only thing I wish it had was playback for some laughs but overall would strongly recommend this!"})}),(0,i.jsx)("div",{className:"card-body mx-3",children:(0,i.jsxs)("div",{className:"d-flex align-items-center",children:[(0,i.jsx)("div",{className:"bi bi-steam display-6"}),(0,i.jsxs)("div",{className:"p-2",children:[(0,i.jsx)("h4",{className:"mb-0",children:"NevSC"}),(0,i.jsx)("span",{className:"text-muted",children:"25.04.2024"})]})]})})]})}),(0,i.jsx)("div",{className:"col-md-5 col-lg-4 p-0 pt-3 px-2",children:(0,i.jsxs)("div",{className:"card",children:[(0,i.jsx)("div",{className:"card-body px-5 pt-5",children:(0,i.jsx)("p",{children:"This is a great game, I have it set up on a Steam Deck used as a console with SingStar microphones plugged in. You can find hundreds of songs online, or you can create your own."})}),(0,i.jsx)("div",{className:"card-body mx-3",children:(0,i.jsxs)("div",{className:"d-flex align-items-center mx-1",children:[(0,i.jsx)("span",{className:"bi bi-steam display-6"}),(0,i.jsxs)("div",{className:"p-2",children:[(0,i.jsx)("h4",{className:"mb-0",children:"evilcartyen"}),(0,i.jsx)("span",{className:"text-muted",children:"15.03.2024"})]})]})})]})}),(0,i.jsx)("div",{className:"col-md-5 col-lg-4 p-0 pt-3 px-2",children:(0,i.jsxs)("div",{className:"card",children:[(0,i.jsx)("div",{className:"card-body px-5 pt-5",children:(0,i.jsx)("p",{children:"Our Family and friend are having such a blast with this game and it's really more stable than all the other programs I tried. [...] Really great work and fun game."})}),(0,i.jsx)("div",{className:"card-body mx-3",children:(0,i.jsxs)("div",{className:"d-flex align-items-center mx-1",children:[(0,i.jsx)("span",{className:"bi bi-discord display-6"}),(0,i.jsxs)("div",{className:"p-2",children:[(0,i.jsx)("h4",{className:"mb-0",children:"Schninsche"}),(0,i.jsx)("span",{className:"text-muted",children:"04.11.2024"})]})]})})]})})]})]})})})},et=t(9008),ei=t.n(et),en=!0,ea=()=>{let{t:e}=(0,T.is)("common");return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(ei(),{children:[(0,i.jsx)("title",{children:e("website_title")}),(0,i.jsx)("meta",{name:"description",content:e("website_description")})]}),(0,i.jsx)(p,{}),(0,i.jsx)(C,{}),(0,i.jsx)(P,{}),(0,i.jsx)(ee,{}),(0,i.jsx)(F,{}),(0,i.jsx)($,{}),(0,i.jsx)(R,{}),(0,i.jsx)(B,{}),(0,i.jsx)(O,{}),(0,i.jsx)(es,{}),(0,i.jsx)(I,{}),(0,i.jsx)(D.Z,{}),(0,i.jsx)(J,{})]})}}},function(e){e.O(0,[424,854,888,774,179],function(){return e(e.s=3124)}),_N_E=e.O()}]);
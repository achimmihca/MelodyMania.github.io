(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[839],{2912:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[locale]/LegalNotice",function(){return n(2843)}])},3617:function(e,a,n){"use strict";var s=n(5893),l=n(1188);a.Z=e=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light fixed-top shadow-sm",id:"mainNav",style:{paddingTop:"0.5rem",paddingBottom:"0.5rem"},children:(0,s.jsxs)("div",{className:"container px-5",children:[(0,s.jsx)("a",{className:"navbar-brand fw-bold",href:"#page-top",children:e.title}),(0,s.jsxs)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation",children:["Menu",(0,s.jsx)("i",{className:"bi-list"})]}),(0,s.jsx)("div",{className:"collapse navbar-collapse",id:"navbarResponsive",children:(0,s.jsx)("ul",{className:"navbar-nav ms-auto me-4 my-3 my-lg-0",children:(0,s.jsx)("li",{className:"nav-item",children:(0,s.jsx)(l.Z,{className:"nav-link me-lg-3",href:"/",children:"Home"})})})})]})})})},7324:function(e,a,n){"use strict";var s=n(5893),l=n(1188),r=n(8716),i=n(1744);a.Z=()=>(0,s.jsx)("footer",{className:"bg-black text-center py-4",children:(0,s.jsxs)("div",{className:"row mx-5 fw-bold text-muted fs-4",children:[(0,s.jsx)("div",{className:"col font-alt",children:(0,s.jsx)(l.Z,{className:"mx-3",href:"/",children:"Melody\xa0Mania"})}),(0,s.jsx)("div",{className:"col",children:(0,s.jsx)(l.Z,{className:"mx-3",href:"/PrivacyPolicy",children:(0,s.jsx)(i.T,{i18nKey:"page_privacyPolicy"})})}),(0,s.jsx)("div",{className:"col",children:(0,s.jsx)(l.Z,{className:"mx-3",href:"/LegalNotice",children:(0,s.jsx)(i.T,{i18nKey:"page_legalNotice"})})}),(0,s.jsx)("div",{className:"col",children:(0,s.jsx)(r.Z,{})})]})})},1188:function(e,a,n){"use strict";var s=n(5893);n(7294);var l=n(1664),r=n.n(l),i=n(1163);a.Z=e=>{let{children:a,skipLocaleHandling:n,...l}=e,t=(0,i.useRouter)(),c=l.locale||t.query.locale||"",o=l.href||t.asPath;return 0===o.indexOf("http")&&(n=!0),c&&!n&&(o=o?"/".concat(c).concat(o):t.pathname.replace("[locale]",c)),(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(r(),{...l,href:o,children:a})})}},8716:function(e,a,n){"use strict";var s=n(5893);a.Z=()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("a",{href:"https://discord.gg/PAUJFKCGbb",className:"mx-2",children:(0,s.jsx)("i",{className:"bi bi-discord","aria-hidden":"true"})}),(0,s.jsx)("a",{href:"https://www.youtube.com/@melodymaniaofficial",className:"mx-2",children:(0,s.jsx)("i",{className:"bi bi-youtube","aria-hidden":"true"})})]})},1744:function(e,a,n){"use strict";n.d(a,{T:function(){return r}});var s=n(5893),l=n(5055);let r=e=>(0,s.jsx)(l.cC,{i18nKey:e.i18nKey,components:{gradient:(0,s.jsx)("span",{className:"text-gradient bold"}),emphasize:(0,s.jsx)("span",{className:"emphasize"}),a:(0,s.jsx)("a",{})},transKeepBasicHtmlNodesFor:["i","b","u","del","br","p"],shouldUnescape:!0,values:e.values})},4492:function(e,a,n){"use strict";n.d(a,{is:function(){return i},qE:function(){return t},rE:function(){return r}});var s=n(5055);let l=(e,a)=>{if("undefined"!=typeof document&&document){let n=document.getElementById(e);n?a(n):console.error("doWithElement: No element found with id "+e)}},r=(e,a)=>{l(e,e=>e.innerHTML=a)},i=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"common",{t:a}=(0,s.$G)(e);return{t:function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return n.escapeValue=!1,a(e,n).replaceAll("<gradient>",'<span class="text-gradient bold" />').replaceAll("</gradient>","</span>").replaceAll("<emphasize>",'<span class="emphasize" />').replaceAll("</emphasize>","</span>").replaceAll("&nbsp;"," ").replaceAll("&amp;","&").replaceAll("&lt;","<").replaceAll("&gt;",">").replaceAll("&quot;",'"').replaceAll("&apos;","'")}}},t=function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"common",{t:n}=i(a),s=[],l=a=>e.includes("<index>")?e.replace("<index>",a.toString()):"".concat(e,"_").concat(a),r=e=>{let a=l(e),s=n(a);return s&&s!=a},t=e=>r(e)?n(l(e)):void 0,c=r(0)?0:1;for(var o=c;r(o)&&o<100;o++){let e=t(o);if(e)s.push(e);else break}return s}},2843:function(e,a,n){"use strict";n.r(a),n.d(a,{__N_SSG:function(){return t}});var s=n(5893),l=n(3617),r=n(7324),i=n(4492),t=!0;a.default=()=>{let{t:e}=(0,i.is)();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.Z,{title:"Melody Mania - ".concat(e("page_legalNotice"))}),(0,s.jsx)("section",{className:"bg-light",children:(0,s.jsx)("div",{className:"container px-5",children:(0,s.jsx)("div",{className:"row align-items-center justify-content-center justify-content-lg-between",children:(0,s.jsxs)("div",{className:"col-12",children:[(0,s.jsx)("p",{children:"The following information (Impressum) is required under German law."}),(0,s.jsx)("h1",{children:"Impressum"}),(0,s.jsx)("h2",{children:"Angaben gem\xe4\xdf \xa7 5 TMG"}),(0,s.jsxs)("p",{children:["Andreas Achim Stange",(0,s.jsx)("br",{}),"Celler Str. 40",(0,s.jsx)("br",{}),"30161 Hannover"]}),(0,s.jsx)("h2",{children:"Kontakt"}),(0,s.jsxs)("p",{children:["Telefon: +49 1575-2873216",(0,s.jsx)("br",{}),"E-Mail: email@melodymania.org"]}),(0,s.jsx)("p",{children:"Ust-IdNr.: DE 359614789"}),(0,s.jsxs)("p",{children:["Quelle: ",(0,s.jsx)("a",{href:"https://www.e-recht24.de",children:"eRecht24"})]})]})})})}),(0,s.jsx)(r.Z,{})]})}}},function(e){e.O(0,[424,888,774,179],function(){return e(e.s=2912)}),_N_E=e.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[642],{4015:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/how-to-embedded-browser",function(){return t(2672)}])},1374:function(e,n,t){"use strict";var i=t(5893),s=t(9886);let a=e=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light fixed-top shadow-sm",id:"mainNav",style:{paddingTop:"0.5rem",paddingBottom:"0.5rem"},children:(0,i.jsxs)("div",{className:"container px-5",children:[(0,i.jsx)("a",{className:"navbar-brand fw-bold",href:"#page-top",children:e.title}),(0,i.jsxs)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation",children:["Menu",(0,i.jsx)("i",{className:"bi-list"})]}),(0,i.jsx)("div",{className:"collapse navbar-collapse",id:"navbarResponsive",children:(0,i.jsx)("ul",{className:"navbar-nav ms-auto me-4 my-3 my-lg-0",children:(0,i.jsx)("li",{className:"nav-item",children:(0,i.jsx)(s.Z,{className:"nav-link me-lg-3",href:"/",children:"Home"})})})})]})})});n.Z=a},2533:function(e,n,t){"use strict";var i=t(5893),s=t(1374);let a=e=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.Z,{title:"Melody Mania"}),(0,i.jsx)("div",{className:"mdx-content ".concat(e.additionalClasses," "),children:(0,i.jsx)("div",{className:"section",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("div",{className:"row justify-content-center",children:(0,i.jsx)("div",{className:"col-lg-6",children:e.children})})})})})]});n.Z=a},9886:function(e,n,t){"use strict";var i=t(5893);t(7294);var s=t(1664),a=t.n(s),r=t(1163);let l=e=>{let{children:n,skipLocaleHandling:t,...s}=e,l=(0,r.useRouter)(),o=s.locale||l.query.locale||"",d=s.href||l.asPath;return 0===d.indexOf("http")&&(t=!0),o&&!t&&(d=d?"/".concat(o).concat(d):l.pathname.replace("[locale]",o)),(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(a(),{...s,href:d,children:n})})};n.Z=l},2672:function(e,n,t){"use strict";t.r(n);var i=t(5893),s=t(1151),a=t(2533);let r=e=>{let{children:n}=e;return(0,i.jsx)(a.Z,{children:n})};function l(e){let n=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",code:"code"},(0,s.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{children:"Embedded Browser"}),"\n",(0,i.jsx)(n.p,{children:"Melody Mania includes a full Chromium browser to integrate third-party websites in the game."}),"\n",(0,i.jsx)(n.h2,{children:"Integrate Website in the Game"}),"\n",(0,i.jsx)(n.p,{children:"A new website can be integrated in the game by adding custom JavaScript code to the corresponding scripts folder of the game."}),"\n",(0,i.jsx)(n.h2,{children:"JavaScript Folder"}),"\n",(0,i.jsx)(n.p,{children:"The folder with JavaScript files of the game can be opened by clicking the corresponding button in the the development options of the game."}),"\n",(0,i.jsx)(n.h2,{children:"File Name"}),"\n",(0,i.jsx)(n.p,{children:"The file name of the script must be the host of the URL that is handled by the script."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Example: To handle a URL ",(0,i.jsx)(n.code,{children:"https://my-video-platform.com/?v=SomeVideoId"}),", the script should be named ",(0,i.jsx)(n.code,{children:"my-video-platform.com.js"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"After adding a script, the game will assume that the corresponding host is supported."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Example: Adding a file ",(0,i.jsx)(n.code,{children:"my-video-platform.com.js"})," will allow you to use the URL ",(0,i.jsx)(n.code,{children:"https://my-video-platform.com/?v=SomeVideoId"})," (with or without ",(0,i.jsx)(n.code,{children:"www."}),") as #MP3 tag in song files."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{children:"Synchronize Game and Website"}),"\n",(0,i.jsx)(n.p,{children:"The JavaScript code is used to get and set properties such as volume and video playback position on the loaded website."}),"\n",(0,i.jsx)(n.h2,{children:"Loading Order"}),"\n",(0,i.jsx)(n.p,{children:"The JavaScript files of the game are loaded after the website is loaded."}),"\n",(0,i.jsx)(n.h2,{children:"Show Embedded Browser"}),"\n",(0,i.jsxs)(n.p,{children:["You can show / hide the embedded browser window in the game by pressing ",(0,i.jsx)(n.code,{children:"F8"})," or ",(0,i.jsx)(n.code,{children:"Ctrl+B"}),"."]}),"\n",(0,i.jsx)(n.h2,{children:"Open URL"}),"\n",(0,i.jsx)(n.p,{children:"The game will load a URL into the embedded browser when the song file should play its audio."}),"\n",(0,i.jsx)(n.p,{children:"A script can indicate that it is able to load a new URL on the same host by itself.\r\nThe game will then delegate loading a different URL to the script instead of navigating to a new URL."}),"\n",(0,i.jsx)(n.h2,{children:"Log Messages"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"console.log"})," statements in the script are redirected to the game."]}),"\n",(0,i.jsxs)(n.p,{children:["You can see the log messages in the game by looking at the log file or by opening the in-game debug console, which opens with ",(0,i.jsx)(n.code,{children:"F7"}),"."]}),"\n",(0,i.jsx)(n.h2,{children:"Reloading Scripts"}),"\n",(0,i.jsx)(n.p,{children:"A file system watcher is monitoring the JavaScript files. If a script is changed, then the game will reload the script without requiring a restart."})]})}n.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,i.jsx)(r,Object.assign({},e,{children:(0,i.jsx)(l,e)}))}},1151:function(e,n,t){"use strict";t.d(n,{ah:function(){return a}});var i=t(7294);let s=i.createContext({});function a(e){let n=i.useContext(s);return i.useMemo(()=>"function"==typeof e?e(n):{...n,...e},[n,e])}}},function(e){e.O(0,[424,774,888,179],function(){return e(e.s=4015)}),_N_E=e.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[251],{2965:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/melody-mania-vs-ultrastar-play",function(){return s(1848)}])},1374:function(e,a,s){"use strict";var t=s(5893),n=s(9886);let r=e=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light fixed-top shadow-sm",id:"mainNav",style:{paddingTop:"0.5rem",paddingBottom:"0.5rem"},children:(0,t.jsxs)("div",{className:"container px-5",children:[(0,t.jsx)("a",{className:"navbar-brand fw-bold",href:"#page-top",children:e.title}),(0,t.jsxs)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation",children:["Menu",(0,t.jsx)("i",{className:"bi-list"})]}),(0,t.jsx)("div",{className:"collapse navbar-collapse",id:"navbarResponsive",children:(0,t.jsx)("ul",{className:"navbar-nav ms-auto me-4 my-3 my-lg-0",children:(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)(n.Z,{className:"nav-link me-lg-3",href:"/",children:"Home"})})})})]})})});a.Z=r},2533:function(e,a,s){"use strict";var t=s(5893),n=s(1374);let r=e=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.Z,{title:"Melody Mania"}),(0,t.jsx)("div",{className:"mdx-content ".concat(e.additionalClasses," "),children:(0,t.jsx)("div",{className:"section",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsx)("div",{className:"row justify-content-center",children:(0,t.jsx)("div",{className:"col-lg-6",children:e.children})})})})})]});a.Z=r},9886:function(e,a,s){"use strict";var t=s(5893);s(7294);var n=s(1664),r=s.n(n),l=s(1163);let i=e=>{let{children:a,skipLocaleHandling:s,...n}=e,i=(0,l.useRouter)(),c=n.locale||i.query.locale||"",o=n.href||i.asPath;return 0===o.indexOf("http")&&(s=!0),c&&!s&&(o=o?"/".concat(c).concat(o):i.pathname.replace("[locale]",c)),(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(r(),{...n,href:o,children:a})})};a.Z=i},1848:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return x}});var t=s(5893),n=s(1151),r=s(2533),l=s(7294),i=s(3935);let c=e=>{let a=e.productValue;return!0===a?(0,t.jsx)("td",{className:"bi bi-check"}):!1===a?(0,t.jsx)("td",{}):"full"===a?(0,t.jsx)("td",{children:(0,t.jsx)("span",{className:"bi bi-check",title:"full support"})}):"partial"===a?(0,t.jsxs)("td",{children:["(",(0,t.jsx)("span",{className:"bi bi-check",title:"partial support"}),")"]}):(0,t.jsx)("td",{className:"",children:a})},o=e=>(0,t.jsx)(t.Fragment,{children:Object.getOwnPropertyNames(e.comparisonData.products).map(a=>{let s=e.featureData[a];return(0,t.jsx)(c,{productValue:s})})}),d=()=>((0,l.useEffect)(()=>{fetch("/feature-comparison-data.json").then(e=>e.json()).then(e=>{let a=document.getElementById("feature-comparison-table");if(a){let s=document.getElementById("feature-comparison-table");s&&i.render((0,t.jsx)(h,{comparisonData:e}),s)}})},[]),(0,t.jsx)("div",{id:"feature-comparison-table"})),h=e=>e.comparisonData?(console.log("rendering comparison data "),console.log(e.comparisonData),(0,t.jsx)("div",{className:"row",children:(0,t.jsx)("div",{className:"col-lg-12",children:(0,t.jsx)("div",{className:"table-responsive",children:(0,t.jsxs)("table",{className:"table table-striped table-hover",children:[(0,t.jsx)("thead",{className:"thead-inverse",children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{className:"w-50"}),Object.getOwnPropertyNames(e.comparisonData.products).map(a=>{let s=e.comparisonData.products[a];return(0,t.jsx)("th",{className:"",children:s})})]})}),(0,t.jsx)("tbody",{children:e.comparisonData.features.map(a=>(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{className:"w-25 option",children:a.name}),(0,t.jsx)(o,{comparisonData:e.comparisonData,featureData:a})]}))})]})})})})):(0,t.jsx)(t.Fragment,{}),m=e=>{let{children:a}=e;return(0,t.jsx)(r.Z,{children:a})};function u(e){let a=Object.assign({h1:"h1",ul:"ul",li:"li",a:"a"},(0,n.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{children:"Feature Comparison"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Melody Mania is a commercial continuation of UltraStar Play that takes the game to the next level."}),"\n",(0,t.jsx)(a.li,{children:"The table below provides a non-exhaustive comparison of the games."}),"\n",(0,t.jsxs)(a.li,{children:["The song editor features of Melody Mania are demonstrated ",(0,t.jsx)(a.a,{href:"/how-to-song-editor",children:"here"})]}),"\n"]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(d,{})]})}var x=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(m,Object.assign({},e,{children:(0,t.jsx)(u,e)}))}},1151:function(e,a,s){"use strict";s.d(a,{ah:function(){return r}});var t=s(7294);let n=t.createContext({});function r(e){let a=t.useContext(n);return t.useMemo(()=>"function"==typeof e?e(a):{...a,...e},[a,e])}}},function(e){e.O(0,[424,774,888,179],function(){return e(e.s=2965)}),_N_E=e.O()}]);
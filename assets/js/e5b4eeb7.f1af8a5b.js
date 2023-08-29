"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4304],{4852:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(9231);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(r),m=i,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return r?n.createElement(f,a(a({ref:t},d),{},{components:r})):n.createElement(f,a({ref:t},d))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4765:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(9231),i=r(9841),o=r(9600),a=r(540),c=r(5497),s=r(5379);const l={cardContainer:"cardContainer_JSXX",cardTitle:"cardTitle_xarn",cardDescription:"cardDescription_p5al"};function d(e){let{href:t,children:r}=e;return n.createElement(a.Z,{href:t,className:(0,i.Z)("card padding--lg",l.cardContainer)},r)}function p(e){let{href:t,icon:r,title:o,description:a}=e;return n.createElement(d,{href:t},n.createElement("h2",{className:(0,i.Z)("text--truncate",l.cardTitle),title:o},r," ",o),a&&n.createElement("p",{className:(0,i.Z)("text--truncate",l.cardDescription),title:a},a))}function u(e){let{item:t}=e;const r=(0,o.Wl)(t);return r?n.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function m(e){let{item:t}=e;const r=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,o.xz)(t.docId??void 0);return n.createElement(p,{href:t.href,icon:r,title:t.label,description:t.description??i?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(m,{item:t});case"category":return n.createElement(u,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const r=(0,o.jA)();return n.createElement(y,{items:r.items,className:t})}function y(e){const{items:t,className:r}=e;if(!t)return n.createElement(g,e);const a=(0,o.MN)(t);return n.createElement("section",{className:(0,i.Z)("row",r)},a.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},6108:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var n=r(328),i=(r(9231),r(4852)),o=r(4765);const a={},c="Getting Started",s={unversionedId:"getting-started",id:"version-0.5.x/getting-started",title:"Getting Started",description:"Learn the basics of ComposeDB by quickly building a \u201cHello World\u201d social application.",source:"@site/versioned_docs/version-0.5.x/getting-started.mdx",sourceDirName:".",slug:"/getting-started",permalink:"/docs/0.5.x/getting-started",draft:!1,tags:[],version:"0.5.x",frontMatter:{},sidebar:"docs",previous:{title:"ComposeDB Docs",permalink:"/docs/0.5.x/introduction"},next:{title:"Set up your environment",permalink:"/docs/0.5.x/set-up-your-environment"}},l={},d=[],p={toc:d},u="wrapper";function m(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started"},"Getting Started"),(0,i.kt)("p",null,"Learn the basics of ComposeDB by quickly building a \u201cHello World\u201d social application. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Getting Started",src:r(8957).Z,width:"2348",height:"1312"})),(0,i.kt)(o.Z,{mdxType:"DocCardList"}),"## Get Started Begin here by [**setting up your development environment\u2192**](/docs/0.5.x/set-up-your-environment)")}m.isMDXComponent=!0},8957:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/getting-started-img-a4e40c1bc4b9f6144fd7b51b6bdd7500.png"}}]);
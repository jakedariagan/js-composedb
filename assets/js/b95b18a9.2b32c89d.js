"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2258],{54852:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var n=a(49231);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=p(a),u=r,f=s["".concat(c,".").concat(u)]||s[u]||m[u]||o;return a?n.createElement(f,l(l({ref:t},d),{},{components:a})):n.createElement(f,l({ref:t},d))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},87786:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(5527),r=(a(49231),a(54852));const o={id:"cli",title:"Module: CLI",custom_edit_url:null},l=void 0,i={unversionedId:"api/modules/cli",id:"version-0.2.x/api/modules/cli",title:"Module: CLI",description:"ComposeDB CLI - the Command Line Interface that enables interactions with a Ceramic Node",source:"@site/versioned_docs/version-0.2.x/api/modules/cli.md",sourceDirName:"api/modules",slug:"/api/modules/cli",permalink:"/docs/0.2.x/api/modules/cli",draft:!1,editUrl:null,tags:[],version:"0.2.x",frontMatter:{id:"cli",title:"Module: CLI",custom_edit_url:null},sidebar:"api",previous:{title:"CLI",permalink:"/docs/0.2.x/category/cli"},next:{title:"CLI: did:* commands",permalink:"/docs/0.2.x/api/commands/cli.did"}},c={},p=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Help",id:"help",level:2}],d={toc:p},s="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(s,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("meta",{name:"robots",content:"noindex"}),(0,r.kt)("meta",{name:"googlebot",content:"noindex"})),(0,r.kt)("p",null,"ComposeDB CLI - the Command Line Interface that enables interactions with a Ceramic Node"),(0,r.kt)("p",null,"You can check the ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.2.x/first-composite"},"Getting Started")," Section for some examples (remember to switch to the 'Using the CLI' tab!)"),(0,r.kt)("p",null,"You can also check documentation for particular commands to see more detailed usage explanations and links to examples"),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install @composedb/cli\n")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"The CLI exposes commands with different prefixes which make it possible to:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Command Prefix"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/0.2.x/api/commands/cli.did"},(0,r.kt)("inlineCode",{parentName:"a"},"composedb did:*"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"generate private keys and create DIDs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/0.2.x/api/commands/cli.composite"},(0,r.kt)("inlineCode",{parentName:"a"},"composedb composite:*"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"create and interact with Composites")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/0.2.x/api/commands/cli.model"},(0,r.kt)("inlineCode",{parentName:"a"},"composedb model:*"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"create and interact with Models")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/0.2.x/api/commands/cli.document"},(0,r.kt)("inlineCode",{parentName:"a"},"composedb document:*"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"create and interact with Documents")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/0.2.x/api/commands/cli.did"},(0,r.kt)("inlineCode",{parentName:"a"},"composedb graphql:*"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"generate ComposeDB GraphQl Schemas and run a local GraphQL HTTP server")))),(0,r.kt)("h2",{id:"help"},"Help"),(0,r.kt)("p",null,"To see the list of all available commands with explanations, use:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"composedb help\n")))}m.isMDXComponent=!0}}]);
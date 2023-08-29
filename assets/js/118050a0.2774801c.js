"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4442],{4852:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(9231);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||s;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[p]="string"==typeof e?e:o,i[1]=a;for(var u=2;u<s;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4874:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>u});var r=n(328),o=(n(9231),n(4852));const s={},i="Authenticate Users",a={unversionedId:"guides/composedb-client/authenticate-users",id:"guides/composedb-client/authenticate-users",title:"Authenticate Users",description:"Set up authentication for your ComposeDB application.",source:"@site/docs/guides/composedb-client/authenticate-users.mdx",sourceDirName:"guides/composedb-client",slug:"/guides/composedb-client/authenticate-users",permalink:"/docs/next/guides/composedb-client/authenticate-users",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"guides",previous:{title:"Using Relay GraphQL Client",permalink:"/docs/next/guides/composedb-client/using-relay"},next:{title:"User Sessions",permalink:"/docs/next/guides/composedb-client/user-sessions"}},c={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Get Started",id:"get-started",level:2},{value:"Enable sessions",id:"enable-sessions",level:3}],l={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"authenticate-users"},"Authenticate Users"),(0,o.kt)("p",null,"Set up authentication for your ComposeDB application."),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"in ComposeDB, authentication is needed to ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/guides/data-interactions/mutations"},"enable mutations")," on data controlled by a user\u2019s account."),(0,o.kt)("h2",{id:"get-started"},"Get Started"),(0,o.kt)("h3",{id:"enable-sessions"},"Enable sessions"),(0,o.kt)("p",null,"Enable users to create an authenticated session using their blockchain wallet."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/next/guides/composedb-client/user-sessions"},(0,o.kt)("strong",{parentName:"a"},"User Sessions \u2192"))))}d.isMDXComponent=!0}}]);
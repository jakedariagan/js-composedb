"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4665],{4852:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var o=n(9231);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||l;return n?o.createElement(f,i(i({ref:t},s),{},{components:n})):o.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[u]="string"==typeof e?e:r,i[1]=a;for(var c=2;c<l;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6969:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var o=n(5675),r=(n(9231),n(4852));const l={},i="Using Apollo GraphQL Client",a={unversionedId:"guides/composedb-client/using-apollo",id:"version-0.4.x/guides/composedb-client/using-apollo",title:"Using Apollo GraphQL Client",description:"Apollo is a popular GraphQL client for React and other platforms.",source:"@site/versioned_docs/version-0.4.x/guides/composedb-client/using-apollo.mdx",sourceDirName:"guides/composedb-client",slug:"/guides/composedb-client/using-apollo",permalink:"/docs/0.4.x/guides/composedb-client/using-apollo",draft:!1,tags:[],version:"0.4.x",frontMatter:{},sidebar:"guides",previous:{title:"JavaScript Client",permalink:"/docs/0.4.x/guides/composedb-client/javascript-client"},next:{title:"Using Relay GraphQL Client",permalink:"/docs/0.4.x/guides/composedb-client/using-relay"}},p={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Usage",id:"usage",level:2}],s={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"using-apollo-graphql-client"},"Using Apollo GraphQL Client"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.apollographql.com/docs/react/api/core/ApolloClient"},"Apollo")," is a popular GraphQL client for React and other platforms."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install the\xa0",(0,r.kt)("a",{parentName:"li",href:"/docs/0.4.x/set-up-your-environment"},(0,r.kt)("inlineCode",{parentName:"a"},"composedb"))," packages"),(0,r.kt)("li",{parentName:"ul"},"Install\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"@apollo/client")),(0,r.kt)("li",{parentName:"ul"},"A\xa0compiled composite")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"ComposeDB client can be used with the\xa0",(0,r.kt)("a",{parentName:"p",href:"https://www.apollographql.com/docs/react/api/core/ApolloClient"},"Apollo client")," by creating a custom\xa0",(0,r.kt)("a",{parentName:"p",href:"https://www.apollographql.com/docs/react/api/link/introduction"},"Apollo link"),", as shown in the example below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { ApolloClient, ApolloLink, InMemoryCache, Observable } from '@apollo/client'\nimport { ComposeClient } from '@composedb/client'\n\n// Path to compiled composite\nimport { definition } from './__generated__/definition.js'\n\nconst compose = new ComposeClient({ ceramic: 'http://localhost:7007', definition })\n\n// Create custom ApolloLink using ComposeClient instance to execute operations\nconst link = new ApolloLink((operation) => {\n  return new Observable((observer) => {\n    compose.execute(operation.query, operation.variables).then(\n      (result) => {\n        observer.next(result)\n        observer.complete()\n      },\n      (error) => {\n        observer.error(error)\n      }\n    )\n  })\n})\n\n// Use ApolloLink instance in ApolloClient config\nexport const client = new ApolloClient({ cache: new InMemoryCache(), link })\n")))}m.isMDXComponent=!0}}]);
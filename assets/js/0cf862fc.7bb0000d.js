"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7048],{54852:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var n=r(49231);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(r),m=a,h=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return r?n.createElement(h,i(i({ref:t},d),{},{components:r})):n.createElement(h,i({ref:t},d))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},86726:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(3262),a=(r(49231),r(54852));const o={},i="Data Storage",s={unversionedId:"guides/composedb-server/data-storage",id:"version-0.4.x/guides/composedb-server/data-storage",title:"Data Storage",description:"Store and remove data from your node",source:"@site/versioned_docs/version-0.4.x/guides/composedb-server/data-storage.mdx",sourceDirName:"guides/composedb-server",slug:"/guides/composedb-server/data-storage",permalink:"/docs/0.4.x/guides/composedb-server/data-storage",draft:!1,tags:[],version:"0.4.x",frontMatter:{},sidebar:"guides",previous:{title:"Access Ceramic Mainnet",permalink:"/docs/0.4.x/guides/composedb-server/access-mainnet"},next:{title:"Data Interactions",permalink:"/docs/0.4.x/guides/data-interactions/"}},c={},l=[{value:"Overview",id:"overview",level:2},{value:"Storage &amp; Removal",id:"storage--removal",level:2},{value:"Deletion",id:"deletion",level:2}],d={toc:l},p="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"data-storage"},"Data Storage"),(0,a.kt)("p",null,"Store and remove data from your node"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"In production, node operators can choose what content to store on their node by pinning and unpinning models or streams. Unpinning is not synonymous with deletion."),(0,a.kt)("h2",{id:"storage--removal"},"Storage & Removal"),(0,a.kt)("p",null,"In order to prevent the loss of streams due to garbage collection, you need to explicitly pin the streams that you wish to persist. Pinning instructs the node to keep them around in persistent storage until they are explicitly unpinned. To view the commands for pinning & unpinning, see the ",(0,a.kt)("a",{parentName:"p",href:"https://developers.ceramic.network/build/javascript/pinning/#pin-a-stream-while-creating-it"},"Ceramic docs")," here."),(0,a.kt)("h2",{id:"deletion"},"Deletion"),(0,a.kt)("p",null,"When using or participating in the Ceramic Network you should know that the data streams created have a slightly different set of operations that can be performed on them from the standard CRUD operations you may be used to in other tech stacks."),(0,a.kt)("p",null,"All data streams are globally readable.  If you know the streamID of any and all data streams that exist on the network you, and any other app in the world, can access the data values.  This is the backbone of composability.  Without this globally readable trait data created on Ceramic would not be portable from app to app."),(0,a.kt)("p",null,"There is no \u201cdelete\u201d operation on a Ceramic data stream.  By nature the blockchain is a public ledger, and as such once a Ceramic stream is anchored on-chain, it will forever exist there.  Although this data may end up becoming stale over time, it is forever preserved in the state it was last anchored.  Since we cannot mutate the blockchain, we cannot ever perform a full deletion of a Ceramic data stream.  Take this into consideration when deciding what types of data you plan to store on the Ceramic network."))}u.isMDXComponent=!0}}]);
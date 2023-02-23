"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4565],{4852:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>g});var n=o(9231);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(o),u=a,g=c["".concat(s,".").concat(u)]||c[u]||m[u]||r;return o?n.createElement(g,i(i({ref:t},p),{},{components:o})):n.createElement(g,i({ref:t},p))}));function g(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<r;d++)i[d]=o[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},6085:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=o(5675),a=(o(9231),o(4852));const r={},i="Data Modeling",l={unversionedId:"guides/data-modeling/data-modeling",id:"version-0.4.x/guides/data-modeling/data-modeling",title:"Data Modeling",description:"Learn how to model data for ComposeDB.",source:"@site/versioned_docs/version-0.4.x/guides/data-modeling/data-modeling.mdx",sourceDirName:"guides/data-modeling",slug:"/guides/data-modeling/",permalink:"/docs/0.4.x/guides/data-modeling/",draft:!1,tags:[],version:"0.4.x",frontMatter:{},sidebar:"guides",previous:{title:"Guides",permalink:"/docs/0.4.x/guides/"},next:{title:"Model Catalog",permalink:"/docs/0.4.x/guides/data-modeling/model-catalog"}},s={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Models",id:"models",level:3},{value:"Composites",id:"composites",level:3},{value:"Get Started",id:"get-started",level:2},{value:"Model catalog",id:"model-catalog",level:3},{value:"Writing models",id:"writing-models",level:3},{value:"Composites",id:"composites-1",level:3}],p={toc:d},c="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(c,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"data-modeling"},"Data Modeling"),(0,a.kt)("p",null,"Learn how to model data for ComposeDB."),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Models and composites are the core building blocks for ComposeDB applications."),(0,a.kt)("h3",{id:"models"},"Models"),(0,a.kt)("p",null,"A ",(0,a.kt)("strong",{parentName:"p"},"model")," is the GraphQL schema for a single piece of data (e.g. social post) including its relations to other models and accounts. Models are designed to be plug-and-play so they can easily be reused by developers; when multiple apps use the same model, they share the same underlying data set. To be usable in your ComposeDB app, you need to bundle one or more models into a composite."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},'# Example Model that stores a display name\n\ntype DisplayName @createModel(accountRelation: SINGLE, description: "Display name for a user") {\n  displayName: String! @string(minLength: 3, maxLength: 50)\n}\n')),(0,a.kt)("h3",{id:"composites"},"Composites"),(0,a.kt)("p",null,"A ",(0,a.kt)("strong",{parentName:"p"},"composite")," is a group of one or more models that defines the complete graph data schema for your app. Composites are used on both the ComposeDB server and the client."),(0,a.kt)("h2",{id:"get-started"},"Get Started"),(0,a.kt)("h3",{id:"model-catalog"},"Model catalog"),(0,a.kt)("p",null,"Discover reusable, plug-and-play models in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.4.x/guides/data-modeling/model-catalog"},(0,a.kt)("strong",{parentName:"a"},"Model Catalog")),". "),(0,a.kt)("h3",{id:"writing-models"},"Writing models"),(0,a.kt)("p",null,"Jump into the ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.4.x/guides/data-modeling/writing-models"},(0,a.kt)("strong",{parentName:"a"},"Writing Models"))," guides to begin writing your own models."),(0,a.kt)("h3",{id:"composites-1"},"Composites"),(0,a.kt)("p",null,"Convert your models into a ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.4.x/guides/data-modeling/composites"},(0,a.kt)("strong",{parentName:"a"},"Composites"))," for use by your application."))}m.isMDXComponent=!0}}]);
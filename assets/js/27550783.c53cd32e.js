"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[259],{4852:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var o=a(9231);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),d=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(a),u=n,h=p["".concat(l,".").concat(u)]||p[u]||m[u]||r;return a?o.createElement(h,i(i({ref:t},c),{},{components:a})):o.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var d=2;d<r;d++)i[d]=a[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5484:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var o=a(5675),n=(a(9231),a(4852));const r={},i="Models",s={unversionedId:"data-modeling-concepts",id:"version-0.4.x/data-modeling-concepts",title:"Models",description:"Data Models",source:"@site/versioned_docs/version-0.4.x/data-modeling-concepts.mdx",sourceDirName:".",slug:"/data-modeling-concepts",permalink:"/docs/0.4.x/data-modeling-concepts",draft:!1,tags:[],version:"0.4.x",frontMatter:{},sidebar:"docs",previous:{title:"Graph",permalink:"/docs/0.4.x/graph-structure"},next:{title:"Database",permalink:"/docs/0.4.x/database"}},l={},d=[{value:"Data Models",id:"data-models",level:2},{value:"Language",id:"language",level:3},{value:"Validation",id:"validation",level:3},{value:"Relations",id:"relations",level:2},{value:"Composites",id:"composites",level:2},{value:"Data Model Catalog",id:"data-model-catalog",level:2}],c={toc:d},p="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"models"},"Models"),(0,n.kt)("h2",{id:"data-models"},"Data Models"),(0,n.kt)("p",null,"Models are\xa0",(0,n.kt)("a",{parentName:"p",href:"https://developers.ceramic.network/learn/advanced/overview/#streams"},"Ceramic streams"),"\xa0storing metadata about\xa0",(0,n.kt)("a",{parentName:"p",href:"/docs/0.4.x/graph-structure#documents"},"documents"),". This metadata includes their discovery information as well as data structure/schema,\xa0validation rules, and\xa0relations. You can discover them through the ",(0,n.kt)("a",{parentName:"p",href:"/docs/0.4.x/guides/data-modeling/model-catalog"},"Model Catalog")),(0,n.kt)("h3",{id:"language"},"Language"),(0,n.kt)("p",null,"Models are written using a subset of the GraphQL Schema Definition Language ",(0,n.kt)("a",{parentName:"p",href:"/docs/0.4.x/api/sdl/scalars"},"(GraphQL SDL)"),"."),(0,n.kt)("h3",{id:"validation"},"Validation"),(0,n.kt)("p",null,"Schema validation: All\xa0",(0,n.kt)("a",{parentName:"p",href:"/docs/0.4.x/graph-structure#documents"},"documents"),"\xa0in ComposeDB must use a model, which contains information about the data structure the document must conform to. The validation is performed directly by all Ceramic nodes, allowing application to have guaranties about the documents they interact with even if they don't implement validation themselves."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Ceramic uses\xa0",(0,n.kt)("a",{parentName:"p",href:"https://json-schema.org/specification-links.html#2020-12"},"draft 2020-12 of the JSON Schema specification"),"\xa0to define the data structure and validation rules of documents.")),(0,n.kt)("h2",{id:"relations"},"Relations"),(0,n.kt)("p",null,"As in other property graphs, on ComposeDB you need a way to define which properties within a document can store relations to other documents."),(0,n.kt)("p",null,"ComposeDB uses models to define direct relations between\xa0",(0,n.kt)("a",{parentName:"p",href:"/docs/0.4.x/graph-structure#accounts"},"accounts")," and ",(0,n.kt)("a",{parentName:"p",href:"/docs/0.4.x/graph-structure#documents"},"documents")," with different constraints, as described in ",(0,n.kt)("a",{parentName:"p",href:"/docs/0.4.x/guides/data-modeling/relations"},"Writing Models"),"."),(0,n.kt)("h2",{id:"composites"},"Composites"),(0,n.kt)("p",null,"Composites are composable building blocks used by developers. They are groups of data models (e.g. profiles, blog posts, and comments) that together define the graph database schema for an application. "),(0,n.kt)("p",null,"Content streams in Ceramic have metadata that automatically associates them to a data model, which defines the shape and schema of that data, as well as to accounts and other content (e.g. User X liked a post by User Y). "),(0,n.kt)("p",null,"The ComposeDB developer tools and client library use complementary representations of composites to support various development flows such as managing data models, deploying them to Ceramic nodes and generating the runtime\xa0",(0,n.kt)("a",{parentName:"p",href:"https://graphql.org/"},"GraphQL"),"\xa0schema applications can interact with."),(0,n.kt)("h2",{id:"data-model-catalog"},"Data Model Catalog"),(0,n.kt)("p",null,"Composites and their underlying data models are designed to be reusable, making it simple to build complementary and interoperable apps. Apps that reuse each other's composites create instant interoperability, without any integrations needed. "),(0,n.kt)("p",null,"To date, developers on Ceramic have had to manually submit data models to the Registry on Github. Models are now automatically indexed, enabling easier discovery and reuse. Currently, discovering existing models in the ",(0,n.kt)("a",{parentName:"p",href:"/docs/0.4.x/guides/data-modeling/model-catalog"},"Model Catalog")," happens through commands in the ComposeDB CLI, but we\u2019ll follow closely with a UI."))}m.isMDXComponent=!0}}]);
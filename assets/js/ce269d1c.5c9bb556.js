"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4484],{54852:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var a=n(49231);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,i(i({ref:t},l),{},{components:n})):a.createElement(h,i({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},63018:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(3262),o=(n(49231),n(54852));const r={},i="Concepts overview",s={unversionedId:"guides/concepts-overview",id:"version-0.2.x/guides/concepts-overview",title:"Concepts overview",description:"ComposeDB provides a graph structure for interacting with data on the Ceramic network.",source:"@site/versioned_docs/version-0.2.x/guides/concepts-overview.md",sourceDirName:"guides",slug:"/guides/concepts-overview",permalink:"/docs/0.2.x/guides/concepts-overview",draft:!1,tags:[],version:"0.2.x",frontMatter:{},sidebar:"docs",previous:{title:"Guides",permalink:"/docs/0.2.x/guides/"},next:{title:"Data composition",permalink:"/docs/0.2.x/guides/data-composition"}},c={},p=[{value:"Nodes",id:"nodes",level:2},{value:"Accounts",id:"accounts",level:2},{value:"Documents",id:"documents",level:2},{value:"Models",id:"models",level:2},{value:"Validation",id:"validation",level:3},{value:"Relations",id:"relations",level:3},{value:"Composites",id:"composites",level:2}],l={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"concepts-overview"},"Concepts overview"),(0,o.kt)("p",null,"ComposeDB provides a ",(0,o.kt)("strong",{parentName:"p"},"graph structure")," for interacting with data on the ",(0,o.kt)("a",{parentName:"p",href:"https://ceramic.network/"},"Ceramic network"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"nodes")," in the graph can be ",(0,o.kt)("strong",{parentName:"p"},"accounts")," or ",(0,o.kt)("strong",{parentName:"p"},"documents"),", while the ",(0,o.kt)("strong",{parentName:"p"},"edges")," in the graph represent relations between ",(0,o.kt)("strong",{parentName:"p"},"nodes"),"."),(0,o.kt)("p",null,"Currently, ComposeDB only supports edges between an ",(0,o.kt)("strong",{parentName:"p"},"account")," and ",(0,o.kt)("strong",{parentName:"p"},"documents"),", but relations between ",(0,o.kt)("strong",{parentName:"p"},"accounts")," and ",(0,o.kt)("strong",{parentName:"p"},"documents")," are planned on being supported."),(0,o.kt)("h2",{id:"nodes"},"Nodes"),(0,o.kt)("p",null,"All nodes in the graph use a globally unique identifier, allowing direct access to any known node."),(0,o.kt)("p",null,"ComposeDB supports two types of nodes: ",(0,o.kt)("strong",{parentName:"p"},"accounts")," that are able to manipulate data in the graph, and ",(0,o.kt)("strong",{parentName:"p"},"documents")," containing mutable data of a given shape."),(0,o.kt)("h2",{id:"accounts"},"Accounts"),(0,o.kt)("p",null,"Ceramic uses ",(0,o.kt)("a",{parentName:"p",href:"https://w3c.github.io/did-core/"},"Decentralized Identifiers (DIDs)")," for accounts, which get translated to ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.2.x/guides/interacting/queries#ceramicaccount-object"},(0,o.kt)("inlineCode",{parentName:"a"},"CeramicAccount")," objects")," by the ComposeDB client."),(0,o.kt)("p",null,"DIDs can represent any entity that is able to write data on Ceramic and therefore in ComposeDB, which can be end-users of an application, groups, applications or any kind of authenticated service."),(0,o.kt)("p",null,"In order to write data in ComposeDB, a DID must be attached to the ComposeDB client instance, as documented in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.2.x/guides/interacting/mutations"},"mutations page"),"."),(0,o.kt)("h2",{id:"documents"},"Documents"),(0,o.kt)("p",null,"Documents in ComposeDB are ",(0,o.kt)("a",{parentName:"p",href:"https://developers.ceramic.network/learn/advanced/overview/#streams"},"Ceramic streams")," storing structured data defined by a ",(0,o.kt)("a",{parentName:"p",href:"#models"},"model"),"."),(0,o.kt)("p",null,"Ceramic nodes can be configured to index specific models, storing all the documents using a model in a local database in order to provide fast access and query capabilities."),(0,o.kt)("p",null,"Using ",(0,o.kt)("a",{parentName:"p",href:"https://graphql.org/"},"GraphQL"),", the ComposeDB client allows to query documents indexed by a Ceramic node, as well as creating new documents and updating existing ones when ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.2.x/guides/interacting/mutations"},"mutations are enabled"),"."),(0,o.kt)("h2",{id:"models"},"Models"),(0,o.kt)("p",null,"Models are ",(0,o.kt)("a",{parentName:"p",href:"https://developers.ceramic.network/learn/advanced/overview/#streams"},"Ceramic streams")," storing metadata about ",(0,o.kt)("a",{parentName:"p",href:"#documents"},"documents"),", notably their data structure, ",(0,o.kt)("a",{parentName:"p",href:"#validation"},"validation rules")," and ",(0,o.kt)("a",{parentName:"p",href:"#relations"},"relations"),", as well as ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.2.x/guides/using-composites/discovery"},"discovery information"),"."),(0,o.kt)("p",null,"ComposeDB tools abstract the creation of models using GraphQL's Schema Definition Language, as described in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.2.x/guides/creating-composites/schema"},"dedicated documentation page"),"."),(0,o.kt)("h3",{id:"validation"},"Validation"),(0,o.kt)("p",null,"All ",(0,o.kt)("a",{parentName:"p",href:"#documents"},"documents")," in ComposeDB must use a model, which contains information about the data structure the document must conform to. The validation is performed directly by all Ceramic nodes, allowing application to have guaranties about the documents they interact with even if they don't implement validation themselves."),(0,o.kt)("p",null,"Currently Ceramic uses ",(0,o.kt)("a",{parentName:"p",href:"https://json-schema.org/specification-links.html#2020-12"},"draft 2020-12 of the JSON Schema specification")," to define the data structure and validation rules of documents."),(0,o.kt)("h3",{id:"relations"},"Relations"),(0,o.kt)("p",null,"Currently, ComposeDB only supports defining relations between an account and the documents created by this account."),(0,o.kt)("p",null,"Relations between documents and between accounts are under development and will be made available in future developer previews of ComposeDB."),(0,o.kt)("h2",{id:"composites"},"Composites"),(0,o.kt)("p",null,"Composites are the primary data structures used by ComposeDB, essentially defining a mutable set of ",(0,o.kt)("a",{parentName:"p",href:"#models"},"models")," with additional metadata."),(0,o.kt)("p",null,"The ComposeDB developer tools and client library use complementary representations of composites to support various development flows such as managing data models, deploying them to Ceramic nodes and generating the runtime ",(0,o.kt)("a",{parentName:"p",href:"https://graphql.org/"},"GraphQL")," schema applications can interact with."))}u.isMDXComponent=!0}}]);
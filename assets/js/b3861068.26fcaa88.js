"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[293],{4852:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(9231);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=i,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8489:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(328),i=(n(9231),n(4852));const a={},o="Querying the graph",c={unversionedId:"guides/interacting/queries",id:"version-0.3.x/guides/interacting/queries",title:"Querying the graph",description:"The ComposeClient automatically generates a GraphQL Schema from the runtime composite definition.",source:"@site/versioned_docs/version-0.3.x/guides/interacting/queries.md",sourceDirName:"guides/interacting",slug:"/guides/interacting/queries",permalink:"/docs/0.3.x/guides/interacting/queries",draft:!1,tags:[],version:"0.3.x",frontMatter:{},sidebar:"docs",previous:{title:"Interacting with data",permalink:"/docs/0.3.x/category/interacting-with-data"},next:{title:"Performing mutations",permalink:"/docs/0.3.x/guides/interacting/mutations"}},l={},s=[{value:"CeramicAccount object",id:"ceramicaccount-object",level:2},{value:"Query object",id:"query-object",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"querying-the-graph"},"Querying the graph"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.3.x/api/classes/client.ComposeClient"},(0,i.kt)("inlineCode",{parentName:"a"},"ComposeClient"))," automatically generates a GraphQL Schema from the runtime composite definition."),(0,i.kt)("p",null,"It notablly creates a ",(0,i.kt)("a",{parentName:"p",href:"#ceramicaccount-object"},(0,i.kt)("inlineCode",{parentName:"a"},"CeramicAccount")," object")," that replaces ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.3.x/guides/creating-composites/scalars#did"},(0,i.kt)("inlineCode",{parentName:"a"},"DID")," scalar")," representations, and the root ",(0,i.kt)("a",{parentName:"p",href:"#query-object"},(0,i.kt)("inlineCode",{parentName:"a"},"Query")," object")," used as an entry-point to acces the graph."),(0,i.kt)("h2",{id:"ceramicaccount-object"},"CeramicAccount object"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"CeramicAccount")," object replaces all the ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.3.x/guides/creating-composites/scalars#did"},(0,i.kt)("inlineCode",{parentName:"a"},"DID")," scalars")," from the composite definition, using the following fields:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"id: ID!"),": the DID string value."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"isViewer: Boolean!"),": whether the account authenticated to the Ceramic instance matches the ",(0,i.kt)("inlineCode",{parentName:"li"},"id"),"."),(0,i.kt)("li",{parentName:"ul"},"Other fields will be generated based on the models present in the definition.")),(0,i.kt)("h2",{id:"query-object"},"Query object"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Query")," object provides entry-points for accessing data in the graph, using the following fields:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"node(id: ID!): Node"),": loads any ",(0,i.kt)("inlineCode",{parentName:"li"},"Node")," (account or document) by its ",(0,i.kt)("inlineCode",{parentName:"li"},"id"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"viewer: CeramicAccount"),": the account attached to the Ceramic instance, if authenticated."),(0,i.kt)("li",{parentName:"ul"},"Other fields will be generated based on the models present in the definition, providing entry-points by querying the index.")))}d.isMDXComponent=!0}}]);
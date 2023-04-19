"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7809],{4852:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var i=n(9231);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?i.createElement(f,r(r({ref:t},c),{},{components:n})):i.createElement(f,r({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,r[1]=l;for(var u=2;u<a;u++)r[u]=n[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7985:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var i=n(5675),o=(n(9231),n(4852));const a={},r="Performing mutations",l={unversionedId:"guides/interacting/mutations",id:"version-0.3.x/guides/interacting/mutations",title:"Performing mutations",description:"Enabling mutations",source:"@site/versioned_docs/version-0.3.x/guides/interacting/mutations.mdx",sourceDirName:"guides/interacting",slug:"/guides/interacting/mutations",permalink:"/docs/0.3.x/guides/interacting/mutations",draft:!1,tags:[],version:"0.3.x",frontMatter:{},sidebar:"docs",previous:{title:"Querying the graph",permalink:"/docs/0.3.x/guides/interacting/queries"},next:{title:"Using Apollo",permalink:"/docs/0.3.x/guides/interacting/using-apollo"}},s={},u=[{value:"Enabling mutations",id:"enabling-mutations",level:2},{value:"Available mutations",id:"available-mutations",level:2},{value:"Mutations options",id:"mutations-options",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"performing-mutations"},"Performing mutations"),(0,o.kt)("h2",{id:"enabling-mutations"},"Enabling mutations"),(0,o.kt)("p",null,"In order to perform mutations, the Ceramic instance used by the ComposeDB client needs to be authenticated. This can be done by calling the ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.3.x/api/classes/client.ComposeClient#setdid"},(0,o.kt)("inlineCode",{parentName:"a"},"setDID")," method")," on the ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.3.x/api/classes/client.ComposeClient"},(0,o.kt)("inlineCode",{parentName:"a"},"ComposeClient"))," instance with an authenticated ",(0,o.kt)("inlineCode",{parentName:"p"},"DID")," instance:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"compose.setDID(did)\n")),(0,o.kt)("h2",{id:"available-mutations"},"Available mutations"),(0,o.kt)("p",null,"Mutation functions are automatically generated based on the Models present in the runtime Composite definition, using the ",(0,o.kt)("inlineCode",{parentName:"p"},"create")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"update")," prefixes, all wrapped in a top-level ",(0,o.kt)("inlineCode",{parentName:"p"},"Mutation")," object."),(0,o.kt)("h2",{id:"mutations-options"},"Mutations options"),(0,o.kt)("p",null,"Update mutations can be provided an options object with the following fields:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"replace: Boolean"),": by default the update logic performs a shallow (1 level) merge of the document contents, so existing contents of the document are not removed unless explicitly changed. When setting ",(0,o.kt)("inlineCode",{parentName:"li"},"replace")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),", the document contents will be fully replaced by the contents provided in the update mutation."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"version: CommitID"),": version of the document the update should be applied on. If set, the update logic will load the latest version of the document and throw an error if it doesn't match the expected version.")))}d.isMDXComponent=!0}}]);
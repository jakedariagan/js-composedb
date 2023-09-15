"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8397],{54852:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var o=n(49231);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=o.createContext({}),m=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=m(e.components);return o.createElement(d.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),s=m(n),u=a,f=s["".concat(d,".").concat(u)]||s[u]||p[u]||r;return n?o.createElement(f,c(c({ref:t},l),{},{components:n})):o.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[s]="string"==typeof e?e:a,c[1]=i;for(var m=2;m<r;m++)c[m]=n[m];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},76149:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var o=n(3262),a=(n(49231),n(54852));const r={id:"cli.document",title:"CLI: document:* commands",custom_edit_url:null},c=void 0,i={unversionedId:"api/commands/cli.document",id:"version-0.4.x/api/commands/cli.document",title:"CLI: document:* commands",description:"The group of CLI document:* commands enables the creation and interactions with Documents",source:"@site/versioned_docs/version-0.4.x/api/commands/cli.document.md",sourceDirName:"api/commands",slug:"/api/commands/cli.document",permalink:"/docs/0.4.x/api/commands/cli.document",draft:!1,editUrl:null,tags:[],version:"0.4.x",frontMatter:{id:"cli.document",title:"CLI: document:* commands",custom_edit_url:null},sidebar:"api",previous:{title:"CLI: model:* commands",permalink:"/docs/0.4.x/api/commands/cli.model"},next:{title:"CLI: graphql:* commands",permalink:"/docs/0.4.x/api/commands/cli.graphql"}},d={},m=[{value:"Command List",id:"command-list",level:2},{value:"Usage",id:"usage",level:2},{value:"<code>composedb document:create</code>",id:"composedb-documentcreate",level:3},{value:"<code>composedb document:replace</code>",id:"composedb-documentreplace",level:3},{value:"<code>composedb document:content</code>",id:"composedb-documentcontent",level:3}],l={toc:m},s="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The group of ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.4.x/api/modules/cli"},"CLI")," ",(0,a.kt)("inlineCode",{parentName:"p"},"document:*")," commands enables the creation and interactions with ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.4.x/core-concepts#documents"},"Documents")),(0,a.kt)("h2",{id:"command-list"},"Command List"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#composedb-documentcreate"},(0,a.kt)("inlineCode",{parentName:"a"},"composedb document:create MODELSTREAMID CONTENT"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#composedb-documentreplace"},(0,a.kt)("inlineCode",{parentName:"a"},"composedb document:replace STREAMID CONTENT"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#composedb-documentcontent"},(0,a.kt)("inlineCode",{parentName:"a"},"composedb document:content STREAMID")))),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("h3",{id:"composedb-documentcreate"},(0,a.kt)("inlineCode",{parentName:"h3"},"composedb document:create")),(0,a.kt)("p",null,"Create a document with given content"),(0,a.kt)("p",null,"You can use this command to test how document creation works, but in your live app you will use ComposeDB GraphQL ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.4.x/guides/data-interactions/mutations"},"Mutations")," instead."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"USAGE\n  $ composedb document:create MODELSTREAMID CONTENT\n\nARGUMENTS\n  MODELSTREAMID            streamID of the model whose instance is being created\n  CONTENT                  contents of the model instance encoded as JSON\n\nOPTIONS\n  -c, --ceramic-url        Ceramic API URL\n  -k, --did-private-key    DID Private Key (you can generate a fresh private key using composedb did:generate-private-key)\n")),(0,a.kt)("h3",{id:"composedb-documentreplace"},(0,a.kt)("inlineCode",{parentName:"h3"},"composedb document:replace")),(0,a.kt)("p",null,"Replace content in a document with a given streamID"),(0,a.kt)("p",null,"You can use this command to test how document updates work, but in your live app you will use ComposeDB GraphQL ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.4.x/guides/data-interactions/mutations"},"Mutations"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"USAGE\n  $ composedb document:replace STREAMID CONTENT\n\nARGUMENTS\n  STREAMID                 streamID of the model instance whose content is being replaced\n  CONTENT                  new contents of the model instance encoded as JSON\n\nOPTIONS\n  -c, --ceramic-url        Ceramic API URL\n  -k, --did-private-key    DID Private Key (you can generate a fresh private key using composedb did:generate-private-key)\n")),(0,a.kt)("h3",{id:"composedb-documentcontent"},(0,a.kt)("inlineCode",{parentName:"h3"},"composedb document:content")),(0,a.kt)("p",null,"Load and display the contents of a document with a given ID"),(0,a.kt)("p",null,"You can use this command to manually check the contents of a given document, but in your DApp you will use ComposeDB GraphQL ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.4.x/guides/data-interactions/queries"},"Queries"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"USAGE\n  $ composedb document:content STREAMID\n\nARGUMENTS\n  STREAMID                 ID of the stream\n\nOPTIONS\n  -c, --ceramic-url        Ceramic API URL\n  -o, --output             Path to a file where the content should be saved\n")))}p.isMDXComponent=!0}}]);
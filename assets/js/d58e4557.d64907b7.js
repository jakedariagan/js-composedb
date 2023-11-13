"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[994],{54852:(e,t,o)=>{o.d(t,{Zo:()=>m,kt:()=>h});var n=o(49231);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function d(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var c=n.createContext({}),i=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},m=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),s=i(o),u=a,h=s["".concat(c,".").concat(u)]||s[u]||p[u]||r;return o?n.createElement(h,l(l({ref:t},m),{},{components:o})):n.createElement(h,l({ref:t},m))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,l=new Array(r);l[0]=u;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d[s]="string"==typeof e?e:a,l[1]=d;for(var i=2;i<r;i++)l[i]=o[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},22206:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>d,toc:()=>i});var n=o(5527),a=(o(49231),o(54852));const r={id:"cli.model",title:"CLI: model:* commands",custom_edit_url:null},l=void 0,d={unversionedId:"api/commands/cli.model",id:"version-0.4.x/api/commands/cli.model",title:"CLI: model:* commands",description:"The group of CLI model:* commands enables discovery of Models, as well as their creation and interactions with them.",source:"@site/versioned_docs/version-0.4.x/api/commands/cli.model.md",sourceDirName:"api/commands",slug:"/api/commands/cli.model",permalink:"/docs/0.4.x/api/commands/cli.model",draft:!1,editUrl:null,tags:[],version:"0.4.x",frontMatter:{id:"cli.model",title:"CLI: model:* commands",custom_edit_url:null},sidebar:"api",previous:{title:"CLI: composite:* commands",permalink:"/docs/0.4.x/api/commands/cli.composite"},next:{title:"CLI: document:* commands",permalink:"/docs/0.4.x/api/commands/cli.document"}},c={},i=[{value:"Command List",id:"command-list",level:2},{value:"Usage",id:"usage",level:2},{value:"<code>composedb model:list</code>",id:"composedb-modellist",level:3},{value:"<code>composedb model:content</code>",id:"composedb-modelcontent",level:3},{value:"<code>composedb model:controller</code>",id:"composedb-modelcontroller",level:3},{value:"<code>composedb model:create</code>",id:"composedb-modelcreate",level:3}],m={toc:i},s="wrapper";function p(e){let{components:t,...o}=e;return(0,a.kt)(s,(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("meta",{name:"robots",content:"noindex"}),(0,a.kt)("meta",{name:"googlebot",content:"noindex"})),(0,a.kt)("p",null,"The group of ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.4.x/api/modules/cli"},"CLI")," ",(0,a.kt)("inlineCode",{parentName:"p"},"model:*")," commands enables discovery of ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.4.x/core-concepts#models"},"Models"),", as well as their creation and interactions with them."),(0,a.kt)("h2",{id:"command-list"},"Command List"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#composedb-modellist"},(0,a.kt)("inlineCode",{parentName:"a"},"composedb model:list"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#composedb-modelcontent-streamid"},(0,a.kt)("inlineCode",{parentName:"a"},"composedb model:content STREAMID"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#composedb-modelcontroller-streamid"},(0,a.kt)("inlineCode",{parentName:"a"},"composedb model:controller STREAMID"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#composedb-modelcreate-content"},(0,a.kt)("inlineCode",{parentName:"a"},"composedb model:create CONTENT")))),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("h3",{id:"composedb-modellist"},(0,a.kt)("inlineCode",{parentName:"h3"},"composedb model:list")),(0,a.kt)("p",null,"Display a paginated list of models indexed on the connected ceramic node, which needs to be indexing model streams."),(0,a.kt)("p",null,"This currently is the main entry path to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.4.x/guides/data-modeling/model-catalog"},"Model Catalog")," "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"USAGE\n  $ composedb model:list\n\nOPTIONS\n  --table                  display results as a table rather than as formatted JSON\n  -i, --indexer-url        URL of a Ceramic API that indexes model streams.\n")),(0,a.kt)("h3",{id:"composedb-modelcontent"},(0,a.kt)("inlineCode",{parentName:"h3"},"composedb model:content")),(0,a.kt)("p",null,"Load the contents of a model stream with a given ID."),(0,a.kt)("p",null,"You should use this command to check if an existing model found through ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.4.x/guides/data-modeling/model-catalog"},"Model Catalog")," has the fields you need."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"USAGE\n  $ composedb model:content STREAMID\n\nARGUMENTS\n  STREAMID                 ID of the stream\n\nOPTIONS\n  -c, --ceramic-url        Ceramic API URL\n  -o, --output             Path to a file where the content should be saved\n")),(0,a.kt)("h3",{id:"composedb-modelcontroller"},(0,a.kt)("inlineCode",{parentName:"h3"},"composedb model:controller")),(0,a.kt)("p",null,"Load the model stream with a given ID and display its controller DID (identifier for the ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.4.x/core-concepts#accounts"},"Ceramic Account")," that owns the model)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"USAGE\n  $ composedb model:controller STREAMID\n\nARGUMENTS\n  STREAMID                 ID of the stream\n\nOPTIONS\n  -c, --ceramic-url        Ceramic API URL\n")),(0,a.kt)("h3",{id:"composedb-modelcreate"},(0,a.kt)("inlineCode",{parentName:"h3"},"composedb model:create")),(0,a.kt)("p",null,"Create a model stream with given content."),(0,a.kt)("p",null,"Most of the time you shouldn't be using this command directly. Instead, you should first check if a model you need\nalready exists, using the ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.4.x/guides/data-modeling/model-catalog"},"Model Catalog")," and only if you can't\nfind a model that you need, you should create one indirectly by ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.4.x/guides/data-modeling/composites"},"creating a Composite")," from a GraphQL Composite Schema."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"USAGE\n  $ composedb model:create CONTENT\n\nARGUMENTS\n  CONTENT                  contents of the model encoded as JSON\n\nOPTIONS\n  -c, --ceramic-url        Ceramic API URL\n  -k, --did-private-key    DID Private Key (you can generate a fresh private key using composedb did:generate-private-key)\n")))}p.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6780],{4852:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var r=a(9231);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),o=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=o(e.components);return r.createElement(d.Provider,{value:t},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},N=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,d=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=o(a),N=n,u=s["".concat(d,".").concat(N)]||s[N]||k[N]||l;return a?r.createElement(u,i(i({ref:t},m),{},{components:a})):r.createElement(u,i({ref:t},m))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=N;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p[s]="string"==typeof e?e:n,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}N.displayName="MDXCreateElement"},1455:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var r=a(644),n=(a(9231),a(4852));const l={id:"server",title:"Module: server",custom_edit_url:null},i=void 0,p={unversionedId:"api/modules/server",id:"api/modules/server",title:"Module: server",description:"ComposeDB server for hybrid execution on the ComposeDB client.",source:"@site/docs/api/modules/server.md",sourceDirName:"api/modules",slug:"/api/modules/server",permalink:"/docs/preview/api/modules/server",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"server",title:"Module: server",custom_edit_url:null},sidebar:"api",previous:{title:"Module: runtime",permalink:"/docs/preview/api/modules/runtime"},next:{title:"Class: ComposeClient",permalink:"/docs/preview/api/classes/client.ComposeClient"}},d={},o=[{value:"Installation",id:"installation",level:2},{value:"Type Aliases",id:"type-aliases",level:2},{value:"GraphQLParams",id:"graphqlparams",level:3},{value:"Type parameters",id:"type-parameters",level:4},{value:"GraphQLServer",id:"graphqlserver",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"HandlerParams",id:"handlerparams",level:3},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Type declaration",id:"type-declaration-1",level:4},{value:"Functions",id:"functions",level:2},{value:"createHandler",id:"createhandler",level:3},{value:"Type parameters",id:"type-parameters-2",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"getViewerID",id:"getviewerid",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"startGraphQLServer",id:"startgraphqlserver",level:3},{value:"Type parameters",id:"type-parameters-3",level:4},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4}],m={toc:o},s="wrapper";function k(e){let{components:t,...a}=e;return(0,n.kt)(s,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"ComposeDB server for hybrid execution on the ",(0,n.kt)("a",{parentName:"p",href:"/docs/preview/api/modules/client"},(0,n.kt)("inlineCode",{parentName:"a"},"ComposeDB client")),"."),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"npm install @composedb/server\n")),(0,n.kt)("h2",{id:"type-aliases"},"Type Aliases"),(0,n.kt)("h3",{id:"graphqlparams"},"GraphQLParams"),(0,n.kt)("p",null,"\u01ac ",(0,n.kt)("strong",{parentName:"p"},"GraphQLParams"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"ServerContext"),">",": ",(0,n.kt)("a",{parentName:"p",href:"/docs/preview/api/modules/server#handlerparams"},(0,n.kt)("inlineCode",{parentName:"a"},"HandlerParams")),"<",(0,n.kt)("inlineCode",{parentName:"p"},"ServerContext"),">"," & { ",(0,n.kt)("inlineCode",{parentName:"p"},"port?"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"number")," ","|"," ",(0,n.kt)("inlineCode",{parentName:"p"},"number"),"[]  }"),(0,n.kt)("h4",{id:"type-parameters"},"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"ServerContext")),(0,n.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,n.kt)("inlineCode",{parentName:"td"},"Record"),"<",(0,n.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"any"),">"," = ",(0,n.kt)("inlineCode",{parentName:"td"},"Record"),"<",(0,n.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"any"),">")))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"graphqlserver"},"GraphQLServer"),(0,n.kt)("p",null,"\u01ac ",(0,n.kt)("strong",{parentName:"p"},"GraphQLServer"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"Object")),(0,n.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"port")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"number"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"stop")),(0,n.kt)("td",{parentName:"tr",align:"left"},"() => ",(0,n.kt)("inlineCode",{parentName:"td"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"td"},"void"),">")))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"handlerparams"},"HandlerParams"),(0,n.kt)("p",null,"\u01ac ",(0,n.kt)("strong",{parentName:"p"},"HandlerParams"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"ServerContext"),">",": ",(0,n.kt)("inlineCode",{parentName:"p"},"Object")),(0,n.kt)("h4",{id:"type-parameters-1"},"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"ServerContext")),(0,n.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,n.kt)("inlineCode",{parentName:"td"},"Record"),"<",(0,n.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"any"),">"," = ",(0,n.kt)("inlineCode",{parentName:"td"},"Record"),"<",(0,n.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"any"),">")))),(0,n.kt)("h4",{id:"type-declaration-1"},"Type declaration"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"cache?")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"DocumentCache")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Optional cache for documents.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"ceramic")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"CeramicApi")," ","|"," ",(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Ceramic client instance or HTTP URL.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"definition?")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"RuntimeCompositeDefinition")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Runtime composite definition, created using the ",(0,n.kt)("a",{parentName:"td",href:"/docs/preview/api/classes/devtools.Composite"},(0,n.kt)("inlineCode",{parentName:"a"},"Composite"))," development tools.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"options?")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"YogaServerOptions"),"<",(0,n.kt)("inlineCode",{parentName:"td"},"ServerContext"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"Context"),">"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://the-guild.dev/graphql/yoga-server/docs"},"Yoga server")," options.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"schema?")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"GraphQLSchema")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GraphQL Schema to use, ignores the ",(0,n.kt)("inlineCode",{parentName:"td"},"definition")," parameter if provided.")))),(0,n.kt)("h2",{id:"functions"},"Functions"),(0,n.kt)("h3",{id:"createhandler"},"createHandler"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"createHandler"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"ServerContext"),">","(",(0,n.kt)("inlineCode",{parentName:"p"},"params"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"YogaServerInstance"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"ServerContext"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Context"),">"),(0,n.kt)("p",null,"Create a ",(0,n.kt)("a",{parentName:"p",href:"https://the-guild.dev/graphql/yoga-server/docs"},"Yoga server")," handling GraphQL requests."),(0,n.kt)("h4",{id:"type-parameters-2"},"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"ServerContext")),(0,n.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,n.kt)("inlineCode",{parentName:"td"},"Record"),"<",(0,n.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"any"),">"," = ",(0,n.kt)("inlineCode",{parentName:"td"},"Record"),"<",(0,n.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"any"),">")))),(0,n.kt)("h4",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"params")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs/preview/api/modules/server#handlerparams"},(0,n.kt)("inlineCode",{parentName:"a"},"HandlerParams")),"<",(0,n.kt)("inlineCode",{parentName:"td"},"ServerContext"),">")))),(0,n.kt)("h4",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"YogaServerInstance"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"ServerContext"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Context"),">"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getviewerid"},"getViewerID"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"getViewerID"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"request"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,n.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,n.kt)("inlineCode",{parentName:"p"},"undefined")),(0,n.kt)("p",null,"Returns the viewer ID sent by the client, if set."),(0,n.kt)("h4",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"request")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Request"))))),(0,n.kt)("h4",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,n.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,n.kt)("inlineCode",{parentName:"p"},"undefined")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"startgraphqlserver"},"startGraphQLServer"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"startGraphQLServer"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"ServerContext"),">","(",(0,n.kt)("inlineCode",{parentName:"p"},"params"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("a",{parentName:"p",href:"/docs/preview/api/modules/server#graphqlserver"},(0,n.kt)("inlineCode",{parentName:"a"},"GraphQLServer")),">"),(0,n.kt)("p",null,"Start a local GraphQL server."),(0,n.kt)("h4",{id:"type-parameters-3"},"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"ServerContext")),(0,n.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,n.kt)("inlineCode",{parentName:"td"},"Record"),"<",(0,n.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"any"),">"," = ",(0,n.kt)("inlineCode",{parentName:"td"},"Record"),"<",(0,n.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"any"),">")))),(0,n.kt)("h4",{id:"parameters-2"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"params")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs/preview/api/modules/server#graphqlparams"},(0,n.kt)("inlineCode",{parentName:"a"},"GraphQLParams")),"<",(0,n.kt)("inlineCode",{parentName:"td"},"ServerContext"),">")))),(0,n.kt)("h4",{id:"returns-2"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("a",{parentName:"p",href:"/docs/preview/api/modules/server#graphqlserver"},(0,n.kt)("inlineCode",{parentName:"a"},"GraphQLServer")),">"))}k.isMDXComponent=!0}}]);
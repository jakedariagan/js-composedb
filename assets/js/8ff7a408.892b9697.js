"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2456],{3254:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var s=l(5250),n=l(53);const i={id:"client",title:"Module: client",custom_edit_url:null},c=void 0,d={id:"api/modules/client",title:"Module: client",description:"High-level ComposeDB client, based on the ComposeDB runtime.",source:"@site/versioned_docs/version-0.5.x/api/modules/client.md",sourceDirName:"api/modules",slug:"/api/modules/client",permalink:"/docs/0.5.x/api/modules/client",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"0.5.x",frontMatter:{id:"client",title:"Module: client",custom_edit_url:null},sidebar:"api",previous:{title:"Public APIs",permalink:"/docs/0.5.x/category/public-apis"},next:{title:"Module: runtime",permalink:"/docs/0.5.x/api/modules/runtime"}},r={},o=[{value:"Installation",id:"installation",level:2},{value:"Classes",id:"classes",level:2},{value:"Type Aliases",id:"type-aliases",level:2},{value:"ComposeClientParams",id:"composeclientparams",level:3},{value:"Type declaration",id:"type-declaration",level:4}];function a(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["High-level ComposeDB client, based on the ",(0,s.jsx)(t.a,{href:"/docs/0.5.x/api/modules/runtime",children:(0,s.jsx)(t.code,{children:"ComposeDB runtime"})}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"npm install @composedb/client\n"})}),"\n",(0,s.jsx)(t.h2,{id:"classes",children:"Classes"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/0.5.x/api/classes/client.ComposeClient",children:"ComposeClient"})}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"type-aliases",children:"Type Aliases"}),"\n",(0,s.jsx)(t.h3,{id:"composeclientparams",children:"ComposeClientParams"}),"\n",(0,s.jsxs)(t.p,{children:["\u01ac ",(0,s.jsx)(t.strong,{children:"ComposeClientParams"}),": ",(0,s.jsx)(t.code,{children:"Object"})]}),"\n",(0,s.jsx)(t.h4,{id:"type-declaration",children:"Type declaration"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"cache?"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"DocumentCache"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Optional cache for documents."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"ceramic"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"CeramicApi"})," | ",(0,s.jsx)(t.code,{children:"string"})]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Ceramic client instance or HTTP URL."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"definition"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"RuntimeCompositeDefinition"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Runtime composite definition, created using the ",(0,s.jsx)(t.a,{href:"/docs/0.5.x/api/classes/devtools.Composite",children:(0,s.jsx)(t.code,{children:"Composite"})})," development tools."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"remoteExecutor?"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"Executor"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Optional remote query executor."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"serverURL?"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"string"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Optional ",(0,s.jsx)(t.a,{href:"/docs/0.5.x/api/modules/server",children:(0,s.jsx)(t.code,{children:"query server"})})," URL."]})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},53:(e,t,l)=>{l.d(t,{Z:()=>d,a:()=>c});var s=l(79);const n={},i=s.createContext(n);function c(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);
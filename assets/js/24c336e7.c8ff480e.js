"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4048],{2360:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>l,frontMatter:()=>d,metadata:()=>i,toc:()=>r});var c=o(7512),t=o(0);const d={id:"cli.document",title:"CLI: document:* commands",custom_edit_url:null},s=void 0,i={id:"api/commands/cli.document",title:"CLI: document:* commands",description:"The group of CLI document:* commands enables the creation and interactions with Documents",source:"@site/versioned_docs/version-0.7.x/api/commands/cli.document.md",sourceDirName:"api/commands",slug:"/api/commands/cli.document",permalink:"/docs/0.7.x/api/commands/cli.document",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"0.7.x",frontMatter:{id:"cli.document",title:"CLI: document:* commands",custom_edit_url:null},sidebar:"api",previous:{title:"CLI: model:* commands",permalink:"/docs/0.7.x/api/commands/cli.model"},next:{title:"CLI: graphql:* commands",permalink:"/docs/0.7.x/api/commands/cli.graphql"}},a={},r=[{value:"Command List",id:"command-list",level:2},{value:"Usage",id:"usage",level:2},{value:"<code>composedb document:create</code>",id:"composedb-documentcreate",level:3},{value:"<code>composedb document:replace</code>",id:"composedb-documentreplace",level:3},{value:"<code>composedb document:content</code>",id:"composedb-documentcontent",level:3}];function m(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.M)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:["The group of ",(0,c.jsx)(n.a,{href:"/docs/0.7.x/api/modules/cli",children:"CLI"})," ",(0,c.jsx)(n.code,{children:"document:*"})," commands enables the creation and interactions with ",(0,c.jsx)(n.a,{href:"https://developers.ceramic.network/docs/composedb/core-concepts#documents",children:"Documents"})]}),"\n",(0,c.jsx)(n.h2,{id:"command-list",children:"Command List"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"#composedb-documentcreate",children:(0,c.jsx)(n.code,{children:"composedb document:create MODELSTREAMID CONTENT"})})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"#composedb-documentreplace",children:(0,c.jsx)(n.code,{children:"composedb document:replace STREAMID CONTENT"})})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"#composedb-documentcontent",children:(0,c.jsx)(n.code,{children:"composedb document:content STREAMID"})})}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,c.jsx)(n.h3,{id:"composedb-documentcreate",children:(0,c.jsx)(n.code,{children:"composedb document:create"})}),"\n",(0,c.jsx)(n.p,{children:"Create a document with given content"}),"\n",(0,c.jsxs)(n.p,{children:["You can use this command to test how document creation works, but in your live app you will use ComposeDB GraphQL ",(0,c.jsx)(n.a,{href:"https://developers.ceramic.network/docs/composedb/guides/data-interactions/mutations",children:"Mutations"})," instead."]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"USAGE\n  $ composedb document:create MODELSTREAMID CONTENT\n\nARGUMENTS\n  MODELSTREAMID            streamID of the model whose instance is being created\n  CONTENT                  contents of the model instance encoded as JSON\n\nOPTIONS\n  -c, --ceramic-url        Ceramic API URL\n  -k, --did-private-key    DID Private Key (you can generate a fresh private key using composedb did:generate-private-key)\n"})}),"\n",(0,c.jsx)(n.h3,{id:"composedb-documentreplace",children:(0,c.jsx)(n.code,{children:"composedb document:replace"})}),"\n",(0,c.jsx)(n.p,{children:"Replace content in a document with a given streamID"}),"\n",(0,c.jsxs)(n.p,{children:["You can use this command to test how document updates work, but in your live app you will use ComposeDB GraphQL ",(0,c.jsx)(n.a,{href:"https://developers.ceramic.network/docs/composedb/guides/data-interactions/mutations",children:"Mutations"}),"."]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"USAGE\n  $ composedb document:replace STREAMID CONTENT\n\nARGUMENTS\n  STREAMID                 streamID of the model instance whose content is being replaced\n  CONTENT                  new contents of the model instance encoded as JSON\n\nOPTIONS\n  -c, --ceramic-url        Ceramic API URL\n  -k, --did-private-key    DID Private Key (you can generate a fresh private key using composedb did:generate-private-key)\n"})}),"\n",(0,c.jsx)(n.h3,{id:"composedb-documentcontent",children:(0,c.jsx)(n.code,{children:"composedb document:content"})}),"\n",(0,c.jsx)(n.p,{children:"Load and display the contents of a document with a given ID"}),"\n",(0,c.jsxs)(n.p,{children:["You can use this command to manually check the contents of a given document, but in your DApp you will use ComposeDB GraphQL ",(0,c.jsx)(n.a,{href:"https://developers.ceramic.network/docs/composedb/guides/data-interactions/queries",children:"Queries"}),"."]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"USAGE\n  $ composedb document:content STREAMID\n\nARGUMENTS\n  STREAMID                 ID of the stream\n\nOPTIONS\n  -c, --ceramic-url        Ceramic API URL\n  -o, --output             Path to a file where the content should be saved\n"})})]})}function l(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(m,{...e})}):m(e)}},0:(e,n,o)=>{o.d(n,{I:()=>i,M:()=>s});var c=o(5496);const t={},d=c.createContext(t);function s(e){const n=c.useContext(d);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),c.createElement(d.Provider,{value:n},e.children)}}}]);
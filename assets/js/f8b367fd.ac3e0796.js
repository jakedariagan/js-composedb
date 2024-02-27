"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1056],{3572:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>i,contentTitle:()=>t,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>r});var d=n(7512),c=n(0);const s={id:"cli.model",title:"CLI: model:* commands",custom_edit_url:null},t=void 0,l={id:"api/commands/cli.model",title:"CLI: model:* commands",description:"The group of CLI model:* commands enables discovery of Models, as well as their creation and interactions with them.",source:"@site/versioned_docs/version-0.6.x/api/commands/cli.model.md",sourceDirName:"api/commands",slug:"/api/commands/cli.model",permalink:"/docs/0.6.x/api/commands/cli.model",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"0.6.x",frontMatter:{id:"cli.model",title:"CLI: model:* commands",custom_edit_url:null},sidebar:"api",previous:{title:"CLI: composite:* commands",permalink:"/docs/0.6.x/api/commands/cli.composite"},next:{title:"CLI: document:* commands",permalink:"/docs/0.6.x/api/commands/cli.document"}},i={},r=[{value:"Command List",id:"command-list",level:2},{value:"Usage",id:"usage",level:2},{value:"<code>composedb model:list</code>",id:"composedb-modellist",level:3},{value:"<code>composedb model:content</code>",id:"composedb-modelcontent",level:3},{value:"<code>composedb model:controller</code>",id:"composedb-modelcontroller",level:3},{value:"<code>composedb model:create</code>",id:"composedb-modelcreate",level:3}];function a(e){const o={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.M)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(o.p,{children:["The group of ",(0,d.jsx)(o.a,{href:"/docs/0.6.x/api/modules/cli",children:"CLI"})," ",(0,d.jsx)(o.code,{children:"model:*"})," commands enables discovery of ",(0,d.jsx)(o.a,{href:"https://developers.ceramic.network/docs/composedb/core-concepts#models",children:"Models"}),", as well as their creation and interactions with them."]}),"\n",(0,d.jsx)(o.h2,{id:"command-list",children:"Command List"}),"\n",(0,d.jsxs)(o.ul,{children:["\n",(0,d.jsx)(o.li,{children:(0,d.jsx)(o.a,{href:"#composedb-modellist",children:(0,d.jsx)(o.code,{children:"composedb model:list"})})}),"\n",(0,d.jsx)(o.li,{children:(0,d.jsx)(o.a,{href:"#composedb-modelcontent-streamid",children:(0,d.jsx)(o.code,{children:"composedb model:content STREAMID"})})}),"\n",(0,d.jsx)(o.li,{children:(0,d.jsx)(o.a,{href:"#composedb-modelcontroller-streamid",children:(0,d.jsx)(o.code,{children:"composedb model:controller STREAMID"})})}),"\n",(0,d.jsx)(o.li,{children:(0,d.jsx)(o.a,{href:"#composedb-modelcreate-content",children:(0,d.jsx)(o.code,{children:"composedb model:create CONTENT"})})}),"\n"]}),"\n",(0,d.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,d.jsx)(o.h3,{id:"composedb-modellist",children:(0,d.jsx)(o.code,{children:"composedb model:list"})}),"\n",(0,d.jsx)(o.p,{children:"Display a paginated list of models indexed on the connected ceramic node, which needs to be indexing model streams."}),"\n",(0,d.jsxs)(o.p,{children:["This currently is the main entry path to the ",(0,d.jsx)(o.a,{href:"https://developers.ceramic.network/docs/composedb/core-concepts#model-catalog",children:"Model Catalog"})]}),"\n",(0,d.jsx)(o.pre,{children:(0,d.jsx)(o.code,{children:"USAGE\n  $ composedb model:list\n\nOPTIONS\n  --table                  display results as a table rather than as formatted JSON\n  -i, --indexer-url        URL of a Ceramic API that indexes model streams.\n"})}),"\n",(0,d.jsx)(o.h3,{id:"composedb-modelcontent",children:(0,d.jsx)(o.code,{children:"composedb model:content"})}),"\n",(0,d.jsx)(o.p,{children:"Load the contents of a model stream with a given ID."}),"\n",(0,d.jsxs)(o.p,{children:["You should use this command to check if an existing model found through ",(0,d.jsx)(o.a,{href:"https://developers.ceramic.network/docs/composedb/core-concepts#model-catalog",children:"Model Catalog"})," has the fields you need."]}),"\n",(0,d.jsx)(o.pre,{children:(0,d.jsx)(o.code,{children:"USAGE\n  $ composedb model:content STREAMID\n\nARGUMENTS\n  STREAMID                 ID of the stream\n\nOPTIONS\n  -c, --ceramic-url        Ceramic API URL\n  -o, --output             Path to a file where the content should be saved\n"})}),"\n",(0,d.jsx)(o.h3,{id:"composedb-modelcontroller",children:(0,d.jsx)(o.code,{children:"composedb model:controller"})}),"\n",(0,d.jsxs)(o.p,{children:["Load the model stream with a given ID and display its controller DID (identifier for the ",(0,d.jsx)(o.a,{href:"https://developers.ceramic.network/docs/composedb/core-concepts#accounts",children:"Ceramic Account"})," that owns the model)"]}),"\n",(0,d.jsx)(o.pre,{children:(0,d.jsx)(o.code,{children:"USAGE\n  $ composedb model:controller STREAMID\n\nARGUMENTS\n  STREAMID                 ID of the stream\n\nOPTIONS\n  -c, --ceramic-url        Ceramic API URL\n"})}),"\n",(0,d.jsx)(o.h3,{id:"composedb-modelcreate",children:(0,d.jsx)(o.code,{children:"composedb model:create"})}),"\n",(0,d.jsx)(o.p,{children:"Create a model stream with given content."}),"\n",(0,d.jsxs)(o.p,{children:["Most of the time you shouldn't be using this command directly. Instead, you should first check if a model you need\nalready exists, using the ",(0,d.jsx)(o.a,{href:"https://developers.ceramic.network/docs/composedb/core-concepts#model-catalog",children:"Model Catalog"})," and only if you can't\nfind a model that you need, you should create one indirectly by ",(0,d.jsx)(o.a,{href:"https://developers.ceramic.network/docs/composedb/guides/data-modeling/composites",children:"creating a Composite"})," from a GraphQL Composite Schema."]}),"\n",(0,d.jsx)(o.pre,{children:(0,d.jsx)(o.code,{children:"USAGE\n  $ composedb model:create CONTENT\n\nARGUMENTS\n  CONTENT                  contents of the model encoded as JSON\n\nOPTIONS\n  -c, --ceramic-url        Ceramic API URL\n  -k, --did-private-key    DID Private Key (you can generate a fresh private key using composedb did:generate-private-key)\n"})})]})}function m(e={}){const{wrapper:o}={...(0,c.M)(),...e.components};return o?(0,d.jsx)(o,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},0:(e,o,n)=>{n.d(o,{I:()=>l,M:()=>t});var d=n(5496);const c={},s=d.createContext(c);function t(e){const o=d.useContext(s);return d.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:t(e.components),d.createElement(s.Provider,{value:o},e.children)}}}]);
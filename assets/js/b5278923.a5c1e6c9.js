"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5812],{1556:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>x,frontMatter:()=>d,metadata:()=>r,toc:()=>h});var n=s(7512),i=s(0);const d={id:"devtools_node",title:"Module: devtools-node",custom_edit_url:null},l=void 0,r={id:"api/modules/devtools_node",title:"Module: devtools-node",description:"Node.js-specific development tools.",source:"@site/versioned_docs/version-0.5.x/api/modules/devtools_node.md",sourceDirName:"api/modules",slug:"/api/modules/devtools_node",permalink:"/docs/0.5.x/api/modules/devtools_node",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"0.5.x",frontMatter:{id:"devtools_node",title:"Module: devtools-node",custom_edit_url:null},sidebar:"api",previous:{title:"Module: devtools",permalink:"/docs/0.5.x/api/modules/devtools"},next:{title:"Class: Composite",permalink:"/docs/0.5.x/api/classes/devtools.Composite"}},c={},h=[{value:"Installation",id:"installation",level:2},{value:"Type Aliases",id:"type-aliases",level:2},{value:"PathInput",id:"pathinput",level:3},{value:"ServeDefinitionParams",id:"servedefinitionparams",level:3},{value:"ServeGraphQLParams",id:"servegraphqlparams",level:3},{value:"ServeParams",id:"serveparams",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"ServerHandler",id:"serverhandler",level:3},{value:"Type declaration",id:"type-declaration-1",level:4},{value:"Functions",id:"functions",level:2},{value:"createComposite",id:"createcomposite",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"mergeEncodedComposites",id:"mergeencodedcomposites",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"readEncodedComposite",id:"readencodedcomposite",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"serveEncodedDefinition",id:"serveencodeddefinition",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"serveGraphQL",id:"servegraphql",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"writeEncodedComposite",id:"writeencodedcomposite",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-5",level:4},{value:"writeEncodedCompositeRuntime",id:"writeencodedcompositeruntime",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-6",level:4},{value:"writeGraphQLSchema",id:"writegraphqlschema",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns-7",level:4},{value:"writeRuntimeDefinition",id:"writeruntimedefinition",level:3},{value:"Parameters",id:"parameters-8",level:4},{value:"Returns",id:"returns-8",level:4}];function o(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Node.js-specific development tools."}),"\n",(0,n.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"npm install --dev @composedb/devtools-node\n"})}),"\n",(0,n.jsx)(t.h2,{id:"type-aliases",children:"Type Aliases"}),"\n",(0,n.jsx)(t.h3,{id:"pathinput",children:"PathInput"}),"\n",(0,n.jsxs)(t.p,{children:["\u01ac ",(0,n.jsx)(t.strong,{children:"PathInput"}),": ",(0,n.jsx)(t.code,{children:"URL"})," | ",(0,n.jsx)(t.code,{children:"string"})]}),"\n",(0,n.jsx)(t.p,{children:"Path to a local file. If relative, it will get resolved from the current working directory."}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"servedefinitionparams",children:"ServeDefinitionParams"}),"\n",(0,n.jsxs)(t.p,{children:["\u01ac ",(0,n.jsx)(t.strong,{children:"ServeDefinitionParams"}),": ",(0,n.jsx)(t.a,{href:"/docs/0.5.x/api/modules/devtools_node#serveparams",children:(0,n.jsx)(t.code,{children:"ServeParams"})})," & { ",(0,n.jsx)(t.code,{children:"path"}),": ",(0,n.jsx)(t.a,{href:"/docs/0.5.x/api/modules/devtools_node#pathinput",children:(0,n.jsx)(t.code,{children:"PathInput"})})," }"]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"servegraphqlparams",children:"ServeGraphQLParams"}),"\n",(0,n.jsxs)(t.p,{children:["\u01ac ",(0,n.jsx)(t.strong,{children:"ServeGraphQLParams"}),": ",(0,n.jsx)(t.a,{href:"/docs/0.5.x/api/modules/devtools_node#serveparams",children:(0,n.jsx)(t.code,{children:"ServeParams"})})," & { ",(0,n.jsx)(t.code,{children:"definition"}),": ",(0,n.jsx)(t.code,{children:"RuntimeCompositeDefinition"})," ; ",(0,n.jsx)(t.code,{children:"readonly?"}),": ",(0,n.jsx)(t.code,{children:"boolean"})," }"]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"serveparams",children:"ServeParams"}),"\n",(0,n.jsxs)(t.p,{children:["\u01ac ",(0,n.jsx)(t.strong,{children:"ServeParams"}),": ",(0,n.jsx)(t.code,{children:"Object"})]}),"\n",(0,n.jsx)(t.h4,{id:"type-declaration",children:"Type declaration"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"ceramicURL"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"string"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"URL of the Ceramic node."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"did?"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"DID"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Optional DID instance attached to the Ceramic client."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"graphiql?"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"boolean"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Enable GraphiQL on the server."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"port?"})}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,n.jsx)(t.code,{children:"number"})," | ",(0,n.jsx)(t.code,{children:"number"}),"[]"]}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Port to use, if available."})]})]})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"serverhandler",children:"ServerHandler"}),"\n",(0,n.jsxs)(t.p,{children:["\u01ac ",(0,n.jsx)(t.strong,{children:"ServerHandler"}),": ",(0,n.jsx)(t.code,{children:"Object"})]}),"\n",(0,n.jsx)(t.h4,{id:"type-declaration-1",children:"Type declaration"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"stop"})}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["() => ",(0,n.jsx)(t.code,{children:"Promise"}),"<",(0,n.jsx)(t.code,{children:"void"}),">"]}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Stop the server."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"url"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"string"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"URL of the local GraphQL endpoint."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"functions",children:"Functions"}),"\n",(0,n.jsx)(t.h3,{id:"createcomposite",children:"createComposite"}),"\n",(0,n.jsxs)(t.p,{children:["\u25b8 ",(0,n.jsx)(t.strong,{children:"createComposite"}),"(",(0,n.jsx)(t.code,{children:"ceramic"}),", ",(0,n.jsx)(t.code,{children:"path"}),"): ",(0,n.jsx)(t.code,{children:"Promise"}),"<",(0,n.jsx)(t.code,{children:"Composite"}),">"]}),"\n",(0,n.jsx)(t.p,{children:"Create a Composite from a GraphQL schema path."}),"\n",(0,n.jsx)(t.h4,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"ceramic"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"CeramicClient"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"path"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/docs/0.5.x/api/modules/devtools_node#pathinput",children:(0,n.jsx)(t.code,{children:"PathInput"})})})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Promise"}),"<",(0,n.jsx)(t.code,{children:"Composite"}),">"]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"mergeencodedcomposites",children:"mergeEncodedComposites"}),"\n",(0,n.jsxs)(t.p,{children:["\u25b8 ",(0,n.jsx)(t.strong,{children:"mergeEncodedComposites"}),"(",(0,n.jsx)(t.code,{children:"ceramic"}),", ",(0,n.jsx)(t.code,{children:"source"}),", ",(0,n.jsx)(t.code,{children:"destination"}),"): ",(0,n.jsx)(t.code,{children:"Promise"}),"<",(0,n.jsx)(t.code,{children:"string"}),">"]}),"\n",(0,n.jsxs)(t.p,{children:["Merge the encoded ",(0,n.jsx)(t.code,{children:"source"})," composite(s) to the ",(0,n.jsx)(t.code,{children:"destination"})," path."]}),"\n",(0,n.jsx)(t.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"ceramic"})}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,n.jsx)(t.code,{children:"string"})," | ",(0,n.jsx)(t.code,{children:"CeramicClient"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"source"})}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,n.jsx)(t.a,{href:"/docs/0.5.x/api/modules/devtools_node#pathinput",children:(0,n.jsx)(t.code,{children:"PathInput"})})," | ",(0,n.jsx)(t.a,{href:"/docs/0.5.x/api/modules/devtools_node#pathinput",children:(0,n.jsx)(t.code,{children:"PathInput"})}),"[]"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"destination"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/docs/0.5.x/api/modules/devtools_node#pathinput",children:(0,n.jsx)(t.code,{children:"PathInput"})})})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"returns-1",children:"Returns"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Promise"}),"<",(0,n.jsx)(t.code,{children:"string"}),">"]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"readencodedcomposite",children:"readEncodedComposite"}),"\n",(0,n.jsxs)(t.p,{children:["\u25b8 ",(0,n.jsx)(t.strong,{children:"readEncodedComposite"}),"(",(0,n.jsx)(t.code,{children:"ceramic"}),", ",(0,n.jsx)(t.code,{children:"path"}),", ",(0,n.jsx)(t.code,{children:"index?"}),"): ",(0,n.jsx)(t.code,{children:"Promise"}),"<",(0,n.jsx)(t.code,{children:"Composite"}),">"]}),"\n",(0,n.jsx)(t.p,{children:"Create a Composite from a JSON-encoded definition path."}),"\n",(0,n.jsx)(t.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"ceramic"})}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,n.jsx)(t.code,{children:"string"})," | ",(0,n.jsx)(t.code,{children:"CeramicClient"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"path"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/docs/0.5.x/api/modules/devtools_node#pathinput",children:(0,n.jsx)(t.code,{children:"PathInput"})})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"index?"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"boolean"})})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"returns-2",children:"Returns"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Promise"}),"<",(0,n.jsx)(t.code,{children:"Composite"}),">"]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"serveencodeddefinition",children:"serveEncodedDefinition"}),"\n",(0,n.jsxs)(t.p,{children:["\u25b8 ",(0,n.jsx)(t.strong,{children:"serveEncodedDefinition"}),"(",(0,n.jsx)(t.code,{children:"params"}),"): ",(0,n.jsx)(t.code,{children:"Promise"}),"<",(0,n.jsx)(t.code,{children:"GraphQLServer"}),">"]}),"\n",(0,n.jsx)(t.p,{children:"Create a local GraphQL server to interact with an encoded composite definition."}),"\n",(0,n.jsx)(t.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"params"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/docs/0.5.x/api/modules/devtools_node#servedefinitionparams",children:(0,n.jsx)(t.code,{children:"ServeDefinitionParams"})})})]})})]}),"\n",(0,n.jsx)(t.h4,{id:"returns-3",children:"Returns"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Promise"}),"<",(0,n.jsx)(t.code,{children:"GraphQLServer"}),">"]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"servegraphql",children:"serveGraphQL"}),"\n",(0,n.jsxs)(t.p,{children:["\u25b8 ",(0,n.jsx)(t.strong,{children:"serveGraphQL"}),"(",(0,n.jsx)(t.code,{children:"params"}),"): ",(0,n.jsx)(t.code,{children:"Promise"}),"<",(0,n.jsx)(t.code,{children:"GraphQLServer"}),">"]}),"\n",(0,n.jsx)(t.p,{children:"Create a local GraphQL server to interact with a runtime composite definition."}),"\n",(0,n.jsx)(t.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"params"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/docs/0.5.x/api/modules/devtools_node#servegraphqlparams",children:(0,n.jsx)(t.code,{children:"ServeGraphQLParams"})})})]})})]}),"\n",(0,n.jsx)(t.h4,{id:"returns-4",children:"Returns"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Promise"}),"<",(0,n.jsx)(t.code,{children:"GraphQLServer"}),">"]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"writeencodedcomposite",children:"writeEncodedComposite"}),"\n",(0,n.jsxs)(t.p,{children:["\u25b8 ",(0,n.jsx)(t.strong,{children:"writeEncodedComposite"}),"(",(0,n.jsx)(t.code,{children:"composite"}),", ",(0,n.jsx)(t.code,{children:"path"}),"): ",(0,n.jsx)(t.code,{children:"Promise"}),"<",(0,n.jsx)(t.code,{children:"string"}),">"]}),"\n",(0,n.jsx)(t.p,{children:"Write a JSON-encoded definition for the given composite to the given file path."}),"\n",(0,n.jsx)(t.h4,{id:"parameters-5",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"composite"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"Composite"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"path"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/docs/0.5.x/api/modules/devtools_node#pathinput",children:(0,n.jsx)(t.code,{children:"PathInput"})})})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"returns-5",children:"Returns"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Promise"}),"<",(0,n.jsx)(t.code,{children:"string"}),">"]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"writeencodedcompositeruntime",children:"writeEncodedCompositeRuntime"}),"\n",(0,n.jsxs)(t.p,{children:["\u25b8 ",(0,n.jsx)(t.strong,{children:"writeEncodedCompositeRuntime"}),"(",(0,n.jsx)(t.code,{children:"ceramic"}),", ",(0,n.jsx)(t.code,{children:"definitionPath"}),", ",(0,n.jsx)(t.code,{children:"runtimePath"}),", ",(0,n.jsx)(t.code,{children:"schemaPath?"}),"): ",(0,n.jsx)(t.code,{children:"Promise"}),"<",(0,n.jsx)(t.code,{children:"void"}),">"]}),"\n",(0,n.jsx)(t.p,{children:"Write the runtime definition based on the encoded definition path."}),"\n",(0,n.jsx)(t.h4,{id:"parameters-6",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"ceramic"})}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,n.jsx)(t.code,{children:"string"})," | ",(0,n.jsx)(t.code,{children:"CeramicClient"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"definitionPath"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/docs/0.5.x/api/modules/devtools_node#pathinput",children:(0,n.jsx)(t.code,{children:"PathInput"})})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"runtimePath"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/docs/0.5.x/api/modules/devtools_node#pathinput",children:(0,n.jsx)(t.code,{children:"PathInput"})})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"schemaPath?"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/docs/0.5.x/api/modules/devtools_node#pathinput",children:(0,n.jsx)(t.code,{children:"PathInput"})})})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"returns-6",children:"Returns"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Promise"}),"<",(0,n.jsx)(t.code,{children:"void"}),">"]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"writegraphqlschema",children:"writeGraphQLSchema"}),"\n",(0,n.jsxs)(t.p,{children:["\u25b8 ",(0,n.jsx)(t.strong,{children:"writeGraphQLSchema"}),"(",(0,n.jsx)(t.code,{children:"definition"}),", ",(0,n.jsx)(t.code,{children:"path"}),", ",(0,n.jsx)(t.code,{children:"readonly?"}),"): ",(0,n.jsx)(t.code,{children:"Promise"}),"<",(0,n.jsx)(t.code,{children:"string"}),">"]}),"\n",(0,n.jsx)(t.p,{children:"Write the runtime GraphQL schema from the runtime composite definition."}),"\n",(0,n.jsx)(t.h4,{id:"parameters-7",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"definition"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"RuntimeCompositeDefinition"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"path"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/docs/0.5.x/api/modules/devtools_node#pathinput",children:(0,n.jsx)(t.code,{children:"PathInput"})})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"readonly?"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"boolean"})})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"returns-7",children:"Returns"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Promise"}),"<",(0,n.jsx)(t.code,{children:"string"}),">"]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"writeruntimedefinition",children:"writeRuntimeDefinition"}),"\n",(0,n.jsxs)(t.p,{children:["\u25b8 ",(0,n.jsx)(t.strong,{children:"writeRuntimeDefinition"}),"(",(0,n.jsx)(t.code,{children:"definition"}),", ",(0,n.jsx)(t.code,{children:"path"}),"): ",(0,n.jsx)(t.code,{children:"Promise"}),"<",(0,n.jsx)(t.code,{children:"string"}),">"]}),"\n",(0,n.jsxs)(t.p,{children:["Write the runtime definition for a given path, based on the file extension. Supports ",(0,n.jsx)(t.code,{children:".json"}),",\n",(0,n.jsx)(t.code,{children:".js"})," and ",(0,n.jsx)(t.code,{children:".ts"})," extensions."]}),"\n",(0,n.jsx)(t.h4,{id:"parameters-8",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"definition"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"RuntimeCompositeDefinition"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"path"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/docs/0.5.x/api/modules/devtools_node#pathinput",children:(0,n.jsx)(t.code,{children:"PathInput"})})})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"returns-8",children:"Returns"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Promise"}),"<",(0,n.jsx)(t.code,{children:"string"}),">"]})]})}function x(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},0:(e,t,s)=>{s.d(t,{I:()=>r,M:()=>l});var n=s(5496);const i={},d=n.createContext(i);function l(e){const t=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(d.Provider,{value:t},e.children)}}}]);
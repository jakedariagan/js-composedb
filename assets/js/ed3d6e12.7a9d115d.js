"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6094],{4852:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var a=o(9231);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var i=a.createContext({}),d=function(e){var t=a.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},c=function(e){var t=d(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(o),u=n,h=p["".concat(i,".").concat(u)]||p[u]||m[u]||r;return o?a.createElement(h,l(l({ref:t},c),{},{components:o})):a.createElement(h,l({ref:t},c))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,l=new Array(r);l[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:n,l[1]=s;for(var d=2;d<r;d++)l[d]=o[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,o)}u.displayName="MDXCreateElement"},8447:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=o(328),n=(o(9231),o(4852));const r={},l="ComposeDB Concepts",s={unversionedId:"core-concepts",id:"version-0.5.x/core-concepts",title:"ComposeDB Concepts",description:"Learn about the ComposeDB graph database protocol and technology stack.",source:"@site/versioned_docs/version-0.5.x/core-concepts.mdx",sourceDirName:".",slug:"/core-concepts",permalink:"/docs/0.5.x/core-concepts",draft:!1,tags:[],version:"0.5.x",frontMatter:{},sidebar:"docs",previous:{title:"Next Steps",permalink:"/docs/0.5.x/next-steps"},next:{title:"Community",permalink:"/docs/0.5.x/community"}},i={},d=[{value:"Graph Database Protocol",id:"graph-database-protocol",level:2},{value:"Graph",id:"graph",level:3},{value:"Accounts",id:"accounts",level:3},{value:"Authentication",id:"authentication",level:4},{value:"Documents",id:"documents",level:3},{value:"Models",id:"models",level:3},{value:"Modeling Basics",id:"modeling-basics",level:4},{value:"Account to Model Relations",id:"account-to-model-relations",level:4},{value:"Model",id:"model",level:5},{value:"Model to Account Relations",id:"model-to-account-relations",level:4},{value:"Model",id:"model-1",level:5},{value:"Model to Model Relations",id:"model-to-model-relations",level:4},{value:"Model",id:"model-2",level:5},{value:"Composites",id:"composites",level:3},{value:"Core Components",id:"core-components",level:2},{value:"ComposeDB Server",id:"composedb-server",level:3},{value:"ComposeDB Client",id:"composedb-client",level:3},{value:"Model Catalog",id:"model-catalog",level:3},{value:"Catalog Interfaces",id:"catalog-interfaces",level:4},{value:"Next Steps",id:"next-steps",level:2}],c={toc:d},p="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"composedb-concepts"},"ComposeDB Concepts"),(0,n.kt)("p",null,"Learn about the ComposeDB graph database protocol and technology stack."),(0,n.kt)("h2",{id:"graph-database-protocol"},"Graph Database Protocol"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"In this section we will describe key aspects of the ComposeDB graph database protocol."),(0,n.kt)("h3",{id:"graph"},"Graph"),(0,n.kt)("p",null,"ComposeDB is a composable property graph built on ",(0,n.kt)("a",{parentName:"p",href:"https://ceramic.network/"},"Ceramic"),", where:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Nodes")," are ",(0,n.kt)("a",{parentName:"li",href:"#accounts"},"accounts")," or ",(0,n.kt)("a",{parentName:"li",href:"#documents"},"documents"),", each possessing a globally unique ID"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Edges")," are queryable ",(0,n.kt)("a",{parentName:"li",href:"#account-to-model-relations"},"relationships"))),(0,n.kt)("h3",{id:"accounts"},"Accounts"),(0,n.kt)("p",null,"Accounts are entities capable of owning and performing mutations on documents in the ComposeDB graph. Accounts usually represent end users, but they can be anything capable of signing a message such as groups, apps, devices, or services. Accounts perform ComposeDB mutations by submitting signed (authenticated) events to Ceramic. "),(0,n.kt)("p",null,"ComposeDB is built on Ceramic, so it relies on Ceramic's identity system for accounts and authentication. Ceramic implements the ",(0,n.kt)("a",{parentName:"p",href:"https://w3c.github.io/did-core/"},"Decentralized Identifiers (DIDs)")," protocol, a widely-adopted W3C standard for accounts. "),(0,n.kt)("p",null,"An example public DID identifier:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"did:pkh:bafy123...56789\n")),(0,n.kt)("h4",{id:"authentication"},"Authentication"),(0,n.kt)("p",null,'ComposeDB goes beyond vanilla DIDs and provides a great UX with additional developer tooling. ComposeDB is compatible with the "Sign In with X" standard (e.g. Sign in with Ethereum, SIWE) and the DID Sessions library, which enables end users to initiate long-lived ',(0,n.kt)("a",{parentName:"p",href:"/docs/0.5.x/guides/composedb-client/user-sessions"},"sessions")," from their existing blockchain wallet such as MetaMask or Phantom with only one signature, making Web3 authentication feel like Web2."),(0,n.kt)("h3",{id:"documents"},"Documents"),(0,n.kt)("p",null,"A document is a single mutable instance of structured data in the ComposeDB graph. All documents must conform to a ",(0,n.kt)("a",{parentName:"p",href:"#models"},"model")," and be authored by an account. Updates to a document must also adhere to its model and can only be performed by its owner's account. ComposeDB APIs abstract away that documents are actually stored in Ceramic ",(0,n.kt)("a",{parentName:"p",href:"https://developers.ceramic.network/learn/advanced/overview/#streams"},"streams"),"."),(0,n.kt)("h3",{id:"models"},"Models"),(0,n.kt)("p",null,"Models contain metadata and GraphQL schemas for documents. All documents must be based on a model. Models are designed to be plug-and-play so they can easily be reused by ComposeDB application developers, removing the burden of data modeling. When multiple applications reuse the same model, they also share access to the same documents (data set) on the ComposeDB graph, enabling data composability and reuse. Like documents, models are stored in Ceramic streams; however unlike documents, models are immutable. "),(0,n.kt)("h4",{id:"modeling-basics"},"Modeling Basics"),(0,n.kt)("p",null,"Models are stored in a ",(0,n.kt)("inlineCode",{parentName:"p"},".graphql")," file and written using a subset of the ",(0,n.kt)("a",{parentName:"p",href:"/docs/0.5.x/api/sdl/scalars"},"GraphQL Schema Definition Language (SDL)"),". Within a model, it is possible to define specific properties that store relations to other models or accounts. When using the model, it's possible to perform queries based on these relations. See ",(0,n.kt)("a",{parentName:"p",href:"/docs/0.5.x/guides/data-modeling/introduction-to-modeling"},"Introduction to Modeling")," to learn the basics of writing models."),(0,n.kt)("p",null,"An example ",(0,n.kt)("inlineCode",{parentName:"p"},"Post")," model, whose documents would store social posts:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},'\ntype Posts @createModel(accountRelation: LIST, description: "A simple Post") {\n  body: String! @string(minLength: 1, maxLength: 100)\n  edited: DateTime\n  created: DateTime!\n  profileId: StreamID! @documentReference(model:"BasicProfile")\n  profile: BasicProfile! @relationDocument(property: "profileId")\n}\n\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"type")," sets the name for the model, in this case ",(0,n.kt)("inlineCode",{parentName:"li"},"Post")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"@createModel")," is a directive to create a new model that takes ",(0,n.kt)("inlineCode",{parentName:"li"},"accountRelation")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"description")," as parameters"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"accountRelation")," sets max documents for each account, where ",(0,n.kt)("inlineCode",{parentName:"li"},"SINGLE")," is one and ",(0,n.kt)("inlineCode",{parentName:"li"},"LIST")," is unlimited"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"description")," sets the description for the model")),(0,n.kt)("h4",{id:"account-to-model-relations"},"Account to Model Relations"),(0,n.kt)("p",null,"Any document can always be queried by its author's account using the reqired ",(0,n.kt)("inlineCode",{parentName:"p"},"accountRelation")," property. See ",(0,n.kt)("a",{parentName:"p",href:"/docs/0.5.x/guides/data-modeling/relations#account-to-model-relations"},"Account to Model Relations")," for more."),(0,n.kt)("h5",{id:"model"},"Model"),(0,n.kt)("p",null,"Here is a model that stores a ",(0,n.kt)("inlineCode",{parentName:"p"},"DisplayName")," for a given user:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},'type DisplayName @createModel(accountRelation: SINGLE, description: "Display name for a user") {\n  displayName: String! @string(minLength: 3, maxLength: 50)\n}\n')),(0,n.kt)("h4",{id:"model-to-account-relations"},"Model to Account Relations"),(0,n.kt)("p",null,"Enable a document to be queried by a referenced account using the ",(0,n.kt)("inlineCode",{parentName:"p"},"@accountReference")," directive. See ",(0,n.kt)("a",{parentName:"p",href:"/docs/0.5.x/guides/data-modeling/relations#model-to-account-relations"},"Model to Account Relations")," for more."),(0,n.kt)("h5",{id:"model-1"},"Model"),(0,n.kt)("p",null,"Here is a model, ",(0,n.kt)("inlineCode",{parentName:"p"},"Message"),", that stores a direct message (DM) sent from one user to another:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},'type Message @createModel(accountRelation: LIST, description: "Direct message model") {\n  recipient: DID! @accountReference\n    directMessage: String! @string(minLength: 1, maxLength: 200)\n}\n')),(0,n.kt)("h4",{id:"model-to-model-relations"},"Model to Model Relations"),(0,n.kt)("p",null,"Enable a document to be queried by its relationship to other documents using the ",(0,n.kt)("inlineCode",{parentName:"p"},"@documentReference")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"@relationFrom")," directives. See ",(0,n.kt)("a",{parentName:"p",href:"/docs/0.5.x/guides/data-modeling/relations#model-to-model-relations"},"Model to Model Relations")," for more."),(0,n.kt)("h5",{id:"model-2"},"Model"),(0,n.kt)("p",null,"Here are the models that enable comments to be made on a post. It supports unlimited comments per user, and bi-directional queries from any comment to the original post and from the original post to all of its comments."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},'# Load post model (using streamID)\n\ntype Post @loadModel(id: "kjzl6hvfrbw6c99mdfpjx1z3fue7sesgua6gsl1vu97229lq56344zu9bawnf96"){\n    id: ID!\n}\n\n# New comment model\n# Set relationship to original post\n# Enable querying comment to get original post\n\ntype Comment @createModel(accountRelation: LIST, description: "A comment on a Post") {\n  postID: StreamID! @documentReference(model: "Post")\n  post: Post! @relationDocument(property: "postID")\n  text: String! @string(maxLength: 500)\n}\n\n# Load comment model\n\ntype Comment @loadModel(id: "kjzl6hvfrbw6c9oo2ync09y6z5c9mas9u49lfzcowepuzxmcn3pzztvzd0c7gh0") {\n  id: ID!\n}\n\n# Load post model\n# Extend post model with comments\n# Set relationships to all comments\n# Enable querying post to get all comments\n\ntype Post @loadModel(id: "kjzl6hvfrbw6c99mdfpjx1z3fue7sesgua6gsl1vu97229lq56344zu9bawnf96") {\n  comments: [Comment] @relationFrom(model: "Comment", property: "postID")\n}\n')),(0,n.kt)("h3",{id:"composites"},"Composites"),(0,n.kt)("p",null,"A composite is a group of one or more models (e.g. profiles, blog posts, comments) that defines the complete graph database schema for an application.  To be usable in your application, one or models need to be bundled into a composite. Composites have three representations used throughout the ComposeDB stack:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Representation"),(0,n.kt)("th",{parentName:"tr",align:null},"Usage"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Composite")),(0,n.kt)("td",{parentName:"tr",align:null},"The base composite containing a collection of models encoded in JSON")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Deployed Composite")),(0,n.kt)("td",{parentName:"tr",align:null},"Once deployed, instructs a node which documents to index based on the composite's models")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Compiled Composite")),(0,n.kt)("td",{parentName:"tr",align:null},"Once compiled, enables client to query and mutate documents based on the composite's models")))),(0,n.kt)("h2",{id:"core-components"},"Core Components"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Learn about the software components that power ComposeDB technology."),(0,n.kt)("h3",{id:"composedb-server"},"ComposeDB Server"),(0,n.kt)("p",null,"As mentioned earlier, ComposeDB is a decentralized property graph database built on top of ",(0,n.kt)("a",{parentName:"p",href:"https://ceramic.network"},"Ceramic"),". A ComposeDB server is actually just a Ceramic node backed by a SQL database which stores an index of ComposeDB documents based on the models contained in a composite. The index database provides fast access and high-performance queries against documents in the ComposeDB graph without suffering from performance limitations of decentralization. "),(0,n.kt)("p",null,"Although each ComposeDB server decides which documents it wants to index, all ComposeDB servers are networked and replicate data across the Ceramic network which acts as a global syncing protocol. Your local database state is built up from a global network of cryptographically-verifiable documents and models, allowing you to trust the integrity of your index."),(0,n.kt)("p",null,"Today, all ComposeDB developers need to run their own server to ensure data availability. However various hosted node providers are emerging in the ecosystem to provide this functionality as a service. Down the road, Ceramic plans to implement crytoeconomic guarantees around data availability."),(0,n.kt)("p",null,"Here's an overview of services running in a ComposeDB server:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Service"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Database")),(0,n.kt)("td",{parentName:"tr",align:null},"SQL database used to store an index of ComposeDB documents")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Ceramic")),(0,n.kt)("td",{parentName:"tr",align:null},"Decentralized event streaming infrastructure used to store ComposeDB models and documents")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"IPFS")),(0,n.kt)("td",{parentName:"tr",align:null},"Low-level peer-to-peer data protocols used by Ceramic")))),(0,n.kt)("h3",{id:"composedb-client"},"ComposeDB Client"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/0.5.x/guides/composedb-client/"},"ComposeDB client")," is a relatively simple software library that connects your application to a ComposeDB server. It is written in JS/TS and exposes a GraphQL interface that enables your application to perform GraphQL queries and mutations against a ComposeDB server. The client needs to be passed a compiled composite in order to saturate its own APIs and understand the schemas for the models you\u2019re using."),(0,n.kt)("h3",{id:"model-catalog"},"Model Catalog"),(0,n.kt)("p",null,"As mentioned earlier, composites and their underlying data models are designed to be reusable, making it simple to build complementary and interoperable apps. Apps that reuse each other's models create instant data interoperability, without any additional integrations needed. "),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"/docs/0.5.x/guides/data-modeling/model-catalog"},"Model Catalog")," allows developers to discover, share and reuse data models, enabling data composability across applications within the ComposeDB ecosystem. All models contained in deployed composites are automatically added to the catalog."),(0,n.kt)("h4",{id:"catalog-interfaces"},"Catalog Interfaces"),(0,n.kt)("p",null,"Currently, discovering models in the catalog happens through commands in the ComposeDB CLI. However, we're looking for people in the community to create great products and user interfaces for interacting with the catalog."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Data Model Table",src:o(2106).Z,width:"2824",height:"1422"})),(0,n.kt)("h2",{id:"next-steps"},"Next Steps"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Ready to dive deeper? Head to ",(0,n.kt)("a",{parentName:"p",href:"/docs/0.5.x/next-steps"},(0,n.kt)("strong",{parentName:"a"},"Next Steps \u2192"))))}m.isMDXComponent=!0},2106:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/data-model-table-9edfb95dc33320c39c7c54bf99facad5.png"}}]);
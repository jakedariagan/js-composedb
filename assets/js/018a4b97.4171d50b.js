"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6845],{5635:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var i=t(5250),s=t(53);const o={},a="Runtime Schema",r={id:"api/runtime/schema",title:"Runtime Schema",description:"ComposeDB automatically generates the runtime GraphQL schema used by applications to interact with their composites.",source:"@site/versioned_docs/version-0.6.x/api/runtime/schema.mdx",sourceDirName:"api/runtime",slug:"/api/runtime/schema",permalink:"/docs/0.6.x/api/runtime/schema",draft:!1,unlisted:!1,tags:[],version:"0.6.x",frontMatter:{},sidebar:"api",previous:{title:"Supported directives",permalink:"/docs/0.6.x/api/sdl/directives"}},c={},l=[{value:"Objects",id:"objects",level:2},{value:"Document objects",id:"document-objects",level:3},{value:"Embedded objects",id:"embedded-objects",level:3},{value:"<code>CeramicAccount</code> object",id:"ceramicaccount-object",level:3},{value:"<code>Query</code> object",id:"query-object",level:3},{value:"Connections",id:"connections",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Inputs",id:"inputs",level:2},{value:"Filtering",id:"filtering",level:3},{value:"Value conditions",id:"value-conditions",level:4},{value:"Logical conditions",id:"logical-conditions",level:4},{value:"Sorting",id:"sorting",level:3},{value:"Document creation",id:"document-creation",level:3},{value:"Document update",id:"document-update",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"runtime-schema",children:"Runtime Schema"}),"\n",(0,i.jsx)(n.p,{children:"ComposeDB automatically generates the runtime GraphQL schema used by applications to interact with their composites."}),"\n",(0,i.jsx)(n.h2,{id:"objects",children:"Objects"}),"\n",(0,i.jsx)(n.h3,{id:"document-objects",children:"Document objects"}),"\n",(0,i.jsxs)(n.p,{children:["Documents are uniquely identifiable objects in the graph using ",(0,i.jsx)(n.a,{href:"https://graphql.org/learn/global-object-identification/",children:"GraphQL's Global Object Identification"})," specification with the ",(0,i.jsx)(n.code,{children:"Node"})," interface. All document objects contain an ",(0,i.jsx)(n.code,{children:"id: ID!"})," field representing their unique stream ID."]}),"\n",(0,i.jsxs)(n.p,{children:["The other fields present in document objects are generated based on the ",(0,i.jsx)(n.a,{href:"https://developers.ceramic.network/docs/composedb/guides/data-modeling/writing-models",children:"model's definition"})," and possibly added ",(0,i.jsx)(n.a,{href:"/docs/0.6.x/api/sdl/directives#views",children:"views"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["For example, using the following ",(0,i.jsx)(n.a,{href:"https://developers.ceramic.network/docs/composedb/guides/data-modeling/schemas",children:"Schema definition"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",children:'enum PostStatus {\n  ARCHIVED\n  DRAFT\n  PUBLISHED\n}\n\ntype Post @createModel(accountRelation: LIST, description: "A simple post") {\n  author: DID! @documentAccount\n  status: PostStatus!\n  publicationDate: DateTime\n  title: String! @string(minLength: 5, maxLength: 100)\n  text: String! @string(minLength: 5, maxLength: 10000)\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"This runtime schema will be generated:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",children:"# \u2139\ufe0f Some types are omitted in this example for brevity\n\ntype CeramicAccount implements Node {\n  # Default fields always present on the CeramicAccount object\n  id: ID!\n  isViewer: Boolean!\n  # Added connection to Post documents controlled by the account\n  postList: PostConnection\n}\n\nenum PostStatus {\n  ARCHIVED\n  DRAFT\n  PUBLISHED\n}\n\ntype Post implements Node {\n  # The ID field representing the document stream ID is always added to document objects\n  id: ID!\n  # DID scalar field converted to CeramicAccount object\n  author: CeramicAccount!\n  # Other fields defined in the schema\n  status: PostStatus!\n  publicationDate: DateTime\n  title: String!\n  text: String!\n}\n\ntype PostConnection {\n  edges: [PostEdge]\n  pageInfo: PageInfo\n}\n\ntype PostEdge {\n  cursor: String\n  node: Post\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"embedded-objects",children:"Embedded objects"}),"\n",(0,i.jsx)(n.p,{children:"Embedded objects can only be accessed from the document storing them."}),"\n",(0,i.jsxs)(n.p,{children:["Example ",(0,i.jsx)(n.a,{href:"https://developers.ceramic.network/docs/composedb/guides/data-modeling/schemas",children:"Schema definition"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",children:'type ImageSource {\n  src: URI!\n  alt: String! @string(minLength: 5, maxLength: 100)\n  width: Int\n  height: Int\n}\n\ntype ImageMetadata {\n  original: ImageSource!\n  alternatives: [ImageSource!]!\n}\n\ntype Profile @createModel(accountRelation: SINGLE, description: "A basic profile") {\n  displayName: String! @string(minLength: 5, maxLength: 100)\n  avatar: ImageMetadata\n}\n\ntype Post @createModel(accountRelation: LIST, description: "A simple post") {\n  title: String! @string(minLength: 5, maxLength: 100)\n  cover: ImageMetadata\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"This runtime schema will be generated:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",children:"# \u2139\ufe0f Some types are omitted in this example for brevity\n\ntype PostImageMetadata {\n  original: PostImageSource!\n  alternatives: [PostImageSource!]!\n}\n\ntype PostImageSource {\n  src: URI!\n  alt: String!\n  width: Int\n  height: Int\n}\n\ntype Post implements Node {\n  id: ID!\n  title: String!\n  cover: PostImageMetadata\n}\n\ntype ProfileImageMetadata {\n  original: ProfileImageSource!\n  alternatives: [ProfileImageSource!]!\n}\n\ntype ProfileImageSource {\n  src: URI!\n  alt: String!\n  width: Int\n  height: Int\n}\n\ntype Profile implements Node {\n  id: ID!\n  displayName: String!\n  avatar: ProfileImageMetadata\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In the runtime schema above, the ",(0,i.jsx)(n.code,{children:"ImageMetadata"})," and ",(0,i.jsx)(n.code,{children:"ImageSources"})," objects from the schema definition are generated as ",(0,i.jsx)(n.code,{children:"PostImageMetadata"}),", ",(0,i.jsx)(n.code,{children:"PostImageSources"}),", ",(0,i.jsx)(n.code,{children:"ProfileImageMetadata"})," and ",(0,i.jsx)(n.code,{children:"ProfileImageSources"})," to avoid naming conflicts between embedded objects."]}),"\n",(0,i.jsxs)(n.p,{children:["Using the ",(0,i.jsxs)(n.a,{href:"/docs/0.6.x/api/classes/devtools.Composite#setcommonembeds",children:[(0,i.jsx)(n.code,{children:"setCommomEmbeds()"})," method of the ",(0,i.jsx)(n.code,{children:"Composite"})," class"]}),", it is possible to specify that embedded objects can be safely shared by multiple documents, generating the following runtime schema:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",children:"# \u2139\ufe0f Some types are omitted in this example for brevity\n\ntype ImageMetadata {\n  original: ImageSource!\n  alternatives: [ImageSource!]!\n}\n\ntype ImageSource {\n  src: URI!\n  alt: String!\n  width: Int\n  height: Int\n}\n\ntype Post implements Node {\n  id: ID!\n  title: String!\n  cover: ImageMetadata\n}\n\ntype Profile implements Node {\n  id: ID!\n  displayName: String!\n  avatar: ImageMetadata\n}\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"ceramicaccount-object",children:[(0,i.jsx)(n.code,{children:"CeramicAccount"})," object"]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"CeramicAccount"})," object is generated to represent any DID and its associated documents in the network."]}),"\n",(0,i.jsxs)(n.p,{children:["Similar to ",(0,i.jsx)(n.a,{href:"#document-objects",children:"Document objects"}),", all ",(0,i.jsx)(n.code,{children:"CeramicAccount"})," objects are uniquely identifiable objects in the graph using ",(0,i.jsx)(n.a,{href:"https://graphql.org/learn/global-object-identification/",children:"GraphQL's Global Object Identification"})," specification with the ",(0,i.jsx)(n.code,{children:"Node"})," interface, with their ",(0,i.jsx)(n.code,{children:"id: ID!"})," field representing their unique DID string."]}),"\n",(0,i.jsxs)(n.p,{children:["In addition to the ",(0,i.jsx)(n.code,{children:"id: ID!"})," field, the ",(0,i.jsx)(n.code,{children:"isViewer: Boolean!"})," field representing whether the account is the viewer associated to the ComposeDB client are always present, while other fields are generated based on the models present in the composite."]}),"\n",(0,i.jsxs)(n.p,{children:["Relations to all documents controlled by the given DID for the models present in the composite are automatically generated, while relations from documents using a ",(0,i.jsx)(n.code,{children:"DID"})," scalar field can be explicitly added using the ",(0,i.jsxs)(n.a,{href:"/docs/0.6.x/api/sdl/directives#accountreference",children:[(0,i.jsx)(n.code,{children:"@accountReference"})," directive"]}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Example ",(0,i.jsx)(n.a,{href:"https://developers.ceramic.network/docs/composedb/guides/data-modeling/schemas",children:"Schema definition"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",children:'type Profile @createModel(accountRelation: SINGLE, description: "A basic profile") {\n  displayName: String! @string(minLength: 5, maxLength: 100)\n}\n\ntype Meeting @createModel(accountRelation: LIST, description: "Meeting event") {\n  # @documentAccount represents the account controlling the document\n  self: DID! @documentAccount\n  # @accountReference signals the field needs to be indexed and queryable on the CeramicAccount object\n  other: DID! @accountReference\n  date: Date\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"This runtime schema will be generated:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",children:'# \u2139\ufe0f Some types are omitted in this example for brevity\n\ntype CeramicAccount implements Node {\n  # The following fields are always present\n  id: ID!\n  isViewer: Boolean!\n  # The Meeting relation is a connection because the Meeting account relation is LIST\n  # The meetingList connection allows to access all the Meeting documents controlled by the account\n  meetingList: MeetingConnection\n  meetingListCount: Int!\n  # The otherOfMeetingList connection allows to access all the Meeting documents where the account DID is set as the value of the "other" field\n  otherOfMeetingList: MeetingConnection\n  otherOfMeetingListCount: Int!\n  # The Profile relation is a single object because the Profile account relation is SINGLE\n  profile: Profile\n}\n\ntype Meeting implements Node {\n  id: ID!\n  # DID scalars are turned into CeramicAccount objects so their relations can be accessed\n  self: CeramicAccount!\n  other: CeramicAccount!\n  date: Date\n}\n\ntype MeetingConnection {\n  edges: [MeetingEdge]\n  pageInfo: PageInfo\n}\n\ntype MeetingEdge {\n  cursor: String\n  node: Meeting\n}\n\ntype Profile implements Node {\n  id: ID!\n  displayName: String!\n}\n'})}),"\n",(0,i.jsxs)(n.h3,{id:"query-object",children:[(0,i.jsx)(n.code,{children:"Query"})," object"]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"Query"})," object represents the root object to perform GraphQL queries, it always contains the following two fields:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"node(id: ID!): Node"}),": allowing to access any ",(0,i.jsx)(n.a,{href:"#document-objects",children:"Document object"})," or ",(0,i.jsx)(n.a,{href:"#ceramicaccount-object",children:"DID account"})," using the ",(0,i.jsxs)(n.a,{href:"https://graphql.org/learn/global-object-identification/#node-interface",children:["GraphQL's ",(0,i.jsx)(n.code,{children:"Node"})," interface"]}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"viewer: CeramicAccount"}),": allowing to access the ",(0,i.jsxs)(n.a,{href:"#ceramicaccount-object",children:[(0,i.jsx)(n.code,{children:"CeramicAccount"})," object"]})," for the DID associated to the ComposeDB client, if set."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"In addition to these fields, the ComposeDB runtime will generate connections for all models defined in the composite."}),"\n",(0,i.jsxs)(n.p,{children:["Example ",(0,i.jsx)(n.a,{href:"https://developers.ceramic.network/docs/composedb/guides/data-modeling/schemas",children:"Schema definition"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",children:'type Profile @createModel(accountRelation: SINGLE, description: "A basic profile") {\n  displayName: String! @string(minLength: 5, maxLength: 100)\n}\n\ntype Post @createModel(accountRelation: LIST, description: "A simple post") {\n  text: String! @string(minLength: 5, maxLength: 100)\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"This runtime schema will be generated:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",children:"# \u2139\ufe0f Some types are omitted in this example for brevity\n\ntype Query {\n  node(id: ID!): Node\n  viewer: CeramicAccount\n  # \u2139\ufe0f Connection arguments are omitted in this example for brevity\n  postIndex: PostConnection\n  postCount: Int!\n  profileIndex: ProfileConnection\n  profileCount: Int!\n}\n\ntype CeramicAccount implements Node {\n  id: ID!\n  isViewer: Boolean!\n  postList: PostConnection\n  postListCount: Int!\n  profile: Profile\n}\n\ntype Post implements Node {\n  id: ID!\n  text: String!\n}\n\ntype PostConnection {\n  edges: [PostEdge]\n  pageInfo: PageInfo\n}\n\ntype PostEdge {\n  cursor: String\n  node: Post\n}\n\ntype Profile implements Node {\n  id: ID!\n  displayName: String!\n}\n\ntype ProfileConnection {\n  edges: [ProfileEdge]\n  pageInfo: PageInfo\n}\n\ntype ProfileEdge {\n  cursor: String\n  node: Profile\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"connections",children:"Connections"}),"\n",(0,i.jsxs)(n.p,{children:["ComposeDB implements ",(0,i.jsx)(n.a,{href:"https://relay.dev/graphql/connections.htm",children:"Relay's Connection specification"})," to represent one-to-many relationships between nodes (",(0,i.jsx)(n.a,{href:"#document-objects",children:"Document objects"})," and ",(0,i.jsx)(n.a,{href:"#ceramicaccount-object",children:"DID accounts"}),") in the graph."]}),"\n",(0,i.jsxs)(n.p,{children:["Connection objects are generated for all models in the composite, supporting the ",(0,i.jsx)(n.a,{href:"https://relay.dev/graphql/connections.htm#sec-Arguments",children:"Connection arguments"})," and possibly additional arguments for ",(0,i.jsx)(n.a,{href:"#filtering",children:"filtering"})," and ",(0,i.jsx)(n.a,{href:"#sorting",children:"sorting"})," the associated documents."]}),"\n",(0,i.jsx)(n.h2,{id:"interfaces",children:"Interfaces"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://graphql.org/learn/schema/#interfaces",children:"GraphQL interfaces"})," are generated for all interface models present in a composite, along with entry points on the ",(0,i.jsxs)(n.a,{href:"#query-object",children:[(0,i.jsx)(n.code,{children:"Query"})," object"]})," and related ",(0,i.jsx)(n.a,{href:"#inputs",children:"inputs"}),". Querying these entry points returns documents for all the models implementing the given interface that are indexed by the Ceramic node."]}),"\n",(0,i.jsx)(n.admonition,{title:"Indices creation",type:"caution",children:(0,i.jsxs)(n.p,{children:["Inputs for ",(0,i.jsx)(n.a,{href:"#filtering",children:"filtering"})," and ",(0,i.jsx)(n.a,{href:"#sorting",children:"sorting"})," are generated for all fields of the interface regardless of the created indices. When querying using these fields, the expected indices should have been ",(0,i.jsx)(n.a,{href:"/docs/0.6.x/api/sdl/directives#indexing",children:"created on the matching models"})," first."]})}),"\n",(0,i.jsx)(n.h2,{id:"inputs",children:"Inputs"}),"\n",(0,i.jsxs)(n.p,{children:["GraphQL differentiates objects handled in queries from objects used to perform mutations and arguments, using ",(0,i.jsx)(n.a,{href:"https://graphql.org/learn/schema/#input-types",children:"input types"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"ComposeDB generates input types based on models present in the composite as described below."}),"\n",(0,i.jsx)(n.h3,{id:"filtering",children:"Filtering"}),"\n",(0,i.jsxs)(n.p,{children:["Filtering inputs can be used as arguments to ",(0,i.jsx)(n.a,{href:"#connections",children:"Connection"})," queries in order to filter the documents returned by the query based on the value of fields present in the document identified using the ",(0,i.jsxs)(n.a,{href:"/docs/0.6.x/api/sdl/directives#createindex",children:[(0,i.jsx)(n.code,{children:"@createIndex"})," directive"]}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Filters support two types of conditions: ",(0,i.jsx)(n.a,{href:"#value-conditions",children:"value conditions"})," that apply to a single field in a document and ",(0,i.jsx)(n.a,{href:"#logical-conditions",children:"logical conditions"})," that combine multiple conditions to create more complex filters."]}),"\n",(0,i.jsxs)(n.p,{children:["For example, using the following ",(0,i.jsx)(n.a,{href:"https://developers.ceramic.network/docs/composedb/guides/data-modeling/schemas",children:"Schema definition"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",children:'enum PostStatus {\n  ARCHIVED\n  DRAFT\n  PUBLISHED\n}\n\ntype Post\n  @createModel(accountRelation: LIST, description: "A simple post")\n  @createIndex(fields: [{ path: ["status"] }])\n  @createIndex(fields: [{ path: ["publicationDate"] }])\n  @createIndex(fields: [{ path: ["title"] }]) {\n  author: DID! @documentAccount\n  status: PostStatus!\n  publicationDate: DateTime\n  title: String! @string(minLength: 5, maxLength: 100)\n  text: String! @string(minLength: 5, maxLength: 10000)\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"This runtime schema will be generated:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",children:"# \u2139\ufe0f Some types are omitted in this example for brevity\n\nenum PostStatus {\n  ARCHIVED\n  DRAFT\n  PUBLISHED\n}\n\ntype Post implements Node {\n  id: ID!\n  author: CeramicAccount!\n  status: PostStatus!\n  publicationDate: DateTime\n  title: String!\n  text: String!\n}\n\ntype PostConnection {\n  edges: [PostEdge]\n  pageInfo: PageInfo\n}\n\ntype PostEdge {\n  cursor: String\n  node: Post\n}\n\n# High-level filter conditions for Post documents\ninput PostFiltersInput {\n  where: PostObjectFilterInput\n  and: [PostFiltersInput!]\n  or: [PostFiltersInput!]\n  not: PostFiltersInput\n}\n\n# Filter conditions for fields in Post documents\ninput PostObjectFilterInput {\n  status: PostStatusValueFilterInput\n  publicationDate: StringValueFilterInput\n  title: StringValueFilterInput\n}\n\n# Generated value filter for the PostStatus enum\ninput PostStatusValueFilterInput {\n  isNull: Boolean\n  equalTo: PostStatus\n  notEqualTo: PostStatus\n  in: [PostStatus!]\n  notIn: [PostStatus!]\n}\n\n# Generic string value filter\ninput StringValueFilterInput {\n  isNull: Boolean\n  equalTo: String\n  notEqualTo: String\n  in: [String!]\n  notIn: [String!]\n  lessThan: String\n  lessThanOrEqualTo: String\n  greaterThan: String\n  greaterThanOrEqualTo: String\n}\n\ntype Query {\n  node(id: ID!): Node\n  viewer: CeramicAccount\n  # \u2139\ufe0f Other connection arguments are omitted in this example for brevity\n  postIndex(filters: PostFiltersInput): PostConnection\n}\n"})}),"\n",(0,i.jsx)(n.h4,{id:"value-conditions",children:"Value conditions"}),"\n",(0,i.jsxs)(n.p,{children:["Value conditions apply to the value of a single field in a document. They are generated based on the value type (such as ",(0,i.jsx)(n.code,{children:"Boolean"}),", ",(0,i.jsx)(n.code,{children:"String"}),", ",(0,i.jsx)(n.code,{children:"Float"}),"...), with different value types supporting different conditions."]}),"\n",(0,i.jsxs)(n.p,{children:["The following table describes all the available conditions and the matching SQL statement, where ",(0,i.jsx)(n.code,{children:"(value)"})," is used as a placeholder for a single value and ",(0,i.jsx)(n.code,{children:"...values"})," for a list of values:"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"GraphQL input"}),(0,i.jsx)(n.th,{children:"Generated SQL"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["isNull: ",(0,i.jsx)(n.code,{children:"Boolean"})]}),(0,i.jsx)(n.td,{children:"IS NULL / IS NOT NULL"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["equalTo: ",(0,i.jsx)(n.code,{children:"(value)"})]}),(0,i.jsxs)(n.td,{children:["= ",(0,i.jsx)(n.code,{children:"(value)"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["notEqualTo: ",(0,i.jsx)(n.code,{children:"(value)"})]}),(0,i.jsxs)(n.td,{children:["!= ",(0,i.jsx)(n.code,{children:"(value)"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["in: ",(0,i.jsx)(n.code,{children:"[...values]"})]}),(0,i.jsxs)(n.td,{children:["IN (",(0,i.jsx)(n.code,{children:"...values"}),")"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["notIn: ",(0,i.jsx)(n.code,{children:"[...values]"})]}),(0,i.jsxs)(n.td,{children:["NOT IN (",(0,i.jsx)(n.code,{children:"...values"}),")"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["lessThan: ",(0,i.jsx)(n.code,{children:"(value)"})]}),(0,i.jsxs)(n.td,{children:["< ",(0,i.jsx)(n.code,{children:"(value)"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["lessThanOrEqualTo: ",(0,i.jsx)(n.code,{children:"(value)"})]}),(0,i.jsxs)(n.td,{children:["<= ",(0,i.jsx)(n.code,{children:"(value)"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["greaterThan: ",(0,i.jsx)(n.code,{children:"(value)"})]}),(0,i.jsxs)(n.td,{children:["> ",(0,i.jsx)(n.code,{children:"(value)"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["greaterThanOrEqualTo: ",(0,i.jsx)(n.code,{children:"(value)"})]}),(0,i.jsxs)(n.td,{children:[">= ",(0,i.jsx)(n.code,{children:"(value)"})]})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["Even though the generated GraphQL input types support multiple condition fields, ",(0,i.jsx)(n.strong,{children:"ComposeDB does not support ambiguous conditions"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["In most cases, only a single condition can be present in the input. The exception is when using the ",(0,i.jsx)(n.code,{children:"lessThan"}),", ",(0,i.jsx)(n.code,{children:"lessThanOrEqualTo"}),", ",(0,i.jsx)(n.code,{children:"greaterThan"})," and ",(0,i.jsx)(n.code,{children:"greaterThanOrEqualTo"})," where two matching boundaries can be set together, as in the examples below:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'// \u274c Invalid input with two conditions making the filter ambiguous\n{ "isNull": true, "equalTo": "test" }\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'// \u2705 Valid input with a single condition\n{ "isNull": true }\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'// \u2705 Valid input with a single condition\n{ "equalTo": "test" }\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'// \u2705 Valid input with range conditions\n{ "greaterThan": 5, "lessThanOrEqualTo": 10 }\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'// \u274c Invalid input with ambiguous conditions\n{ "greaterThan": 5, "greaterThanOrEqualTo": 10 }\n'})}),"\n",(0,i.jsx)(n.h4,{id:"logical-conditions",children:"Logical conditions"}),"\n",(0,i.jsxs)(n.p,{children:["Beyond using the ",(0,i.jsx)(n.code,{children:"where"})," keyword to match object fields with ",(0,i.jsx)(n.a,{href:"#value-conditions",children:"value conditions"}),", the ",(0,i.jsx)(n.code,{children:"and"}),", ",(0,i.jsx)(n.code,{children:"or"})," and ",(0,i.jsx)(n.code,{children:"not"})," keywords can be used to create more complex conditions, for example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'// \u2705 Valid input with conditions on multiple fields\n{\n  "where": {\n    "status": { "notEqualTo": "DRAFT" },\n    "publicationDate": { "greaterThanOrEqualTo": "2023-07-01", "lessThan": "2023-08-01" }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'// \u2705 Valid input with nested logical filters\n{\n  "or": [\n    {\n      "where": {\n        "status": { "equalTo": "PUBLISHED" }\n      }\n    },\n    {\n      "not": {\n        "where": {\n          "publicationDate": { "greaterThanOrEqualTo": "2023-07-01" }\n        }\n      }\n    }\n  ]\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Only one key/value pair can be provided per object, filters such as the following are not supported:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'// \u274c Invalid input with multiple keys, see previous example for correct syntax\n{\n  "not": {\n    "where": {\n      "publicationDate": { "greaterThanOrEqualTo": "2023-07-01" }\n    }\n  },\n  "or": [\n    {\n      "where": {\n        "status": { "equalTo": "PUBLISHED" }\n      }\n    }\n  ]\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"sorting",children:"Sorting"}),"\n",(0,i.jsxs)(n.p,{children:["Similar to ",(0,i.jsx)(n.a,{href:"#filtering",children:"filtering inputs"}),", sorting inputs can be used as arguments to ",(0,i.jsx)(n.a,{href:"#connections",children:"Connection"})," queries in order to order the documents returned by the query based on the value of fields present in the document identified using the ",(0,i.jsxs)(n.a,{href:"/docs/0.6.x/api/sdl/directives#createindex",children:[(0,i.jsx)(n.code,{children:"@createIndex"})," directive"]}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["For example, using the following ",(0,i.jsx)(n.a,{href:"https://developers.ceramic.network/docs/composedb/guides/data-modeling/schemas",children:"Schema definition"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",children:'enum PostStatus {\n  ARCHIVED\n  DRAFT\n  PUBLISHED\n}\n\ntype Post\n  @createModel(accountRelation: LIST, description: "A simple post")\n  @createIndex(fields: [{ path: ["status"] }])\n  @createIndex(fields: [{ path: ["publicationDate"] }]) {\n  author: DID! @documentAccount\n  status: PostStatus!\n  publicationDate: DateTime\n  title: String! @string(minLength: 5, maxLength: 100)\n  text: String! @string(minLength: 5, maxLength: 10000)\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"This runtime schema will be generated:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",children:"# \u2139\ufe0f Some types are omitted in this example for brevity\n\nenum PostStatus {\n  ARCHIVED\n  DRAFT\n  PUBLISHED\n}\n\ntype Post implements Node {\n  id: ID!\n  author: CeramicAccount!\n  status: PostStatus!\n  publicationDate: DateTime\n  title: String!\n  text: String!\n}\n\ntype PostConnection {\n  edges: [PostEdge]\n  pageInfo: PageInfo\n}\n\ntype PostEdge {\n  cursor: String\n  node: Post\n}\n\ninput PostSortingInput {\n  status: SortOrder\n  publicationDate: SortOrder\n}\n\nenum SortOrder {\n  ASC\n  DESC\n}\n\ntype Query {\n  node(id: ID!): Node\n  viewer: CeramicAccount\n  # \u2139\ufe0f Other connection arguments are omitted in this example for brevity\n  postIndex(sorting: PostSortingInput): PostConnection\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Multiple fields can be set in the ",(0,i.jsx)(n.code,{children:"sorting"})," input, for example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'// \u2705 Valid input with multiple fields\n{ "publicationDate": "DESC", "title": "ASC" }\n'})}),"\n",(0,i.jsx)(n.h3,{id:"document-creation",children:"Document creation"}),"\n",(0,i.jsx)(n.p,{children:"Document creation uses two input objects: one for the content fields and another one wrapping it."}),"\n",(0,i.jsxs)(n.p,{children:["For example, using the following ",(0,i.jsx)(n.a,{href:"https://developers.ceramic.network/docs/composedb/guides/data-modeling/schemas",children:"Schema definition"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",children:'enum PostStatus {\n  ARCHIVED\n  DRAFT\n  PUBLISHED\n}\n\ntype Post @createModel(accountRelation: LIST, description: "A simple post") {\n  author: DID! @documentAccount\n  status: PostStatus!\n  publicationDate: DateTime\n  title: String! @string(minLength: 5, maxLength: 100)\n  text: String! @string(minLength: 5, maxLength: 10000)\n}\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",children:"# \u2139\ufe0f Some types are omitted in this example for brevity\n\nenum PostStatus {\n  ARCHIVED\n  DRAFT\n  PUBLISHED\n}\n\ntype Post implements Node {\n  id: ID!\n  author: CeramicAccount!\n  status: PostStatus!\n  publicationDate: DateTime\n  title: String!\n  text: String!\n}\n\n# Post input based on content fields\ninput PostInput {\n  status: PostStatus!\n  publicationDate: DateTime\n  title: String!\n  text: String!\n}\n\n# High-level input type\ninput CreatePostInput {\n  content: PostInput!\n  clientMutationId: String\n}\n\ntype Mutation {\n  createPost(input: CreatePostInput!): CreatePostPayload\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"document-update",children:"Document update"}),"\n",(0,i.jsx)(n.p,{children:"Similart to document creation, document update uses two input objects for the content fields and another one wrapping it, as well as an options object."}),"\n",(0,i.jsxs)(n.p,{children:["For example, using the following ",(0,i.jsx)(n.a,{href:"https://developers.ceramic.network/docs/composedb/guides/data-modeling/schemas",children:"Schema definition"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",children:'enum PostStatus {\n  ARCHIVED\n  DRAFT\n  PUBLISHED\n}\n\ntype Post @createModel(accountRelation: LIST, description: "A simple post") {\n  author: DID! @documentAccount\n  status: PostStatus!\n  publicationDate: DateTime\n  title: String! @string(minLength: 5, maxLength: 100)\n  text: String! @string(minLength: 5, maxLength: 10000)\n}\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",children:"# \u2139\ufe0f Some types are omitted in this example for brevity\n\nenum PostStatus {\n  ARCHIVED\n  DRAFT\n  PUBLISHED\n}\n\ntype Post implements Node {\n  id: ID!\n  author: CeramicAccount!\n  status: PostStatus!\n  publicationDate: DateTime\n  title: String!\n  text: String!\n}\n\n# Partial Post input with all content fields set as optional\ninput PartialPostInput {\n  status: PostStatus\n  publicationDate: DateTime\n  title: String\n  text: String\n}\n\n# Generic input for update options\ninput UpdateOptionsInput {\n  # Set to `true` to replace existing contents rather than doing a shallow merge (default)\n  replace: Boolean = false\n  # Expected current version of the document, mutation fails if there is a mismatch\n  version: CeramicCommitID\n}\n\n# High-level input type\ninput UpdatePostInput {\n  # ID of the document to update\n  id: ID!\n  content: PartialPostInput!\n  options: UpdateOptionsInput\n  clientMutationId: String\n}\n\ntype Mutation {\n  updatePost(input: UpdatePostInput!): UpdatePostPayload\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},53:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>a});var i=t(79);const s={},o=i.createContext(s);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);
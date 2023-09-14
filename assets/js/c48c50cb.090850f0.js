"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1121],{4852:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var a=n(9231);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=i,h=m["".concat(d,".").concat(u)]||m[u]||c[u]||o;return n?a.createElement(h,r(r({ref:t},s),{},{components:n})):a.createElement(h,r({ref:t},s))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[m]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},904:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(328),i=(n(9231),n(4852));const o={},r="Supported directives",l={unversionedId:"api/sdl/directives",id:"version-0.4.x/api/sdl/directives",title:"Supported directives",description:"Directives provide extra metadata when declaring scalars, lists and shapes.",source:"@site/versioned_docs/version-0.4.x/api/sdl/directives.mdx",sourceDirName:"api/sdl",slug:"/api/sdl/directives",permalink:"/docs/0.4.x/api/sdl/directives",draft:!1,tags:[],version:"0.4.x",frontMatter:{},sidebar:"api",previous:{title:"Supported scalars",permalink:"/docs/0.4.x/api/sdl/scalars"}},d={},p=[{value:"Model identification",id:"model-identification",level:2},{value:"<code>@createModel</code>",id:"createmodel",level:3},{value:"<code>@loadModel</code>",id:"loadmodel",level:3},{value:"Type validation",id:"type-validation",level:2},{value:"<code>@int</code>",id:"int",level:3},{value:"<code>@float</code>",id:"float",level:3},{value:"<code>@string</code>",id:"string",level:3},{value:"<code>@list</code>",id:"list",level:3},{value:"Relations",id:"relations",level:2},{value:"<code>@accountReference</code>",id:"accountreference",level:3},{value:"<code>@documentReference</code>",id:"documentreference",level:3},{value:"Views",id:"views",level:2},{value:"Document metadata views",id:"document-metadata-views",level:2},{value:"<code>@documentAccount</code>",id:"documentaccount",level:3},{value:"<code>@documentVersion</code>",id:"documentversion",level:3},{value:"Relation views",id:"relation-views",level:2},{value:"<code>@relationDocument</code>",id:"relationdocument",level:3},{value:"<code>@relationFrom</code>",id:"relationfrom",level:3},{value:"<code>@relationCountFrom</code>",id:"relationcountfrom",level:3}],s={toc:p},m="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"supported-directives"},"Supported directives"),(0,i.kt)("p",null,"Directives provide extra metadata when declaring scalars, lists and shapes."),(0,i.kt)("h2",{id:"model-identification"},"Model identification"),(0,i.kt)("h3",{id:"createmodel"},(0,i.kt)("inlineCode",{parentName:"h3"},"@createModel")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"@createModel")," directive applies to shapes, indicating the shape needs to be\ncreated as a Model. A Composite must contain at least one Model to be valid,\notherwise there would be nothing to interact with."),(0,i.kt)("p",null,"When using the ",(0,i.kt)("inlineCode",{parentName:"p"},"@createModel")," directive, two parameters must be provided:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"accountRelation"),": the type of relation between documents created using the\nModel and the account controlling the document, which can be ",(0,i.kt)("inlineCode",{parentName:"li"},"SINGLE")," for a\nsingle document of the given Model (for example profile information), or\n",(0,i.kt)("inlineCode",{parentName:"li"},"LIST")," for a potentially infinite list of documents."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"description"),": a string describing the Model, to help with discovery.")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},'type Post @createModel(accountRelation: LIST, description: "A simple text post") {\n  author: DID! @documentAccount\n  title: String! @string(minLength: 10, maxLength: 100)\n  text: String! @string(maxLength: 500)\n}\n')),(0,i.kt)("h3",{id:"loadmodel"},(0,i.kt)("inlineCode",{parentName:"h3"},"@loadModel")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"@loadModel")," directive can be used to identify pre-existing models and use\nthem in a schema, by providing the model stream ID with the ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," argument of the\ndirective."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"When loading models, it is ",(0,i.kt)("strong",{parentName:"p"},"not possible")," to add extra content fields, but it\nis possible to add extra ",(0,i.kt)("a",{parentName:"p",href:"#views"},"views"),"."),(0,i.kt)("p",{parentName:"admonition"},"The GraphQL parser used by schemas does not allow empty types to be created. If\nneeded, an ",(0,i.kt)("inlineCode",{parentName:"p"},"id: ID")," field can be added, as shown in the examples below.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},'# \u274c the following declaration will NOT work:\ntype MyModel @loadModel(id: "<existing model stream ID>") {}\n\n# \u2705 the following declaration will work:\ntype MyModel @loadModel(id: "<existing model stream ID>") {\n  id: ID\n}\n\n# \u2705 the following declaration will also work:\ntype MyModel @loadModel(id: "<existing model stream ID>") {\n  owner: DID! @documentAccount\n}\n')),(0,i.kt)("h2",{id:"type-validation"},"Type validation"),(0,i.kt)("p",null,"The following directives provide validation information on primitive scalars and\nlists:"),(0,i.kt)("h3",{id:"int"},(0,i.kt)("inlineCode",{parentName:"h3"},"@int")),(0,i.kt)("p",null,"Defines the optional ",(0,i.kt)("inlineCode",{parentName:"p"},"max: Int")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"min: Int")," value for\n",(0,i.kt)("a",{parentName:"p",href:"/docs/0.4.x/api/sdl/scalars#int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")," scalars"),"."),(0,i.kt)("h3",{id:"float"},(0,i.kt)("inlineCode",{parentName:"h3"},"@float")),(0,i.kt)("p",null,"Defines the optional ",(0,i.kt)("inlineCode",{parentName:"p"},"max: Float")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"min: Float")," value for\n",(0,i.kt)("a",{parentName:"p",href:"/docs/0.4.x/api/sdl/scalars#float"},(0,i.kt)("inlineCode",{parentName:"a"},"Float")," scalars"),"."),(0,i.kt)("h3",{id:"string"},(0,i.kt)("inlineCode",{parentName:"h3"},"@string")),(0,i.kt)("p",null,"Defines the required ",(0,i.kt)("inlineCode",{parentName:"p"},"maxLength: Int")," and optional ",(0,i.kt)("inlineCode",{parentName:"p"},"minLength: Int")," value for\n",(0,i.kt)("a",{parentName:"p",href:"/docs/0.4.x/api/sdl/scalars#string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")," scalars")," and scalars extending ",(0,i.kt)("inlineCode",{parentName:"p"},"String"),"."),(0,i.kt)("h3",{id:"list"},(0,i.kt)("inlineCode",{parentName:"h3"},"@list")),(0,i.kt)("p",null,"Defines the required ",(0,i.kt)("inlineCode",{parentName:"p"},"maxLength: Int")," and optional ",(0,i.kt)("inlineCode",{parentName:"p"},"minLength: Int")," numbers of\nitems in a list."),(0,i.kt)("h2",{id:"relations"},"Relations"),(0,i.kt)("p",null,"Relations support can be added on individual fields by specifying the type of\nreference the field can contain, using the following directives:"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Relation directives can only be set on fields ",(0,i.kt)("strong",{parentName:"p"},"directly defined on a model"),",\nidentified using the ",(0,i.kt)("a",{parentName:"p",href:"#createmodel"},(0,i.kt)("inlineCode",{parentName:"a"},"@createModel"))," or\n",(0,i.kt)("a",{parentName:"p",href:"#loadmodel"},(0,i.kt)("inlineCode",{parentName:"a"},"@loadModel"))," directive.")),(0,i.kt)("h3",{id:"accountreference"},(0,i.kt)("inlineCode",{parentName:"h3"},"@accountReference")),(0,i.kt)("p",null,"Defines relation to an account, using a ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.4.x/api/sdl/scalars#did"},(0,i.kt)("inlineCode",{parentName:"a"},"DID")," scalar"),"."),(0,i.kt)("p",null,"Example: ",(0,i.kt)("inlineCode",{parentName:"p"},"recipient: DID! @accountReference"),"."),(0,i.kt)("h3",{id:"documentreference"},(0,i.kt)("inlineCode",{parentName:"h3"},"@documentReference")),(0,i.kt)("p",null,"Defines a relation to a document, using a\n",(0,i.kt)("a",{parentName:"p",href:"/docs/0.4.x/api/sdl/scalars#streamid"},(0,i.kt)("inlineCode",{parentName:"a"},"StreamID")," scalar")," and a ",(0,i.kt)("inlineCode",{parentName:"p"},"model")," argument containing the\nname of a model added in the schema using the ",(0,i.kt)("a",{parentName:"p",href:"#loadmodel"},(0,i.kt)("inlineCode",{parentName:"a"},"@loadModel")),"\ndirective."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql",metastring:"{2,6}","{2,6}":!0},'type Post @loadModel(id: "<Post model stream ID>") {\n  id: ID!\n}\n\ntype Comment @createModel(accountRelation: LIST, description: "A comment on a Post") {\n  postID: StreamID! @documentReference(model: "Post")\n  text: String! @string(maxLength: 500)\n}\n')),(0,i.kt)("h2",{id:"views"},"Views"),(0,i.kt)("p",null,"View directives represent read-only fields that are not stored in the contents\nof the stream, but in its ",(0,i.kt)("a",{parentName:"p",href:"#document-metadata-views"},"metadata")," or used to access\n",(0,i.kt)("a",{parentName:"p",href:"#relation-views"},"relations"),"."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"View directives can only be set on fields ",(0,i.kt)("strong",{parentName:"p"},"directly defined on a model"),",\nidentified using the ",(0,i.kt)("a",{parentName:"p",href:"#createmodel"},(0,i.kt)("inlineCode",{parentName:"a"},"@createModel"))," or\n",(0,i.kt)("a",{parentName:"p",href:"#loadmodel"},(0,i.kt)("inlineCode",{parentName:"a"},"@loadModel"))," directive.")),(0,i.kt)("h2",{id:"document-metadata-views"},"Document metadata views"),(0,i.kt)("h3",{id:"documentaccount"},(0,i.kt)("inlineCode",{parentName:"h3"},"@documentAccount")),(0,i.kt)("p",null,"Defines a field as being a view to the account controlling the document, using\nthe ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.4.x/api/sdl/scalars#did"},(0,i.kt)("inlineCode",{parentName:"a"},"DID")," scalar type"),"."),(0,i.kt)("p",null,"Example: ",(0,i.kt)("inlineCode",{parentName:"p"},"author: DID! @documentAccount"),"."),(0,i.kt)("h3",{id:"documentversion"},(0,i.kt)("inlineCode",{parentName:"h3"},"@documentVersion")),(0,i.kt)("p",null,"Defines a field as being a view to the current version of the document, using\nthe ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.4.x/api/sdl/scalars#commitid"},(0,i.kt)("inlineCode",{parentName:"a"},"CommitID")," scalar type"),"."),(0,i.kt)("p",null,"Example: ",(0,i.kt)("inlineCode",{parentName:"p"},"version: CommitID! @documentVersion"),"."),(0,i.kt)("h2",{id:"relation-views"},"Relation views"),(0,i.kt)("h3",{id:"relationdocument"},(0,i.kt)("inlineCode",{parentName:"h3"},"@relationDocument")),(0,i.kt)("p",null,"Defines a field representing another document in the graph, that have its stream\nID stored in another field of the current document, using a model identified by\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"model")," argument of the directive."),(0,i.kt)("p",null,"Example where ",(0,i.kt)("inlineCode",{parentName:"p"},"post")," fields allows to access the post document the comment is\nmade on, based on the ",(0,i.kt)("inlineCode",{parentName:"p"},"postID")," value stored in the comment document:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql",metastring:"{6,7}","{6,7}":!0},'type Post @loadModel(id: "<Post model stream ID>") {\n  id: ID!\n}\n\ntype Comment @createModel(accountRelation: LIST, description: "A comment on a Post") {\n  postID: StreamID! @documentReference(model: "Post")\n  post: Post! @relationDocument(property: "postID")\n  text: String! @string(maxLength: 500)\n}\n')),(0,i.kt)("h3",{id:"relationfrom"},(0,i.kt)("inlineCode",{parentName:"h3"},"@relationFrom")),(0,i.kt)("p",null,"Defines a field representing an inverse relation of documents pointing to the\ncurrent document for a given ",(0,i.kt)("inlineCode",{parentName:"p"},"model")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"property")," identified by the arguments\nof the directive."),(0,i.kt)("p",null,"Example where a ",(0,i.kt)("inlineCode",{parentName:"p"},"comments")," view is added to an existing Post model, using the\nComment model described in the\n",(0,i.kt)("a",{parentName:"p",href:"#relationdocument"},(0,i.kt)("inlineCode",{parentName:"a"},"@relationDocument")," directive example"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql",metastring:"{6}","{6}":!0},'type Comment @loadModel(id: "<Comment model stream ID>") {\n  id: ID!\n}\n\ntype Post @loadModel(id: "<Post model stream ID>") {\n  comments: [Comment] @relationFrom(model: "Comment", property: "postID")\n}\n')),(0,i.kt)("h3",{id:"relationcountfrom"},(0,i.kt)("inlineCode",{parentName:"h3"},"@relationCountFrom")),(0,i.kt)("p",null,"Defines a field representing the number of documents pointing to the current\ndocument for a given ",(0,i.kt)("inlineCode",{parentName:"p"},"model")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"property")," identified by the arguments of the\ndirective."),(0,i.kt)("p",null,"Example where a ",(0,i.kt)("inlineCode",{parentName:"p"},"commentsCount")," view is added to an existing Post model, using\nthe Comment model described in the\n",(0,i.kt)("a",{parentName:"p",href:"#relationdocument"},(0,i.kt)("inlineCode",{parentName:"a"},"@relationDocument")," directive example"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql",metastring:"{6}","{6}":!0},'type Comment @loadModel(id: "<Comment model stream ID>") {\n  id: ID!\n}\n\ntype Post @loadModel(id: "<Post model stream ID>") {\n  commentsCount: Int! @relationCountFrom(model: "Comment", property: "postID")\n}\n')))}c.isMDXComponent=!0}}]);
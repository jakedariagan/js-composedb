"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9641],{54852:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(49231);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=i,h=u["".concat(o,".").concat(m)]||u[m]||c[m]||r;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:i,l[1]=s;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},35242:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=n(35664),i=(n(49231),n(54852));const r={},l="Schemas",s={unversionedId:"guides/data-modeling/schemas",id:"version-0.5.x/guides/data-modeling/schemas",title:"Schemas",description:"Learn how to write high-quality GraphQL schemas for your models.",source:"@site/versioned_docs/version-0.5.x/guides/data-modeling/schemas.mdx",sourceDirName:"guides/data-modeling",slug:"/guides/data-modeling/schemas",permalink:"/docs/0.5.x/guides/data-modeling/schemas",draft:!1,tags:[],version:"0.5.x",frontMatter:{},sidebar:"guides",previous:{title:"Introduction to Modeling",permalink:"/docs/0.5.x/guides/data-modeling/introduction-to-modeling"},next:{title:"Relations",permalink:"/docs/0.5.x/guides/data-modeling/relations"}},o={},d=[{value:"Overview",id:"overview",level:2},{value:"Concepts",id:"concepts",level:2},{value:"Shapes, Fields, Scalars",id:"shapes-fields-scalars",level:3},{value:"Enums",id:"enums",level:3},{value:"Special Types",id:"special-types",level:3},{value:"Embedded Shapes",id:"embedded-shapes",level:3},{value:"Directives",id:"directives",level:3},{value:"Type validation directives",id:"type-validation-directives",level:4},{value:"Directives for creating indices",id:"directives-for-creating-indices",level:4},{value:"Next Steps",id:"next-steps",level:2}],p={toc:d},u="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"schemas"},"Schemas"),(0,i.kt)("p",null,"Learn how to write high-quality GraphQL schemas for your models."),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"ComposeDB models are written in GraphQL using GraphQL Schema Definition Language ",(0,i.kt)("a",{parentName:"p",href:"https://graphql.org/learn/schema/"},"(SDL)"),". Your schema defines a collection of object types and the relationships between them. Those types will have scalars (values), shapes (key-value mappings), and\xa0lists to describe the structure and validation rules for the model, and use\xa0directives for other metadata information."),(0,i.kt)("p",null,"We currently support a subset of SDL\u2019s scalars and directives, but are continually adding more, see the ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.5.x/api/sdl/scalars"},"reference")," for a complete list."),(0,i.kt)("h2",{id:"concepts"},"Concepts"),(0,i.kt)("p",null,"Learn about key concepts for the GraphQL Schema Definition Language."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"On this page, we provide basic info for you to begin writing GraphQL data models. For more complete information on the GraphQL Schema Definition Language, visit the ",(0,i.kt)("a",{parentName:"p",href:"https://graphql.org/learn/schema/"},"GraphQL website"),".")),(0,i.kt)("h3",{id:"shapes-fields-scalars"},"Shapes, Fields, Scalars"),(0,i.kt)("p",null,"The most basic component in a GraphQL schema is an object type, sometimes called a shape. It simply represents the shape of the data you want to query and its properties, consisting of fields (keys) and scalars (values)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type EducationModule {\n  module_name: String!\n  module_domain: String\n  number_of_topics_covered: Int!\n  learners_enrolled: [Learner!]!\n}\n")),(0,i.kt)("p",null,"Where:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"type")," defines a new object"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"EducationModule")," the name given to the object; queryable"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"module_name"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"module_domain"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"number_of_topics_covered")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"learners_enrolled")," are fields in the ",(0,i.kt)("inlineCode",{parentName:"li"},"EducationModule")," type; all fields are queryable"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"String!")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"Int!")," define the data type of the value. By adding ",(0,i.kt)("inlineCode",{parentName:"li"},"!")," to the end of the type declaration, we are telling GraphQL to always return a value when we query this field, which also means that when writing data through a mutation a value is required."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"[Learner!]!")," defines the data type of the value, but in this case the data type is an array of another type, ",(0,i.kt)("inlineCode",{parentName:"li"},"Learner"),", which is not depicted above. It is required since it includes the ",(0,i.kt)("inlineCode",{parentName:"li"},"!"),".")),(0,i.kt)("h3",{id:"enums"},"Enums"),(0,i.kt)("p",null,"Enums represent the type of a single string value in the schema from a set of\naccepted values, for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"enum NoteStatus {\n  DEFAULT\n  IMPORTANT\n  ARCHIVE\n}\n")),(0,i.kt)("h3",{id:"special-types"},"Special Types"),(0,i.kt)("p",null,"GraphQL reserves the use of two special type names, ",(0,i.kt)("inlineCode",{parentName:"p"},"query")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"mutation"),"."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Do not")," name any of your own custom types, which are the majority of the types you will work with, the same as these two special types."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"query")," type is used as the entry point when retrieving data using GraphQL"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mutation")," type is used as the entry point when writing or changing data using GraphQL")),(0,i.kt)("h3",{id:"embedded-shapes"},"Embedded Shapes"),(0,i.kt)("p",null,"Our first shape, ",(0,i.kt)("inlineCode",{parentName:"p"},"EducationModule"),", makes use of an embedded shape called ",(0,i.kt)("inlineCode",{parentName:"p"},"Learner"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type EducationModule {\n  module_name: String!\n  module_domain: String\n  number_of_topics_covered: Int!\n  learners_enrolled: [Learner!]!\n}\n\ntype Learner {\n  first_name: String!\n  last_name: String!\n  username: String!\n}\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Learner")," is not anything different from ",(0,i.kt)("inlineCode",{parentName:"p"},"EducationModule")," in terms of how it is defined. It does contain different fields, but it is just a GraphQL shape that can be used like any other shape."),(0,i.kt)("p",null,"\ud83d\udca1 For this to work, you will want to define both shapes inside the same GraphQL file when writing ComposeDB schemas. "),(0,i.kt)("h3",{id:"directives"},"Directives"),(0,i.kt)("p",null,"ComposeDB comes with ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.5.x/api/sdl/directives"},"a list of different directives")," that can be used to create or load data models, define type validation rules, and create indices\nfor specific fields which enables them to be used for document filtering and sorting. "),(0,i.kt)("h4",{id:"type-validation-directives"},"Type validation directives"),(0,i.kt)("p",null,"Directives are keywords that add validation rules to a scalar. Not all scalars need to have directives, though Strings are required to have a maxLength. Let\u2019s add directives to the two shapes used in this guide:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type EducationModule {\n    module_name: String! @string(maxLength: 50)\n    module_domain: String @string(minLength: 5, maxLength: 50)\n    number_of_topics_covered: Int! @int(min: 1, max: 100)\n    learners_enrolled: [Learner!]! @list(maxLength: 30)\n}\n\ntype Learner {\n    first_name: String! @string(minLength: 10, maxLength: 30)\n    last_name: String! @string(maxLength: 30) \n    username: String! @string(maxLength: 32)\n}\n")),(0,i.kt)("p",null,"Where:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Each directive is declared using the ",(0,i.kt)("inlineCode",{parentName:"li"},"@")," symbol"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@string")," adds validation rules to values that are strings, e.g. minimum and maximum length"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@int")," adds validation rules to values that are integers, e.g. minimum and maximum values"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@list")," adds validation rules to an array, e.g. maximum length")),(0,i.kt)("h4",{id:"directives-for-creating-indices"},"Directives for creating indices"),(0,i.kt)("p",null,"To be able to filter the query results by a specific field and sort them in a specific order,\nyou are required to create indices for corresponding fields. In ComposeDB indices work the\nsame way as in traditional databases - they speed up the querying processes. You can create indices\nfor specific fields using ",(0,i.kt)("inlineCode",{parentName:"p"},"@createIndex")," directive as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},'type Posts @createModel(accountRelation: LIST, description: "A simple Post")\n@createIndex(fields: [{path: "title"}])\n@createIndex(fields: [{path: "tag"}])\n@createIndex(fields: [{path: "created_at"}])\n{\n    title: String! @string(minLength: 1, maxLength: 100)\n    body: String! @string(minLength: 1, maxLength: 100)\n    tag: String! @string(minLength: 1, maxLength: 100)\n    ranking: Int!\n    created_at: DateTime!\n}\n')),(0,i.kt)("p",null,"The example above will create indices for the fields ",(0,i.kt)("inlineCode",{parentName:"p"},"title"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"tag")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"created_at"),", and will enable you to filter the documents based on the values in these fields as well as sort the results in a specified order. "),(0,i.kt)("p",null,"You can create indices for individual or multiple fields in your data models."),(0,i.kt)("h2",{id:"next-steps"},"Next Steps"),(0,i.kt)("p",null,"Learn how to add ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.5.x/guides/data-modeling/relations"},(0,i.kt)("strong",{parentName:"a"},"Relations"))," to your schema ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.5.x/guides/data-modeling/relations"},(0,i.kt)("strong",{parentName:"a"},"\u2192"))))}c.isMDXComponent=!0}}]);
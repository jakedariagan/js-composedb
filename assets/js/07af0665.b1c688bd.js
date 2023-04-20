"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8682],{4852:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(9231);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(n),c=r,h=u["".concat(s,".").concat(c)]||u[c]||m[c]||i;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},511:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(5675),r=(n(9231),n(4852));const i={},l="Schemas",o={unversionedId:"guides/data-modeling/schemas",id:"version-0.4.x/guides/data-modeling/schemas",title:"Schemas",description:"Learn how to write high-quality GraphQL schemas for your models.",source:"@site/versioned_docs/version-0.4.x/guides/data-modeling/schemas.mdx",sourceDirName:"guides/data-modeling",slug:"/guides/data-modeling/schemas",permalink:"/docs/0.4.x/guides/data-modeling/schemas",draft:!1,tags:[],version:"0.4.x",frontMatter:{},sidebar:"guides",previous:{title:"Introduction to Modeling",permalink:"/docs/0.4.x/guides/data-modeling/introduction-to-modeling"},next:{title:"Relations",permalink:"/docs/0.4.x/guides/data-modeling/relations"}},s={},d=[{value:"Overview",id:"overview",level:2},{value:"Concepts",id:"concepts",level:2},{value:"Shapes, Fields, Scalars",id:"shapes-fields-scalars",level:3},{value:"Enums",id:"enums",level:3},{value:"Special Types",id:"special-types",level:3},{value:"Embedded Shapes",id:"embedded-shapes",level:3},{value:"Directives",id:"directives",level:3},{value:"Next Steps",id:"next-steps",level:2}],p={toc:d},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"schemas"},"Schemas"),(0,r.kt)("p",null,"Learn how to write high-quality GraphQL schemas for your models."),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"ComposeDB models are written in GraphQL using GraphQL Schema Definition Language ",(0,r.kt)("a",{parentName:"p",href:"https://graphql.org/learn/schema/"},"(SDL)"),". Your schema defines a collection of object types and the relationships between them. Those types will have scalars (values), shapes (key-value mappings), and\xa0lists to describe the structure and validation rules for the model, and use\xa0directives for other metadata information."),(0,r.kt)("p",null,"We currently support a subset of SDL\u2019s scalars and directives, but are continually adding more, see the ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.4.x/api/sdl/scalars"},"reference")," for a complete list."),(0,r.kt)("h2",{id:"concepts"},"Concepts"),(0,r.kt)("p",null,"Learn about key concepts for the GraphQL Schema Definition Language."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"On this page, we provide basic info for you to begin writing GraphQL data models. For more complete information on the GraphQL Schema Definition Language, visit the ",(0,r.kt)("a",{parentName:"p",href:"https://graphql.org/learn/schema/"},"GraphQL website"),".")),(0,r.kt)("h3",{id:"shapes-fields-scalars"},"Shapes, Fields, Scalars"),(0,r.kt)("p",null,"The most basic component in a GraphQL schema is an object type, sometimes called a shape. It simply represents the shape of the data you want to query and its properties, consisting of fields (keys) and scalars (values)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type EducationModule {\n  module_name: String!\n  module_domain: String\n  number_of_topics_covered: Int!\n  learners_enrolled: [Learner!]!\n}\n")),(0,r.kt)("p",null,"Where:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"type")," defines a new object"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"EducationModule")," the name given to the object; queryable"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"module_name"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"module_domain"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"number_of_topics_covered")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"learners_enrolled")," are fields in the ",(0,r.kt)("inlineCode",{parentName:"li"},"EducationModule")," type; all fields are queryable"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"String!")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Int!")," define the data type of the value. By adding ",(0,r.kt)("inlineCode",{parentName:"li"},"!")," to the end of the type declaration, we are telling GraphQL to always return a value when we query this field, which also means that when writing data through a mutation a value is required."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[Learner!]!")," defines the data type of the value, but in this case the data type is an array of another type, ",(0,r.kt)("inlineCode",{parentName:"li"},"Learner"),", which is not depicted above. It is required since it includes the ",(0,r.kt)("inlineCode",{parentName:"li"},"!"),".")),(0,r.kt)("h3",{id:"enums"},"Enums"),(0,r.kt)("p",null,"Enums represent the type of a single string value in the schema from a set of\naccepted values, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"enum NoteStatus {\n  DEFAULT\n  IMPORTANT\n  ARCHIVE\n}\n")),(0,r.kt)("h3",{id:"special-types"},"Special Types"),(0,r.kt)("p",null,"GraphQL reserves the use of two special type names, ",(0,r.kt)("inlineCode",{parentName:"p"},"query")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"mutation"),"."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Do not")," name any of your own custom types, which are the majority of the types you will work with, the same as these two special types."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"query")," type is used as the entry point when retrieving data using GraphQL"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mutation")," type is used as the entry point when writing or changing data using GraphQL")),(0,r.kt)("h3",{id:"embedded-shapes"},"Embedded Shapes"),(0,r.kt)("p",null,"Our first shape, ",(0,r.kt)("inlineCode",{parentName:"p"},"EducationModule"),", makes use of an embedded shape called ",(0,r.kt)("inlineCode",{parentName:"p"},"Learner"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type EducationModule {\n  module_name: String!\n  module_domain: String\n  number_of_topics_covered: Int!\n  learners_enrolled: [Learner!]!\n}\n\ntype Learner {\n  first_name: String!\n  last_name: String!\n  username: String!\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Learner")," is not anything different from ",(0,r.kt)("inlineCode",{parentName:"p"},"EducationModule")," in terms of how it is defined. It does contain different fields, but it is just a GraphQL shape that can be used like any other shape."),(0,r.kt)("p",null,"\ud83d\udca1 For this to work, you will want to define both shapes inside the same GraphQL file when writing ComposeDB schemas. "),(0,r.kt)("h3",{id:"directives"},"Directives"),(0,r.kt)("p",null,"Directives are keywords that help add validation rules to a scalar. Not all scalars need to have directives, though Strings are required to have a maxLength. Let\u2019s add directives to the two shapes used in this guide:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type EducationModule {\n    module_name: String! @string(maxLength: 50)\n    module_domain: String @string(minLength: 5, maxLength: 50)\n    number_of_topics_covered: Int! @int(min: 1, max: 100)\n    learners_enrolled: [Learner!]! @list(maxLength: 30)\n}\n\ntype Learner {\n    first_name: String! @string(minLength: 10, maxLength: 30)\n    last_name: String! @string(maxLength: 30) \n    username: String! @string(maxLength: 32)\n}\n")),(0,r.kt)("p",null,"Where:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Each directive is declared using the ",(0,r.kt)("inlineCode",{parentName:"li"},"@")," symbol"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@string")," adds validation rules to values that are strings, e.g. minimum and maximum length"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@int")," adds validation rules to values that are integers, e.g. minimum and maximum values"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@list")," adds validation rules to an array, e.g. maximum length")),(0,r.kt)("h2",{id:"next-steps"},"Next Steps"),(0,r.kt)("p",null,"Learn how to add ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.4.x/guides/data-modeling/relations"},(0,r.kt)("strong",{parentName:"a"},"Relations"))," to your schema ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.4.x/guides/data-modeling/relations"},(0,r.kt)("strong",{parentName:"a"},"\u2192"))))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8790],{4852:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(9231);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(a),m=i,u=c["".concat(d,".").concat(m)]||c[m]||h[m]||r;return a?n.createElement(u,l(l({ref:t},p),{},{components:a})):n.createElement(u,l({ref:t},p))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[c]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4129:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var n=a(328),i=(a(9231),a(4852));const r={},l="Supported scalars",o={unversionedId:"api/sdl/scalars",id:"version-0.5.x/api/sdl/scalars",title:"Supported scalars",description:"Scalars represent the leaf values in the graph, either as part of key-value",source:"@site/versioned_docs/version-0.5.x/api/sdl/scalars.mdx",sourceDirName:"api/sdl",slug:"/api/sdl/scalars",permalink:"/docs/0.5.x/api/sdl/scalars",draft:!1,tags:[],version:"0.5.x",frontMatter:{},sidebar:"api",previous:{title:"CLI: graphql:* commands",permalink:"/docs/0.5.x/api/commands/cli.graphql"},next:{title:"Supported directives",permalink:"/docs/0.5.x/api/sdl/directives"}},d={},s=[{value:"Primitive types",id:"primitive-types",level:2},{value:"<code>Boolean</code>",id:"boolean",level:3},{value:"<code>Int</code>",id:"int",level:3},{value:"<code>Float</code>",id:"float",level:3},{value:"<code>String</code>",id:"string",level:3},{value:"Identifiers",id:"identifiers",level:2},{value:"<code>ID</code>",id:"id",level:3},{value:"<code>DID</code>",id:"did",level:3},{value:"<code>StreamID</code>",id:"streamid",level:3},{value:"<code>CommitID</code>",id:"commitid",level:3},{value:"<code>CID</code>",id:"cid",level:3},{value:"<code>ChainID</code>",id:"chainid",level:3},{value:"<code>AccountID</code>",id:"accountid",level:3},{value:"<code>URI</code>",id:"uri",level:3},{value:"Date and time",id:"date-and-time",level:2},{value:"<code>Date</code>",id:"date",level:3},{value:"<code>DateTime</code>",id:"datetime",level:3},{value:"<code>Time</code>",id:"time",level:3},{value:"<code>LocalDate</code>",id:"localdate",level:3},{value:"<code>LocalTime</code>",id:"localtime",level:3},{value:"<code>TimeZone</code>",id:"timezone",level:3},{value:"<code>UTCOffset</code>",id:"utcoffset",level:3},{value:"<code>Duration</code>",id:"duration",level:3},{value:"Geography and internationalization",id:"geography-and-internationalization",level:2},{value:"<code>Latitude</code>",id:"latitude",level:3},{value:"<code>Longitude</code>",id:"longitude",level:3},{value:"<code>CountryCode</code>",id:"countrycode",level:3},{value:"<code>Locale</code>",id:"locale",level:3}],p={toc:s},c="wrapper";function h(e){let{components:t,...a}=e;return(0,i.kt)(c,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"supported-scalars"},"Supported scalars"),(0,i.kt)("p",null,"Scalars represent the leaf values in the graph, either as part of key-value\nproperties in shapes, or value of items in lists. You can learn more about\nscalars in the\n",(0,i.kt)("a",{parentName:"p",href:"https://graphql.org/learn/schema/#scalar-types"},"GraphQL specification"),"."),(0,i.kt)("h2",{id:"primitive-types"},"Primitive types"),(0,i.kt)("p",null,"The following scalars are part of the\n",(0,i.kt)("a",{parentName:"p",href:"https://graphql.org/learn/schema/#scalar-types"},"GraphQL specification"),"."),(0,i.kt)("h3",{id:"boolean"},(0,i.kt)("inlineCode",{parentName:"h3"},"Boolean")),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," value."),(0,i.kt)("h3",{id:"int"},(0,i.kt)("inlineCode",{parentName:"h3"},"Int")),(0,i.kt)("p",null,"A signed 32-bit integer."),(0,i.kt)("p",null,"A range of valid values can be defined using\n",(0,i.kt)("a",{parentName:"p",href:"/docs/0.5.x/api/sdl/directives#int"},"the ",(0,i.kt)("inlineCode",{parentName:"a"},"@int")," directive"),"."),(0,i.kt)("h3",{id:"float"},(0,i.kt)("inlineCode",{parentName:"h3"},"Float")),(0,i.kt)("p",null,"A signed double-precision floating-point value."),(0,i.kt)("p",null,"A range of valid values can be defined using\n",(0,i.kt)("a",{parentName:"p",href:"/docs/0.5.x/api/sdl/directives#float"},"the ",(0,i.kt)("inlineCode",{parentName:"a"},"@float")," directive"),"."),(0,i.kt)("h3",{id:"string"},(0,i.kt)("inlineCode",{parentName:"h3"},"String")),(0,i.kt)("p",null,"A UTF-8 character sequence."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.5.x/api/sdl/directives#string"},(0,i.kt)("inlineCode",{parentName:"a"},"@string")," directive")," ",(0,i.kt)("strong",{parentName:"p"},"must be used")," along with\n",(0,i.kt)("inlineCode",{parentName:"p"},"String")," scalars to define the ",(0,i.kt)("inlineCode",{parentName:"p"},"maxLength")," of the string.")),(0,i.kt)("h2",{id:"identifiers"},"Identifiers"),(0,i.kt)("p",null,"The following scalars represent unique identifiers in the graph. In ComposedDB,\nthey are all stored as string values."),(0,i.kt)("h3",{id:"id"},(0,i.kt)("inlineCode",{parentName:"h3"},"ID")),(0,i.kt)("p",null,"A Node identifier used by GraphQL."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"By default, IDs are configured with a ",(0,i.kt)("inlineCode",{parentName:"p"},"maxLength")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"100"),". The\n",(0,i.kt)("a",{parentName:"p",href:"/docs/0.5.x/api/sdl/directives#string"},(0,i.kt)("inlineCode",{parentName:"a"},"@string")," directive")," can be used along with ",(0,i.kt)("inlineCode",{parentName:"p"},"ID"),"\nscalars to define a different ",(0,i.kt)("inlineCode",{parentName:"p"},"maxLength")," as needed.")),(0,i.kt)("h3",{id:"did"},(0,i.kt)("inlineCode",{parentName:"h3"},"DID")),(0,i.kt)("p",null,"A Decentralized Identifier, representing an actor able to create and mutate\nDocuments in the graph, using\n",(0,i.kt)("a",{parentName:"p",href:"https://www.graphql-scalars.dev/docs/scalars/did"},"GraphQL Scalars"),"."),(0,i.kt)("h3",{id:"streamid"},(0,i.kt)("inlineCode",{parentName:"h3"},"StreamID")),(0,i.kt)("p",null,"Identifies a specific Stream in the Ceramic network, following the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ceramicnetwork/CIP/blob/main/CIPs/CIP-59/CIP-59.md#streamid"},"StreamID specification"),"."),(0,i.kt)("h3",{id:"commitid"},(0,i.kt)("inlineCode",{parentName:"h3"},"CommitID")),(0,i.kt)("p",null,"Identifies a specific version of a Stream in the Ceramic network, following the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ceramicnetwork/CIP/blob/main/CIPs/CIP-59/CIP-59.md#commitid"},"CommitID specification"),"."),(0,i.kt)("h3",{id:"cid"},(0,i.kt)("inlineCode",{parentName:"h3"},"CID")),(0,i.kt)("p",null,"A Content Identifier, as used by\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.ipfs.tech/concepts/content-addressing/#what-is-a-cid"},"IPFS"),"."),(0,i.kt)("h3",{id:"chainid"},(0,i.kt)("inlineCode",{parentName:"h3"},"ChainID")),(0,i.kt)("p",null,"A Chain Agnostic Chain Identifier, as\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ChainAgnostic/CAIPs/blob/master/CAIPs/caip-2.md"},"specified by Chain Agnostic CAIP-2"),"."),(0,i.kt)("h3",{id:"accountid"},(0,i.kt)("inlineCode",{parentName:"h3"},"AccountID")),(0,i.kt)("p",null,"A Chain Agnostic Account Identifier, as\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ChainAgnostic/CAIPs/blob/master/CAIPs/caip-10.md"},"specified by Chain Agnostic CAIP-10"),"."),(0,i.kt)("h3",{id:"uri"},(0,i.kt)("inlineCode",{parentName:"h3"},"URI")),(0,i.kt)("p",null,"RFC 3986 compliant URI string, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"https://ceramic.network"),"."),(0,i.kt)("h2",{id:"date-and-time"},"Date and time"),(0,i.kt)("p",null,"The following scalars can be used to store date and time values using standard\nrepresentations."),(0,i.kt)("h3",{id:"date"},(0,i.kt)("inlineCode",{parentName:"h3"},"Date")),(0,i.kt)("p",null,"RFC 3339 compliant date string without time information, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"2007-12-03"),",\nusing ",(0,i.kt)("a",{parentName:"p",href:"https://www.graphql-scalars.dev/docs/scalars/date"},"GraphQL Scalars"),"."),(0,i.kt)("h3",{id:"datetime"},(0,i.kt)("inlineCode",{parentName:"h3"},"DateTime")),(0,i.kt)("p",null,"A date-time string at UTC, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"2007-12-03T10:15:30Z"),", using\n",(0,i.kt)("a",{parentName:"p",href:"https://www.graphql-scalars.dev/docs/scalars/date-time"},"GraphQL Scalars"),"."),(0,i.kt)("h3",{id:"time"},(0,i.kt)("inlineCode",{parentName:"h3"},"Time")),(0,i.kt)("p",null,"A time string at UTC, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"10:15:30Z"),", using\n",(0,i.kt)("a",{parentName:"p",href:"https://www.graphql-scalars.dev/docs/scalars/time"},"GraphQL Scalars"),"."),(0,i.kt)("h3",{id:"localdate"},(0,i.kt)("inlineCode",{parentName:"h3"},"LocalDate")),(0,i.kt)("p",null,"A local date string (with no associated timezone) in ",(0,i.kt)("inlineCode",{parentName:"p"},"YYYY-MM-DD")," format, such\nas ",(0,i.kt)("inlineCode",{parentName:"p"},"2007-12-03"),", using\n",(0,i.kt)("a",{parentName:"p",href:"https://www.graphql-scalars.dev/docs/scalars/local-date"},"GraphQL Scalars"),"."),(0,i.kt)("h3",{id:"localtime"},(0,i.kt)("inlineCode",{parentName:"h3"},"LocalTime")),(0,i.kt)("p",null,"A local time string (i.e., with no associated timezone) in 24-hr\n",(0,i.kt)("inlineCode",{parentName:"p"},"HH:mm[:ss[.SSS]]")," format, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"14:25"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"14:25:06")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"14:25:06.123"),", using\n",(0,i.kt)("a",{parentName:"p",href:"https://www.graphql-scalars.dev/docs/scalars/local-time"},"GraphQL Scalars"),"."),(0,i.kt)("h3",{id:"timezone"},(0,i.kt)("inlineCode",{parentName:"h3"},"TimeZone")),(0,i.kt)("p",null,"Standard IANA time zone, using\n",(0,i.kt)("a",{parentName:"p",href:"https://the-guild.dev/graphql/scalars/docs/scalars/time-zone"},"GraphQL Scalars"),"."),(0,i.kt)("h3",{id:"utcoffset"},(0,i.kt)("inlineCode",{parentName:"h3"},"UTCOffset")),(0,i.kt)("p",null,"A string with format ",(0,i.kt)("inlineCode",{parentName:"p"},"\xb1hh: mm"),", using\n",(0,i.kt)("a",{parentName:"p",href:"https://www.graphql-scalars.dev/docs/scalars/utc-offset"},"GraphQL Scalars"),"."),(0,i.kt)("h3",{id:"duration"},(0,i.kt)("inlineCode",{parentName:"h3"},"Duration")),(0,i.kt)("p",null,"ISO 8601 duration string, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"P1W1DT13H23M34S"),", using\n",(0,i.kt)("a",{parentName:"p",href:"https://www.graphql-scalars.dev/docs/scalars/duration"},"GraphQL Scalars"),"."),(0,i.kt)("h2",{id:"geography-and-internationalization"},"Geography and internationalization"),(0,i.kt)("h3",{id:"latitude"},(0,i.kt)("inlineCode",{parentName:"h3"},"Latitude")),(0,i.kt)("p",null,"Decimal degrees latitude number, using\n",(0,i.kt)("a",{parentName:"p",href:"https://the-guild.dev/graphql/scalars/docs/scalars/latitude"},"GraphQL Scalars"),"."),(0,i.kt)("h3",{id:"longitude"},(0,i.kt)("inlineCode",{parentName:"h3"},"Longitude")),(0,i.kt)("p",null,"Decimal degrees longitude number, using\n",(0,i.kt)("a",{parentName:"p",href:"https://the-guild.dev/graphql/scalars/docs/scalars/longitude"},"GraphQL Scalars"),"."),(0,i.kt)("h3",{id:"countrycode"},(0,i.kt)("inlineCode",{parentName:"h3"},"CountryCode")),(0,i.kt)("p",null,"ISO 3166-1 alpha-2 country code string, using\n",(0,i.kt)("a",{parentName:"p",href:"https://the-guild.dev/graphql/scalars/docs/scalars/country-code"},"GraphQL Scalars"),"."),(0,i.kt)("h3",{id:"locale"},(0,i.kt)("inlineCode",{parentName:"h3"},"Locale")),(0,i.kt)("p",null,"RFC 5646 locale string, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"en-GB"),", using\n",(0,i.kt)("a",{parentName:"p",href:"https://the-guild.dev/graphql/scalars/docs/scalars/locale"},"GraphQL Scalars"),"."))}h.isMDXComponent=!0}}]);
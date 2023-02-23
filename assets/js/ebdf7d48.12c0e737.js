"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8358],{4852:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(9231);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8931:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(5675),i=(n(9231),n(4852));const o={},r="Mutations",l={unversionedId:"guides/data-interactions/mutations",id:"version-0.4.x/guides/data-interactions/mutations",title:"Mutations",description:"Create or update data on the network.",source:"@site/versioned_docs/version-0.4.x/guides/data-interactions/mutations.mdx",sourceDirName:"guides/data-interactions",slug:"/guides/data-interactions/mutations",permalink:"/docs/0.4.x/guides/data-interactions/mutations",draft:!1,tags:[],version:"0.4.x",frontMatter:{},sidebar:"guides",previous:{title:"Queries",permalink:"/docs/0.4.x/guides/data-interactions/queries"}},s={},p=[{value:"Enabling mutations",id:"enabling-mutations",level:2},{value:"Create data",id:"create-data",level:2},{value:"Update data",id:"update-data",level:2},{value:"Update Options",id:"update-options",level:3},{value:"Delete data",id:"delete-data",level:2},{value:"Next Steps",id:"next-steps",level:2}],d={toc:p},u="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"mutations"},"Mutations"),(0,i.kt)("p",null,"Create or update data on the network."),(0,i.kt)("h2",{id:"enabling-mutations"},"Enabling mutations"),(0,i.kt)("p",null,"To perform mutations, the Ceramic instance used by the ComposeDB client needs to be authenticated. This can be done by calling the\xa0",(0,i.kt)("a",{parentName:"p",href:"/docs/0.4.x/api/classes/client.ComposeClient#setdid"},(0,i.kt)("inlineCode",{parentName:"a"},"setDID"),"\xa0method")," within the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"ComposeClient")," instance using an authenticated\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"DID"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"compose.setDID(did)\n")),(0,i.kt)("h2",{id:"create-data"},"Create data"),(0,i.kt)("p",null,"Let\u2019s say your app uses a ",(0,i.kt)("inlineCode",{parentName:"p"},"Post")," model:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'type Post @createModel(accountRelation: LIST, description: "A simple text post") {\n  author: DID! @documentAccount\n  title: String! @string(minLength: 10, maxLength: 100)\n  text: String! @string(maxLength: 500)\n}\n')),(0,i.kt)("p",null,"Users will generate data as they interact with your app. Your app needs to perform mutations to write that data to the network. Here\u2019s a mutation query that creates a new post:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},'# Create post\n\nmutation CreateNewPost($i: CreatePostInput!){\n  createPost(input: $i){\n        document{\n            id\n            title\n      text\n    }\n  }\n}\n\n# Content for the post\n\n{\n  "i": {\n    "content": {\n      "title": "Getting started with ComposeDB"\n      "text": "A Post created using composites and GraphQL" \n    }\n  }\n}\n')),(0,i.kt)("p",null,"Where:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mutation"),": GraphQL keyword for creating a write operation."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CreateNewPost"),": custom name given to this mutation. This name should represent what the mutation is doing and can be anything you\u2019d like it to be."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"($i: CreatePostInput!)")," creates a variable named ",(0,i.kt)("inlineCode",{parentName:"li"},"i")," with the requirement that its value is of the type ",(0,i.kt)("inlineCode",{parentName:"li"},"CreatePostInput"),".  This type is automatically created for you as a part of the run-time composite.  Notice the ",(0,i.kt)("inlineCode",{parentName:"li"},"!"),", which informs us that this input is required."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"createPost")," corresponds to an automatically generated GraphQL binding that is part of the run-time representation of your composite. Then names of these bindings follow a naming convention ",(0,i.kt)("inlineCode",{parentName:"li"},"create<your-model-name>"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"(input: $i)")," is using the value provided for ",(0,i.kt)("inlineCode",{parentName:"li"},"$i")," as the input for the mutation.  This will be defined as a variable to this operation."),(0,i.kt)("li",{parentName:"ul"},"The final piece to this, ",(0,i.kt)("inlineCode",{parentName:"li"},"document{id,title,text}")," is defining the fields of the document we would like this mutation to create.  It\u2019s important to note that you need to include ",(0,i.kt)("inlineCode",{parentName:"li"},"id")," here in the mutation, but you will not need to include it in the query variables as it is automatically generated."),(0,i.kt)("li",{parentName:"ul"},"Variables: As you can see, ",(0,i.kt)("inlineCode",{parentName:"li"},"i")," contains ",(0,i.kt)("inlineCode",{parentName:"li"},"content")," that matches the fields in the above schema ",(0,i.kt)("inlineCode",{parentName:"li"},"title")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"text"),".  Both have the proper values supplied of a type ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),". This sets up the variables needed for the query.")),(0,i.kt)("h2",{id:"update-data"},"Update data"),(0,i.kt)("p",null,"Let\u2019s say a user wanted to modify the title of a previous post. Your app would need to perform a mutation to update that field in the post."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},'# Update post\n\nmutation UpdatePost($i: UpdatePostInput!) {\n    updatePost(input: $i) {\n        document {\n            id\n            title\n                        text\n        }\n    }\n}\n\n# Content to be updated\n\n{\n    "i": {\n          "id": <streamID of the stream you wish to update,\n            "content": {    \n            "title": "Getting started with ComposeDB and Ceramic"\n        }\n    }\n}\n')),(0,i.kt)("p",null,"Where:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You will notice that the naming of the mutation is ",(0,i.kt)("inlineCode",{parentName:"li"},"UpdatePost")," which indicates that this mutation will update existing records."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"updatePost")," binding has a prefix ",(0,i.kt)("inlineCode",{parentName:"li"},"update")," which is very defines the behaviour of your mutation - updating the existing data instead of creating new records."),(0,i.kt)("li",{parentName:"ul"},"Finally, just like before, we define the variables that should be passed to update record. Here, very important difference is that you will be required to specify all variables, including the stream id so that ComposeDB would know which record should be updated.")),(0,i.kt)("h3",{id:"update-options"},"Update Options"),(0,i.kt)("p",null,"Update mutations can be provided with an options object containing the following fields:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"replace: Boolean"),": by default the update logic performs a shallow (1 level) merge of the document contents, so existing contents of the document are not removed unless explicitly changed. When setting\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"replace"),"\xa0to\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"true"),", the document contents will be fully replaced by the contents provided in the update mutation."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"version: CommitID"),": version of the document the update should be applied on. If set, the update logic will load the latest version of the document and throw an error if it doesn't match the expected version.")),(0,i.kt)("h2",{id:"delete-data"},"Delete data"),(0,i.kt)("p",null,"Currently, data deletion is not supported. All ComposeDB data transactions are timestamped via Ceramic into the public Ethereum blockchain. This means that data can always be retrieved from the blockchain."),(0,i.kt)("h2",{id:"next-steps"},"Next Steps"),(0,i.kt)("p",null,"At this stage, you should have a strong understanding of how to create applications using ComposeDB and interact with the data that is stored on the network. Congrats!"),(0,i.kt)("p",null,"If you need more inspiration for what can be built on ComposeDB, check out the ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.4.x/next-steps#examples"},(0,i.kt)("strong",{parentName:"a"},"example applications"))," built by Ceramic community members."))}c.isMDXComponent=!0}}]);
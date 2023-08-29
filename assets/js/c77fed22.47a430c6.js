"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3847],{4852:(e,t,o)=>{o.d(t,{Zo:()=>m,kt:()=>g});var l=o(9231);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,l)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(e,t){if(null==e)return{};var o,l,a=function(e,t){if(null==e)return{};var o,l,a={},n=Object.keys(e);for(l=0;l<n.length;l++)o=n[l],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)o=n[l],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=l.createContext({}),d=function(e){var t=l.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},m=function(e){var t=d(e.components);return l.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},p=l.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),u=d(o),p=a,g=u["".concat(s,".").concat(p)]||u[p]||c[p]||n;return o?l.createElement(g,i(i({ref:t},m),{},{components:o})):l.createElement(g,i({ref:t},m))}));function g(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,i=new Array(n);i[0]=p;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[u]="string"==typeof e?e:a,i[1]=r;for(var d=2;d<n;d++)i[d]=o[d];return l.createElement.apply(null,i)}return l.createElement.apply(null,o)}p.displayName="MDXCreateElement"},1289:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>r,toc:()=>d});var l=o(328),a=(o(9231),o(4852));const n={},i="Model Catalog",r={unversionedId:"guides/data-modeling/model-catalog",id:"guides/data-modeling/model-catalog",title:"Model Catalog",description:"Discover, share, and reuse data models.",source:"@site/docs/guides/data-modeling/model-catalog.mdx",sourceDirName:"guides/data-modeling",slug:"/guides/data-modeling/model-catalog",permalink:"/docs/next/guides/data-modeling/model-catalog",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"guides",previous:{title:"Data Modeling",permalink:"/docs/next/guides/data-modeling/"},next:{title:"Writing Models",permalink:"/docs/next/guides/data-modeling/writing-models"}},s={},d=[{value:"Overview",id:"overview",level:2},{value:"Use Cases",id:"use-cases",level:3},{value:"Adding models to the catalog",id:"adding-models-to-the-catalog",level:2},{value:"Using models from the catalog",id:"using-models-from-the-catalog",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"List all models",id:"list-all-models",level:3},{value:"Using a single model",id:"using-a-single-model",level:3},{value:"Using multiple models",id:"using-multiple-models",level:3},{value:"Next Steps",id:"next-steps",level:2},{value:"Related Guides",id:"related-guides",level:2}],m={toc:d},u="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,l.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"model-catalog"},"Model Catalog"),(0,a.kt)("p",null,"Discover, share, and reuse data models."),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"The catalog is a free and open source repository of all data models created by the ComposeDB developer community. The catalog aims to make it as easy as possible for developers to discover, share, and reuse each others models and underlying data."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Data Model Table",src:o(2106).Z,width:"2824",height:"1422"})),(0,a.kt)("h3",{id:"use-cases"},"Use Cases"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Discover high-quality models for your app"),(0,a.kt)("li",{parentName:"ul"},"Share and distribute your models to others")),(0,a.kt)("h2",{id:"adding-models-to-the-catalog"},"Adding models to the catalog"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Models in all deployed composites are automatically available on the catalog."),(0,a.kt)("p",null,"How it works:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"A developer deploys a ",(0,a.kt)("a",{parentName:"li",href:"/docs/next/guides/data-modeling/composites"},"composite")," containing models to testnet or mainnet"),(0,a.kt)("li",{parentName:"ol"},"An indexer builds a catalog of all deployed models and exposes it via API"),(0,a.kt)("li",{parentName:"ol"},"The catalog is automatically available on various interfaces, including ComposeDB CLI")),(0,a.kt)("h2",{id:"using-models-from-the-catalog"},"Using models from the catalog"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"You need a running instance of ComposeDB server and CLI to use the catalog. See ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/set-up-your-environment"},"set up your environment")," to get started."),(0,a.kt)("h3",{id:"list-all-models"},"List all models"),(0,a.kt)("p",null,"Using ComposeDB CLI, run the following command to list all models:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"composedb model:list --table\n")),(0,a.kt)("p",null,"You will see a table where each model has the following metadata properties:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Name")," - name of the model"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ID")," - unique identifier (streamID) of the model"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Description")," - description of the model")),(0,a.kt)("h3",{id:"using-a-single-model"},"Using a single model"),(0,a.kt)("p",null,"Fetch a single model from the catalog and convert it into a composite, using its model ID:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"composedb composite:from-model kjzl6hvfrbw6c7keo17n66rxyo21nqqaa9lh491jz16od43nokz7ksfcvzi6bwc --output=my-composite.json\n")),(0,a.kt)("h3",{id:"using-multiple-models"},"Using multiple models"),(0,a.kt)("p",null,"Run the ",(0,a.kt)("inlineCode",{parentName:"p"},"composite:from-model")," command depicted above for each model you want to use in your application. Remember to change the composite file name to avoid collisions. After you have multiple composite files, merge them. See Merging Composites."),(0,a.kt)("h2",{id:"next-steps"},"Next Steps"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"To use your newly created composite in your app, you will need to deploy and compile your composite."),(0,a.kt)("h2",{id:"related-guides"},"Related Guides"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Can\u2019t find what you\u2019re looking for in the catalog? See ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/guides/data-modeling/writing-models"},"Writing Models")," to learn how to write your own models."))}c.isMDXComponent=!0},2106:(e,t,o)=>{o.d(t,{Z:()=>l});const l=o.p+"assets/images/data-model-table-9edfb95dc33320c39c7c54bf99facad5.png"}}]);
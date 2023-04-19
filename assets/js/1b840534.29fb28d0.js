"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5269],{4852:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(9231);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1102:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(9231),r=n(9841);const i={tabItem:"tabItem_kqt3"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,o),hidden:n},t)}},9228:(e,t,n)=>{n.d(t,{Z:()=>E});var a=n(5675),r=n(9231),i=n(9841),o=n(1919),l=n(9409),u=n(7612),s=n(7256),c=n(1959);function d(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=p(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[u,s]=f({queryString:n,groupId:a}),[d,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),g=(()=>{const e=u??d;return m({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),s(e),b(e)}),[s,b,i]),tabValues:i}}var g=n(3148);const h={tabList:"tabList_QRdH",tabItem:"tabItem_OHWP"};function v(e){let{className:t,block:n,selectedValue:l,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),a=s[n].value;a!==l&&(d(t),u(a))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},o,{className:(0,i.Z)("tabs__item",h.tabItem,o?.className,{"tabs__item--active":l===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function k(e){const t=b(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",h.tabList)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function E(e){const t=(0,g.Z)();return r.createElement(k,(0,a.Z)({key:String(t)},e))}},6546:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var a=n(5675),r=(n(9231),n(4852)),i=n(9228),o=n(1102);const l={},u="Ceramic configuration",s={unversionedId:"configuration",id:"version-0.3.x/configuration",title:"Ceramic configuration",description:"Ceramic functionalities supporting ComposeDB are currently considered",source:"@site/versioned_docs/version-0.3.x/configuration.mdx",sourceDirName:".",slug:"/configuration",permalink:"/docs/0.3.x/configuration",draft:!1,tags:[],version:"0.3.x",frontMatter:{},sidebar:"docs",previous:{title:"Installation",permalink:"/docs/0.3.x/installation"},next:{title:"Your first composite",permalink:"/docs/0.3.x/first-composite"}},c={},d=[{value:"Environment variable",id:"environment-variable",level:2},{value:"Admin DIDs",id:"admin-dids",level:2},{value:"Generating a DID private key",id:"generating-a-did-private-key",level:3},{value:"Getting the DID value",id:"getting-the-did-value",level:3},{value:"Configuration file",id:"configuration-file",level:2}],p={toc:d},m="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ceramic-configuration"},"Ceramic configuration"),(0,r.kt)("p",null,"Ceramic functionalities supporting ComposeDB are currently considered\nexperimental and the Ceramic node must be explicitly configured to support them."),(0,r.kt)("h2",{id:"environment-variable"},"Environment variable"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"CERAMIC_ENABLE_EXPERIMENTAL_COMPOSE_DB")," environment variable must be set to\n",(0,r.kt)("inlineCode",{parentName:"p"},"true")," to run a Ceramic node with ComposeDB support, for example:"),(0,r.kt)(i.Z,{defaultValue:"pnpm",groupId:"package-manager",values:[{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"CERAMIC_ENABLE_EXPERIMENTAL_COMPOSE_DB='true' npx @ceramicnetwork/cli daemon\n"))),(0,r.kt)(o.Z,{value:"pnpm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"CERAMIC_ENABLE_EXPERIMENTAL_COMPOSE_DB='true' pnpm dlx @ceramicnetwork/cli daemon\n"))),(0,r.kt)(o.Z,{value:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"CERAMIC_ENABLE_EXPERIMENTAL_COMPOSE_DB='true' yarn dlx @ceramicnetwork/cli daemon\n")))),(0,r.kt)("h2",{id:"admin-dids"},"Admin DIDs"),(0,r.kt)("p",null,"ComposeDB queries support relies on Ceramic nodes indexing documents using the\nmodels specified in the composite. In order to notify the Ceramic node of the\nmodels to index, the ComposeDB tools need to interact with restricted admin APIs\non Ceramic."),(0,r.kt)("p",null,"Calling the Ceramic admin APIs requires an authenticated DID to be set in the\n",(0,r.kt)("a",{parentName:"p",href:"#configuration-file"},"configuration file"),", which can be generated using the\nfollowing ComposeDB CLI commands:"),(0,r.kt)("h3",{id:"generating-a-did-private-key"},"Generating a DID private key"),(0,r.kt)("p",null,"The\n",(0,r.kt)("a",{parentName:"p",href:"/docs/0.3.x/api/commands/cli.did#composedb-didgenerate-private-key"},(0,r.kt)("inlineCode",{parentName:"a"},"did:generate-private-key")," command"),"\nof the ComposeDB CLI can be used to generate a random private key for a DID:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"composedb did:generate-private-key\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The generated private key must be securely stored so it can be used when\ninteracting with other commands of the ComposeDB CLI when set as the\n",(0,r.kt)("inlineCode",{parentName:"p"},"DID_PRIVATE_KEY")," environment variable or ",(0,r.kt)("inlineCode",{parentName:"p"},"--did-private-key")," flag, and\ndevelopment tools APIs.")),(0,r.kt)("h3",{id:"getting-the-did-value"},"Getting the DID value"),(0,r.kt)("p",null,"The DID string value can be accessed based on a known private key generated in\nthe step above by using the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/0.3.x/api/commands/cli.did#composedb-didfrom-private-key"},(0,r.kt)("inlineCode",{parentName:"a"},"did:from-private-key")," command"),"\nof the ComposeDB CLI:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"composedb did:from-private-key [hexadecimal-encoded private key string]\n")),(0,r.kt)("p",null,"The DID string can then be set in the Ceramic node configuration file as\ndescribed below."),(0,r.kt)("h2",{id:"configuration-file"},"Configuration file"),(0,r.kt)("p",null,"The Ceramic node configuration file, which defaults to\n",(0,r.kt)("inlineCode",{parentName:"p"},"~/.ceramic/daemon.config.json")," on Linux, macOS and WSL (Windows Subsystem for\nLinux), needs to be edited to specify the ",(0,r.kt)("a",{parentName:"p",href:"#admin-dids"},"admin DIDs")," allowed to\nset models for indexing, as well as the indexing configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  ...\n  "http-api": {\n    ...\n    "admin-dids": ["did:key:..."]\n  },\n  "indexing": {\n    ...\n    "allow-queries-before-historical-sync": true\n  }\n}\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If your Ceramic node is already started, it will need to be restarted for the\nchanges to the configuration file to be applied.")))}f.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3236],{4852:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var o=n(9231);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),u=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||a;return n?o.createElement(f,l(l({ref:t},c),{},{components:n})):o.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:r,l[1]=s;for(var u=2;u<a;u++)l[u]=n[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1102:(e,t,n)=>{n.d(t,{Z:()=>l});var o=n(9231),r=n(9841);const a={tabItem:"tabItem_kqt3"};function l(e){let{children:t,hidden:n,className:l}=e;return o.createElement("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,l),hidden:n},t)}},9228:(e,t,n)=>{n.d(t,{Z:()=>w});var o=n(5675),r=n(9231),a=n(9841),l=n(1919),s=n(9409),i=n(7612),u=n(7256),c=n(1959);function d(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:o,default:r}}=e;return{value:t,label:n,attributes:o,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const o=(0,s.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(o.location.search);t.set(a,e),o.replace({...o.location,search:t.toString()})}),[a,o])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,a=p(e),[l,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=n.find((e=>e.default))??n[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:a}))),[i,u]=f({queryString:n,groupId:o}),[d,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,a]=(0,c.Nk)(n);return[o,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:o}),h=(()=>{const e=i??d;return m({value:e,tabValues:a})?e:null})();(0,r.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),b(e)}),[u,b,a]),tabValues:a}}var h=n(3148);const g={tabList:"tabList_QRdH",tabItem:"tabItem_OHWP"};function y(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),o=u[n].value;o!==s&&(d(t),i(o))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,o.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},l,{className:(0,a.Z)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":s===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:o}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o}))))}function k(e){const t=b(e);return r.createElement("div",{className:(0,a.Z)("tabs-container",g.tabList)},r.createElement(y,(0,o.Z)({},e,t)),r.createElement(v,(0,o.Z)({},e,t)))}function w(e){const t=(0,h.Z)();return r.createElement(k,(0,o.Z)({key:String(t)},e))}},3392:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var o=n(5675),r=(n(9231),n(4852)),a=n(9228),l=n(1102);const s={},i="Composites deployment",u={unversionedId:"guides/using-composites/deployment",id:"version-0.2.x/guides/using-composites/deployment",title:"Composites deployment",description:"Valid composites can be deployed to any supporting Ceramic node, by ensuring the model streams described in the composite are available on the node, and that the node is configured to index theses models.",source:"@site/versioned_docs/version-0.2.x/guides/using-composites/deployment.mdx",sourceDirName:"guides/using-composites",slug:"/guides/using-composites/deployment",permalink:"/docs/0.2.x/guides/using-composites/deployment",draft:!1,tags:[],version:"0.2.x",frontMatter:{},sidebar:"docs",previous:{title:"Composites discovery",permalink:"/docs/0.2.x/guides/using-composites/discovery"},next:{title:"Composites customization",permalink:"/docs/0.2.x/guides/using-composites/customization"}},c={},d=[{value:"Models deployment",id:"models-deployment",level:2},{value:"Ceramic node configuration",id:"ceramic-node-configuration",level:2}],p={toc:d},m="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"composites-deployment"},"Composites deployment"),(0,r.kt)("p",null,"Valid composites can be deployed to any supporting Ceramic node, by ensuring the model streams described in the composite are available on the node, and that the node is configured to index theses models."),(0,r.kt)("h2",{id:"models-deployment"},"Models deployment"),(0,r.kt)(a.Z,{defaultValue:"api",groupId:"api-or-cli",values:[{label:"Using the CLI",value:"cli"},{label:"Using the API",value:"api"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"api",mdxType:"TabItem"},(0,r.kt)("p",null,"Make sure you have the ",(0,r.kt)("inlineCode",{parentName:"p"},"composedb")," packages ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.2.x/installation"},"installed"),", before running the code below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { CeramicClient } from '@ceramicnetwork/http-client'\nimport { readEncodedComposite } from '@composedb/devtools-node'\n\n// Replace by the URL of the Ceramic node you want to deploy the models to\nconst ceramic = new CeramicClient('http://localhost:7007')\n\n// Replace by the path to the local encoded composite file\nconst composite = await readEncodedComposite(ceramic, 'my-composite.json')\n\nconsole.log('Model IDs to set in configuration:', composite.modelIDs)\n"))),(0,r.kt)(l.Z,{value:"cli",mdxType:"TabItem"},(0,r.kt)("p",null,"First, we need to ensure the model streams are available on the target Ceramic node:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"composedb composite:deploy my-composite.json --ceramic-url=http://localhost:7007\n")),(0,r.kt)("p",null,"Then, we need to get the list of models that need to be set for indexing in the Ceramic node configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"composedb composite:models my-composite.json\n")))),(0,r.kt)("h2",{id:"ceramic-node-configuration"},"Ceramic node configuration"),(0,r.kt)("p",null,"The local Ceramic node then needs to be configured to index documents using the models listed in the previous step."),(0,r.kt)("p",null,"This can be done by editing Ceramic's config file, which defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.ceramic/daemon.config.json")," on Linux, macOS and WSL (Windows Subsystem for Linux), adding the necessary model stream IDs to the ",(0,r.kt)("inlineCode",{parentName:"p"},"indexing.models")," array:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  ...\n  "indexing": {\n    ...\n    "models": ["..."]\n  }\n}\n')))}f.isMDXComponent=!0}}]);
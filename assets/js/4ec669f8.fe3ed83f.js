"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2854],{54852:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var o=r(49231);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=o.createContext({}),c=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),d=n,f=p["".concat(i,".").concat(d)]||p[d]||m[d]||a;return r?o.createElement(f,s(s({ref:t},u),{},{components:r})):o.createElement(f,s({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:n,s[1]=l;for(var c=2;c<a;c++)s[c]=r[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},15062:(e,t,r)=>{r.d(t,{Z:()=>s});var o=r(49231),n=r(19841);const a={tabItem:"tabItem_XSkO"};function s(e){let{children:t,hidden:r,className:s}=e;return o.createElement("div",{role:"tabpanel",className:(0,n.Z)(a.tabItem,s),hidden:r},t)}},79055:(e,t,r)=>{r.d(t,{Z:()=>k});var o=r(3262),n=r(49231),a=r(19841),s=r(47388),l=r(19409),i=r(11068),c=r(37206),u=r(12383);function p(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:o,default:n}}=e;return{value:t,label:r,attributes:o,default:n}}))}function m(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function d(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const o=(0,l.k6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i._X)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(o.location.search);t.set(a,e),o.replace({...o.location,search:t.toString()})}),[a,o])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:o}=e,a=m(e),[s,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=r.find((e=>e.default))??r[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:a}))),[i,c]=f({queryString:r,groupId:o}),[p,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,a]=(0,u.Nk)(r);return[o,(0,n.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:o}),v=(()=>{const e=i??p;return d({value:e,tabValues:a})?e:null})();(0,n.useLayoutEffect)((()=>{v&&l(v)}),[v]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!d({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),b(e)}),[c,b,a]),tabValues:a}}var v=r(42478);const y={tabList:"tabList_rSyU",tabItem:"tabItem_Gsv1"};function g(e){let{className:t,block:r,selectedValue:l,selectValue:i,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),m=e=>{const t=e.currentTarget,r=u.indexOf(t),o=c[r].value;o!==l&&(p(t),i(o))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},t)},c.map((e=>{let{value:t,label:r,attributes:s}=e;return n.createElement("li",(0,o.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:m},s,{className:(0,a.Z)("tabs__item",y.tabItem,s?.className,{"tabs__item--active":l===t})}),r??t)})))}function h(e){let{lazy:t,children:r,selectedValue:o}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===o));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==o}))))}function w(e){const t=b(e);return n.createElement("div",{className:(0,a.Z)("tabs-container",y.tabList)},n.createElement(g,(0,o.Z)({},e,t)),n.createElement(h,(0,o.Z)({},e,t)))}function k(e){const t=(0,v.Z)();return n.createElement(w,(0,o.Z)({key:String(t)},e))}},43373:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var o=r(3262),n=(r(49231),r(54852)),a=r(79055),s=r(15062);const l={},i="Composites discovery",c={unversionedId:"guides/using-composites/discovery",id:"version-0.2.x/guides/using-composites/discovery",title:"Composites discovery",description:"ComposeDB does not yet provide a way to discover composites directly, however it is possible to create composites from known models.",source:"@site/versioned_docs/version-0.2.x/guides/using-composites/discovery.mdx",sourceDirName:"guides/using-composites",slug:"/guides/using-composites/discovery",permalink:"/docs/0.2.x/guides/using-composites/discovery",draft:!1,tags:[],version:"0.2.x",frontMatter:{},sidebar:"docs",previous:{title:"Using composites",permalink:"/docs/0.2.x/category/using-composites"},next:{title:"Composites deployment",permalink:"/docs/0.2.x/guides/using-composites/deployment"}},u={},p=[{value:"Models discovery",id:"models-discovery",level:2},{value:"Creating a composite from known models",id:"creating-a-composite-from-known-models",level:2}],m={toc:p},d="wrapper";function f(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,o.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"composites-discovery"},"Composites discovery"),(0,n.kt)("p",null,"ComposeDB does not yet provide a way to discover composites directly, however it is possible to create composites from known models."),(0,n.kt)("h2",{id:"models-discovery"},"Models discovery"),(0,n.kt)("p",null,"The ComposeDB CLI can be used to list the models indexed by 3Box Labs on the Clay network."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"composedb model:list --table\n")),(0,n.kt)("h2",{id:"creating-a-composite-from-known-models"},"Creating a composite from known models"),(0,n.kt)("p",null,"When models are available on a Ceramic network, it is possible to load them into a composite so they can be easily reused."),(0,n.kt)(a.Z,{defaultValue:"api",groupId:"api-or-cli",values:[{label:"Using the CLI",value:"cli"},{label:"Using the API",value:"api"}],mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"api",mdxType:"TabItem"},(0,n.kt)("p",null,"Make sure you have the ",(0,n.kt)("inlineCode",{parentName:"p"},"composedb")," packages ",(0,n.kt)("a",{parentName:"p",href:"/docs/0.2.x/installation"},"installed"),", before running the code below."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"import { CeramicClient } from '@ceramicnetwork/http-client'\nimport { Composite } from '@composedb/devtools'\nimport { writeEncodedComposite } from '@composedb/devtools-node'\n\nconst ceramic = new CeramicClient('https://gateway-clay.ceramic.network')\n\nconst composite = await Composite.fromModels({ ceramic, models: ['<model ID>'] })\n\nawait writeEncodedComposite(composite, 'my-composite.json')\n"))),(0,n.kt)(s.Z,{value:"cli",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"composedb composite:from-model <model ID> --ceramic-url=https://gateway-clay.ceramic.network --output=my-composite.json\n")))))}f.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3113],{4852:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var a=n(9231);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,b=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return n?a.createElement(b,i(i({ref:t},c),{},{components:n})):a.createElement(b,i({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1521:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(9231),r=n(9841);const o={tabItem:"tabItem_k2x5"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:n},t)}},7638:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(644),r=n(9231),o=n(9841),i=n(2136),l=n(9409),s=n(2765),u=n(4361),c=n(9657);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=m(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,u]=b({queryString:n,groupId:a}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),v=(()=>{const e=s??p;return d({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{v&&l(v)}),[v]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var v=n(3582);const g={tabList:"tabList_HLTO",tabItem:"tabItem_ug2a"};function h(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==l&&(p(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},i,{className:(0,o.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function k(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",g.tabList)},r.createElement(h,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function w(e){const t=(0,v.Z)();return r.createElement(k,(0,a.Z)({key:String(t)},e))}},2638:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>b,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var a=n(644),r=(n(9231),n(4852)),o=n(7638),i=n(1521);const l={},s="JavaScript Client",u={unversionedId:"guides/composedb-client/javascript-client",id:"guides/composedb-client/javascript-client",title:"JavaScript Client",description:"Interact with ComposeDB using JavaScript, TypeScript, or React.",source:"@site/docs/guides/composedb-client/javascript-client.mdx",sourceDirName:"guides/composedb-client",slug:"/guides/composedb-client/javascript-client",permalink:"/docs/preview/guides/composedb-client/javascript-client",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"guides",previous:{title:"ComposeDB Client",permalink:"/docs/preview/guides/composedb-client/"},next:{title:"Using Apollo GraphQL Client",permalink:"/docs/preview/guides/composedb-client/using-apollo"}},c={},p=[{value:"Overview",id:"overview",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Queries",id:"queries",level:2},{value:"Executing Queries",id:"executing-queries",level:3},{value:"Mutations",id:"mutations",level:2},{value:"Enabling Mutations",id:"enabling-mutations",level:3},{value:"Executing mutations",id:"executing-mutations",level:3},{value:"Next Steps",id:"next-steps",level:2},{value:"Related Guides",id:"related-guides",level:2}],m={toc:p},d="wrapper";function b(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"javascript-client"},"JavaScript Client"),(0,r.kt)("p",null,"Interact with ComposeDB using JavaScript, TypeScript, or React. "),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The client exposes the primary APIs to interact with ComposeDB from your application using a compiled composite."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Install the ComposeDB client package:"),(0,r.kt)(o.Z,{defaultValue:"pnpm",groupId:"npm-or-pnpm-or-yarn",values:[{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @composedb/client\n"))),(0,r.kt)(i.Z,{value:"pnpm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add @composedb/client\n"))),(0,r.kt)(i.Z,{value:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @composedb/client\n")))),(0,r.kt)("p",null,"If you\u2019re using TypeScript, you may also need to install ComposeDB Types:"),(0,r.kt)(o.Z,{defaultValue:"pnpm",groupId:"npm-or-pnpm-or-yarn",values:[{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -D @composedb/types\n"))),(0,r.kt)(i.Z,{value:"pnpm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add -D @composedb/types\n"))),(0,r.kt)(i.Z,{value:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add -D @composedb/types\n")))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"Create a client instance by passing your server URL and your compiled composite:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"// Import ComposeDB client\n\nimport { ComposeClient }from '@composedb/client'\n\n// Import your compiled composite\n\nimport { definition }from './__generated__/definition.js'\n\n// Create an instance of ComposeClient\n// Pass the URL of your Ceramic server\n// Pass reference to your compiled composite\n\nconst compose = new ComposeClient({ ceramic: 'http://localhost:7007', definition })\n\n")),(0,r.kt)("p",null,"More details:\xa0",(0,r.kt)("a",{parentName:"p",href:"/docs/preview/api/classes/client.ComposeClient"},(0,r.kt)("inlineCode",{parentName:"a"},"ComposeClient"))),(0,r.kt)("h2",{id:"queries"},"Queries"),(0,r.kt)("h3",{id:"executing-queries"},"Executing Queries"),(0,r.kt)("p",null,"Execute GraphQL ",(0,r.kt)("a",{parentName:"p",href:"/docs/preview/guides/data-interactions/queries"},"Queries")," using the schema that is auto-generated from your compiled composite:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"// Get account of authenticated user\n\nawait compose.executeQuery(`\n  query {\n    viewer {\n      id\n    }\n  }\n`)\n\n")),(0,r.kt)("p",null,"More details:\xa0",(0,r.kt)("a",{parentName:"p",href:"/docs/preview/api/classes/client.ComposeClient#executequery"},(0,r.kt)("inlineCode",{parentName:"a"},"executeQuery"))),(0,r.kt)("h2",{id:"mutations"},"Mutations"),(0,r.kt)("h3",{id:"enabling-mutations"},"Enabling Mutations"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Before enabling mutations you must ",(0,r.kt)("a",{parentName:"strong",href:"/docs/preview/guides/composedb-client/authenticate-users"},"Authenticate Users"),".")," After you have an authenticated user, enable ",(0,r.kt)("a",{parentName:"p",href:"/docs/preview/guides/data-interactions/mutations"},"Mutations")," by setting their authenticated account on the ComposeDB client:"),(0,r.kt)(o.Z,{defaultValue:"with-sessions",groupId:"with-or-without-sessions",values:[{label:"With Sessions",value:"with-sessions"},{label:"Without Sessions",value:"without-sessions"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"with-sessions",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"// Assign the authorized did from your session to your client\n\ncompose.setDID(session.did)\n"))),(0,r.kt)(i.Z,{value:"without-sessions",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"// Call setDID method on ComposeClient instance\n// Using authenticated did instance\n\ncompose.setDID(did)\n")))),(0,r.kt)("h3",{id:"executing-mutations"},"Executing mutations"),(0,r.kt)("p",null,"In your client, you can execute GraphQL mutations using the schema that is auto-generated from your compiled composite. You can follow examples in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/preview/guides/data-interactions/"},"Data Interactions")," guides to learn more about performing ",(0,r.kt)("a",{parentName:"p",href:"/docs/preview/guides/data-interactions/queries"},"Queries")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/preview/guides/data-interactions/mutations"},"Mutations"),"."),(0,r.kt)("h2",{id:"next-steps"},"Next Steps"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Learn how to ",(0,r.kt)("a",{parentName:"li",href:"/docs/preview/guides/composedb-client/authenticate-users"},(0,r.kt)("strong",{parentName:"a"},"Authenticate Users \u2192")))),(0,r.kt)("h2",{id:"related-guides"},"Related Guides"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ComposeDB\u2019s JavaScript client optionally works with popular GraphQL clients like ",(0,r.kt)("a",{parentName:"li",href:"/docs/preview/guides/composedb-client/using-apollo"},(0,r.kt)("strong",{parentName:"a"},"Apollo"))," or ",(0,r.kt)("a",{parentName:"li",href:"/docs/preview/guides/composedb-client/using-relay"},(0,r.kt)("strong",{parentName:"a"},"Relay")),".")))}b.isMDXComponent=!0}}]);
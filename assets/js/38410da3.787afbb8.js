"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1450],{4852:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>d});var n=t(9231);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),i=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},m=function(e){var a=i(e.components);return n.createElement(p.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=i(t),d=r,b=c["".concat(p,".").concat(d)]||c[d]||u[d]||l;return t?n.createElement(b,o(o({ref:a},m),{},{components:t})):n.createElement(b,o({ref:a},m))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=c;var s={};for(var p in a)hasOwnProperty.call(a,p)&&(s[p]=a[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var i=2;i<l;i++)o[i]=t[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},4092:(e,a,t)=>{t.d(a,{Z:()=>o});var n=t(9231),r=t(9841);const l="tabItem_C8TG";function o(e){let{children:a,hidden:t,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:t},a)}},1610:(e,a,t)=>{t.d(a,{Z:()=>d});var n=t(9675),r=t(9231),l=t(9841),o=t(3863),s=t(6324),p=t(4078),i=t(813);const m="tabList_wYXA",u="tabItem_KAX6";function c(e){var a;const{lazy:t,block:o,defaultValue:c,values:d,groupId:b,className:v}=e,y=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=d??y.map((e=>{let{props:{value:a,label:t,attributes:n}}=e;return{value:a,label:t,attributes:n}})),f=(0,s.l)(k,((e,a)=>e.value===a.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===c?c:c??(null==(a=y.find((e=>e.props.default)))?void 0:a.props.value)??y[0].props.value;if(null!==g&&!k.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:T}=(0,p.U)(),[N,x]=(0,r.useState)(g),w=[],{blockElementScrollPositionUntilNextRender:I}=(0,i.o5)();if(null!=b){const e=h[b];null!=e&&e!==N&&k.some((a=>a.value===e))&&x(e)}const C=e=>{const a=e.currentTarget,t=w.indexOf(a),n=k[t].value;n!==N&&(I(a),x(n),null!=b&&T(b,String(n)))},O=e=>{var a;let t=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{const a=w.indexOf(e.currentTarget)+1;t=w[a]??w[0];break}case"ArrowLeft":{const a=w.indexOf(e.currentTarget)-1;t=w[a]??w[w.length-1];break}}null==(a=t)||a.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",m)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},v)},k.map((e=>{let{value:a,label:t,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===a?0:-1,"aria-selected":N===a,key:a,ref:e=>w.push(e),onKeyDown:O,onClick:C},o,{className:(0,l.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":N===a})}),t??a)}))),t?(0,r.cloneElement)(y.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==N})))))}function d(e){const a=(0,o.Z)();return r.createElement(c,(0,n.Z)({key:String(a)},e))}},2952:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>p,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var n=t(9675),r=(t(9231),t(4852)),l=t(1610),o=t(4092);const s={},p="Installation",i={unversionedId:"installation",id:"version-0.3.x/installation",title:"Installation",description:"ComposeDB packages are still under development and only released as a developer preview, they are not ready for production use.",source:"@site/versioned_docs/version-0.3.x/installation.mdx",sourceDirName:".",slug:"/installation",permalink:"/docs/0.3.x/installation",draft:!1,tags:[],version:"0.3.x",frontMatter:{},sidebar:"docs",previous:{title:"ComposeDB Docs",permalink:"/docs/0.3.x/introduction"},next:{title:"Ceramic configuration",permalink:"/docs/0.3.x/configuration"}},m={},u=[{value:"Requirements",id:"requirements",level:2},{value:"Development tools",id:"development-tools",level:2},{value:"CLI",id:"cli",level:3},{value:"Libraries",id:"libraries",level:3},{value:"Runtime libraries",id:"runtime-libraries",level:2},{value:"Using TypeScript",id:"using-typescript",level:2}],c={toc:u};function d(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installation"},"Installation"),(0,r.kt)("admonition",{title:"Developer preview",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"ComposeDB packages are still under development and only released as a developer preview, they are ",(0,r.kt)("strong",{parentName:"p"},"not ready for production use"),"."),(0,r.kt)("p",{parentName:"admonition"},"There may be ",(0,r.kt)("strong",{parentName:"p"},"breaking changes")," between v0.x versions before a stable v1.0 version is released, causing models or composites created from previous versions not to be compatible.")),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("p",null,"ComposeDB runs on top of ",(0,r.kt)("a",{parentName:"p",href:"https://ceramic.network/"},"Ceramic"),". Running ",(0,r.kt)("a",{parentName:"p",href:"https://developers.ceramic.network/build/cli/installation/"},"a local Ceramic node")," is needed for app development."),(0,r.kt)("h2",{id:"development-tools"},"Development tools"),(0,r.kt)("p",null,"ComposeDB provides libraries and a CLI to help support common development needs."),(0,r.kt)("p",null,"The CLI provides commands for the most common flows, while the libraries can be used in scripts to support more complex use-cases."),(0,r.kt)("h3",{id:"cli"},"CLI"),(0,r.kt)(l.Z,{defaultValue:"pnpm",groupId:"package-manager",values:[{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install --location=global @composedb/cli@^0.3.0\n"))),(0,r.kt)(o.Z,{value:"pnpm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add -g @composedb/cli@^0.3.0\n"))),(0,r.kt)(o.Z,{value:"yarn",mdxType:"TabItem"},(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Global packages are only supported for yarn 2.x and older. For yarn 3.x and newer, use ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn dlx")," to run composedb cli commands")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add -g @composedb/cli@^0.3.0\n")))),(0,r.kt)("h3",{id:"libraries"},"Libraries"),(0,r.kt)("p",null,"ComposeDB exposes two complementary development libraries: ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.3.x/api/modules/devtools"},(0,r.kt)("inlineCode",{parentName:"a"},"@composedb/devtools"))," for generic interactions with composites, and ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.3.x/api/modules/devtools_node"},(0,r.kt)("inlineCode",{parentName:"a"},"@composedb/devtools-node"))," with additional functions to interact with the local file system and start a local HTTP server."),(0,r.kt)(l.Z,{defaultValue:"pnpm",groupId:"package-manager",values:[{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -D @composedb/devtools@^0.3.0 @composedb/devtools-node@^0.3.0\n"))),(0,r.kt)(o.Z,{value:"pnpm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add -D @composedb/devtools@^0.3.0 @composedb/devtools-node@^0.3.0\n"))),(0,r.kt)(o.Z,{value:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add -D @composedb/devtools@^0.3.0 @composedb/devtools-node@^0.3.0\n")))),(0,r.kt)("h2",{id:"runtime-libraries"},"Runtime libraries"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.3.x/api/modules/client"},(0,r.kt)("inlineCode",{parentName:"a"},"@composedb/client"))," package exposes the primary APIs to interact with Ceramic based on a Composite definition."),(0,r.kt)(l.Z,{defaultValue:"pnpm",groupId:"package-manager",values:[{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install @composedb/client@^0.3.0\n"))),(0,r.kt)(o.Z,{value:"pnpm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add @composedb/client@^0.3.0\n"))),(0,r.kt)(o.Z,{value:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add @composedb/client@^0.3.0\n")))),(0,r.kt)("h2",{id:"using-typescript"},"Using TypeScript"),(0,r.kt)("p",null,"You may need to install the ",(0,r.kt)("inlineCode",{parentName:"p"},"@composedb/types")," package used by the different libraries if you use TypeScript."),(0,r.kt)(l.Z,{defaultValue:"pnpm",groupId:"package-manager",values:[{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -D @composedb/types@^0.3.0\n"))),(0,r.kt)(o.Z,{value:"pnpm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add -D @composedb/types@^0.3.0\n"))),(0,r.kt)(o.Z,{value:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add -D @composedb/types@^0.3.0\n")))))}d.isMDXComponent=!0}}]);
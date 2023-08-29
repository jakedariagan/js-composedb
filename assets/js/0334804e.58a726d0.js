"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2103],{4852:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>h});var n=o(9231);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(o),m=a,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return o?n.createElement(h,i(i({ref:t},u),{},{components:o})):n.createElement(h,i({ref:t},u))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},9639:(e,t,o)=>{o.d(t,{Z:()=>i});var n=o(9231),a=o(9841);const r={tabItem:"tabItem_goQT"};function i(e){let{children:t,hidden:o,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,i),hidden:o},t)}},3964:(e,t,o)=>{o.d(t,{Z:()=>w});var n=o(328),a=o(9231),r=o(9841),i=o(5981),l=o(9409),s=o(149),c=o(2316),u=o(5157);function d(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:o,attributes:n,default:a}}=e;return{value:t,label:o,attributes:n,default:a}}))}function p(e){const{values:t,children:o}=e;return(0,a.useMemo)((()=>{const e=t??d(o);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,o])}function m(e){let{value:t,tabValues:o}=e;return o.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:o}=e;const n=(0,l.k6)(),r=function(e){let{queryString:t=!1,groupId:o}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return o??null}({queryString:t,groupId:o});return[(0,s._X)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function f(e){const{defaultValue:t,queryString:o=!1,groupId:n}=e,r=p(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:o}=e;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:o}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${o.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=o.find((e=>e.default))??o[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[s,c]=h({queryString:o,groupId:n}),[d,f]=function(e){let{groupId:t}=e;const o=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,u.Nk)(o);return[n,(0,a.useCallback)((e=>{o&&r.set(e)}),[o,r])]}({groupId:n}),y=(()=>{const e=s??d;return m({value:e,tabValues:r})?e:null})();(0,a.useLayoutEffect)((()=>{y&&l(y)}),[y]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),f(e)}),[c,f,r]),tabValues:r}}var y=o(3175);const g={tabList:"tabList_fLwR",tabItem:"tabItem_saY_"};function v(e){let{className:t,block:o,selectedValue:l,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),p=e=>{const t=e.currentTarget,o=u.indexOf(t),n=c[o].value;n!==l&&(d(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const o=u.indexOf(e.currentTarget)+1;t=u[o]??u[0];break}case"ArrowLeft":{const o=u.indexOf(e.currentTarget)-1;t=u[o]??u[u.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":o},t)},c.map((e=>{let{value:t,label:o,attributes:i}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:p},i,{className:(0,r.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":l===t})}),o??t)})))}function k(e){let{lazy:t,children:o,selectedValue:n}=e;const r=(Array.isArray(o)?o:[o]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function b(e){const t=f(e);return a.createElement("div",{className:(0,r.Z)("tabs-container",g.tabList)},a.createElement(v,(0,n.Z)({},e,t)),a.createElement(k,(0,n.Z)({},e,t)))}function w(e){const t=(0,y.Z)();return a.createElement(b,(0,n.Z)({key:String(t)},e))}},8122:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=o(328),a=(o(9231),o(4852));o(3964),o(9639);const r={},i="Wheel reference",l={unversionedId:"wheel-reference",id:"version-0.5.x/wheel-reference",title:"Wheel reference",description:"This reference explains Wheel prompt options and covers Ceramic configurations in more detail.",source:"@site/versioned_docs/version-0.5.x/wheel-reference.mdx",sourceDirName:".",slug:"/wheel-reference",permalink:"/docs/0.5.x/wheel-reference",draft:!1,tags:[],version:"0.5.x",frontMatter:{},sidebar:"docs",previous:{title:"Set up your environment",permalink:"/docs/0.5.x/set-up-your-environment"},next:{title:"Create your composite",permalink:"/docs/0.5.x/create-your-composite"}},s={},c=[{value:"Wheel prompt reference",id:"wheel-prompt-reference",level:2},{value:"Project Type",id:"project-type",level:3},{value:"Project Name",id:"project-name",level:3},{value:"Project Path",id:"project-path",level:3},{value:"Include Ceramic",id:"include-ceramic",level:3},{value:"Include ComposeDB",id:"include-composedb",level:3},{value:"Include ComposeDB Sample Application?",id:"include-composedb-sample-application",level:3},{value:"Admin DID Configuration",id:"admin-did-configuration",level:3},{value:"File to save DID private key to?",id:"file-to-save-did-private-key-to",level:3},{value:"CAS URL",id:"cas-url",level:3},{value:"CAS Authentication",id:"cas-authentication",level:3},{value:"Wheel config file location",id:"wheel-config-file-location",level:3},{value:"Configure Ceramic",id:"configure-ceramic",level:3},{value:"Would you like ceramic started as a daemon?",id:"would-you-like-ceramic-started-as-a-daemon",level:3},{value:"Ceramic configuration",id:"ceramic-configuration",level:2},{value:"Bundled or Remote IPFS",id:"bundled-or-remote-ipfs",level:3},{value:"State Store",id:"state-store",level:3},{value:"Bind address",id:"bind-address",level:3},{value:"Bind port",id:"bind-port",level:3},{value:"Cors origins",id:"cors-origins",level:3},{value:"Run as gateway?",id:"run-as-gateway",level:3},{value:"Indexing Database",id:"indexing-database",level:3}],u={toc:c},d="wrapper";function p(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"wheel-reference"},"Wheel reference"),(0,a.kt)("p",null,"This reference explains Wheel prompt options and covers Ceramic configurations in more detail."),(0,a.kt)("h2",{id:"wheel-prompt-reference"},"Wheel prompt reference"),(0,a.kt)("p",null,"With Wheel, you can fully customize your working directory. Below you can find a prompt reference\ncovering each step of the Wheel prompt."),(0,a.kt)("h3",{id:"project-type"},"Project Type"),(0,a.kt)("p",null,"Your project type based on the project development stage. You can choose one of\nthe following options:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"InMemory")," - recommended project type for developers who are new to Ceramic and ComposeDB.\nIt\u2019s the best option for projects in an early prototyping stage and getting familiar with Ceramic stack.\nThis option runs all of the processes in-memory and doesn\u2019t require you to configure Ceramic Anchor Service.\nThis also means that the data generated for your project will not be anchored on a blockchain and will be lost\nonce you close your terminal."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Dev")," - or projects in early testing/development stage. This is a recommended option for projects in an early\nideation stage or testing. Your node will connect to a dev-unstable network which is a Ceramic network dedicated\nto testing. Important thing to remember about dev-unstable network is that the data stored on this network is wiped\nout periodically as part of regular housekeeping. This means that the data streams generated for your project can be lost."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Clay")," - for projects in the active development stage. It\u2019s a recommended option for projects that are past the ideation\nstage. Your node will connect to the clay-testnet network and anchor the data streams so that they are available for you\nproject at any point of the development. Clay testnet, just like dev-unstable network gets wiped out periodically for\nhousekeeping reasons."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Mainnet")," - for projects in the production stage. This option will require you to do more advanced configurations for\nyour working environment. Generally, this option is only recommended for generating a production cofiguration file to be\nused with a production deployment like ",(0,a.kt)("a",{parentName:"li",href:"https://composedb.js.org/docs/0.4.x/guides/composedb-server/running-in-the-cloud"},"Kubernetes"),".")),(0,a.kt)("h3",{id:"project-name"},"Project Name"),(0,a.kt)("p",null,"Set the name for your project. You can use a default option ceramic-test-app or type a custom one. This\nname will be used to create a local directory of your project."),(0,a.kt)("h3",{id:"project-path"},"Project Path"),(0,a.kt)("p",null,"Path to your project local directory. You can use the default suggested path or specify a custom one."),(0,a.kt)("h3",{id:"include-ceramic"},"Include Ceramic"),(0,a.kt)("p",null,"An option to install Ceramic CLI and Ceramic dependencies in your working environment.\nDefaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"Y")," - yes. To skip Ceramic installation, type ",(0,a.kt)("inlineCode",{parentName:"p"},"n"),"."),(0,a.kt)("h3",{id:"include-composedb"},"Include ComposeDB"),(0,a.kt)("p",null,"An option to install ComposeDB CLI and dependencies in your working environment.\nDefaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"Y")," - yes. To skip ComposeDB installation, type ",(0,a.kt)("inlineCode",{parentName:"p"},"n"),"."),(0,a.kt)("h3",{id:"include-composedb-sample-application"},"Include ComposeDB Sample Application?"),(0,a.kt)("p",null,"An option to include and set up an example web3 social application built using ComposeDB\non Ceramic. This application can be used as an easy way to test ComposeDB features or use\nthis project as a basis for a new unique application. Defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"n")," - no. To opt-in, type ",(0,a.kt)("inlineCode",{parentName:"p"},"Y"),"."),(0,a.kt)("h3",{id:"admin-did-configuration"},"Admin DID Configuration"),(0,a.kt)("p",null,"Indexing is one of the key features of ComposeDB. In order to notify the Ceramic node which models have to be indexed, the\nComposeDB tools have to interact with the restricted Admin API. Calling the API requires an authenticated Decentralized\nIdentifier (DID) to be provided in the node configuration file. You can choose from the following options:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Generate DID and Private Key - generate a new admin DID as well as a private key (recommended for all new projects)"),(0,a.kt)("li",{parentName:"ul"},"Input From File - you will be given an option to input an existing private key as well as a corresponding admin DID")),(0,a.kt)("h3",{id:"file-to-save-did-private-key-to"},"File to save DID private key to?"),(0,a.kt)("p",null,"An option to store your DID private key on a specified local file. You can use a default path,\nspecify a custom one or skip this step if you don\u2019t want to store a DID private key on a local file by pressing esc on your keyboard."),(0,a.kt)("h3",{id:"cas-url"},"CAS URL"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Dev"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Clay")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Mainnet")," projects run a node that connects to CAS (Ceramic Anchor Service) to create anchor\ncommits on the blockchain for the data streams generated for your project. You will be given an option to specify CAS URL - you can\nuse the default suggestion (recommended in most of the cases) or specify a custom url if you run your own anchor service."),(0,a.kt)("h3",{id:"cas-authentication"},"CAS Authentication"),(0,a.kt)("p",null,"In order to control the nodes connected to CAS (Ceramic Anchor Service), you will have to ",(0,a.kt)("a",{parentName:"p",href:"https://composedb.js.org/docs/0.4.x/guides/composedb-server/access-mainnet"},"configure the authentication"),".\nThis will allow you to set or revoke DIDs for your nodes. You can choose from the following options:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Email Based Authentication - an email authentication methid. You will be asked to provide an email that will be used to provide you with an OTP code (a passcode) needed for the authentication."),(0,a.kt)("li",{parentName:"ul"},"IP Based Authentication (Deprecated) - currently deprecated authentication method. Not recommended for new Ceramic users.")),(0,a.kt)("h3",{id:"wheel-config-file-location"},"Wheel config file location"),(0,a.kt)("p",null,"Specifies the path to the Wheel configuration file. This file contains all parameters set during the Wheel configuration process. You can use the default suggestion\nor set a custom one."),(0,a.kt)("h3",{id:"configure-ceramic"},"Configure Ceramic"),(0,a.kt)("p",null,"When installing Ceramic you can either go with default configurations (recommended if you are new to Ceramic) or you can configure a bunch of parameters for how your node is set up.\nYou can choose one of the following options:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Skip: Use default configuration based on network"),(0,a.kt)("li",{parentName:"ul"},"Advanced: Configure all ceramic options")),(0,a.kt)("p",null,"Check out Ceramic configurations section to learn the details about the parameters you can configure for Basic and Advanced options."),(0,a.kt)("h3",{id:"would-you-like-ceramic-started-as-a-daemon"},"Would you like ceramic started as a daemon?"),(0,a.kt)("p",null,"An option to start your Ceramic daemon which will spin up the node using the Ceramic configuration you chose. Defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"Y")," - yes. If you want to skip and run your node later, type ",(0,a.kt)("inlineCode",{parentName:"p"},"n"),"."),(0,a.kt)("h2",{id:"ceramic-configuration"},"Ceramic configuration"),(0,a.kt)("p",null,"This section dives deeper into the Ceramic parameters you can configure when you choose ",(0,a.kt)("inlineCode",{parentName:"p"},"Advanced: Configure all ceramic options")," option in your wheel prompt."),(0,a.kt)("h3",{id:"bundled-or-remote-ipfs"},"Bundled or Remote IPFS"),(0,a.kt)("p",null,"An option to define if IFPS runs in the same compute process as Ceramic. You have two options to choose from:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Bundled - IPFS running in same compute process as Ceramic; recommended for early prototyping."),(0,a.kt)("li",{parentName:"ul"},"Remote - IPFS running in separate compute process; recommended for production and everything besides early prototyping.\nThis assumes that you have the IPFS process setup and can provide an IPFS Hostname.")),(0,a.kt)("h3",{id:"state-store"},"State Store"),(0,a.kt)("p",null,"An option to choose where your data will be persisted. To run a Ceramic node in production, it is critical to persist the\xa0",(0,a.kt)("a",{parentName:"p",href:"https://developers.ceramic.network/run/nodes/nodes/#ceramic-state-store"},"Ceramic state store"),"\nand the\xa0",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ipfs/go-ipfs/blob/master/docs/config.md#datastorespec"},"IPFS datastore"),". You can choose from two options:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Local - Ceramic state store will be stored on your machine's filesystem. This is a good option for early development and prototyping.\nIf you choose this option, you will be asked to provide a path to your preferred state store directory or you can go with a provided default option."),(0,a.kt)("li",{parentName:"ul"},"S3 - cloud statestore. It\u2019s a recommended option for production use cases. This assumes that you have an S3 bucked already setup and can provide\nthe path to your bucket running on the cloud.")),(0,a.kt)("h3",{id:"bind-address"},"Bind address"),(0,a.kt)("p",null,"Specifies the url for the Ceramic daemon. Defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1"),"."),(0,a.kt)("h3",{id:"bind-port"},"Bind port"),(0,a.kt)("p",null,"Specifies the port for Ceramic daemon. Defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"7071"),"."),(0,a.kt)("h3",{id:"cors-origins"},"Cors origins"),(0,a.kt)("p",null,"An option to define which domains are allowed to access the node using the http-api. Default option allows access to all domains."),(0,a.kt)("h3",{id:"run-as-gateway"},"Run as gateway?"),(0,a.kt)("p",null,"An option to run the node in a read-only mode. This option doesn\u2019t support data mutations."),(0,a.kt)("h3",{id:"indexing-database"},"Indexing Database"),(0,a.kt)("p",null,"Indexing is one of the key features of ComposeDB on Ceramic. ComposeDB indexes data to improve the query performance. You can choose which database will be used to store indexed data:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Sqlite - simple ",(0,a.kt)("a",{parentName:"li",href:"https://sqlite.org/index.html"},"sqlite")," database running on your local machine. This option is very lightweight, doesn\u2019t require advanced configurations and is\nrecommended for projects in an early development stage. When choosing this option you will be asked to configure the sqlite database location - either use your current working directory or specify a custom one."),(0,a.kt)("li",{parentName:"ul"},"Postgres - a Postgres database running on your local machine. This option requires a little bit more configuration and is required for production use cases. When you choose this option, you will be asked to provide\nthe Postgres Database connection string.")))}p.isMDXComponent=!0}}]);
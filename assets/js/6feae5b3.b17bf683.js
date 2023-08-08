"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9555],{4852:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(9231);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6003:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(9231),r=n(9841);const o={tabItem:"tabItem_f6V6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:n},t)}},1654:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(5675),r=n(9231),o=n(9841),i=n(2933),l=n(9409),s=n(8629),u=n(3462),c=n(7066);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=p(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,u]=g({queryString:n,groupId:a}),[d,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),h=(()=>{const e=s??d;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var h=n(7706);const k={tabList:"tabList_aSsb",tabItem:"tabItem_KPl2"};function b(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==l&&(d(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},i,{className:(0,o.Z)("tabs__item",k.tabItem,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",k.tabList)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function N(e){const t=(0,h.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},1571:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var a=n(5675),r=(n(9231),n(4852)),o=n(1654),i=n(6003);const l={},s="Server Configurations",u={unversionedId:"guides/composedb-server/server-configurations",id:"guides/composedb-server/server-configurations",title:"Server Configurations",description:"Manage the configurations for your ComposeDB server.",source:"@site/docs/guides/composedb-server/server-configurations.mdx",sourceDirName:"guides/composedb-server",slug:"/guides/composedb-server/server-configurations",permalink:"/docs/preview/guides/composedb-server/server-configurations",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"guides",previous:{title:"Running in the Cloud",permalink:"/docs/preview/guides/composedb-server/running-in-the-cloud"},next:{title:"Access Ceramic Mainnet",permalink:"/docs/preview/guides/composedb-server/access-mainnet"}},c={},d=[{value:"Default configurations",id:"default-configurations",level:2},{value:"Key configurations",id:"key-configurations",level:3},{value:"Changing configurations",id:"changing-configurations",level:3},{value:"Network",id:"network",level:2},{value:"Available networks",id:"available-networks",level:3},{value:"Setting the network",id:"setting-the-network",level:3},{value:"Changing networks",id:"changing-networks",level:3},{value:"SQL Database",id:"sql-database",level:2},{value:"Available SQL databases",id:"available-sql-databases",level:3},{value:"History Sync",id:"history-sync",level:2},{value:"IPFS Process",id:"ipfs-process",level:2},{value:"Available Configurations",id:"available-configurations",level:3},{value:"Persistent Storage",id:"persistent-storage",level:3},{value:"IPFS Datastore",id:"ipfs-datastore",level:3},{value:"Ceramic State Store",id:"ceramic-state-store",level:3},{value:"Next Steps",id:"next-steps",level:2}],p={toc:d},m="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"server-configurations"},"Server Configurations"),(0,r.kt)("p",null,"Manage the configurations for your ComposeDB server."),(0,r.kt)("h2",{id:"default-configurations"},"Default configurations"),(0,r.kt)("p",null,"When you start the daemon using the ",(0,r.kt)("inlineCode",{parentName:"p"},"ceramic daemon")," command, if a configuration file is not present in the expected path ",(0,r.kt)("inlineCode",{parentName:"p"},"$HOME/.ceramic/daemon.config.json"),", the command will create a new ",(0,r.kt)("inlineCode",{parentName:"p"},"daemon.config.json")," file with the following defaults:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "anchor": {\n        "ethereum-rpc-url": "https://eg_infura_endpoint" // Replace with an Ethereum RPC endpoint to avoid rate limiting\n    },\n    "http-api": {\n        "cors-allowed-origins": [\n            ".*"\n        ]\n    },\n    "ipfs": {\n        "mode": "remote",\n        "host": "http://ipfs_ip_address:5001"\n    },\n    "logger": {\n        "log-level": 2, // 0 is most verbose\n        "log-to-files": true\n    },\n    "network": {\n        "name": "mainnet", // Connect to mainnet, testnet-clay, or dev-unstable\n    },\n    "node": {},\n    "state-store": { \n        "mode": "fs", // volume storage option shared here, can be replaced by S3 mode & bucket\n                "local-directory": "/path_for_ceramic_statestore", // Defaults to $HOME/.ceramic/statestore\n    }\n}\n')),(0,r.kt)("h3",{id:"key-configurations"},"Key configurations"),(0,r.kt)("p",null,"These are the configurations you should pay close attention to, described below on this page:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Networks & Environments"),(0,r.kt)("li",{parentName:"ul"},"SQL Database"),(0,r.kt)("li",{parentName:"ul"},"History Sync"),(0,r.kt)("li",{parentName:"ul"},"IPFS Process")),(0,r.kt)("h3",{id:"changing-configurations"},"Changing configurations"),(0,r.kt)("p",null,"ComposeDB configurations can be set in two places: using the config file and using the CLI. Although we recommend making changes using the config file, for completeness this guide demonstrates both."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Using the ",(0,r.kt)("inlineCode",{parentName:"strong"},"daemon.config.json")," file (recommended)")),(0,r.kt)("p",null,"The config file is a JSON file used to set durable, long-lived node configurations. After making changes to the config file, be sure to save your changes then restart the daemon for them to take effect."),(0,r.kt)("p",null,"This is the preferred method for setting configs, especially for stable production usage."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Using the CLI")),(0,r.kt)("p",null,"The CLI can be used to set temporary, short-lived node configurations. To do this, pass designated CLI flags to the daemon at startup. This method is only recommended in a scripted test environment or when starting the daemon in a singleton way for test purposes."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"When using the CLI, always execute the same flags each time the node restarts or else you will reset to default settings.")),(0,r.kt)("h2",{id:"network"},"Network"),(0,r.kt)("p",null,"Networks are collections of nodes that communicate, store data, and share data. When running a ComposeDB server, you need to decide which network it will connect to."),(0,r.kt)("h3",{id:"available-networks"},"Available networks"),(0,r.kt)("p",null,"Each network has its own string designation. Find more information about the networks ",(0,r.kt)("a",{parentName:"p",href:"https://developers.ceramic.network/learn/networks/"},"here"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mainnet"),(0,r.kt)("td",{parentName:"tr",align:null},"Primary public production network"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"testnet-clay"),(0,r.kt)("td",{parentName:"tr",align:null},"Primary public test network"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dev-unstable"),(0,r.kt)("td",{parentName:"tr",align:null},"Core protocol debugging network, very experimental"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"local"),(0,r.kt)("td",{parentName:"tr",align:null},"Local instance for development"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Networks are completely isolated, distinct development environments. Models and data that exist on one network ",(0,r.kt)("em",{parentName:"p"},"do not")," exist on other networks, and are not portable.")),(0,r.kt)("h3",{id:"setting-the-network"},"Setting the network"),(0,r.kt)("p",null,"The system will default to ",(0,r.kt)("inlineCode",{parentName:"p"},"testnet-clay")," if a network is not set."),(0,r.kt)(o.Z,{defaultValue:"config",groupId:"config-or-cli",values:[{label:"Config File",value:"config"},{label:"CLI",value:"cli"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"config",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"network": {\n    "name": "testnet-clay"\n  }\n'))),(0,r.kt)(i.Z,{value:"cli",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Connect to testnet-clay network on startup\n\nceramic daemon --network "testnet-clay"\n')))),(0,r.kt)("h3",{id:"changing-networks"},"Changing networks"),(0,r.kt)("p",null,"To switch from one network to another, such as from ",(0,r.kt)("inlineCode",{parentName:"p"},"testnet-clay")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"mainnet"),":"),(0,r.kt)(o.Z,{defaultValue:"config",groupId:"config-or-cli",values:[{label:"Config File",value:"config"},{label:"CLI",value:"cli"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"config",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"network": {\n        "name": "mainnet"\n    }\n'))),(0,r.kt)(i.Z,{value:"cli",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'ceramic daemon --network "mainnet"\n')))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Be mindful that models and data are not portable across networks."),(0,r.kt)("p",{parentName:"admonition"},"If you seek to switch networks locally you need to either drop or move your default DB. To prevent data loss the preferred way is to simply move/rename the database."),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"Stop your node/ceramic daemon"),(0,r.kt)("li",{parentName:"ol"},"Depending on your default database configuration excute the folowing commands")),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"SQLite"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"mv ~/.ceramic/indexing.sqlite ~/.ceramic/indexing.sqlite.NETWORK")),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Postgres"),":"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"psql postgres")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ALTER DATABASE ceramic RENAME TO ceramic_NETWORK; \\q"))),(0,r.kt)("ol",{parentName:"admonition",start:3},(0,r.kt)("li",{parentName:"ol"},"Restart your ceramic daemon wth the newly desired network config and compose DB will setup the new default environment automatically")),(0,r.kt)("p",{parentName:"admonition"},"To switch back between networks simply follow the above steps again and return the desired backup to the default values:\n",(0,r.kt)("strong",{parentName:"p"},"SQLITE"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"~./ceramic/indexing.sqlite"),"\n",(0,r.kt)("strong",{parentName:"p"},"Postgres"),": Default DB Name: ",(0,r.kt)("inlineCode",{parentName:"p"},"ceramic"))),(0,r.kt)("h2",{id:"sql-database"},"SQL Database"),(0,r.kt)("p",null,"One of the most important configurations that you must set up is your database. This database will be used to store an index of data for all models used by your app."),(0,r.kt)("h3",{id:"available-sql-databases"},"Available SQL databases"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Postgres"),(0,r.kt)("td",{parentName:"tr",align:null},"recommended for everything besides early prototyping"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SQLite"),(0,r.kt)("td",{parentName:"tr",align:null},"Default option; can only be run locally, recommended for early prototyping"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Only Postgres is currently supported for production usage.")),(0,r.kt)("h2",{id:"history-sync"},"History Sync"),(0,r.kt)("p",null,"By default, Ceramic nodes will only index documents they observe using pubsub messages. In order to index documents created before the node was deployed or configured to index some models, ",(0,r.kt)("strong",{parentName:"p"},"History Sync")," needs to be enabled on the Ceramic node, in the ",(0,r.kt)("inlineCode",{parentName:"p"},"daemon.config.json")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    ...\n    "indexing": {\n    ...\n        "enable-historical-sync": true\n    }\n}\n')),(0,r.kt)("h2",{id:"ipfs-process"},"IPFS Process"),(0,r.kt)("h3",{id:"available-configurations"},"Available Configurations"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value?"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bundled"),(0,r.kt)("td",{parentName:"tr",align:null},"IPFS running in same compute process as Ceramic; recommended for early prototyping"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"remote"),(0,r.kt)("td",{parentName:"tr",align:null},"IPFS running in separate compute process; recommended for production and everything besides early prototyping"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"persistent-storage"},"Persistent Storage"),(0,r.kt)("p",null,"To run a Ceramic node in production, it is critical to persist the\xa0",(0,r.kt)("a",{parentName:"p",href:"https://developers.ceramic.network/run/nodes/nodes/#ceramic-state-store"},"Ceramic state store"),"\xa0and the\xa0",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ipfs/go-ipfs/blob/master/docs/config.md#datastorespec"},"IPFS datastore"),". The form of storage you choose should also be configured for disaster recovery with data redundancy, and some form of snapshotting and/or backups."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Loss of this data can result in permanent loss of Ceramic streams and will cause your node to be in a corrupt state.")),(0,r.kt)("p",null,"The Ceramic state store and IPFS datastore are stored on your machine's filesystem by default. The Ceramic state store defaults to\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"$HOME/.ceramic/statestore"),". The IPFS datastore defaults to\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"ipfs/blocks"),"\xa0located wherever you run IPFS."),(0,r.kt)("p",null,"The fastest way to ensure data persistence is by mounting a persistent volume to your instances and configuring the Ceramic and IPFS nodes to write to the mount location. The mounted volume should be configured such that the data persists if the instance shuts down."),(0,r.kt)("p",null,"You can also use AWS S3 for data storage which is supported for both Ceramic and IPFS. Examples of the configuration are shared on the Ceramic docs ",(0,r.kt)("a",{parentName:"p",href:"https://developers.ceramic.network/run/nodes/nodes/#example-aws-s3-policies"},"here"),"."),(0,r.kt)("h3",{id:"ipfs-datastore"},"IPFS Datastore"),(0,r.kt)("p",null,"The IPFS datastore stores the raw IPFS blocks that make up Ceramic streams. To prevent data corruption, use environment variables written to your profile file, or otherwise injected into your environment on start so that the datastore location does not change between reboots."),(0,r.kt)("p",null,"Note: Switching between data storage locations is an advanced feature and should be avoided. Depending on the sharding implementation you may need to do a data migration first. See\xa0",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ipfs/go-ipfs/blob/master/docs/config.md#datastorespec"},"t"),"he ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ipfs/go-ipfs/blob/master/docs/config.md#datastorespec"},"datastore spec"),"\xa0for more information."),(0,r.kt)("h3",{id:"ceramic-state-store"},"Ceramic State Store"),(0,r.kt)("p",null,"The Ceramic State Store holds state for pinned streams and the acts as a cache for the Ceramic streams that your node creates or loads. To ensure that the data you create with your Ceramic node does not get lost you must pin streams you care about and you must ensure that the state store does not get deleted."),(0,r.kt)("h2",{id:"next-steps"},"Next Steps"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/preview/guides/composedb-server/access-mainnet"},"Access Mainnet"))))}g.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4268],{4852:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(9231);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=o,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2526:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(9231),o=n(9841);const r={tabItem:"tabItem_Az8Q"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r.tabItem,l),hidden:n},t)}},3927:(e,t,n)=>{n.d(t,{Z:()=>b});var a=n(5527),o=n(9231),r=n(9841),l=n(8291),i=n(9409),s=n(8884),u=n(548),p=n(5806);function c(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function d(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=d(e),[l,i]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[s,u]=h({queryString:n,groupId:a}),[c,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,p.Nk)(n);return[a,(0,o.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),y=(()=>{const e=s??c;return m({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{y&&i(y)}),[y]);return{selectedValue:l,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),k(e)}),[u,k,r]),tabValues:r}}var y=n(772);const g={tabList:"tabList_ycGu",tabItem:"tabItem_mqcj"};function v(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=p.indexOf(t),a=u[n].value;a!==i&&(c(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},l,{className:(0,r.Z)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":i===t})}),n??t)})))}function f(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=k(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",g.tabList)},o.createElement(v,(0,a.Z)({},e,t)),o.createElement(f,(0,a.Z)({},e,t)))}function b(e){const t=(0,y.Z)();return o.createElement(w,(0,a.Z)({key:String(t)},e))}},5135:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var a=n(5527),o=(n(9231),n(4852)),r=n(3927),l=n(2526);const i={},s="Set up your environment",u={unversionedId:"set-up-your-environment",id:"set-up-your-environment",title:"Set up your environment",description:"The first step to build with ComposeDB is setting up your development environment. Currently, there are two ways of how you can configure your working environment:",source:"@site/docs/set-up-your-environment.mdx",sourceDirName:".",slug:"/set-up-your-environment",permalink:"/docs/preview/set-up-your-environment",draft:!1,tags:[],version:"current",frontMatter:{}},p={},c=[{value:"Installation using Wheel",id:"installation-using-wheel",level:2},{value:"Install the dependencies",id:"install-the-dependencies",level:3},{value:"Node.js",id:"nodejs",level:4},{value:"jq",id:"jq",level:4},{value:"PostgreSQL",id:"postgresql",level:4},{value:"Configure the development environment",id:"configure-the-development-environment",level:3},{value:"Interact with the example web3 social app",id:"interact-with-the-example-web3-social-app",level:3},{value:"Setting up",id:"setting-up",level:4},{value:"Interact with the application",id:"interact-with-the-application",level:4},{value:"Installation using JavaScript package managers",id:"installation-using-javascript-package-managers",level:2},{value:"Install the dependencies",id:"install-the-dependencies-1",level:3},{value:"Node.js",id:"nodejs-1",level:4},{value:"Ceramic",id:"ceramic",level:4},{value:"ComposeDB",id:"composedb",level:4},{value:"Setup",id:"setup",level:3},{value:"Run a Ceramic node",id:"run-a-ceramic-node",level:4},{value:"Developer Account",id:"developer-account",level:3},{value:"Generate your private key",id:"generate-your-private-key",level:4},{value:"Generate your account",id:"generate-your-account",level:4},{value:"Using your account",id:"using-your-account",level:3},{value:"Confirmation",id:"confirmation",level:3},{value:"Frequently Asked Questions",id:"frequently-asked-questions",level:2}],d={toc:c},m="wrapper";function h(e){let{components:t,...i}=e;return(0,o.kt)(m,(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"set-up-your-environment"},"Set up your environment"),(0,o.kt)("p",null,"The first step to build with ComposeDB is setting up your development environment. Currently, there are two ways of how you can configure your working environment:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#installation-using-wheel"},"Using the Wheel")," - the recommended and the easiest way to configure your working environment and install the necessary dependencies."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#installation-using-javascript-package-managers"},"Using JavaScript package managers")," - an alternative, more manual, way to configure your working environment which supports ",(0,o.kt)("inlineCode",{parentName:"li"},"npm"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"pnpm")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"yarn"),".")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Supported operating systems:")),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Linux"),(0,o.kt)("li",{parentName:"ul"},"Mac"),(0,o.kt)("li",{parentName:"ul"},"Windows (",(0,o.kt)("strong",{parentName:"li"},"only ",(0,o.kt)("a",{parentName:"strong",href:"https://learn.microsoft.com/en-us/windows/wsl/install"},"WSL2")," "),")"))),(0,o.kt)("h2",{id:"installation-using-wheel"},"Installation using Wheel"),(0,o.kt)("p",null,"The easiest and recommended way to configure your local development environment is by using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ceramicstudio/wheel.git"},"Wheel")," - a CLI starter tool for Ceramic that makes it easy to install necessary dependencies\nand run a Ceramic node enabled with ComposeDB."),(0,o.kt)("h3",{id:"install-the-dependencies"},"Install the dependencies"),(0,o.kt)("p",null,"In order to use Wheel, you\u2019ll have to install a few necessary dependencies:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Node.js"),(0,o.kt)("li",{parentName:"ul"},"jq"),(0,o.kt)("li",{parentName:"ul"},"PostgreSQL (optional, dependent on the network, see below)")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Node.js")," We've seen best results with Node.js v16. If you are using a different version (e.g. v18+), you may run into issues. Please use ",(0,o.kt)("inlineCode",{parentName:"p"},"nvm")," to install Node.js v16 for best results."),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"PostgreSQL:")," PostgreSQL is only required for a production configuration on the Mainnet. If you are new to ComposeDB on Ceramic and would like to quickly test it out, you can skip the\nPostgreSQL installation and come back to it once you are ready to scale your project.")),(0,o.kt)("h4",{id:"nodejs"},"Node.js"),(0,o.kt)("p",null,"If you don\u2019t already have them installed, you will need to install at least:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"NodeJS v20")),(0,o.kt)("li",{parentName:"ul"},"npm (installed automatically with NodeJS)")),(0,o.kt)("p",null,"Use this command to make sure you have the correct versions installed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"node -v\nnpm -v\n")),(0,o.kt)("h4",{id:"jq"},"jq"),(0,o.kt)("p",null,"You will likely need to install jq on your machine as well. The installation method will\nhighly depend on your operating system. Install it using one of the methods defined in\nthe ",(0,o.kt)("a",{parentName:"p",href:"https://stedolan.github.io/jq/download/"},"official tutorial here"),"."),(0,o.kt)("h4",{id:"postgresql"},"PostgreSQL"),(0,o.kt)("p",null,"You most likely don't need PostgreSQL when starting out, so you can safely skip this section, but once you are ready take your project to the next level and use more advanced configurations,\nyou will need Postgres installed on your machine to store indexed data. ",(0,o.kt)("strong",{parentName:"p"},"Postgres is required\nfor running your applications on the Mainnet and is optional for other networks.")),(0,o.kt)("p",null,"To install Postgres, follow ",(0,o.kt)("a",{parentName:"p",href:"https://www.postgresql.org/download/"},"instructions provided on official Postgres documentation"),".\nOnce installed, open Postgres in your command line:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"psql postgres\n")),(0,o.kt)("p",null,"Configure your database using the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"CREATE DATABASE ceramic;\n\nCREATE ROLE ceramic WITH PASSWORD 'password' LOGIN;\n\nGRANT ALL PRIVILEGES ON DATABASE \"ceramic\" to ceramic;\n")),(0,o.kt)("h3",{id:"configure-the-development-environment"},"Configure the development environment"),(0,o.kt)("p",null,"We will use Wheel to install all of the dependencies needed to run Ceramic and ComposeDB as well as configure the working environment\nfor your project. To download Wheel, open your terminal and run the command below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl --proto '=https' --tlsv1.2 -sSf https://raw.githubusercontent.com/ceramicstudio/wheel/main/wheel.sh | bash\n")),(0,o.kt)("p",null,"Once Wheel is downloaded you are good to start configuring your project working directory. To kick it off, run the command below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./wheel\n")),(0,o.kt)("p",null,"This command will start a prompt in your command line allowing you to configure your entire working environment - from what Ceramic dependencies\nyou\u2019d like to install to how your Ceramic node should be configured."),(0,o.kt)("p",null,"You can run the following command to learn more about available Wheel commands and options:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./wheel --help\n")),(0,o.kt)("p",null,"For developers who are completely new to Ceramic, we highly recommend starting the configuration with all default parameters. Go through the prompt\nand press Enter on your keyboard for each step. This will install the Ceramic and ComposeDB dependencies and spin up a local node running ",(0,o.kt)("inlineCode",{parentName:"p"},"InMemory"),"."),(0,o.kt)("p",null,"Moreover, this option will give you an option to set up an example web3 social app for you to interact with and test ComposeDB features."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Important:")," ",(0,o.kt)("a",{parentName:"p",href:"https://developers.ceramic.network/docs/composedb/guides/composedb-server/access-mainnet"},"Ceramic Anchor Service (CAS)")," is used to anchor Ceramic streams on a blockchain.\nCAS is require for ",(0,o.kt)("inlineCode",{parentName:"p"},"dev"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"testnet-clay")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"mainnet")," networks. Since ",(0,o.kt)("inlineCode",{parentName:"p"},"InMemory")," option doesn\u2019t use CAS, data generated for your project will not be persisted.")),(0,o.kt)("p",null,"If you are ready to dive into a more advanced configuration, head to ",(0,o.kt)("a",{parentName:"p",href:"https://developers.ceramic.network/docs/wheel/wheel-reference"},(0,o.kt)("strong",{parentName:"a"},"Wheel reference page\u2192"))," to learn more details about each parameter you can configure."),(0,o.kt)("h3",{id:"interact-with-the-example-web3-social-app"},"Interact with the example web3 social app"),(0,o.kt)("p",null,"One of the easiest ways to get familiar with ComposeDB is through an actual example application\nbuilt using ComposeDB on Ceramic."),(0,o.kt)("p",null,"This application is a simple implementation of Web3 social application and comes with the following features:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Sign-in using DID Key or your Ethereum wallet."),(0,o.kt)("li",{parentName:"ul"},"Create your user profile"),(0,o.kt)("li",{parentName:"ul"},"Create a post"),(0,o.kt)("li",{parentName:"ul"},"See posts created by other users in the Explore section of the app"),(0,o.kt)("li",{parentName:"ul"},"Follow other users")),(0,o.kt)("p",null,"Developers can use this application to easily test ComposeDB features, see example implementation or even use this application as a basis of their own\nunique project."),(0,o.kt)("h4",{id:"setting-up"},"Setting up"),(0,o.kt)("p",null,"This application is set up by selecting ",(0,o.kt)("inlineCode",{parentName:"p"},"Include ComposeDB Sample Application")," when following the Wheel setup.\nAt the very end of the Wheel prompt you will see the output similar to the one below. It means that the Ceramic node is up and running and that the example\napp is accessible following the specified path:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Application demo is available at\n/Users/user/ceramic-getting-started/wheel/ceramic-test-app/ceramic-test-app-app. To run the demo application:\n\ncd /Users/user/ceramic-getting-started/wheel/ceramic-test-app/ceramic-test-app-app\nnpm run nextDev\n")),(0,o.kt)("p",null,"The output above also provides the instructions on how to spin up the app. Open a new terminal and run the suggested commands."),(0,o.kt)("p",null,"Navigate to the example app project directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd /Users/user/ceramic-getting-started/wheel/ceramic-test-app/ceramic-test-app-app\n")),(0,o.kt)("p",null,"Spin up the app:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run nextDev\n")),(0,o.kt)("p",null,"This will launch the example app on a local server. The output of the command above should\nlook similar to the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"> demo@0.1.0 nextDev\n> next dev\n\nready - started server on 0.0.0.0:3000, url: http://localhost:3000\n")),(0,o.kt)("p",null,"Copy the provided url ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:3000")," and open it in your browser. This will launch the example application\nin your browser for you to interact with."),(0,o.kt)("h4",{id:"interact-with-the-application"},"Interact with the application"),(0,o.kt)("p",null,"Once your app is up and running you will be greeted with the following user interface:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Data Model Table",src:n(5210).Z,width:"2298",height:"1410"})),(0,o.kt)("p",null,"From now on you can interact with the application:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Authenticate using one of the provided methods:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.ceramic.network/docs/advanced/standards/accounts/key-did/"},"Key DID")," - it's a simple authentication method that encodes public key into a DID string"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.ceramic.network/docs/advanced/standards/accounts/pkh-did/"},"Ethereum DID PKH")," - an authentication metod which uses and Ethereum wallet (e.g. Metamask) to authenticate users"))),(0,o.kt)("li",{parentName:"ol"},"Create your account in the ",(0,o.kt)("inlineCode",{parentName:"li"},"Profile")," section of the app"),(0,o.kt)("li",{parentName:"ol"},"Create your first post in ",(0,o.kt)("inlineCode",{parentName:"li"},"Home")," section of the app"),(0,o.kt)("li",{parentName:"ol"},"See currently available posts in the ",(0,o.kt)("inlineCode",{parentName:"li"},"Explore")," section of the app")),(0,o.kt)("iframe",{width:"700",height:"500",src:"https://www.youtube.com/embed/QsCGK33pBIo",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,o.kt)("p",null,"After you interact with the application you can dive deeper into the underlying application files which you can find in the directory of your app.\nFamiliarise yourself with the actual implementations of specific features, e.g. - check out the ",(0,o.kt)("inlineCode",{parentName:"p"},"composites")," directory to see the implementation\nof data models used for this application."),(0,o.kt)("p",null,"Check out this tutorial for a more advanced explanations on how you can interact with this example app."),(0,o.kt)("h2",{id:"installation-using-javascript-package-managers"},"Installation using JavaScript package managers"),(0,o.kt)("p",null,"Another way to install the dependencies and configure Ceramic is using JavaScript package managers. This option requires more manual steps. The guide below covers this\nprocess step-by-step. If you have followed the ",(0,o.kt)("a",{parentName:"p",href:"#installation-using-wheel"},"Wheel installation")," guide above, you can skip this section."),(0,o.kt)("h3",{id:"install-the-dependencies-1"},"Install the dependencies"),(0,o.kt)("p",null,"Start with creating the project directory. Here you\u2019ll store all your app\u2019s local files:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir my-project #creates a new directory\ncd my-project #targets the created directory\n")),(0,o.kt)("h4",{id:"nodejs-1"},"Node.js"),(0,o.kt)("p",null,"If you don\u2019t already have them installed, you will need to install Node.js v16 and a package manager. We primarily use ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm"),", but ",(0,o.kt)("inlineCode",{parentName:"p"},"npm")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn")," are supported as well."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"NodeJS v20")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://pnpm.io/installation"},"pnpm v8"))),(0,o.kt)("p",null,"Use this command to make sure you have the correct versions installed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"node -v\npnpm -v\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Node.js")," We've seen best results with Node.js v20. If you are using a different version (e.g. v21+), you may run into issues. Please use ",(0,o.kt)("inlineCode",{parentName:"p"},"nvm")," to install Node.js v20 for best results.")),(0,o.kt)("h4",{id:"ceramic"},"Ceramic"),(0,o.kt)("p",null,"ComposeDB runs on Ceramic v3.x, so you will need to run a Ceramic node. To get started, we recommend running a local Ceramic node. If you're interested in running the production node, you can follow the ",(0,o.kt)("a",{parentName:"p",href:"https://blog.ceramic.network/configuring-a-ceramic-node-using-aws/"},"tutorial here"),"."),(0,o.kt)("p",null,"The Ceramic CLI provides a set of commands that make it easier to run and manage Ceramic nodes. We will start by installing the Ceramic CLI:"),(0,o.kt)(r.Z,{defaultValue:"pnpm",groupId:"npm-or-pnpm-or-yarn",values:[{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --location=global @ceramicnetwork/cli@next\n"))),(0,o.kt)(l.Z,{value:"pnpm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm install -g @ceramicnetwork/cli@next\n"))),(0,o.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Global packages are only supported for yarn 2.x and older. For yarn 3.x and newer, use ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn dlx")," to run composedb cli commands")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn global add @ceramicnetwork/cli@next\n")))),(0,o.kt)("h4",{id:"composedb"},"ComposeDB"),(0,o.kt)("p",null,"Next install the ComposeDB CLI, which enables you to interact with ComposeDB data from your terminal. Install ComposeDB CLI using the following command:"),(0,o.kt)(r.Z,{defaultValue:"pnpm",groupId:"npm-or-pnpm-or-yarn",values:[{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --location=global @composedb/cli@next\n"))),(0,o.kt)(l.Z,{value:"pnpm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add -g @composedb/cli@next\n"))),(0,o.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Global packages are only supported for yarn 2.x and older. For yarn 3.x and newer, use ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn dlx")," to run composedb cli commands")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn global add @composedb/cli@next\n")))),(0,o.kt)("p",null,"ComposeDB provides two additional libraries that support development:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/docs/preview/api/modules/devtools"},"@composedb/devtools")," containing utilities related to managing composites"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/docs/preview/api/modules/devtools_node"},"@composedb/devtools-node")," which contains utilities for interacting with the local file system and starting a local HTTP server.")),(0,o.kt)("p",null,"To install the development packages, run:"),(0,o.kt)(r.Z,{defaultValue:"pnpm",groupId:"package-manager",values:[{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -D @composedb/devtools@next @composedb/devtools-node@next\n"))),(0,o.kt)(l.Z,{value:"pnpm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add -D @composedb/devtools@next @composedb/devtools-node@next\n"))),(0,o.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add -D @composedb/devtools@next @composedb/devtools-node@next\n")))),(0,o.kt)("h3",{id:"setup"},"Setup"),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"run-a-ceramic-node"},"Run a Ceramic node"),(0,o.kt)("p",null,"You can check that everything was installed correctly by spinning up a Ceramic node. Running the command below will start the Ceramic node in local mode and connect to Clay testnet.\nIndexing is a key component of ComposeDB, which syncs data across nodes. Enable indexing by toggling:"),(0,o.kt)(r.Z,{defaultValue:"pnpm",groupId:"package-manager",values:[{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx @ceramicnetwork/cli daemon\n"))),(0,o.kt)(l.Z,{value:"pnpm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm dlx @ceramicnetwork/cli daemon\n"))),(0,o.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn dlx @ceramicnetwork/cli daemon\n")))),(0,o.kt)("p",null,"If you see the following output in your terminal, that means you have successfully started a local node and connected to Clay testnet \ud83d\ude80"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"IMPORTANT: Ceramic API running on 0.0.0.0:7007\n")),(0,o.kt)("h3",{id:"developer-account"},"Developer Account"),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"generate-your-private-key"},"Generate your private key"),(0,o.kt)("p",null,"You will need a private key for authorizing ComposeDB CLI commands in the later stages of development. You can generate it using the command below. Save it for later use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"composedb did:generate-private-key\n")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Important:")," Store your private key securely - the key allows changes to be made to you app. In addition, you will need it throughout the app development process.")),(0,o.kt)("h4",{id:"generate-your-account"},"Generate your account"),(0,o.kt)("p",null,"Indexing is one of the key features of ComposeDB. In order to notify the Ceramic node which models have to be indexed, the ComposeDB tools have to interact with the restricted Admin API. Calling the API requires an authenticated Decentralized Identifier (DID) to be provided in the node configuration file. Create a DID by running the following command, using the private key generated previously:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"composedb did:from-private-key your-private-key\n")),(0,o.kt)("p",null,"The generated DID key will have the following format:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},"did:key:...\n")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Copy this authenticated DID key and store it in a secure place, just like with your private key above. This DID key will have to be provided in your Ceramic node\u2019s configuration file which will ensure that only authorized users can make changes to your application, e.g. deploy models on your Ceramic node.")),(0,o.kt)("h3",{id:"using-your-account"},"Using your account"),(0,o.kt)("p",null,"The very first time you spin up a Ceramic node, a node configuration file is automatically created for you where you can configure how your node is operated. Here you have to provide the DID key which is authorised to interact with the Admin API.\nThe Ceramic node configuration file will be created inside of the automatically created directory ",(0,o.kt)("inlineCode",{parentName:"p"},"./ceramic")," in your home directory (usually ",(0,o.kt)("inlineCode",{parentName:"p"},"/home/USERNAME/")," on Linux or ",(0,o.kt)("inlineCode",{parentName:"p"},"/Users/USERNAME/")," on Mac). This directory can be accessed using the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/.ceramic\n")),(0,o.kt)("p",null,"Inside of this directory you should see the following files:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"daemon.config.json")," - your Ceramic node configuration file"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"statestore")," - a local directory for ",(0,o.kt)("a",{parentName:"li",href:"https://developers.ceramic.network/run/nodes/nodes/#ceramic-state-store"},"persisting the data"))),(0,o.kt)("p",null,"Open the ",(0,o.kt)("inlineCode",{parentName:"p"},"daemon.config.json")," file using your preferred code editor and provide the authenticated DID, generated in the ",(0,o.kt)("a",{parentName:"p",href:"#generate-your-account"},"generate your account")," step of this guide, in the ",(0,o.kt)("inlineCode",{parentName:"p"},"admin-dids")," section of the file as shown below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  ...\n  "http-api": {\n    ...\n    "admin-dids": ["did:key:..."]\n  },\n  "indexing": {\n    ...\n    "allow-queries-before-historical-sync": true\n  }\n}\n')),(0,o.kt)("p",null,"Save this file and restart your Ceramic node for the changes to be applied. To do that, simply stop the process that is running the Ceramic node by hitting ",(0,o.kt)("inlineCode",{parentName:"p"},"ctrl+C")," on your keyboard\nand spin up the node once again by following the steps in the ",(0,o.kt)("a",{parentName:"p",href:"#confirmation"},"Confirmation")," section of this guide."),(0,o.kt)("h3",{id:"confirmation"},"Confirmation"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"As a final test, spin up the Ceramic local node:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ceramic daemon --network=testnet-clay\n")),(0,o.kt)("p",null,"Once again, you should see your local Ceramic node up and running as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"IMPORTANT: Ceramic API running on 0.0.0.0:7007\n")),(0,o.kt)("p",null,"By this point you should have your development environment and all configurations in place to get started working on your application."),(0,o.kt)("h2",{id:"frequently-asked-questions"},"Frequently Asked Questions"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Some questions and issues come up more often than others. We've compiled a list of the most common ones here."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Which setup method is better: Wheel or JavaScript package managers?"),(0,o.kt)("div",null,(0,o.kt)("div",null,"Wheel is the recommended and the easiest way to configure your working environment and install all the necessary dependencies. We highly recommended going with Wheel if you are just starting out with Ceramic. Everything will be taken care of for you."),(0,o.kt)("div",null,"You might consider using JavaScript package managers if you are already familiar with Ceramic and need more manual configuration and control over your working environment."))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Which operating systems are supported?"),(0,o.kt)("div",null,(0,o.kt)("div",null,"It's best to run Ceramic and ComposeDB on Linux or a Mac. You can also run it on Windows but you'll have to use WSL2 (Windows Subsystem for Linux). See the supported operating systems section at the top."))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Which Node.js version is preferred?"),(0,o.kt)("div",null,(0,o.kt)("div",null,"We have seen the best results using Node.js v16. Earlier or later versions can cause issues for some users. While we're working on eliminating the issues, it's best to use Node v16 for now."))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"How long does it take to install the packages?"),(0,o.kt)("div",null,(0,o.kt)("div",null,"Installing everything (either with Wheel or JavaScript packages) takes usually between 2 and 5 minutes. Throughout the guide above you can find what kind of output you should be looking for to know that everything was installed correctly."))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Where in the system do I run all of the commands?"),(0,o.kt)("div",null,(0,o.kt)("div",null,"Sometimes, especially when using JavaScript package managers to install Ceramic and ComposeDB, it's easy to forget that you need to run all of the commands in the app's directory. This directory is either automatically created for you when using Wheel, or you create it manually when using JavaScript package managers."),(0,o.kt)("div",null,"When installing with JavaScript package managers you need to open 2-3 terminal windows and run different commands, so it's easy to miss that you can be in a wrong directory. Please make sure you run all the commands where they're supposed to run."))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Where can I find a Ceramic node configuration file, daemon.config.json?"),(0,o.kt)("div",null,(0,o.kt)("div",null,"When installing ComposeDB with JavaScript package managers, at some point you need to edit your Ceramic node config file. By default, it's in your home directory, in .ceramic folder (*not* in the app directory). It's easy to miss this detail so please check the path. This command should take you to the right directory: cd ~/.ceramic"))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"How to restart a node after stopping it?"),(0,o.kt)("div",null,"When you use Wheel to install Ceramic and ComposeDB, it takes care of the whole installation process. But please note that Wheel is just an installer, not a node launcher. If you want to launch Ceramic and ComposeDB again, after you have stopped it, you need to launch Ceramic daemon again and then launch ComposeDB."),(0,o.kt)("div",null,"You can launch Ceramic daemon by running the following command: ceramic daeomn --network=InMemory"),(0,o.kt)("div",null,"You can launch ComposeDB by running the command: composedb"),(0,o.kt)("div",null,'More on all of the composedb command options can be found in "2. Create your composite" section of this Getting Started guide.')),(0,o.kt)("details",null,(0,o.kt)("summary",null,"How do I interact with the data once Ceramic node is running?"),(0,o.kt)("div",null,(0,o.kt)("div",null,'The easiest way to interact with data is through a GraphQL Server. You can find all the details on how to set it up, launch, and interact with your data in section of this guide, "3. Interact with data"'))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Error when creating a composite: \u2716 request to http://localhost:7007/(...) failed, reason: connect ECONNREFUSED ::1:7007"),(0,o.kt)("div",null,(0,o.kt)("div",null,"The most likely cause is using Node.js v18. Please try using Node.js v16."))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Error: npm ERR! code EACCESS"),(0,o.kt)("div",null,(0,o.kt)("div",null,"The most likely cause is read/write access on your system. Try running the command with sudo privileges."))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"What if my question is not answered on this page?"),(0,o.kt)("div",null,(0,o.kt)("div",null),(0,o.kt)("div",null,"If your question is not answered in this guide, we recommend visiting our Community Forum (see the link in the footer). There, you can ask your question and get help from our community of developers and users. It's great to ask anything: from beginner to expert questions. The community and our developers are there to help you."))))}h.isMDXComponent=!0},5210:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/example-application-ui-3bd6ce650d4a921e278c9bba39cfee04.png"}}]);
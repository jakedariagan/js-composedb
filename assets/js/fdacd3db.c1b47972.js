"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1268],{54852:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(49231);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=r.createContext({}),l=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=l(a),m=o,h=c["".concat(d,".").concat(m)]||c[m]||p[m]||n;return a?r.createElement(h,s(s({ref:t},u),{},{components:a})):r.createElement(h,s({ref:t},u))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,s=new Array(n);s[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[c]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<n;l++)s[l]=a[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},69780:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>n,metadata:()=>i,toc:()=>l});var r=a(3262),o=(a(49231),a(54852));const n={},s="Access Ceramic Mainnet",i={unversionedId:"guides/composedb-server/access-mainnet",id:"version-0.5.x/guides/composedb-server/access-mainnet",title:"Access Ceramic Mainnet",description:"To join mainnet, you must register your Ceramic node with the 3Box Labs\u2019 Ceramic Anchor Service (CAS). The job of CAS is to anchor Ceramic streams on the Ethereum blockchain so your node will not work without access to CAS.",source:"@site/versioned_docs/version-0.5.x/guides/composedb-server/access-mainnet.mdx",sourceDirName:"guides/composedb-server",slug:"/guides/composedb-server/access-mainnet",permalink:"/docs/0.5.x/guides/composedb-server/access-mainnet",draft:!1,tags:[],version:"0.5.x",frontMatter:{},sidebar:"guides",previous:{title:"Server Configurations",permalink:"/docs/0.5.x/guides/composedb-server/server-configurations"},next:{title:"Data Storage",permalink:"/docs/0.5.x/guides/composedb-server/data-storage"}},d={},l=[{value:"Step 1. Start your node and copy your Key DID",id:"step-1-start-your-node-and-copy-your-key-did",level:2},{value:"Step 2. Verify your email address",id:"step-2-verify-your-email-address",level:2},{value:"Step 3. Register your DID",id:"step-3-register-your-did",level:2},{value:"Existing Node Operators",id:"existing-node-operators",level:2},{value:"Updating to DID based authentication",id:"updating-to-did-based-authentication",level:3},{value:"Rate Limits",id:"rate-limits",level:2},{value:"Revoking a DID",id:"revoking-a-did",level:2},{value:"Step 1. Verify your email address",id:"step-1-verify-your-email-address",level:3},{value:"Step 2. Send a revocation request",id:"step-2-send-a-revocation-request",level:3}],u={toc:l},c="wrapper";function p(e){let{components:t,...a}=e;return(0,o.kt)(c,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"access-ceramic-mainnet"},"Access Ceramic Mainnet"),(0,o.kt)("p",null,"To join mainnet, you must register your Ceramic node with the 3Box Labs\u2019 Ceramic Anchor Service (CAS). The job of CAS is to anchor Ceramic streams on the Ethereum blockchain so your node will not work without access to CAS."),(0,o.kt)("p",null,"To register you will need (1) a valid email address and (2) the DID used by your Ceramic daemon."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"IMPORTANT: The daemon config file should be considered secret and should not be shared because it will store a private seed used to authenticate your node to the 3Box Labs Ceramic Anchor Service. "),(0,o.kt)("p",{parentName:"admonition"},"If you need to share your node\u2019s configuration, you can safely copy and paste it from your daemon startup logs, which always excludes the private seed url.")),(0,o.kt)("h2",{id:"step-1-start-your-node-and-copy-your-key-did"},"Step 1. Start your node and copy your Key DID"),(0,o.kt)("p",null,"If this is your first time starting a Ceramic node, a random private seed url will be generated for you. The seed in this url is used to create a ",(0,o.kt)("a",{parentName:"p",href:"https://developers.ceramic.network/reference/accounts/key-did/"},"Key DID")," for your Ceramic node. When you start the daemon, it will display the Key DID in the console logs like the one below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"IMPORTANT: DID set to 'did:key:z6MkppuNZjR4QR8rxrPv4ejbGqgUcwwmxse47efsB3C1XnaM'\n")),(0,o.kt)("p",null,"Copy the quoted DID so you can use it later."),(0,o.kt)("h2",{id:"step-2-verify-your-email-address"},"Step 2. Verify your email address"),(0,o.kt)("p",null,"A valid email address is required so that you have a way to control the Ceramic nodes that are given access to the 3Box Labs anchor service. Using this email you will be able to register or revoke DIDs for your nodes."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"> curl --request POST \\\n  --url https://cas.3boxlabs.com/api/v0/auth/verification \\\n  --header 'Content-Type: application/json' \\\n  --data '{\"email\": \"youremailaddress\"}'\n")),(0,o.kt)("p",null,"You should see a response that says ",(0,o.kt)("inlineCode",{parentName:"p"},'"Please check your email for your verification code."')),(0,o.kt)("p",null,"Now check your email and copy the one time passcode enclosed within. It will be a string of letters and numbers ",(0,o.kt)("em",{parentName:"p"},"similar")," to this: ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"2451cc10-5a39-494d-b8eb-1971ecd813de"),".")),(0,o.kt)("h2",{id:"step-3-register-your-did"},"Step 3. Register your DID"),(0,o.kt)("p",null,"Use your DID, the one time passcode, and the same email address, to register your DID."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'> curl --request POST \\\n  --url https://cas.3boxlabs.com/api/v0/auth/did \\\n  --header \'Content-Type: application/json\' \\\n  --data \'{\n    "email": "youremailaddress",\n      "otp": "youronetimepasscode",\n      "dids": [\n          "yourdid"\n      ]\n  }\'\n')),(0,o.kt)("p",null,"You should see a response that says ",(0,o.kt)("inlineCode",{parentName:"p"},'[{"email":"youremailaddress","did":"yourdid","nonce":"0","status":"Active"}]'),"."),(0,o.kt)("p",null,"Finally, start your Ceramic node again. You will know that the DID registration was successful if you see logs in the console like the ones below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"IMPORTANT: Connected to anchor service 'https://cas.3boxlabs.com' with supported anchor chains ['eip155:1']\nIMPORTANT: Ceramic API running on 0.0.0.0:7007'\n")),(0,o.kt)("h2",{id:"existing-node-operators"},"Existing Node Operators"),(0,o.kt)("p",null,"Already running a node? Learn how to upgrade."),(0,o.kt)("p",null,"If you are already running a Ceramic daemon connected to mainnet, you have been using IP address based authentication to connect to the 3Box Labs mainnet CAS. You are not required to re-register or make any changes to your daemon, however please note that we will be deprecating IP address based authentication in the future. To prepare for deprecation, we recommend updating your daemon config file to use DID based authentication, then registering your DID with the steps above."),(0,o.kt)("p",null,"If you have run a Ceramic daemon before but have not yet connected to mainnet, you must update your daemon config file to use DID based authentication, then register your DID with the steps above."),(0,o.kt)("h3",{id:"updating-to-did-based-authentication"},"Updating to DID based authentication"),(0,o.kt)("p",null,"First you will need to generate a private seed. You can do this with the ComposeDB CLI."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"> composedb did:generate-private-key\n\u2714 Generating random private key... Done!\n99918d7f36991ec38d76e1cf21d14c5348d1513512c957d0b809efbf3ad18983\n")),(0,o.kt)("p",null,"Copy the string of numbers and letters logged to the console."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"As a security best practice, do not use any private key or seed more than once.")),(0,o.kt)("p",null,"Update your daemon.config.json file to set your anchor auth method and node private seed url."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'  "anchor": {\n    "auth-method": "did"\n  },\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'  "node": {\n    "privateSeedUrl": "inplace:ed25519#private_seed_copied_from_above"\n  },\n')),(0,o.kt)("p",null,"Save the file and follow the steps above to register your DID."),(0,o.kt)("h2",{id:"rate-limits"},"Rate Limits"),(0,o.kt)("p",null,"By default, requests to CAS are capped at 200 requests per second, 130 concurrent requests, and 10,000,000 requests per week. "),(0,o.kt)("p",null,"For larger apps, we can increase the cap to 600 requests per second, 400 concurrent requests, and 300,000,000 requests per week."),(0,o.kt)("p",null,"Interested in larger caps for your app? Reach out to ",(0,o.kt)("a",{parentName:"p",href:"mailto:partners@3box.io"},"partners@3box.io")," to discuss directly with our team."),(0,o.kt)("p",null,"As we improve scalability, expect rate limiting to be removed."),(0,o.kt)("h2",{id:"revoking-a-did"},"Revoking a DID"),(0,o.kt)("p",null,"If your private seed has been compromised or lost you should revoke your DID and generate a new one so that your daemon can not be impersonated. Each Ceramic daemon needs to have a unique DID in order for streams to be anchored correctly, so it is important that the private seed used to generate the DID is only used in one place."),(0,o.kt)("p",null,"To revoke your DID you will need the email address you used to register the DID."),(0,o.kt)("h3",{id:"step-1-verify-your-email-address"},"Step 1. Verify your email address"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"> curl --request POST \\\n  --url https://cas.3boxlabs.com/api/v0/auth/verification \\\n  --header 'Content-Type: application/json' \\\n  --data '{\"email\": \"youremailaddress\"}'\n")),(0,o.kt)("p",null,"Now check your email and copy the one time passcode enclosed within. It will be a string of letters and numbers similar to this: ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"2451cc10-5a39-494d-b8eb-1971ecd813de"),".")),(0,o.kt)("h3",{id:"step-2-send-a-revocation-request"},"Step 2. Send a revocation request"),(0,o.kt)("p",null,"Make a PATCH request to the endpoint below with your DID added to the end. The full url should like similar to ",(0,o.kt)("inlineCode",{parentName:"p"},"https://cas.3boxlabs.com/api/v0/auth/did/did:key:z6MkmrAdXvCBGzQVbHLNYq6y9gfFgmnYFqvmwktp3wyQFAok"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'> curl --request PATCH \\\n  --url https://cas.3boxlabs.com/api/v0/auth/did/yourdid \\\n  --header \'Content-Type: application/json\' \\\n  --data \'{"email": "youremailaddress", "otp": "youronetimepasscode"}\'\n')),(0,o.kt)("p",null,"You should see a response that says ",(0,o.kt)("inlineCode",{parentName:"p"},'{"email":\u201dyouremailaddress", "did": "yourdid", "status": "Revoked"}')))}p.isMDXComponent=!0}}]);
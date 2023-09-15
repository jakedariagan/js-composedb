"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4277],{54852:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var a=n(49231);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=p(n),c=i,f=s["".concat(d,".").concat(c)]||s[c]||k[c]||l;return n?a.createElement(f,r(r({ref:t},m),{},{components:n})):a.createElement(f,r({ref:t},m))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[s]="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},77346:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(3262),i=(n(49231),n(54852));const l={id:"devtools",title:"Module: devtools",custom_edit_url:null},r=void 0,o={unversionedId:"api/modules/devtools",id:"version-0.3.x/api/modules/devtools",title:"Module: devtools",description:"Development tools library.",source:"@site/versioned_docs/version-0.3.x/api/modules/devtools.md",sourceDirName:"api/modules",slug:"/api/modules/devtools",permalink:"/docs/0.3.x/api/modules/devtools",draft:!1,editUrl:null,tags:[],version:"0.3.x",frontMatter:{id:"devtools",title:"Module: devtools",custom_edit_url:null},sidebar:"api",previous:{title:"Developer tools",permalink:"/docs/0.3.x/category/developer-tools"},next:{title:"Module: devtools-node",permalink:"/docs/0.3.x/api/modules/devtools_node"}},d={},p=[{value:"Installation",id:"installation",level:2},{value:"Classes",id:"classes",level:2},{value:"Type Aliases",id:"type-aliases",level:2},{value:"AbstractCompositeDefinition",id:"abstractcompositedefinition",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"AbstractCreateModelDefinition",id:"abstractcreatemodeldefinition",level:3},{value:"Type declaration",id:"type-declaration-1",level:4},{value:"AbstractLoadModelDefinition",id:"abstractloadmodeldefinition",level:3},{value:"AbstractModelDefinition",id:"abstractmodeldefinition",level:3},{value:"AnySchema",id:"anyschema",level:3},{value:"CompositeInput",id:"compositeinput",level:3},{value:"CompositeOptions",id:"compositeoptions",level:3},{value:"Type declaration",id:"type-declaration-2",level:4},{value:"CompositeParams",id:"compositeparams",level:3},{value:"Type declaration",id:"type-declaration-3",level:4},{value:"CreateParams",id:"createparams",level:3},{value:"Type declaration",id:"type-declaration-4",level:4},{value:"EnumFieldDefinition",id:"enumfielddefinition",level:3},{value:"FieldCommonDefinition",id:"fieldcommondefinition",level:3},{value:"Type declaration",id:"type-declaration-5",level:4},{value:"FromJSONParams",id:"fromjsonparams",level:3},{value:"Type declaration",id:"type-declaration-6",level:4},{value:"FromModelsParams",id:"frommodelsparams",level:3},{value:"ItemDefinition",id:"itemdefinition",level:3},{value:"ListFieldDefinition",id:"listfielddefinition",level:3},{value:"ObjectDefinition",id:"objectdefinition",level:3},{value:"Type declaration",id:"type-declaration-7",level:4},{value:"ObjectFieldDefinition",id:"objectfielddefinition",level:3},{value:"ObjectFieldsDefinition",id:"objectfieldsdefinition",level:3},{value:"ObjectReferenceFieldDefinition",id:"objectreferencefielddefinition",level:3},{value:"ParsedCreateModelDefinition",id:"parsedcreatemodeldefinition",level:3},{value:"Type declaration",id:"type-declaration-8",level:4},{value:"ParsedLoadModelDefinition",id:"parsedloadmodeldefinition",level:3},{value:"Type declaration",id:"type-declaration-9",level:4},{value:"ParsedModelDefinition",id:"parsedmodeldefinition",level:3},{value:"ReferenceFieldDefinition",id:"referencefielddefinition",level:3},{value:"ReferenceFieldType",id:"referencefieldtype",level:3},{value:"ScalarFieldDefinition",id:"scalarfielddefinition",level:3},{value:"ScalarSchema",id:"scalarschema",level:3},{value:"SchemaDefinition",id:"schemadefinition",level:3},{value:"Type declaration",id:"type-declaration-10",level:4},{value:"ViewFieldDefinition",id:"viewfielddefinition",level:3},{value:"Functions",id:"functions",level:2},{value:"createAbstractCompositeDefinition",id:"createabstractcompositedefinition",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4}],m={toc:p},s="wrapper";function k(e){let{components:t,...n}=e;return(0,i.kt)(s,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Development tools library."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm install --dev @composedb/devtools\n")),(0,i.kt)("h2",{id:"classes"},"Classes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/0.3.x/api/classes/devtools.Composite"},"Composite"))),(0,i.kt)("h2",{id:"type-aliases"},"Type Aliases"),(0,i.kt)("h3",{id:"abstractcompositedefinition"},"AbstractCompositeDefinition"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"AbstractCompositeDefinition"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"commonEmbeds")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"),"[]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"models")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Record"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,i.kt)("a",{parentName:"td",href:"/docs/0.3.x/api/modules/devtools#abstractmodeldefinition"},(0,i.kt)("inlineCode",{parentName:"a"},"AbstractModelDefinition")),">")))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"abstractcreatemodeldefinition"},"AbstractCreateModelDefinition"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"AbstractCreateModelDefinition"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("h4",{id:"type-declaration-1"},"Type declaration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"action")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},'"create"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"model")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ModelDefinition"))))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"abstractloadmodeldefinition"},"AbstractLoadModelDefinition"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"AbstractLoadModelDefinition"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.3.x/api/modules/devtools#parsedloadmodeldefinition"},(0,i.kt)("inlineCode",{parentName:"a"},"ParsedLoadModelDefinition"))," & { ",(0,i.kt)("inlineCode",{parentName:"p"},"views"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"ModelViewsDefinition"),"  }"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"abstractmodeldefinition"},"AbstractModelDefinition"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"AbstractModelDefinition"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.3.x/api/modules/devtools#abstractcreatemodeldefinition"},(0,i.kt)("inlineCode",{parentName:"a"},"AbstractCreateModelDefinition"))," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.3.x/api/modules/devtools#abstractloadmodeldefinition"},(0,i.kt)("inlineCode",{parentName:"a"},"AbstractLoadModelDefinition"))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"anyschema"},"AnySchema"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"AnySchema"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.3.x/api/modules/devtools#scalarschema"},(0,i.kt)("inlineCode",{parentName:"a"},"ScalarSchema"))," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"JSONSchema.Array")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"JSONSchema.Object")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"compositeinput"},"CompositeInput"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"CompositeInput"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.3.x/api/classes/devtools.Composite"},(0,i.kt)("inlineCode",{parentName:"a"},"Composite"))," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.3.x/api/modules/devtools#compositeparams"},(0,i.kt)("inlineCode",{parentName:"a"},"CompositeParams"))),(0,i.kt)("p",null,"Supported composite input when comparing or merging composites."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"compositeoptions"},"CompositeOptions"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"CompositeOptions"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("p",null,"Supported options for merging composites."),(0,i.kt)("h4",{id:"type-declaration-2"},"Type declaration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"aliases?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Record"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"string"),">"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Additional Models aliases merged in the composite in addition to the ones present in the source composites.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"commonEmbeds?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},'"all"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},'"none"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"Iterable"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"string"),">"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Behavior to apply for merging common embeds: - ",(0,i.kt)("inlineCode",{parentName:"td"},"none")," (default) will not set an common embed - ",(0,i.kt)("inlineCode",{parentName:"td"},"all")," will merge all the common embeds found in any composite - explicit embed names to set as common embeds")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"views?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"CompositeViewsDefinition")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Additional views merged in the composite in addition to the ones present in the source composites.")))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"compositeparams"},"CompositeParams"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"CompositeParams"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("p",null,"Composite instance creation parameters."),(0,i.kt)("h4",{id:"type-declaration-3"},"Type declaration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"commits")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Record"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"StreamCommits"),">"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Model streams commits, that can be pushed to any Ceramic node to ensure the Model streams used by a composite are available.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"definition")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"InternalCompositeDefinition")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Internal metadata describing the composite.")))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"createparams"},"CreateParams"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"CreateParams"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("p",null,"Composite creation parameters from a schema."),(0,i.kt)("h4",{id:"type-declaration-4"},"Type declaration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ceramic")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"CeramicApi")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Ceramic instance connected to the node the new Model streams must be created on. The Ceramic instance ",(0,i.kt)("strong",{parentName:"td"},"must have an authenticated DID attached to it")," in order to create Models, using the ",(0,i.kt)("inlineCode",{parentName:"td"},"did:key")," method.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"index?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Whether to add the Models to the index or not. If ",(0,i.kt)("inlineCode",{parentName:"td"},"true")," (default), the Ceramic instance must be authenticated with an admin DID.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"schema")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Composite schema string.")))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"enumfielddefinition"},"EnumFieldDefinition"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"EnumFieldDefinition"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.3.x/api/modules/devtools#fieldcommondefinition"},(0,i.kt)("inlineCode",{parentName:"a"},"FieldCommonDefinition"))," & { ",(0,i.kt)("inlineCode",{parentName:"p"},"name"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"enum"'),"  }"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"fieldcommondefinition"},"FieldCommonDefinition"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"FieldCommonDefinition"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("h4",{id:"type-declaration-5"},"Type declaration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"required")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean"))))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"fromjsonparams"},"FromJSONParams"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"FromJSONParams"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("p",null,"Composite creation parameters from a JSON-encoded definition."),(0,i.kt)("h4",{id:"type-declaration-6"},"Type declaration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ceramic")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"CeramicApi")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Ceramic instance connected to the node where the Model stream will be pushed.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"definition")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"EncodedCompositeDefinition")),(0,i.kt)("td",{parentName:"tr",align:"left"},"JSON-encoded composite definition.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"index?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Whether to add the Models to the index or not. If ",(0,i.kt)("inlineCode",{parentName:"td"},"true"),", the Ceramic instance must be authenticated with an admin DID. Defaults to ",(0,i.kt)("inlineCode",{parentName:"td"},"false"),".")))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"frommodelsparams"},"FromModelsParams"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"FromModelsParams"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.3.x/api/modules/devtools#compositeoptions"},(0,i.kt)("inlineCode",{parentName:"a"},"CompositeOptions"))," & { ",(0,i.kt)("inlineCode",{parentName:"p"},"ceramic"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"CeramicApi")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"index?"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"models"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"[]  }"),(0,i.kt)("p",null,"Composite creation parameters from existing models."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"itemdefinition"},"ItemDefinition"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"ItemDefinition"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.3.x/api/modules/devtools#referencefielddefinition"},(0,i.kt)("inlineCode",{parentName:"a"},"ReferenceFieldDefinition"))," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.3.x/api/modules/devtools#scalarfielddefinition"},(0,i.kt)("inlineCode",{parentName:"a"},"ScalarFieldDefinition"))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"listfielddefinition"},"ListFieldDefinition"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"ListFieldDefinition"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.3.x/api/modules/devtools#fieldcommondefinition"},(0,i.kt)("inlineCode",{parentName:"a"},"FieldCommonDefinition"))," & { ",(0,i.kt)("inlineCode",{parentName:"p"},"item"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.3.x/api/modules/devtools#itemdefinition"},(0,i.kt)("inlineCode",{parentName:"a"},"ItemDefinition"))," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"maxLength"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"minLength?"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"list"'),"  }"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"objectdefinition"},"ObjectDefinition"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"ObjectDefinition"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("h4",{id:"type-declaration-7"},"Type declaration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"properties")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/0.3.x/api/modules/devtools#objectfieldsdefinition"},(0,i.kt)("inlineCode",{parentName:"a"},"ObjectFieldsDefinition")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"references")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"),"[]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"relations")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ModelRelationsDefinition"))))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"objectfielddefinition"},"ObjectFieldDefinition"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"ObjectFieldDefinition"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.3.x/api/modules/devtools#itemdefinition"},(0,i.kt)("inlineCode",{parentName:"a"},"ItemDefinition"))," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.3.x/api/modules/devtools#listfielddefinition"},(0,i.kt)("inlineCode",{parentName:"a"},"ListFieldDefinition"))," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.3.x/api/modules/devtools#viewfielddefinition"},(0,i.kt)("inlineCode",{parentName:"a"},"ViewFieldDefinition"))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"objectfieldsdefinition"},"ObjectFieldsDefinition"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"ObjectFieldsDefinition"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Record"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.3.x/api/modules/devtools#objectfielddefinition"},(0,i.kt)("inlineCode",{parentName:"a"},"ObjectFieldDefinition")),">"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"objectreferencefielddefinition"},"ObjectReferenceFieldDefinition"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"ObjectReferenceFieldDefinition"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.3.x/api/modules/devtools#fieldcommondefinition"},(0,i.kt)("inlineCode",{parentName:"a"},"FieldCommonDefinition"))," & { ",(0,i.kt)("inlineCode",{parentName:"p"},"name"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"object"'),"  }"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"parsedcreatemodeldefinition"},"ParsedCreateModelDefinition"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"ParsedCreateModelDefinition"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("h4",{id:"type-declaration-8"},"Type declaration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"accountRelation")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ModelAccountRelation"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"action")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},'"create"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"description")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"relations")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ModelRelationsDefinition"))))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"parsedloadmodeldefinition"},"ParsedLoadModelDefinition"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"ParsedLoadModelDefinition"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("h4",{id:"type-declaration-9"},"Type declaration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"action")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},'"load"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"id")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"parsedmodeldefinition"},"ParsedModelDefinition"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"ParsedModelDefinition"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.3.x/api/modules/devtools#parsedcreatemodeldefinition"},(0,i.kt)("inlineCode",{parentName:"a"},"ParsedCreateModelDefinition"))," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.3.x/api/modules/devtools#parsedloadmodeldefinition"},(0,i.kt)("inlineCode",{parentName:"a"},"ParsedLoadModelDefinition"))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"referencefielddefinition"},"ReferenceFieldDefinition"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"ReferenceFieldDefinition"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.3.x/api/modules/devtools#enumfielddefinition"},(0,i.kt)("inlineCode",{parentName:"a"},"EnumFieldDefinition"))," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.3.x/api/modules/devtools#objectreferencefielddefinition"},(0,i.kt)("inlineCode",{parentName:"a"},"ObjectReferenceFieldDefinition"))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"referencefieldtype"},"ReferenceFieldType"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"ReferenceFieldType"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.3.x/api/modules/devtools#referencefielddefinition"},(0,i.kt)("inlineCode",{parentName:"a"},"ReferenceFieldDefinition")),"[",(0,i.kt)("inlineCode",{parentName:"p"},'"type"'),"]"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"scalarfielddefinition"},"ScalarFieldDefinition"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"ScalarFieldDefinition"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.3.x/api/modules/devtools#fieldcommondefinition"},(0,i.kt)("inlineCode",{parentName:"a"},"FieldCommonDefinition"))," & { ",(0,i.kt)("inlineCode",{parentName:"p"},"schema"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.3.x/api/modules/devtools#scalarschema"},(0,i.kt)("inlineCode",{parentName:"a"},"ScalarSchema"))," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"scalar"'),"  }"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"scalarschema"},"ScalarSchema"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"ScalarSchema"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"JSONSchema.Boolean")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"JSONSchema.Integer")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"JSONSchema.Number")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"JSONSchema.String")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"schemadefinition"},"SchemaDefinition"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"SchemaDefinition"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("h4",{id:"type-declaration-10"},"Type declaration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"enums")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Record"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"string"),"[]",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"interfaces")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Record"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,i.kt)("a",{parentName:"td",href:"/docs/0.3.x/api/modules/devtools#objectdefinition"},(0,i.kt)("inlineCode",{parentName:"a"},"ObjectDefinition")),">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"models")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Record"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,i.kt)("a",{parentName:"td",href:"/docs/0.3.x/api/modules/devtools#parsedmodeldefinition"},(0,i.kt)("inlineCode",{parentName:"a"},"ParsedModelDefinition")),">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"objects")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Record"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,i.kt)("a",{parentName:"td",href:"/docs/0.3.x/api/modules/devtools#objectdefinition"},(0,i.kt)("inlineCode",{parentName:"a"},"ObjectDefinition")),">")))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"viewfielddefinition"},"ViewFieldDefinition"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"ViewFieldDefinition"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.3.x/api/modules/devtools#fieldcommondefinition"},(0,i.kt)("inlineCode",{parentName:"a"},"FieldCommonDefinition"))," & ",(0,i.kt)("inlineCode",{parentName:"p"},"RuntimeViewField")),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"createabstractcompositedefinition"},"createAbstractCompositeDefinition"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"createAbstractCompositeDefinition"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"schema"),"): ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.3.x/api/modules/devtools#abstractcompositedefinition"},(0,i.kt)("inlineCode",{parentName:"a"},"AbstractCompositeDefinition"))),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"schema")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/0.3.x/api/modules/devtools#abstractcompositedefinition"},(0,i.kt)("inlineCode",{parentName:"a"},"AbstractCompositeDefinition"))))}k.isMDXComponent=!0}}]);
(self.webpackChunk=self.webpackChunk||[]).push([[9802],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,k=u["".concat(p,".").concat(m)]||u[m]||l[m]||o;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3944:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>p,metadata:()=>c,toc:()=>d,default:()=>u});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),i=["components"],s={id:"kusama-endpoints",title:"Kusama Endpoints",sidebar_label:"Kusama Endpoints"},p=void 0,c={unversionedId:"kusama-endpoints",id:"kusama-endpoints",isDocsHomePage:!1,title:"Kusama Endpoints",description:"When interacting with the Kusama network via Polkadot-JS Apps or other UIs and programmatic",source:"@site/../docs/kusama-endpoints.md",sourceDirName:".",slug:"/kusama-endpoints",permalink:"/docs/kusama-endpoints",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/kusama-endpoints.md",version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1625202917,formattedLastUpdatedAt:"7/2/2021",frontMatter:{id:"kusama-endpoints",title:"Kusama Endpoints",sidebar_label:"Kusama Endpoints"}},d=[{value:"Parity Archive Node",id:"parity-archive-node",children:[]},{value:"Web3 Foundation Archive Node",id:"web3-foundation-archive-node",children:[]}],l={toc:d};function u(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},l,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When interacting with the ",(0,o.kt)("a",{parentName:"p",href:"https://kusama.network"},"Kusama network")," via ",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps"},"Polkadot-JS Apps")," or other UIs and programmatic\nmethods, you'd ideally be running your own node (",(0,o.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/maintain-sync"},"text guide"),",\n",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=31DdfcxbAVs"},"video guide"),"). Granted, that's not something everyone\nwants to do, so convenience trumps ideals in most cases. To facilitate this convenience, Kusama has\nseveral public endpoints you can use for your apps."),(0,o.kt)("h2",{id:"parity-archive-node"},"Parity Archive Node"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://parity.io"},"Parity"),", the company that develops the Polkadot Rust client, maintains an archive node at\nendpoint ",(0,o.kt)("inlineCode",{parentName:"p"},"wss://kusama-rpc.polkadot.io/"),"."),(0,o.kt)("p",null,"To connect to the Parity node, use the endpoint in your JavaScript apps like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const{ ApiPromise, WsProvider } = require('@polkadot/api')\n\n(async () => {\n    const provider = new WsProvider('wss://kusama-rpc.polkadot.io/')\n    const api = await ApiPromise.create({ provider })\n    // ...\n")),(0,o.kt)("p",null,"or in Polkadot-JS Apps by clicking the top-left corner of the screen and selecting the appropriate\noption:"),(0,o.kt)("img",{src:n(34253).Z,width:"40%"}),(0,o.kt)("h2",{id:"web3-foundation-archive-node"},"Web3 Foundation Archive Node"),(0,o.kt)("p",null,"The Web3 Foundation maintains an archive node at endpoint ",(0,o.kt)("inlineCode",{parentName:"p"},"wss://cc3-5.kusama.network/"),"."),(0,o.kt)("p",null,"To connect to this node, use the endpoint in your JavaScript apps like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const{ ApiPromise, WsProvider } = require('@polkadot/api')\n\n(async () => {\n    const provider = new WsProvider('wss://cc3-5.kusama.network/')\n    const api = await ApiPromise.create({ provider })\n    // ...\n")),(0,o.kt)("p",null,"Connect to it in Polkadot Apps UI by clicking the top-left corner of the screen and selecting the\nappropriate option:"),(0,o.kt)("img",{src:n(20495).Z,width:"40%"}))}u.isMDXComponent=!0},34253:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/kusama_endpoint_parity-10e108fffb7db2da14be467628b22aae.png"},20495:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/kusama_endpoint_web3-42c08df4d0590213af2e6a57cacd3448.png"}}]);
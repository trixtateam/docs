"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[696],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),h=d(n),u=i,g=h["".concat(l,".").concat(u)]||h[u]||p[u]||a;return n?o.createElement(g,s(s({ref:t},c),{},{components:n})):o.createElement(g,s({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[h]="string"==typeof e?e:i,s[1]=r;for(var d=2;d<a;d++)s[d]=n[d];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6568:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var o=n(7462),i=(n(7294),n(3905));const a={},s="Flows (Advanced)",r={unversionedId:"Choose your starting style/Shared/Flows/Advanced/index",id:"Choose your starting style/Shared/Flows/Advanced/index",title:"Flows (Advanced)",description:"Be sure to have first gone through Flows (Basic) before continuing here\u2026",source:"@site/docs/Choose your starting style/Shared/Flows/Advanced/index.md",sourceDirName:"Choose your starting style/Shared/Flows/Advanced",slug:"/Choose your starting style/Shared/Flows/Advanced/",permalink:"/docs/docs/Choose your starting style/Shared/Flows/Advanced/",draft:!1,editUrl:"https://github.com/trixtateam/docs/blob/master/docs/Choose your starting style/Shared/Flows/Advanced/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Flows",permalink:"/docs/docs/Choose your starting style/Shared/Flows/"},next:{title:"Flows (Basic)",permalink:"/docs/docs/Choose your starting style/Shared/Flows/Basic/"}},l={},d=[{value:"Running Flows and stopping them (process termination)",id:"running-flows-and-stopping-them-process-termination",level:2},{value:"Disconnected steps",id:"disconnected-steps",level:2},{value:"Versioning",id:"versioning",level:2},{value:"Config Wizard",id:"config-wizard",level:3},{value:"Settings",id:"settings",level:3},{value:"Version Name",id:"version-name",level:3},{value:"Save to Git (Remote)",id:"save-to-git-remote",level:3},{value:"Versions",id:"versions",level:3},{value:"Overlays",id:"overlays",level:2},{value:"Logging",id:"logging",level:2},{value:"Flow tags",id:"flow-tags",level:2}],c={toc:d};function h(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"flows-advanced"},"Flows (Advanced)"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Be sure to have first gone through ",(0,i.kt)("a",{parentName:"p",href:"/docs/docs/Choose%20your%20starting%20style/Shared/Flows/Basic/"},"Flows (Basic)")," before continuing here\u2026")),(0,i.kt)("h2",{id:"running-flows-and-stopping-them-process-termination"},"Running Flows and stopping them (process termination)"),(0,i.kt)("p",null,"Coming soon\u2026"),(0,i.kt)("h2",{id:"disconnected-steps"},"Disconnected steps"),(0,i.kt)("p",null,"It is possible to disconnect steps, when this happens we will show them at the top of the flow for you to either re-arrange or delete."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Untitled",src:n(6643).Z,width:"1088",height:"1340"})),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"These currently only show on reload of the Flow. In future we will have them show immediately or prevent the possibility completely.")),(0,i.kt)("h2",{id:"versioning"},"Versioning"),(0,i.kt)("p",null,"Versioning is essential for working in team and for safeguarding you from lost work. Currently we apply Versioning to Flows, in future we will apply it to all parts of Trixta. When a Flow is selected, use the Versioning panel by clicking on the indicated icon on the left."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Untitled",src:n(8752).Z,width:"1442",height:"1322"})),(0,i.kt)("p",null,"The idea here is to not only save individual versions of your Flows, but to also save these to a remote location so that you and your team can access it again from elsewhere. This is especially useful if the local versions are lost somehow. This Versioning panel is broken down into 5 sub-sections, together they help you perform the necessary steps to version and save to a remote location."),(0,i.kt)("h3",{id:"config-wizard"},"Config Wizard"),(0,i.kt)("p",null,"This panel is used to help set the initial versioning settings for your Flow based on an already existing Preset (See ",(0,i.kt)("a",{parentName:"p",href:"/docs/docs/Choose%20your%20starting%20style/Shared/Presets/"},"Presets"),")."),(0,i.kt)("p",null,"The following is an example of the shape of data needed for this preset. The values here are just examples, they would need to correctly correspond with values that would work when connecting to the remote."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n "branch_name": "feature/develop",\n "file_path": "default/flow/<...>.ex",\n "host": "gitlab.com",\n "project_id": "12345678",\n "project_name": "project-abc",\n "source_type": "gitlab",\n "token": "abcdefghijklmnopqrst"\n}\n')),(0,i.kt)("p",null,"This is typically something that would be setup early on and would only need to be done once. With it in place, we can now use the Config Wizard, to apply the Preset and make minor adjustments (like an appropriate file_path) before saving the settings."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Untitled",src:n(9786).Z,width:"2432",height:"1380"})),(0,i.kt)("p",null,"When clicking on the Config Wizard Submit button, the system will prompt for feedback. There will be a notification with a Reply button available bottom right. Click that to show the dialog."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Untitled",src:n(8500).Z,width:"1994",height:"1192"})),(0,i.kt)("p",null,"View the dialog, make any adjustments and submit to save the settings accordingly. Typically you would only be changing the File Path to match the name of your flow instead of the <\u2026> shown below."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Untitled",src:n(4196).Z,width:"1996",height:"1192"})),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"This entire section is more work for you than we would like. Ideally all things in Trixta should have sensible defaults to automatically give you great versioning settings and then only if you would like to tweak them, to let you do so.")),(0,i.kt)("h3",{id:"settings"},"Settings"),(0,i.kt)("p",null,"The Settings panel will display what is current set on the Flow you are viewing. You can adjust them here."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Untitled",src:n(8817).Z,width:"740",height:"1686"})),(0,i.kt)("h3",{id:"version-name"},"Version Name"),(0,i.kt)("p",null,"Providing a version with a name provides you with a point in time in which you can go back to. Set this whenever you reach a milestone or before saving to a remote location."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Untitled",src:n(534).Z,width:"730",height:"880"})),(0,i.kt)("h3",{id:"save-to-git-remote"},"Save to Git (Remote)"),(0,i.kt)("p",null,"To save a version to a Git Remote, indicate which version and provide a comment. Clicking on submit will use the settings you provided earlier and save to the remote for you."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Untitled",src:n(3710).Z,width:"730",height:"1062"})),(0,i.kt)("h3",{id:"versions"},"Versions"),(0,i.kt)("p",null,"The Versions panel will show you a list of all your versions for the selected Flow. Notice that the Source Type is sometimes ",(0,i.kt)("inlineCode",{parentName:"p"},"space")," and sometimes ",(0,i.kt)("inlineCode",{parentName:"p"},"gitlab")," - this just shows you whether the version is local to the space, or whether it was saved to the remote. Clicking on any of the versions will show a preview of the Flow at that time and also provide an option to overwrite your current version with the older version (useful if you have made a mistake and would like to backtrack)."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Untitled",src:n(1770).Z,width:"844",height:"1722"})),(0,i.kt)("h2",{id:"overlays"},"Overlays"),(0,i.kt)("p",null,"Coming soon\u2026"),(0,i.kt)("h2",{id:"logging"},"Logging"),(0,i.kt)("p",null,"Coming soon\u2026"),(0,i.kt)("h2",{id:"flow-tags"},"Flow tags"),(0,i.kt)("p",null,"Coming soon\u2026"))}h.isMDXComponent=!0},8752:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Untitled 1-8a9ddec843e8a091290e7a307e6e75e1.png"},9786:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Untitled 2-82bf1dd89d3bf1d296568f9829a0aae8.png"},8500:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Untitled 3-5498da36f740eeeaf7f513a3ef4047fa.png"},4196:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Untitled 4-d7e8bab71a178bbb51408e40586c36b8.png"},8817:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Untitled 5-c44bb35dfc9a204de6aeaded099cf185.png"},534:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Untitled 6-40d8ffef8de6180279e2ba79b8390335.png"},3710:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Untitled 7-e96284aa74d2b83c1565194f2d5c8bcf.png"},1770:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Untitled 8-95e90672d22c39f7cc60565389ffd8c1.png"},6643:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Untitled-c5c7eef242aa34ed46a010ee2a4abbfc.png"}}]);
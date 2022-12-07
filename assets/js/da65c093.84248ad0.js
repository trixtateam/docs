"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[973],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=a.createContext({}),d=function(e){var t=a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),h=d(o),c=n,m=h["".concat(s,".").concat(c)]||h[c]||p[c]||i;return o?a.createElement(m,l(l({ref:t},u),{},{components:o})):a.createElement(m,l({ref:t},u))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,l=new Array(i);l[0]=c;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[h]="string"==typeof e?e:n,l[1]=r;for(var d=2;d<i;d++)l[d]=o[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,o)}c.displayName="MDXCreateElement"},8107:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var a=o(7462),n=(o(7294),o(3905));const i={},l="Roles",r={unversionedId:"Choose your starting style/INT/Roles/index",id:"Choose your starting style/INT/Roles/index",title:"Roles",description:"Understanding what a Role is",source:"@site/docs/Choose your starting style/INT/Roles/index.md",sourceDirName:"Choose your starting style/INT/Roles",slug:"/Choose your starting style/INT/Roles/",permalink:"/docs/docs/Choose your starting style/INT/Roles/",draft:!1,editUrl:"https://github.com/trixtateam/docs/blob/master/docs/Choose your starting style/INT/Roles/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Agents",permalink:"/docs/docs/Choose your starting style/INT/Agents/"},next:{title:"STR",permalink:"/docs/docs/Choose your starting style/STR/"}},s={},d=[{value:"Understanding what a Role is",id:"understanding-what-a-role-is",level:2},{value:"Role view",id:"role-view",level:2},{value:"Create new Role",id:"create-new-role",level:2},{value:"Remove a Role",id:"remove-a-role",level:2},{value:"Edit a Role",id:"edit-a-role",level:2},{value:"Default Roles",id:"default-roles",level:2},{value:"Viewing individual Roles",id:"viewing-individual-roles",level:2},{value:"Role Authorization",id:"role-authorization",level:2},{value:"Role Grouping",id:"role-grouping",level:2},{value:"Role Cheatsheet",id:"role-cheatsheet",level:2},{value:"Exercises",id:"exercises",level:2},{value:"Videos",id:"videos",level:2}],u={toc:d};function h(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"roles"},"Roles"),(0,n.kt)("h2",{id:"understanding-what-a-role-is"},"Understanding what a Role is"),(0,n.kt)("p",null,"In Trixta, a Role is a logical grouping of Interactions that an Agent can more easily make sense of and assume the function of."),(0,n.kt)("p",null,"If you can imagine a Space that has 100 different ways of Interacting with it, it stands to reason that dividing that up into 10 Roles (each with 10 Interactions), would make a Role 10 times easier to understand and act on from the perspective of an Agent. Of course we wouldn\u2019t just arbitrarily divide Interactions up like this, we would group them logically in a way that was appropriate for the Product or Organisation you are operating in."),(0,n.kt)("admonition",{title:"Role",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"the function assumed or part played by a person or thing in a particular situation.")),(0,n.kt)("p",null,"And remember, because we explicitly allocate an Agent one or more Roles, that implies we deny them the ability to perform the other Roles. More often than not, the reasoning on where to draw the borders between Roles is around who or what should ",(0,n.kt)("em",{parentName:"p"},"not")," have access to certain Interactions."),(0,n.kt)("p",null,"The purpose of a Role is to simplify and divide up the responsibilities in your Space."),(0,n.kt)("h2",{id:"role-view"},"Role view"),(0,n.kt)("p",null,"Using Navigation \u2192 Browse, look for Roles underneath Space."),(0,n.kt)("p",null,"Selecting this will open up the Roles view which will list all the Roles you\u2019ve added to your Space as well as provide options to Create new, Edit or Remove them."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Untitled",src:o(2513).Z,width:"1846",height:"1390"})),(0,n.kt)("h2",{id:"create-new-role"},"Create new Role"),(0,n.kt)("p",null,"To create a new Role, enter a Name into the input box and hit Create."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Untitled",src:o(2068).Z,width:"602",height:"182"})),(0,n.kt)("p",null,"Confirm the dialog:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Untitled",src:o(8814).Z,width:"876",height:"326"})),(0,n.kt)("p",null,"Your new Role should appear in the View:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Untitled",src:o(9622).Z,width:"1538",height:"1480"})),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Be sure to scroll down if you cannot see your new Role, initially it may be added to the bottom before later getting arranged alphabetically.")),(0,n.kt)("h2",{id:"remove-a-role"},"Remove a Role"),(0,n.kt)("p",null,"Remove a Role by clicking the trash can icon at the top right of the block."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Untitled",src:o(2451).Z,width:"1188",height:"830"})),(0,n.kt)("h2",{id:"edit-a-role"},"Edit a Role"),(0,n.kt)("p",null,"To Edit a Role, click on it in the view and the Role Settings panel should appear. Here you can change the Name, Description, Tags, and set whether the Role is ",(0,n.kt)("inlineCode",{parentName:"p"},"unrestricted")," or not. An unrestricted Role would mean that all Agents, regardless of their Role allocation, can assume the Role."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Untitled",src:o(6347).Z,width:"2592",height:"1488"})),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Role settings are getting an upgrade, until then we have used tags to add experimental settings to roles which will become part of the form in future")),(0,n.kt)("p",null,"Here is a complete list of tags that serve a function when added to a Role:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"group:###")," - ",(0,n.kt)("a",{parentName:"li",href:"#viewing-individual-roles"},"Viewing individual Roles")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"grouped")," - ",(0,n.kt)("a",{parentName:"li",href:"#role-grouping"},"Role Grouping")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"auth:role:###")," - ",(0,n.kt)("a",{parentName:"li",href:"#role-authorization"},"Role Authorization")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"auth:type:role_reaction")," - ",(0,n.kt)("a",{parentName:"li",href:"#role-authorization"},"Role Authorization")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"auth:reaction:###")," - ",(0,n.kt)("a",{parentName:"li",href:"#role-authorization"},"Role Authorization"))),(0,n.kt)("h2",{id:"default-roles"},"Default Roles"),(0,n.kt)("p",null,"Spaces by default have a few Roles already baked in. The ones to take note of are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"everyone_anon")," - this Role is for all Agents, and it is unrestricted, meaning that any Agent logged in or not can assume this Role and perform the Interactions on it. Good for general anonymous Interactions."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"everyone_authed")," - this Role is for all Agents but only those who have logged in. Good for general Interactions where you at the very least know the identity of the Agent."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"trixta_ide_user")," - consider that the Trixta IDE runs on Trixta itself, this is the Role used to perform the Interactions needed to work with the IDE in general. You would reserve this Role for Agents you would like to join in on the design and creation of the space.")),(0,n.kt)("h2",{id:"viewing-individual-roles"},"Viewing individual Roles"),(0,n.kt)("p",null,"Earlier we viewed all Roles together in one view. There also exists a view for looking at a single Role in detail. We will go into this in more detail in the section around Interactions, but for now know that this is accessible when clicking on a specific Role in the browse or search results."),(0,n.kt)("p",null,"In the Browse tree structure, you may notice the ",(0,n.kt)("inlineCode",{parentName:"p"},"group:###")," tags taking effect. In the screenshot, the Roles: Buyer, Escrow and Seller all have a tag that reads ",(0,n.kt)("inlineCode",{parentName:"p"},"group:escrow")," added to them. This groups them in the tree to help you focus on associated Roles."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Untitled",src:o(5819).Z,width:"2606",height:"1562"})),(0,n.kt)("h2",{id:"role-authorization"},"Role Authorization"),(0,n.kt)("p",null,"In order for an Agent to assume a Role, they must first pass the Space\u2019s Authorization tests. We first need to trust that the Agent owns their Identity - we do that by asking for a password or token or make use of some other 3rd party Authentication mechanisms (like Google\u2019s)."),(0,n.kt)("p",null,"Once we trust that the Agent is who they say they are, we then test whether they have access to the Role in question. By default Trixta will store who has access to what and will handle this automatically. However, should you wish to customise what happens you can use the following tag options to indicate that you want a particular Role to have its own means of Authroization:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"auth:role:###")," - where ### would be the name of the Role to use."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"auth:type:role_reaction")," - means, delegate this to a Reaction on a role."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"auth:reaction:###")," - where ### would be the name of the Reaction on the Role.")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Before this section makes any sense, you\u2019ll need to learn about Interactions which are coming up. These are also a lot easier to understand in the context of an example or two, once you are more familiar with Trixta in general.")),(0,n.kt)("h2",{id:"role-grouping"},"Role Grouping"),(0,n.kt)("p",null,"This is extremely useful when you have a situation where you want to use the same Role design but have more than one potential grouping of them, in which an Agent should have access to one, but not necessarily the other."),(0,n.kt)("p",null,"For e.g. you may have a Doctor Role, but you would like them to be grouped by specific Hospitals. With a group, you would easily be able to allocate a Doctor Role to a particular Agent if you also specified the appropriate Hospital. This would prevent an Agent from one Hospital participating as a Doctor in some other Hospital."),(0,n.kt)("p",null,"Note that an Agent could be allocated Role access to more than one group if we wanted, the main take away here is that we can gain finer control by using Role Grouping."),(0,n.kt)("p",null,"To enable this feature on a Role you would add the tag ",(0,n.kt)("inlineCode",{parentName:"p"},"grouped")," to it. Now whenever an Agent tries to join a Role, they would also be required to specify which group."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Currently it is required to add custom authorization to Roles that are Grouped. ",(0,n.kt)("a",{parentName:"p",href:"#role-authorization"},"Role Authorization"))),(0,n.kt)("h2",{id:"role-cheatsheet"},"Role Cheatsheet"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Untitled",src:o(1414).Z,width:"1520",height:"970"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The relationship between Roles and Agents is many-to-many."),(0,n.kt)("li",{parentName:"ul"},"Each Role can have Interactions linked to it, these are exclusive to the Role they are linked to.")),(0,n.kt)("h2",{id:"exercises"},"Exercises"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Create a new Role in the demo Space"),(0,n.kt)("li",{parentName:"ol"},"Edit your new Role to be included in a new folder by using Tags to do so")),(0,n.kt)("h2",{id:"videos"},"Videos"),(0,n.kt)("p",null,"Coming soon\u2026"))}h.isMDXComponent=!0},2068:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/Untitled 1-4c5d6a17948c48e180eb7cf62cba7c21.png"},8814:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/Untitled 2-471f66c8de398bd71504bb83da292167.png"},9622:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/Untitled 3-145fe753dae8f905126f6baee32fa11f.png"},2451:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/Untitled 4-56783faddd34cf012a4f79889c6b940d.png"},6347:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/Untitled 5-7945554adaa39d87ab483eff20164da5.png"},5819:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/Untitled 6-af06261f666f61fecf5d1ca76dcd71b5.png"},1414:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/Untitled 7-3c29358985e725facd2c7769223c6a83.png"},2513:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/Untitled-1f470961cc1d69bc45d6c49b5d0761a1.png"}}]);
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[33],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),h=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=h(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=h(n),p=i,m=d["".concat(l,".").concat(p)]||d[p]||u[p]||o;return n?a.createElement(m,s(s({ref:t},c),{},{components:n})):a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=p;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[d]="string"==typeof e?e:i,s[1]=r;for(var h=2;h<o;h++)s[h]=n[h];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},668:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>h});var a=n(7462),i=(n(7294),n(3905));const o={},s="Interactions",r={unversionedId:"Trixta Documentation/Choose your starting style/Shared/Interactions",id:"Trixta Documentation/Choose your starting style/Shared/Interactions",title:"Interactions",description:"Understanding what Interactions are",source:"@site/docs/Trixta Documentation/Choose your starting style/Shared/Interactions.md",sourceDirName:"Trixta Documentation/Choose your starting style/Shared",slug:"/Trixta Documentation/Choose your starting style/Shared/Interactions",permalink:"/docs/docs/Trixta Documentation/Choose your starting style/Shared/Interactions",draft:!1,editUrl:"https://github.com/trixtateam/docs/blob/master/docs/Trixta Documentation/Choose your starting style/Shared/Interactions.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Flows",permalink:"/docs/docs/Trixta Documentation/Choose your starting style/Shared/Flows"},next:{title:"Presets",permalink:"/docs/docs/Trixta Documentation/Choose your starting style/Shared/Presets"}},l={},h=[{value:"Understanding what Interactions are",id:"understanding-what-interactions-are",level:2},{value:"Role view for Interactions",id:"role-view-for-interactions",level:2},{value:"Actions",id:"actions",level:2},{value:"Adding an Action",id:"adding-an-action",level:3},{value:"Removing an Action",id:"removing-an-action",level:3},{value:"Edit an Action",id:"edit-an-action",level:3},{value:"Reactions",id:"reactions",level:2},{value:"Adding a Reaction",id:"adding-a-reaction",level:3},{value:"Removing a Reaction",id:"removing-a-reaction",level:3},{value:"Edit a Reaction",id:"edit-a-reaction",level:3},{value:"Implications of Reactions that do not request data",id:"implications-of-reactions-that-do-not-request-data",level:3},{value:"Interactions view",id:"interactions-view",level:2},{value:"Interactions in depth",id:"interactions-in-depth",level:2},{value:"Send tags (Advanced)",id:"send-tags-advanced",level:2},{value:"Interactions Cheatsheet",id:"interactions-cheatsheet",level:2},{value:"Exercises",id:"exercises",level:2},{value:"Videos",id:"videos",level:2}],c={toc:h};function d(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"interactions"},"Interactions"),(0,i.kt)("h2",{id:"understanding-what-interactions-are"},"Understanding what Interactions are"),(0,i.kt)("p",null,"Interactions is the collective term for the two ways your Space interacts with the outside world, namely Actions and Reactions."),(0,i.kt)("p",null,"In order to understand the difference between the two, it is good to know that these Interactions always belong to a Role, and Roles are assumed by Agents, so really when we talk about Interactions, we can think of Agents interacting with your Space. "),(0,i.kt)("aside",null,"\ud83d\udca1 If you haven\u2019t learnt about Roles and Agents yet, don\u2019t worry - just know that your Space interacts with the outside world via Agents who assume Roles to keep things simple."),(0,i.kt)("p",null,"Agents interacting with your Space still sounds a bit cryptic, so to paint a clearer picture, let\u2019s assume that in this case an Agent is an end-user, a person using a web browser. Even though Agents can be much more than that, it will be helpful to reduce it to this while we explore the topic."),(0,i.kt)("aside",null,"\ud83d\udcd5 **Interaction** communication or direct involvement with someone or something."),(0,i.kt)("p",null,"So for now, when we talk about Interactions, let\u2019s think of a Person interacting with your Space. With this as our example, let us discuss the main difference between Actions and Reactions. The biggest difference between Actions and Reactions is from where they originate:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Actions originate from the Person,"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Person sends an Action to the Space,"),(0,i.kt)("li",{parentName:"ul"},"In other words, the Person requests the Space to act."),(0,i.kt)("li",{parentName:"ul"},"This is the start of a new process."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Reactions originate from the Space,"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The Space sends a Reaction to the Person,"),(0,i.kt)("li",{parentName:"ul"},"In other words, the Space requests the Person to react."),(0,i.kt)("li",{parentName:"ul"},"This happens somewhere in the middle of a process started by some other Action.")))),(0,i.kt)("aside",null,"\ud83d\udca1 The term \u2018process\u2019 is used loosely above, here we have general business or organisation process or workflow that happens in your product or service in mind."),(0,i.kt)("p",null,"Interactions provide a way for a Space to send and receive contextualized information."),(0,i.kt)("h2",{id:"role-view-for-interactions"},"Role view for Interactions"),(0,i.kt)("p",null,"To view the Interactions on a Role, first find and select it from the Navigation tree. Try this now with the ",(0,i.kt)("inlineCode",{parentName:"p"},"everyone_anon")," Role. In the middle pane you will see an overview of the Role including a list of Actions (on the left, in blue), and Reactions (on the right, in purple)"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Untitled",src:n(2293).Z,width:"2612",height:"1558"})),(0,i.kt)("p",null,"Clicking on Actions underneath the Role in the Navigation tree, you will get a view that is only for Actions of this Role."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Untitled",src:n(9343).Z,width:"1702",height:"1394"})),(0,i.kt)("p",null,"Similarly, clicking on the Reactions underneath the Role in the Navigation tree, you will get a view that is only for Reactions of this Role."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Untitled",src:n(2035).Z,width:"1490",height:"1346"})),(0,i.kt)("aside",null,"\ud83d\udca1 For both Actions and Reactions, there is an even more focused view which can be found if selecting a single Interaction in the Navigation tree. This will show a view dedicated to just the item selected."),(0,i.kt)("h2",{id:"actions"},"Actions"),(0,i.kt)("p",null,"Recall that an Action is sent from the Person (more specifically an Agent) to the Space, it is a request for the Space to act in some way, usually by starting a new workflow or process."),(0,i.kt)("p",null,"The two most important attributes of an Action is its name and the shape of the data that gets sent."),(0,i.kt)("h3",{id:"adding-an-action"},"Adding an Action"),(0,i.kt)("p",null,"To create a new Action, enter in a Name into the input box and hit Create."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Untitled",src:n(964).Z,width:"590",height:"104"})),(0,i.kt)("p",null,"Confirm the dialog if the name and the Role is as you intended:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Untitled",src:n(4699).Z,width:"1136",height:"324"})),(0,i.kt)("p",null,"Your new Action should now appear on the Role."),(0,i.kt)("aside",null,"\ud83d\udca1 Note that when creating a new Action, a new Flow of the same name is created and linked to it for your convenience. You may not yet know what a Flow is, it is just worthwhile noting that this happens automatically when creating a new Action."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Untitled",src:n(8691).Z,width:"704",height:"644"})),(0,i.kt)("h3",{id:"removing-an-action"},"Removing an Action"),(0,i.kt)("p",null,"Remove an Action by clicking the trash can icon at the top right of the block."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Untitled",src:n(648).Z,width:"1014",height:"762"})),(0,i.kt)("h3",{id:"edit-an-action"},"Edit an Action"),(0,i.kt)("p",null,"To Edit an Action, click on it in the view and the Action Settings panel should appear."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Untitled",src:n(563).Z,width:"2200",height:"1442"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Actions settings:")," "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Name,"),(0,i.kt)("li",{parentName:"ul"},"Description,"),(0,i.kt)("li",{parentName:"ul"},"Handler - this is what the Space will do when it receives this Action and is usually set to a Flow or None (if you want to disengage the Action for whatever reason),"),(0,i.kt)("li",{parentName:"ul"},"Tags, used to add extra information or to provide extra functionality",(0,i.kt)("aside",null,"\ud83d\udca1 Action settings are getting an upgrade, until then we have used tags to add experimental settings to Actions which will become part of the form in future"),"Here is a complete list of tags that serve a function when added to an Action: - `debug:true` - adding this will cause this Action to run in debug mode, be sure to remove it when no longer debugging. (Note: this will move to the Flow in a future upgrade) - \u2026")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Untitled",src:n(3450).Z,width:"1228",height:"1822"})),(0,i.kt)("p",null,"The following schema and settings work with ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rjsf-team/react-jsonschema-form"},"https://github.com/rjsf-team/react-jsonschema-form")," (rjsf). The schema follow the ",(0,i.kt)("a",{parentName:"p",href:"https://json-schema.org/"},"Json Schema")," standard. We use this schema to describe various data shapes in Trixta."),(0,i.kt)("aside",null,"\ud83d\udca1 Reading the documentation for rjsf will help with understanding how best to work with this: [https://react-jsonschema-form.readthedocs.io/en/latest/](https://react-jsonschema-form.readthedocs.io/en/latest/)",(0,i.kt)("p",null,"The playground is useful to getting a quick idea on how it works: ",(0,i.kt)("a",{parentName:"p",href:"https://rjsf-team.github.io/react-jsonschema-form/"},"https://rjsf-team.github.io/react-jsonschema-form/"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Request schema")),(0,i.kt)("p",null,"The request schema is used to define the shape of the data that the request, i.e the data getting sent from the Agent to the Space should look like.This helps the Space validate incoming requests by ensuring it complies with the schema. It also helps document the Action, leaving it easier for others to understand. Leaving a schema blank means that anything is valid."),(0,i.kt)("p",null,"Defining the parts of the data with names and their types is the most important thing to do. Next would be to list which are required (implying those that are not are optional). Json Schema can handle a lot of complex situation, like when some parts of the schema are dependent on others, this will make more sense in light of an example or two."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Request settings")),(0,i.kt)("p",null,"The request settings have less to do with describing the data shape, but rather, it provides instructions on how to best display it as a form when there is a UI involved. This has a slightly different name in rjsf, it is called uiSchema. Generally ours works in the exact same way, where in some cases we have extended it a bit further to do things beyond what rsfj envisioned, such as using it to generate non-form UI."),(0,i.kt)("p",null,"To get a basic idea, with the request settings you can do things like set the order of the fields, override default controls with custom ones, etc."),(0,i.kt)("p",null,"Here is a useful link to get familiar with the kinds of things one can do: ",(0,i.kt)("a",{parentName:"p",href:"https://react-jsonschema-form.readthedocs.io/en/latest/api-reference/uiSchema/"},"https://react-jsonschema-form.readthedocs.io/en/latest/api-reference/uiSchema/")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Response schema")),(0,i.kt)("p",null,"The response schema uses the same syntax as the request schema, but instead is used for the reply back to the Person from the Space. This is an underdeveloped area of Trixta in that even if you were to set this, it would not have any noticeable effect other than improving documentation. At a later stage it will become more useful."),(0,i.kt)("h2",{id:"reactions"},"Reactions"),(0,i.kt)("h3",{id:"adding-a-reaction"},"Adding a Reaction"),(0,i.kt)("p",null,"To create a new Reaction, enter in a Name into the input box and hit Create."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Untitled",src:n(5759).Z,width:"604",height:"108"})),(0,i.kt)("p",null,"Confirm the dialog if the name and the Role is as you intended:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Untitled",src:n(977).Z,width:"1188",height:"328"})),(0,i.kt)("p",null,"Your new Reaction should now appear on the Role."),(0,i.kt)("h3",{id:"removing-a-reaction"},"Removing a Reaction"),(0,i.kt)("p",null,"Remove a Reaction by clicking the trash can icon at the top right of the block."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Untitled",src:n(7186).Z,width:"970",height:"410"})),(0,i.kt)("h3",{id:"edit-a-reaction"},"Edit a Reaction"),(0,i.kt)("p",null,"To Edit a Reaction, click on it in the view and the Reaction Settings panel should appear."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Untitled",src:n(4164).Z,width:"2274",height:"1448"})),(0,i.kt)("p",null,"Rea",(0,i.kt)("strong",{parentName:"p"},"ctions settings:")," "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("del",{parentName:"li"},"Name,")),(0,i.kt)("li",{parentName:"ul"},"Description,"),(0,i.kt)("li",{parentName:"ul"},"Tags, used to add extra information or to provide extra functionality",(0,i.kt)("aside",null,"\ud83d\udca1 Reaction settings are getting an upgrade, until then we have used tags to add experimental settings to Reactions which will become part of the form in future"),"Here is a complete list of tags that serve a function when added to an Reaction: - `debug:true` - adding this will cause this Reaction to run in debug mode, be sure to remove it when no longer debugging. - `send:###` - [Send tags (Advanced)](/docs/docs/Trixta%20Documentation/Choose%20your%20starting%20style/Shared/Interactions)")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Untitled",src:n(2914).Z,width:"1208",height:"1090"})),(0,i.kt)("aside",null,"\u26a0\ufe0f Beware, we discuss the settings below first the schema then the settings, in the UI above these two are in the opposite order and does not match the ordering of the Actions panel either. We will fix this, but until then pay attention to the name of the setting to know which is which."),(0,i.kt)("p",null,"These work in the same way as the Action request schema and settings. Please refer back to that section for details:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/docs/Trixta%20Documentation/Choose%20your%20starting%20style/Shared/Interactions"},"The following schema and settings work with https://github.com/rjsf-team/react-jsonschema-form (rjsf). The schema follow the [Json Schema](https://json-schema.org/) standard. We use this schema to describe various data shapes in Trixta.")," "),(0,i.kt)("h3",{id:"implications-of-reactions-that-do-not-request-data"},"Implications of Reactions that do not request data"),(0,i.kt)("p",null,"In Trixta it is possible, even encouraged, to have Reactions whose request schemas are either null (nothing), or has an object in which each property\u2019s data type is null (nothing). The implication here is that the Space is not requesting any information back. We say that this is ",(0,i.kt)("strong",{parentName:"p"},"for Effect")," (as opposed to the alternative: ",(0,i.kt)("strong",{parentName:"p"},"for Response"),"). "),(0,i.kt)("p",null,"For e.g. receiving a push notification to say that your delivery is on its way, would be an example of a Request for Effect. The provider isn\u2019t asking you to reply back to them as such, however they do want to have an Effect on you, they want you to now know that your delivery is on the way. You received information and that is the end of that specific Interaction."),(0,i.kt)("aside",null,"\ud83d\udca1 We plan to have this characteristic of a Reaction, whether a Request for Effect or Request for Response, more clearly indicated in future - in turns out it is really useful for everyone involved to quickly and easily recognise which the designer of the Reaction intended."),(0,i.kt)("h2",{id:"interactions-view"},"Interactions view"),(0,i.kt)("p",null,"The Interactions view is makes use of the schemas and settings of your Actions and Reactions to provide a sort of automatically generated UI. This UI is very useful when building in that you can test and prototype your work without waiting for an UI to be built as such. It is also a great learning tool to help you interact with your Space. It also comes in handy for when a team is unsure where a bug lies, this can quickly help determine whether an issue is in a custom interface or within the work done in Trixta. "),(0,i.kt)("p",null,"To show the Interactions view, first select it from the Trixta menu \u2192 Interactions \u2192 Interactions."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Untitled",src:n(1681).Z,width:"1752",height:"1130"})),(0,i.kt)("p",null,"When shown the Interactions view looks something like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Untitled",src:n(7983).Z,width:"1792",height:"1484"})),(0,i.kt)("p",null,"The idea here is that you can look at how what you have built feels like for an Agent fulfilling a particular Role, or how perhaps two Roles might experience things as they interact with each other via the Space. Either way it is important to first select one or more Roles in the Roles dropdown before you will see any applicable Actions and Reactions below."),(0,i.kt)("aside",null,"\ud83d\udca1 One can use Grouped Roles in this view. To do so, instead of selecting your Role from the dropdown, rather type it in, using the group syntax: `role[group]`, i.e. the name of your role, open square bracket, then the group, close square bracket."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Untitled",src:n(3955).Z,width:"1578",height:"1510"})),(0,i.kt)("p",null,"You can further filter the Actions and Reaction by name, or tag by using a common separated list in the Filter box. The Show only action reactions checkbox is useful to hide all reactions that have no data, i.e. only show those that have been send to the Agent."),(0,i.kt)("aside",null,"\ud83d\udca1 Tip, you can open up multiple IDE tabs in your browser and connect to different roles in each to get a better feeling for how your software works between Roles. Having them in separate tabs helps reduce the clutter"),(0,i.kt)("p",null,"This screen is very new, we have a lot planned for it - the idea is for it to improve productivity and understanding for both you and your team."),(0,i.kt)("h2",{id:"interactions-in-depth"},"Interactions in depth"),(0,i.kt)("p",null,"Coming soon\u2026"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Theory: About Assumed Goal and Delegation"),(0,i.kt)("li",{parentName:"ul"},"Theory: Inverted CQRS. For Effect, For Response")),(0,i.kt)("h2",{id:"send-tags-advanced"},"Send tags (Advanced)"),(0,i.kt)("p",null,"Coming soon\u2026"),(0,i.kt)("h2",{id:"interactions-cheatsheet"},"Interactions Cheatsheet"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Untitled",src:n(5002).Z,width:"1380",height:"1220"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Role have zero, one or many Actions or Reactions."),(0,i.kt)("li",{parentName:"ul"},"Interactions connect Roles to Flows.")),(0,i.kt)("h2",{id:"exercises"},"Exercises"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create a new Action on the ",(0,i.kt)("inlineCode",{parentName:"li"},"everyone_authed")," Role."),(0,i.kt)("li",{parentName:"ol"},"After practicing in the rjsf playground, set the schema (with at least five fields) of your new Action and view it in Interactions view."),(0,i.kt)("li",{parentName:"ol"},"Change the order of the properties in your new Action using the request settings and see that this worked in the Interactions view."),(0,i.kt)("li",{parentName:"ol"},"Create a Reaction on the ",(0,i.kt)("inlineCode",{parentName:"li"},"everyone_authed")," Role.")),(0,i.kt)("h2",{id:"videos"},"Videos"),(0,i.kt)("p",null,"Coming soon\u2026"))}d.isMDXComponent=!0},9343:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Untitled 1-b433a305b67a82e5ab170878c17689d6.png"},977:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Untitled 10-58e3f6cbf5e0e920f0d81509fa856049.png"},7186:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Untitled 11-bcff689775b751206f1846b5708a3f17.png"},4164:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Untitled 12-884e6fbc24353347192f6a4c6fea830d.png"},2914:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Untitled 13-279ede3a2d6b2d5b33594cc0aafacca6.png"},1681:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Untitled 14-d1af772ebc9596bcecdf839c7576d643.png"},7983:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Untitled 15-f0d20a8e7620c52db7addf6c590bb209.png"},3955:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Untitled 16-0711e64cc3a1f2640d7a9aeb293b1536.png"},5002:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Untitled 17-a98c6f6b51b8afc5b025586fb3447515.png"},2035:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Untitled 2-e5cf032ff3290d4b2c1238f4622c0bf1.png"},964:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Untitled 3-58e51849baa9b00d80aa59e7da6bb5bf.png"},4699:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Untitled 4-23e9f3bd192c81c786b91d226591c4d8.png"},8691:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Untitled 5-01047323cbc23233cb6e4168a2305dc1.png"},648:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Untitled 6-9446f22d280978b32cfa11c3958fa72c.png"},563:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Untitled 7-76989e925149280afb1c4dd75a37c4f2.png"},3450:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Untitled 8-226cd8257b625ea0e2cc04d56aae0c55.png"},5759:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Untitled 9-943b4e75fc352b2dc8070e0c702212f7.png"},2293:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Untitled-ae0c65543567666935755486a5518020.png"}}]);
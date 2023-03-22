"use strict";(self.webpackChunkflux_wiki=self.webpackChunkflux_wiki||[]).push([[603],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(a),p=i,h=m["".concat(c,".").concat(p)]||m[p]||d[p]||r;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},3117:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var n=a(7462),i=(a(7294),a(3905));const r={sidebar_position:2,title:"Land Claiming",slug:"/create-astral/land-claiming"},o=void 0,l={unversionedId:"Create-Astral/land-claiming",id:"Create-Astral/land-claiming",title:"Land Claiming",description:"---",source:"@site/docs/Create-Astral/land-claiming.mdx",sourceDirName:"Create-Astral",slug:"/create-astral/land-claiming",permalink:"/create-astral/land-claiming",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Land Claiming",slug:"/create-astral/land-claiming"},sidebar:"tutorialSidebar",previous:{title:"General Information",permalink:"/create-astral/information"},next:{title:"Chunk Loading",permalink:"/create-astral/chunk-loading"}},c={},s=[{value:"Quick Information",id:"quick-information",level:2},{value:"How to Claim Land",id:"how-to-claim-land",level:2},{value:"How to resize your claim",id:"how-to-resize-your-claim",level:2},{value:"How to adjust claim permissions",id:"how-to-adjust-claim-permissions",level:2},{value:"How to remove a claim",id:"how-to-remove-a-claim",level:2},{value:"Sub Claims",id:"sub-claims",level:2}],u={toc:s};function m(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"quick-information"},"Quick Information"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This server uses the Flan mod for land claiming. You can find their guide on how to use it ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Flemmli97/Flan/wiki"},"here"),"."),(0,i.kt)("li",{parentName:"ul"},"You start with the equivalent of ",(0,i.kt)("strong",{parentName:"li"},"10 chunks")," of claim blocks. Every hour you will gain 1 chunk of claim blocks. There is a maximum of ",(0,i.kt)("strong",{parentName:"li"},"64 chunks")," of claim blocks."),(0,i.kt)("li",{parentName:"ul"},"You can get more claim blocks by purchasing a rank or donating to the server ",(0,i.kt)("a",{parentName:"li",href:"https://store.fluxsmp.com"},"here"),".")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"how-to-claim-land"},"How to Claim Land"),(0,i.kt)("p",null,"The easiest way to claim land is by using a golden hoe and right click opposite corners of the area you would like to claim. You can also use the command ",(0,i.kt)("inlineCode",{parentName:"p"},"/flan addClaim")," to claim land."),(0,i.kt)("h2",{id:"how-to-resize-your-claim"},"How to resize your claim"),(0,i.kt)("p",null,"You can do this by getting a golden hoe and right clicking a corner of your claim then right clicking the new corner you would like to resize to. You can also just remove your claim and restart."),(0,i.kt)("h2",{id:"how-to-adjust-claim-permissions"},"How to adjust claim permissions"),(0,i.kt)("p",null,"While inside your claim you can use the command ",(0,i.kt)("inlineCode",{parentName:"p"},"/flan menu"),' to open the claim menu. From there you can adjust permissions for your claim. Within this menu you can customize group permissions. To add someone to a group you can use the command" ',(0,i.kt)("inlineCode",{parentName:"p"},"/flan group players add [group] [player].")," You can also use the menu."),(0,i.kt)("h2",{id:"how-to-remove-a-claim"},"How to remove a claim"),(0,i.kt)("p",null,"You can delete a claim using ",(0,i.kt)("inlineCode",{parentName:"p"},"/flan menu"),". "),(0,i.kt)("h2",{id:"sub-claims"},"Sub Claims"),(0,i.kt)("p",null,'A subclaim is a claim inside a claim. Subclaims have their own permission and group sets that override the parent claim they are in (no you cannot create a subclaim inside a subclaim). Subclaim permissions have an additional value "default" instead of just true and false which simply redirects that permission back to the parent claim. To create a subclaim switch to subclaim mode via /flan switchMode. Then use your claiming tool the same way you create a normal claim. Opening the subclaim menu and editing subclaim permissions requires you to be in subclaim mode too.'))}m.isMDXComponent=!0}}]);
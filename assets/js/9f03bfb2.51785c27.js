"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[352],{2892:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=n(7624),s=n(4552);const i={title:"Get started",slug:"/setup"},r=void 0,l={id:"Get-Started",title:"Get started",description:"- Use your own laptop.",source:"@site/docs/01-Get-Started.md",sourceDirName:".",slug:"/setup",permalink:"/Workshop-Interact-with-OpenAI-models/setup",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Get started",slug:"/setup"},sidebar:"tutorialSidebar",previous:{title:"Welcome",permalink:"/Workshop-Interact-with-OpenAI-models/"},next:{title:"Basic Prompting",permalink:"/Workshop-Interact-with-OpenAI-models/Part-1-labs/Basic-Prompting"}},a={},c=[{value:"Authenticate",id:"authenticate",level:2},{value:"Explore",id:"explore",level:2},{value:"Tips",id:"tips",level:2},{value:"1. Clear Chat Sessions",id:"1-clear-chat-sessions",level:3},{value:"2. Copy-Paste Snippets",id:"2-copy-paste-snippets",level:3}];function d(e){const t={admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.admonition,{title:"WORKSHOP PRE-REQUISITES",type:"info",children:(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Use your own laptop"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Launch a modern browser"}),". (Use edge or chrome for the best experience)"]}),"\n"]})}),"\n",(0,o.jsx)(t.p,{children:"For this workshop you are using a custom playground build on-top of the Azure OpenAI Service. In this playground you will have the opportunity to play with the prompts and learn how to interact with OpenAI Models."}),"\n",(0,o.jsx)(t.h2,{id:"authenticate",children:"Authenticate"}),"\n",(0,o.jsx)(t.p,{children:"You will be using your AI Proxy API Key that you registered for."}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Navigate to the AI Proxy Playground. You will find this link when you registered for this workshop."}),"\n",(0,o.jsxs)(t.li,{children:["Enter the ",(0,o.jsx)(t.strong,{children:"API Key"})," at top-right and click ",(0,o.jsx)(t.code,{children:"Authorize"})," to login.\n",(0,o.jsx)(t.img,{alt:"AI Tour Playground",src:n(848).c+"",width:"1586",height:"1039"})]}),"\n",(0,o.jsx)(t.li,{children:"Select a model from the dropdown list."}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"explore",children:"Explore"}),"\n",(0,o.jsxs)(t.p,{children:["On successful login, the playground application should update to show a ",(0,o.jsx)(t.code,{children:"Logout"})," button at top-right, as shown below. To validate your setup, enter a query in the user prompt input box (region 2) and click ",(0,o.jsx)(t.code,{children:"Send"}),". You should get a conversational response in the chat session are (region 3) as shown below."]}),"\n",(0,o.jsx)(t.p,{children:"Let's take a minute to familiarize ourselves with the different regions of this app."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"AI Tour Playground Regions",src:n(6260).c+"",width:"2482",height:"1554"})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Region 1\ufe0f\u20e3 | Once authorized, shows the event profile."}),"\n",(0,o.jsx)(t.li,{children:"Region 2\ufe0f\u20e3 | User prompt - used to enter text questions for AI"}),"\n",(0,o.jsx)(t.li,{children:"Region 3\ufe0f\u20e3 | Conversation - interleaved user questions & assistant responses"}),"\n",(0,o.jsx)(t.li,{children:"Region 4\ufe0f\u20e3 | Configuration - tunable parameters, execution stats"}),"\n",(0,o.jsx)(t.li,{children:"Region 5\ufe0f\u20e3 | System message - sets assistant persona, base context"}),"\n",(0,o.jsx)(t.li,{children:"Region 6\ufe0f\u20e3 | Function calling - save custom functions to set context"}),"\n",(0,o.jsx)(t.li,{children:"Region 7\ufe0f\u20e3 | Image generation - access the DALL-E model playground"}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"tips",children:"Tips"}),"\n",(0,o.jsx)(t.h3,{id:"1-clear-chat-sessions",children:"1. Clear Chat Sessions"}),"\n",(0,o.jsxs)(t.p,{children:['The output of the model is influenced by the contents of the chat session. To ensure that the output of the model is not influenced by previous prompts, click the "Clear Chat" button ',(0,o.jsx)(t.strong,{children:"before entering each new prompt"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"2-copy-paste-snippets",children:"2. Copy-Paste Snippets"}),"\n",(0,o.jsxs)(t.p,{children:["In a prompt-based exercise, you will find the prompt input is provided to you in a ",(0,o.jsx)(t.em,{children:"code-fenced"})," snippet as shown below. When viewing this page in a browser, ",(0,o.jsx)(t.em,{children:"click"})," within the code-fenced region below to see a ",(0,o.jsx)(t.code,{children:"copy"})," icon appear at the right. Click it to copy the prompt into your clipboard - then paste using ",(0,o.jsx)("kbd",{children:"Ctrl-V"})," (or equivalent) command into the text input region in Playground."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-text",children:"This is the prompt text you need to enter into the chat prompt input field.\n"})})]})}function h(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},848:(e,t,n)=>{n.d(t,{c:()=>o});const o=n.p+"assets/images/aitour-playground-chat-2cc5884a952b391f794f554469768b80.png"},6260:(e,t,n)=>{n.d(t,{c:()=>o});const o=n.p+"assets/images/aitour-playground-regions-06fcf4a28f7bb33f5bdca9f8cfae9e8a.png"},4552:(e,t,n)=>{n.d(t,{I:()=>l,M:()=>r});var o=n(1504);const s={},i=o.createContext(s);function r(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);
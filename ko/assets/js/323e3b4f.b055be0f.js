"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[672],{7224:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var t=s(7624),i=s(4552);const r={title:"\ud1a0\ud070\ud654",slug:"/tokenization"},o=void 0,c={id:"concepts/Understand-Tokens",title:"\ud1a0\ud070\ud654",description:"\uc774 \ud398\uc774\uc9c0\ub294 \uae30\uacc4 \ubc88\uc5ed\uc744 \ud1b5\ud574 \ud55c\uad6d\uc5b4\ub85c \ubc88\uc5ed\ud588\uc2b5\ub2c8\ub2e4. \uc5b4\uc0c9\ud55c \ud45c\ud604\uc774 \uc788\uc744 \uc218 \uc788\uc73c\ub2c8 \uc591\ud574 \ubc14\ub78d\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/06-concepts/3-Understand-Tokens.md",sourceDirName:"06-concepts",slug:"/tokenization",permalink:"/Workshop-Interact-with-OpenAI-models/ko/tokenization",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\ud1a0\ud070\ud654",slug:"/tokenization"},sidebar:"tutorialSidebar",previous:{title:"\uc9d1\uc5d0\uc11c \ud574 \ubcf4\uae30",permalink:"/Workshop-Interact-with-OpenAI-models/ko/at-home"},next:{title:"\uc694\uc57d",permalink:"/Workshop-Interact-with-OpenAI-models/ko/summary"}},l={},d=[{value:"\ud1a0\ud070\ud654\ub780 \ubb34\uc5c7\uc778\uac00\uc694?",id:"\ud1a0\ud070\ud654\ub780-\ubb34\uc5c7\uc778\uac00\uc694",level:2},{value:"\ud1a0\ud070\uc740 \uc5b4\ub5bb\uac8c \uc0ac\uc6a9\ub418\ub098\uc694?",id:"\ud1a0\ud070\uc740-\uc5b4\ub5bb\uac8c-\uc0ac\uc6a9\ub418\ub098\uc694",level:2},{value:"\ud1a0\ud070\ud654\uac00 \uc911\uc694\ud55c \uc774\uc720\ub294 \ubb34\uc5c7\uc778\uac00\uc694?",id:"\ud1a0\ud070\ud654\uac00-\uc911\uc694\ud55c-\uc774\uc720\ub294-\ubb34\uc5c7\uc778\uac00\uc694",level:2},{value:"OpenAI \ud1a0\ud070\ud654 \ub3c4\uad6c",id:"openai-\ud1a0\ud070\ud654-\ub3c4\uad6c",level:2},{value:"\uc608\uc81c \ubcf4\uae30",id:"\uc608\uc81c-\ubcf4\uae30",level:3},{value:"\uc5f0\uc2b5\ud558\uae30",id:"\uc5f0\uc2b5\ud558\uae30",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.M)(),...e.components},{Head:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r,{children:(0,t.jsx)("body",{className:"navigation-with-keyboard ko"})}),"\n",(0,t.jsx)(n.admonition,{title:"\uc77c\ub7ec\ub450\uae30",type:"note",children:(0,t.jsx)(n.p,{children:"\uc774 \ud398\uc774\uc9c0\ub294 \uae30\uacc4 \ubc88\uc5ed\uc744 \ud1b5\ud574 \ud55c\uad6d\uc5b4\ub85c \ubc88\uc5ed\ud588\uc2b5\ub2c8\ub2e4. \uc5b4\uc0c9\ud55c \ud45c\ud604\uc774 \uc788\uc744 \uc218 \uc788\uc73c\ub2c8 \uc591\ud574 \ubc14\ub78d\ub2c8\ub2e4."})}),"\n",(0,t.jsx)(n.p,{children:'\uc774\uc804 \uac15\uc758\uc5d0\uc11c "\ud1a0\ud070"\uc5d0 \ub300\ud574 \uba87 \ubc88 \uc5b8\uae09\ud588\uc9c0\ub9cc \ud1a0\ud070\uc774 \ubb34\uc5c7\uc774\uace0 \uc65c \uc911\uc694\ud55c\uc9c0\uc5d0 \ub300\ud574\uc11c\ub294 \uc124\uba85\ud558\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4. \uc774\uc81c \uc774\uc5d0 \ub300\ud574 \uc124\uba85\ud574 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4.'}),"\n",(0,t.jsx)(n.h2,{id:"\ud1a0\ud070\ud654\ub780-\ubb34\uc5c7\uc778\uac00\uc694",children:"\ud1a0\ud070\ud654\ub780 \ubb34\uc5c7\uc778\uac00\uc694?"}),"\n",(0,t.jsxs)(n.p,{children:["OpenAI \uc790\uc5f0\uc5b4 \ubaa8\ub378\uc740 \ub2e8\uc5b4\ub098 \ubb38\uc790\ub97c \ud14d\uc2a4\ud2b8 \ub2e8\uc704\ub85c \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uace0 \uadf8 \uc911\uac04\uc758 ",(0,t.jsx)(n.strong,{children:"\ud1a0\ud070"}),"\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4 ",(0,t.jsx)(n.a,{href:"https://platform.openai.com/docs/introduction/tokens",children:"\uc815\uc758"}),'\uc5d0 \ub530\ub974\uba74 \ud1a0\ud070\uc740 \ub300\uaddc\ubaa8 \uc5b8\uc5b4 \ud559\uc2b5 \ub370\uc774\ud130 \uc138\ud2b8\uc5d0\uc11c _\uc77c\ubc18\uc801\uc73c\ub85c \ubc1c\uc0dd\ud558\ub294 \ubb38\uc790 \uc2dc\ud000\uc2a4_\ub97c \ub098\ud0c0\ub0b4\ub294 \ud14d\uc2a4\ud2b8 "\uccad\ud06c"\uc785\ub2c8\ub2e4.']}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\ud1a0\ud070\uc740 \ub2e8\uc77c \ubb38\uc790, \ub2e8\uc5b4\uc758 \uc77c\ubd80 \ub610\ub294 \uc804\uccb4 \ub2e8\uc5b4\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.li,{children:"\ub9ce\uc740 \uacf5\ud1b5 \ub2e8\uc5b4\ub294 \ud558\ub098\uc758 \ud1a0\ud070\uc73c\ub85c \ud45c\ud604\ub429\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.li,{children:"\ub35c \uc77c\ubc18\uc801\uc778 \ub2e8\uc5b4\ub294 \uc5ec\ub7ec \uac1c\uc758 \ud1a0\ud070\uc73c\ub85c \ud45c\ud604\ub429\ub2c8\ub2e4."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\uc774\uc81c ",(0,t.jsx)(n.strong,{children:"\ud1a0\ud070\ud654"}),"\ub294 \ud14d\uc2a4\ud2b8 \ub370\uc774\ud130(\uc608: \"\ud504\ub86c\ud504\ud2b8\")\uac00 \uc77c\ub828\uc758 \ud1a0\ud070\uc73c\ub85c _\ud574\uccb4_\ub418\ub294 \uacfc\uc815\uc785\ub2c8\ub2e4. \uadf8\ub7f0 \ub2e4\uc74c \ubaa8\ub378\uc740 \ud14d\uc2a4\ud2b8 '\uc644\uc131'\uc744 \uc704\ud574 \ub2e4\uc74c \ud1a0\ud070\uc744 \uc21c\uc11c\ub300\ub85c \uc0dd\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \ub2e8\uc6d0\uc758 \ub4b7\ubd80\ubd84\uc5d0\uc11c \ud1a0\ud070\ud654\uc758 \uad6c\uccb4\uc801\uc778 \uc608\ub97c \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(n.h2,{id:"\ud1a0\ud070\uc740-\uc5b4\ub5bb\uac8c-\uc0ac\uc6a9\ub418\ub098\uc694",children:"\ud1a0\ud070\uc740 \uc5b4\ub5bb\uac8c \uc0ac\uc6a9\ub418\ub098\uc694?"}),"\n",(0,t.jsx)(n.p,{children:"\uc785\ub825 \ud504\ub86c\ud504\ud2b8\uac00 \uc8fc\uc5b4\uc9c0\uba74 \uc790\uc5f0\uc5b4 \ubaa8\ub378\uc740 \ud55c \ubc88\uc5d0 \ud558\ub098\uc758 \ud1a0\ud070\uc529 \uc644\uc131\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \uc0dd\uc131\ub41c \ud1a0\ud070\uc740 \uacb0\uc815\ub860\uc801\uc774\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uac01 \ub2e8\uacc4\uc5d0\uc11c \ubaa8\ub378\uc740 \uc5f0\uad00\ub41c \uac00\uc911\uce58\uc640 \ud568\uaed8 \uac00\ub2a5\ud55c \ubaa8\ub4e0 \ud1a0\ud070\uc758 \ubaa9\ub85d\uc744 \ucd9c\ub825\ud569\ub2c8\ub2e4. API\ub294 \uc774 \ubaa9\ub85d\uc5d0\uc11c \ud558\ub098\uc758 \ud1a0\ud070\uc744 \uc0d8\ud50c\ub9c1\ud558\uba70, \uac00\uc911\uce58\uac00 \ub192\uc740 \ud1a0\ud070\uc774 \ub2e4\ub978 \ud1a0\ud070\ubcf4\ub2e4 \uc120\ud0dd\ub420 \uac00\ub2a5\uc131\uc774 \ub192\uc2b5\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"\ud1a0\ud070 \uc0ac\uc6a9 \uc608\uc2dc",src:s(3132).c+"",width:"2052",height:"352"})}),"\n",(0,t.jsxs)(n.p,{children:['\uadf8\ub7f0 \ub2e4\uc74c \ud574\ub2f9 \ud1a0\ud070\uc744 \ud504\ub86c\ud504\ud2b8\uc5d0 \ucd94\uac00\ud558\uace0 \uc644\ub8cc\ub97c \uc704\ud55c "\ucd5c\ub300 \ud1a0\ud070 \uc218" \uc81c\ud55c(\ucee8\ud14d\uc2a4\ud2b8 \ucc3d)\uc774 \ucda9\uc871\ub420 \ub54c\uae4c\uc9c0 \ub610\ub294 \ubaa8\ub378\uc774 \ud2b9\ubcc4\ud55c "\ud1a0\ud070 \uc911\uc9c0"\ub97c \uc0dd\uc131\ud558\uc5ec \ucd94\uac00 \ud1a0\ud070 \uc0dd\uc131\uc744 \uc911\uc9c0\ud560 \ub54c\uae4c\uc9c0 \uc774 \ud504\ub85c\uc138\uc2a4\ub97c \ubc18\ubcf5\ud569\ub2c8\ub2e4. (Beatriz Stollnitz\ub294 \uc774 ',(0,t.jsx)(n.a,{href:"https://bea.stollnitz.com/blog/how-gpt-works/",children:"\ube14\ub85c\uadf8 \uac8c\uc2dc\ubb3c"}),"\uc744 \ud1b5\ud574 \uc774 \ud504\ub85c\uc138\uc2a4\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \uc124\uba85\uc744 \ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.)"]}),"\n",(0,t.jsx)(n.p,{children:"\uc774\uac83\uc774 \ubc14\ub85c \ubaa8\ub378\uc774 \ud558\ub098 \uc774\uc0c1\uc758 \ub2e8\uc5b4\uc758 \uc644\uc131\uc744 \uc0dd\uc131\ud558\ub294 \ubc29\uc2dd\uc774\uba70, \uc774\ub7ec\ud55c \uc644\uc131\uc774 \ud638\ucd9c\uc5d0\uc11c \ud638\ucd9c\ub85c \ubcc0\uacbd\ub420 \uc218 \uc788\ub294 \uc774\uc720\uc785\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.h2,{id:"\ud1a0\ud070\ud654\uac00-\uc911\uc694\ud55c-\uc774\uc720\ub294-\ubb34\uc5c7\uc778\uac00\uc694",children:"\ud1a0\ud070\ud654\uac00 \uc911\uc694\ud55c \uc774\uc720\ub294 \ubb34\uc5c7\uc778\uac00\uc694?"}),"\n",(0,t.jsx)(n.p,{children:"\ud1a0\ud070\ud654\uac00 \uc911\uc694\ud55c \uc774\uc720\ub97c \uc774\ud574\ud558\ub824\uba74 \ubc30\ud3ec\ub41c \ubaa8\ub378\uc758 \ub450 \uac00\uc9c0 \uce21\uba74\uc744 \uace0\ub824\ud574\uc57c \ud569\ub2c8\ub2e4: \ud1a0\ud070 \ud55c\ub3c4\uc640 \ud1a0\ud070 \uac00\uaca9 \ucc45\uc815."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\ud1a0\ud070 \ud55c\ub3c4"}),". \ubaa8\ub4e0 \ubaa8\ub378\uc5d0\ub294 \ub2e8\uc77c \uc694\uccad\uc5d0 \ub300\ud574 \ucc98\ub9ac\ud560 \uc218 \uc788\ub294 \ucd5c\ub300 \ud1a0\ud070 \uc218\ub85c \uc815\uc758\ub41c \ucee8\ud14d\uc2a4\ud2b8 \ucc3d\uc774 \uc788\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4, \uad6c\ud615 gpt-3.5 turbo \ubaa8\ub378\uc740 \uac01 \uc694\uccad\uc5d0 \ub300\ud574 4K \ud1a0\ud070 \uc81c\ud55c(\ucee8\ud14d\uc2a4\ud2b8)\uc774 \uc788\uc2b5\ub2c8\ub2e4. \ud1a0\ud070 \uc81c\ud55c\uc740 \ud504\ub86c\ud504\ud2b8\uc640 \uc644\ub8cc \uac04\uc5d0 _\uacf5\uc720_\ub429\ub2c8\ub2e4. \ub2e4\uc74c \ud1a0\ud070\uc744 \uc0dd\uc131\ud558\uae30 \uc704\ud574 \ud504\ub86c\ud504\ud2b8\uc5d0 \uc644\ub8cc\uac00 \ucd94\uac00\ub418\uae30 \ub54c\ubb38\uc5d0 \ub2e8\uc77c \uc694\uccad\uc5d0 \ub300\ud55c \uc804\uccb4 \ucee8\ud14d\uc2a4\ud2b8 \ucc3d\uc5d0 \ub450 \uac00\uc9c0\ub97c \ubaa8\ub450 \ub9de\ucdb0\uc57c \ud569\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\ud1a0\ud070 \uac00\uaca9"}),". \ub2e4\ub978 API\uc640 \ub9c8\ucc2c\uac00\uc9c0\ub85c, \ubaa8\ub378 \ubc30\ud3ec \uc0ac\uc6a9\uc5d0\ub294 \ubaa8\ub378 \uc720\ud615\uacfc \ubc84\uc804\uc5d0 \ub530\ub77c \ube44\uc6a9\uc774 \ubc1c\uc0dd\ud569\ub2c8\ub2e4. \ud604\uc7ac \ubaa8\ub378 \uac00\uaca9\uc740 \uc0ac\uc6a9\ub41c \ud1a0\ud070 \uc218\uc5d0 \uc5f0\ub3d9\ub418\uc5b4 \uc788\uc73c\uba70, \uac01 \ubaa8\ub378 \uc720\ud615 \ub610\ub294 \ubc84\uc804\ub9c8\ub2e4 \ub2e4\ub978 \uac00\uaca9\ub300\uac00 \uc801\uc6a9\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(n.p,{children:"\uc544\ub798 \ud45c\ub294 Azure OpenAI \ubaa8\ub378\uc758 \ucee8\ud14d\uc2a4\ud2b8 \ucc3d(\ucd5c\ub300 \ud1a0\ud070) \ubc0f \ubaa8\ub378 \uac00\uaca9(1K \ub2e8\uc704\ub85c \uccad\uad6c\ub428)\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"\ud1a0\ud070 \uac00\uaca9",src:s(6708).c+"",width:"1473",height:"608"})}),"\n",(0,t.jsx)(n.p,{children:"gpt-4-32k\uc640 \uac19\uc740 \ucd5c\uc2e0 \ubaa8\ub378\uc740 \ud1a0\ud070 \ud55c\ub3c4\uac00 \ucd5c\ub300 32,768\uac1c\ub85c \ud6e8\uc52c \ub354 \ud06c\ub2e4\ub294 \uc810\uc5d0 \uc720\uc758\ud558\uc138\uc694. \uc774\ub807\uac8c \ud558\uba74 \ub354 \uc624\ub798 \uc644\ub8cc\ud560 \uc218 \uc788\uc744 \ubfd0\ub9cc \uc544\ub2c8\ub77c \ud6e8\uc52c \ub354 \ud070 \ud504\ub86c\ud504\ud2b8\ub3c4 \uac00\ub2a5\ud569\ub2c8\ub2e4. \uc774\ub294 \ub098\uc911\uc5d0 \uc0b4\ud3b4\ubcf4\uaca0\uc9c0\ub9cc \ud504\ub86c\ud504\ud2b8 \uc5d4\uc9c0\ub2c8\uc5b4\ub9c1\uc5d0 \ud2b9\ud788 \uc720\uc6a9\ud569\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.p,{children:"\uc0ac\uc6a9 \ube44\uc6a9\uc740 \uadf8\uc5d0 \ub530\ub77c \ub192\uc544\uc9c4\ub2e4\ub294 \uc810\uc744 \uba85\uc2ec\ud558\uc138\uc694. \ud504\ub86c\ud504\ud2b8 \uc5d4\uc9c0\ub2c8\uc5b4\ub9c1 \uae30\uc220\uc740 \uc751\ub2f5 \ud488\uc9c8\uc744 \uc800\ud558\uc2dc\ud0a4\uc9c0 \uc54a\uc73c\uba74\uc11c \ud1a0\ud070 \uc0ac\uc6a9 \ube44\uc6a9\uc744 \ucd5c\uc18c\ud654\ud558\ub294 \ud504\ub86c\ud504\ud2b8\ub97c \uc81c\uc791\ud558\uc5ec \ube44\uc6a9 \ud6a8\uc728\uc131\uc744 \uac1c\uc120\ud558\ub294 \ub370\uc5d0\ub3c4 \ub3c4\uc6c0\uc774 \ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.h2,{id:"openai-\ud1a0\ud070\ud654-\ub3c4\uad6c",children:"OpenAI \ud1a0\ud070\ud654 \ub3c4\uad6c"}),"\n",(0,t.jsxs)(n.p,{children:["\uc2e4\uc81c \ud14d\uc2a4\ud2b8\uc5d0\uc11c \ud1a0\ud070\ud654\uac00 \uc5b4\ub5bb\uac8c \uc791\ub3d9\ud558\ub294\uc9c0 \ub354 \uc790\uc138\ud788 \uc54c\uace0 \uc2f6\uc73c\uc2e0\uac00\uc694? \ud1a0\ud070\ud654\ub97c \uc2dc\uac01\ud654\ud558\uace0 \uc8fc\uc5b4\uc9c4 \ud14d\uc2a4\ud2b8 \ub370\uc774\ud130\uc758 \ucd1d \ud1a0\ud070 \uc218\ub97c \ud45c\uc2dc\ud558\ub294 \ubb34\ub8cc \uc628\ub77c\uc778 \ub3c4\uad6c\uc778 ",(0,t.jsx)(n.a,{href:"https://platform.openai.com/tokenizer",children:(0,t.jsx)(n.strong,{children:"OpenAI Tokenizer"})}),"\ub97c \uc0ac\uc6a9\ud574 \ubcf4\uc138\uc694."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://help.openai.com/articles/4936856-what-are-tokens-and-how-to-count-them",children:"\ud83d\udd16 \uc790\uc138\ud788 \uc54c\uc544\ubcf4\uae30:"})}),"\n",(0,t.jsx)(n.h3,{id:"\uc608\uc81c-\ubcf4\uae30",children:"\uc608\uc81c \ubcf4\uae30"}),"\n",(0,t.jsxs)(n.p,{children:["\uc0ac\uc774\ud2b8\ub97c \ubc29\ubb38\ud558\uc5ec '\uc608\uc81c \ubcf4\uae30'\ub97c \ud074\ub9ad\ud558\uba74 \uc544\ub798\uc640 \uac19\uc774 \uc2e4\uc81c\ub85c \uc791\ub3d9\ud558\ub294 \ubaa8\uc2b5\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc0c9\uc0c1\uc73c\ub85c \uad6c\ubd84\ub41c \uac01 \uc138\uadf8\uba3c\ud2b8\ub294 \ud558\ub098\uc758 \ud1a0\ud070\uc744 \ub098\ud0c0\ub0b4\uba70, \ucd1d \ud1a0\ud070 \uc218\ub294 \uc544\ub798\uc5d0 \ud45c\uc2dc\ub429\ub2c8\ub2e4(",(0,t.jsx)(n.strong,{children:"57 \ud1a0\ud070"}),")."]}),"\n",(0,t.jsx)(n.p,{children:'"1234567890"\uc640 "underlying"\uc758 \ubb38\uc790\uc5f4 \uae38\uc774\ub294 \uac19\uc9c0\ub9cc \uc804\uc790\ub294 \ud1a0\ud070\uc774 4\uac1c\uc774\uace0 \ud6c4\uc790\ub294 1\uac1c\ub85c \uacc4\uc0b0\ub41c\ub2e4\ub294 \uc810\uc5d0 \uc720\uc758\ud558\uc138\uc694. \ub610\ud55c \uad6c\ub450\uc810(":",".")\uc774 \uac01\uac01 1\ud1a0\ud070\uc744 \ucc28\uc9c0\ud558\uc5ec \ud504\ub86c\ud504\ud2b8 \ud1a0\ud070 \ud55c\ub3c4\ub97c \uc904\uc774\ub294 \ubc29\uc2dd\ub3c4 \uad00\ucc30\ud558\uc138\uc694.'}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"\ud1a0\ud06c\ub098\uc774\uc800 \uc608\uc81c \uc774\ubbf8\uc9c0",src:s(7788).c+"",width:"730",height:"619"})}),"\n",(0,t.jsx)(n.h3,{id:"\uc5f0\uc2b5\ud558\uae30",children:"\uc5f0\uc2b5\ud558\uae30"}),"\n",(0,t.jsx)(n.admonition,{title:"\ub2f9\uc2e0 \ucc28\ub840\uc785\ub2c8\ub2e4",type:"tip",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://platform.openai.com/tokenizer",children:(0,t.jsx)(n.strong,{children:"https://platform.openai.com/tokenizer"})}),"\ub97c \ubc29\ubb38\ud558\uc138\uc694. \uac01 \uc5f0\uc2b5\uc744 \uc2dc\uc791\ud558\uae30 \uc804\uc5d0 \ub3c4\uad6c\ub97c \uc9c0\uc6b0\uc138\uc694. \ud1a0\ud070\ud654 \ub3c4\uad6c\uc5d0 \uc5f0\uc2b5 \ud14d\uc2a4\ud2b8\ub97c \uc785\ub825\ud558\uace0 \ucd9c\ub825\uc744 \uad00\ucc30\ud558\uc138\uc694 - \ub300\ud654\ud615\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4."]})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\uc5f0\uc2b5 1:"}),' \uc77c\ubc18\uc801\uc778 \ub2e8\uc5b4\uc778 "apple"\ub294 \ud558\ub098\uc758 \ud1a0\ud070\ub9cc \ud544\uc694\ud569\ub2c8\ub2e4.']}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"apple\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\uc5f0\uc2b5 2:"}),' "blueberries"\ub77c\ub294 \ub2e8\uc5b4\uc5d0\ub294 \ub450 \uac1c\uc758 \ud1a0\ud070\uc774 \ud544\uc694\ud569\ub2c8\ub2e4: "blue"\uacfc "berries".']}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"blueberries\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\uc5f0\uc2b5 3:"})," \uace0\uc720\uba85\uc0ac\uc5d0\ub294 \uc77c\ubc18\uc801\uc73c\ub85c \uc5ec\ub7ec \uac1c\uc758 \ud1a0\ud070\uc774 \ud544\uc694\ud569\ub2c8\ub2e4(\uc77c\ubc18\uc801\uc774\uc9c0 \uc54a\uc740 \uacbd\uc6b0)."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Skarsg\xe5rd\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\uc5f0\uc2b5 4:"}),' \uc704\uc758 \uc608\uc81c\ub97c "\uc0ac\uacfc", "\ube14\ub8e8\ubca0\ub9ac", "\uc2a4\uce74\uc2a4\uac00\ub974\ub4dc" \ub4f1\uc758 \ud55c\uae00\ub85c \ub2e4\uc2dc \uc2dc\ub3c4\ud55c \ud6c4 \ud1a0\ud070 \uc218\ub97c \ube44\uad50\ud574 \ubcf4\uc138\uc694.']}),"\n",(0,t.jsx)(n.p,{children:"\uc774 \ud1a0\ud070 \ud45c\ud604\uc744 \ud1b5\ud574 AI \ubaa8\ub378\uc740 \uc0ac\uc804\uc5d0\ub3c4 \uc5c6\ub294 \ub2e8\uc5b4\ub97c \uc0dd\uc131\ud560 \uc218 \uc788\uc9c0\ub9cc, \uae00\uc790 \ub2e8\uc704\ub85c \ud14d\uc2a4\ud2b8\ub97c \uc0dd\uc131\ud560 \ud544\uc694 \uc5c6\uc774 (\ud6a1\uc124\uc218\uc124\ud558\uae30 \uc26c\uc6b4) \ub2e8\uc5b4\ub97c \uc0dd\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\ub2e4\ub978 \ub2e8\uc5b4\ub098 \uad6c\ubb38\uc744 \uc0ac\uc6a9\ud574 \uc9c1\uad00\ub825\uc744 \ud0a4\uc6b0\uc138\uc694."})})]})}function p(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},6708:(e,n,s)=>{s.d(n,{c:()=>t});const t=s.p+"assets/images/aoia-pricing-tokens-ee857536d0519b526a2b31062575f591.png"},3132:(e,n,s)=>{s.d(n,{c:()=>t});const t=s.p+"assets/images/llm-002-392e502091b9423ce85a7a1db1c258d2.png"},7788:(e,n,s)=>{s.d(n,{c:()=>t});const t=s.p+"assets/images/tokenizer-example-30354110d0fda1fedd261a2223fd80c8.png"},4552:(e,n,s)=>{s.d(n,{I:()=>c,M:()=>o});var t=s(1504);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);
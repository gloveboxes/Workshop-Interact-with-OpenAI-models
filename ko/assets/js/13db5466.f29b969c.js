"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[432],{7764:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>o});var r=i(7624),s=i(4552);const l={},t="\uae30\ubcf8 \ud504\ub86c\ud504\ud2b8",c={id:"Part-1-labs/Basic-Prompting",title:"Basic-Prompting",description:"\uc774 \ud398\uc774\uc9c0\ub294 \uae30\uacc4 \ubc88\uc5ed\uc744 \ud1b5\ud574 \ud55c\uad6d\uc5b4\ub85c \ubc88\uc5ed\ud588\uc2b5\ub2c8\ub2e4. \uc5b4\uc0c9\ud55c \ud45c\ud604\uc774 \uc788\uc744 \uc218 \uc788\uc73c\ub2c8 \uc591\ud574 \ubc14\ub78d\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/04-Part-1-labs/1-Basic-Prompting.md",sourceDirName:"04-Part-1-labs",slug:"/Part-1-labs/Basic-Prompting",permalink:"/Workshop-Interact-with-OpenAI-models/ko/Part-1-labs/Basic-Prompting",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\uc2dc\uc791\ud558\uae30",permalink:"/Workshop-Interact-with-OpenAI-models/ko/setup"},next:{title:"Conversation-history",permalink:"/Workshop-Interact-with-OpenAI-models/ko/Part-1-labs/Conversation-history"}},d={},o=[{value:"\uc0c8\ub85c\uc6b4 \ucf58\ud150\uce20 \uc0dd\uc131\ud558\uae30",id:"\uc0c8\ub85c\uc6b4-\ucf58\ud150\uce20-\uc0dd\uc131\ud558\uae30",level:2},{value:"\uc720\uc6a9\uc131\uc774 \ub5a8\uc5b4\uc9c0\ub294 \ud504\ub86c\ud504\ud2b8",id:"\uc720\uc6a9\uc131\uc774-\ub5a8\uc5b4\uc9c0\ub294-\ud504\ub86c\ud504\ud2b8",level:2},{value:"\uc0dd\uc131\ud615 AI \ubaa8\ub378\uc740 \uc791\uc5c5\uc744 \uc218\ud589\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",id:"\uc0dd\uc131\ud615-ai-\ubaa8\ub378\uc740-\uc791\uc5c5\uc744-\uc218\ud589\ud560-\uc218-\uc5c6\uc2b5\ub2c8\ub2e4",level:2},{value:"Completions\ub97c \ud1b5\ud574 \ub9cc\ub4e4\uc5b4\uc9c4 \ub0b4\uc6a9\uc740 \uc0ac\uc2e4\uc774 \uc544\ub2d9\ub2c8\ub2e4.",id:"completions\ub97c-\ud1b5\ud574-\ub9cc\ub4e4\uc5b4\uc9c4-\ub0b4\uc6a9\uc740-\uc0ac\uc2e4\uc774-\uc544\ub2d9\ub2c8\ub2e4",level:2},{value:"\uc815\ubcf4 \ucd94\ucd9c",id:"\uc815\ubcf4-\ucd94\ucd9c",level:2},{value:"\uad6c\uc870\ud654\ub41c \ub370\uc774\ud130 \ucd94\ucd9c",id:"\uad6c\uc870\ud654\ub41c-\ub370\uc774\ud130-\ucd94\ucd9c",level:2},{value:"\ud14d\uc2a4\ud2b8 \ubd84\ub958",id:"\ud14d\uc2a4\ud2b8-\ubd84\ub958",level:2},{value:"\ud14d\uc2a4\ud2b8 \uc694\uc57d",id:"\ud14d\uc2a4\ud2b8-\uc694\uc57d",level:2}];function a(n){const e={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.M)(),...n.components},{Head:i}=e;return i||function(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i,{children:(0,r.jsx)("body",{className:"navigation-with-keyboard ko"})}),"\n",(0,r.jsx)(e.h1,{id:"\uae30\ubcf8-\ud504\ub86c\ud504\ud2b8",children:"\uae30\ubcf8 \ud504\ub86c\ud504\ud2b8"}),"\n",(0,r.jsx)(e.admonition,{title:"\uc77c\ub7ec\ub450\uae30",type:"note",children:(0,r.jsx)(e.p,{children:"\uc774 \ud398\uc774\uc9c0\ub294 \uae30\uacc4 \ubc88\uc5ed\uc744 \ud1b5\ud574 \ud55c\uad6d\uc5b4\ub85c \ubc88\uc5ed\ud588\uc2b5\ub2c8\ub2e4. \uc5b4\uc0c9\ud55c \ud45c\ud604\uc774 \uc788\uc744 \uc218 \uc788\uc73c\ub2c8 \uc591\ud574 \ubc14\ub78d\ub2c8\ub2e4."})}),"\n",(0,r.jsx)(e.admonition,{title:"\ud504\ub86c\ud504\ud2b8 \uc5d4\uc9c0\ub2c8\uc5b4\ub9c1\uc774\ub780 \ubb34\uc5c7\uc778\uac00\uc694?",type:"tip",children:(0,r.jsxs)(e.p,{children:["\ud504\ub86c\ud504\ud2b8 \uc5d4\uc9c0\ub2c8\uc5b4\ub9c1\uc740 \uc790\uc5f0\uc5b4 \ucc98\ub9ac(NLP)\uc758 \uac1c\ub150\uc73c\ub85c, \uc785\ub825\uc5d0 ",(0,r.jsx)(e.strong,{children:"\uc791\uc5c5\uc5d0 \ub300\ud55c \uc124\uba85\uc744 \ud3ec\ud568"}),"\ud558\uc5ec ",(0,r.jsx)(e.strong,{children:"\ubaa8\ub378\uc774 \uc6d0\ud558\ub294 \uacb0\uacfc"}),"\ub97c \ucd9c\ub825\ud558\ub3c4\ub85d ",(0,r.jsx)(e.strong,{children:"\ud504\ub86c\ud504\ud2b8"}),"\ud558\ub294 \uac83\uc744 \ud3ec\ud568\ud569\ub2c8\ub2e4."]})}),"\n",(0,r.jsx)(e.p,{children:"\uba87 \uac00\uc9c0 \ud504\ub86c\ud504\ud2b8\ubd80\ud130 \uc2dc\uc791\ud558\uc5ec \ucc44\ud305 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc751\ub2f5\uc744 \uad00\ucc30\ud574 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsx)(e.p,{children:"\ub2e4\uc74c\uc740 \uba87 \uac00\uc9c0 \uc608\uc2dc\uc774\uc9c0\ub9cc, \uc790\uc2e0\ub9cc\uc758 \ud504\ub86c\ud504\ud2b8\ub97c \ub9cc\ub4e4\uc5b4\uc11c \uc5b4\ub5a4 \uc77c\uc774 \uc77c\uc5b4\ub098\ub294\uc9c0 \ud655\uc778\ud574 \ubcf4\uc138\uc694!"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-text",metastring:'title="\uc0ac\uc6a9\uc790 \ud504\ub86c\ud504\ud2b8\uc5d0 \uc785\ub825:"',children:"\ud638\uc8fc\uc758 \uc218\ub3c4\ub294 \uc5b4\ub514\uc778\uac00\uc694?\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-text",metastring:'title="\uc0ac\uc6a9\uc790 \ud504\ub86c\ud504\ud2b8\uc5d0 \uc785\ub825:"',children:"\ubc14\ub098\ub098 \ube75 \ub808\uc2dc\ud53c\uc640 \uadf8 \uc7ac\ub8cc\ub97c \uc704\ud55c \uc1fc\ud551\ubaa9\ub85d\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-text",metastring:'title="\uc0ac\uc6a9\uc790 \ud504\ub86c\ud504\ud2b8\uc5d0 \uc785\ub825:"',children:"2001\ub144 \ucd5c\uace0\uc758 \uc601\ud654 10\ud3b8\uc740 \ubb34\uc5c7\uc778\uac00\uc694?\n\ubaa9\ub85d\uc73c\ub85c \ub098\uc5f4\ud574 \uc8fc\uc138\uc694.\n\uc601\ud654 \uc81c\ubaa9, \ubc15\uc2a4\uc624\ud53c\uc2a4 \uc218\uc775, \uc81c\uc791\uc0ac\ub97c \ub098\uc5f4\ud569\ub2c8\ub2e4.\n\ubaa9\ub85d\uc5d0\uc11c 1\uc704\ubd80\ud130 10\uc704\uae4c\uc9c0 \uc601\ud654 \uc21c\uc704\ub97c \ub9e4\uaca8\uc8fc\uc138\uc694.\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-text",metastring:'title="\uc0ac\uc6a9\uc790 \ud504\ub86c\ud504\ud2b8\uc5d0 \uc785\ub825:"',children:"n\ubc88\uc9f8 \uc18c\uc218\ub97c \uacc4\uc0b0\ud558\ub294 \ud30c\uc774\uc36c \ud568\uc218\ub97c \uc791\uc131\ud569\ub2c8\ub2e4.\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\uc0c8\ub85c\uc6b4-\ucf58\ud150\uce20-\uc0dd\uc131\ud558\uae30",children:"\uc0c8\ub85c\uc6b4 \ucf58\ud150\uce20 \uc0dd\uc131\ud558\uae30"}),"\n",(0,r.jsx)(e.p,{children:"\ud559\uc2b5 \ub370\uc774\ud130\uc5d0\uc11c \uc720\uc0ac\ud55c \ucf58\ud150\uce20\uc758 \ube48\ub3c4\ub97c \uae30\ubc18\uc73c\ub85c \ucd9c\ub825\uc774 \uc0dd\uc131\ub418\ub354\ub77c\ub3c4 \uc0dd\uc131\ud615 AI \ubaa8\ub378\uc740 \uc774\uc804\uc5d0 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc558\ub358 \uc0c8\ub85c\uc6b4 \ucf58\ud150\uce20\ub97c \uc0dd\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsx)(e.p,{children:"\ub2e4\uc74c\uacfc \uac19\uc740 \ud504\ub86c\ud504\ud2b8\ub97c \uc0ac\uc6a9\ud574 \ubcf4\uc138\uc694:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-text",metastring:'title="\uc0ac\uc6a9\uc790 \ud504\ub86c\ud504\ud2b8\uc5d0 \uc785\ub825:"',children:'"\ud30c\uc774\uc36c"\uc774\ub77c\ub294 \ub2e8\uc5b4\ub85c \uc0bc\ud589\uc2dc\ub97c \ub9cc\ub4e4\uc5b4 \uc8fc\uc138\uc694.\n'})}),"\n",(0,r.jsx)(e.p,{children:"\uc0bc\ud589\uc2dc\ub294 \uc5b4\ub560\ub098\uc694? \ub9c8\uc74c\uc5d0 \ub4e4\uc9c0 \uc54a\uc558\ub2e4\uba74 \uc5b8\uc81c\ub4e0\uc9c0 \ucc44\ud305 \uc138\uc158\uc5d0 \uc0c8 \uc0bc\ud589\uc2dc\ub97c \uc0dd\uc131\ud574\ub2ec\ub77c\uace0 \uc694\uccad\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsx)(e.p,{children:"\ub2e4\uc74c\uc73c\ub85c \uc0ac\uc6a9 \uac00\ub2a5\ud55c \ub9e4\uac1c\ubcc0\uc218\ub97c \ud655\uc778\ud574 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4: \ucc44\ud305 \uc778\ud130\ud398\uc774\uc2a4\uc758 \uc624\ub978\ucabd \uc5f4\uc5d0 \uc788\ub294 temperature(\uc628\ub3c4) \ud544\ub4dc\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc628\ub3c4\ub97c 0\uc73c\ub85c \uc124\uc815\ud569\ub2c8\ub2e4. \ud504\ub86c\ud504\ud2b8\ub97c \ub2e4\uc2dc \uc2dc\ub3c4\ud558\uba74 \uc5b4\ub5a4 \uba54\uc2dc\uc9c0\uac00 \ud45c\uc2dc\ub418\ub098\uc694?"}),"\n",(0,r.jsx)(e.p,{children:'\uc628\ub3c4 \ub9e4\uac1c\ubcc0\uc218\ub294 \ubaa8\ub378\uc774 \uc5bc\ub9c8\ub098 "\ucc3d\uc758\uc801"\uc73c\ub85c \ud45c\ud604\ub420 \uc218 \uc788\ub294\uc9c0\ub97c \uc81c\uc5b4\ud569\ub2c8\ub2e4. "\uc628\ub3c4"\uc758 \uac12\uc774 \ub0ae\uc73c\uba74 \ubaa8\ub378\uc774 \uac00\uc7a5 \ub192\uc740 \uac00\uc911\uce58\ub97c \uac00\uc9c4 \uc644\uc131\ub3c4\ub85c \uc751\ub2f5\ud560 \uac00\ub2a5\uc131\uc774 \ub9e4\uc6b0 \ub192\uc73c\ubbc0\ub85c \uc751\ub2f5\uc758 \uac00\ubcc0\uc131\uc774 \uc81c\ud55c\ub429\ub2c8\ub2e4. \'\uc628\ub3c4\'\uc758 \uac12\uc774 \ub192\uc744\uc218\ub85d \uac00\uc911\uce58\uac00 \ub0ae\uc740 \uc644\uc131\uc774 \uc0dd\uc131\ub420 \uac00\ub2a5\uc131\uc774 \ub192\uc544\uc838 \ubcf4\ub2e4 \ucc3d\uc758\uc801\uc778(\uadf8\ub7ec\ub098 \uc815\ud655\ub3c4\ub294 \ub5a8\uc5b4\uc9c0\uc9c0\ub9cc) \uc751\ub2f5\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4.'}),"\n",(0,r.jsx)(e.p,{children:"\ub2e4\uc74c\uc740 \ub2e4\ub978 \uc628\ub3c4 \uac12\uc73c\ub85c \uc2dc\ub3c4\ud574 \ubcfc \uc218 \uc788\ub294 \ub610 \ub2e4\ub978 \ud504\ub86c\ud504\ud2b8\uc785\ub2c8\ub2e4:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-text",metastring:'title="\uc0ac\uc6a9\uc790 \ud504\ub86c\ud504\ud2b8\uc5d0 \uc785\ub825:"',children:"\ub3c5\ud2b9\ud558\uace0 \uae34 \uace0\uc591\uc774 \uc774\ub984\uc740 \ubb34\uc5c7\uc774 \uc788\uc744\uae4c\uc694?\n"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"\ucc38\uace0: LLM\uc744 \ub2e4\ub8f0 \ub54c\ub294 \uacb0\uacfc\ub97c \uc608\uce21\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uc5ec\uae30\uc11c \uc628\ub3c4\ub97c \ubcc0\uacbd\ud558\uba74 \uc608\uc0c1\ub300\ub85c \uc791\ub3d9\ud560 \uc218\ub3c4 \uc788\uace0 \uadf8\ub807\uc9c0 \uc54a\uc744 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \ub610\ud55c \ube44\uad50\uc801 \uc624\ub798\ub41c \ubc84\uc804\uc758 GPT3.5\ub97c \uc0ac\uc6a9\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uc628\ub3c4 \ud6a8\uacfc\ub294 GPT4\uc640 \uac19\uc740 \ucd5c\uc2e0 LLM\uc5d0\uc11c \ub354 \uc798 \ub098\ud0c0\ub0a9\ub2c8\ub2e4."}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\uacc4\uc18d\ud558\uae30 \uc804\uc5d0 \uc628\ub3c4 \ub9e4\uac1c\ubcc0\uc218\uac00 0.7\ub85c \uc7ac\uc124\uc815\ub418\uc5c8\ub294\uc9c0 \ud655\uc778\ud558\uc138\uc694."})}),"\n",(0,r.jsx)(e.h2,{id:"\uc720\uc6a9\uc131\uc774-\ub5a8\uc5b4\uc9c0\ub294-\ud504\ub86c\ud504\ud2b8",children:"\uc720\uc6a9\uc131\uc774 \ub5a8\uc5b4\uc9c0\ub294 \ud504\ub86c\ud504\ud2b8"}),"\n",(0,r.jsx)(e.p,{children:"\uc790\uc5f0\uc5b4 \uc0dd\uc131 AI \ubaa8\ub378\uc5d0\ub294 \uc5ec\ub7ec \uac00\uc9c0 \ud55c\uacc4\uac00 \uc788\uc2b5\ub2c8\ub2e4:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\uacfc\uac70\uc758 \uace0\uc815\ub41c \uc2dc\uc810\uc5d0 \uace0\uc815\ub41c \ud559\uc2b5 \ub370\uc774\ud130\uc5d0 \uc758\ud574 \uc81c\ud55c\uc744 \ubc1b\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsx)(e.li,{children:"\uc778\uac04\uc758 \uc5b8\uc5b4\uc640 \uc720\uc0ac\ud55c \ud14d\uc2a4\ud2b8\ub97c \uc0dd\uc131\ud558\uc9c0\ub9cc \ucd94\ub860\uc774\ub098 \uc778\uc9c0\uac00 \ubd88\uac00\ub2a5\ud569\ub2c8\ub2e4."}),"\n",(0,r.jsx)(e.li,{children:"\uc774\uc804 \ud504\ub86c\ud504\ud2b8\uc5d0 \ub300\ud55c \uae30\uc5b5\uc774 \uc5c6\uc73c\uba70(\ucc44\ud305\uc774 \uc9c0\uc6cc\uc9c4 \uacbd\uc6b0), \uc790\uc2e0\uc758 \ud589\ub3d9\uc744 \ud559\uc2b5\ud558\uac70\ub098 \ubcc0\uacbd\ud560 \uc218 \uc788\ub294 \uae30\ub2a5\ub3c4 \uc5c6\uc2b5\ub2c8\ub2e4."}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\ub2e4\uc74c\uc740 \uc774\ub7ec\ud55c \uc57d\uc810\uc744 \ubcf4\uc5ec\uc8fc\ub294 \uba87 \uac00\uc9c0 \uc608\uc2dc \ud504\ub86c\ud504\ud2b8\uc785\ub2c8\ub2e4:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-text",metastring:'title="\uc0ac\uc6a9\uc790 \ud504\ub86c\ud504\ud2b8\uc5d0 \uc785\ub825:"',children:"\uc5d8\ub9ac\uc790\ubca0\uc2a4 2\uc138 \uc5ec\uc655\uc740 \uc5b8\uc81c \ub3cc\uc544\uac00\uc168\ub098\uc694?\n"})}),"\n",(0,r.jsx)(e.p,{children:"\uc774 \uacbd\uc6b0 \ubaa8\ub378\uc740 2021\ub144 6\uc6d4\uae4c\uc9c0\ub9cc \ucd5c\uc2e0\uc778 \ud559\uc2b5 \ub370\uc774\ud130\uc5d0 \uc758\ud574 \uc81c\ud55c\ub429\ub2c8\ub2e4."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-text",metastring:'title="\uc0ac\uc6a9\uc790 \ud504\ub86c\ud504\ud2b8\uc5d0 \uc785\ub825:"',children:"98765\uc758 \uc81c\uacf1\uadfc\uc740 \ubb34\uc5c7\uc778\uac00\uc694?\n"})}),"\n",(0,r.jsx)(e.p,{children:"\uc774 \ubaa8\ub378\uc740 \uc218\ud559 \ubb38\uc81c\uc5d0 \ub300\ud55c \ub2f5\uc744 \uc0dd\uc131\ud558\uc9c0\ub9cc \uc815\ub2f5\uc774\ub77c\ub294 \ubcf4\uc7a5\uc740 \uc5c6\uc2b5\ub2c8\ub2e4. \uc5ec\uae30\uc11c \uc815\ub2f5(3\ub514\ud53c\uae4c\uc9c0)\uc740 314.269\uc785\ub2c8\ub2e4. \ucc44\ud305\uc744 \uc9c0\uc6b4 \ub2e4\uc74c \uac19\uc740 \ud504\ub86c\ud504\ud2b8\ub97c \ub2e4\uc2dc \uc81c\ucd9c\ud558\uc5ec \uac19\uc740 \ub2f5\uc774 \ub098\uc624\ub294\uc9c0 \ud655\uc778\ud574 \ubcf4\uc138\uc694. (\uae30\ubcf8 GPT \ubaa8\ub378\uc5d0\uc11c \uc218\ud559 \ubb38\uc81c\uc5d0 \ub300\ud55c \uc815\ub2f5\uc744 \uc5bb\ub294\ub2e4\uba74 \uc774\ub294 \uc9c8\ubb38\uacfc \ub2f5\ubcc0\uc774 \ud559\uc2b5 \ub370\uc774\ud130\uc5d0 \uc798 \ud45c\ud604\ub418\uc5b4 \uc788\uae30 \ub54c\ubb38\uc77c \ubfd0\uc785\ub2c8\ub2e4.)"}),"\n",(0,r.jsx)(e.p,{children:"\ud558\uc9c0\ub9cc \ubaa8\ub378\uc5d0 98765\uc758 \uc81c\uacf1\uadfc\uc744 \uacc4\uc0b0\ud558\ub294 \ud30c\uc774\uc36c \ucf54\ub4dc\ub97c \uc791\uc131\ud558\ub3c4\ub85d \uc694\uccad\ud558\uba74 \uc544\ub9c8 \uc798 \ud574\ub0bc \uc218 \uc788\uc744 \uac83\uc785\ub2c8\ub2e4. (\ud574\ubcf4\uc138\uc694!)."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-text",metastring:'title="\uc0ac\uc6a9\uc790 \ud504\ub86c\ud504\ud2b8\uc5d0 \uc785\ub825:"',children:"98765\uc758 \uc81c\uacf1\uadfc\uc744 \uacc4\uc0b0\ud558\ub294 \ud30c\uc774\uc36c \ucf54\ub4dc\ub97c \uc791\uc131\ud569\ub2c8\ub2e4.\n"})}),"\n",(0,r.jsx)(e.p,{children:"\ub2e4\uc74c\uc73c\ub85c \ubaa8\ub378\uc5d0\uac8c \ud37c\uc990\uc744 \ud480\ub3c4\ub85d \uc694\uccad\ud569\ub2c8\ub2e4:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-text",metastring:'title="\uc0ac\uc6a9\uc790 \ud504\ub86c\ud504\ud2b8\uc5d0 \uc785\ub825:"',children:"\uae38\ub3d9\uc528\ub294 \uc81c \uc0bc\ucd0c\uc785\ub2c8\ub2e4. \uae38\ub3d9\uc528\uc5d0\uac8c\ub294 \ucca0\uc218\uc640 \uc601\ud76c\ub77c\ub294 \ub450 \uc790\ub140\uac00 \uc788\uc2b5\ub2c8\ub2e4. \ucca0\uc218\uc758 \uc720\uc77c\ud55c \uc774\ubaa8\ub294 \uc608\uc9c4\uc528\uc785\ub2c8\ub2e4. \uc81c \uc5b4\uba38\ub2c8\uc758 \uc774\ub984\uc740 \ubb34\uc5c7\uc778\uac00\uc694?\n"})}),"\n",(0,r.jsx)(e.p,{children:"\uac04\ub2e8\ud55c \ud37c\uc990\uc774\uc9c0\ub9cc GPT-3.5 \ubaa8\ub378\uc740 \uc0ac\ub78c \uac04\uc758 \uad00\uacc4\ub97c \ucd94\ub860\ud560 \uc218 \uc5c6\uc5b4 \ud480\uc9c0 \ubabb\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. (GPT-4\uc640 \uac19\uc740 \uace0\uae09 \ubaa8\ub378\uc740 \uc815\ub2f5\uc744 \ub9de\ucd9c \uac00\ub2a5\uc131\uc774 \ub354 \ub192\uc9c0\ub9cc \uc5ec\uc804\ud788 \uc815\ub2f5\uc744 \ubcf4\uc7a5\ud558\uc9c0\ub294 \uc54a\uc2b5\ub2c8\ub2e4.)"}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"\ucc38\uace0: \ucc44\ud305\uc744 \uc9c0\uc6b0\uc9c0 \uc54a\uace0 \uc9c8\ubb38\uc744 \uba87 \ubc88 \ubc18\ubcf5\ud558\uba74 \ubaa8\ub378\uc774 \uc815\ub2f5\uc744 \ucc3e\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4!"}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\uc0dd\uc131\ud615-ai-\ubaa8\ub378\uc740-\uc791\uc5c5\uc744-\uc218\ud589\ud560-\uc218-\uc5c6\uc2b5\ub2c8\ub2e4",children:"\uc0dd\uc131\ud615 AI \ubaa8\ub378\uc740 \uc791\uc5c5\uc744 \uc218\ud589\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsx)(e.p,{children:"\ucc44\ud305 \uc0c1\uc790\uc758 \ub0b4\uc6a9\uc744 \uc9c0\uc6c1\ub2c8\ub2e4. \ub2e4\uc74c \ud14d\uc2a4\ud2b8\ub97c \uc785\ub825\ud569\ub2c8\ub2e4:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-text",metastring:'title="\uc0ac\uc6a9\uc790 \ud504\ub86c\ud504\ud2b8\uc5d0 \uc785\ub825:"',children:"https://finance.yahoo.com/trending-tickers \uc5d0 \uc0c1\uc7a5\ub41c \uc8fc\uc2dd \uc911 \uc2dc\uac00\ucd1d\uc561\uc774 \uac00\uc7a5 \ud070 5\uac1c \uc885\ubaa9\uc740 \ubb34\uc5c7\uc778\uac00\uc694?\n"})}),"\n",(0,r.jsx)(e.p,{children:"\ubaa8\ub378\uc774 \uadf8\ub7f4\ub4ef\ud55c \ub2f5\ubcc0\uc73c\ub85c \uc751\ub2f5\ud558\uc9c0\ub9cc, \uc790\uc138\ud788 \uc0b4\ud3b4\ubcf4\uba74 \uc2e4\uc81c\ub85c\ub294 \ud604\uc7ac \uc2dc\uac00\ucd1d\uc561 \uc0c1\uc704 5\uac1c \uc885\ubaa9\uc774 \uc544\ub2d9\ub2c8\ub2e4. \uae30\ubcf8 AI \ubaa8\ub378\uc740 \uc791\uc5c5\uc744 \uc218\ud589\ud560 \uc218 \uc5c6\uae30 \ub54c\ubb38\uc5d0 \uc2e4\uc81c\ub85c \uc6f9 \ud398\uc774\uc9c0\ub97c \ubc29\ubb38\ud558\uc5ec \uc8fc\uc2dd \ubaa9\ub85d\uc744 \uc77d\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ub300\uc2e0, \uadf8\ub7f4\ub4ef\ud55c \ub2f5\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4."}),"\n",(0,r.jsx)(e.h2,{id:"completions\ub97c-\ud1b5\ud574-\ub9cc\ub4e4\uc5b4\uc9c4-\ub0b4\uc6a9\uc740-\uc0ac\uc2e4\uc774-\uc544\ub2d9\ub2c8\ub2e4",children:"Completions\ub97c \ud1b5\ud574 \ub9cc\ub4e4\uc5b4\uc9c4 \ub0b4\uc6a9\uc740 \uc0ac\uc2e4\uc774 \uc544\ub2d9\ub2c8\ub2e4."}),"\n",(0,r.jsx)(e.p,{children:"\ud504\ub86c\ud504\ud2b8 \uc0c1\uc790\uc758 \ub0b4\uc6a9\uc744 \uc9c0\uc6c1\ub2c8\ub2e4. \ub2e4\uc74c \ud14d\uc2a4\ud2b8\ub97c \uc785\ub825\ud55c \ub2e4\uc74c \uc0dd\uc131\uc744 \ud074\ub9ad\ud569\ub2c8\ub2e4."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-text",metastring:'title="\uc0ac\uc6a9\uc790 \ud504\ub86c\ud504\ud2b8\uc5d0 \uc785\ub825:"',children:"\uc2dc\uc778 Harold Bloomsbury\uc5d0 \ub300\ud55c \uc9e7\uc740 \ubd80\uace0 \uae30\uc0ac\ub97c \uc791\uc131\ud569\ub2c8\ub2e4. \ucc38\uace0 \ubb38\ud5cc\uc744 \ud3ec\ud568\ud569\ub2c8\ub2e4.\n"})}),"\n",(0,r.jsx)(e.p,{children:"\uc6f9 \uac80\uc0c9\uc5d0 \ub530\ub974\uba74 Harold Bloomsbury\ub77c\ub294 \uc2dc\uc778(\ub610\ub294 \uc2e4\uc81c\ub85c \uc5b4\ub5a4 \uc0ac\ub78c)\uc740 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c \uc774 \ubaa8\ub378\uc740 \ubd80\uace0 \uae30\uc0ac \ud615\uc2dd\uc758 \ud14d\uc2a4\ud2b8\ub97c \uc0dd\uc131\ud558\uc9c0\ub9cc \uc0ac\uc2e4\uc5d0 \uadfc\uac70\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uc694\uccad\ub41c \ucc38\uace0 \ubb38\ud5cc\uc870\ucc28\ub3c4 \uadf8\ub7f4\ub4ef\ud574 \ubcf4\uc774\uc9c0\ub9cc \uc2e4\uc81c\uac00 \uc544\ub2d9\ub2c8\ub2e4."}),"\n",(0,r.jsx)(e.p,{children:"\uc9c0\uae08\uae4c\uc9c0 \uc0b4\ud3b4\ubcf8 \ubc14\uc640 \uac19\uc774 \uc790\uc5f0\uc5b4 \uc0dd\uc131 AI \ubaa8\ub378\uc740 \ud504\ub86c\ud504\ud2b8\uc5d0 \ub300\ud574 \uc608\uc0c1\uce58 \ubabb\ud55c \ub610\ub294 \uc6d0\uce58 \uc54a\ub294 \uc751\ub2f5\uc744 \uc0dd\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub294 \ub2e4\uc74c\uacfc \uac19\uc740 \uc5ec\ub7ec \uac00\uc9c0 \uc694\uc778\uc73c\ub85c \uc778\ud574 \ubc1c\uc0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\ud559\uc2b5 \ub370\uc774\ud130\uc758 \ubd88\ucda9\ubd84\ud55c \uc815\ubcf4"}),"\n",(0,r.jsx)(e.li,{children:"\ud504\ub86c\ud504\ud2b8\uc758 \ucee8\ud14d\uc2a4\ud2b8\uac00 \ubd88\ucda9\ubd84\ud55c \uacbd\uc6b0"}),"\n",(0,r.jsx)(e.li,{children:"\ubaa8\ub378 \uc790\uccb4\uc758 \uae30\ub2a5 \ubd80\uc871"}),"\n",(0,r.jsx)(e.li,{children:'\ud504\ub86c\ud504\ud2b8\ub97c \uc81c\uacf5\ud558\ub294 \uc0ac\uc6a9\uc790\uc758 \uc545\uc758\uc801\uc778 \uc758\ub3c4("\ud0c8\uc625")'}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\uc815\ubcf4-\ucd94\ucd9c",children:"\uc815\ubcf4 \ucd94\ucd9c"}),"\n",(0,r.jsx)(e.p,{children:"\uc544\ub798 \uc608\ub294 \ud504\ub86c\ud504\ud2b8\uc640 \ub370\uc774\ud130\ub97c \uacb0\ud569\ud558\uc5ec \uc790\uc5f0\uc5b4 \uba85\ub839\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc815\ubcf4\ub97c \ucd94\ucd9c\ud558\ub294 \ubc29\ubc95\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4. \uc774 \uacbd\uc6b0 \uc774\uba54\uc77c\uc5d0\uc11c \uc774\ub984, \ud68c\uc0ac, \uc704\uce58 \ubc0f \uc804\ud654\ubc88\ud638\ub97c \ucd94\ucd9c\ud569\ub2c8\ub2e4. \ud504\ub86c\ud504\ud2b8\uc640 \uc18c\uc2a4 \ub370\uc774\ud130\ub97c \uc218\uc815\ud558\uc5ec \ub2e4\ub978 \uc815\ubcf4\ub97c \ucd94\ucd9c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"\uc544\ub798 \ud14d\uc2a4\ud2b8\uc5d0\uc11c \uc0ac\ub78c \uc774\ub984, \ud68c\uc0ac \uc774\ub984, \uc704\uce58 \ubc0f \uc804\ud654\ubc88\ud638\ub97c \ucd94\ucd9c\ud569\ub2c8\ub2e4.\n\n\uc548\ub155\ud558\uc138\uc694. \uc81c \uc774\ub984\uc740 \ub85c\ubc84\ud2b8 \uc2a4\ubbf8\uc2a4\uc785\ub2c8\ub2e4. \ub378\ub77c\uc6e8\uc5b4\uc8fc \ucf58\ud1a0\uc18c \ubcf4\ud5d8\uc5d0\uc11c \uc804\ud654\ud588\uc2b5\ub2c8\ub2e4. \uc81c \ub3d9\ub8cc\uac00 \ub2f9\uc0ac\uc758 \uc885\ud569 \ubcf5\ub9ac\ud6c4\uc0dd \uc815\ucc45\uc5d0 \ub300\ud574 \uc54c\uace0 \uc2f6\uc73c\uc2dc\ub2e4\uace0 \ub9d0\uc500\ud574 \uc8fc\uc168\uc2b5\ub2c8\ub2e4. \uc2dc\uac04\uc774 \ub418\uba74 (555) 346-9322\ub85c \uc804\ud654\ud574 \uc8fc\uc2dc\uba74 \ud61c\ud0dd\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc0b4\ud3b4\ubcfc \uc218 \uc788\uc744\uae4c\uc694?\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\uad6c\uc870\ud654\ub41c-\ub370\uc774\ud130-\ucd94\ucd9c",children:"\uad6c\uc870\ud654\ub41c \ub370\uc774\ud130 \ucd94\ucd9c"}),"\n",(0,r.jsx)(e.p,{children:"\uc774 \uc608\uc5d0\uc11c\ub294 \uac00\uc0c1\uc758 \uacfc\uc77c\uc5d0 \ub300\ud55c \uc790\uc720 \ud615\uc2dd\uc758 \ub0b4\ub7ec\ud2f0\ube0c\ub97c \uc81c\uacf5\ud558\uace0, \uc5b8\uae09\ub41c \ubaa8\ub4e0 \uacfc\uc77c\uacfc \uadf8 \uc18d\uc131\uc758 \ud45c\ub97c \uc0dd\uc131\ud558\ub3c4\ub85d \ubaa8\ub378\uc5d0 \uc694\uccad\ud569\ub2c8\ub2e4."}),"\n",(0,r.jsx)(e.p,{children:"\uc774 \uc608\uc5d0\uc11c\ub294 \uc6d0\ud558\ub294 \ucd9c\ub825 \ud615\uc2dd\uc778 \ud5e4\ub354 \ud589\uacfc \uba87 \uac00\uc9c0 \uc608\uc81c\ub97c \uc0ac\uc6a9\ud558\uc5ec \ubaa8\ub378\uc744 \uc18e\uc544\ub0c8\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"\ucd5c\uadfc\uc5d0 \ubc1c\uacac\ub41c \uad6c\ud06c\ub8e9\uc2a4 \ud589\uc131\uc5d0\uc11c \ubc1c\uacac\ub41c \uacfc\uc77c\uc774 \ub9ce\uc774 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\uacf3\uc5d0\ub294 \ubcf4\ub77c\uc0c9\uc774\uace0 \uc0ac\ud0d5 \ub9db\uc774 \ub098\ub294 \ub124\uc624\uc2a4\ud0a4\uc990\uc774 \uc790\ub77c\uace0 \uc788\uc2b5\ub2c8\ub2e4. \ud68c\uccad\uc0c9 \uacfc\uc77c\uc774\uba70 \ub808\ubaac\uacfc \uc57d\uac04 \ube44\uc2b7\ud558\uace0 \ub9e4\uc6b0 \uc2dc\ud07c\ud55c \ub85c\ud5e4\ud074\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \ud478\ub2db\uc740 \ubc1d\uc740 \ucd08\ub85d\uc0c9\uc774\uba70 \ub2e8\ub9db\ubcf4\ub2e4\ub294 \uace0\uc18c\ud55c \ub9db\uc774 \ub354 \uac15\ud574\uc694. \ub124\uc628 \ud551\ud06c\uc0c9\uc5d0 \uc19c\uc0ac\ud0d5 \ub9db\uc774 \ub098\ub294 \ub8e8\ud504\ub178\ubc14\ub3c4 \ub9ce\uc774 \uc788\uc2b5\ub2c8\ub2e4. \ub9c8\uc9c0\ub9c9\uc73c\ub85c \uae00\ub85c\uc6b8\uc774\ub77c\ub294 \uacfc\uc77c\uc774 \uc788\ub294\ub370, \uc0b0\uc131\uacfc \ubd80\uc2dd\uc131\uc778 \ub9e4\uc6b0 \uc2dc\uace0 \uc4f4\ub9db\uc774 \ub098\uba70 \uc605\uc740 \uc624\ub80c\uc9c0\uc0c9\uc744 \ub760\ub294 \uacfc\uc77c\uc785\ub2c8\ub2e4.\n\n\uad6c\ud06c\ub8e9\uc2a4\uc758 \uacfc\uc77c\uc744 \uc694\uc57d\ud55c \ud45c\ub97c \ub2e4\uc74c\uacfc \uac19\uc774 \ub9c8\ud06c\ub2e4\uc6b4 \ud14c\uc774\ube14\uc5d0 \uc791\uc131\ud558\uc138\uc694.\n"})}),"\n",(0,r.jsx)(e.p,{children:"\ub2e4\uc74c \ud14d\uc2a4\ud2b8\ub97c \ucd94\uac00\ud558\uc5ec \ud504\ub86c\ud504\ud2b8\ub97c \ud655\uc7a5\ud574 \ubcf4\uc138\uc694:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"\ub610\ud55c \uad6c\ud06c\ub8e9\uc2a4\uc758 \uacfc\uc77c\uc744 \uc694\uc57d\ud55c JSON \ubc30\uc5f4\uc744 \ub9cc\ub4e4\uc5b4 \uc8fc\uc138\uc694:\n"})}),"\n",(0,r.jsx)(e.p,{children:"\uc774\uc81c \ubaa8\ub378\uc774 \uacfc\uc77c\uacfc \uadf8 \uc18d\uc131\uc758 JSON \ubc30\uc5f4\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4."}),"\n",(0,r.jsx)(e.h2,{id:"\ud14d\uc2a4\ud2b8-\ubd84\ub958",children:"\ud14d\uc2a4\ud2b8 \ubd84\ub958"}),"\n",(0,r.jsx)(e.p,{children:'\uc774 \uc608\uc81c\uc5d0\uc11c\ub294 \ud5e4\ub4dc\ub77c\uc778\uacfc \uce74\ud14c\uace0\ub9ac\uc758 \ud55c \uac00\uc9c0 \uc608\ub97c \uc81c\uacf5\ud558\uace0 \ubaa8\ub378\uc5d0 \ub450 \ubc88\uc9f8 \uc608\ub97c \ubd84\ub958\ud558\ub3c4\ub85d \uc694\uccad\ud569\ub2c8\ub2e4. \uc774\uac83\uc740 "\uc6d0\uc0f7 \ud559\uc2b5"\uc758 \uc608\ub85c, \ud558\ub098\uc758 \uc608\uc81c\ub9cc \uc788\uc73c\uba74 \ubaa8\ub378\uc774 \uc77c\ubc18\ud654\ud558\uc5ec \uc0c8\ub85c\uc6b4 \uc608\uc81c\ub97c \ubd84\ub958\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.'}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"\ub2e4\uc74c \ub274\uc2a4 \ud5e4\ub4dc\ub77c\uc778\uc744 \ub2e4\uc74c \uce74\ud14c\uace0\ub9ac \uc911 \ud558\ub098\ub85c \ubd84\ub958\ud558\uc138\uc694: \ube44\uc988\ub2c8\uc2a4, \uae30\uc220, \uc815\uce58, \uc2a4\ud3ec\uce20, \uc5d4\ud130\ud14c\uc778\uba3c\ud2b8\n\n\ud5e4\ub4dc\ub77c\uc778 1: \ub3c4\ub098 \uc2a4\ud14c\ud39c\uc2a8\uc774 \uc0c8\ub85c\uc6b4 \uc885\ub958\uc758 \uc644\ubcbd\ud568\uc744 \uc694\ub9ac\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uc778\ud130\ub137\uc5d0\uc11c \uac00\uc7a5 \uc0ac\ub791\ubc1b\ub294 \uc694\ub9ac \uc804\ubb38\uac00\uac00 \ud654\uc81c\uc758 \uc0c8 \ucc45\uacfc \uc0c8\ub85c\uc6b4 \uad00\uc810\uc744 \uc81c\uc2dc\ud569\ub2c8\ub2e4.\n\uce74\ud14c\uace0\ub9ac: \uc5d4\ud130\ud14c\uc778\uba3c\ud2b8\n\n\ud5e4\ub4dc\ub77c\uc778 2: \ub300\ud615 \uc18c\ub9e4\uc5c5\uccb4, 100\uac1c \uc774\uc0c1\uc758 \ub9e4\uc7a5 \ud3d0\uc1c4 \uacc4\ud68d \ubc1c\ud45c\n\n\uce74\ud14c\uace0\ub9ac:\n"})}),"\n",(0,r.jsx)(e.p,{children:"\ud5e4\ub4dc\ub77c\uc778 2\ub97c \ub2e4\ub978 \ud14d\uc2a4\ud2b8\ub85c \ubc14\uafb8\uace0 \uc644\uc131\uc744 \ub2e4\uc2dc \uc0dd\uc131\ud574 \ubcf4\uc138\uc694. \uc801\uc808\ud55c \uce74\ud14c\uace0\ub9ac\uac00 \uc0dd\uc131\ub418\ub098\uc694?"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"\ub274\uc695 \uc82f\uce20\uac00 \ub610 \ud328\ud588\uc2b5\ub2c8\ub2e4!\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"\uc624\ubc14\ub9c8, \uc7ac\uc120 \ucd9c\ub9c8 \ubc1c\ud45c\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"\uc7a5\uc678 \uac70\ub798\uc5d0\uc11c Microsoft \uc8fc\uac00 \uc0c1\uc2b9\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"20nm \uacf5\uc815\uc740 \ub354 \ub192\uc740 \ubc00\ub3c4\uc640 \ub354 \ub098\uc740 \uc804\ub825 \uac00\uce58\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4.\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\ud14d\uc2a4\ud2b8-\uc694\uc57d",children:"\ud14d\uc2a4\ud2b8 \uc694\uc57d"}),"\n",(0,r.jsx)(e.p,{children:'\ud14d\uc2a4\ud2b8 \uc694\uc57d\uc740 ChatGPT\uc758 \uc798 \uc54c\ub824\uc9c4 \uae30\ub2a5\uc73c\ub85c, \ud070 \ud14d\uc2a4\ud2b8\uc758 \uc9e7\uc740 \uc694\uc57d\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4. "\ub108\ubb34 \uae38\uc5b4\uc11c \uc77d\uc9c0 \ubabb\ud588\uc2b5\ub2c8\ub2e4"\ub77c\ub294 \ubb38\uad6c\ub97c \ucd94\uac00\ud558\uba74 \uc544\ub798 \uae00\uc758 \uc694\uc57d\ubcf8\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc5ec\ub7ec\ubd84\uc758 \ube44\uc988\ub2c8\uc2a4\uc5d0\uc11c \uc774 \uae30\ub2a5\uc774 \uc5b4\ub514\uc5d0 \uc720\uc6a9\ud560\uae4c\uc694?'}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"Microsoft\ub294 \ud559\uc2b5\uacfc \uc774\ud574\uc5d0 \ub300\ud55c \ubcf4\ub2e4 \ucd1d\uccb4\uc801\uc774\uace0 \uc778\uac04 \uc911\uc2ec\uc801\uc778 \uc811\uadfc \ubc29\uc2dd\uc744 \ucde8\ud568\uc73c\ub85c\uc368 \uae30\uc874 \uae30\uc220\uc744 \ub6f0\uc5b4\ub118\uc5b4 AI\ub97c \ubc1c\uc804\uc2dc\ud0a4\uae30 \uc704\ud55c \ub178\ub825\uc744 \uacc4\uc18d\ud574 \uc654\uc2b5\ub2c8\ub2e4. \uc800\ub294 Azure AI \uc778\uc9c0 \uc11c\ube44\uc2a4\uc758 \ucd5c\uace0 \uae30\uc220 \ucc45\uc784\uc790\ub85c\uc11c \ub6f0\uc5b4\ub09c \uacfc\ud559\uc790 \ubc0f \uc5d4\uc9c0\ub2c8\uc5b4\ub85c \uad6c\uc131\ub41c \ud300\uacfc \ud611\ub825\ud558\uc5ec \uc774 \uacfc\uc81c\ub97c \ud604\uc2e4\ud654\ud558\uae30 \uc704\ud574 \ub178\ub825\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uc81c \uc5ed\ud560\uc5d0\uc11c \uc800\ub294 \uc778\uac04 \uc778\uc9c0\uc758 \uc138 \uac00\uc9c0 \uc18d\uc131\uc778 \ub2e8\uc77c \uc5b8\uc5b4 \ud14d\uc2a4\ud2b8(X), \uc624\ub514\uc624 \ub610\ub294 \uc2dc\uac01\uc801 \uac10\uac01 \uc2e0\ud638(Y), \ub2e4\uad6d\uc5b4(Z) \uac04\uc758 \uad00\uacc4\ub97c \ubc14\ub77c\ubcf4\ub294 \ub3c5\ud2b9\ud55c \uad00\uc810\uc744 \uc990\uae41\ub2c8\ub2e4. \uc774 \uc138 \uac00\uc9c0\uac00 \uad50\ucc28\ud558\ub294 \uc9c0\uc810\uc5d0\ub294 \uadf8\ub9bc 1\uc5d0\uc11c \ubcfc \uc218 \uc788\ub4ef\uc774 \uc778\uac04\uc744 \ub354 \uc798 \ub9d0\ud558\uace0, \ub4e3\uace0, \ubcf4\uace0, \uc774\ud574\ud560 \uc218 \uc788\ub294 \ub354 \uac15\ub825\ud55c AI\ub97c \ub9cc\ub4e4\uae30 \uc704\ud55c \uacf5\ub3d9 \ud45c\ud604\uc778 XYZ \ucf54\ub4dc\ub77c\ub294 \ub9c8\ubc95\uc774 \uc788\uc2b5\ub2c8\ub2e4. \n\n\uc800\ud76c\ub294 XYZ-code\ub97c \ud1b5\ud574 \uc5ec\ub7ec \uc591\uc2dd\uacfc \uc5b8\uc5b4\ub97c \uc544\uc6b0\ub974\ub294 \uad50\ucc28 \ub3c4\uba54\uc778 \uc804\uc774 \ud559\uc2b5\uc774\ub77c\ub294 \uc7a5\uae30\uc801\uc778 \ube44\uc804\uc744 \ub2ec\uc131\ud560 \uc218 \uc788\uc744 \uac83\uc73c\ub85c \ubbff\uc2b5\ub2c8\ub2e4. \ubaa9\ud45c\ub294 \uc624\ub298\ub0a0 \uc778\uac04\uc774 \ud558\ub294 \ubc29\uc2dd\uacfc \ub9c8\ucc2c\uac00\uc9c0\ub85c \uad11\ubc94\uc704\ud55c \ub2e4\uc6b4\uc2a4\ud2b8\ub9bc AI \uc791\uc5c5\uc744 \uc9c0\uc6d0\ud558\uae30 \uc704\ud574 \ud45c\ud604\uc744 \uacf5\ub3d9\uc73c\ub85c \ud559\uc2b5\ud560 \uc218 \uc788\ub294 \uc0ac\uc804 \ud6c8\ub828\ub41c \ubaa8\ub378\uc744 \ubcf4\uc720\ud558\ub294 \uac83\uc785\ub2c8\ub2e4. \uc9c0\ub09c 5\ub144 \ub3d9\uc548 \ub300\ud654\ud615 \uc74c\uc131 \uc778\uc2dd, \uae30\uacc4 \ubc88\uc5ed, \ub300\ud654\ud615 \uc9c8\ubb38 \ub2f5\ubcc0, \uae30\uacc4 \ub3c5\ud574, \uc774\ubbf8\uc9c0 \ucea1\uc158 \ub4f1\uc758 \ubca4\uce58\ub9c8\ud06c\uc5d0\uc11c \uc778\uac04 \uc218\uc900\uc758 \uc131\ub2a5\uc744 \ub2ec\uc131\ud588\uc2b5\ub2c8\ub2e4. \uc774 \ub2e4\uc12f \uac00\uc9c0 \ud601\uc2e0\uc740 \uc778\uac04\uc774 \ud559\uc2b5\ud558\uace0 \uc774\ud574\ud558\ub294 \ubc29\uc2dd\uc5d0 \ub354 \uac00\uae4c\uc6b4 \ub2e4\uc911 \uac10\uac01 \ubc0f \ub2e4\uad6d\uc5b4 \ud559\uc2b5\uc744 \ub2ec\uc131\ud558\uc5ec AI \uc5ed\ub7c9\uc744 \ube44\uc57d\uc801\uc73c\ub85c \ubc1c\uc804\uc2dc\ud0a4\uaca0\ub2e4\ub294 \uc57c\uc2ec\ucc2c \ud3ec\ubd80\ub97c \ud5a5\ud55c \uac15\ub825\ud55c \uc2e0\ud638\ub97c \uc81c\uacf5\ud588\uc2b5\ub2c8\ub2e4. \ub2e4\uc6b4\uc2a4\ud2b8\ub9bc AI \uc791\uc5c5\uc5d0\uc11c \uc678\ubd80 \uc9c0\uc2dd \uc18c\uc2a4\ub97c \uae30\ubc18\uc73c\ub85c \ud55c\ub2e4\uba74 \uacf5\ub3d9 XYZ \ucf54\ub4dc\uac00 \uc774\ub7ec\ud55c \uc5f4\ub9dd\uc758 \uae30\ubcf8 \uc694\uc18c\ub77c\uace0 \uc0dd\uac01\ud569\ub2c8\ub2e4.\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\ud504\ub86c\ud504\ud2b8 \uc5d4\uc9c0\ub2c8\uc5b4\ub9c1\uc740 \ubcf5\uc7a1\ud558\uace0 \ube60\ub974\uac8c \uc9c4\ud654\ud558\ub294 \ubd84\uc57c\uc785\ub2c8\ub2e4. Microsoft Learn\uc758 ",(0,r.jsx)(e.a,{href:"https://learn.microsoft.com/azure/cognitive-services/openai/concepts/advanced-prompt-engineering",children:"\uc774 \ubb38\uc11c"}),"\uc5d0\uc11c \ucd5c\uc2e0 \uc9c0\uce68\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(e.p,{children:"\ub2e4\uc74c \uc2e4\uc2b5\uc5d0\uc11c\ub294 \uc6d0\ud558\ub294 \uc751\ub2f5\uc744 \uc0dd\uc131\ud558\ub3c4\ub85d \ubaa8\ub378\uc744 \uc870\uc885\ud558\ub294 \ubc29\ubc95\uc744 \ubc30\uc6cc \ubcf4\uaca0\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsx)(e.admonition,{title:"\uc219\uc81c",type:"info",children:(0,r.jsx)(e.p,{children:"\ub3c4\uc2dc \ud55c\uac00\uc6b4\ub370\uc11c \uae38\uc744 \uc783\uc740 \ucea5\uac70\ub8e8\uc5d0 \ub300\ud55c \uc6b4\uc728\uc744 \uc0dd\uc131\ud558\ub294 \ud504\ub86c\ud504\ud2b8\ub97c \ub9cc\ub4e4\uc5b4 \ubd05\ub2c8\ub2e4."})})]})}function h(n={}){const{wrapper:e}={...(0,s.M)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(a,{...n})}):a(n)}},4552:(n,e,i)=>{i.d(e,{I:()=>c,M:()=>t});var r=i(1504);const s={},l=r.createContext(s);function t(n){const e=r.useContext(l);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:t(n.components),r.createElement(l.Provider,{value:e},n.children)}}}]);
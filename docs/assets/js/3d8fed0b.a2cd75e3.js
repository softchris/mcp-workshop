"use strict";(self.webpackChunkmcp_workshop=self.webpackChunkmcp_workshop||[]).push([[8273],{67:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/vscode-tool-info-5cfa477c24ae4271fdceda830da47564.png"},592:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/vscode-tool-447cca07679cf7338fbce5d15c99514b.png"},1922:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/vscode-start-server-671fc8a986faf8845f5fd2c9c5f7341a.png"},2066:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"mcp-concepts/consuming-server/activity-vscode","title":"Activity: Consume server with Visual Studio Code","description":"For a server built with stdio you need to do the following at high level:","source":"@site/docs/mcp-concepts/01-consuming-server/02-activity-vscode.md","sourceDirName":"mcp-concepts/01-consuming-server","slug":"/mcp-concepts/consuming-server/activity-vscode","permalink":"/mcp-workshop/docs/mcp-concepts/consuming-server/activity-vscode","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/mcp-concepts/01-consuming-server/02-activity-vscode.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Consuming a server with Visual Studio Code","permalink":"/mcp-workshop/docs/mcp-concepts/consuming-server/vscode"},"next":{"title":"Consuming a server with an MCP client","permalink":"/mcp-workshop/docs/mcp-concepts/consuming-server/client"}}');var s=n(4848),i=n(8453);const r={sidebar_position:2},c="Activity: Consume server with Visual Studio Code",l={},d=[{value:"Create a config file",id:"create-a-config-file",level:2},{value:"Start the server",id:"start-the-server",level:2},{value:"Run the tool via GitHub Copilot chat",id:"run-the-tool-via-github-copilot-chat",level:2},{value:"Run the tool",id:"run-the-tool",level:2},{value:"Summary",id:"summary",level:2}];function a(e){const t={code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"activity-consume-server-with-visual-studio-code",children:"Activity: Consume server with Visual Studio Code"})}),"\n",(0,s.jsx)(t.p,{children:"For a server built with stdio you need to do the following at high level:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Create an mcp.json file in .vscode folder"}),"\n",(0,s.jsx)(t.li,{children:"Enter absolute path to the server"}),"\n",(0,s.jsx)(t.li,{children:"Start the server via the JSON file"}),"\n",(0,s.jsx)(t.li,{children:"Run the tool via GitHub Copilot chat"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"To do this, follow the steps below:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Create a ",(0,s.jsx)(t.code,{children:".vscode"})," folder in the root directory of your project and add a ",(0,s.jsx)(t.code,{children:"mcp.json"})," file in the ",(0,s.jsx)(t.code,{children:".vscode"})," folder."]}),"\n",(0,s.jsx)(t.li,{children:"Start the server via the JSON file."}),"\n",(0,s.jsx)(t.li,{children:"Run the tool via GitHub Copilot chat."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"create-a-config-file",children:"Create a config file"}),"\n",(0,s.jsx)(t.p,{children:"The config file is used to configure the server. It can contain both input, and server configurations."}),"\n",(0,s.jsx)(t.p,{children:"We need a folder for our configuration file."}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Create a ",(0,s.jsx)(t.code,{children:".vscode"})," folder in the root directory of your project and add a ",(0,s.jsx)(t.code,{children:"mcp.json"})," file in the ",(0,s.jsx)(t.code,{children:".vscode"})," folder."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"mkdir .vscode\n"})}),"\n",(0,s.jsx)(t.p,{children:"Next, we need the actual configuration file."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Create a ",(0,s.jsx)(t.code,{children:"mcp.json"})," file in the ",(0,s.jsx)(t.code,{children:".vscode"})," folder with the following content:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\r\n    "inputs": [],\r\n    "servers": {\r\n       "hello-mcp": {\r\n           "command": "cmd",\r\n           "args": [\r\n               "/c", "node", "<absolute path>\\\\build\\\\index.js"\r\n           ]\r\n       }\r\n    }\r\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"The path to your server should be the build folder. To find the path, run the following command in the terminal:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"pwd\n"})}),"\n",(0,s.jsxs)(t.p,{children:["This will give you the absolute path to your project. You can then copy the path and paste it in the ",(0,s.jsx)(t.code,{children:"mcp.json"})," file."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"start-the-server",children:"Start the server"}),"\n",(0,s.jsxs)(t.p,{children:["To start the server, open the ",(0,s.jsx)(t.em,{children:"mcp.json"})," file in Visual Studio Code and click on the play button."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Start server",src:n(1922).A+"",width:"588",height:"283"})}),"\n",(0,s.jsx)(t.h2,{id:"run-the-tool-via-github-copilot-chat",children:"Run the tool via GitHub Copilot chat"}),"\n",(0,s.jsx)(t.p,{children:"Now that the server have hopefully started up, let's use it."}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Click tools icon to bring up a list of tools"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"VS Code available tools",src:n(592).A+"",width:"712",height:"298"})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Inspect the tools result list, your server should be listed there."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"VS Code inspect tools",src:n(67).A+"",width:"1415",height:"104"})}),"\n",(0,s.jsx)(t.h2,{id:"run-the-tool",children:"Run the tool"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"To run the tool, type a prompt in the chat like so:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-text",children:"add 22 to 1\n"})}),"\n",(0,s.jsx)(t.p,{children:"You should see a result like so indicating that you allow the agent to run the tool:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"VS Code run tool",src:n(2535).A+"",width:"735",height:"1809"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Click the down arrow to expand the tool and see the arguments that are passed to the tool."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"VS Code run tool",src:n(7952).A+"",width:"714",height:"919"})}),"\n",(0,s.jsx)(t.p,{children:"Here you can see what server the selected tool is running on and the arguments that are passed to the tool."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:'Click on the "Continue" button to run the tool.'}),"\n",(0,s.jsx)(t.p,{children:"You should see a result like so:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"VS Code run tool result",src:n(9196).A+"",width:"729",height:"339"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,s.jsx)(t.p,{children:"Congrats, you've managed to consume a server with Visual Studio Code and run a tool via GitHub Copilot chat!"})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},2535:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/vscode-agent-5c01c07d0be00b7eb33a056af8b3ffae.png"},7952:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/vscode-tool-args-c61903aac90988f9439249634d93febd.png"},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var o=n(6540);const s={},i=o.createContext(s);function r(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:t},e.children)}},9196:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/vscode-tool-result-042a280dd25c06b76777cb2b0621391b.png"}}]);
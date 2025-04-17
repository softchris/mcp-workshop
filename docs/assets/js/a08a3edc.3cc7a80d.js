"use strict";(self.webpackChunkmcp_workshop=self.webpackChunkmcp_workshop||[]).push([[518],{4218:e=>{e.exports=JSON.parse('{"version":{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"category","label":"MCP Concepts","collapsible":true,"collapsed":true,"items":[{"type":"category","label":"Getting started","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"MCP, what is it and why use it?","href":"/mcp-workshop/docs/mcp-concepts/first-server/intro","docId":"mcp-concepts/first-server/intro","unlisted":false},{"type":"link","label":"Activity: Create a first MCP server","href":"/mcp-workshop/docs/mcp-concepts/first-server/activity-first-server","docId":"mcp-concepts/first-server/activity-first-server","unlisted":false},{"type":"link","label":"Activity: Add API to server","href":"/mcp-workshop/docs/mcp-concepts/first-server/activity-add-api","docId":"mcp-concepts/first-server/activity-add-api","unlisted":false}],"href":"/mcp-workshop/docs/category/getting-started"},{"type":"category","label":"Consuming a server","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Consuming a server with Visual Studio Code","href":"/mcp-workshop/docs/mcp-concepts/consuming-server/vscode","docId":"mcp-concepts/consuming-server/vscode","unlisted":false},{"type":"link","label":"Activity: Consume server with Visual Studio Code","href":"/mcp-workshop/docs/mcp-concepts/consuming-server/activity-vscode","docId":"mcp-concepts/consuming-server/activity-vscode","unlisted":false},{"type":"link","label":"Consuming a server with an MCP client","href":"/mcp-workshop/docs/mcp-concepts/consuming-server/client","docId":"mcp-concepts/consuming-server/client","unlisted":false},{"type":"link","label":"Activity: Creating a client","href":"/mcp-workshop/docs/mcp-concepts/consuming-server/activity-client","docId":"mcp-concepts/consuming-server/activity-client","unlisted":false},{"type":"link","label":"LLM Client","href":"/mcp-workshop/docs/mcp-concepts/consuming-server/llm-client","docId":"mcp-concepts/consuming-server/llm-client","unlisted":false},{"type":"link","label":"Activity: Create an MCP client using LLM","href":"/mcp-workshop/docs/mcp-concepts/consuming-server/activity-llm-client","docId":"mcp-concepts/consuming-server/activity-llm-client","unlisted":false}],"href":"/mcp-workshop/docs/category/consuming-a-server"},{"type":"category","label":"SSE Servers","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Servers with SSE","href":"/mcp-workshop/docs/mcp-concepts/sse-server/sse","docId":"mcp-concepts/sse-server/sse","unlisted":false},{"type":"link","label":"Activity: Create an SSE server","href":"/mcp-workshop/docs/mcp-concepts/sse-server/activity-see","docId":"mcp-concepts/sse-server/activity-see","unlisted":false}],"href":"/mcp-workshop/docs/category/sse-servers"},{"type":"category","label":"What else?","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Consuming external servers","href":"/mcp-workshop/docs/mcp-concepts/more/external","docId":"mcp-concepts/more/external","unlisted":false},{"type":"link","label":"There\'s more than tools","href":"/mcp-workshop/docs/mcp-concepts/more/more","docId":"mcp-concepts/more/more","unlisted":false}],"href":"/mcp-workshop/docs/category/what-else"}],"href":"/mcp-workshop/docs/category/mcp-concepts"}]},"docs":{"mcp-concepts/consuming-server/activity-client":{"id":"mcp-concepts/consuming-server/activity-client","title":"Activity: Creating a client","description":"To create a client, we\'ll use a similar set up as with the server. At high level, here\'s what we need to do:","sidebar":"tutorialSidebar"},"mcp-concepts/consuming-server/activity-llm-client":{"id":"mcp-concepts/consuming-server/activity-llm-client","title":"Activity: Create an MCP client using LLM","description":"Let\'s add an LLM and ensure the LLM is what\'s between the user and the server. Here\'s how it will work on high level:","sidebar":"tutorialSidebar"},"mcp-concepts/consuming-server/activity-vscode":{"id":"mcp-concepts/consuming-server/activity-vscode","title":"Activity: Consume server with Visual Studio Code","description":"For a server built with stdio you need to do the following at high level:","sidebar":"tutorialSidebar"},"mcp-concepts/consuming-server/client":{"id":"mcp-concepts/consuming-server/client","title":"Consuming a server with an MCP client","description":"Another way to connect and consume an MCP server is by using a client. This is similar to how you would connect to a server using a web browser or a command line tool like curl. The client programmatically connects to the server and sends requests for tools, resources and more, receiving responses in return.","sidebar":"tutorialSidebar"},"mcp-concepts/consuming-server/llm-client":{"id":"mcp-concepts/consuming-server/llm-client","title":"LLM Client","description":"An even better client can be built by adding LLM capabilities to it. How do we do that? We can use the OpenAI SDK to call an AI model, for example, GPT-3.5 or GPT-4. A good free alternative is using GitHub Models.","sidebar":"tutorialSidebar"},"mcp-concepts/consuming-server/vscode":{"id":"mcp-concepts/consuming-server/vscode","title":"Consuming a server with Visual Studio Code","description":"Visual Studio Code can be used to consume a server. The idea is that Visual Studio Code can be used to run a server and then the tool can be run via GitHub Copilot chat. This is a great way to create an \\"agentic\\" app.","sidebar":"tutorialSidebar"},"mcp-concepts/first-server/activity-add-api":{"id":"mcp-concepts/first-server/activity-add-api","title":"Activity: Add API to server","description":"A tool like add is interesting to see how things work, but the real value comes from seeing how to use it in a real application. In this activity, you will add an API to the server you created in the previous activity.","sidebar":"tutorialSidebar"},"mcp-concepts/first-server/activity-first-server":{"id":"mcp-concepts/first-server/activity-first-server","title":"Activity: Create a first MCP server","description":"What a server can do","sidebar":"tutorialSidebar"},"mcp-concepts/first-server/intro":{"id":"mcp-concepts/first-server/intro","title":"MCP, what is it and why use it?","description":"TLDR; If you build AI apps, you know that you can add tools and other resources to your LLM (large language model), to make the LLM more knowledgeable. However if you place those tools and resources on a server, the app and the server capabilities can be used by any client with/without an LLM.","sidebar":"tutorialSidebar"},"mcp-concepts/more/external":{"id":"mcp-concepts/more/external","title":"Consuming external servers","description":"Example servers","sidebar":"tutorialSidebar"},"mcp-concepts/more/more":{"id":"mcp-concepts/more/more","title":"There\'s more than tools","description":"On this workshop, we\'ve covered tools, but there are other concepts that are important to understand. In this section, we\'ll cover some of them.","sidebar":"tutorialSidebar"},"mcp-concepts/sse-server/activity-see":{"id":"mcp-concepts/sse-server/activity-see","title":"Activity: Create an SSE server","description":"Let\'s create an SSE server and also let\'s ensure we can reach it via clients like the Inspector and Visual Studio Code.","sidebar":"tutorialSidebar"},"mcp-concepts/sse-server/sse":{"id":"mcp-concepts/sse-server/sse","title":"Servers with SSE","description":"The stdio transport, that you\'ve been using so far, enables communication through standard input and output streams. This is particularly useful for local integrations and command-line tools.","sidebar":"tutorialSidebar"}}}}')}}]);
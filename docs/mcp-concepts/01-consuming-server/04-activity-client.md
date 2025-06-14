---
sidebar_position: 4
---

# Activity: Creating a client

To create a client, we'll use a similar set up as with the server. At high level, here's what we need to do:

- Create a new Node.js project in the `client` folder.
- Install the necessary dependencies.
- Create a `src` folder and add an `index.ts` file.
- Write the client code to connect to the server and call the `add` tool.

## -1- Create a new Node.js project

This is straightforward. We will create a new Node.js project and install the necessary dependencies. The project structure will look like this:

```bash
|- client
    |- src
    |   |- index.ts
    |- package.json
    |- tsconfig.json
```

1. Create a `client` folder in the root directory of your project.

   ```bash
   mkdir client
   ```

1. Initialize a new Node.js project in the `client` folder:

   ```bash
   cd client
   npm init -y
   ```

1. Update the `package.json` file to include the following:

   ```json
   {
     "name": "client",
     "version": "1.0.0",
     "main": "index.js",
     "scripts": {
       "test": "echo \"Error: no test specified\" && exit 1",
       "build": "tsc && node ./build/index.js"
     },
     "keywords": [],
     "author": "",
     "license": "ISC",
     "dependencies": {
       "@modelcontextprotocol/sdk": "^1.8.0"
     },
     "devDependencies": {
       "@types/node": "^22.13.17",
       "typescript": "^5.8.2"
     },
     "description": ""
   }
   ```

1. Create a `tsconfig.json` file in the `client` folder with the following content:

   ```json
   {
    "compilerOptions": {
      "target": "ES2022",
      "module": "Node16",
      "moduleResolution": "Node16",
      "outDir": "./build",
      "rootDir": "./src",
      "strict": true,
      "esModuleInterop": true,
      "skipLibCheck": true,
      "forceConsistentCasingInFileNames": true
    },
    "include": ["src/**/*"],
    "exclude": ["node_modules"]
   }
   ```

### -2- Install the necessary dependencies

We need to install the necessary dependencies for the client. The main dependency is the `@modelcontextprotocol/sdk` package, which provides the client SDK for interacting with the server. Also, we need `zod` for validation.

1. Install the necessary dependencies:

   ```bash
   npm install @modelcontextprotocol/sdk zod
   ```

1. Create a `src` folder in the `client` directory:

   ```bash
   mkdir src
   ```

1. Create a file named `index.ts` in the `src` folder:

## -3- Write the client code

Now that we have the project set up, let's write the client code to connect to the server and call the `add` tool.

1. Add the following code to `index.ts`:

   ```typescript
    import { Client } from "@modelcontextprotocol/sdk/client/index.js";
    import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
    
    async function main() {

        const transport = new StdioClientTransport({
            command: "node",
            args: ["../build/index.js"]
        });
    
        const client = new Client(
        {
            name: "example-client",
            version: "1.0.0"
        },
        {
            capabilities: {
            prompts: {},
            resources: {},
            tools: {}
            }
        }
       );
    
       await client.connect(transport);

   main().catch((error) => {
     console.error("Fatal error: ", error);
     process.exit(1);
   });
   ```

   In the preceding code:

   - The `Client` class is imported from the `@modelcontextprotocol/sdk/client/index.js` module.
   - An instance of `StdioClientTransport` is created, which will be used to communicate with the server.
   - The `Client` instance is created with a name and version, and an empty capabilities object. We will add prompts, resources, and tools to the capabilities object as needed.
   - A connection to the server is established using the `connect` method of the `Client` instance, passing in the transport instance.

   At this point, we're not doing anything with the client yet. To interact with the server, we need to implement the logic for sending requests for prompts, resources, and tools. This will be done in the next steps.

### List tools and call the `add` tool

1. Add the following code to the `main` function to query the server for its tools:

   ```typescript
   console.log("TOOLS");
   const tools = await client.listTools();
   tools.tools.forEach((tool) => {
        console.log("Tool: ", tool.name);
   });
   ```

   In the preceding code:

    - The `listTools` method of the `Client` instance is called to retrieve the list of available tools from the server.
    - Thereafter the tools are printed to the console.

1. Let's invoke the `add` tool we created in the server. Add the following code to the `main` function:

   ```typescript
   // Call a tool
   console.log("CALL TOOL");
    const result = await client.callTool({
        name: "add",
        arguments: {
            a: 2,
            b: 2
        }
    });

   console.log("\tResult: ", result);
   ```

   In the preceding code:

   - The `callTool` method of the `Client` instance is called to invoke the `add` tool on the server.
   - `callTool` takes an object with the tool name and arguments as parameters.

Your code so far should look like this:

```typescript
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

async function main() {

    const transport = new StdioClientTransport({
        command: "node",
        args: ["../build/index.js"]
    });

    const client = new Client(
    {
        name: "example-client",
        version: "1.0.0"
    },
    {
        capabilities: {
        prompts: {},
        resources: {},
        tools: {}
        }
    }
    );

    await client.connect(transport);

    console.log("TOOLS");
    const tools = await client.listTools();
    tools.tools.forEach((tool) => {
        console.log("Tool: ", tool.name);
    });

    // Call a tool
    console.log("CALL TOOL");
    const result = await client.callTool({
        name: "add",
        arguments: {
            a: 2,
            b: 2
        }
    });

    console.log("\tResult: ", result);
}

main().catch((error) => {
    console.error("Fatal error: ", error);
    process.exit(1);
});
```

## -4- Run the client

To run the client type the following command in the terminal (make sure you stand in the client directory):

```sh
npm run build
```

You should see the following output:

```sh
TOOLS
Tool:  add
CALL TOOL
    Result:  { content: [ { type: 'text', text: '4' } ] }
```

In our next activity, let's learn how we can add a large language model (LLM) to our client. This will make it possible for the client to negotiate with the server. Why this is useflu is that you can now show an NLP, Natural Language Processing user interface to the user, and the user can interact using natural language prompts.

## Summary

You've built a client capable of communicating with an MCP Server. The client can list tools and call the `add` tool. Either run this client from your project or clone the repository below to see a working solution:

```bash
git clone https://github.com/softchris/tutorial-mcp.git
cd tutorial-mcp
```

Follow the instructions in the README file to run the server and test it using the inspector tool. You can also look at the code in `client/src/index.ts`  to see the client working.


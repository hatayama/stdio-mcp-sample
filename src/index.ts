import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

const server = new McpServer({
  name: "hello-mcp",
  version: "1.0.0",
});

const name = process.env["NAME"] ?? "world";

server.tool("hello", "A tool that just returns hello with NAME", {}, () => {
  return {
    content: [{ type: "text", text: `hello ${name}` }],
  };
});

async function main(): Promise<void> {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

void main();

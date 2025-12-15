# stdio-mcp-sample

Minimal MCP (Model Context Protocol) server sample with stdio transport.

## Features

- Minimal MCP server implementation
- stdio transport for easy integration
- `hello` tool that returns "hello"

## Requirements

- Node.js 20+
- pnpm

## Getting Started

1. Install dependencies:

```bash
pnpm install
```

2. Build:

```bash
pnpm build
```

## Usage

### With Cursor

Add to your `~/.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "hello-mcp": {
      "command": "node",
      "args": ["/path/to/stdio-mcp-sample/dist/index.js"],
      "env": {
        "NAME": "YourName"
      }
    }
  }
}
```

### With Claude Desktop

Add to your Claude Desktop config:

```json
{
  "mcpServers": {
    "hello-mcp": {
      "command": "node",
      "args": ["/path/to/stdio-mcp-sample/dist/index.js"],
      "env": {
        "NAME": "YourName"
      }
    }
  }
}
```

## Environment Variables

| Variable | Description                              | Default |
| -------- | ---------------------------------------- | ------- |
| `NAME`   | Name to include in the hello message     | `world` |

## Available Tools

| Tool    | Description                              |
| ------- | ---------------------------------------- |
| `hello` | Returns "hello {NAME}" (default: "hello world") |

## Scripts

| Command             | Description               |
| ------------------- | ------------------------- |
| `pnpm build`        | Build the project         |
| `pnpm lint`         | Run ESLint                |
| `pnpm lint:fix`     | Run ESLint with auto-fix  |
| `pnpm format`       | Format code with Prettier |
| `pnpm format:check` | Check code formatting     |

## License

MIT

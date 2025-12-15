# ts-cli-template

TypeScript CLI template project with modern tooling.

## Features

- TypeScript with strict mode
- ESM (ECMAScript Modules)
- ESLint 9 with flat config
- Prettier for code formatting
- tsup for bundling
- release-please for automated releases
- @lavamoat/allow-scripts for supply chain security
- Dependabot for dependency updates
- GitHub Actions CI/CD

## Requirements

- Node.js 20+
- pnpm

## Getting Started

1. Click "Use this template" on GitHub to create a new repository
2. Clone your new repository
3. Install dependencies:

```bash
pnpm install
pnpm allow-scripts
```

4. Update `package.json` with your project details:
   - `name`
   - `description`
   - `author`
   - `bin` (rename the CLI command)

5. Start developing in `src/index.ts`

## Scripts

| Command              | Description                 |
| -------------------- | --------------------------- |
| `pnpm build`         | Build the project           |
| `pnpm lint`          | Run ESLint                  |
| `pnpm lint:fix`      | Run ESLint with auto-fix    |
| `pnpm format`        | Format code with Prettier   |
| `pnpm format:check`  | Check code formatting       |
| `pnpm allow-scripts` | Run allowed install scripts |

## Security

This template implements supply chain attack prevention:

- **ignore-scripts**: Disables automatic script execution during install
- **@lavamoat/allow-scripts**: Explicitly controls which packages can run install scripts
- **Dependabot**: Automated weekly security updates
- **Security audit CI**: Runs `pnpm audit`, `lockfile-lint`, and OSV-Scanner on every PR
- **Pinned versions**: All dependencies use exact versions

## License

MIT

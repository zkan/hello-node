# AGENTS.md

This file contains guidelines and commands for agentic coding agents working in this e-commerce Node.js/TypeScript repository.

## Development Commands

### Running the Application
- `npm run dev` - Start development server with hot reload using tsx
- `mise r dev` - Alternative way to start dev server via mise

### Database Operations
- `mise r db` or `docker compose up -d` - Start PostgreSQL database
- `mise r psql` - Access database via psql
- `mise r migrate` or `./node_modules/.bin/prisma migrate dev` - Create and apply migrations
- `./node_modules/.bin/prisma migrate dev --name <migration_name>` - Create named migration
- `./node_modules/.bin/prisma generate` - Generate Prisma client

### Testing
- No test framework currently configured (package.json shows placeholder test script)
- When adding tests, configure appropriate test runner (jest, vitest, etc.)

### Code Quality
- TypeScript compilation: `npx tsc --noEmit` (check types without emitting)
- No linting configured - consider adding ESLint for code quality

## Project Architecture

### Tech Stack
- **Runtime**: Node.js 24.12.0 (managed by mise)
- **Language**: TypeScript with strict mode enabled
- **Framework**: Express.js
- **Database**: PostgreSQL with Prisma ORM
- **Auth**: JWT + bcrypt for password hashing
- **Dev Server**: tsx for hot reloading

### Directory Structure
```
src/
├── controllers/     # Route handlers (auth.ts)
├── lib/            # Utilities and configurations (prisma.ts)
├── routes/         # Express route definitions
├── secrets.ts      # Environment variable exports
└── index.ts        # Application entry point
```

## Code Style Guidelines

### Import Organization
- Use ES6 imports with `import` statements
- Group external imports first, then internal imports
- Example: `import express from "express"` followed by `import { prisma } from "../lib/prisma"`

### TypeScript Configuration
- Strict mode enabled
- ES2023 target with ESNext modules
- Use explicit type annotations for function parameters and return types
- Export types when appropriate for reuse

### Naming Conventions
- **Files**: kebab-case for directories, camelCase for TypeScript files
- **Variables/Functions**: camelCase
- **Constants**: UPPER_SNAKE_CASE (e.g., `JWT_SECRET`, `PORT`)
- **Types/Interfaces**: PascalCase
- **Database Models**: PascalCase (Prisma convention)

### Error Handling
- Use `throw Error()` for synchronous errors in controllers
- Consider implementing proper error handling middleware for production
- Validate user input before database operations

### Express.js Patterns
- Use explicit type annotations: `const app: Express = express()`
- Route handlers should be async functions when using database
- Export route handlers from controllers, import in routes
- Use Router() for modular route organization

### Prisma Usage
- Import from `../generated/prisma/client` (custom output path)
- Use singleton pattern via `../lib/prisma.ts`
- Follow Prisma conventions for database operations
- Custom adapter configuration for PostgreSQL

### Environment Variables
- Store in `.env` file (gitignored)
- Export from `secrets.ts` with type annotations
- Use non-null assertion operator (`!`) for required secrets
- Default values provided via mise.toml for development

### Code Organization
- Controllers: Handle request/response logic
- Routes: Define endpoints and middleware
- Lib: Shared utilities and configurations
- Keep business logic out of route definitions

## Development Workflow

### Database Changes
1. Update `prisma/schema.prisma`
2. Run migration command: `mise r migrate`
3. Generate client if needed: `npx prisma generate`

### Adding New Features
1. Create/update controller in `src/controllers/`
2. Add routes in `src/routes/`
3. Export from `src/routes/index.ts`
4. Test with development server

### Security Considerations
- Password hashing with bcrypt (10 rounds)
- JWT tokens for authentication
- Environment variables for secrets
- Input validation needed for production

## Notes for Agents
- This is a learning project based on a Prisma + Node.js tutorial
- Database runs on PostgreSQL via Docker
- No current test framework - tests should be added
- Error handling is basic and needs improvement for production
- The project uses ES modules (`"type": "module"` in package.json)
# Getting Started with my-code

Welcome to the `my-code` project! This guide will help you set up and run the terminal coding agent on your local machine.

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher)
- **Bun** (v1.1.0 or higher) - Required for building and running development scripts.

## Installation

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone <your-repo-url>
   cd agi-my-code
   ```

2. **Install dependencies**:
   Using Bun (Recommended):
   ```bash
   bun install
   ```
   Or using npm:
   ```bash
   npm install
   ```

## Running the Application

### Development Mode
To run the CLI directly from the source code without building:
```bash
bun run dev
```

### Production Build
To build the CLI for production and run the compiled version:
```bash
bun run build
bun run start
```

## Global Usage

If you want to use the `my-code` command globally across your system (from any directory), you can link the package locally.

1. Build the project first:
   ```bash
   npm run build
   ```
2. Link the package globally using npm:
   ```bash
   npm link
   ```
3. Now you can run the agent from anywhere in your terminal:
   ```bash
   my-code
   ```

## Configuration & Customization

The agent looks for a project-specific `.my-code/` folder to load customizations for the codebase you are working in:
- **`mcp.json`**: Settings for Model Context Protocol servers.
- **`plugins/`**: Custom local tools and scripts.
- **`rules/`**: Custom prompt rules.

*(If you are setting this up for the first time, you don't need to configure these immediately).*

For a complete overview of features and available commands, check out the main `README.md`.


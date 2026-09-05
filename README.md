<div align="center">
  <h1>My-Code CLI</h1>
  <p><strong>The Open, Local, and Extensible Terminal Coding Agent</strong></p>
  <p><em>Like Claude Code or Cursor, but runs entirely in your terminal.</em></p>
</div>

---

## Overview

**My-Code** is a powerful AI coding assistant that lives in your terminal. It autonomously writes code, executes commands, reads files, and navigates your codebase to help you build software faster. With native Model Context Protocol (MCP) support and customizable tools, it gives you full control over your development workflow.

## Supported AI Providers & Models

My-Code natively supports multiple AI providers. You are not locked into a single ecosystem! You can switch providers and models on the fly using the `--provider` and `--model` flags or the `/model` slash command.

- **Ollama (Local)**: Run models entirely on your own machine.
  - *Recommended*: `qwen2.5-coder`, `llama3.1`, `mistral-nemo`
- **OpenAI**: Connect to OpenAI's cloud models via API key.
  - *Recommended*: `gpt-4o`, `gpt-4-turbo`
- **Anthropic**: Connect to Claude via API key.
  - *Recommended*: `claude-3-5-sonnet`
- **Google Gemini**: Connect to Google's models via API key.
  - *Recommended*: `gemini-1.5-pro`

## Key Features

- **Multi-Provider AI**: Use local models via Ollama or connect to cloud providers.
- **Built-in Agentic Tools**: Reads, writes, and edits files, runs Bash commands, regex grep, global search, and web-fetches out of the box.
- **Model Context Protocol (MCP)**: Seamlessly connect to any MCP server to bring external tools directly into the agent's toolbelt.
- **Safe & Secure**: Built-in permission prompts (`y/a/n`) for destructive actions before executing commands or modifying files.
- **Deeply Customizable**: Drop a `.my-code/` folder into your project to add custom instructions, plugins, rules, and local scripts.
- **Project Context**: Drop a `my-code.md` in your project root, and the agent automatically understands your project's unique conventions.

## Getting Started

### Prerequisites
- Node.js (v18+)
- Bun (v1.1.0+)
- (Optional) Ollama for running local models

### Installation

Clone and link the package globally to access the `my-code` command from anywhere:

```bash
git clone https://github.com/your-username/my-code.git
cd my-code
bun install
bun run build
npm link
```

## Usage

Start the interactive terminal REPL by simply running:

```bash
my-code
```

### CLI Options

| Command / Flag | Description |
|----------------|-------------|
| `my-code` | Launch the interactive agent REPL |
| `my-code -p "explain src/"` | One-shot prompt mode for scripting |
| `my-code --provider openai` | Use OpenAI (or `gemini`, `anthropic`, `ollama`) |
| `my-code --model gpt-4o` | Specify the model to use |
| `my-code --yolo` | Skip permission prompts (Danger Mode) |

### Slash Commands (Inside REPL)

Inside the interactive session, you can use powerful slash commands:
- `/help` — List all available commands
- `/tools` — View available agent tools
- `/model` / `/models` — Switch AI models on the fly
- `/plan` — Enter planning mode to architect complex changes
- `/mcp` — Manage MCP servers
- `/clear` — Clear the terminal
- `/exit` — Leave the session

## Extending My-Code

My-Code is built for extensibility. It looks for a project-specific `.my-code/` folder in your current directory.

### Project Memory (`my-code.md`)
Drop a `my-code.md` in your project root with your coding conventions, architecture notes, or rules. My-Code reads this automatically and prepends it to the system prompt.

### Model Context Protocol (MCP)
Add an `mcp.json` file in `~/.my-code/mcp.json` (global) or `.my-code/mcp.json` (project-level):

```json
{
  "servers": {
    "filesystem": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/dir"]
    }
  }
}
```
Tools from connected servers will instantly appear in the agent's toolbelt as `mcp__<server>__<tool>`.

## Architecture

```text
src/
├── cli.ts                   # Entry point, REPL, slash commands
├── agent/                   # Core agent loop and prompt generation
├── tools/                   # Built-in tools (read, write, bash, grep)
├── ui/                      # Beautiful terminal rendering
└── bridge/                  # Headless backend bridge
```

## Roadmap

- Context compaction and intelligent summarization for long sessions
- Complex subagents and concurrent workflows
- Session persistence and history resuming
- Richer UI rendering for code diffs

---

<div align="center">
  <p>Built with ❤️ for developers who love the terminal.</p>
</div>


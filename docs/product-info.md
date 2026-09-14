# My-Code CLI — Complete Product Information

> **The Open, Local, and Extensible Terminal Coding Agent**
> *Like Claude Code or Cursor, but runs entirely in your terminal.*

---

## 1. Product Identity

| Field | Value |
|---|---|
| **Product Name** | My-Code CLI |
| **Version** | `0.3.0-dev` |
| **Tagline** | The Open, Local, and Extensible Terminal Coding Agent |
| **Category** | AI-Powered Terminal Coding Assistant / Agentic Developer Tool |
| **License** | Open Source |
| **Runtime** | Bun (v1.1.0+) / Node.js (v18+) |
| **Language** | TypeScript |
| **UI Framework** | Custom React-based terminal renderer (Ink fork) |
| **Package Manager** | Bun / npm |
| **CLI Command** | `my-code` |
| **Repo** | `agi-my-code` |

---

## 2. One-Liner Descriptions

- **Short**: An AI coding agent that lives in your terminal — writes code, runs commands, and navigates your codebase autonomously.
- **Medium**: My-Code is a powerful, open-source AI coding assistant that runs entirely in your terminal. It autonomously writes code, executes commands, reads files, and navigates your codebase with native multi-provider AI support and full extensibility via plugins, skills, and Model Context Protocol (MCP).
- **Long**: My-Code CLI is an enterprise-grade autonomous AI software engineering assistant built directly into the terminal. Rather than a simple LLM wrapper, it's a complete agent orchestration framework with 40+ built-in tools, multi-provider AI support (local via Ollama or cloud via OpenAI/Anthropic/Google/Azure), 4-tier context compression, multi-agent swarm coordination, IDE bridge connectivity, and deep extensibility through plugins, skills, hooks, and the Model Context Protocol. It gives developers full control over their AI-assisted workflow without ever leaving the terminal.

---

## 3. Core Value Propositions

### 🏠 Truly Local & Private
Run AI models entirely on your own machine via Ollama. Your code never leaves your hardware. No cloud dependency required.

### 🔓 Open & Multi-Provider
Not locked into any single AI ecosystem. Switch between Ollama (local), OpenAI, Anthropic Claude, Google Gemini, and Azure AI Foundry on the fly.

### 🛠️ 40+ Built-in Agentic Tools
Reads, writes, and edits files. Runs shell commands. Searches codebases with ripgrep. Fetches web content. Edits Jupyter notebooks. Queries Language Servers. All out of the box.

### 🔌 Deeply Extensible
Drop a `.my-code/` folder into any project to add custom instructions, plugins, skills, hooks, and MCP server connections. Shape the agent to fit your workflow.

### 🔒 Safe & Secure by Default
Built-in permission prompts for destructive actions, workspace trust validation, automated security classification, process sandboxing, and enterprise policy overrides.

### 🖥️ Terminal-Native, IDE-Connected
A beautiful terminal UI with Vim mode, syntax highlighting, structured diffs, and typeahead — plus bi-directional bridge to VSCode and JetBrains.

### 🤖 Multi-Agent Swarms
Spawn background research agents, parallel worker threads, and coordinate teams of AI agents with shared memory and mailboxes.

---

## 4. Supported AI Providers & Models

| Provider | Type | Recommended Models | Configuration |
|---|---|---|---|
| **Ollama** | 🟢 Local (on-device) | `qwen2.5-coder`, `llama3.1`, `mistral-nemo` | Automatic detection |
| **OpenAI** | ☁️ Cloud | `gpt-4o`, `gpt-4-turbo` | API key via env var |
| **Anthropic** | ☁️ Cloud | `claude-3-5-sonnet` | API key via env var |
| **Google Gemini** | ☁️ Cloud | `gemini-1.5-pro` | API key via env var |
| **Azure AI Foundry** | ☁️ Cloud | Azure-hosted models | Account configuration |

> Switch providers and models on the fly using `--provider` and `--model` flags or the `/model` slash command.

---

## 5. Key Features — Complete Breakdown

### 5.1 Autonomous Code Generation & Editing
- **File Reading**: Read any file with line range selection and offset support.
- **Precise Editing**: Search-and-replace text modifications with diff previews.
- **File Creation**: Create new files and directories from scratch.
- **Jupyter Notebook Editing**: Native `.ipynb` cell content editing.
- **Structured Diffs**: Visual unified diffs for every file modification.

### 5.2 Intelligent Shell Execution
- **Bash Execution**: Run commands with timeout, working directory, and background tracking.
- **PowerShell Support**: Native Windows PowerShell for cross-platform compatibility.
- **Background Processes**: Launch long-running builds, tests, and dev servers in the background.
- **Process Sandboxing**: Optional sandboxed execution for untrusted environments.

### 5.3 Codebase Intelligence
- **Glob Search**: Pattern-based file discovery across directory trees.
- **Regex Grep**: Native ripgrep-powered content search across codebases.
- **LSP Integration**: Full Language Server Protocol support — hover info, go-to-definition, find references, workspace symbols, and real-time diagnostics.
- **Passive Lint Feedback**: Automatically injects compiler/linter diagnostics into the AI conversation loop.

### 5.4 Web & Research
- **Web Fetch**: Retrieves web pages and extracts clean markdown/text content.
- **Web Search**: Performs search queries via search providers.
- **Web Browser Automation**: Full browser automation tool (feature-gated).

### 5.5 Context Management & Compression
The agent maintains long-running conversations without blowing context limits via a sophisticated **4-tier compression pyramid**:

| Tier | Name | Strategy |
|---|---|---|
| 1 | **Snip** | Collapses groups of past read/search outputs into succinct summaries |
| 2 | **Microcompact** | Compresses individual verbose tool outputs in-place |
| 3 | **Context Collapse** | Collapses background notifications, teammate messages, and shutdown notices |
| 4 | **Autocompact** | LLM-driven full conversation summarization when context limits are reached |

### 5.6 Planning Mode
- Enter a read-only planning mode to architect complex changes before committing any code.
- `/plan` slash command or `EnterPlanModeTool` / `ExitPlanModeTool`.
- All write and destructive tools are blocked during planning.

### 5.7 Git Worktree Isolation
- Automatically spin up isolated Git worktrees to prevent dirtying working branches.
- `--worktree` flag or `/worktree` command.
- Clean rollback if changes are rejected.

### 5.8 Session Management
- **Session Persistence**: Save and resume sessions across terminal restarts.
- **Session Export**: Export conversation transcripts.
- **Session Sharing**: QR code-based session sharing.
- **Time-Travel Rewind**: `/rewind` command to roll back conversations and file states to any previous point.
- **Session Teleportation**: Migrate active sessions between machines (Local ↔ Cloud ↔ Remote IDE ↔ SSH).

### 5.9 Multi-Agent Swarms
Coordinate teams of AI agents for complex tasks:

| Task Type | Description |
|---|---|
| **DreamTask** | Autonomous background exploration and codebase research |
| **InProcessTeammateTask** | Parallel in-process worker threads |
| **LocalAgentTask** | Subprocess-spawned worker agents |
| **LocalMainSessionTask** | Master session execution tracker |
| **LocalShellTask** | Long-running shell commands |
| **RemoteAgentTask** | Cloud-hosted offloaded tasks |

- Inter-agent mailboxes for peer-to-peer messaging.
- Team memory synchronization across agents.
- Background task management via `/tasks` command.

### 5.10 Persistent Memory System
- **Session Memory**: Continuously summarizes conversational state into a running `session-memory.md` scratchpad.
- **Long-Term Memory**: Extracts and stores knowledge across sessions into user and project memory banks.
- **AutoDream**: Background idle memory consolidation engine that summarizes and prunes memory files.
- **Relevant Memory Retrieval**: Automatically queries relevant memories based on conversation context.
- **Project Memory File**: Drop a `my-code.md` in your project root and the agent automatically understands your project's conventions.

### 5.11 Scheduled & Recurring Tasks
- **Cron Jobs**: Create, list, and manage recurring background tasks with cron expressions.
- Autonomous triggers for monitoring, building, testing, and reporting.

### 5.12 IDE Bridge Connectivity
Bi-directional real-time communication with IDEs:

| IDE | Transport | Capabilities |
|---|---|---|
| **VS Code** | WebSocket / IPC | File context sync, diagnostic sharing, prompt submission, model switching |
| **JetBrains** | WebSocket / IPC | Same bi-directional capabilities |
| **Web Portal** | WebSocket | Remote cloud session control |

- Active sessions publish discovery descriptors for IDE auto-detection.
- Permission prompts can be forwarded to IDE for remote authorization.

### 5.13 Voice Input
- Speech-to-text input processing via `services/voice.ts`.
- Integrated voice hooks in the terminal UI.

---

## 6. Complete Built-in Tools Reference

### File Operations
| Tool | Description |
|---|---|
| `FileReadTool` | Read file content with offset and line range support |
| `FileWriteTool` | Create or overwrite files |
| `FileEditTool` | Precise search-and-replace text modifications |
| `NotebookEditTool` | Edit Jupyter Notebook `.ipynb` cell contents |
| `GlobTool` | File pattern searching across directory trees |
| `GrepTool` | Regex/literal content search via native ripgrep |

### Shell & Execution
| Tool | Description |
|---|---|
| `BashTool` | Execute bash commands with timeout, cwd, background tracking |
| `PowerShellTool` | Cross-platform PowerShell execution (Windows) |
| `SleepTool` | Pause execution for a specified duration |

### Web & Search
| Tool | Description |
|---|---|
| `WebFetchTool` | Fetch web pages and extract clean markdown/text |
| `WebSearchTool` | Perform web search queries |
| `WebBrowserTool` | Full browser automation (feature-gated) |

### Planning & Safety
| Tool | Description |
|---|---|
| `EnterPlanModeTool` | Switch to read-only planning mode |
| `ExitPlanModeTool` | Exit planning mode |
| `EnterWorktreeTool` | Isolate changes in a git worktree |
| `ExitWorktreeTool` | Exit worktree isolation |
| `TodoWriteTool` | In-session multi-step goal tracking |
| `AskUserQuestionTool` | Prompt user for clarification |

### Agent & Swarms
| Tool | Description |
|---|---|
| `AgentTool` | Spawn autonomous sub-agents with scoped prompts and tools |
| `SendMessageTool` | Peer-to-peer inter-agent messaging |
| `BriefTool` | Brief summaries for agent coordination |
| `TeamCreateTool` | Create agent swarm teams |
| `TeamDeleteTool` | Delete agent swarm teams |
| `TaskCreateTool` | Create background tasks |
| `TaskGetTool` | Get task status and output |
| `TaskListTool` | List all active tasks |
| `TaskUpdateTool` | Update running tasks |
| `TaskStopTool` | Stop running tasks |
| `TaskOutputTool` | Retrieve task output |

### Code Intelligence
| Tool | Description |
|---|---|
| `LSPTool` | Language Server Protocol queries (hover, definition, references, symbols, diagnostics) |

### Configuration & Discovery
| Tool | Description |
|---|---|
| `ConfigTool` | Read/update runtime CLI configuration |
| `ToolSearchTool` | Deferred on-demand tool discovery |
| `SkillTool` | Dynamically compiled markdown skill invocation |
| `CronCreateTool` | Create recurring scheduled tasks |
| `CronDeleteTool` | Delete cron tasks |
| `CronListTool` | List cron tasks |

### MCP Resource Tools
| Tool | Description |
|---|---|
| `ListMcpResourcesTool` | Browse external MCP server resources |
| `ReadMcpResourceTool` | Read specific MCP server resources |

---

## 7. Extensibility System

### 7.1 Model Context Protocol (MCP)
Connect any MCP-compatible server to bring external tools directly into the agent:

```json
// .my-code/mcp.json or ~/.my-code/mcp.json
{
  "servers": {
    "filesystem": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/dir"]
    },
    "remote-api": {
      "type": "http",
      "url": "https://api.example.com/mcp",
      "auth": "bearer-token"
    }
  }
}
```

- **Transports**: `stdio` (subprocess) and `http` (remote HTTP/SSE with bearer auth).
- **Auto-Discovery**: Tools and prompts are automatically discovered and registered.
- **Namespaced**: Tools appear as `mcp__<server>__<tool>`, prompts as slash commands.
- **Safe by Default**: All MCP tools require user permission by default.

### 7.2 Plugin System
Drop `.js` or `.mjs` modules into `~/.my-code/plugins/` (global) or `.my-code/plugins/` (project):

**Plugin API Surface:**
| Method | Description |
|---|---|
| `registerTool(tool)` | Add custom tools into the tool registry |
| `registerCommand(def)` | Add custom slash commands |
| `registerHook(phase, fn)` | Attach to lifecycle phases (`PreToolUse`, `PostToolUse`, `SessionStart`, `SessionEnd`) |
| `addPromptSection(section)` | Inject custom sections into the agent's system prompt |
| `cwd` | Access current project directory |
| `log()` | Logging utility |

### 7.3 Skills System
Markdown-based reusable prompt templates with YAML frontmatter:

```yaml
---
name: review
description: Review code for bugs, performance, and best practices
args:
  - name: file
    description: File to review
allowed-tools:
  - FileReadTool
  - GrepTool
---

Review the following code for bugs, security vulnerabilities,
performance issues, and adherence to best practices: $ARGUMENTS
```

**Loading Hierarchy:**
1. Bundled skills (11 built-in)
2. Global user skills (`~/.my-code/skills/`)
3. Project-specific skills (`.my-code/skills/`)

**11 Bundled Skills:**
| Skill | Purpose |
|---|---|
| `/review` | Code review for bugs, performance, and best practices |
| `/debug` | Debug issues and find root causes |
| `/explain` | Explain code, architecture, or concepts |
| `/loop` | Iterative refinement loops |
| `/remember` | Save context to persistent memory |
| `/simplify` | Simplify and refactor complex code |
| `/skillify` | Create new skills from conversation patterns |
| `/verify` | Verify changes and run validation |
| `/stuck` | Help when the agent is stuck on a problem |
| `/batch` | Batch operations across multiple files |
| `/keybindings` | Manage terminal keybindings |

**Dual Registration**: Skills work as both slash commands (user-invokable) and AI tools (model-invokable).

### 7.4 Lifecycle Hooks
Event-driven hooks executing at key lifecycle points:

| Phase | Capabilities |
|---|---|
| `PreToolUse` | Intercept, inspect, modify, or block tool execution |
| `PostToolUse` | Modify/filter tool output before transcript commit |
| `SessionStart` | Initialization handlers on boot |
| `SessionEnd` | Teardown and cleanup handlers |

Configurable via plugins, skill frontmatter, or JSON configs with conditional guards.

### 7.5 Project Context (`my-code.md`)
Drop a `my-code.md` in your project root with coding conventions, architecture notes, or rules. The agent reads it automatically and prepends it to the system prompt.

### 7.6 Hierarchical Configuration (7 Tiers)
| Priority | Source |
|---|---|
| 1 (Highest) | CLI flags (`--model`, `--permission-mode`) |
| 2 | Environment variables (`MY_CODE_*`) |
| 3 | Flag settings (`--settings file`) |
| 4 | Enterprise policy settings |
| 5 | Machine local settings (`.my-code/settings.local.json`) |
| 6 | Project settings (`.my-code/config.json`) |
| 7 (Lowest) | User global settings (`~/.my-code/config.json`) |

---

## 8. Security Model

### 8.1 Four Permission Modes

| Mode | Behavior | Use Case |
|---|---|---|
| `default` | Interactive `y/a/n` prompts before destructive actions | Standard development |
| `auto` | ML security classifier auto-approves safe commands, prompts on risky ones | Power users |
| `plan` | All write/destructive tools blocked; read-only mode | Architecture planning |
| `bypassPermissions` | Skips all prompts | Isolated containers/sandboxes only |

### 8.2 Security Features
- **Workspace Trust Validation**: First-run trust dialog before executing any modifications in new directories.
- **Automated Security Classifier**: ML-based classification of commands as safe vs. destructive.
- **Process Sandboxing**: Shell commands support process-level sandboxing.
- **Input Validation**: All tool inputs validated via Zod schemas before execution.
- **Enterprise mTLS**: Corporate network compliance with mutual TLS and custom CA certificate injection.
- **Permission Scoping**: Rules scoped to `session`, `project`, or `global` level.
- **Remote Permission Bridge**: When running headless/remote, permission prompts forwarded over WebSocket to IDE or browser for user authorization.
- **JWT Authentication**: Bridge connections authenticated via JWT tokens and device trust validation.
- **Budget & Turn Limits**: Circuit breakers via `--max-budget-usd` and `--max-turns`.

---

## 9. Terminal UI & User Experience

### 9.1 Rich Terminal Interface
Built on a **custom 48-file fork of Ink** (React for CLI), delivering an IDE-grade experience in the terminal:

- **Streaming Markdown Rendering**: Real-time token streaming with syntax highlighting.
- **Structured Diff Viewer**: Unified line-by-line diffs for every file edit.
- **Virtualized Message List**: Smooth scrolling for long conversation histories.
- **Multi-line Rich Input**: Full editor with line wrapping, cursor navigation, and command history.
- **Typeahead Autocompletion**: Live completion for slash commands and `@file` mentions.
- **Interactive Dialogs**: Permission prompts, model picker, account switcher, status screens, cost/usage monitors.
- **Thinking Indicator**: Animated dynamic verbs showing the agent's current activity.
- **Expandable Reasoning Blocks**: View the AI's chain-of-thought reasoning.

### 9.2 Vim Mode
Full Vim emulation in the terminal input:
- **Normal, Insert, and Visual** modes
- **Motions**: `w`, `b`, `$`, and more
- **Operators**: `d` (delete), `c` (change), `y` (yank)
- **Text Objects**: `iw` (inner word), `a"` (around quotes)

### 9.3 Customizable Keybindings
- Flexible key notation parser
- Collision resolver for conflicting bindings
- Configurable via settings or the `/keybindings` skill

### 9.4 Companion Buddy Sprite
Animated terminal companion displaying emotional states, notifications, and progress feedback.

---

## 10. Slash Commands — Complete Reference

### Session & Navigation
| Command | Description |
|---|---|
| `/help` | List all available commands |
| `/clear` | Clear the terminal |
| `/exit` / `/quit` | Leave the session |
| `/compact` | Compress conversation context |
| `/resume` | Resume a previous session |
| `/sessions` | List saved sessions |
| `/history` | View command history |
| `/export` | Export conversation transcript |
| `/rewind` | Time-travel rollback to a previous state |
| `/rename` | Rename current session |
| `/share` / `/session` | Share session (QR code) |

### Model & Configuration
| Command | Description |
|---|---|
| `/model` / `/models` | Switch AI model (interactive picker) |
| `/accounts` | Manage provider accounts and credentials |
| `/config` | View/edit runtime configuration |
| `/theme` | Change terminal theme |
| `/effort` | Set effort level (low/med/high/max) |
| `/fast` | Quick low-effort mode toggle |
| `/output-style` | Configure output formatting |
| `/vim` | Toggle Vim mode |

### Development & Git
| Command | Description |
|---|---|
| `/commit` | Generate AI commit message and commit |
| `/review` | AI-powered code review |
| `/diff` | Show current changes |
| `/branch` | Branch management |
| `/release-notes` | Generate release notes |
| `/doctor` | Run health check diagnostics |
| `/undo` | Undo last file changes |
| `/init` | Initialize project configuration |

### Permissions & Safety
| Command | Description |
|---|---|
| `/allow` | Allow a tool or action |
| `/deny` | Deny a tool or action |
| `/bypass` | Toggle bypass mode |
| `/permissions` | Inspect/modify permission allowlists |
| `/plan` | Enter/exit planning mode |
| `/worktree` | Enter/exit git worktree isolation |

### Tools & Extensibility
| Command | Description |
|---|---|
| `/tools` | View available agent tools |
| `/plugins` | Manage plugins |
| `/skills` | Browse and invoke skills |
| `/mcp` | Manage MCP server connections |
| `/memory` | View/manage persistent memories |
| `/todos` | View in-session task list |
| `/tasks` | Manage background tasks and agents |

### Diagnostics
| Command | Description |
|---|---|
| `/status` | System status overview |
| `/usage` / `/cost` | Token usage and cost tracking |
| `/stats` | Performance statistics |
| `/heapdump` | Memory diagnostics |

### Advanced
| Command | Description |
|---|---|
| `/teleport` | Migrate session to another environment |
| `/agents` | View active sub-agents |
| `/ide` | IDE bridge controls |
| `/sandbox-toggle` | Toggle sandbox mode |

---

## 11. Architecture Overview

### 11.1 Seven-Layer Architecture

```
┌─────────────────────────────────────────────────┐
│  1. Entry Layer                                  │
│     CLI parsing, client routing, bootstrapping   │
├─────────────────────────────────────────────────┤
│  2. Bootstrap Layer                              │
│     Global runtime state, security gates         │
├─────────────────────────────────────────────────┤
│  3. Core Engine Layer                            │
│     Async generator agentic loop, token budgets  │
├─────────────────────────────────────────────────┤
│  4. Tool Layer                                   │
│     40+ tools with Zod validation, concurrency   │
├─────────────────────────────────────────────────┤
│  5. Services Layer                               │
│     API networking, compression, MCP, telemetry  │
├─────────────────────────────────────────────────┤
│  6. UI Layer                                     │
│     Custom Ink runtime, React terminal renderer  │
├─────────────────────────────────────────────────┤
│  7. State Layer                                  │
│     Observable store, 9 React context providers  │
└─────────────────────────────────────────────────┘
```

### 11.2 Source Directory Structure

```
src/
├── cli.ts                    # Entry point, REPL, CLI parsing
├── version.ts                # Version constant
├── agent/                    # Core agent loop, providers, query engine
│   └── providers/            # Ollama, Azure AI Foundry providers
├── tools/                    # 40+ built-in tools
│   ├── agent/                # Sub-agent spawning
│   ├── cron/                 # Scheduled task tools
│   ├── lsp/                  # Language Server Protocol tools
│   ├── mcp/                  # MCP resource tools
│   └── skill/                # Skill-to-tool compiler
├── skills/                   # Skill system & 11 bundled skills
├── plugins/                  # Plugin loader & API
├── mcp/                      # MCP client, transport, discovery
├── services/                 # ~40 backend services
│   ├── compact/              # 4-tier context compression
│   ├── lsp/                  # Language server management
│   ├── memory/               # Long-term memory extraction
│   ├── sessionMemory/        # Session memory summarization
│   ├── agentSummary/         # Agent progress summaries
│   └── ...
├── bridge/                   # IDE bridge (WebSocket/IPC)
├── hooks/                    # Lifecycle hook system
├── commands/                 # 35+ slash commands
├── config/                   # Configuration, permissions, trust
├── tasks/                    # Background task & swarm manager
├── memdir/                   # Persistent memory directory
├── session/                  # Session persistence & recovery
├── state/                    # Observable app state store
├── ui/                       # React terminal UI components
│   ├── RichInput.tsx          # Multi-line terminal editor
│   ├── Markdown.tsx           # Streaming markdown renderer
│   ├── StructuredDiff.tsx     # Visual diff viewer
│   ├── PermissionPrompt.tsx   # Security permission dialogs
│   ├── ModelPicker.tsx        # Model switching UI
│   └── ...
├── tui/                      # Terminal UI scaffolding
├── types/                    # TypeScript type definitions
└── utils/                    # Shared utilities
```

### 11.3 Key Design Patterns
- **Async Generator Pattern**: The query loop yields fine-grained state transitions, enabling REPL pausing, user cancellation, and interactive interventions.
- **DAG Leaf Pattern**: Bootstrap state module has zero internal imports — eliminates circular dependencies.
- **Registry Pattern**: Centralized registries for tools, slash commands, and cleanup tasks.
- **Concurrent/Sequential Tool Execution**: Read tools run in parallel; write tools run sequentially.
- **Disk-Spilling**: Large tool outputs are offloaded to disk and replaced with summaries to prevent context blowup.
- **Prompt Cache Boundary**: System prompt split into static (cached across turns) and dynamic (regenerated per turn) sections for maximum cache hits and reduced inference cost.

---

## 12. Performance & Optimization

| Optimization | Description |
|---|---|
| **TCP Preconnection** | API connections start during CLI initialization, overlapping network handshakes with local setup |
| **Prompt Cache Boundaries** | Static/dynamic prompt split maximizes provider KV cache hits, cutting latency and cost |
| **4-Tier Compression** | Intelligent context compaction keeps long sessions within token limits |
| **Concurrent Tool Execution** | Read-only tools execute in parallel via `Promise.allSettled` |
| **Disk Spilling** | Oversized tool outputs offloaded to disk, replaced with file pointers |
| **Virtualized Rendering** | Long message histories use virtualized scrolling for smooth UI |
| **Token Budget Tracking** | Multi-dimensional tracking (input, output, cache hits, cache creation, USD) |

---

## 13. CLI Options & Usage

### Quick Start
```bash
# Install
git clone https://github.com/your-username/my-code.git
cd my-code
bun install
bun run build
npm link

# Launch
my-code
```

### CLI Flags

| Flag | Description |
|---|---|
| `my-code` | Launch interactive agent REPL |
| `-p "prompt"` / `--print` | One-shot prompt mode (non-interactive, for scripting) |
| `--provider <name>` | Select AI provider (`ollama`, `openai`, `anthropic`, `gemini`) |
| `--model <name>` | Specify model to use |
| `--yolo` / `--dangerously-skip-permissions` | Skip all permission prompts (Danger Mode) |
| `--mcp-config <path>` | Load MCP server configuration from file |
| `--system-prompt <text>` | Override system prompt |
| `--worktree` | Run in isolated Git worktree |
| `--bare` | Skip hooks, plugins, and project docs |
| `--settings <file>` | Load settings from file |
| `--max-budget-usd <n>` | Set maximum cost budget |
| `--max-turns <n>` | Set maximum conversation turns |
| `--output-format <fmt>` | Output format: `text`, `json`, `stream-json` |
| `--input-format <fmt>` | Input format: `text`, `stream-json` |

---

## 14. Headless & SDK Integration

My-Code can be consumed programmatically:

- **Headless Mode**: `my-code -p "prompt"` with `--output-format json` for CI/CD pipelines.
- **SDK Clients**: Supports `sdk-typescript`, `sdk-python`, `sdk-cli` client types.
- **Structured I/O**: JSON and streaming JSON input/output formats.
- **Bridge API**: Native IDE API surface exposed for extension development.
- **IPC Transport**: Unix domain sockets (Linux/macOS) or Windows Named Pipes.
- **Session Discovery**: Active sessions publish JSON descriptors for auto-detection.

---

## 15. Comparison Positioning

| Feature | My-Code CLI | Claude Code | Cursor | GitHub Copilot |
|---|---|---|---|---|
| **Runs in Terminal** | ✅ | ✅ | ❌ (IDE) | ❌ (IDE) |
| **Local Model Support** | ✅ Ollama | ❌ | ❌ | ❌ |
| **Multi-Provider** | ✅ 5 providers | ❌ Anthropic only | ✅ | ❌ OpenAI only |
| **Open Source** | ✅ | ❌ | ❌ | ❌ |
| **MCP Support** | ✅ Native | ✅ | ❌ | ❌ |
| **Plugin System** | ✅ | ❌ | ❌ | ❌ |
| **Multi-Agent Swarms** | ✅ | ✅ | ❌ | ❌ |
| **IDE Bridge** | ✅ VSCode + JetBrains | ✅ VSCode | N/A | N/A |
| **Vim Mode** | ✅ | ❌ | ❌ | ❌ |
| **Session Teleportation** | ✅ | ❌ | ❌ | ❌ |

---

## 16. Technical Specifications

| Spec | Value |
|---|---|
| **Language** | TypeScript |
| **Runtime** | Bun (v1.1.0+) / Node.js (v18+) |
| **UI Framework** | Custom React-based terminal renderer (48-file Ink fork) |
| **Build Tool** | Bun bundler |
| **Source Size** | ~550+ TypeScript files, ~10MB+ source code |
| **Architecture** | 7-layer, async generator agentic loop |
| **Tools** | 40+ built-in + unlimited via MCP/plugins |
| **Slash Commands** | 35+ built-in + extensible |
| **Bundled Skills** | 11 |
| **Services** | ~40 backend services |
| **React Hooks** | 83 custom hooks |
| **Task Types** | 6 background task types |
| **Compression Tiers** | 4-tier context compaction |
| **Permission Modes** | 4 (default, auto, plan, bypass) |
| **Config Tiers** | 7-level hierarchical configuration |
| **Platforms** | macOS, Linux, Windows (PowerShell + Git Bash) |

---

## 17. Roadmap

- ✅ Multi-provider AI support (Ollama, OpenAI, Anthropic, Gemini, Azure)
- ✅ 40+ built-in agentic tools
- ✅ Model Context Protocol (MCP) integration
- ✅ Plugin & Skills extensibility
- ✅ Multi-agent swarm coordination
- ✅ IDE bridge (VSCode, JetBrains)
- ✅ 4-tier context compression
- ✅ Persistent memory system
- ✅ Session teleportation
- 🔄 Context compaction and intelligent summarization refinement
- 🔄 Complex subagents and concurrent workflows expansion
- 🔄 Session persistence and history resuming improvements
- 🔄 Richer UI rendering for code diffs

---

## 18. Target Audience

| Segment | Why My-Code |
|---|---|
| **Terminal-First Developers** | Full coding agent without leaving the terminal |
| **Privacy-Conscious Engineers** | Run local models via Ollama — code stays on your machine |
| **Open Source Enthusiasts** | Fully open, hackable, and extensible |
| **Enterprise Teams** | mTLS support, enterprise policies, permission controls |
| **DevOps & CI/CD** | Headless mode, SDK integration, structured I/O |
| **Power Users** | Vim mode, custom keybindings, 35+ slash commands |
| **AI Researchers** | Multi-provider switching, multi-agent coordination |

---

## 19. Key Differentiators Summary

1. **🏠 Local-First**: Run AI models entirely on your hardware with Ollama — zero cloud dependency.
2. **🔓 Provider Agnostic**: 5 AI providers, switch models mid-conversation.
3. **🧩 Truly Extensible**: Plugins + Skills + Hooks + MCP — shape every aspect of the agent.
4. **🔒 Enterprise-Grade Security**: 4 permission modes, ML classifier, workspace trust, mTLS, sandboxing.
5. **🧠 Intelligent Memory**: Persistent memory across sessions with autonomous consolidation.
6. **🤖 Multi-Agent Swarms**: Coordinate parallel AI agents with shared memory and mailboxes.
7. **🚀 Session Teleportation**: Move live sessions between machines, environments, and IDEs.
8. **⌨️ Terminal-Native UX**: Vim mode, typeahead, virtualized rendering, animated companion.
9. **📊 Smart Context Management**: 4-tier compression keeps infinite conversations viable.
10. **🔌 IDE Bridge**: Use from your terminal AND your IDE simultaneously.

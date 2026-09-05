import { createCommandRegistry, type CommandRegistry } from "../commands/index.js";

export interface SlashCommand {
  name: string;
  desc: string;
  args?: string;
}

// ── Static fallback registry (builtins only, no cwd, no skills) ─────────────
// Used by any code that imports filterCommands() without threading a live
// registry through. Kept for backward compatibility.
const staticRegistry = createCommandRegistry();

export function listCommands(): SlashCommand[] {
  return staticRegistry.list().map((def) => ({
    name: def.name,
    desc: def.description,
    args: def.argsHint,
  }));
}

export function filterCommands(query: string): SlashCommand[] {
  return filterCommandsFromRegistry(query, staticRegistry);
}

// ── Live registry variant ────────────────────────────────────────────────────
// Pass the CommandRegistry from App.tsx to get the full list including skills,
// MCP prompts, and any other dynamically-registered commands.
export function filterCommandsFromRegistry(
  query: string,
  registry: CommandRegistry
): SlashCommand[] {
  const visible = registry.list().map((def) => ({
    name: def.name,
    desc: def.description,
    args: def.argsHint,
  }));
  const q = query.toLowerCase().trim();
  if (!q) return visible;
  const starts = visible.filter((c) => c.name.toLowerCase().startsWith(q));
  if (starts.length) return starts;
  return visible.filter(
    (c) => c.name.toLowerCase().includes(q) || c.desc.toLowerCase().includes(q)
  );
}

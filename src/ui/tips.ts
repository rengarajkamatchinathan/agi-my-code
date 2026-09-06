export const TIPS: string[] = [
  "Tip: /compact to summarize the conversation and free context",
  "Tip: /status shows tokens, context, rules, bypass state",
  "Tip: /usage shows today / week / all-time across sessions",
  "Tip: /model without args opens the model picker",
  "Tip: /allow project Bash(npm test:*) to auto-approve test runs",
  "Tip: shift+tab cycles edit-approval mode (normal / accept-edits / yolo)",
  "Tip: ctrl+o expands the most recent truncated tool output",
  "Tip: drop a my-code.md in your project — it's loaded into the system prompt",
  "Tip: esc interrupts the current turn",
  "Tip: /permissions shows every allow/deny rule from every scope",
];

// Short "What's new" lines shown in the startup banner's right column. Keep
// these terse (they sit beside the mascot) and edit on each notable release.
export const WHATS_NEW: string[] = [
  "Plugins auto-load from .my-code/skills — no marketplace needed",
  "/usage shows today / week / all-time across sessions",
  "Worktree isolation for parallel edits via /worktree",
];

let lastTip = "";
export function pickTip(): string {
  if (TIPS.length === 0) return "";
  let t = lastTip;
  while (t === lastTip) {
    t = TIPS[Math.floor(Math.random() * TIPS.length)];
  }
  lastTip = t;
  return t;
}

// The TIPS strings carry a "Tip: " prefix for the (legacy) footer use; the
// banner renders its own "Tips for getting started" heading, so strip it.
export function stripTipPrefix(tip: string): string {
  return tip.replace(/^Tip:\s*/, "");
}

export function getGreeting(): string {
  const h = new Date().getHours();
  if (h < 5) return "Night shift. Let's build.";
  if (h < 12) return "Morning. Systems ready.";
  if (h < 17) return "Afternoon session initialized.";
  if (h < 21) return "Evening. Neural pathways active.";
  return "Late night mode. Focus engaged.";
}

export const TAGLINES = [
  "Autonomous cognition at your fingertips.",
  "Think less. Build more.",
  "Your code. My attention. Full context.",
  "Neural bridge established.",
  "Reasoning engine online.",
  "Latent space explorer ready.",
  "Attention heads locked on target.",
  "Context window: clear. Objective: yours.",
  "Beyond autocomplete.",
];

let lastTagline = "";
export function pickTagline(): string {
  if (TAGLINES.length === 0) return "";
  let t = lastTagline;
  while (t === lastTagline) {
    t = TAGLINES[Math.floor(Math.random() * TAGLINES.length)];
  }
  lastTagline = t;
  return t;
}

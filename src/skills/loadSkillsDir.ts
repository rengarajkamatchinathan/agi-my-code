import { loadMarkdownFilesForSubdir, type MarkdownFile } from '../utils/markdownConfigLoader.js';
import { substituteArguments } from '../utils/argumentSubstitution.js';
import type { PromptCommand } from '../types/command.js';
import type { FrontmatterShell } from '../utils/frontmatterParser.js';
import { registerSkillHooks } from './registerSkillHooks.js';
import os from 'os';

export async function loadSkillsFromDir(cwd: string): Promise<PromptCommand[]> {
  // Load global skills (~/.my-code/skills)
  const globalMdFiles = await loadMarkdownFilesForSubdir('skills', os.homedir(), 'userSettings');
  
  // Load local skills (cwd/.my-code/skills)
  const localMdFiles = await loadMarkdownFilesForSubdir('skills', cwd, 'projectSettings');

  // Local overrides global if same filename/name
  const allMdFiles = [...globalMdFiles, ...localMdFiles];

  return allMdFiles.map((file): PromptCommand => {
    const { frontmatter, content } = file;
    const name = (frontmatter.name as string) ?? file.filePath.split(/[\\/]/).pop()?.replace(/\.md$/, '') ?? 'unknown';

    if (frontmatter.hooks) {
      registerSkillHooks(frontmatter.hooks);
    }

    const argumentNames = Array.isArray(frontmatter.arguments)
      ? frontmatter.arguments.map(String)
      : typeof frontmatter.arguments === 'string'
      ? frontmatter.arguments.split(/\s+/)
      : [];

    const allowedTools = Array.isArray(frontmatter['allowed-tools'])
      ? frontmatter['allowed-tools'].map(String)
      : typeof frontmatter['allowed-tools'] === 'string'
      ? [frontmatter['allowed-tools']]
      : [];

    return {
      type: 'prompt',
      name,
      description: (frontmatter.description as string) ?? `Skill: ${name}`,
      prompt: content,
      argumentNames,
      allowedTools,
      disableModelInvocation: String(frontmatter.disableModelInvocation) === 'true',
      userInvocable: String(frontmatter['user-invocable']) !== 'false',
      source: file.source,
      loadedFrom: 'skills',
      executionContext: frontmatter.context === 'fork' ? 'fork' : undefined,
      agent: frontmatter.agent as string | undefined,
      effort: frontmatter.effort as string | undefined,
      shell: frontmatter.shell as FrontmatterShell | undefined,
    };
  });
}

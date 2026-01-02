# Claude Code

> Learn how to use Claude Code to create checks.

Claude is a code editor that supports AI-powered code completion and suggestions.

## Using Claude Code to create checks

<Tabs>
  <Tab title="Mac and Linux">
    ```bash setup-claude-rules theme={null}
    mkdir -p .claude &&
    curl -o .claude/checkly.rules.md https://www.checklyhq.com/docs/ai/checkly.rules.md -L
    echo "- examine checkly.rules.md for code generation rules" >> .claude/CLAUDE.md
    ```
  </Tab>

  <Tab title="Windows">
    ```bash setup-claude-rules-windows theme={null}
    New-Item -ItemType Directory -Path ".claude" -Force
    Invoke-WebRequest -Uri "https://www.checklyhq.com/docs/ai/checkly.rules.md" -OutFile ".claude\checkly.rules.md"
    echo "- examine checkly.rules.md for code generation rules" >> .claude/CLAUDE.md
    ```
  </Tab>
</Tabs>

Exit and restart your Claude Code session to re-read the `CLAUDE.md` file into Claude Code's context.

You can now ask Claude to install the `checkly` NPM package and generate code for API Checks, Browser checks, Multistep checks and all other constructs. Make sure to use the `checkly.rules.md` file as context for your questions.

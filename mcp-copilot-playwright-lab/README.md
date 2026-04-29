# MCP + GitHub Copilot + Playwright — Hands-on Lab

Drive a real browser with GitHub Copilot through the Playwright MCP server, and
have Copilot write working Playwright tests for you in TypeScript.

> **Time:** ~40 minutes
> **Format:** Codespaces (recommended) or local VS Code

---

## Quick start

### Option A — GitHub Codespaces (recommended)

1. Click **Code** → **Codespaces** → **Create codespace on main**
2. Wait for setup to finish (Chromium download takes ~60s on first start)
3. Follow the lab guide (`MCP_with_GitHub_Copilot_Lab.docx`)

### Option B — Local VS Code (Windows / macOS / Linux)

```bash
git clone https://github.com/a-forty-two/EY-MarApr26.git
cd EY-MarApr26
npm install
npx playwright install chromium
code .
```

Then follow the lab guide.

---

## What's pre-configured

| File                          | Purpose                                                     |
|-------------------------------|-------------------------------------------------------------|
| `.devcontainer/devcontainer.json` | Codespaces image with Node 20 + Chromium pre-installed |
| `.vscode/mcp.json`            | Playwright MCP server, ready to start with one click        |
| `package.json`                | `@playwright/test` and helper scripts                       |
| `playwright.config.ts`        | Pre-configured with `the-internet.herokuapp.com` base URL   |
| `tests/example.spec.ts`       | Placeholder test — replace in Part 3                        |

---

## Prerequisites

- VS Code 1.99 or newer
- A GitHub account with **GitHub Copilot Free** (or any paid tier) enabled
- For local: Node.js 18+ and the **GitHub Copilot** + **GitHub Copilot Chat** extensions
- For Codespaces: nothing else — extensions and Node ship with the dev container

---

## Once you're done

```bash
npm test                # run all Playwright tests
npm run report          # open the HTML report
```

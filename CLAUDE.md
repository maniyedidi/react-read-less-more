# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

`react-read-less-more` is a small published npm library: a single React class component that shows the first `displayCount` items (children, or a `data` array rendered as text/chips) with a "more/less" toggle and optional chip delete. Peer deps: React 18 or 19. Toolchain: Babel 7 (`@babel/preset-env`, `@babel/preset-react` classic runtime) and webpack 5 for the demo.

## Commands

- `npm start` — webpack-dev-server (port 3001) serving the demo app in `npm-build/src`
- `npm run build` — production webpack build of the demo into `npm-build/dist`
- `npm run transpile` — Babel `src` → `dist` (this is the published library output; `main` is `dist/index.js`; also runs on `prepublishOnly`)
- `npm run deploy` / `npm run publishToNpm` — build and push the demo to GitHub Pages via `gh-pages`
- No tests or linter are configured (`npm test` is a stub).

## Architecture

- `src/index.js` — the entire component (`ReactReadLessMore`) plus `src/styles.css` (imported directly, so consumers' bundlers must handle CSS; `--copy-files` copies it into `dist`). Two render paths: `children` (normalized with `React.Children.toArray`) and `data` (strings/numbers or objects read via `displayKey`). Chips are chosen with `displayType="CHIP"`. Data items render through `renderDataItem`.
- `npm-build/src/` — demo app (own `index.html`/`index.js`) used by webpack config; it is not part of the published package.
- `dist/` is the Babel output published to npm. The ignore file is named `.gitIgnore` (capital I), which git doesn't honor on case-sensitive systems, so `dist/` is tracked. `build/index.js` is a stale committed bundle that the current webpack config does not produce.
- Bump `version` in `package.json` when releasing.

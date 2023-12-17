# TS Config

Contains the “core” (or “base”) TS Config.

Its configuration originally stemmed from @connorjs’ reading of all `tsc` options in 2023 (ca. the TypeScript 5 release).
However, I excluded `exactOptionalPropertyTypes`, which I think is too strict for most environments.

Then I incorporated details from [moonrepo’s “TypeScript project references” article](https://moonrepo.dev/docs/guides/javascript/typescript-project-refs) to optimize for this repository’s monorepo configuration.
Moonrepo would call this file the `tsconfig.options.json`.

This does not contain any workspace-specific configuration.
For example, it does NOT have path mappings or project references.

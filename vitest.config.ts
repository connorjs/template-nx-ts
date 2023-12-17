import {
	configDefaults,
	coverageConfigDefaults,
	defineConfig,
} from "vitest/config";

// Note: We are using Vitest’s workspace functionality. See more discussion:
// <https://github.com/vitest-dev/vitest/discussions/4544>.

export default defineConfig({
	test: {
		/* eslint-disable sort-keys -- Prefer intentional grouping */
		clearMocks: true,

		exclude: [...configDefaults.exclude, `**/build/**`],
		watchExclude: [...configDefaults.watchExclude, `**/build/**`],

		// These only apply when Vitest run with `--coverage`
		coverage: {
			clean: true,

			include: [`**/src/**`],
			exclude: [
				...coverageConfigDefaults.exclude,
				`**/*.d{,.css}.ts`, // Ignore type definitions
				`**/*.stories.{ts,tsx}`, // Storybook stories
				`**/export.ts`, // Export files should just export
			],

			// These reporters are specific to code coverage
			reporter: [`text-summary`, [`html`, { subdir: `html` }]],
			reportsDirectory: `build/coverage`,

			provider: `v8`,
			thresholds: {
				branches: 85,
				functions: 100,
				lines: 85,
			},
		},
		/* eslint-enable sort-keys -- END */
	},
});

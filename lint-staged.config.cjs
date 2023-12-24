module.exports = {
	"*.{cjs,cts,graphql,html,js,json,jsonc,jsx,ts,tsx}": [
		`prettier --write`,
		`eslint --fix`,
	],
	"*.{css,md,pcss,scss,yaml,yml}": `prettier --write`,
};

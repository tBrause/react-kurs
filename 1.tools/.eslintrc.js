// https://eslint.org/docs/rules/
module.exports = {
	env: {
		browser: true,
		es2022: true,
		node: true,
	},
	root: true,
	parserOptions: {
		sourceType: 'module',
	},
	extends: ['eslint:recommended', 'prettier'],
	rules: {
		'no-var': 'error',
		'prefer-const': 'warn',
	},
};


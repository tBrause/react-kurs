echo Start ...

echo add prettier.config.js

echo "module.exports = {
	singleQuote: true,
	printWidth: 80,
	useTabs: true,
};
" > prettier.config.js

echo "add .gitignore"

echo "/node_modules
/node_modules/*" > .gitignore

echo "// https://eslint.org/docs/rules/
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
" > .eslintrc.js

echo ... Complete
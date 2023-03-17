echo START INSTALL ...

# Strucktur
####################

# css
mkdir -p css
echo ... Ordner: css OK
# js
mkdir -p js
echo ... Ordner: js OK
# temp
mkdir -p temp
echo ... Ordner: temp OK
# sass
mkdir -p sass
echo ... Ordner: sass OK

# Dateien
####################

# package.json
echo '{
  "scripts": {
    "dev": "npm-run-all --parallel sass-dev postcss-dev server",
    "build": "npm-run-all --sequential sass-build postcss-build",
    "sass-dev": "sass sass:temp --watch",
    "sass-build": "sass sass:temp",
    "postcss-dev": "postcss temp/*.css --dir css --use postcss-preset-env --watch --map",
    "postcss-build": "postcss temp/*.css --dir css --use postcss-preset-env cssnano --map",
    "server": "browser-sync start --server --watch"
  },
  "devDependencies": {
    "browser-sync": "^2.28.3",
    "cssnano": "^5.1.15",
    "eslint": "^8.36.0",
    "eslint-config-prettier": "^8.7.0",
    "npm-run-all": "^4.1.5",
    "postcss": "^8.4.21",
    "postcss-cli": "^10.1.0",
    "postcss-preset-env": "^8.0.1",
    "sass": "^1.59.3"
  },
  "browserslist": [
    "defaults"
  ]
}' > package.json
echo ... Datei: package.json OK

# Prettier => prettier.config.js
echo "module.exports = {
	singleQuote: true,
	printWidth: 80,
	useTabs: true,
};
" > prettier.config.js
echo "... Datei: prettier.config.js OK"

# GIT => .gitignore
echo "/node_modules
/node_modules/*" > .gitignore
echo "... Datei: .gitignore OK"
git rm --cached .gitignore
echo "... GIT: git rm --cached OK"


# ESLint => .eslintrc.js
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
echo "... Datei: eslintrc.js OK"

# HTML => index.html
echo "<!DOCTYPE html>
<html lang="de">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<title>Hallo Welt</title>
		<link rel="stylesheet" href="/css/app.css" />
		<script defer src="/js/app.js"></script>
	</head>
	<body><h1>Hallo Welt</h1></body>
</html>
" > index.html
echo ... Datei: index.html OK

# APP
echo "// in index.html eingebunden" > js/app.js
echo ... Datei: js/app.js OK

# CSS
echo "/* CSS */" > css/app.css
echo ... Datei: css/app.css OK

# SASS
echo "/* SASS */" > sass/app.scss
echo ... Datei: sass/app.scss OK

# README.md
# !!! off !!! echo "" > README.md
echo "**Install** **Build** **DEV**" > README.md
echo ... Datei: README.md OK

# Ready
echo "INSTALL COMPLETE ...
"

####################

echo "install.sh löschen !!!
"

####################

echo "
Next ...
"
echo "... $ npm install
"
npm install

echo "
Next ...
"
echo "... $ npm run build
"
npm run build

echo "
Next ...
"
echo "... $ npm run dev
"
npm run dev

####################


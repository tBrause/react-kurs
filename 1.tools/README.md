**npm Pakete**

- "browser-sync": *Startet Server :3000 und UI :3001*
- "cssnano": *verkleinert CSS-Dateien*
- "eslint": *Syntax*
- "eslint-config-prettier": *Syntax*
- "npm-run-all": *mehrere Scripts starten*
- "postcss": 
- "postcss-cli": 
- "postcss-preset-env": 
- "sass": *SASS*
    
**Install**

*Projektordner*/package.json

    {
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
    }

**VSC Console**
 
    npm install
 
    npm run build

    npm run dev

    

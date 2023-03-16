// Übersicht zu den JavaScript-Regeln: https://eslint.org/docs/rules/

module.exports = {
  env: {
    //Wo soll der Code später funktionieren?
    browser: true, // Läuft im Browser
    es2022: true, // Legt fest, das neue Features von JavaScript erlaubt sind
    node: true, // Läuft mit Node
  },
  /* ESLint sucht in übergeordneten Verzeichnissen nach weiteren ESLint-Konfigurationen,
      um sie mit dieser Konfiguration zu verbinden. Das kann zwar nützlich sein, wenn man es
      bewusst nutzt, führt aber eher zu Problemen, weil ESLint sich anders verhält, als man
      möchte, ohen dass die Ursache klar ist. Mit root: true legt man fest, dass diese
      Konfiguration die oberste ist, es wird also nicht in Elternverzeichnissen gesucht.
      https://eslint.org/docs/latest/user-guide/configuring/configuration-files */
  root: true,
  // Nutze die Standard-Regeln
  // Deaktiviere alle Formatierungsregeln, die mit Prettier in Konflikt stehen
  // Wichtig: Prettier immer als letztes auflisten
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
  ],
  parserOptions: {
    sourceType: 'module',
  },
  // Ignoriere Dateien im Dist-Ordner
  ignorePatterns: ['/js/dist/*.js'],
  // Hier können Regeln festgelegt werden und ggf. Vorgaben
  // aus Regelsätzen überschrieben werden, ihr habt also
  // das letzte Wort, ob eine Regel angewandt wird.
  rules: {
    'no-var': 'error', // "off", "warn" oder "error", alternativ 0,1 oder 2
    'prefer-const': 'error',
    'object-shorthand': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
  },
  plugins: ['react'],
};

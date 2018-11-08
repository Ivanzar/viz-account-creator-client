``$ npm install -g requirejs``

``$ r.js -o build.js``

``$ r.js -o build.css.js``

Скопируйте в эту папку файл ``index.html``

Найдите ``<link rel="stylesheet" href="style/main.css">``. Замените на ``<link rel="stylesheet" href="main-css.css">``.

Найдите ``<script data-main="scripts/app" src="scripts/libs/require.js"></script>``. Замените на ``<script src="main-built.js"></script>``
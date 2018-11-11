Клиент для создания аккаунтов в VIZ с помощью [RESTful сервера](https://github.com/Ivanzar/viz-account-creator-server)

Чтобы запустить клиент локально вам достаточно компьютера, чтобы запустить публично, нужно установить Apache или Nginx.

## Настройки

Перейдите в файл ``scripts/js/config.js``

```JavaScript
var config = {
    server: {
        url: 'http://localhost:8124',
    }
};
```


В поле ``url`` укажите URL RESTful сервера.

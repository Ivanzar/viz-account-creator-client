define(['jquery', 'request'],
        function ($, req)
        {
            request = req;
            window['$'] = $;
            return module.init();
        });

var request, $;

function Controller()
{
}

Controller.prototype.init = function ()
{
    var that = this;

    $('#btn-create').on('click', function (){
        var login = $('#fld-login').val();
        var pass = $('#fld-pass').val();

        if (!isValAccountName(login))
        {
            alert('Неверный формат логина.\n'
                    +'Логин должен сожержать не мение 3 и не более 25 символов'
                    +' и состаять из букв a-z, цифр 0-9, символа "-" и точки');

            return;
        }

        if (!isValPassword(pass))
        {
            alert('Неверный формат пароля.\n'
                    +'Пароль должен сожержать не мение 6 символов');

            return;
        }

        var keys = viz.auth.generateKeys(login, pass, ['owner', 'active', 'posting', 'memo']);
        
        that.create(login, keys);
    });
}

Controller.prototype.create = function (login, keys) 
{
            
    request.create(login, keys.memo, keys.posting, keys.active, keys.owner, function (err, res)
    {
        if (err)
        {
            let errBegin = 'Произошла ошибка.\n';
            let errAlert = errBegin+'Откройте консоль, чтобы узнать больше';

            if (err.isApi)
            {
                switch (err.code)
                {
                    case 51501:
                        errAlert = errBegin+'Аккаунт ' + login + ' существует';
                        break;
                    case 51402:
                        errAlert = errBegin+'У аккаунта-регистратора закончились средсва\n'
                                    +'Попробуйте создать аккакунт в другой раз';
                        break;
                }
            }

            alert(errAlert);
            console.error(err);
            console.error(JSON.stringify(err));

            return;
        }

        alert('Аккаунт ' + login + ' создан успешно!');
        console.log(res);
    });
}

function isValPassword(pass)
{
    if (!pass)
    {
        return false;
    }

    if (pass.length < 6)
    {
        return false;
    }

    return true;
}

function isValAccountName(name) {

    if (!name)
    {
        return false;
    } 

    let len = name.length;

    if (len < 3) {
        return false;
    }

    if (len > 25) {
        return false;
    }

    let begin = 0;

    while (true) {
        let end = name.indexOf('.', begin);

        if (end == -1) {
            end = len;
        }

        if (end - begin < 2) {
            return false;
        }

        switch (name[begin]) {
            case 'a':
            case 'b':
            case 'c':
            case 'd':
            case 'e':
            case 'f':
            case 'g':
            case 'h':
            case 'i':
            case 'j':
            case 'k':
            case 'l':
            case 'm':
            case 'n':
            case 'o':
            case 'p':
            case 'q':
            case 'r':
            case 's':
            case 't':
            case 'u':
            case 'v':
            case 'w':
            case 'x':
            case 'y':
            case 'z':
                break;
            default:
                return false;
        }

        switch (name[end - 1]) {
            case 'a':
            case 'b':
            case 'c':
            case 'd':
            case 'e':
            case 'f':
            case 'g':
            case 'h':
            case 'i':
            case 'j':
            case 'k':
            case 'l':
            case 'm':
            case 'n':
            case 'o':
            case 'p':
            case 'q':
            case 'r':
            case 's':
            case 't':
            case 'u':
            case 'v':
            case 'w':
            case 'x':
            case 'y':
            case 'z':
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                break;
            default:
                return false;
        }

        for (let i = begin + 1; i < end - 1; i++) {
            switch (name[i]) {
                case 'a':
                case 'b':
                case 'c':
                case 'd':
                case 'e':
                case 'f':
                case 'g':
                case 'h':
                case 'i':
                case 'j':
                case 'k':
                case 'l':
                case 'm':
                case 'n':
                case 'o':
                case 'p':
                case 'q':
                case 'r':
                case 's':
                case 't':
                case 'u':
                case 'v':
                case 'w':
                case 'x':
                case 'y':
                case 'z':
                case '0':
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':
                case '8':
                case '9':
                case '-':
                    break;
                default:
                    return false;
            }
        }

        if (end == len) {
            break;
        }

        begin = end + 1;
    }
    return true;
}

var module = {
    init: function ()
    {
        return new Controller();
    }
};
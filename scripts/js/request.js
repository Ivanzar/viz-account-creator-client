define(['jquery', 'config'],
        function ($, config)
        {
            return api;
        });

var api = {
    create: function (login, memo, posting, active, owner, cb) {
        $.ajax({
            url: config.server.url+'/api/broadcast/account/create/'+login
                +'?memo='+memo
                +'&active='+active
                +'&posting='+posting
                +'&owner='+owner,
            type: 'POST',
            cache: false,
            success: function (data)
            {
                data = JSON.parse(data);

                if (data.result === 'error')
                {
                    let err = new Error('API err');
                    err.isApi = true;
                    err.code = data.error.code;
                    err.payload = data.error.payload;
                    cb(err, undefined);
                    return;
                }

                cb(undefined, data);
            },
            error: function(err)
            {
                cb(err, undefined);
            }
        });
    }
};
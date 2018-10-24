require.config({
    baseUrl:'scripts/js',
    paths:{
        lib:'../libs',
        jquery:'../libs/jquery.min',
        viz:'../libs/viz'
    },
    shim:{
        viz:{
            exports:'viz'
        }
    }
});

require(['jquery'],
        function ($)
        {
        }
);
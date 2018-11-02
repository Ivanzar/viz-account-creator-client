require.config({
    baseUrl: 'scripts/js',
    paths:{
        lib: '../libs',
        jquery: '../libs/jquery.min'
    },
    shim:{
        viz:{
            exports:'viz'
        }
    }
});

require(['jquery', 'controller'],
        function ($, controller)
        {
            controller.init();
        }
);
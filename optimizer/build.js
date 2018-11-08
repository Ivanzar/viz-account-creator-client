({
    baseUrl: '../scripts/js',
    paths:{
        lib: '../libs',
        jquery: '../libs/jquery.min',
        viz: '../libs/viz.min',
        requireLib: '../libs/require'
    },
    shim:{
        viz:{
            exports:'viz'
        }
    },
    include: 'requireLib',
    name: "../app",
    out: "main-built.js"
})
requirejs.config({
    baseUrl: "../js/lib",

    paths: {
        "qunit": "../../tests/qunit"
    },

    // json.ref, a jQuery plugin does not declare its dependencies via define() call,
    // so its dependencies are declared here.
    // The same works for jquery-ui and jsPlumb.
    shim: {
        "json.ref": ["jquery"],
        "jquery-ui": ["jquery"],
        "jsPlumb": {
            deps: ["jquery", "jquery-ui"],
            exports: "jsPlumb"
        }
    }
});

requirejs(["qunit/qunit.js", "qunit/tests"], function () {});
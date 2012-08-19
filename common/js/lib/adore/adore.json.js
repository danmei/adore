;(function (namespace, undefined) {
    "use strict";

    // We extend the adore namespace with adore.json.
    namespace.json = namespace.json || {};

    var json = namespace.json;

    // We wait for jQuery being ready.
    $(function () {
        // This function validates the current JSON data set and calls the given callback function
        // when finished.
        function validate(onSuccess, onFailure) {
            var environmentId = "json-schema-draft-03",
                jsonUri = "YourJsonInstance",
                schemaUri = "ADOREJsonSchema",
                jsonData = adore.state.jsonData;

            if (window.JSV === undefined) {
                console.log("adore: unable to validate JSON instance. JSV not loaded. Skipping.");

                if ($.isFunction(onSuccess)) {
                    onSuccess();
                }
            } else {
                var environment = JSV.createEnvironment(environmentId);
                var jsonInstance = environment.createInstance(jsonData, jsonUri);
                var jsonSchemaInstance = environment.createSchema(json.schema, null, schemaUri);

                var report = environment.validate(jsonInstance, jsonSchemaInstance);

                if ((report.errors.length > 0) && $.isFunction(onFailure)) {
                        onFailure(report);
                } else if ($.isFunction(onSuccess)) {
                    onSuccess();
                }
            }
        }

        // Sets the JSON data set ADORE should operate on.
        function set(jsonData) {
            namespace.reset();

            var state = adore.state;

            state.jsonData = $.fromJsonRef(jsonData);

            if (!state.jsonData.hasOwnProperty("paths")) {
                state.pathCount = 0;
            } else {
                state.pathCount = state.jsonData.paths.length;
            }
        }

        // Some functions are privileged (public) and get exported here.
        json.validate = validate;
        json.set = set;
    });
}(window.adore = window.adore || {}));;
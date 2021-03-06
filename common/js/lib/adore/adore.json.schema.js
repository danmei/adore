;(function (namespace, undefined) {
    "use strict";

    // We extend the adore namespace with adore.json.schema.
    namespace.json = namespace.json || {};

    var json = namespace.json;

    json.schema = {
        "name": "data",
        "properties":
        {
            "nodes":
            {
                "type": "array",
                "description": "This array holds all the nodes we want to draw.",
                "required": true,
                "items":
                {
                    "type": "object",
                    "description": "A single node object",
                    "id": "nodeType",
                    "properties":
                    {
                        "id":
                        {
                            "type": "string",
                            "required": true,
                            "description": "A unique ID for this node."
                        },
                        "label":
                        {
                            "type": "string",
                            "required": true,
                            "description": "The label with which the node is decorated."
                        },
                        "class":
                        {
                            "type": "string",
                            "required": false,
                            "description": "The CSS class of this node. Used for skinning purposes."
                        },
                        "style":
                        {
                            "type": "array",
                            "required": false,
                            "description": "An array of CSS rules for this node.",
                            "items":
                            {
                                "type": "object",
                                "description": "A single CSS property-value pair.",
                                "properties":
                                {
                                    "property":
                                    {
                                        "type": "string",
                                        "required": true,
                                        "description": "A CSS property name, e.g. background-image"
                                    },
                                    "value":
                                    {
                                        "type": "string",
                                        "required": true,
                                        "description": "A CSS property value e.g. url('image.png')"
                                    }
                                }
                            }
                        },
                        "attributes":
                        {
                            "type": "array",
                            "required": false,
                            "description": "An array of additional attributes for this node.",
                            "items":
                            {
                                "type": "object",
                                "description": "A single attribute name-value pair.",
                                "properties":
                                {
                                    "name":
                                    {
                                        "type": "string",
                                        "required": true,
                                        "description": "The attribute name."
                                    },
                                    "value":
                                    {
                                        "type": "string",
                                        "required": true,
                                        "description": "The attribute value."
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "edges":
            {
                "type": "array",
                "description": "This array holds all the edges we want to draw.",
                "required": true,
                "items":
                {
                    "type": "object",
                    "description": "A single edge.",
                    "id": "edgeType",
                    "properties":
                    {
                        "id":
                        {
                            "type": "string",
                            "required": true,
                            "description": "A unique ID for this edge."
                        },
                        "from": { "$ref": "nodeType" },
                        "to": { "$ref": "nodeType" },
                        "class":
                        {
                            "type": "string",
                            "required": false,
                            "description": "The CSS class of this edge. Used for skinning purposes."
                        },
                        "label":
                        {
                            "type": "string",
                            "required": false,
                            "description": "A label for this edge. Used as an alternative to the CSS class-based skinning."
                        }
                    }
                }
            },
            "paths":
            {
                "type": "array",
                "description": "This array joins edges to paths.",
                "required": true,
                "items":
                {
                    "type": "object",
                    "properties":
                    {
                        "id":
                        {
                            "type": "string",
                            "required": true,
                            "description": "A unique ID for this path."
                        },
                        "edges":
                        {
                            "type": "array",
                            "description": "This array holds all the edges (specifically references to the IDs of the edges) belonging to this path.",
                            "additionalItems": false,
                            "items": { "$ref": "edgeType" }
                        }
                    }
                }
            }
        }
    };
}(window.adore = window.adore || {}));
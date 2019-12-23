(
    function (root, factory)
    {
        if ((typeof define === "function") && !!(define.amd))
        {
            define([], factory);
        }
        else if ((typeof module === "object") && !!(module.exports))
        {
            module.exports = factory();
        }
        else
        {
            root.isNullLike = factory();
        }
    }
)(
    typeof self !== "undefined" ? self : this,
    function ()
    {
        "use strict";
        
        function isNullLike(payload)
        {
            return (payload === null) || (typeof payload === "undefined");
        }

        return isNullLike;
    }
);

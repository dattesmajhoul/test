(function() {
    window.$B = window.Bobcat = {};

    $B.timerStart = new Date().getTime();

    $B.timerCheck = function(label) {
        var ms, msg;
        ms = new Date().getTime() - $B.timerStart;
        msg = "[TIMER] " + label + " in " + ms + "ms";
        (typeof $B.log === "function" ? $B.log(msg) : void 0) || (typeof console !== "undefined" && console !== null ? typeof console.log === "function" ? console.log(msg) : void 0 : void 0);
        return ms;
    };

}).call(this);
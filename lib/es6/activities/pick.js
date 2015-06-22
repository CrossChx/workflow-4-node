var Activity = require("./activity");
var util = require("util");
var Declarator = require("./declarator");
var errors = require("../common/errors");

function Pick() {
    Declarator.call(this);
}

util.inherits(Pick, Declarator);

Pick.prototype.varsDeclared = function (callContext, args) {
    if (args && args.length) {
        this.set("__collectPick", true);
        callContext.schedule(args, "_argsGot");
    }
    else {
        callContext.complete([]);
    }
}

Pick.prototype._argsGot = function (callContext, reason, result) {
    callContext.end(reason, result);
}

module.exports = Pick;
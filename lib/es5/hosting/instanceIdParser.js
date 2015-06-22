"use strict";
var _ = require("lodash");
var is = require("../common/is");
var fast = require("fast.js");
function InstanceIdParser() {
  this._cache = {};
}
InstanceIdParser.prototype.parse = function(path, obj) {
  if (!obj)
    throw new Error("Argument 'obj' expected.");
  if (!_(path).isString())
    throw new TypeError("Argument 'path' is not a string.");
  var parser = this._cache[path];
  if (is.undefined(parser))
    this._cache[path] = parser = this._createParser(path);
  var result = fast.try(function() {
    return parser.call(obj);
  });
  if (!(result instanceof Error))
    return result;
};
InstanceIdParser.prototype._createParser = function(path) {
  if (path.indexOf("this") != 0) {
    if (path[0] === "[") {
      path = "this" + path;
    } else {
      path = "this." + path;
    }
  }
  return new Function("return (" + path + ").toString();");
};
module.exports = InstanceIdParser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc3RhbmNlSWRQYXJzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxBQUFJLEVBQUEsQ0FBQSxDQUFBLEVBQUksQ0FBQSxPQUFNLEFBQUMsQ0FBQyxRQUFPLENBQUMsQ0FBQztBQUN6QixBQUFJLEVBQUEsQ0FBQSxFQUFDLEVBQUksQ0FBQSxPQUFNLEFBQUMsQ0FBQyxjQUFhLENBQUMsQ0FBQztBQUNoQyxBQUFJLEVBQUEsQ0FBQSxJQUFHLEVBQUksQ0FBQSxPQUFNLEFBQUMsQ0FBQyxTQUFRLENBQUMsQ0FBQztBQUU3QixPQUFTLGlCQUFlLENBQUUsQUFBRCxDQUFHO0FBQ3hCLEtBQUcsT0FBTyxFQUFJLEdBQUMsQ0FBQztBQUNwQjtBQUFBLEFBRUEsZUFBZSxVQUFVLE1BQU0sRUFBSSxVQUFVLElBQUcsQ0FBRyxDQUFBLEdBQUUsQ0FBRztBQUNwRCxLQUFJLENBQUMsR0FBRTtBQUFHLFFBQU0sSUFBSSxNQUFJLEFBQUMsQ0FBQywwQkFBeUIsQ0FBQyxDQUFDO0FBQUEsQUFDckQsS0FBSSxDQUFDLENBQUEsQUFBQyxDQUFDLElBQUcsQ0FBQyxTQUFTLEFBQUMsRUFBQztBQUFHLFFBQU0sSUFBSSxVQUFRLEFBQUMsQ0FBQyxrQ0FBaUMsQ0FBQyxDQUFDO0FBQUEsQUFFNUUsSUFBQSxDQUFBLE1BQUssRUFBSSxDQUFBLElBQUcsT0FBTyxDQUFFLElBQUcsQ0FBQyxDQUFDO0FBQzlCLEtBQUksRUFBQyxVQUFVLEFBQUMsQ0FBQyxNQUFLLENBQUM7QUFBRyxPQUFHLE9BQU8sQ0FBRSxJQUFHLENBQUMsRUFBSSxDQUFBLE1BQUssRUFBSSxDQUFBLElBQUcsY0FBYyxBQUFDLENBQUMsSUFBRyxDQUFDLENBQUM7QUFBQSxBQUUzRSxJQUFBLENBQUEsTUFBSyxFQUFJLENBQUEsSUFBRyxJQUFJLEFBQUMsQ0FBQyxTQUFVLEFBQUQsQ0FBRztBQUM5QixTQUFPLENBQUEsTUFBSyxLQUFLLEFBQUMsQ0FBQyxHQUFFLENBQUMsQ0FBQztFQUMzQixDQUFDLENBQUM7QUFFRixLQUFJLENBQUMsQ0FBQyxNQUFLLFdBQWEsTUFBSSxDQUFDO0FBQUcsU0FBTyxPQUFLLENBQUM7QUFBQSxBQUNqRCxDQUFBO0FBRUEsZUFBZSxVQUFVLGNBQWMsRUFBSSxVQUFVLElBQUcsQ0FBRztBQUN2RCxLQUFJLElBQUcsUUFBUSxBQUFDLENBQUMsTUFBSyxDQUFDLENBQUEsRUFBSyxFQUFBLENBQUc7QUFDM0IsT0FBSSxJQUFHLENBQUUsQ0FBQSxDQUFDLElBQU0sSUFBRSxDQUFHO0FBQ2pCLFNBQUcsRUFBSSxDQUFBLE1BQUssRUFBSSxLQUFHLENBQUM7SUFDeEIsS0FDSztBQUNELFNBQUcsRUFBSSxDQUFBLE9BQU0sRUFBSSxLQUFHLENBQUM7SUFDekI7QUFBQSxFQUNKO0FBQUEsQUFFQSxPQUFPLElBQUksU0FBTyxBQUFDLENBQUMsVUFBUyxFQUFJLEtBQUcsQ0FBQSxDQUFJLGdCQUFjLENBQUMsQ0FBQztBQUM1RCxDQUFBO0FBRUEsS0FBSyxRQUFRLEVBQUksaUJBQWUsQ0FBQztBQUNqQyIsImZpbGUiOiJob3N0aW5nL2luc3RhbmNlSWRQYXJzZXIuanMiLCJzb3VyY2VSb290IjoibGliL2VzNiIsInNvdXJjZXNDb250ZW50IjpbInZhciBfID0gcmVxdWlyZShcImxvZGFzaFwiKTtcclxudmFyIGlzID0gcmVxdWlyZShcIi4uL2NvbW1vbi9pc1wiKTtcclxudmFyIGZhc3QgPSByZXF1aXJlKFwiZmFzdC5qc1wiKTtcclxuXHJcbmZ1bmN0aW9uIEluc3RhbmNlSWRQYXJzZXIoKSB7XHJcbiAgICB0aGlzLl9jYWNoZSA9IHt9O1xyXG59XHJcblxyXG5JbnN0YW5jZUlkUGFyc2VyLnByb3RvdHlwZS5wYXJzZSA9IGZ1bmN0aW9uIChwYXRoLCBvYmopIHtcclxuICAgIGlmICghb2JqKSB0aHJvdyBuZXcgRXJyb3IoXCJBcmd1bWVudCAnb2JqJyBleHBlY3RlZC5cIik7XHJcbiAgICBpZiAoIV8ocGF0aCkuaXNTdHJpbmcoKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkFyZ3VtZW50ICdwYXRoJyBpcyBub3QgYSBzdHJpbmcuXCIpO1xyXG5cclxuICAgIHZhciBwYXJzZXIgPSB0aGlzLl9jYWNoZVtwYXRoXTtcclxuICAgIGlmIChpcy51bmRlZmluZWQocGFyc2VyKSkgdGhpcy5fY2FjaGVbcGF0aF0gPSBwYXJzZXIgPSB0aGlzLl9jcmVhdGVQYXJzZXIocGF0aCk7XHJcblxyXG4gICAgdmFyIHJlc3VsdCA9IGZhc3QudHJ5KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gcGFyc2VyLmNhbGwob2JqKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghKHJlc3VsdCBpbnN0YW5jZW9mIEVycm9yKSkgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuSW5zdGFuY2VJZFBhcnNlci5wcm90b3R5cGUuX2NyZWF0ZVBhcnNlciA9IGZ1bmN0aW9uIChwYXRoKSB7XHJcbiAgICBpZiAocGF0aC5pbmRleE9mKFwidGhpc1wiKSAhPSAwKSB7XHJcbiAgICAgICAgaWYgKHBhdGhbMF0gPT09IFwiW1wiKSB7XHJcbiAgICAgICAgICAgIHBhdGggPSBcInRoaXNcIiArIHBhdGg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBwYXRoID0gXCJ0aGlzLlwiICsgcGF0aDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5ldyBGdW5jdGlvbihcInJldHVybiAoXCIgKyBwYXRoICsgXCIpLnRvU3RyaW5nKCk7XCIpO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEluc3RhbmNlSWRQYXJzZXI7XHJcbiJdfQ==
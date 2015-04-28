"use strict";
var StrMap = require("backpack-node").collections.StrMap;
var specStrings = require("../common/specStrings");
var InstIdPaths = require("./instIdPaths");
var fast = require("fast.js");
function KnownInstaStore() {
  this._instances = new StrMap();
}
KnownInstaStore.prototype.add = function(workflowName, insta) {
  var self = this;
  self._instances.add(specStrings.hosting.doubleKeys(workflowName, insta.id), insta);
};
KnownInstaStore.prototype.get = function(workflowName, instanceId) {
  return this._instances.get(specStrings.hosting.doubleKeys(workflowName, instanceId));
};
KnownInstaStore.prototype.exists = function(workflowName, instanceId) {
  return this._instances.containsKey(specStrings.hosting.doubleKeys(workflowName, instanceId));
};
KnownInstaStore.prototype.remove = function(workflowName, instanceId) {
  this._instances.remove(specStrings.hosting.doubleKeys(workflowName, instanceId));
};
module.exports = KnownInstaStore;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtub3duSW5zdGFTdG9yZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLEFBQUksRUFBQSxDQUFBLE1BQUssRUFBSSxDQUFBLE9BQU0sQUFBQyxDQUFDLGVBQWMsQ0FBQyxZQUFZLE9BQU8sQ0FBQztBQUN4RCxBQUFJLEVBQUEsQ0FBQSxXQUFVLEVBQUksQ0FBQSxPQUFNLEFBQUMsQ0FBQyx1QkFBc0IsQ0FBQyxDQUFDO0FBQ2xELEFBQUksRUFBQSxDQUFBLFdBQVUsRUFBSSxDQUFBLE9BQU0sQUFBQyxDQUFDLGVBQWMsQ0FBQyxDQUFDO0FBQzFDLEFBQUksRUFBQSxDQUFBLElBQUcsRUFBSSxDQUFBLE9BQU0sQUFBQyxDQUFDLFNBQVEsQ0FBQyxDQUFDO0FBRTdCLE9BQVMsZ0JBQWMsQ0FBRSxBQUFELENBQUc7QUFDdkIsS0FBRyxXQUFXLEVBQUksSUFBSSxPQUFLLEFBQUMsRUFBQyxDQUFDO0FBQ2xDO0FBQUEsQUFFQSxjQUFjLFVBQVUsSUFBSSxFQUFJLFVBQVUsWUFBVyxDQUFHLENBQUEsS0FBSSxDQUFHO0FBQzNELEFBQUksSUFBQSxDQUFBLElBQUcsRUFBSSxLQUFHLENBQUM7QUFDZixLQUFHLFdBQVcsSUFBSSxBQUFDLENBQUMsV0FBVSxRQUFRLFdBQVcsQUFBQyxDQUFDLFlBQVcsQ0FBRyxDQUFBLEtBQUksR0FBRyxDQUFDLENBQUcsTUFBSSxDQUFDLENBQUM7QUFDdEYsQ0FBQTtBQUVBLGNBQWMsVUFBVSxJQUFJLEVBQUksVUFBVSxZQUFXLENBQUcsQ0FBQSxVQUFTLENBQUc7QUFDaEUsT0FBTyxDQUFBLElBQUcsV0FBVyxJQUFJLEFBQUMsQ0FBQyxXQUFVLFFBQVEsV0FBVyxBQUFDLENBQUMsWUFBVyxDQUFHLFdBQVMsQ0FBQyxDQUFDLENBQUM7QUFDeEYsQ0FBQTtBQUVBLGNBQWMsVUFBVSxPQUFPLEVBQUksVUFBVSxZQUFXLENBQUcsQ0FBQSxVQUFTLENBQUc7QUFDbkUsT0FBTyxDQUFBLElBQUcsV0FBVyxZQUFZLEFBQUMsQ0FBQyxXQUFVLFFBQVEsV0FBVyxBQUFDLENBQUMsWUFBVyxDQUFHLFdBQVMsQ0FBQyxDQUFDLENBQUM7QUFDaEcsQ0FBQTtBQUVBLGNBQWMsVUFBVSxPQUFPLEVBQUksVUFBVSxZQUFXLENBQUcsQ0FBQSxVQUFTLENBQUc7QUFDbkUsS0FBRyxXQUFXLE9BQU8sQUFBQyxDQUFDLFdBQVUsUUFBUSxXQUFXLEFBQUMsQ0FBQyxZQUFXLENBQUcsV0FBUyxDQUFDLENBQUMsQ0FBQztBQUNwRixDQUFBO0FBRUEsS0FBSyxRQUFRLEVBQUksZ0JBQWMsQ0FBQztBQUNoQyIsImZpbGUiOiJob3N0aW5nL2tub3duSW5zdGFTdG9yZS5qcyIsInNvdXJjZVJvb3QiOiJDOi9HSVQvd29ya2Zsb3ctNC1ub2RlL2xpYi8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgU3RyTWFwID0gcmVxdWlyZShcImJhY2twYWNrLW5vZGVcIikuY29sbGVjdGlvbnMuU3RyTWFwO1xyXG52YXIgc3BlY1N0cmluZ3MgPSByZXF1aXJlKFwiLi4vY29tbW9uL3NwZWNTdHJpbmdzXCIpO1xyXG52YXIgSW5zdElkUGF0aHMgPSByZXF1aXJlKFwiLi9pbnN0SWRQYXRoc1wiKTtcclxudmFyIGZhc3QgPSByZXF1aXJlKFwiZmFzdC5qc1wiKTtcclxuXHJcbmZ1bmN0aW9uIEtub3duSW5zdGFTdG9yZSgpIHtcclxuICAgIHRoaXMuX2luc3RhbmNlcyA9IG5ldyBTdHJNYXAoKTtcclxufVxyXG5cclxuS25vd25JbnN0YVN0b3JlLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAod29ya2Zsb3dOYW1lLCBpbnN0YSkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgc2VsZi5faW5zdGFuY2VzLmFkZChzcGVjU3RyaW5ncy5ob3N0aW5nLmRvdWJsZUtleXMod29ya2Zsb3dOYW1lLCBpbnN0YS5pZCksIGluc3RhKTtcclxufVxyXG5cclxuS25vd25JbnN0YVN0b3JlLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAod29ya2Zsb3dOYW1lLCBpbnN0YW5jZUlkKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faW5zdGFuY2VzLmdldChzcGVjU3RyaW5ncy5ob3N0aW5nLmRvdWJsZUtleXMod29ya2Zsb3dOYW1lLCBpbnN0YW5jZUlkKSk7XHJcbn1cclxuXHJcbktub3duSW5zdGFTdG9yZS5wcm90b3R5cGUuZXhpc3RzID0gZnVuY3Rpb24gKHdvcmtmbG93TmFtZSwgaW5zdGFuY2VJZCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlcy5jb250YWluc0tleShzcGVjU3RyaW5ncy5ob3N0aW5nLmRvdWJsZUtleXMod29ya2Zsb3dOYW1lLCBpbnN0YW5jZUlkKSk7XHJcbn1cclxuXHJcbktub3duSW5zdGFTdG9yZS5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKHdvcmtmbG93TmFtZSwgaW5zdGFuY2VJZCkge1xyXG4gICAgdGhpcy5faW5zdGFuY2VzLnJlbW92ZShzcGVjU3RyaW5ncy5ob3N0aW5nLmRvdWJsZUtleXMod29ya2Zsb3dOYW1lLCBpbnN0YW5jZUlkKSk7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gS25vd25JbnN0YVN0b3JlO1xyXG4iXX0=
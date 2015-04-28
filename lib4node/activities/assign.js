"use strict";
var Activity = require("./activity");
var util = require("util");
function Assign() {
  Activity.call(this);
  this.value = null;
  this.to = "";
}
util.inherits(Assign, Activity);
Assign.prototype.run = function(callContext, args) {
  if (this.get("to")) {
    callContext.schedule(this.get("value"), "_valueGot");
  } else {
    callContext.complete();
  }
};
Assign.prototype._valueGot = function(callContext, reason, result) {
  if (reason === Activity.states.complete) {
    this.set(this.get("to"), result);
  }
  callContext.end(reason, result);
};
module.exports = Assign;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2lnbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLEFBQUksRUFBQSxDQUFBLFFBQU8sRUFBSSxDQUFBLE9BQU0sQUFBQyxDQUFDLFlBQVcsQ0FBQyxDQUFDO0FBQ3BDLEFBQUksRUFBQSxDQUFBLElBQUcsRUFBSSxDQUFBLE9BQU0sQUFBQyxDQUFDLE1BQUssQ0FBQyxDQUFDO0FBRTFCLE9BQVMsT0FBSyxDQUFFLEFBQUQsQ0FBRztBQUNkLFNBQU8sS0FBSyxBQUFDLENBQUMsSUFBRyxDQUFDLENBQUM7QUFDbkIsS0FBRyxNQUFNLEVBQUksS0FBRyxDQUFDO0FBQ2pCLEtBQUcsR0FBRyxFQUFJLEdBQUMsQ0FBQztBQUNoQjtBQUFBLEFBRUEsR0FBRyxTQUFTLEFBQUMsQ0FBQyxNQUFLLENBQUcsU0FBTyxDQUFDLENBQUM7QUFFL0IsS0FBSyxVQUFVLElBQUksRUFBSSxVQUFVLFdBQVUsQ0FBRyxDQUFBLElBQUcsQ0FBRztBQUNoRCxLQUFJLElBQUcsSUFBSSxBQUFDLENBQUMsSUFBRyxDQUFDLENBQUc7QUFDaEIsY0FBVSxTQUFTLEFBQUMsQ0FBQyxJQUFHLElBQUksQUFBQyxDQUFDLE9BQU0sQ0FBQyxDQUFHLFlBQVUsQ0FBQyxDQUFDO0VBQ3hELEtBQ0s7QUFDRCxjQUFVLFNBQVMsQUFBQyxFQUFDLENBQUM7RUFDMUI7QUFBQSxBQUNKLENBQUE7QUFFQSxLQUFLLFVBQVUsVUFBVSxFQUFJLFVBQVUsV0FBVSxDQUFHLENBQUEsTUFBSyxDQUFHLENBQUEsTUFBSyxDQUFHO0FBQ2hFLEtBQUksTUFBSyxJQUFNLENBQUEsUUFBTyxPQUFPLFNBQVMsQ0FBRztBQUNyQyxPQUFHLElBQUksQUFBQyxDQUFDLElBQUcsSUFBSSxBQUFDLENBQUMsSUFBRyxDQUFDLENBQUcsT0FBSyxDQUFDLENBQUM7RUFDcEM7QUFBQSxBQUNBLFlBQVUsSUFBSSxBQUFDLENBQUMsTUFBSyxDQUFHLE9BQUssQ0FBQyxDQUFDO0FBQ25DLENBQUE7QUFFQSxLQUFLLFFBQVEsRUFBSSxPQUFLLENBQUM7QUFBQSIsImZpbGUiOiJhY3Rpdml0aWVzL2Fzc2lnbi5qcyIsInNvdXJjZVJvb3QiOiJDOi9HSVQvd29ya2Zsb3ctNC1ub2RlL2xpYi8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgQWN0aXZpdHkgPSByZXF1aXJlKFwiLi9hY3Rpdml0eVwiKTtcclxudmFyIHV0aWwgPSByZXF1aXJlKFwidXRpbFwiKTtcclxuXHJcbmZ1bmN0aW9uIEFzc2lnbigpIHtcclxuICAgIEFjdGl2aXR5LmNhbGwodGhpcyk7XHJcbiAgICB0aGlzLnZhbHVlID0gbnVsbDtcclxuICAgIHRoaXMudG8gPSBcIlwiO1xyXG59XHJcblxyXG51dGlsLmluaGVyaXRzKEFzc2lnbiwgQWN0aXZpdHkpO1xyXG5cclxuQXNzaWduLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoY2FsbENvbnRleHQsIGFyZ3MpIHtcclxuICAgIGlmICh0aGlzLmdldChcInRvXCIpKSB7XHJcbiAgICAgICAgY2FsbENvbnRleHQuc2NoZWR1bGUodGhpcy5nZXQoXCJ2YWx1ZVwiKSwgXCJfdmFsdWVHb3RcIik7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBjYWxsQ29udGV4dC5jb21wbGV0ZSgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5Bc3NpZ24ucHJvdG90eXBlLl92YWx1ZUdvdCA9IGZ1bmN0aW9uIChjYWxsQ29udGV4dCwgcmVhc29uLCByZXN1bHQpIHtcclxuICAgIGlmIChyZWFzb24gPT09IEFjdGl2aXR5LnN0YXRlcy5jb21wbGV0ZSkge1xyXG4gICAgICAgIHRoaXMuc2V0KHRoaXMuZ2V0KFwidG9cIiksIHJlc3VsdCk7XHJcbiAgICB9XHJcbiAgICBjYWxsQ29udGV4dC5lbmQocmVhc29uLCByZXN1bHQpO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEFzc2lnbjsiXX0=
({
   createRecord : function (component, event, helper) {
    var navEvt = $A.get("e.force:navigateToSObject");
    var objId = component.get("v.objId");
    navEvt.setParams({
      "recordId": objId
    });
    navEvt.fire();
	}
})

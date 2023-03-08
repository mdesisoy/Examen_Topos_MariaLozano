({
    myAction : function(component, event, helper) {

    },

    showLead : function(component, event, helper) {
        var score = event.getParam("score");
        component.set("v.score", score);
        var list = component.get("v.leadList")
        list.push({score : score});
        component.set("v.leadList", list );
    },
})

({
    myAction : function(component, event, helper) {

    },

    clickStart : function(component, event, helper) {
        component.set("v.score", 0)
        var action = component.get("c.getRandomNumber");
        action.setParams({
            "min": 1,
            "max": 8
        });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {

                var numAleatorio = response.getReturnValue();
                
                var randomEvent = $A.get("e.c:random");
                randomEvent.setParams({"random": numAleatorio});
                randomEvent.fire();
                console.log(numAleatorio);
            }
        });
        $A.enqueueAction(action);
    },

    clickContinue: function(component, event, helper) {
        var action = component.get("c.getRandomNumber");
        action.setParams({
            "min": 1,
            "max": 8
        });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {

                var numAleatorio = response.getReturnValue();
                
                var randomEvent = $A.get("e.c:random");
                console.log(event.getParam("pulsadoBien"));
                if (event.getParam("pulsadoBien")) {
                    component.set("v.score", component.get("v.score")+1);
                    console.log("score", component.get("v.score"));
                }
                else{
                    component.set("v.score", 0);
                    console.log("score", component.get("v.score"));
                }
                randomEvent.setParams({"random": numAleatorio});
                randomEvent.fire();
                console.log(numAleatorio);
            }
        });
        $A.enqueueAction(action);
    },
    alertscore: function(component, event, helper) {    
        alert(component.get("v.score"));
    }
})

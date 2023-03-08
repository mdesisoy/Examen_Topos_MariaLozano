({
    myAction : function(component, event, helper) {

    },

    checkMonigote: function(component, event, helper) {
        component.set("v.color", "azul");
        component.set("v.random", event.getParam("random"));
        if (event.getParam("random") == component.get("v.posicion")) {
            component.set("v.color", "rojo");
        }
    },
    
    click: function(component, event, helper) {
        var randomEvent = $A.get("e.c:pulsadoBien");
        if (component.get("v.random") == component.get("v.posicion")) {
            randomEvent.setParams({"pulsadoBien": true});
            randomEvent.fire();
            console.log(true);
        }else{
            randomEvent.setParams({"pulsadoBien": false});
            randomEvent.fire();
            console.log(false);
        }
    }
})

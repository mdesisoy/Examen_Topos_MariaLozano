({
    myAction : function(component, event, helper) {

    },

    //funcion checkear que comprueba si la posicion es igual al numero aleatorio
    checkMonigote: function(component, event, helper) {
        component.set("v.color", "rosa");
        component.set("v.random", event.getParam("random"));
        //si coincide el numero aleatorio con la posicion entonces se pone el color verde
        if (event.getParam("random") == component.get("v.posicion")) {
            component.set("v.color", "verde");
        }
    },

    //funcion click que manda el evento de si está correcto y así seguir el juego
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

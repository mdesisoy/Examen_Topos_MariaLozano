({
    myAction : function(component, event, helper) {

    },
    //funcion iniciar juego que llamar a método apex y pone el score a 0
    clickStart : function(component, event, helper) {
        component.set("v.score", 0)
        var action = component.get("c.getRandomNumber");
        //necesito settear los parametros del método antes
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

    //funcion seguir si el boton que ha pulsado es el correcto y para sumar el score
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
                else{ //si está mal se pone a 0
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

    //funcion finalizar muestra el contenido de score
    alertscore: function(component, event, helper) {    
        var score = component.get("v.score");
        alert("Tu score es: " + score);
    }
})

({
    myAction : function(component, event, helper) {

    },
    //funcion iniciar juego que llamar a método apex y pone el score a 0
    iniciarJuego : function(component, event, helper) {
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
    sigo: function(component, event, helper) {
        var action = component.get("c.getRandomNumber");
        var lastNumber = component.get("v.lastNumber");
        // console.log("lastNumber: " +lastNumber)
        action.setParams({
            "min": 1,
            "max": 8,
            "lastNumber": lastNumber
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
                randomEvent.setParams({"random": numAleatorio, "lastNumber": lastNumber});
                component.set("v.lastNumber", lastNumber);
                randomEvent.fire();
                console.log(numAleatorio);
            }
        });
        $A.enqueueAction(action);
    },

    //funcion finalizar muestra el contenido de score
    terminarJuego: function(component, event, helper) {    
        var score = component.get("v.score");
        alert("Tu score es: " + score);

        //disparar evento pasarTabla
        var action = $A.get("e.c:pasarTabla");
        // recuperamos los valores de los campos
        var score  = component.find("score").getElement().value;
        // asignamos los valores a los parámetros del evento
        action.setParams({
            "score": score
        });
        //disparamos el evento
        action.fire();
    }
})

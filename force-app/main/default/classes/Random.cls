public with sharing class Random {
    
    //método que devuelve un número aleatorio entre un minimo y un maximo
    // @AuraEnabled
    // public static Integer getRandomNumber(Integer min, Integer max) {
    //     return  Integer.valueOf(Math.random() * (max - min + 1)) + min;
    // }

    //método que devuelve un número aleatorio entre un minimo y un maximo y no puede repetir el numero anterior
    @AuraEnabled
    public static Integer getRandomNumber(Integer min, Integer max, Integer lastNumber) {
        Integer randomNumber = Integer.valueOf(Math.random() * (max - min + 1)) + min;
        if (randomNumber == lastNumber) {
            return getRandomNumber(min, max, lastNumber);
        } else {
            return randomNumber;
        }
    }
} 
    
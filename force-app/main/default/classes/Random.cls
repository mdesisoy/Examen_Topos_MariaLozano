public with sharing class Random {
    
    //método que devuelve un número aleatorio entre un minimo y un maximo
    @AuraEnabled
    public static Integer getRandomNumber(Integer min, Integer max) {
        return  Integer.valueOf(Math.random() * (max - min + 1)) + min;
    }
} 
    
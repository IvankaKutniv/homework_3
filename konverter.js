"use strict"


//ДЗ 5. Конвертер
var unitOfMeasure = 'Кілометри';
var amount = 10;
switch (unitOfMeasure) {
    case 'Кілометри':
        console.log(amount + "км – це " + amount + ",000м");
        break;
    case 'Години':
        console.log(amount + "год. – це " + amount * 60 + "хв.");
        break;
    case 'Кілограми':
        console.log(amount + "кг – це " + amount + ",000г");
        break;
    default:
        console.log('Такої одиниці виміру не існує');
}
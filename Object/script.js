"use strict"
// ДЗ 1: Створення власного об'єкта

/*var pet1 = {
    name: 'Кері',
    sName: 'Шмері',
    kindOfPet: 'Dog',
    age: '8',
    color: {
        mainColor: 'white',
        anotherColor: 'brown'
    },
    mama: 'Ivanka'
}
console.log('Собака-облизяка ' + pet1.name + ' ' + pet1.sName + ', ' + pet1.age + '-річного віку, ' + pet1.color.mainColor + '-' +  pet1.color.anotherColor + ' кольору' );
// Правильна інформація про об'єкт
let getInfo = function()
 {    for (let key in pet1) {
        console.log(key + ': ' + pet1[key]);
    }
}
console.log('\nУся інформація про домашнього улюбленця:');
getInfo();

// Додаємо нову властивість до об'єкта
pet1.isOnlyPet = false;

// Виводимо всі властивості, включаючи щойно додану
console.log('\nОновлена інформація про домашнього улюбленця:');
getInfo();*/

// ДЗ 2: Сума вартості послуг

/*var services = {
    "стрижка": "300 грн",
    "гоління": "200 грн",
    "Миття голови": "100 грн"
};

// Метод для обчислення загальної вартості наданих послуг
services.price = function() {
    var total = 0;
    for (var service in services) {
        if (typeof services[service] === 'string') {
            var price = parseInt(services[service]);
            if (!isNaN(price)) {
                total += price;
            }
        }
    }
    return total + ' грн';
};

// Метод для знаходження мінімальної ціни
services.minPrice = function() {
    var min = Infinity;
    for (var service in services) {
        if (typeof services[service] === 'string') {
            var price = parseInt(services[service]);
            if (!isNaN(price) && price < min) {
                min = price;
            }
        }
    }
    return min + ' грн';
};

// Метод для знаходження максимальної ціни
services.maxPrice = function() {
    var max = 0;
    for (var service in this) {
        if (typeof services[service] === 'string') {
            var price = parseInt(services[service]);
            if (!isNaN(price) && price > max) {
                max = price;
            }
        }
    }
    return max + ' грн';
};

console.log("Загальна вартість послуг: " + services.price());
console.log("Мінімальна вартість послуг: " + services.minPrice());
console.log("Максимальна вартість послуг: " + services.maxPrice());

// Додавання нової послуги
services['Укладка волосся'] = "200 грн";

console.log("\nЗагальна вартість послуг: " + services.price());
console.log("Мінімальна вартість послуг: " + services.minPrice());
console.log("Максимальна вартість послуг: " + services.maxPrice());*/

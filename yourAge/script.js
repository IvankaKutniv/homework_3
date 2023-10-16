"use strict"


// ДЗ 4. Скільки тобі років ?
let age = prompt('Вкажіть ваш вік', '18');
if (age === '') {
    console.log('На жаль, ви не вказали вашого віку, а просто натиснули ОК. Будь ласка, спробуйте ще раз');
} else if (age === null) {
    console.log('На жаль, ви не вказали вашого віку, а просто натиснули Cancel. Будь ласка, спробуйте ще раз');
} else if (isNaN(age)) {
    console.log('Схоже, ви використали літери. Будь ласка, вкажіть ваш вік, використовуючи цифри');
} else if (age < 0) {
    console.log('Ви з майбутнього? Будь ласка, перевірте ще раз і введіть вірне значення');
} else {
    var entered = age % 10;
    if (entered === 0 || (entered >= 5 && entered <= 9)) {
        console.log("Вам" + " " + age + " " + "років");
    } else if (entered >= 2 && entered <=4) {
        console.log("Вам" + " " + age + " " + "роки");
    } else {
        console.log("Вам" + " " + age + " " + "рік");
    }
}
"use strict";
//ДЗ 1: Реалізація функції isNaN

/*function isNaN(num) {
    console.log(num);
    let result = num * 1;
    if (result === num) {
        console.log('false');
    } else {
        console.log('true');
    }
}
isNaN('hello');*/


//ДЗ 2: Реалізація функцій padEnd та padStart

/*function pad(myRow, sign, amount) {
            if (!isNaN(myRow)) {
            console.log(sign.repeat(amount) + myRow);
        } else {
            console.log(myRow + sign.repeat(amount));
        }
}
pad('123.45', '$', 2);*/


//ДЗ 3: Перевірка теорії ймовірності

/*function checkProbabilityTheory(count) {
    let min = 100;
    let max = 1000;
    let paired = 0;
    let unpaired = 0;
    for (let i = 0; i < count; i++) {
        let rnd = Math.random() * (max - min) + min;
        rnd = Math.ceil(rnd);
        console.log(rnd);
        if (rnd % 2 === 0) {
            paired += 1;
        } else {
            unpaired += 1;
        }
    }
    console.log('Кількість згенерованих чисел: ' + count);
    console.log('Парних чисел: ' + paired);
    console.log('Непарних чисел: ' + unpaired);
    let countPaired = (paired / count) * 100;
    let countUnpaired = (unpaired / count) * 100;
    console.log('Відсоток парних до непарних: ' + countPaired + '%' + ' / ' + countUnpaired + '%');
}
checkProbabilityTheory(10);*/



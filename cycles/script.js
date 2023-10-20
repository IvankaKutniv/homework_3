//ДЗ 1: Намалювати прямокутний трикутник із зірочок
//Перший спосіб

/*function drawTriangle(rows, sign) {
    var draw = sign;
    var i = 0;
    for (; ;) {
        if (i === rows) {
            break;
        }
        console.log(draw);
        draw += sign;
        i++;
    }
}
console.log(drawTriangle(5, '*'));*/

//Другий спосіб

/*function drawTriangle(rows, sign) {
    var draw = sign;
    for (var j = 1; j <= rows; j++) {
        console.log(draw)
        draw += sign
    }
}
console.log(drawTriangle(5, '*'));*/


// ДЗ 2: Сума чисел, які не кратні 3

/*for (let i = 1; i <= 100; i++){
    if (i % 3 === 0) continue;
    for (let j = 1; j <= 100; j++){
        if (j % 3 !== 0)
        console.log("Результат додавання " + i + " + " + j + " = " + (i + j));
    }
    console.log("----------------------------")
}*/

// ДЗ 3: Зведення в ступінь

/*function pow(x, y) {
    let result = x;
    for (let i = 1; i < y; i++) {
        result *= x;
    }
    return result;
}
console.log(pow(3,3))*/

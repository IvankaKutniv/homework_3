//ДЗ 1: Намалювати прямокутний трикутник із зірочок
//Перший спосіб

/*let rows = 5;
let draw = "*";
for (let n = 1; n <= rows; ++n) {
    console.log(draw);
    draw += "*"
}*/

//Другий спосіб

/*function drawTriangle(star) {
    var draw = "";
    for (var j = 1; j <= star; j++) {
        console.log(draw)
        draw += "*"
    }
    return draw;
}
console.log(drawTriangle(5));*/


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



// 1. Дан список тегов  ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1',  'p', 'h1', 'ol’, ‘br’]. Вам нужно посчитать каких тегов сколько штук.
// Обязательное условие:
// - Конечный результат должен вывестись как объект {}, где ключ - это сам тег, а значение - это количество сколько раз этот тег встречается в массиве.


var tagList = {
    li: 3,
    div: 3,
    p: 3,
    h1: 4,
    ol: 1,
    br: 1
}

for (var key in tagList){
    var howMany = tagList[key]
    console.log(`${key} Количество: ${howMany}`)
}



// 2.  Дан массив [«name», «John», «lastname», «Black», «age», «23»]. Из этого массива нужно получить объект, где ключом будет name,
// а значение John и так с остальными данными. Все нужно сделать через цикл


var fullName = ['name', 'John', 'lastname', 'Black', 'age', 23]

for (var key2 in fullName){
    var value1 = fullName[0]
    var value2 = fullName[1]
    var value3 = fullName[2]
    var value4 = fullName[3]
    var value5 = fullName[4]
    var value6 = fullName[5]
    console.log(`${value1} ${value2} ${value3} ${value4} ${value5} ${value6}`)
}


// 3. Напишите функцию (любой из видов пройденных на уроке) , которая принимает значение параметра и возвращает
// его тип данных в консоли.
//     Пример: getDataType(false) => boolean ,    getDataType('hello world!') => string, getDataType(42) => number


var getDataType = function (type1){
    console.log(type1)
}
getDataType('boolean')


function printDataType(type){
    console.log(type)
}
printDataType(prompt())

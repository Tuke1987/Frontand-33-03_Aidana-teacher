// && ||

// var inn = '121212232323233'
// var firstNum = number(inn[0])
// if (firstNum === 1 || firstNum === 2 || firstNum === 0) && inn.length === 14){
//     console.log('good')
// }else{
//     console.error('error')
// }


// switch.case
var amount = prompt("Enter amount")
var currency = prompt( "Enter currency")

var convert = 0

switch (currency){
    case 'USD':
        convert = amount / 89
        break
    case 'EUR':
        convert = amount /102
        break
    case 'RUB':
        convert = amount / 1
        break
    default:
        console.warn('INVALID CURRENCY')
}
console.log(`${convert} ${currency}`) //шаблонные строки

// if (carrensy === 'USD'){
//     convert = amount / 89
// } else if
// (carrensy === 'EUR'){
//     convert = amount / 102
// }else if
// (carrensy === 'RUB'){
//     convert = amount / 1
// }else {
//     alert("Error")
// }

// number: infinity, Nun
// console.log(1232 / 0)
// console.log(Infinity / Infinity)
// console.log(typeof NaN)


// 4 - null
// 5 -undefined
// let undef
// console.log(undef)
//
// var addres = null
// console.log(addres)
//
// // 6 - object
//
// var coursGeeks = {
//     name: "Geeks",
//     foundingYear: 2018,
//     direction: ["Frontand", "backand", "ex/ux", "ios" ],
//     address:{
//         streat: "ibraimova 103",
//         building:[2, 4],
//         number : null
//     },
//     branches : 3,
//     tagline: "Быть одержимым целем"
// }
//
// console.log(coursGeeks.tagline)
// //Добавления
// coursGeeks.students = 1000
// console.log(coursGeeks)
// //Удаления
// delete coursGeeks.address.number
// //Изменение
// coursGeeks['branches'] = 4
// console.log(coursGeeks)
// //методы обьекта
//
// console.log(Object.keys(coursGeeks))
// console.log(Object.values(coursGeeks))
// console.log(Object.entries(coursGeeks))
// console.log(coursGeeks.hasOwnProperty('name'))
//
//
// //array
// var array = ['f', 't', 'p', 'qwerty']
// console.log(array[3][0])
// console.log(array.length - 1)
//
// //цикл for i++
// var arrayNum = [123, 234, 34, 34, 54, 22, 56, 45, 53, 23, 55, 456]
// for(var i = 0; i < arrayNum.length; i++){
//     var number = String(arrayNum[i])
//     if(number[0] === '1' || number[0] === '2' || number === '5'){
//         console.log(arrayNum[i])
//     }
// }

// var i = 0
//Переменная короткого обновления
// i = i + 1
// i += 1
// i++


// var arr = ['a', 'b', 'c', 'a', 'b', 'c', 'a', 'b', 'c', 'a', 'b', 'c'];
// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }


// var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for (var i = 0; i < number.length; i++) {
//     console.log(number[i])
// }


// var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for (var i = 0; i < number.length; i++) {
//     var Queshens = Number; prompt('Enter the number from 1 to 10')
// }




var input = prompt('Введите число:')
var number = Number(input)

if (!isNaN(number) && number >= 0 && number <= 10) {
    for (var i = 1; i <= 10; i++) {
        console.log(`${number} * ${i} = ${i*number}`);
    }
}
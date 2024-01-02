// filter
var fruits = ['apple', 'pineapple', 'banana', 'orange', 'wotarmalon']
var filteredFruits = fruits.filter((fruit) => fruit.length > 6)
console.log(filteredFruits)

var users = [
    {name: 'Adam', age: 34},
    {name: 'john', age: 12},
    {name: 'Oliver', age: 23},
    {name: 'Allen', age: 17},
    {name: 'William', age: 18},
    {name: 'Jack', age: 20},
]

var resultLetter = users.filter((user)=> user.name.includes('l'))
console.log(resultLetter)
var resultAge = users.filter((user)=> user.age >= 18)

// map
var arraySom = [23000, 47000, 567000, 1000000]
var arrayDollars = arraySom.map((num)=> num / 89)
var fix = arrayDollars.map((dollar)=>Math.round(dollar))
console.log(arrayDollars)
console.log(fix)

// sort
var sortDollars = fix.sort((n1, n2)=> n1 - n2)
console.log(sortDollars)

// forEach
var numbers = [1,2,3,4,5]
numbers.forEach((num) => console.log(num * 2))

// find
// var searchUser = prompt('Кого ищете?').trim().toLowerCase()
//
// var users2 = [
//     {name: 'Adam', age: 34, description: 'Меня зовут Адам, мне 34 года, я увлекаюсь шахаматами и искусственным интелектом'},
//     {name: 'john', age: 12},
//     {name: 'Oliver', age: 23},
//     {name: 'Allen', age: 17},
//     {name: 'William', age: 18},
//     {name: 'Jack', age: 20},
// ]
// var user = users2.find((user)=>user.name.toLowerCase() === searchUser)
// console.log(user)

// other

var fruits2 = ['apple', 'pineapple', 'banana', 'orange', 'wotarmalon']
fruits2.push('123')
var fruitsUnshift = fruits2.unshift('345')
console.log(fruitsUnshift)

// pop
var element = fruits2.pop()
console.log(element)

//shift
var firstElem = fruits2.shift()
console.log(firstElem)

// console.log(name)
// console.log(hello)
// es6+
// var name = 'ai'  //hoisting - всплытие
//
// let hello = 'hi'
// hello = 90
// const text = 'text'
// // text = 56
// const array = []
// array.push(0)
// console.log(array)

function getAll(...nums) {
    let sum = nums.reduce((a,b)=> a+=b)
}
getAll(4,5,6)

// spread-operators
const numbers1 = [1,2,3,4,5,6,7,8,9,90,90,56,45,37,23]
const [n1, n2, n3, n4, n5, n6, n7, n8, n9, ...others] = numbers1
console.log(n1, n2, n3, n4, n5, n6, n7, n8, n9, others)

const num1 = [1,2,3]
const num2 = [1,3,3]
const allNums = [...num1, ...num2]
console.log(allNums)

function convertUSD(usd, ...som){
    console.log(usd, som)
    return som.map((i) => i /usd)
}

console.log(convertUSD(89, 56789000000, 908888))
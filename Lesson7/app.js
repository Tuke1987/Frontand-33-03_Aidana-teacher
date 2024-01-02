// function getSquareNums(arr) {
//     const newArray = []
//     for (let i =0; i < arr.length; i++){
//         newArray.push(arr[i] ** 2)
//     }
//     return newArray
// }
//
// console.log(getSquareNums([2,3,4,5,7]))
//
// function getDivideNums (arr){
//     const newArray = []
//     for (let i =0; i < arr.length; i++){
//         newArray.push(arr[i] / 2)
//     }
//     return newArray
// }
//
// console.log(getDivideNums([4,6,8,9,1]))
//
// //callback
// function doSomeMath (array, todo) {
//     const newArray = []
//     for (let i = 0; i < array.length; i++){
//         newArray.push(todo(array[i]))
//     }
//     return newArray
// }
//
// function sum(num){
//     return num + 2
// }
//
// function divide(num){
//     return num / 2
// }
//
// console.log(doSomeMath([2,3,4,5,6], sum))
// console.log(doSomeMath([2,3,4,5,6], divide))

//Drag and Drop

const dragAndDrop = () => {
    const card = document.querySelector('.list__card')
    const cells = document.querySelectorAll('.list__cell')

    const dragstart = function (){
        setTimeout(()=>{
            this.classList.add('hide')
        }, 0)
        // console.log('start')
    }


    const dragOver = function (e){
        e.preventDefault()
        console.log('over')
    }


    const dragend = function (){
        this.classList.remove('hide')
    }


    const dragLeave = function (){
        // console.log('leave')
        this.classList.remove('hovered')
    }


    const dragEnter = function (e){
        // console.log('enter')
        e.preventDefault()
        this.classList.add('hovered')
    }


    const dragDrop = function (){
        this.append(card)

    }


    cells.forEach((i)=> {
        i.addEventListener('dragover', dragOver)
        i.addEventListener('dragleave', dragLeave)
        i.addEventListener('dragenter', dragEnter)
        i.addEventListener('drop', dragDrop)
    })

    card.addEventListener('dragstart', dragstart)
    card.addEventListener('dragend', dragend)

}

dragAndDrop()

//ООП

const animal = {
    name: 'Animal',
    age: 6,
    hasTail: true,
    color: 'black',
}
console.log(animal)

//class
class Animal {
    constructor(option) {
        this.name = option.name
        this.age = option.age
        this.hasTail = option.hasTail
        this.color = option.color
        this.voice = option.voice
    }
}

const dog = new Animal({
    name: 'Шарик',
    age: 3,
    hasTail: false,
    color: 'brown'
})
console.log(dog)

class Pigs extends Animal {
    constructor(options) {
        super(options);
        this.hooves = options.hooves
        this.fat = options.fat
    }
}

const peppa = new Pigs({
    name: 'Peppa',
    age: 4,
    color: 'pink',
    hasTail: true,
    fat: true,
    hooves: true,
    voice: 'хрю-хрю'
})
console.log(peppa)
